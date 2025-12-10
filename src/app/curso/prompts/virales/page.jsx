import { PromptLibrary } from "@/components/course/prompt-library";
import { viralTextPrompts } from "@/lib/prompts/viral-text";

export default function PromptsViralesPage() {
  return (
    <PromptLibrary
      title="Prompt virali"
      subtitle="Hook, script, caption, CTA e strutture pronte per massimizzare retention, condivisioni e conversioni."
      items={viralTextPrompts}
      type="text"
    />
  );
}
