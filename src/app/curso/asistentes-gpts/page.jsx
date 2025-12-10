"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Copy, Check, Sparkles } from "lucide-react";

import { gptAssistantsContent } from "@/lib/gpt-assistants-content";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function AsistentesGptsPage() {
  const { title, heroText, sections, assistants } = gptAssistantsContent;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tutti");
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const categories = useMemo(
    () => ["Tutti", ...Array.from(new Set(assistants.map((a) => a.category)))],
    [assistants]
  );

  const filtered = useMemo(
    () =>
      assistants.filter((a) => {
        const matchesCategory = category === "Tutti" || a.category === category;
        const term = search.toLowerCase();
        const matchesSearch =
          a.name.toLowerCase().includes(term) ||
          a.description.toLowerCase().includes(term);
        return matchesCategory && matchesSearch;
      }),
    [assistants, category, search]
  );

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Errore durante la copia del testo", err);
    }
  };

  return (
    <div className="space-y-8 py-6">
      {/* 🔙 Torna al corso */}
      <div className="flex items-center justify-between gap-3">
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
      </div>

      {/* Hero del modulo */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-full bg-teal-500/10 p-2">
            <Sparkles className="h-5 w-5 text-teal-300" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-50 md:text-3xl">
              {title}
            </h1>
            <p className="text-sm text-slate-200 whitespace-pre-line md:text-base">
              {heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Sezioni esplicative */}
      <section className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="space-y-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 md:px-6 md:py-5"
          >
            <h2 className="text-base font-semibold text-slate-50 md:text-lg">
              {section.title}
            </h2>

            {section.body?.map((p, i) => (
              <p key={i} className="text-xs text-slate-300 md:text-sm">
                {p}
              </p>
            ))}

            {section.bullets && (
              <ul className="mt-2 space-y-2 text-xs text-slate-200 md:text-sm">
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
              <p className="mt-2 rounded-lg border border-teal-500/30 bg-teal-500/5 px-3 py-2 text-[11px] text-teal-100 md:text-xs">
                {section.highlight}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* ---------- LISTA ASSISTENTI ---------- */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-50 md:text-xl">
              I tuoi +30 assistenti pronti a creare
            </h2>
            <p className="max-w-2xl text-xs text-slate-300 md:text-sm">
              Filtra per categoria o cerca per nome/funzione. Apri qualsiasi
              scheda per vedere il <strong>prompt base</strong> che devi incollare
              nella configurazione del tuo assistente e un{" "}
              <strong>esempio d’uso</strong>.
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
                placeholder="Cerca per nome o funzione..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 border-white/10 bg-slate-950/70 pl-9 text-xs text-slate-100 placeholder:text-slate-500 md:text-sm"
              />
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-slate-400">
            Nessun assistente trovato con questo filtro.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((assistant) => {
              const isExpanded = expandedId === assistant.id;
              const isCopied = copiedId === assistant.id;

              return (
                <motion.div
                  key={assistant.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-slate-950/80 transition-colors hover:border-teal-400/70 hover:bg-slate-900/80">
                    <CardHeader className="space-y-2 pb-2 pt-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-slate-50">
                          {assistant.name}
                        </h3>
                        <Badge className="bg-teal-500/15 text-[10px] uppercase tracking-wide text-teal-200">
                          {assistant.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-300">
                        {assistant.description}
                      </p>
                    </CardHeader>

                    <CardContent className="mt-auto space-y-3 pb-4">
                      {isExpanded && (
                        <div className="space-y-3">
                          <div>
                            <p className="mb-1 text-[11px] font-semibold text-teal-200">
                              Prompt base per creare l’assistente
                            </p>
                            <pre className="max-h-44 overflow-auto whitespace-pre-wrap rounded-md border border-white/10 bg-black/70 p-3 text-[11px] text-slate-100">
                              {assistant.basePrompt}
                            </pre>
                          </div>

                          {assistant.exampleUse && (
                            <div>
                              <p className="mb-1 text-[11px] font-semibold text-teal-200">
                                Esempio di primo messaggio
                              </p>
                              <p className="rounded-md border border-white/10 bg-slate-900/80 p-3 text-[11px] text-slate-100">
                                {assistant.exampleUse}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          type="button"
                          className="flex-1 rounded-full border-teal-400/60 bg-teal-400/10 text-xs text-teal-100 hover:bg-teal-400/20"
                          onClick={() =>
                            setExpandedId(isExpanded ? null : assistant.id)
                          }
                        >
                          {isExpanded
                            ? "Nascondi dettagli"
                            : "Vedi il prompt dell’assistente"}
                        </Button>

                        <Button
                          size="sm"
                          variant="ghost"
                          type="button"
                          onClick={() =>
                            handleCopy(assistant.id, assistant.basePrompt)
                          }
                          className="rounded-full border border-white/10 bg-white/5 px-3 text-xs text-slate-100 hover:bg-white/10"
                        >
                          {isCopied ? (
                            <>
                              <Check className="mr-1 h-3 w-3" /> Copiato
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1 h-3 w-3" /> Copia base
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
