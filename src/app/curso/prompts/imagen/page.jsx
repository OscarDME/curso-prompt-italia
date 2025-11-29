// src/app/curso/prompts/imagen/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { imagePrompts } from "@/lib/prompts/image";

export default function PromptsImagenPage() {
  return (
    <PromptLibrary
      title="Prompts de imagen"
      subtitle="Prompts listos para generar fotos, portadas y creatividades visuales de alto impacto."
      items={imagePrompts}
      type="image"
    />
  );
}
