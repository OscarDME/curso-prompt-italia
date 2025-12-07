// src/components/course/prompt-library.jsx
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
  const [area, setArea] = useState("Todas"); // macro categoría (solo texto/imagen)
  const [category, setCategory] = useState("Todas"); // subcategoría
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [page, setPage] = useState(1);

  const pageSize = 18;

  const Icon = getIconForType(type);
  const isVideo = type === "video";

  // ✅ Tutorial desplegable (persistente por tipo)
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
      setTutorialOpen(false); // por defecto cerrado (no estorba)
    } catch {}
  }, [tutorialUrl, tutorialKey]);

  const dismissTutorial = () => {
    try {
      localStorage.setItem(tutorialKey, "1");
    } catch {}
    setTutorialDismissed(true);
    setTutorialOpen(false);
  };

  // 👇 en texto/imagen solo mostramos categorías cuando el usuario elige un área específica
  const showCategories = isVideo ? true : area !== "Todas";

  // ÁREAS (macro categorías) — solo para texto/imagen
  const areas = useMemo(() => {
    if (isVideo) return ["Todas"];
    const set = new Set(items.map((i) => i.area).filter(Boolean));
    return ["Todas", ...Array.from(set)];
  }, [items, isVideo]);

  // CATEGORÍAS (subcategorías)
  const categories = useMemo(() => {
    // Para vídeo: categorías globales, sin depender de área
    if (isVideo) {
      const set = new Set(items.map((i) => i.category).filter(Boolean));
      return ["Todas", ...Array.from(set)];
    }

    // Para texto/imagen: categorías según área seleccionada
    const scopedItems =
      area === "Todas" ? items : items.filter((i) => i.area === area);

    const set = new Set(scopedItems.map((i) => i.category).filter(Boolean));
    return ["Todas", ...Array.from(set)];
  }, [items, area, isVideo]);

  // FILTRO principal
  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const matchesSearch = (item.title || "")
          .toLowerCase()
          .includes((search || "").toLowerCase());

        const matchesCategory =
          category === "Todas" || item.category === category;

        if (isVideo) {
          // En vídeo ignoramos área, solo categoría + búsqueda
          return matchesCategory && matchesSearch;
        }

        const matchesArea = area === "Todas" || item.area === area;
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

  // reset página cuando cambian filtros
  useEffect(() => {
    setPage(1);
  }, [search, area, category]);

  // proteger si cambia el total de páginas
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  // si vuelves a "Todas" en área, también reseteamos categoría (evita estados raros)
  useEffect(() => {
    if (!isVideo && area === "Todas" && category !== "Todas") {
      setCategory("Todas");
    }
  }, [area, category, isVideo]);

  const handleCopy = async (id, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (err) {
      console.error("Error copiando prompt", err);
    }
  };

  const showingFrom =
    filtered.length === 0 ? 0 : (page - 1) * pageSize + 1;
  const showingTo = Math.min(page * pageSize, filtered.length);

  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Botón back al principal */}
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

      {/* 🎥 Tutorial desplegable */}
      {tutorialUrl && (
        <div className="rounded-2xl border border-white/10 bg-white/5">
          <div className="flex items-center justify-between gap-3 p-3">
            {!tutorialDismissed ? (
              <p className="text-xs text-slate-200">
                Para aprender a usar los prompts,{" "}
                <span className="font-semibold text-teal-200">
                  haz clic aquí
                </span>
                .
              </p>
            ) : (
              <p className="text-[11px] text-slate-400">
                ¿Necesitas ayuda para usar estos prompts?
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
                {tutorialOpen ? "Ocultar" : "Ver tutorial"}
              </Button>

              {!tutorialDismissed && (
                <Button
                  size="sm"
                  variant="ghost"
                  type="button"
                  onClick={dismissTutorial}
                  className="rounded-full px-3 text-xs text-slate-300 hover:bg-white/10"
                >
                  No mostrar más
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
                Tip: Puedes cerrarlo y quedará el botón “Ver tutorial” para
                abrirlo cuando lo necesites.
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* encabezado */}
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
          {/* filtros */}
          <div className="flex flex-col gap-2">
            {/* 🔹 Texto e imagen: área + (categoría SOLO si area !== "Todas") */}
            {!isVideo && (
              <>
                {/* filtro por área (macro categoría) */}
                <div className="flex flex-wrap gap-2">
                  {areas.map((ar) => (
                    <button
                      key={ar}
                      type="button"
                      onClick={() => {
                        setArea(ar);
                        setCategory("Todas"); // reset subcategoría al cambiar área
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

                {/* categorías solo cuando se eligió un área */}
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
                    Selecciona un área para ver sus categorías.
                  </p>
                )}
              </>
            )}

            {/* 🔹 Vídeo: solo categoría */}
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

          {/* buscador */}
          <div className="relative sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Buscar por título..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 border-white/10 bg-slate-950/70 pl-9 text-sm text-slate-100 placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>

      {/* grid + paginación */}
      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400">
          No se encontraron prompts con ese filtro.
        </p>
      ) : (
        <>
          {/* grid de prompts */}
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
                    {/* MEDIA (video / imagen / icono) */}
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
                      {/* Solo mostrar área para texto/imagen */}
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
                          onClick={() =>
                            setExpandedId(isExpanded ? null : item.id)
                          }
                        >
                          {isExpanded ? "Ocultar prompt" : "Ver prompt"}
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
                              <Check className="mr-1 h-3 w-3" /> Copiado
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1 h-3 w-3" /> Copiar
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

          {/* controles de paginación */}
          {totalPages > 1 && (
            <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-slate-300 sm:flex-row">
              <p>
                Mostrando{" "}
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
                  Anterior
                </Button>
                <span className="text-[11px] text-slate-400">
                  Página{" "}
                  <span className="font-semibold text-teal-200">{page}</span> de{" "}
                  <span className="font-semibold text-teal-200">
                    {totalPages}
                  </span>
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  type="button"
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="rounded-full border border-white/10 bg-white/5 px-3 text-xs text-slate-100 disabled:opacity-40"
                >
                  Siguiente
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
