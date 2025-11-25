// src/app/curso/bonos/generador-ebooks-presentaciones/page.jsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bonus04EbooksPresentaciones } from "@/lib/bonus-04-ebooks-presentaciones-content";

// Helper para formato simple (negritas + saltos de línea)
function formatRichText(text) {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default function BonusEbooksPresentacionesPage() {
  const {
    title,
    subtitle,
    heroText,
    youtubeId,
    videoTitle,
    gammaUrl,
    gammaButtonLabel,
    gammaButtonSecondaryLabel,
    backToCourseLabel,
    videoBlock
  } = bonus04EbooksPresentaciones;

  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Botón volver al curso */}
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

      {/* Título + subtítulo */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base text-slate-300">{subtitle}</p>
        )}
      </div>

      {/* 🎥 Video de YouTube (arriba de todo el contenido) */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={videoTitle || title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Link directo a Gamma + texto corto */}
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

      {/* Bloque mini de contexto (también viene del content file) */}
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
    </div>
  );
}
