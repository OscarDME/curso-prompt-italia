// src/lib/course-data.js
import { heroCopy, bonusesSectionCopy } from "./copy";

export const courseHero = {
  title: "Arsenal Completo de IA",
  subtitle: "Banco Secreto de Prompts",
  description: heroCopy.description,
  backgroundImage: "/hero-arsenal.png",
  ctaLabel: "COMENZAR AHORA",
};

export const courseModuleRows = [
  {
    id: "main",
    title: "Ruta principal — Banco Secreto de Prompts",
    modules: [
      {
        id: "home",
        title: "Inicio",
        subtitle:
          "Visión general del curso, cómo navegar la plataforma y aprovechar al máximo el Banco Secreto de Prompts.",
        image: "/modules/inicio.png",
        href: "/curso/inicio",
        tag: "Resumen",
      },
      {
        id: "text-prompts",
        title: "Prompts de texto",
        subtitle:
          "Biblioteca de prompts para copies, guiones, e-mails, posts, scripts de venta y mucho más.",
        image: "/modules/prompts-texto.png",
        href: "/curso/prompts/texto",
        tag: "Texto IA",
      },
      {
        id: "image-prompts",
        title: "Prompts de imagen",
        subtitle:
          "Prompts listos para generar imágenes, portadas, anuncios y fotos profesionales con IA.",
        image: "/modules/prompts-imagen.png",
        href: "/curso/prompts/imagen",
        tag: "Imagen IA",
      },
      {
        id: "video-prompts",
        title: "Prompts de vídeo",
        subtitle:
          "Prompts para crear vídeos virales, anuncios, reels y contenido corto usando IA.",
        image: "/modules/prompts-video.png",
        href: "/curso/prompts/video",
        tag: "Vídeo IA",
      },
      {
        id: "ia-tools",
        title: "Herramientas de IA",
        subtitle:
          "Tutoriales y recomendaciones de herramientas para crear webs, editar vídeos y automatizar tu negocio.",
        image: "/modules/herramientas-ia.png",
        href: "/curso/herramientas-ia", 
        tag: "Herramientas",
      },
      {
        id: "gpt-assistants",
        title: "Asistentes GPTs",
        subtitle:
          "+30 asistentes virtuales entrenados como copywriter, social media, programador, consultor y más.",
        image: "/modules/asistentes-gpts.png",
        href: "/curso/asistentes-gpts",
        tag: "Asistentes",
      },
      {
        id: "trainings",
        title: "Entrenamientos",
        subtitle:
          "Clases y entrenamientos para dominar ChatGPT, crear sistemas con IA y aplicar todo a tu realidad.",
        image: "/modules/entrenamientos.png",
        href: "/curso/entrenamientos",
        tag: "Clases",
      },
    ],
  },

  // Bonos bloqueados por ahora
  {
    id: "bonuses",
    title: bonusesSectionCopy.title,
    modules: bonusesSectionCopy.items.map((bonus) => ({
      id: bonus.id.toLowerCase(),
      title: bonus.title,
      subtitle: bonus.description,
      image: bonus.imageSrc || "/modules/bonus-placeholder.jpg",
      href: "#",
      tag: bonus.label,
      locked: true, // 👈 IMPORTANTE
    })),
  },
];
