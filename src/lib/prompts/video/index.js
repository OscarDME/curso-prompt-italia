// src/lib/prompts/video/index.js

import { videoPromptsReelsViralesNegocio } from "./virales-mixtos-veo3";
import { videoPromptsDemosProductoBeforeAfter } from "./demos-producto-before-after";
import { videoPromptsUGCTestimonios } from "./ugc-testimonios";
import { videoPromptsAvatarHablante } from "./avatar-hablante";
import { videoPromptsViraliAssurdiSora2 } from "./virales-absurdos";
// import { videoPromptsUGCTestimonios } from "./ugc-testimonios";
// import { videoPromptsStorytellingMarcaPersonal } from "./storytelling-marca-personal";
import { videoPromptsTipsEducativos } from "./tips-educativos";
// import { videoPromptsAutoridadMiniMasterclass } from "./autoridad-mini-masterclass";
// import { videoPromptsAdsTopFunnel } from "./ads-top-funnel";
// import { videoPromptsAdsMiddleFunnel } from "./ads-middle-funnel";
// import { videoPromptsAdsBottomFunnel } from "./ads-bottom-funnel";
// import { videoPromptsAvatarHablante } from "./avatar-hablante";
// import { videoPromptsHumorParodiasIA } from "./humor-parodias-ia";
// import { videoPromptsTrendsPOVMemes } from "./trends-pov-memes";
import { videoPromptsVidaDiariaMix } from "./vida-diaria-mix-veo3";

export const videoPrompts = [
  ...videoPromptsReelsViralesNegocio,       // 20
  ...videoPromptsDemosProductoBeforeAfter,  // 18
  ...videoPromptsUGCTestimonios,            // 16
  ...videoPromptsVidaDiariaMix,
  ...videoPromptsAvatarHablante,
  ...videoPromptsViraliAssurdiSora2,
//   ...videoPromptsStorytellingMarcaPersonal, // 16
  ...videoPromptsTipsEducativos,//   ...videoPromptsAutoridadMiniMasterclass,  // 16
//   ...videoPromptsAdsTopFunnel,              // 14
//   ...videoPromptsAdsMiddleFunnel,           // 14
//   ...videoPromptsAdsBottomFunnel,           // 12
//   ...videoPromptsAvatarHablante,            // 16
//   ...videoPromptsHumorParodiasIA,           // 18
//   ...videoPromptsTrendsPOVMemes,            // 16
];
