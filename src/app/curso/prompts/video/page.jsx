// src/app/curso/prompts/video/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { videoPrompts } from "@/lib/prompts/video";

export default function PromptsVideoPage() {
  return (
    <PromptLibrary
      title="Prompts de vídeo"
      subtitle="Guiones y estructuras para vídeos virales, anuncios y contenido corto usando IA."
      items={videoPrompts}
      type="video"
      tutorialUrl="https://youtu.be/KCxUEFW3-nU"
    />
  );
}
