// src/app/curso/page.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { courseHero, courseModuleRows } from "@/lib/course-data";

export default function CursoPage() {
  return (
    <div className="space-y-10 pt-6 md:pt-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-black/70">
        <div className="absolute inset-0">
          <Image
            src={courseHero.backgroundImage}
            alt={courseHero.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050B2C] to-transparent" />
        </div>

        <div className="relative z-10 px-5 py-10 md:px-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-teal-300">
              {courseHero.subtitle}
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              {courseHero.title}
            </h1>
            <p className="mb-8 max-w-xl text-sm text-slate-100/90 sm:text-base leading-relaxed">
              {courseHero.description}
            </p>

            <Button
              asChild
              className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-5 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg hover:bg-teal-300"
            >
              <Link href="/curso/inicio">
                {courseHero.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* RIGHE MODULI TIPO NETFLIX */}
      <section className="space-y-10">
        {courseModuleRows.map((row) => (
          <div key={row.id} className="space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              {row.title}
            </h2>

            <div className="-mx-4 flex gap-4 overflow-x-auto pb-2 pl-4 pr-4 md:mx-0 md:pl-0 md:pr-0 no-scrollbar scroll-smooth snap-x snap-mandatory">
              {row.modules.map((module) => (
                <NetflixCard key={module.id} module={module} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ✅ ALTRI CONTENUTI */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
          Altri contenuti
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* ✅ NUOVO: Corso di Prompt Engineering (a sinistra, prima del Kit) */}
          <Link href="/curso/ingenieria-de-prompts" className="group block">
            <Card className="relative overflow-hidden border-2 border-transparent bg-black/60 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-teal-400/80 hover:shadow-[0_0_35px_rgba(45,212,191,0.5)]">
              <div className="relative h-[160px] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black">
                <div className="absolute inset-0 opacity-60 [background:radial-gradient(600px_circle_at_20%_20%,rgba(45,212,191,0.18),transparent_40%),radial-gradient(600px_circle_at_80%_30%,rgba(168,85,247,0.16),transparent_45%)]" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-200">
                  <Sparkles className="h-3 w-3" />
                  Corso
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-extrabold text-teal-100">
                    Corso di Prompt Engineering
                  </h3>
                  <p className="mt-1 text-xs text-slate-200/90 line-clamp-2">
                    Impara a creare, ottimizzare e controllare i prompt per
                    ottenere risultati davvero professionali.
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-teal-200">
                    Entra <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* ✅ NUOVO: Kit di risorse di tendenza */}
          <Link href="/curso/kit-recursos-tendencias" className="group block">
            <Card className="relative overflow-hidden border-2 border-transparent bg-black/60 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-teal-400/80 hover:shadow-[0_0_35px_rgba(45,212,191,0.5)]">
              <div className="relative h-[160px] w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black">
                <div className="absolute inset-0 opacity-60 [background:radial-gradient(600px_circle_at_20%_20%,rgba(45,212,191,0.18),transparent_40%),radial-gradient(600px_circle_at_80%_30%,rgba(168,85,247,0.16),transparent_45%)]" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal-200">
                  <Sparkles className="h-3 w-3" />
                  Kit
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-extrabold text-teal-100">
                    Kit di risorse di tendenza
                  </h3>
                  <p className="mt-1 text-xs text-slate-200/90 line-clamp-2">
                    Suoni, filtri, tipografie e molto altro (aggiornato per
                    creare contenuti che catturano).
                  </p>

                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-teal-200">
                    Entra <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>

          {/* Puedes agregar más cards aquí si quieres */}
        </div>
      </section>
    </div>
  );
}

/** Card stile Netflix */
function NetflixCard({ module }) {
  const isLocked = module.locked;

  const inner = (
    <div className="flex h-full w-full flex-col">
      <div className="relative h-full w-full">
        <Image
          src={module.image}
          alt={module.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[10px] ring-1 ring-teal-300/30 group-hover:ring-teal-200/80" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          {module.tag && (
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-300">
              {module.tag}
            </p>
          )}
          <h3 className="text-sm font-extrabold leading-tight text-teal-100">
            {module.title}
          </h3>
          {module.subtitle && (
            <p className="mt-1 text-[11px] text-slate-200/90 line-clamp-2">
              {module.subtitle}
            </p>
          )}

          {isLocked && (
            <p className="mt-2 flex items-center gap-1 text-[10px] font-medium text-slate-300">
              <Lock className="h-3 w-3 text-teal-300" />
              Contenuto disponibile prossimamente
            </p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Card
      className={
        "snap-start group relative h-[260px] w-[180px] flex-shrink-0 overflow-hidden border-2 bg-black/60 shadow-[0_0_25px_rgba(0,0,0,0.7)] transition" +
        (isLocked
          ? " cursor-not-allowed opacity-60 border-slate-700 hover:-translate-y-0"
          : " hover:-translate-y-1 hover:border-teal-400/80 hover:shadow-[0_0_35px_rgba(45,212,191,0.5)] border-transparent")
      }
    >
      {isLocked ? (
        <div className="pointer-events-none h-full w-full">{inner}</div>
      ) : (
        <a
          href={module.href || "#"}
          target={module.href?.startsWith("http") ? "_blank" : "_self"}
          rel={module.href?.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex h-full w-full flex-col"
        >
          {inner}
        </a>
      )}
    </Card>
  );
}
