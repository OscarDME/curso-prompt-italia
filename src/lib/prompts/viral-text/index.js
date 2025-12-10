import { viralTextPromptsHooks } from "./hooks";
import { viralTextPromptsGuiones } from "./guiones";
import { viralTextPromptsCaptions } from "./captions";
import { viralTextPromptsCtas } from "./ctas";
import { viralTextPromptsHooksContradiccion } from "./hooks-contradiccion";
import { viralTextPromptsHooksEmpatia } from "./hooks-empatia";
import { viralTextPromptsHooksCuriosidad } from "./hooks-curiosidad";
import { viralTextPromptsHooksDolor } from "./hooks-dolor";
import { viralTextPromptsGuionesEducativo } from "./guiones-educativo";

export const viralTextPrompts = [
...viralTextPromptsHooks,
...viralTextPromptsGuiones,
...viralTextPromptsCaptions,
...viralTextPromptsCtas,
...viralTextPromptsHooksContradiccion,
...viralTextPromptsHooksEmpatia,
...viralTextPromptsHooksCuriosidad,
...viralTextPromptsHooksDolor,
...viralTextPromptsGuionesEducativo];