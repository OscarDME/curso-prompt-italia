// src/lib/prompts/image/foto-retrato-estudio.js

export const imagePromptsFotoRetratoEstudio = [
  // =========================
  // CATEGORY: Retrato estudio (realista)
  // =========================
  {
    id: "img-foto-retrato-est-001",
    title: "Retrato de estudio premium (softbox + fondo gris suave)",
    area: "Fotografía Pro",
    category: "Retrato estudio (realista)",
    summary:
      "Retrato realista tipo estudio con iluminación suave (softbox) y look limpio profesional.",
    prompt: `Genera un retrato fotográfico REALISTA tipo estudio.

DATOS:
- Sujeto: [hombre/mujer/persona] de [edad aproximada], [etnia/rasgos], [color de ojos], [peinado], [barba/maquillaje opcional]
- Vestuario: [ej: blazer negro + camiseta blanca / camisa blanca / vestido elegante]
- Expresión: [confiada/serena/amable]
- Fondo: gris neutro suave, sin textura marcada

CÁMARA / LUZ:
- Cámara full-frame, lente 85mm, f/1.8, ISO 100, 1/160s
- Iluminación: softbox grande 45° a la derecha + reflector suave a la izquierda
- Sombra suave, piel natural con detalle, sin efecto plástico

COMPOSICIÓN:
- Encuadre: plano medio-corto (pecho a cabeza), sujeto centrado
- Enfoque nítido en ojos, bokeh suave
- Color grading: clean, tonos naturales, contraste moderado

RESTRICCIONES:
- Sin texto, sin watermark, sin deformaciones
- Evitar manos extra, dientes raros, ojos asimétricos, piel artificial`,
    thumbnail: "/images/foto-pro/estudio1.webp",
  },
  {
    id: "img-foto-retrato-est-002",
    title: "Retrato high-key luminoso (fondo blanco, piel natural)",
    area: "Fotografía Pro",
    category: "Retrato estudio (realista)",
    summary:
      "Retrato high-key con fondo blanco puro, luz envolvente y estética fresca tipo revista.",
    prompt: `Genera un retrato REALISTA high-key para fotografía de estudio.

DATOS:
- Sujeto: [mujer/hombre/persona], [edad], [rasgos], [peinado]
- Vestuario: [camisa blanca / camiseta clara / look minimal]
- Mood: fresco, limpio, editorial

ILUMINACIÓN:
- Fondo blanco puro con luz uniforme
- Luz principal: softbox frontal grande + relleno suave (sin sombras duras)
- Detalle de piel realista, textura natural

CÁMARA:
- Lente 50mm u 85mm, f/2.2, ISO 100, nitidez alta, rango dinámico amplio

COMPOSICIÓN:
- Encuadre: primer plano (rostro) o medio (busto)
- Fondo totalmente limpio, sin elementos

RESTRICCIONES:
- Sin texto/logos
- Evitar brillo excesivo en piel, no sobreexponer rostro
- Proporciones faciales realistas, mirada natural`,
    thumbnail: "/images/foto-pro/estudio2.webp",
  },
  {
    id: "img-foto-retrato-est-003",
    title: "Retrato low-key dramático (fondo negro, Rembrandt suave)",
    area: "Fotografía Pro",
    category: "Retrato estudio (realista)",
    summary:
      "Retrato dramático low-key con iluminación Rembrandt suave, ideal para marcas premium.",
    prompt: `Genera un retrato REALISTA low-key estilo premium.

DATOS:
- Sujeto: [persona], [edad], [rasgos], [peinado], [barba/maquillaje]
- Vestuario: negro/oscuro (ej: cuello alto negro o blazer oscuro)
- Fondo: negro profundo sin textura

ILUMINACIÓN:
- Estilo Rembrandt: luz principal lateral 45° + ligera luz de recorte (rim light) sutil
- Sombras definidas pero suaves, alto contraste controlado
- Mantener detalle en sombras (no empastar)

CÁMARA:
- Lente 85mm, f/2, ISO 200, 1/160s
- Enfoque en ojos, nitidez alta, grano muy sutil (opcional)

COMPOSICIÓN:
- Primer plano o plano medio-corto
- Look cinematográfico, elegante

RESTRICCIONES:
- Sin texto, sin watermark
- Evitar ojos brillantes artificiales o rasgos deformados`,
    thumbnail: "/images/foto-pro/estudio3.webp",
  },
  {
    id: "img-foto-retrato-est-004",
    title: "Retrato editorial con fondo beige cálido (piel realista)",
    area: "Fotografía Pro",
    category: "Retrato estudio (realista)",
    summary:
      "Retrato editorial suave con paleta cálida (beige), ideal para lifestyle/beauty.",
    prompt: `Genera un retrato REALISTA estilo editorial.

DATOS:
- Sujeto: [mujer/hombre/persona], [edad], [rasgos], [peinado]
- Vestuario: tonos crema/beige, minimal y elegante
- Fondo: beige cálido uniforme

ILUMINACIÓN:
- Luz suave tipo ventana (soft daylight) + relleno sutil
- Sombras ligeras, piel natural sin exceso de suavizado

CÁMARA:
- Lente 85mm, f/2.5, ISO 100
- Color grading: cálido, suave, contraste medio

COMPOSICIÓN:
- Encuadre: busto o primer plano, mirada hacia cámara
- Acabado tipo revista, nítido pero natural

RESTRICCIONES:
- Sin texto, sin artefactos, sin manos extra`,
    thumbnail: "/images/foto-pro/estudio4.webp",
  },
  {
    id: "img-foto-retrato-est-005",
    title: "Retrato con luz de recorte (rim light) para separar del fondo",
    area: "Fotografía Pro",
    category: "Retrato estudio (realista)",
    summary:
      "Retrato pro con iluminación de recorte para darle profundidad, estilo studio branding.",
    prompt: `Genera un retrato REALISTA de estudio con rim light.

DATOS:
- Sujeto: [persona], [edad], [rasgos]
- Vestuario: [ropa oscura o neutra]
- Fondo: gris oscuro o azul noche muy sutil

LUCES:
- Luz principal softbox frontal-lateral suave
- Rim light (luz de recorte) detrás, bordeando hombros y cabello (sutil, no exagerada)
- Relleno mínimo para conservar dimensión

CÁMARA:
- 85mm, f/2.2, ISO 125, 1/160s
- Piel con textura real, ojos naturales

COMPOSICIÓN:
- Plano medio-corto, sujeto ligeramente a un lado (regla de tercios)

RESTRICCIONES:
- Sin texto/logo
- Evitar halos artificiales, rim light realista`,
    thumbnail: "/images/foto-pro/estudio5.webp",
  },

  // =========================
  // CATEGORY: Retrato corporativo / LinkedIn
  // =========================
  {
    id: "img-foto-retrato-est-006",
    title: "Headshot corporativo LinkedIn (fondo azul gris, sonrisa leve)",
    area: "Fotografía Pro",
    category: "Retrato corporativo / LinkedIn",
    summary:
      "Foto profesional tipo LinkedIn: iluminación limpia, fondo corporativo y expresión confiable.",
    prompt: `Genera un headshot REALISTA estilo LinkedIn.

DATOS:
- Sujeto: [hombre/mujer/persona], [edad], [rasgos], [peinado], [barba opcional]
- Vestuario: [blazer + camisa] o [camisa formal], colores sobrios
- Expresión: sonrisa leve, confiable, profesional
- Fondo: azul gris suave (degradado sutil), limpio

ILUMINACIÓN:
- Tres puntos suave: key light frontal, fill light suave, hair light muy sutil
- Sin brillos fuertes en frente o nariz

CÁMARA:
- Lente 85mm, f/2.8, ISO 100, look nítido

COMPOSICIÓN:
- Encuadre: hombros a cabeza, centrado, espacio superior adecuado
- Enfoque perfecto en ojos

RESTRICCIONES:
- Sin texto, sin logos, sin filtros exagerados
- Proporciones faciales naturales`,
    thumbnail: "/images/foto-pro/estudio6.webp",
  },
  {
    id: "img-foto-retrato-est-007",
    title: "Retrato corporativo en oficina (bokeh suave, luz natural)",
    area: "Fotografía Pro",
    category: "Retrato corporativo / LinkedIn",
    summary:
      "Retrato profesional en entorno de oficina con fondo desenfocado y luz natural.",
    prompt: `Genera un retrato REALISTA en entorno corporativo moderno.

DATOS:
- Sujeto: [persona], [edad], look profesional
- Outfit: [blazer, camisa, business casual]
- Fondo: oficina moderna con ventanales y escritorios, desenfocado (bokeh)
- Mood: confianza, liderazgo

ILUMINACIÓN:
- Luz natural de ventana + relleno suave
- Tonos neutros, skin tones realistas

CÁMARA:
- 50mm u 85mm, f/2, ISO 200
- Profundidad de campo baja, bokeh suave

COMPOSICIÓN:
- Plano medio (cintura/pecho a cabeza), regla de tercios
- Enfoque en ojos

RESTRICCIONES:
- Sin texto, sin marcas de agua
- No deformar manos/rostro`,
    thumbnail: "/images/foto-pro/estudio7.webp",
  },
  {
    id: "img-foto-retrato-est-008",
    title: "Foto de equipo corporativo (3 personas, estudio limpio)",
    area: "Fotografía Pro",
    category: "Retrato corporativo / LinkedIn",
    summary:
      "Imagen tipo 'equipo profesional' para web: 3 personas, look coherente, estudio neutro.",
    prompt: `Genera una foto REALISTA de equipo corporativo (3 personas).

DATOS:
- Personas: 3 (género/edad variada), apariencia profesional
- Vestuario: business casual coordinado (azules, grises, blancos)
- Fondo: gris claro o blanco suave, estilo estudio
- Expresión: amable, profesional

ILUMINACIÓN:
- Softboxes grandes, luz uniforme, sombras suaves
- Color grading corporativo clean

CÁMARA:
- Lente 35mm o 50mm, f/4 para mantener enfoque en todos
- ISO 100, nitidez alta

COMPOSICIÓN:
- Personas alineadas con profundidad mínima, postura natural
- Espacio negativo suficiente para banner web

RESTRICCIONES:
- Sin texto ni logos
- Proporciones corporales realistas (manos bien)`,
    thumbnail: "/images/foto-pro/estudio8.webp",
  },
  {
    id: "img-foto-retrato-est-009",
    title: "Retrato CEO premium (fondo oscuro, look de liderazgo)",
    area: "Fotografía Pro",
    category: "Retrato corporativo / LinkedIn",
    summary:
      "Retrato tipo CEO/Founder, estética premium y autoridad visual.",
    prompt: `Genera un retrato REALISTA estilo CEO premium.

DATOS:
- Sujeto: [persona], [edad], look ejecutivo/a
- Vestuario: blazer premium, camisa impecable, accesorios mínimos
- Expresión: seria pero cercana (autoridad calmada)
- Fondo: oscuro elegante (gris carbón/azul noche) con textura muy sutil

ILUMINACIÓN:
- Key light suave lateral + fill mínimo
- Rim light muy sutil para separar del fondo
- Contraste profesional, sin sombras duras

CÁMARA:
- 85mm, f/2.2, ISO 125, nitidez alta

COMPOSICIÓN:
- Plano medio-corto, postura recta, hombros ligeramente girados

RESTRICCIONES:
- Sin texto/watermark
- Evitar piel plástica o exageración de rasgos`,
    thumbnail: "/images/foto-pro/estudio9.webp",
  },
  {
    id: "img-foto-retrato-est-010",
    title: "Retrato para perfil profesional (fondo pastel suave, friendly)",
    area: "Fotografía Pro",
    category: "Retrato corporativo / LinkedIn",
    summary:
      "Foto profesional amigable para coach/consultor: fondo pastel y estilo cercano.",
    prompt: `Genera un retrato REALISTA profesional y cercano.

DATOS:
- Sujeto: [persona], [edad], sonrisa natural
- Vestuario: smart casual (colores claros)
- Fondo: pastel suave (ej: verde menta / azul cielo / beige), uniforme

ILUMINACIÓN:
- Luz suave frontal (softbox) + relleno ligero
- Piel natural, aspecto fresco

CÁMARA:
- 50mm u 85mm, f/2.8, ISO 100
- Color grading: luminoso, cálido leve

COMPOSICIÓN:
- Encuadre: hombros a cabeza, centrado
- Look “coach/consultor confiable”

RESTRICCIONES:
- Sin texto/logos
- Evitar sonrisa artificial, ojos raros`,
    thumbnail: "/images/foto-pro/estudio10.webp",
  },

  // =========================
  // CATEGORY: Headshot premium
  // =========================
  {
    id: "img-foto-retrato-est-011",
    title: "Headshot hiperrealista con fondo oscuro (detalle nítido en ojos)",
    area: "Fotografía Pro",
    category: "Headshot premium",
    summary:
      "Primer plano hiperrealista, enfoque quirúrgico en ojos, estética premium para web.",
    prompt: `Genera un HEADSHOT hiperrealista (primer plano) con calidad premium.

DATOS:
- Sujeto: [persona], [edad], [rasgos], [peinado]
- Expresión: calmada y segura
- Fondo: oscuro suave, minimalista

ILUMINACIÓN:
- Softbox frontal suave + relleno sutil
- Catchlight realista en ojos (pequeño, no exagerado)
- Textura real de piel (poros sutiles), sin suavizado artificial

CÁMARA:
- Lente 85mm, f/2, ISO 100
- Nitidez alta en ojos, microcontraste natural

COMPOSICIÓN:
- Solo rostro y parte de cuello, espacio superior leve

RESTRICCIONES:
- Sin texto/watermark
- Evitar ojos desalineados, pupilas raras, dientes deformes`,
    thumbnail: "/images/foto-pro/estudio11.webp",
  },
  {
    id: "img-foto-retrato-est-012",
    title: "Headshot con fondo de color sólido (branding consistente)",
    area: "Fotografía Pro",
    category: "Headshot premium",
    summary:
      "Headshot con fondo sólido para identidad de marca (ideal equipos y perfiles).",
    prompt: `Genera un headshot REALISTA para branding consistente.

DATOS:
- Sujeto: [persona], [edad], [rasgos]
- Vestuario: [camisa lisa / polo / blazer], sin patrones fuertes
- Fondo: color sólido exacto: [#HEX o color], uniforme y limpio

ILUMINACIÓN:
- Luz suave y uniforme, sin sombras duras
- Balance de blancos neutro (o ligeramente cálido)

CÁMARA:
- 85mm, f/2.8, ISO 100
- Bordes limpios, recorte profesional

COMPOSICIÓN:
- Hombros a cabeza, centrado

RESTRICCIONES:
- Sin texto/logos
- Mantener color de fondo fiel, sin degradados`,
    thumbnail: "/images/foto-pro/estudio12.webp",
  },
  {
    id: "img-foto-retrato-est-013",
    title: "Headshot tipo revista (fondo claro + contraste suave)",
    area: "Fotografía Pro",
    category: "Headshot premium",
    summary:
      "Look editorial de revista: limpio, elegante, piel natural, sin exceso de retoque.",
    prompt: `Genera un headshot REALISTA estilo revista editorial (no caricatura).

DATOS:
- Sujeto: [persona], [edad], [rasgos]
- Outfit: minimalista, elegante
- Fondo: claro (gris muy claro o crema)

LUCES:
- Soft daylight, sombras suaves
- Detalle real en piel, sin blur

CÁMARA:
- 50mm u 85mm, f/2.5, ISO 100
- Color grading: editorial clean, contraste suave, negros no aplastados

COMPOSICIÓN:
- Primer plano, mirada a cámara, gesto natural

RESTRICCIONES:
- Sin texto, sin watermark
- Evitar retoque plástico`,
    thumbnail: "/images/foto-pro/estudio13.webp",
  },
  {
    id: "img-foto-retrato-est-014",
    title: "Headshot con look cinematográfico (film grain sutil)",
    area: "Fotografía Pro",
    category: "Headshot premium",
    summary:
      "Headshot con estética cinematográfica suave y grano tipo película (discreto).",
    prompt: `Genera un headshot REALISTA con estética cinematográfica.

DATOS:
- Sujeto: [persona], [edad], [rasgos]
- Outfit: oscuro/neutro
- Fondo: gris oscuro o azul noche

ILUMINACIÓN:
- Key light lateral suave + fill mínimo
- Sombras con detalle, contraste medio-alto

CÁMARA:
- 85mm, f/2, ISO 200
- Añadir film grain MUY sutil (no ruido fuerte)
- Color grading: teal/orange leve o cine neutro

COMPOSICIÓN:
- Primer plano, enfoque en ojos

RESTRICCIONES:
- Sin texto/logos
- Evitar halos, grano exagerado, distorsión facial`,
    thumbnail: "/images/foto-pro/estudio14.webp",
  },
  {
    id: "img-foto-retrato-est-015",
    title: "Headshot con gafas (reflejos controlados, look intelectual)",
    area: "Fotografía Pro",
    category: "Headshot premium",
    summary:
      "Retrato con gafas sin reflejos molestos, ideal para perfiles profesionales.",
    prompt: `Genera un headshot REALISTA de una persona con gafas.

DATOS:
- Sujeto: [persona], [edad], [rasgos]
- Gafas: estilo [metal fino / pasta], aspecto premium
- Fondo: neutro (gris/beige)

ILUMINACIÓN:
- Luz suave frontal + ligera luz lateral
- Control de reflejos: lentes sin brillos fuertes, ojos visibles

CÁMARA:
- 85mm, f/2.8, ISO 100
- Nitidez alta, detalle natural

COMPOSICIÓN:
- Encuadre hombros a cabeza, centrado

RESTRICCIONES:
- Sin texto
- Evitar lentes deformadas, reflejos tapando ojos`,
    thumbnail: "/images/foto-pro/estudio15.webp",
  },

  // =========================
  // CATEGORY: Beauty / skincare (close-up)
  // =========================
  {
    id: "img-foto-retrato-est-016",
    title: "Beauty close-up skincare (piel natural + luz suave frontal)",
    area: "Fotografía Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Close-up de belleza con textura real de piel, iluminación suave y estética skincare.",
    prompt: `Genera una foto REALISTA beauty close-up (skincare editorial).

DATOS:
- Sujeto: [mujer/persona], [edad], piel saludable, maquillaje mínimo
- Fondo: blanco/crema suave
- Mood: limpio, fresco, cuidado personal

ILUMINACIÓN:
- Luz suave frontal (softbox) con sombras mínimas
- Piel con textura real (poros sutiles), brillo natural controlado

CÁMARA:
- Macro suave o 85mm, f/3.2, ISO 100
- Enfoque en ojos y mejillas, nitidez alta sin exagerar

COMPOSICIÓN:
- Primerísimo primer plano, rostro dominante
- Sin accesorios distractores

RESTRICCIONES:
- Sin texto, sin productos con marcas reales visibles
- Evitar piel plástica o ultra suavizada`,
    thumbnail: "/images/foto-pro/estudio16.webp",
  },
  {
    id: "img-foto-retrato-est-017",
    title: "Beauty editorial con luz lateral (volumen en pómulos)",
    area: "Fotografía Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Retrato beauty con volumen suave y sombras controladas para look editorial premium.",
    prompt: `Genera un beauty close-up REALISTA con estética editorial premium.

DATOS:
- Sujeto: [persona], [edad], maquillaje sutil (piel, cejas, labios naturales)
- Fondo: gris claro o beige
- Expresión: serena, elegante

ILUMINACIÓN:
- Key light lateral suave (45°) para marcar pómulos
- Fill light ligero para evitar sombras duras
- Catchlight natural en los ojos

CÁMARA:
- 85mm, f/2.8, ISO 100
- Color grading: cálido suave, contraste medio

COMPOSICIÓN:
- Primer plano, enfoque nítido en ojos y piel

RESTRICCIONES:
- Sin texto/logo
- Evitar ojos raros, labios deformados, dientes extraños`,
    thumbnail: "/images/foto-pro/estudio17.webp",
  },
  {
    id: "img-foto-retrato-est-018",
    title: "Beauty con cabello al viento (sin blur artificial, realista)",
    area: "Fotografía Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Look beauty dinámico con movimiento de cabello, manteniendo nitidez y realismo.",
    prompt: `Genera una foto REALISTA de beauty con cabello en movimiento.

DATOS:
- Sujeto: [persona], [edad], cabello [largo/medio], expresión natural
- Fondo: neutro (gris claro/crema)
- Mood: fresco y moderno

ILUMINACIÓN:
- Luz suave frontal con leve lateral
- Mantener detalle del cabello (no blur plástico)

CÁMARA:
- 85mm, f/2.8, ISO 200, velocidad suficiente para congelar el movimiento
- Nitidez en rostro y ojos

COMPOSICIÓN:
- Primer plano o busto, viento sutil en cabello
- Piel realista, sin exceso de retoque

RESTRICCIONES:
- Sin texto
- Evitar cabello fusionado raro con fondo`,
    thumbnail: "/images/foto-pro/estudio18.webp",
  },
  {
    id: "img-foto-retrato-est-019",
    title: "Beauty minimal con manos cerca del rostro (manos realistas)",
    area: "Fotografía Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Close-up beauty con pose de manos elegante, cuidando anatomía realista.",
    prompt: `Genera un beauty close-up REALISTA con manos cerca del rostro.

DATOS:
- Sujeto: [persona], [edad], maquillaje minimal
- Pose: manos cerca del rostro (pose beauty elegante), dedos relajados
- Fondo: crema/beige suave

ILUMINACIÓN:
- Softbox frontal suave + relleno ligero
- Detalle en piel, uñas limpias y realistas

CÁMARA:
- 85mm, f/3.2, ISO 100
- Enfoque: ojos + rostro, manos ligeramente menos nítidas (natural)

COMPOSICIÓN:
- Primer plano, manos enmarcando el rostro

RESTRICCIONES IMPORTANTES:
- Anatomía correcta: 5 dedos por mano, proporciones reales
- Sin dedos extra, sin manos deformes, sin texto`,
    thumbnail: "/images/foto-pro/estudio19.webp",
  },
  {
    id: "img-foto-retrato-est-020",
    title: "Beauty premium con fondo negro (contraste alto, piel cuidada)",
    area: "Fotografía Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Close-up beauty elegante con fondo negro, contraste premium y detalle de textura.",
    prompt: `Genera un beauty close-up REALISTA premium sobre fondo negro.

DATOS:
- Sujeto: [persona], [edad], maquillaje elegante (ojos/labios sutiles)
- Fondo: negro profundo
- Mood: lujo, alta estética

ILUMINACIÓN:
- Key light suave lateral + fill mínimo
- Rim light muy sutil para separar cabello del fondo
- Mantener detalle en piel sin plastificar

CÁMARA:
- 85mm, f/2.5, ISO 200
- Color grading: lujo (contraste controlado, tonos piel reales)

COMPOSICIÓN:
- Primer plano, mirada a cámara o ligera 3/4

RESTRICCIONES:
- Sin texto/logos
- Evitar brillos agresivos, facciones deformadas`,
    thumbnail: "/images/foto-pro/estudio20.webp",
  },
];
