// src/app/curso/prompts/texto/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { textPrompts } from "@/lib/prompts-data";

export default function PromptsTextoPage() {
  return (
    <PromptLibrary
      title="Prompts de texto"
      subtitle="Biblioteca completa de prompts profesionales de texto para educación, marketing, ventas y más."
      items={textPrompts}
      type="text"
    />
  );
}
