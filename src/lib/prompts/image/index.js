// src/lib/prompts/image/index.js

import { imagePromptsFotoRetratoEstudio } from "./foto-retrato-estudio";
import { imagePromptsFotoRetratoLifestyle } from "./foto-retrato-lifestyle";
import { imagePromptsFotoModaEditorial } from "./foto-moda-editorial";
import { imagePromptsFotoAutomotriz } from "./foto-automotriz";
import { imagePromptsFotoProductoEnManoUGC } from "./foto-producto-en-mano-ugc";
import { imagePromptsFotoGastronomia } from "./foto-gastronomia";
import { imagePromptsFotoFitnessDeporte } from "./foto-fitness-deporte";
import { imagePromptsFotoViajesLugares } from "./foto-viajes-lugares";
import { imagePromptsAvatarsIAVSL } from "./avatars-ia-vsl";
import { imagePromptsCaricaturaBrandMascotas } from "./caricatura-brand-mascotas";
import { imagePromptsSelfieSesionProMujer } from "./foto-selfie-sesion-pro-mujer";
import { imagePromptsSelfieSesionProHombre } from "./foto-selfie-sesion-pro-hombre";

export const imagePrompts = [
  ...imagePromptsFotoRetratoEstudio,
  ...imagePromptsFotoRetratoLifestyle,
  ...imagePromptsFotoModaEditorial,
  ...imagePromptsFotoAutomotriz,
  ...imagePromptsFotoProductoEnManoUGC,
  ...imagePromptsFotoGastronomia,
  ...imagePromptsFotoFitnessDeporte,
  ...imagePromptsFotoViajesLugares,
  ...imagePromptsAvatarsIAVSL,
  ...imagePromptsSelfieSesionProMujer,
  ...imagePromptsSelfieSesionProHombre,
  // ...imagePromptsCaricaturaBrandMascotas,
];
