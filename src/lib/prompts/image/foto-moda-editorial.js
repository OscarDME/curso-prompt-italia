// src/lib/prompts/image/foto-moda-editorial.js

export const imagePromptsFotoModaEditorial = [
  // =========================
  // CATEGORY: Moda editorial
  // =========================
  {
    id: "img-foto-moda-001",
    title: "Moda editorial en estudio (fondo gris, pose elegante)",
    area: "Fotografía Pro",
    category: "Moda editorial",
    summary:
      "Foto editorial de moda tipo revista: estudio, styling premium y luz suave controlada.",
    prompt: `Genera una fotografía REALISTA de moda editorial en estudio.

DATOS:
- Modelo: [mujer/hombre/persona] de [edad], [rasgos], [peinado]
- Outfit: [describir outfit editorial], telas con textura real (seda/lana/cuero)
- Accesorios: [mínimos/premium], sin logos
- Fondo: gris neutro liso, estilo estudio

ILUMINACIÓN:
- Softbox grande lateral 45° + relleno suave (shadows suaves)
- Piel natural, textura real, sin efecto plástico
- Look editorial limpio

CÁMARA:
- Full-frame, 85mm, f/2.8, ISO 100, 1/160s
- Nitidez en ojos, detalle en ropa, bokeh suave

COMPOSICIÓN:
- Plano 3/4 (rodillas a cabeza) o plano completo
- Pose elegante, postura editorial
- Color grading: neutro + contraste moderado (revista)

RESTRICCIONES:
- Sin texto/watermark
- Anatomía realista (manos/pies correctos)`,
    thumbnail: "/images/foto-pro/moda1.webp",
  },
  {
    id: "img-foto-moda-002",
    title: "Editorial high-fashion (fondo blanco high-key, look premium)",
    area: "Fotografía Pro",
    category: "Moda editorial",
    summary:
      "Editorial high-fashion high-key: iluminación luminosa, estética de pasarela y limpieza total.",
    prompt: `Genera una foto REALISTA editorial high-fashion (estudio high-key).

DATOS:
- Modelo: [persona], [edad], look high-fashion
- Outfit: [alta moda], silueta marcada, textura premium
- Fondo: blanco puro, limpio

ILUMINACIÓN:
- High-key uniforme, sin sombras duras
- Brillo controlado, piel natural con textura real

CÁMARA:
- 50mm u 85mm, f/3.2, ISO 100
- Nitidez alta en rostro y outfit

COMPOSICIÓN:
- Plano completo con espacio negativo arriba
- Pose de pasarela, actitud fuerte

RESTRICCIONES:
- Sin texto/logos
- No sobreexponer rostro, evitar piel “plástica”`,
    thumbnail: "/images/foto-pro/moda2.webp",
  },
  {
    id: "img-foto-moda-003",
    title: "Editorial minimalista (fondo crema, luz suave, look clean)",
    area: "Fotografía Pro",
    category: "Moda editorial",
    summary:
      "Moda editorial minimal: paleta crema, styling simple, perfecto para marca personal premium.",
    prompt: `Genera una foto REALISTA de moda editorial minimalista.

DATOS:
- Modelo: [persona], [edad], expresión serena
- Outfit: tonos crema/beige, estilo minimal (sin patrones)
- Fondo: crema/cálido suave, uniforme

ILUMINACIÓN:
- Luz suave tipo ventana + relleno sutil
- Sombras delicadas, piel realista

CÁMARA:
- 85mm, f/2.5, ISO 100
- Color grading: cálido leve, contraste bajo/medio

COMPOSICIÓN:
- Plano 3/4 o medio, pose natural editorial
- Detalles de textura de tela visibles

RESTRICCIONES:
- Sin texto/watermark
- Anatomía correcta, sin dedos extra`,
    thumbnail: "/images/foto-pro/moda3.webp",
  },
  {
    id: "img-foto-moda-004",
    title: "Editorial dramática low-key (fondo negro, contraste controlado)",
    area: "Fotografía Pro",
    category: "Moda editorial",
    summary:
      "Estética editorial dramática: fondo negro, sombras con detalle y vibe lujo.",
    prompt: `Genera una fotografía REALISTA de moda editorial low-key.

DATOS:
- Modelo: [persona], [edad], actitud fuerte
- Outfit: negro o tonos oscuros (cuero/lana), look lujo
- Fondo: negro profundo

ILUMINACIÓN:
- Key light lateral suave (45°) + rim light sutil en cabello/hombros
- Alto contraste controlado, detalles visibles en ropa

CÁMARA:
- 85mm, f/2.2, ISO 160
- Enfoque en ojos, nitidez alta

COMPOSICIÓN:
- Plano medio-corto o 3/4
- Pose editorial con poder, manos naturales

RESTRICCIONES:
- Sin texto/logos
- Evitar sombras empastadas (quiero detalle)`,
    thumbnail: "/images/foto-pro/moda4.webp",
  },
  {
    id: "img-foto-moda-005",
    title: "Editorial beauty-fashion (primer plano, maquillaje editorial sutil)",
    area: "Fotografía Pro",
    category: "Moda editorial",
    summary:
      "Primer plano editorial con acento en maquillaje/look fashion, piel realista y acabado de revista.",
    prompt: `Genera un retrato REALISTA editorial beauty-fashion.

DATOS:
- Modelo: [persona], [edad], maquillaje editorial sutil (no exagerado)
- Outfit: cuello alto / blazer fashion minimal
- Fondo: gris claro o beige

ILUMINACIÓN:
- Softbox frontal suave + relleno leve
- Piel con textura real (poros sutiles), sin blur

CÁMARA:
- 85mm, f/2.8, ISO 100
- Enfoque quirúrgico en ojos

COMPOSICIÓN:
- Primer plano o busto, mirada directa a cámara
- Estética de revista premium

RESTRICCIONES:
- Sin texto/watermark
- Evitar labios/ojos deformes`,
    thumbnail: "/images/foto-pro/moda5.webp",
  },

  // =========================
  // CATEGORY: Street style
  // =========================
  {
    id: "img-foto-moda-006",
    title: "Street style en ciudad (outfit completo, bokeh urbano)",
    area: "Fotografía Pro",
    category: "Street style",
    summary:
      "Foto de outfit completo tipo street style con fondo urbano desenfocado y look natural.",
    prompt: `Genera una foto REALISTA street style en ciudad.

DATOS:
- Modelo: [persona], [edad]
- Outfit: [describir look completo], estilo streetwear o smart casual
- Ubicación: calle urbana moderna, edificios al fondo (bokeh)
- Pose: caminando o parado/a natural, no posado rígido

ILUMINACIÓN:
- Luz natural (tarde) suave, sombras ligeras

CÁMARA:
- 35mm, f/2, ISO 200
- Enfoque en modelo, bokeh moderado

COMPOSICIÓN:
- Plano completo, espacio en la dirección de la mirada/camino
- Estética real de fotógrafo callejero

RESTRICCIONES:
- Sin texto/logos
- Proporciones corporales realistas`,
    thumbnail: "/images/foto-pro/moda6.webp",
  },
  {
    id: "img-foto-moda-007",
    title: "Street style con pared texturizada (minimal, look premium)",
    area: "Fotografía Pro",
    category: "Street style",
    summary:
      "Street style minimal con pared de fondo, ideal para lookbook y marca personal.",
    prompt: `Genera una foto REALISTA street style con fondo de pared texturizada.

DATOS:
- Modelo: [persona], [edad]
- Outfit: minimal premium (tonos neutros, telas de calidad)
- Fondo: pared de concreto o piedra clara, textura sutil
- Pose: editorial simple (manos en bolsillos / brazos cruzados natural)

ILUMINACIÓN:
- Sombra abierta (luz suave), tonos piel realistas

CÁMARA:
- 50mm, f/2.2, ISO 100
- Nitidez en ropa y rostro

COMPOSICIÓN:
- Plano 3/4 o completo, encuadre limpio

RESTRICCIONES:
- Sin texto/watermark
- Evitar manos deformes`,
    thumbnail: "/images/foto-pro/moda7.webp",
  },
  {
    id: "img-foto-moda-008",
    title: "Street style con movimiento (candid, paso congelado)",
    area: "Fotografía Pro",
    category: "Street style",
    summary:
      "Estilo street candid: movimiento realista, paso congelado y energía urbana.",
    prompt: `Genera una foto REALISTA street candid con movimiento.

DATOS:
- Modelo: [persona], [edad]
- Outfit: [streetwear], capas (chaqueta + pantalón + sneakers)
- Acción: caminando rápido, paso congelado, mirada natural
- Fondo: ciudad con profundidad, gente/cars desenfocados

ILUMINACIÓN:
- Luz natural de tarde, contraste medio

CÁMARA:
- 35mm, f/2, ISO 400
- Velocidad alta para congelar movimiento (sin blur exagerado)

COMPOSICIÓN:
- Plano completo, perspectiva callejera, dinamismo

RESTRICCIONES:
- Sin texto/logos
- Evitar pies deformes, anatomía rara`,
    thumbnail: "/images/foto-pro/moda8.webp",
  },
  {
    id: "img-foto-moda-009",
    title: "Street style 'golden hour' (luz dorada en cabello, bokeh)",
    area: "Fotografía Pro",
    category: "Street style",
    summary:
      "Street style al atardecer con luz dorada y ambiente cálido, ideal para Instagram.",
    prompt: `Genera una foto REALISTA street style en golden hour.

DATOS:
- Modelo: [persona], [edad], expresión confiada
- Outfit: tonos tierra, estilo fashion casual
- Escena: boulevard urbano con árboles, fondo desenfocado

ILUMINACIÓN:
- Luz dorada lateral (rim light suave en cabello)
- Piel natural, tonos cálidos

CÁMARA:
- 50mm u 85mm, f/1.8, ISO 200
- Enfoque en ojos, bokeh suave

COMPOSICIÓN:
- Plano 3/4, modelo ligeramente en tercios
- Sensación cálida y premium

RESTRICCIONES:
- Sin texto/watermark
- Evitar saturación excesiva`,
    thumbnail: "/images/foto-pro/moda9.webp",
  },
  {
    id: "img-foto-moda-010",
    title: "Street style en avenida con hojas otoñales (look editorial)",
    area: "Fotografía Pro",
    category: "Street style",
    summary:
      "Street editorial con vibra otoño: hojas, avenida y colores cálidos realistas.",
    prompt: `Genera una foto REALISTA street editorial en otoño.

DATOS:
- Modelo: [persona], [edad]
- Outfit: abrigo/trench + botas, tonos cálidos
- Escena: avenida con árboles otoñales y hojas en el suelo
- Pose: caminando o parado/a con actitud editorial

ILUMINACIÓN:
- Luz suave (nublado o tarde), color grading cálido

CÁMARA:
- 35mm o 50mm, f/2, ISO 250
- Fondo con bokeh moderado

COMPOSICIÓN:
- Plano completo o 3/4, profundidad de calle

RESTRICCIONES:
- Sin texto/logos
- Evitar fondos irreales o demasiado perfectos`,
    thumbnail: "/images/foto-pro/moda10.webp",
  },

  // =========================
  // CATEGORY: Lookbook / catálogo
  // =========================
  {
    id: "img-foto-moda-011",
    title: "Lookbook limpio (serie consistente, fondo neutro, 1 outfit)",
    area: "Fotografía Pro",
    category: "Lookbook / catálogo",
    summary:
      "Imagen tipo lookbook con consistencia total: fondo neutro, misma luz, perfecto para catálogo.",
    prompt: `Genera una foto REALISTA estilo lookbook de catálogo (consistencia total).

DATOS:
- Modelo: [persona], [edad]
- Outfit: [describir outfit], mostrar textura y caída de la tela
- Fondo: gris claro o blanco roto, limpio

REQUISITO DE CONSISTENCIA:
- Mantener EXACTAMENTE el mismo set: iluminación, fondo, encuadre, distancia de cámara
- Estilo catálogo premium, sin dramatismo

ILUMINACIÓN:
- Luz uniforme suave, sombras mínimas

CÁMARA:
- 50mm, f/4 (para nitidez del outfit), ISO 100

COMPOSICIÓN:
- Plano completo, modelo centrado, postura natural

RESTRICCIONES:
- Sin texto/logos
- Proporciones corporales exactas`,
    thumbnail: "/images/foto-pro/moda11.webp",
  },
  {
    id: "img-foto-moda-012",
    title: "Lookbook con 3 poses (mismo set, variación de postura)",
    area: "Fotografía Pro",
    category: "Lookbook / catálogo",
    summary:
      "Foto lookbook para serie: 3 variaciones de pose manteniendo el mismo encuadre, luz y fondo.",
    prompt: `Genera una foto REALISTA estilo lookbook para serie (misma escena).

DATOS:
- Modelo: [persona], [edad]
- Outfit: [describir outfit]
- Fondo: neutro limpio (gris claro/blanco roto)

INSTRUCCIÓN:
- Crear una composición tipo lookbook lista para repetirse
- Pose: [pose 1], [pose 2], [pose 3] (o genera 3 opciones de pose natural)

ILUMINACIÓN:
- Suave y uniforme, sombras mínimas

CÁMARA:
- 50mm, f/4, ISO 100, nitidez alta

COMPOSICIÓN:
- Plano completo, centrado, espacio para recorte

RESTRICCIONES:
- Sin texto/logos
- Evitar proporciones raras, manos deformes`,
    thumbnail: "/images/foto-pro/moda12.webp",
  },
  {
    id: "img-foto-moda-013",
    title: "Catálogo premium tipo ecommerce (fondo claro, detalle de tela)",
    area: "Fotografía Pro",
    category: "Lookbook / catálogo",
    summary:
      "Imagen tipo ecommerce premium con fondo claro y enfoque en textura/material de la prenda.",
    prompt: `Genera una foto REALISTA de catálogo premium (ecommerce fashion).

DATOS:
- Modelo: [persona], [edad]
- Outfit: [prenda principal], enfatizar textura y costuras
- Fondo: blanco roto o gris claro uniforme

ILUMINACIÓN:
- Softbox frontal suave + relleno para eliminar sombras duras
- Piel natural y detalle de tela nítido

CÁMARA:
- 70mm u 85mm, f/5.6 (detalle y nitidez), ISO 100

COMPOSICIÓN:
- Plano 3/4 o completo; prenda protagonista
- Estilo limpio, comercial premium

RESTRICCIONES:
- Sin texto/logos
- Evitar artefactos en tela o bordes`,
    thumbnail: "/images/foto-pro/moda13.webp",
  },
  {
    id: "img-foto-moda-014",
    title: "Lookbook outdoor elegante (pared clara, luz suave, editorial clean)",
    area: "Fotografía Pro",
    category: "Lookbook / catálogo",
    summary:
      "Lookbook exterior limpio: pared clara, luz suave y estética editorial minimal.",
    prompt: `Genera una foto REALISTA lookbook outdoor (clean).

DATOS:
- Modelo: [persona], [edad]
- Outfit: [describir], tonos neutros, elegante
- Fondo: pared clara exterior (blanco/beige), minimalista

ILUMINACIÓN:
- Sombra abierta (luz suave), sin sombras duras

CÁMARA:
- 50mm, f/2.8, ISO 100
- Nitidez alta, fondo ligeramente separado

COMPOSICIÓN:
- Plano completo o 3/4, modelo centrado
- Estética editorial minimal

RESTRICCIONES:
- Sin texto/logos
- Evitar deformaciones en manos/pies`,
    thumbnail: "/images/foto-pro/moda14.webp",
  },
  {
    id: "img-foto-moda-015",
    title: "Lookbook con layering (capas, textura, estilo otoño premium)",
    area: "Fotografía Pro",
    category: "Lookbook / catálogo",
    summary:
      "Lookbook de otoño con capas (layering), textura y tonos cálidos premium.",
    prompt: `Genera una foto REALISTA lookbook con layering (otoño).

DATOS:
- Modelo: [persona], [edad]
- Outfit: capas (abrigo + suéter + pantalón), tonos tierra
- Fondo: exterior urbano neutro o pared texturizada suave

ILUMINACIÓN:
- Luz suave (tarde/nublado), color grading cálido

CÁMARA:
- 50mm, f/2.8, ISO 200
- Detalle visible en telas, costuras y texturas

COMPOSICIÓN:
- Plano 3/4, pose natural editorial

RESTRICCIONES:
- Sin texto/logos
- Evitar telas "derretidas" o artefactos`,
    thumbnail: "/images/foto-pro/moda15.webp",
  },

  // =========================
  // CATEGORY: Luces neón / noche
  // =========================
  {
    id: "img-foto-moda-016",
    title: "Moda nocturna con neón (magenta/cian, look cyber editorial)",
    area: "Fotografía Pro",
    category: "Luces neón / noche",
    summary:
      "Editorial nocturna con neón y vibe cyber, realista y estética de campaña.",
    prompt: `Genera una foto REALISTA de moda con luces neón (editorial nocturna).

DATOS:
- Modelo: [persona], [edad], actitud fuerte
- Outfit: negro/cromo/cuero, estilo moderno
- Escena: calle nocturna con neones magenta y cian, reflejos en suelo

ILUMINACIÓN:
- Neón como key light (suave) + relleno mínimo
- Piel realista: ajustar neón para no volverla irreal

CÁMARA:
- 35mm, f/1.8, ISO 800, look nocturno nítido
- Bokeh de luces al fondo

COMPOSICIÓN:
- Plano 3/4, pose editorial
- Atmosfera cinematográfica

RESTRICCIONES:
- Sin texto/logos
- Evitar “piel fluorescente”`,
    thumbnail: "/images/foto-pro/moda16.webp",
  },
  {
    id: "img-foto-moda-017",
    title: "Moda nocturna con flash suave (party editorial, grano sutil)",
    area: "Fotografía Pro",
    category: "Luces neón / noche",
    summary:
      "Estilo editorial tipo fiesta con flash suave y ambiente nocturno realista.",
    prompt: `Genera una foto REALISTA de moda nocturna con flash suave (party editorial).

DATOS:
- Modelo: [persona], [edad], expresión divertida pero elegante
- Outfit: fiesta (vestido/chaqueta premium), sin logos
- Fondo: calle nocturna o interior con luces desenfocadas

ILUMINACIÓN:
- Flash suave (bounce) + luz ambiente
- Film grain MUY sutil, look editorial

CÁMARA:
- 35mm, f/2.2, ISO 1000
- Nitidez natural, no hiperperfecta

COMPOSICIÓN:
- Plano medio o 3/4, gesto espontáneo editorial

RESTRICCIONES:
- Sin texto/watermark
- Evitar flash quemado en piel`,
    thumbnail: "/images/foto-pro/moda17.webp",
  },
  {
    id: "img-foto-moda-018",
    title: "Editorial nocturna elegante (faroles cálidos, bokeh, lujo)",
    area: "Fotografía Pro",
    category: "Luces neón / noche",
    summary:
      "Foto nocturna elegante con faroles cálidos y vibe lujo discreto.",
    prompt: `Genera una foto REALISTA editorial nocturna elegante en ciudad.

DATOS:
- Modelo: [persona], [edad], actitud premium
- Outfit: abrigo largo / blazer premium (tonos oscuros)
- Escena: calle con faroles cálidos, bokeh de luces, fondo desenfocado

ILUMINACIÓN:
- Luz cálida de faroles + relleno sutil para rostro
- Piel realista, tonos cálidos controlados

CÁMARA:
- 50mm, f/1.8, ISO 800
- Bokeh suave, enfoque en ojos

COMPOSICIÓN:
- Plano 3/4 o medio, pose editorial tranquila
- Estética de campaña premium

RESTRICCIONES:
- Sin texto/logos
- Evitar exceso de ruido o desenfoque raro`,
    thumbnail: "/images/foto-pro/moda18.webp",
  },
  {
    id: "img-foto-moda-019",
    title: "Moda en lluvia nocturna (reflejos fuertes, editorial cinematográfico)",
    area: "Fotografía Pro",
    category: "Luces neón / noche",
    summary:
      "Editorial nocturna con lluvia y reflejos, look cinematográfico realista.",
    prompt: `Genera una foto REALISTA editorial nocturna con lluvia y reflejos.

DATOS:
- Modelo: [persona], [edad], expresión seria editorial
- Outfit: trench/abrigo, tonos oscuros
- Escena: calle mojada con reflejos intensos + luces desenfocadas

ILUMINACIÓN:
- Key light suave lateral + luces de fondo reflejadas
- Piel natural, gotas realistas sutiles

CÁMARA:
- 35mm, f/1.8, ISO 1000
- Detalle en rostro, bokeh en fondo

COMPOSICIÓN:
- Plano 3/4, paraguas opcional (sin protagonismo)
- Atmosfera cinematográfica

RESTRICCIONES:
- Sin texto/logos
- Evitar gotas gigantes o “fake”`,
    thumbnail: "/images/foto-pro/moda19.webp",
  },
  {
    id: "img-foto-moda-020",
    title: "Editorial nocturna interior (bar elegante, luz cálida, lujo discreto)",
    area: "Fotografía Pro",
    category: "Luces neón / noche",
    summary:
      "Moda editorial en interior tipo bar elegante con luz cálida y estética lujo.",
    prompt: `Genera una foto REALISTA de moda editorial en interior nocturno (bar elegante).

DATOS:
- Modelo: [persona], [edad]
- Outfit: elegante premium (vestido/terno), sin logos
- Escena: bar de lujo con luces cálidas, fondo desenfocado

ILUMINACIÓN:
- Luz cálida ambiental + luz suave dirigida al rostro
- Contraste medio, piel realista

CÁMARA:
- 50mm, f/1.8, ISO 1200
- Bokeh con luces, nitidez en ojos

COMPOSICIÓN:
- Plano medio o 3/4, pose editorial discreta
- Estética: lujo, sofisticación, campaña

RESTRICCIONES:
- Sin texto/watermark
- Evitar ruido excesivo o blur artificial`,
    thumbnail: "/images/foto-pro/moda20.webp",
  },
];
