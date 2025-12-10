// src/app/curso/bonos/avatar-hablante-ia/page.jsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bonus07AvatarHablante } from "@/lib/bonus-07-avatar-hablante-content";

// Helper per formattazione semplice (grassetto + a capo)
function formatRichText(text) {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default function BonusAvatarHablantePage() {
  const { title, subtitle, heroText, sections } = bonus07AvatarHablante;

  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Pulsante per tornare al corso */}
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

      {/* ✅ MANUALE TESTUALE (niente video) */}
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
