// src/app/curso/bonos/entrenamiento-chatgpt/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

import { bonus05ChatGPTTraining } from "@/lib/bonus-05-chatgpt-training-content";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function BonusEntrenamientoChatGPTPage() {
  const { title, heroText, classes } = bonus05ChatGPTTraining;
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="space-y-8 py-6">
      {/* 🔙 Indietro */}
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

      {/* Hero modulo */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">{title}</h1>
        <p className="max-w-3xl text-sm md:text-base text-slate-200">
          {heroText}
        </p>
      </section>

      {/* Griglia delle lezioni */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-semibold text-slate-50">
            Lezioni incluse in questo allenamento
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-slate-300">
            Clicca su qualsiasi scheda per vedere il contenuto della lezione.
            Tutto è in testo, pensato per copiare idee, concetti e strutture
            direttamente nel tuo flusso di lavoro con ChatGPT.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {classes.map((klass) => (
            <ClassCard
              key={klass.id}
              klass={klass}
              onOpen={() => setSelectedClass(klass)}
            />
          ))}
        </div>
      </section>

      {/* Modal della lezione */}
      {selectedClass && (
        <ClassModal klass={selectedClass} onClose={() => setSelectedClass(null)} />
      )}
    </div>
  );
}

/* -------- Scheda singola -------- */

function ClassCard({ klass, onOpen }) {
  return (
    <Card
      role="button"
      onClick={onOpen}
      className="flex h-full cursor-pointer flex-col overflow-hidden border-white/10 bg-slate-950/80 transition-transform transition-colors hover:-translate-y-1 hover:border-teal-400/70 hover:bg-slate-900/80"
    >
      <CardHeader className="space-y-2 pb-2 pt-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-50">{klass.title}</h3>
          <div className="flex items-center gap-1">
            {klass.level && (
              <Badge
                className={cn(
                  "text-[10px] uppercase tracking-wide",
                  klass.level === "Principiante" &&
                    "bg-emerald-500/15 text-emerald-200",
                  klass.level === "Intermedio" && "bg-sky-500/15 text-sky-200",
                  klass.level === "Avanzado" &&
                    "bg-fuchsia-500/15 text-fuchsia-200"
                )}
              >
                {klass.level}
              </Badge>
            )}
            {klass.duration && (
              <Badge className="bg-black/70 text-[10px] text-slate-200">
                {klass.duration}
              </Badge>
            )}
          </div>
        </div>

        {klass.summary && (
          <p className="text-xs text-slate-300 line-clamp-3">{klass.summary}</p>
        )}
      </CardHeader>

      <CardContent className="mt-auto pb-4">
        <p className="text-[11px] font-semibold text-teal-200">
          Clicca per vedere la lezione
        </p>
      </CardContent>
    </Card>
  );
}

/* -------- Modal contenuto -------- */

function ClassModal({ klass, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"
      onClick={handleOverlayClick}
    >
      <div className="relative max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-slate-950 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        {/* Header modal */}
        <div className="flex items-start justify-between gap-3 border-b border-white/10 px-5 py-4 md:px-7">
          <div className="space-y-1 pr-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-300">
              Lezione dell’allenamento ChatGPT
            </p>
            <h3 className="text-lg md:text-xl font-bold text-slate-50">
              {klass.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {klass.level && (
                <Badge className="bg-teal-500/15 text-[11px] text-teal-200">
                  Livello: {klass.level}
                </Badge>
              )}
              {klass.duration && (
                <Badge className="bg-black/70 text-[11px] text-slate-200">
                  Durata stimata: {klass.duration}
                </Badge>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 bg-white/5 p-1 text-slate-200 hover:bg-white/10"
            aria-label="Chiudi"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Contenuto scrollabile */}
        <div className="max-h-[60vh] space-y-5 overflow-y-auto px-5 py-4 md:px-7 md:py-6">
          {klass.summary && <p className="text-sm text-slate-200">{klass.summary}</p>}

          {klass.goals && klass.goals.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-300">
                Cosa otterrai da questa lezione
              </p>
              <ul className="space-y-1 text-sm text-slate-200">
                {klass.goals.map((goal, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {klass.outline && klass.outline.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Argomenti che vedremo
              </p>
              <ol className="space-y-1 text-sm text-slate-200">
                {klass.outline.map((item, idx) => (
                  <li key={idx}>
                    <span className="font-semibold text-teal-200">{idx + 1}.</span>{" "}
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {klass.content && klass.content.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Sviluppo della lezione
              </p>
              {klass.content.map((p, idx) => (
                <p key={idx} className="text-sm text-slate-200">
                  {p}
                </p>
              ))}
            </div>
          )}

          <p className="mt-2 rounded-lg border border-teal-500/30 bg-teal-500/5 px-3 py-2 text-xs text-teal-100">
            Suggerimento: mentre leggi questa lezione, apri un’altra scheda con
            ChatGPT e prova i concetti nello stesso momento. Ciò che metti in
            pratica adesso resterà “installato” nel tuo flusso di lavoro.
          </p>
        </div>
      </div>
    </div>
  );
}
