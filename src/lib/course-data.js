// src/lib/course-data.js
import { heroCopy, bonusesSectionCopy } from "./copy";

export const courseHero = {
  title: "Arsenale Completo di IA",
  subtitle: "Banca Segreta di Prompt",
  description: heroCopy.description,
  backgroundImage: "/hero-arsenal.png",
  ctaLabel: "INIZIA ORA",
};

export const courseModuleRows = [
  {
    id: "main",
    title: "Percorso principale — Banca Segreta di Prompt",
    modules: [
      {
        id: "home",
        title: "Inizio",
        subtitle:
          "Panoramica del corso, come navigare la piattaforma e sfruttare al massimo la Banca Segreta di Prompt.",
        image: "/modules/inicio.png",
        href: "/curso/inicio",
        tag: "Riepilogo",
      },
      {
        id: "text-prompts",
        title: "Prompt di testo",
        subtitle:
          "Libreria di prompt per copy, script, e-mail, post, script di vendita e molto altro.",
        image: "/modules/prompts-texto.png",
        href: "/curso/prompts/texto",
        tag: "Testo IA",
      },
      {
        id: "viral-prompts-text",
        title: "Prompt virali",
        subtitle:
          "Prompt pronti per hook, script, strutture virali, CTA, titoli e contenuti pensati per massimizzare la retention.",
        image: "/modules/prompts-virales.png", // crea questa immagine o cambia il percorso
        href: "/curso/prompts/virales", // crea poi questo percorso
        tag: "Testo IA",
      },

      {
        id: "hyperrealism-pack-text",
        title: "Pack di iperrealismo",
        subtitle:
          "Prompt e framework per descrizioni ultra realistiche, coerenza, dettagli e controllo dello stile (versione testo).",
        image: "/modules/hiperrealismo-pro.png", // crea questa immagine o cambia il percorso
        href: "/curso/prompts/hiperrealismo", // crea poi questo percorso
        tag: "Testo IA",
      },

      {
        id: "image-prompts",
        title: "Prompt per immagini",
        subtitle:
          "Prompt pronti per generare immagini, copertine, annunci e foto professionali con l'IA.",
        image: "/modules/prompts-imagen.png",
        href: "/curso/prompts/imagen",
        tag: "Immagini IA",
      },
      {
        id: "video-prompts",
        title: "Prompt per video",
        subtitle:
          "Prompt per creare video virali, annunci, reels e contenuti brevi usando l'IA.",
        image: "/modules/prompts-video.png",
        href: "/curso/prompts/video",
        tag: "Video IA",
      },
      {
        id: "ia-tools",
        title: "Strumenti di IA",
        subtitle:
          "Tutorial e consigli su strumenti per creare siti web, montare video e automatizzare il tuo business.",
        image: "/modules/herramientas-ia.png",
        href: "/curso/herramientas-ia",
        tag: "Strumenti",
      },
      {
        id: "gpt-assistants",
        title: "Assistenti GPT",
        subtitle:
          "+30 assistenti virtuali addestrati come copywriter, social media, programmatore, consulente e altro.",
        image: "/modules/asistentes-gpts.png",
        href: "/curso/asistentes-gpts",
        tag: "Assistenti",
      },
      {
        id: "trainings",
        title: "Formazioni",
        subtitle:
          "Lezioni e training per dominare ChatGPT, creare sistemi con l'IA e applicare tutto alla tua realtà.",
        image: "/modules/entrenamientos.png",
        href: "/curso/entrenamientos",
        tag: "Lezioni",
      },
    ],
  },

  // Bonus bloccati per ora
  {
    id: "bonuses",
    title: bonusesSectionCopy.title,
    modules: bonusesSectionCopy.items.map((bonus) => ({
      id: bonus.id.toLowerCase(),
      title: bonus.title,
      subtitle: bonus.description,
      image: bonus.imageSrc || "/modules/bonus-placeholder.jpg",
      href: bonus.href || "/curso/bonos",
      tag: bonus.label,
      locked: false, // 👈 IMPORTANTE
    })),
  },
];

export const promptEngineeringCourseCopy = {
  rowId: "prompt-engineering",
  rowTitle: "Ingegneria dei Prompt",
  module: {
    id: "prompt-engineering-course",
    label: "Corso",
    title: "Corso di Ingegneria dei Prompt",
    description:
      "Impara a padroneggiare come adattare, ottimizzare e creare prompt per risultati professionali.",
    imageSrc: "/modules/ingenieria-prompts.png", // cambia con la tua immagine
    href: "/curso/ingenieria-de-prompts",
    locked: false,
  },
};
