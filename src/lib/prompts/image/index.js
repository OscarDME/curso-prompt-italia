// src/lib/prompts/image/index.js

import { imagePromptsFotoRetratoEstudio } from "./foto-retrato-estudio";
import { imagePromptsFotoRetratoLifestyle } from "./foto-retrato-lifestyle";
import { imagePromptsFotoModaEditorial } from "./foto-moda-editorial";
import { imagePromptsFotoAutomotriz } from "./foto-automotriz";
import { imagePromptsFotoProductoEnManoUGC } from "./foto-producto-en-mano-ugc";
import { imagePromptsFotoGastronomia } from "./foto-gastronomia";
import { imagePromptsFotoFitnessDeporte } from "./foto-fitness-deporte";
import { imagePromptsFotoViajesLugares } from "./foto-viajes-lugares";

export const imagePrompts = [
  ...imagePromptsFotoRetratoEstudio,
  ...imagePromptsFotoRetratoLifestyle,
  ...imagePromptsFotoModaEditorial,
  ...imagePromptsFotoAutomotriz,
  ...imagePromptsFotoProductoEnManoUGC,
  ...imagePromptsFotoGastronomia,
  ...imagePromptsFotoFitnessDeporte,
  ...imagePromptsFotoViajesLugares,
];
