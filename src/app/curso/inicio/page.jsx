import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { courseIntro } from "@/lib/course-intro";

// 🔹 Helper para convertir tu "markdown light" a HTML
function formatRichText(text) {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br />")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export default function InicioCursoPage() {
  return (
    <div className="space-y-6 py-6">
      {/* 🔙 Botón volver */}
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

      <h1 className="text-2xl md:text-3xl font-bold text-slate-50">
        {courseIntro.title}
      </h1>

      <p
        className="text-sm md:text-base text-slate-200 max-w-2xl"
        dangerouslySetInnerHTML={{
          __html: formatRichText(courseIntro.heroText),
        }}
      />

      <div className="space-y-8">
        {courseIntro.sections.map((section) => (
          <section key={section.id} className="space-y-3">
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

            {/* 🔹 Imagen opcional de la sección */}
            {section.image && (
              <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                <div className="relative h-40 w-full md:h-56">
                  <Image
                    src={section.image}
                    alt={section.imageAlt || section.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {section.bullets && (
              <ul className="mt-2 space-y-2 text-sm text-slate-200">
                {section.bullets.map((item) => (
                  <li key={item.label}>
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
          </section>
        ))}
      </div>
    </div>
  );
}
