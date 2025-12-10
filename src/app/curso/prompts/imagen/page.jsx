// src/app/curso/prompts/imagen/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { imagePrompts } from "@/lib/prompts/image";

export default function PromptsImagenPage() {
  return (
    <PromptLibrary
      title="Prompt per immagini"
      subtitle="Prompt pronti per generare foto, copertine e creatività visive ad alto impatto."
      items={imagePrompts}
      type="image"
    />
  );
}
