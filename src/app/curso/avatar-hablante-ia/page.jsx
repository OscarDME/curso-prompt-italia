// src/app/curso/bonos/avatar-hablante-ia/page.jsx
"use client";

import Link from "next/link";
import { ArrowLeft, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bonus07AvatarHablante } from "@/lib/bonus-07-avatar-hablante-content";

// Helper para formato simple (negritas + saltos de línea) si luego quieres usarlas
function formatRichText(text) {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function toYouTubeEmbed(url) {
  try {
    const u = new URL(url);

    // youtu.be/ID
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }

    // youtube.com/watch?v=ID
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}`;

      // youtube.com/embed/ID (ya viene listo)
      if (u.pathname.startsWith("/embed/")) return url;
    }
  } catch {}
  return url;
}

export default function BonusAvatarHablantePage() {
  const { title, subtitle, heroText, sections } = bonus07AvatarHablante;

  const videos = [
    {
      id: "facil",
      title: "Método fácil (rápido) — Avatar hablante",
      subtitle: "Ideal si quieres resultado rápido sin complicarte.",
      url: "https://youtu.be/b1ewMMYUqTQ",
    },
    {
      id: "intermedio-1",
      title: "Método intermedio — Paso 1",
      subtitle: "Creamos la base / referencia para mantener consistencia.",
      url: "https://youtu.be/T-CMz0Y3DA8",
    },
    {
      id: "intermedio-2",
      title: "Método intermedio — Paso 2",
      subtitle: "Generación del video y armado final.",
      url: "https://youtu.be/Tz2Cn7S_vgM",
    },
  ];

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
            Volver al inicio del curso
          </Link>
        </Button>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base text-slate-300">{subtitle}</p>
        )}
      </div>

      {heroText && (
        <p
          className="text-sm md:text-base text-slate-200 max-w-2xl"
          dangerouslySetInnerHTML={{ __html: formatRichText(heroText) }}
        />
      )}

      {/* ✅ VIDEOS ARRIBA */}
      <div className="space-y-3">
        <h2 className="text-base md:text-lg font-semibold text-slate-50">
          Videos (3 métodos / pasos)
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {videos.map((v) => (
            <Card
              key={v.id}
              className="border-white/10 bg-slate-950/80 p-3 md:p-4"
            >
              <div className="flex items-start gap-2">
                <PlayCircle className="mt-0.5 h-4 w-4 text-teal-300" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-50">
                    {v.title}
                  </p>
                  {v.subtitle && (
                    <p className="text-xs text-slate-300">{v.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="mt-3 relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={toYouTubeEmbed(v.url)}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="space-y-8">
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
    </div>
  );
}
