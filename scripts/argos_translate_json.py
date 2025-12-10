import sys
import json
import re
from argostranslate import translate

SURROGATE_RE = re.compile(r"[\ud800-\udfff]")  # surrogates sueltos (rompen ctranslate2)

def sanitize(s: str) -> str:
  if not isinstance(s, str):
    return ""
  # quita surrogates sueltos
  s = SURROGATE_RE.sub("", s)
  return s

def get_translation(from_code: str, to_code: str):
  langs = translate.get_installed_languages()
  by_code = {l.code: l for l in langs}
  fr = by_code.get(from_code)
  to = by_code.get(to_code)
  if not fr or not to:
    return None
  try:
    tr = fr.get_translation(to)
    return tr
  except Exception:
    return None

def chunk_text(text: str, max_chars: int = 900):
  """
  Ctranslate2 trae max_input_length ~1024 tokens, pero aquí usamos chars para ir seguros.
  Split greedy por líneas y espacios.
  """
  if len(text) <= max_chars:
    return [text]

  parts = []
  buf = ""

  # preserva saltos de línea
  for line in text.splitlines(True):
    if len(buf) + len(line) <= max_chars:
      buf += line
      continue

    if buf:
      parts.append(buf)
      buf = ""

    if len(line) <= max_chars:
      buf = line
      continue

    # si una sola línea es enorme, la partimos por espacios
    start = 0
    while start < len(line):
      end = min(len(line), start + max_chars)
      cut = line.rfind(" ", start, end)
      if cut == -1 or cut <= start + 200:
        cut = end
      parts.append(line[start:cut])
      start = cut

  if buf:
    parts.append(buf)

  return parts

def translate_text(tr_obj, text: str) -> str:
  """
  Traduce en chunks; si un chunk falla, deja el chunk original.
  """
  text = sanitize(text)
  if not text.strip():
    return text

  out_chunks = []
  for ch in chunk_text(text, 900):
    ch2 = sanitize(ch)
    if not ch2.strip():
      out_chunks.append(ch2)
      continue
    try:
      out_chunks.append(tr_obj.translate(ch2))
    except Exception:
      out_chunks.append(ch2)  # fallback MVP
  return "".join(out_chunks)

def main():
  if len(sys.argv) < 3:
    print("Usage: python argos_translate_json.py <from> <to>", file=sys.stderr)
    sys.exit(2)

  from_code = sys.argv[1]
  to_code = sys.argv[2]

  raw = sys.stdin.read() or "[]"
  try:
    texts = json.loads(raw)
  except Exception as e:
    print(f"Invalid JSON input: {e}", file=sys.stderr)
    sys.exit(2)

  if not isinstance(texts, list):
    texts = [str(texts)]

  # intenta directo
  direct = get_translation(from_code, to_code)
  if direct is not None:
    out = [translate_text(direct, s) for s in texts]
    print(json.dumps(out, ensure_ascii=False))
    return

  # pivote por EN
  tr1 = get_translation(from_code, "en")
  tr2 = get_translation("en", to_code)

  if tr1 is None or tr2 is None:
    # mensaje útil
    langs = translate.get_installed_languages()
    pairs = []
    for l in langs:
      for t in l.translations:
        pairs.append(f"{l.code}->{t.to_lang.code}")
    print("No direct translation and pivot not available.", file=sys.stderr)
    print("Installed pairs:", ", ".join(sorted(set(pairs))), file=sys.stderr)
    sys.exit(3)

  out = []
  for s in texts:
    s = sanitize(s)
    if not s.strip():
      out.append(s)
      continue

    # translate in chunks, pivot per chunk (mejor que pivot full largo)
    chunks = chunk_text(s, 900)
    translated = []
    for ch in chunks:
      ch = sanitize(ch)
      if not ch.strip():
        translated.append(ch)
        continue
      try:
        mid = tr1.translate(ch)
        mid = sanitize(mid)
        fin = tr2.translate(mid)
        translated.append(fin)
      except Exception:
        translated.append(ch)  # fallback MVP

    out.append("".join(translated))

  print(json.dumps(out, ensure_ascii=False))

if __name__ == "__main__":
  main()
