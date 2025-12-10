// src/app/curso/bonos/generador-ebooks-presentaciones/page.jsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bonus04EbooksPresentaciones } from "@/lib/bonus-04-ebooks-presentaciones-content";

// Helper per formattazione semplice (grassetto + a capo)
function formatRichText(text) {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default function BonusEbooksPresentazioniPage() {
  const {
    title,
    subtitle,
    heroText,
    gammaUrl,
    gammaButtonLabel,
    gammaButtonSecondaryLabel,
    backToCourseLabel,
    videoBlock,
    sections,
  } = bonus04EbooksPresentaciones;

  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Pulsante torna al corso */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
        >
          <Link href="/curso">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {backToCourseLabel}
          </Link>
        </Button>
      </div>

      {/* Titolo + sottotitolo */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">{title}</h1>
        {subtitle && (
          <p className="text-sm md:text-base text-slate-300">{subtitle}</p>
        )}
      </div>

      {/* Link diretto a Gamma + testo breve */}
      <div className="space-y-3">
        <Button
          asChild
          className="rounded-full bg-teal-400 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-md hover:bg-teal-300"
        >
          <a href={gammaUrl} target="_blank" rel="noreferrer">
            {gammaButtonLabel}{" "}
            {gammaButtonSecondaryLabel && (
              <span className="ml-1 text-[10px] uppercase tracking-[0.18em]">
                ({gammaButtonSecondaryLabel})
              </span>
            )}
          </a>
        </Button>

        {heroText && (
          <p
            className="text-xs md:text-sm text-slate-300 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: formatRichText(heroText) }}
          />
        )}
      </div>

      {/* Mini blocco contesto */}
      {videoBlock && (
        <Card className="border-white/10 bg-slate-950/80 px-4 py-4 md:px-6 md:py-5">
          {videoBlock.title && (
            <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-2">
              {videoBlock.title}
            </h2>
          )}

          {Array.isArray(videoBlock.bullets) && videoBlock.bullets.length > 0 && (
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {videoBlock.bullets.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          )}
        </Card>
      )}

      {/* Manuale scritto (sezioni) */}
      {Array.isArray(sections) && sections.length > 0 && (
        <div className="space-y-6">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="space-y-3 border-white/10 bg-slate-950/80 px-4 py-4 md:px-6 md:py-5"
            >
              <h2 className="text-lg font-semibold text-slate-50">
                {section.title}
              </h2>

              {section.body?.map((p, i) => (
                <p
                  key={i}
                  className="text-sm text-slate-300"
                  dangerouslySetInnerHTML={{ __html: formatRichText(p) }}
                />
              ))}

              {section.bullets && (
                <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  {section.bullets.map((item, idx) => (
                    <li key={idx}>
                      <span className="font-semibold text-teal-300">
                        {item.label}:{" "}
                      </span>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.highlight && (
                <p
                  className="mt-2 rounded-lg border border-teal-500/30 bg-teal-500/5 px-3 py-2 text-xs text-teal-100"
                  dangerouslySetInnerHTML={{
                    __html: formatRichText(section.highlight),
                  }}
                />
              )}

              {section.extra &&
                section.extra.map((p, i) => (
                  <p
                    key={`extra-${i}`}
                    className="text-xs text-slate-400"
                    dangerouslySetInnerHTML={{ __html: formatRichText(p) }}
                  />
                ))}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
