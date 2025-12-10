// src/app/curso/prompts/texto/page.jsx
import { PromptLibrary } from "@/components/course/prompt-library";
import { textPrompts } from "@/lib/prompts/text";

export default function PromptsTextoPage() {
  return (
    <PromptLibrary
      title="Prompt di testo"
      subtitle="Libreria completa di prompt professionali di testo per formazione, marketing, vendite e altro."
      items={textPrompts}
      type="text"
    />
  );
}
