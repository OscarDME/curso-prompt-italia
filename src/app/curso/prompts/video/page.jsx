import { PromptLibrary } from "@/components/course/prompt-library";
import { videoPrompts } from "@/lib/prompts/video";

export default function PromptsVideoPage() {
  return (
    <PromptLibrary
      title="Prompt video"
      subtitle="Script e strutture per video virali, annunci e contenuti brevi con l’IA."
      items={videoPrompts}
      type="video"
    />
  );
}
