// src/app/curso/herramientas-ia/page.jsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Search } from "lucide-react";

import { iaToolsContent } from "@/lib/ia-tools-content";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function IAToolsPage() {
  const { title, heroText, sections, tools } = iaToolsContent;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tutte");

  const categories = useMemo(
    () => ["Tutte", ...Array.from(new Set(tools.map((t) => t.category)))],
    [tools]
  );

  const filteredTools = useMemo(() => {
    const term = search.toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory = category === "Tutte" || tool.category === category;
      const matchesSearch =
        tool.name.toLowerCase().includes(term) ||
        tool.description.toLowerCase().includes(term) ||
        (tool.howToUseWithBank || "").toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [tools, category, search]);

  return (
    <div className="space-y-8 py-6">
      {/* 🔙 Back */}
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
      >
        <Link href="/curso">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna all’inizio del corso
        </Link>
      </Button>

      {/* 🧠 Titolo + testo iniziale */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
          {title}
        </h1>
        <p className="max-w-3xl text-sm md:text-base text-slate-200">
          {heroText}
        </p>
      </section>

      {/* 📚 Sezioni esplicative */}
      <div className="space-y-6">
        {sections.map((section) => (
          <section
            key={section.id}
            className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 md:px-6 md:py-5"
          >
            <h2 className="text-lg font-semibold text-slate-50">
              {section.title}
            </h2>

            {section.body?.map((p, i) => (
              <p key={i} className="text-sm text-slate-300">
                {p}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-2 space-y-2 text-sm text-slate-200">
                {section.bullets.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-teal-300">
                      {item.label}:{" "}
                    </span>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.highlight && (
              <p className="mt-2 rounded-lg border border-teal-500/30 bg-teal-500/5 px-3 py-2 text-xs text-teal-100">
                {section.highlight}
              </p>
            )}
          </section>
        ))}
      </div>

      {/* 🧩 Lista di strumenti */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg md:text-xl font-semibold text-slate-50">
              Stack consigliato di strumenti
            </h2>
            <p className="max-w-2xl text-xs md:text-sm text-slate-300">
              Questi strumenti sono pensati per essere combinati con il tuo Banco
              Secreto di Prompt. Non devi usarli tutti: inizia con 1–3 e amplia
              solo quando il tuo sistema lo richiede.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {/* Filtro per categoria */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[11px] font-medium transition",
                    category === cat
                      ? "border-teal-400 bg-teal-400/10 text-teal-200"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-teal-400/60 hover:text-teal-100"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Ricerca */}
            <div className="relative sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Cerca per nome o utilizzo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 border-white/10 bg-slate-950/70 pl-9 text-xs text-slate-100 placeholder:text-slate-500 md:text-sm"
              />
            </div>
          </div>
        </div>

        {filteredTools.length === 0 ? (
          <p className="text-sm text-slate-400">
            Nessuno strumento trovato con questo filtro.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/**
 * Scheda di un singolo strumento
 */
function ToolCard({ tool }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-slate-950/80 transition-colors hover:border-teal-400/70 hover:bg-slate-900/80">
      {/* Thumbnail / Placeholder */}
      <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black">
        {tool.thumbnail ? (
          <Image
            src={tool.thumbnail}
            alt={tool.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-bold text-teal-200/80">
              {tool.name.charAt(0)}
            </span>
          </div>
        )}

        {tool.category && (
          <Badge className="absolute left-3 top-3 bg-black/70 text-[11px] uppercase tracking-wide text-teal-200">
            {tool.category}
          </Badge>
        )}
      </div>

      <CardHeader className="space-y-1 pb-2 pt-3">
        <h3 className="text-sm font-semibold text-slate-50">{tool.name}</h3>
        {tool.description && (
          <p className="text-xs text-slate-300 line-clamp-3">
            {tool.description}
          </p>
        )}
      </CardHeader>

      <CardContent className="mt-auto space-y-2 pb-4">
        {tool.howToUseWithBank && (
          <div className="rounded-md border border-white/10 bg-slate-900/80 p-3">
            <p className="mb-1 text-[11px] font-semibold text-teal-200">
              Come combinarlo con il Banco Secreto
            </p>
            <p className="text-[11px] text-slate-100">{tool.howToUseWithBank}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
