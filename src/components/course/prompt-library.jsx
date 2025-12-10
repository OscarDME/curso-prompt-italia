"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Copy,
  Check,
  FileText,
  ImageIcon,
  Clapperboard,
  ArrowLeft,
  HelpCircle,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function getIconForType(type) {
  if (type === "image") return ImageIcon;
  if (type === "video") return Clapperboard;
  return FileText;
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

export function PromptLibrary({ title, subtitle, items, type, tutorialUrl }) {
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("Tutte"); // macro categoria (solo testo/immagine)
  const [category, setCategory] = useState("Tutte"); // sottocategoria
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [page, setPage] = useState(1);

  const pageSize = 18;

  const Icon = getIconForType(type);
  const isVideo = type === "video";

  // ✅ Tutorial espandibile (persistente per tipo)
  const tutorialKey = `bsp:tutorial:dismissed:${type}`;
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const [tutorialDismissed, setTutorialDismissed] = useState(false);

  const embedUrl = useMemo(
    () => (tutorialUrl ? toYouTubeEmbed(tutorialUrl) : null),
    [tutorialUrl]
  );

  useEffect(() => {
    if (!tutorialUrl) return;
    try {
      const dismissed = localStorage.getItem(tutorialKey) === "1";
      setTutorialDismissed(dismissed);
      setTutorialOpen(false); // di default chiuso (non disturba)
    } catch {}
  }, [tutorialUrl, tutorialKey]);

  const dismissTutorial = () => {
    try {
      localStorage.setItem(tutorialKey, "1");
    } catch {}
    setTutorialDismissed(true);
    setTutorialOpen(false);
  };

  // 👇 in testo/immagine mostriamo le categorie solo quando l’utente sceglie un’area specifica
  const showCategories = isVideo ? true : area !== "Tutte";

  // AREE (macro categorie) — solo per testo/immagine
  const areas = useMemo(() => {
    if (isVideo) return ["Tutte"];
    const set = new Set(items.map((i) => i.area).filter(Boolean));
    return ["Tutte", ...Array.from(set)];
  }, [items, isVideo]);

  // CATEGORIE (sottocategorie)
  const categories = useMemo(() => {
    // Per video: categorie globali, senza dipendere dall’area
    if (isVideo) {
      const set = new Set(items.map((i) => i.category).filter(Boolean));
      return ["Tutte", ...Array.from(set)];
    }

    // Per testo/immagine: categorie in base all’area selezionata
    const scopedItems =
      area === "Tutte" ? items : items.filter((i) => i.area === area);

    const set = new Set(scopedItems.map((i) => i.category).filter(Boolean));
    return ["Tutte", ...Array.from(set)];
  }, [items, area, isVideo]);

  // FILTRO principale
  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const matchesSearch = (item.title || "")
          .toLowerCase()
          .includes((search || "").toLowerCase());

        const matchesCategory = category === "Tutte" || item.category === category;

        if (isVideo) {
          // Nei video ignoriamo l’area: solo categoria + ricerca
          return matchesCategory && matchesSearch;
        }

        const matchesArea = area === "Tutte" || item.area === area;
        return matchesArea && matchesCategory && matchesSearch;
      }),
    [items, area, category, search, isVideo]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filtered.slice(start, end);
  }, [filtered, page, pageSize]);

  // reset pagina quando cambiano i filtri
  useEffect(() => {
    setPage(1);
  }, [search, area, category]);

  // protezione se cambia il totale pagine
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  // se torni a "Tutte" nell’area, resettiamo anche la categoria (evita stati strani)
  useEffect(() => {
    if (!isVideo && area === "Tutte" && category !== "Tutte") {
      setCategory("Tutte");
    }
  }, [area, category, isVideo]);

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Errore durante la copia del prompt", err);
    }
  };

  const showingFrom = filtered.length === 0 ? 0 : (page - 1) * pageSize + 1;
  const showingTo = Math.min(page * pageSize, filtered.length);

  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Pulsante indietro alla home del corso */}
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

      {/* 🎥 Tutorial espandibile */}
      {tutorialUrl && (
        <div className="rounded-2xl border border-white/10 bg-white/5">
          <div className="flex items-center justify-between gap-3 p-3">
            {!tutorialDismissed ? (
              <p className="text-xs text-slate-200">
                Per imparare a usare i prompt,{" "}
                <span className="font-semibold text-teal-200">
                  clicca qui
                </span>
                .
              </p>
            ) : (
              <p className="text-[11px] text-slate-400">
                Ti serve aiuto per usare questi prompt?
              </p>
            )}

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                type="button"
                onClick={() => setTutorialOpen((v) => !v)}
                className="rounded-full border border-white/10 bg-white/5 px-3 text-xs text-slate-100 hover:bg-white/10"
              >
                <HelpCircle className="mr-1 h-3.5 w-3.5" />
                {tutorialOpen ? "Nascondi" : "Guarda il tutorial"}
              </Button>

              {!tutorialDismissed && (
                <Button
                  size="sm"
                  variant="ghost"
                  type="button"
                  onClick={dismissTutorial}
                  className="rounded-full px-3 text-xs text-slate-300 hover:bg-white/10"
                >
                  Non mostrare più
                </Button>
              )}
            </div>
          </div>

          {tutorialOpen && embedUrl && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.25 }}
              className="px-3 pb-3"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={embedUrl}
                  title={`Tutorial ${title}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                Suggerimento: puoi chiuderlo e resterà il pulsante “Guarda il tutorial”
                per riaprirlo quando ti serve.
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* intestazione */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-slate-50 md:text-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-xl text-sm text-slate-300">{subtitle}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {/* filtri */}
          <div className="flex flex-col gap-2">
            {/* 🔹 Testo e immagine: area + (categoria SOLO se area !== "Tutte") */}
            {!isVideo && (
              <>
                {/* filtro per area (macro categoria) */}
                <div className="flex flex-wrap gap-2">
                  {areas.map((ar) => (
                    <button
                      key={ar}
                      type="button"
                      onClick={() => {
                        setArea(ar);
                        setCategory("Tutte"); // reset sottocategoria quando cambia area
                      }}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-medium transition",
                        area === ar
                          ? "border-teal-400 bg-teal-400/10 text-teal-200"
                          : "border-white/10 bg-white/5 text-slate-300 hover:border-teal-400/60 hover:text-teal-100"
                      )}
                    >
                      {ar}
                    </button>
                  ))}
                </div>

                {/* categorie solo quando è stata scelta un’area */}
                {showCategories && (
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs font-medium transition",
                          category === cat
                            ? "border-teal-400 bg-teal-400/10 text-teal-200"
                            : "border-white/10 bg-white/5 text-slate-300 hover:border-teal-400/60 hover:text-teal-100"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {!showCategories && (
                  <p className="text-[11px] text-slate-400">
                    Seleziona un’area per vedere le sue categorie.
                  </p>
                )}
              </>
            )}

            {/* 🔹 Video: solo categoria */}
            {isVideo && (
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-medium transition",
                      category === cat
                        ? "border-teal-400 bg-teal-400/10 text-teal-200"
                        : "border-white/10 bg-white/5 text-slate-300 hover:border-teal-400/60 hover:text-teal-100"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ricerca */}
          <div className="relative sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Cerca per titolo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 border-white/10 bg-slate-950/70 pl-9 text-sm text-slate-100 placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>

      {/* griglia + paginazione */}
      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400">
          Nessun prompt trovato con questo filtro.
        </p>
      ) : (
        <>
          {/* griglia dei prompt */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {paginated.map((item) => {
              const isExpanded = expandedId === item.id;
              const isCopied = copiedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-slate-950/80 transition-colors hover:border-teal-400/70 hover:bg-slate-900/80">
                    {/* MEDIA (video / immagine / icona) */}
                    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black">
                      <div className="relative aspect-[16/9] w-full">
                        {type === "video" && item.videoUrl ? (
                          <video
                            src={item.videoUrl}
                            className="h-full w-full object-contain"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : item.thumbnail ? (
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <Icon className="h-10 w-10 text-teal-300/80" />
                          </div>
                        )}

                        {item.category && (
                          <Badge className="absolute left-3 top-3 bg-black/70 text-[11px] font-semibold uppercase tracking-wide text-teal-200">
                            {item.category}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardHeader className="space-y-1 pb-2 pt-3">
                      <h3 className="text-sm font-semibold text-slate-50">
                        {item.title}
                      </h3>
                      {item.summary && (
                        <p className="line-clamp-3 text-xs text-slate-300">
                          {item.summary}
                        </p>
                      )}
                      {/* mostra area solo per testo/immagine */}
                      {item.area && !isVideo && (
                        <p className="text-[11px] uppercase tracking-wide text-teal-300/80">
                          {item.area}
                        </p>
                      )}
                    </CardHeader>

                    <CardContent className="mt-auto space-y-3 pb-4">
                      {isExpanded && (
                        <motion.pre
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="max-h-40 overflow-auto whitespace-pre-wrap rounded-md border border-white/10 bg-black/60 p-3 text-xs text-slate-100"
                        >
                          {item.prompt}
                        </motion.pre>
                      )}

                      <div className="flex flex-wrap items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 rounded-full border-teal-400/60 bg-teal-400/10 text-xs text-teal-100 hover:bg-teal-400/20"
                          type="button"
                          onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        >
                          {isExpanded ? "Nascondi prompt" : "Vedi prompt"}
                        </Button>

                        <Button
                          size="sm"
                          variant="ghost"
                          type="button"
                          onClick={() => handleCopy(item.id, item.prompt)}
                          className="rounded-full border border-white/10 bg-white/5 px-3 text-xs text-slate-100 hover:bg-white/10"
                        >
                          {isCopied ? (
                            <>
                              <Check className="mr-1 h-3 w-3" /> Copiato
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1 h-3 w-3" /> Copia
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

          {/* controlli paginazione */}
          {totalPages > 1 && (
            <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-slate-300 sm:flex-row">
              <p>
                Visualizzazione{" "}
                <span className="font-semibold text-teal-200">
                  {showingFrom}–{showingTo}
                </span>
              </p>

              <div className="inline-flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  type="button"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="rounded-full border border-white/10 bg-white/5 px-3 text-xs text-slate-100 disabled:opacity-40"
                >
                  Precedente
                </Button>

                <span className="text-[11px] text-slate-400">
                  Pagina{" "}
                  <span className="font-semibold text-teal-200">{page}</span> di{" "}
                  <span className="font-semibold text-teal-200">{totalPages}</span>
                </span>

                <Button
                  size="sm"
                  variant="ghost"
                  type="button"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="rounded-full border border-white/10 bg-white/5 px-3 text-xs text-slate-100 disabled:opacity-40"
                >
                  Successivo
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
