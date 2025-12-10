import fs from "node:fs";
import path from "node:path";
import * as parser from "@babel/parser";
import traverseImport from "@babel/traverse";
import generateImport from "@babel/generator";
import * as t from "@babel/types";

const traverse = traverseImport.default ?? traverseImport;
const generate = generateImport.default ?? generateImport;

const FROM = "es";
const TO = "it";

// ✅ SOLO viral-text
const ROOT = path.resolve("src/lib/prompts/viral-text");

// LibreTranslate local
const LT_BASE = process.env.LT_URL || "http://127.0.0.1:5000";
const LT_TRANSLATE = `${LT_BASE}/translate`;

const CACHE_DIR = path.resolve(".translate_cache");
const CACHE_FILE = path.join(CACHE_DIR, `cache_${FROM}_${TO}.json`);

const TRANSLATABLE_KEYS = new Set(["title", "summary", "prompt"]);

// placeholders / variables / tags / urls
const PH_REGEX =
  /(\{\{.*?\}\}|\$\{.*?\}|\[[^\]]+\]|\{[0-9A-Za-z_.:-]+\}|%[sdif]|<\/?[A-Za-z0-9:_-]+>|https?:\/\/\S+)/g;

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function loadCache() {
  ensureDir(CACHE_DIR);
  if (!fs.existsSync(CACHE_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  ensureDir(CACHE_DIR);
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), "utf8");
}

function protectPlaceholders(text) {
  const placeholders = [];
  const protectedText = text.replace(PH_REGEX, (m) => {
    placeholders.push(m);
    return `__PH${placeholders.length - 1}__`;
  });
  return { protectedText, placeholders };
}

function restorePlaceholders(text, placeholders) {
  let out = text;
  placeholders.forEach((ph, i) => {
    out = out.replaceAll(`__PH${i}__`, ph);
  });
  return out;
}

function walkFiles(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...walkFiles(p));
    else if (p.endsWith(".js") || p.endsWith(".ts")) out.push(p);
  }
  return out;
}

async function translateBatchLibre(texts) {
  if (!texts.length) return [];

  const res = await fetch(LT_TRANSLATE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: texts,
      source: FROM,
      target: TO,
      format: "text",
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`LibreTranslate error: HTTP ${res.status} ${body}`);
  }

  const data = await res.json();

  if (Array.isArray(data)) return data.map((x) => x?.translatedText ?? "");
  if (Array.isArray(data?.translatedText)) return data.translatedText;
  if (typeof data?.translatedText === "string") return [data.translatedText];

  return texts.map(() => "");
}

function collectConstAreaCategory(ast) {
  const hits = [];
  traverse(ast, {
    VariableDeclarator(p) {
      if (!t.isIdentifier(p.node.id)) return;
      const name = p.node.id.name;
      if (name !== "AREA" && name !== "CATEGORY") return;
      if (!t.isStringLiteral(p.node.init)) return;
      hits.push({ kind: "const", name, path: p, text: p.node.init.value });
    },
  });
  return hits;
}

function collectObjectTranslatables(ast) {
  const items = [];
  traverse(ast, {
    ObjectProperty(p) {
      const key = p.node.key;
      const val = p.node.value;

      const k =
        t.isIdentifier(key) ? key.name : t.isStringLiteral(key) ? key.value : null;

      if (!k || !TRANSLATABLE_KEYS.has(k)) return;

      if (t.isStringLiteral(val)) {
        items.push({ kind: "string", path: p, text: val.value });
      } else if (t.isTemplateLiteral(val)) {
        const cookedParts = val.quasis.map((q) => q.value.cooked ?? "");
        items.push({ kind: "template", path: p, parts: cookedParts });
      }
    },
  });
  return items;
}

function setStringValue(objPropPath, newText) {
  objPropPath.node.value.value = newText;
}

function setTemplateParts(objPropPath, newParts) {
  const tl = objPropPath.node.value;
  for (let i = 0; i < tl.quasis.length; i++) {
    const cooked = newParts[i] ?? "";
    tl.quasis[i].value.cooked = cooked;
    tl.quasis[i].value.raw = cooked.replace(/`/g, "\\`");
  }
}

function setConstStringValue(varDeclPath, newText) {
  varDeclPath.node.init.value = newText;
}

async function translateFileInPlace(filePath, cache) {
  const code = fs.readFileSync(filePath, "utf8");

  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  const consts = collectConstAreaCategory(ast);
  const items = collectObjectTranslatables(ast);

  const needed = new Map(); // protectedText -> metas[]
  const addNeed = (orig) => {
    if (!orig || !orig.trim()) return;
    const cacheKey = `${TO}::${orig}`;
    if (cache[cacheKey]) return;

    const { protectedText, placeholders } = protectPlaceholders(orig);
    const arr = needed.get(protectedText) || [];
    arr.push({ orig, placeholders });
    needed.set(protectedText, arr);
  };

  for (const c of consts) addNeed(c.text);

  for (const it of items) {
    if (it.kind === "string") addNeed(it.text);
    else if (it.kind === "template") it.parts.forEach(addNeed);
  }

  const protectedTexts = Array.from(needed.keys());
  if (protectedTexts.length) {
    const translatedProtected = await translateBatchLibre(protectedTexts);

    for (let i = 0; i < protectedTexts.length; i++) {
      const prot = protectedTexts[i];
      const trProt = translatedProtected[i] ?? "";
      const metas = needed.get(prot) || [];

      for (const m of metas) {
        const restored = restorePlaceholders(trProt, m.placeholders);
        cache[`${TO}::${m.orig}`] = restored;
      }
    }
  }

  // aplicar consts
  for (const c of consts) {
    const newText = cache[`${TO}::${c.text}`] ?? c.text;
    setConstStringValue(c.path, newText);
  }

  // aplicar objetos
  for (const it of items) {
    if (it.kind === "string") {
      const newText = cache[`${TO}::${it.text}`] ?? it.text;
      setStringValue(it.path, newText);
    } else {
      const newParts = it.parts.map((p) => cache[`${TO}::${p}`] ?? p);
      setTemplateParts(it.path, newParts);
    }
  }

  const out = generate(
    ast,
    { retainLines: true, jsescOption: { minimal: true } },
    code
  ).code;

  fs.writeFileSync(filePath, out, "utf8");
}

async function main() {
  const cache = loadCache();
  const files = walkFiles(ROOT);

  console.log(`Traduciendo en su lugar: ${ROOT}`);
  console.log(`Usando LibreTranslate local: ${LT_BASE}\n`);

  let changed = 0;

  for (const f of files) {
    try {
      const before = fs.readFileSync(f, "utf8");
      await translateFileInPlace(f, cache);
      const after = fs.readFileSync(f, "utf8");

      const rel = path.relative(process.cwd(), f);
      if (before !== after) {
        changed++;
        console.log("✅", rel);
      } else {
        console.log("✅", rel, "(sin cambios)");
      }
    } catch (e) {
      console.error("❌ Error en", path.relative(process.cwd(), f), "->", e?.message ?? e);
    }
  }

  saveCache(cache);
  console.log(`\nListo. Cambiados: ${changed}. Carpeta: ${ROOT}`);
}

await main();
