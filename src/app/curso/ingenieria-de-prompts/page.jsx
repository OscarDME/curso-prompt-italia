// src/app/curso/ingenieria-de-prompts/page.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Circle, Play, RotateCcw } from "lucide-react";

import { ingenieriaPromptsCourse } from "@/lib/ingenieria-prompts-course";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const STORAGE_KEY = "course_progress_ingenieria_prompts_v1";

export default function IngenieriaDePromptsPage() {
  const course = ingenieriaPromptsCourse;

  const [activeIndex, setActiveIndex] = useState(0);
  const [completedIds, setCompletedIds] = useState(new Set());

  const lessons = course.lessons;

  // Load progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.completedIds)) {
        setCompletedIds(new Set(parsed.completedIds));
      }
      if (typeof parsed?.activeIndex === "number") {
        setActiveIndex(
          Math.min(Math.max(parsed.activeIndex, 0), lessons.length - 1)
        );
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          activeIndex,
          completedIds: Array.from(completedIds),
        })
      );
    } catch {
      // ignore
    }
  }, [activeIndex, completedIds]);

  const activeLesson = lessons[activeIndex];

  const completedCount = completedIds.size;
  const progressValue = useMemo(() => {
    if (lessons.length === 0) return 0;
    return Math.round((completedCount / lessons.length) * 100);
  }, [completedCount, lessons.length]);

  const isActiveCompleted = completedIds.has(activeLesson?.id);

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(lessons.length - 1, i + 1));

  const markCompleted = () => {
    if (!activeLesson?.id) return;
    setCompletedIds((prev) => {
      const next = new Set(prev);
      next.add(activeLesson.id);
      return next;
    });
  };

  const toggleLessonCompleted = (lessonId) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(lessonId)) next.delete(lessonId);
      else next.add(lessonId);
      return next;
    });
  };

  const resetProgress = () => {
    setActiveIndex(0);
    setCompletedIds(new Set());
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-6 py-6 overflow-x-hidden">
      {/* Header / Back */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="w-fit max-w-full whitespace-normal rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
        >
          <Link href="/curso">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna all’inizio del corso
          </Link>
        </Button>

        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-teal-200">
            {course.meta?.level || "Corso"}
          </Badge>
          <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200">
            {course.meta?.estimatedTime || `${lessons.length} lezioni`}
          </Badge>
        </div>
      </div>

      {/* Hero */}
      <section className="space-y-3 rounded-3xl border border-teal-500/15 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-6 md:px-8 md:py-7">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
          {course.title}
        </h1>
        {course.subtitle && (
          <p className="text-sm md:text-base text-teal-200/90">{course.subtitle}</p>
        )}
        {course.description && (
          <p className="max-w-3xl text-sm md:text-base text-slate-200">
            {course.description}
          </p>
        )}

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-slate-400">
              Progressi
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100">
              {completedCount}/{lessons.length} completate
            </p>
            <div className="mt-3">
              <Progress value={progressValue} />
              <p className="mt-2 text-[11px] text-slate-400">{progressValue}%</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-slate-400">
              Lezione attuale
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-100 break-words">
              {activeIndex + 1}. {activeLesson?.title}
            </p>
            {activeLesson?.summary && (
              <p className="mt-2 text-xs text-slate-300 line-clamp-2">
                {activeLesson.summary}
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 min-w-0">
            <p className="text-[11px] uppercase tracking-wider text-slate-400">
              Azioni rapide
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={markCompleted}
                className="rounded-full border-teal-400/60 bg-teal-400/10 text-xs text-teal-100 hover:bg-teal-400/20"
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                {isActiveCompleted ? "Completata" : "Segna come completata"}
              </Button>

              <Button
                size="sm"
                variant="ghost"
                onClick={resetProgress}
                className="rounded-full border border-white/10 bg-white/5 text-xs text-slate-100 hover:bg-white/10"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reimposta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Layout: Player + Sidebar */}
      <div className="grid gap-4 lg:grid-cols-[1.55fr_0.85fr]">
        {/* Player */}
        <Card className="overflow-hidden border-white/10 bg-slate-950/70 min-w-0">
          <CardHeader className="space-y-2 pb-3">
            <div className="flex items-start justify-between gap-3 min-w-0">
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-teal-300">
                  Lezione {activeIndex + 1} di {lessons.length}
                </p>
                <h2 className="text-lg md:text-xl font-semibold text-slate-50 break-words">
                  {activeLesson?.title}
                </h2>
                {activeLesson?.summary && (
                  <p className="mt-1 text-sm text-slate-300">
                    {activeLesson.summary}
                  </p>
                )}
              </div>

              <Badge className="bg-black/60 text-[11px] uppercase tracking-wide text-slate-200 whitespace-nowrap">
                <Play className="mr-1 h-3 w-3" />
                Video lezione
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Video */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <div className="relative aspect-video w-full">
                <iframe
                  src={activeLesson?.drivePreviewUrl}
                  className="h-full w-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={activeLesson?.title || "Video lezione"}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  className="rounded-full border border-white/10 bg-white/5 px-4 text-xs text-slate-100 disabled:opacity-40"
                >
                  Precedente
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={goNext}
                  disabled={activeIndex === lessons.length - 1}
                  className="rounded-full border border-white/10 bg-white/5 px-4 text-xs text-slate-100 disabled:opacity-40"
                >
                  Successiva
                </Button>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={markCompleted}
                className="rounded-full border-teal-400/60 bg-teal-400/10 px-4 text-xs text-teal-100 hover:bg-teal-400/20"
              >
                <CheckCircle2 className="mr-2 h-4 w-4" />
                {isActiveCompleted ? "Completata" : "Segna come completata"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar: Lessons */}
        <Card className="border-white/10 bg-slate-950/70 min-w-0">
          <CardHeader className="pb-3">
            <h3 className="text-sm font-semibold text-slate-50">Lezioni</h3>
            <p className="text-xs text-slate-300">
              Clicca per passare a qualsiasi video. I tuoi progressi vengono salvati.
            </p>
          </CardHeader>

          <CardContent className="space-y-2">
            {lessons.map((l, idx) => {
              const isActive = idx === activeIndex;
              const done = completedIds.has(l.id);

              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "w-full rounded-2xl border p-3 text-left transition min-w-0",
                    isActive
                      ? "border-teal-400/60 bg-teal-400/10"
                      : "border-white/10 bg-black/20 hover:border-teal-400/40 hover:bg-slate-900/40",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="mt-0.5 flex-shrink-0">
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 text-teal-300" />
                      ) : (
                        <Circle className="h-4 w-4 text-slate-500" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400">
                        Lezione {idx + 1}
                      </p>
                      <p className="truncate text-sm font-semibold text-slate-100">
                        {l.title}
                      </p>
                      {l.summary && (
                        <p className="mt-1 line-clamp-2 text-xs text-slate-300">
                          {l.summary}
                        </p>
                      )}

                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Badge className="bg-black/60 text-[10px] uppercase tracking-wide text-teal-200">
                          Video
                        </Badge>

                        {/* ✅ FIX: no button inside button */}
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleLessonCompleted(l.id);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleLessonCompleted(l.id);
                            }
                          }}
                          className="cursor-pointer text-[11px] font-semibold text-slate-200 underline decoration-white/20 underline-offset-4 hover:text-teal-200"
                        >
                          {done ? "Segna come da fare" : "Segna come completata"}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Syllabus */}
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
          Programma del corso
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {course.syllabus.map((m) => (
            <Card key={m.id} className="border-white/10 bg-slate-950/70 min-w-0">
              <CardHeader className="pb-2">
                <h3 className="text-sm font-semibold text-slate-50">{m.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-200">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2 min-w-0">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-300/80" />
                      <span className="text-sm text-slate-300 break-words">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
