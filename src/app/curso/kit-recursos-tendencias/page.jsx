// src/app/curso/kit-recursos-tendencias/page.jsx
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Music2,
  Image as ImageIcon,
  Folder,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SOUND_FOLDER_URL =
  "https://drive.google.com/drive/folders/1QimLctX6tcOVXz-ENjJswaXD33zwWoo0";
const IMAGE_FOLDER_URL =
  "https://drive.google.com/drive/folders/1GaOl2Ha0AII8QSIhiuOCyA7380DVfQVl";

export default function KitRecursosTendenciasPage() {
  return (
    <div className="space-y-6 py-6">
      {/* Indietro */}
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

        <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-teal-200">
          Kit di risorse
        </Badge>
      </div>

      {/* Hero */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
              Kit di risorse di tendenza
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-slate-200">
              Qui trovi{" "}
              <span className="text-teal-200 font-semibold">
                tutte le risorse pronte
              </span>{" "}
              da usare: suoni, filtri, tipografie e materiale visivo. Sono
              organizzate in 2 cartelle di Google Drive, così puoi entrare,
              scaricare e salvare i tuoi preferiti.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 md:w-[360px]">
            <QuickOpen
              icon={<Music2 className="h-4 w-4" />}
              label="Apri suoni"
              url={SOUND_FOLDER_URL}
            />
            <QuickOpen
              icon={<ImageIcon className="h-4 w-4" />}
              label="Apri immagini"
              url={IMAGE_FOLDER_URL}
            />
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <Info className="h-4 w-4 text-teal-300" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-100">
                Tip rapido (se Drive fa i capricci)
              </p>
              <p className="text-xs text-slate-300">
                Se non riesci a vedere la cartella dal browser, prova ad aprire
                il link in una nuova scheda, accedi con il tuo Google oppure usa
                l’app di Google Drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Due card principali */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Suoni */}
        <Card className="overflow-hidden border-white/10 bg-slate-950/70">
          <CardHeader className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
                  Cartella 1
                </p>
                <h2 className="text-lg font-semibold text-slate-50">
                  Risorse audio (tendenze)
                </h2>
                <p className="text-sm text-slate-300">
                  Audio, suoni e risorse pronti da salvare e riutilizzare nei
                  tuoi contenuti.
                </p>
              </div>

              <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200">
                <Music2 className="mr-1 h-3 w-3" />
                Suoni
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Folder className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-100">
                    Tutte le risorse audio sono qui
                  </p>
                  <p className="mt-1 break-all text-xs text-slate-400">
                    {SOUND_FOLDER_URL}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                asChild
                className="w-full rounded-full bg-teal-400 text-sm font-semibold text-slate-900 hover:bg-teal-300"
              >
                <a
                  href={SOUND_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apri la cartella dei suoni{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
              >
                <a
                  href={SOUND_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Copia/usa il link
                </a>
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Salva i tuoi preferiti e crea la tua “libreria” personale.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Se sei da mobile: apri nell’app Drive per scaricare più
                  facilmente.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Immagini */}
        <Card className="overflow-hidden border-white/10 bg-slate-950/70">
          <CardHeader className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-teal-300">
                  Cartella 2
                </p>
                <h2 className="text-lg font-semibold text-slate-50">
                  Risorse immagini (tendenze)
                </h2>
                <p className="text-sm text-slate-300">
                  Immagini, riferimenti visivi e risorse per alzare il livello
                  dei tuoi contenuti.
                </p>
              </div>

              <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200">
                <ImageIcon className="mr-1 h-3 w-3" />
                Immagini
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  <Folder className="h-4 w-4 text-teal-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-100">
                    Tutte le risorse immagini sono qui
                  </p>
                  <p className="mt-1 break-all text-xs text-slate-400">
                    {IMAGE_FOLDER_URL}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                asChild
                className="w-full rounded-full bg-teal-400 text-sm font-semibold text-slate-900 hover:bg-teal-300"
              >
                <a
                  href={IMAGE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apri la cartella immagini{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
              >
                <a
                  href={IMAGE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Copia/usa il link
                </a>
              </Button>
            </div>

            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Usale come riferimento per prompt, thumbnails e creatività
                  visive.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                <span className="text-slate-300">
                  Se vedi “Non hai accesso”, controlla di essere loggato con lo
                  stesso account Google.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* CTA / Aiuto in basso */}
      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-base font-semibold text-slate-50">
              Non riesci ad entrare?
            </h3>
            <p className="text-sm text-slate-300">
              Usa i link diretti qui sopra. Se continua a non funzionare, prova
              ad aprirli in una nuova scheda o nell’app di Drive.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
            >
              <a
                href={SOUND_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link suoni <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 text-sm text-slate-100 hover:bg-white/10"
            >
              <a
                href={IMAGE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link immagini <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuickOpen({ icon, label, url }) {
  return (
    <Button
      asChild
      variant="outline"
      className="w-full rounded-full border-white/15 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="mr-2 inline-flex items-center">{icon}</span>
        {label}
        <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-80" />
      </a>
    </Button>
  );
}
