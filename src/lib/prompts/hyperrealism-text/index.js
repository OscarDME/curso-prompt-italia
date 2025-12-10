import { hyperrealismTextPromptsBase } from "./base";
import { hyperrealismTextPromptsLuz } from "./luz";
import { hyperrealismTextPromptsCamara } from "./camara";
import { hyperrealismTextPromptsMateriales } from "./materiales";
import { hyperrealismTextPromptsComposicion } from "./composicion";
import { hyperrealismTextPromptsColor } from "./color";
import { hyperrealismTextPromptsAtmosfera } from "./atmosfera";

export const hyperrealismTextPrompts = [
...hyperrealismTextPromptsBase,
...hyperrealismTextPromptsLuz,
...hyperrealismTextPromptsCamara,
...hyperrealismTextPromptsMateriales,
...hyperrealismTextPromptsComposicion,
...hyperrealismTextPromptsColor,
...hyperrealismTextPromptsAtmosfera];