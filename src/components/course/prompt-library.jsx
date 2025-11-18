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

export function PromptLibrary({ title, subtitle, items, type }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [expandedId, setExpandedId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [page, setPage] = useState(1);

  const pageSize = 18;

  const Icon = getIconForType(type);

  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category).filter(Boolean));
    return ["Todas", ...Array.from(set)];
  }, [items]);

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const matchesCategory =
          category === "Todas" || item.category === category;
        const matchesSearch = item.title
          .toLowerCase()
          .includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [items, category, search]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filtered.slice(start, end);
  }, [filtered, page, pageSize]);

  useEffect(() => {
    setPage(1);
  }, [search, category]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

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
          {/* filtro por categoría */}
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
                </span>{" "}
                de{" "}
                <span className="font-semibold text-teal-200">
                  {filtered.length}
                </span>{" "}
                prompts
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
                  <span className="font-semibold text-teal-200">
                    {page}
                  </span>{" "}
                  de{" "}
                  <span className="font-semibold text-teal-200">
                    {totalPages}
                  </span>
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  type="button"
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
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
