import { PromptLibrary } from "@/components/course/prompt-library";
import { hyperrealismTextPrompts } from "@/lib/prompts/hyperrealism-text";

export default function PromptsHiperrealismoPage() {
  return (
    <PromptLibrary
      title="Pacchetto Iperrealismo PRO"
      subtitle="Modelli e prompt testuali per ottenere coerenza, micro-dettagli e un look ultra realistico."
      items={hyperrealismTextPrompts}
      type="text"
    />
  );
}
