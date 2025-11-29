// src/lib/prompts/image/foto-automotriz.js

export const imagePromptsFotoAutomotriz = [
  // =========================
  // CATEGORY: Auto + modelo (lifestyle)
  // =========================
  {
    id: "img-foto-auto-001",
    title: "Modelo junto a deportivo rojo (golden hour, carretera, realista)",
    area: "Fotografía Pro",
    category: "Auto + modelo (lifestyle)",
    summary:
      "Foto lifestyle premium: modelo con deportivo en carretera al atardecer, look editorial realista.",
    prompt: `Genera una fotografía REALISTA lifestyle de auto + modelo.

DATOS:
- Auto: deportivo [color: rojo], limpio, sin logotipos de marca visibles
- Modelo: [mujer/hombre/persona], [edad], pose segura y natural
- Outfit: [elegante casual / vestido / chaqueta de cuero], acorde a vibe premium
- Ubicación: carretera abierta, horizonte amplio, fondo ligeramente desenfocado

ILUMINACIÓN:
- Golden hour (atardecer), luz cálida lateral
- Reflejos realistas en la carrocería, sin brillos “quemados”
- Piel natural, sombras suaves

CÁMARA:
- 35mm o 50mm, f/2.2, ISO 100–200
- Enfoque en modelo y parte frontal/lateral del auto

COMPOSICIÓN:
- Plano 3/4 o completo, auto ocupa 40–60% del encuadre
- Perspectiva ligeramente baja para sensación potente

RESTRICCIONES:
- Sin texto, sin logos, sin placas legibles
- Evitar deformaciones del auto (ruedas ovaladas, carrocería rara)`,
    thumbnail: "/images/foto-pro/auto1.webp",
  },
  {
    id: "img-foto-auto-002",
    title: "Mujer con vestido rojo frente a auto (editorial lujo, fondo urbano)",
    area: "Fotografía Pro",
    category: "Auto + modelo (lifestyle)",
    summary:
      "Estética lujo editorial: vestido llamativo + auto, ciudad de fondo desenfocada.",
    prompt: `Genera una foto REALISTA editorial de lujo con modelo + auto.

DATOS:
- Modelo: mujer/persona, [edad], vestido rojo elegante
- Auto: deportivo o sedán premium [color: rojo o negro], sin logos
- Escena: entorno urbano al atardecer, edificios y luces desenfocadas
- Pose: modelo con actitud editorial, mirada fuerte, postura elegante

ILUMINACIÓN:
- Luz suave de atardecer + reflejos urbanos
- Contraste medio, piel natural, tela con textura real

CÁMARA:
- 50mm, f/2, ISO 200
- Bokeh urbano suave en el fondo

COMPOSICIÓN:
- Plano 3/4, auto parcialmente visible (no cortar raro ruedas)
- Mantener líneas del auto rectas (sin distorsión)

RESTRICCIONES:
- Sin texto/watermark
- Sin placas legibles, sin marcas reconocibles`,
    thumbnail: "/images/foto-pro/auto2.webp",
  },
  {
    id: "img-foto-auto-003",
    title: "Modelo apoyado en auto (vibe street premium, luz suave)",
    area: "Fotografía Pro",
    category: "Auto + modelo (lifestyle)",
    summary:
      "Foto street premium: modelo apoyado en auto, estética natural tipo campaña.",
    prompt: `Genera una foto REALISTA de campaña street premium con modelo + auto.

DATOS:
- Modelo: [persona], [edad], expresión segura
- Outfit: chaqueta de cuero o blazer, look urbano premium
- Auto: color negro/gris, estilo premium, sin logos visibles
- Escenario: calle limpia, fondo urbano desenfocado (bokeh)

ILUMINACIÓN:
- Luz suave (tarde/nublado), sombras delicadas
- Reflejos realistas en el auto, sin brillos artificiales

CÁMARA:
- 35mm, f/2.2, ISO 200
- Enfoque en ojos + detalles del auto

COMPOSICIÓN:
- Plano completo o 3/4, líneas del auto bien proporcionales
- Perspectiva natural, no exagerar gran angular

RESTRICCIONES:
- Sin texto/logos/placas legibles
- Evitar ruedas deformes o carrocería inconsistente`,
    thumbnail: "/images/foto-pro/auto3.webp",
  },
  {
    id: "img-foto-auto-004",
    title: "Dentro del auto: retrato en asiento conductor (luz lateral, realista)",
    area: "Fotografía Pro",
    category: "Auto + modelo (lifestyle)",
    summary:
      "Retrato realista dentro del auto, luz lateral por ventana, look creator/CEO.",
    prompt: `Genera un retrato REALISTA dentro de un auto (asiento del conductor).

DATOS:
- Sujeto: [persona], [edad], look premium
- Outfit: business casual (camisa, blazer o top elegante)
- Interior: auto moderno (sin marcas visibles), limpio
- Fondo exterior: desenfocado por ventanas

ILUMINACIÓN:
- Luz natural lateral entrando por ventana, suave
- Piel natural, sombras suaves

CÁMARA:
- 50mm, f/2, ISO 400
- Enfoque en ojos, desenfoque ligero del tablero

COMPOSICIÓN:
- Plano medio-corto (hombros a cabeza), volante y asiento sutilmente visibles

RESTRICCIONES:
- Sin logos, sin texto, sin placas
- Evitar distorsión facial y manos extra`,
    thumbnail: "/images/foto-pro/auto4.webp",
  },
  {
    id: "img-foto-auto-005",
    title: "Lifestyle con auto y ciudad nocturna (neón sutil, look cinematográfico)",
    area: "Fotografía Pro",
    category: "Auto + modelo (lifestyle)",
    summary:
      "Auto + modelo en noche urbana con luces y neón sutil, estética cinematográfica realista.",
    prompt: `Genera una foto REALISTA de auto + modelo en ciudad nocturna.

DATOS:
- Modelo: [persona], [edad], actitud editorial
- Auto: premium oscuro, sin logos
- Escenario: ciudad con neón sutil, reflejos en el suelo (como tras lluvia)
- Outfit: oscuro/premium, chaqueta o vestido elegante

ILUMINACIÓN:
- Luces urbanas como key light + relleno suave
- Neón magenta/cian muy sutil (no piel fluorescente)
- Reflejos realistas en carrocería

CÁMARA:
- 35mm, f/1.8, ISO 800–1200
- Bokeh de luces al fondo

COMPOSICIÓN:
- Plano 3/4, auto y modelo balanceados

RESTRICCIONES:
- Sin texto/logos/placas legibles
- Evitar deformación del auto y ruedas`,
    thumbnail: "/images/foto-pro/auto5.webp",
  },

  // =========================
  // CATEGORY: Auto (cinemático)
  // =========================
  {
    id: "img-foto-auto-006",
    title: "Auto hero shot frontal (cinemático, carretera, niebla ligera)",
    area: "Fotografía Pro",
    category: "Auto (cinemático)",
    summary:
      "Hero shot cinematográfico del auto en carretera con atmósfera (niebla ligera) y look premium.",
    prompt: `Genera una fotografía REALISTA cinematográfica de un auto (sin modelo).

DATOS:
- Auto: deportivo o sedán premium, color [negro/gris/rojo], sin logos visibles
- Ubicación: carretera abierta, paisaje minimal
- Atmósfera: niebla ligera sutil o bruma suave (opcional)

ILUMINACIÓN:
- Luz suave (amanecer/atardecer), sombras blandas
- Reflejos realistas en carrocería, no exagerados

CÁMARA:
- Lente 35mm, f/2.8, ISO 100–200
- Enfoque en frontal del auto, fondo ligeramente desenfocado

COMPOSICIÓN:
- Ángulo bajo, frontal 3/4
- Auto centrado, líneas rectas, perspectiva realista

RESTRICCIONES:
- Sin texto/watermark
- Sin logos/placas legibles
- Ruedas perfectamente circulares, proporciones reales`,
    thumbnail: "/images/foto-pro/auto6.webp",
  },
  {
    id: "img-foto-auto-007",
    title: "Auto 3/4 lateral (golden hour, polvo sutil, campaña)",
    area: "Fotografía Pro",
    category: "Auto (cinemático)",
    summary:
      "Toma de campaña: auto lateral 3/4 con luz dorada y sensación de movimiento (polvo sutil).",
    prompt: `Genera una foto REALISTA tipo campaña automotriz (sin personas).

DATOS:
- Auto: premium [color], sin logos visibles
- Escena: camino de tierra o carretera con polvo MUY sutil detrás (opcional)
- Ambiente: golden hour, cielo cálido

ILUMINACIÓN:
- Luz dorada lateral (rim light suave en bordes)
- Reflejos naturales, contraste medio

CÁMARA:
- 70mm, f/3.2, ISO 100–200
- Auto muy nítido, fondo ligeramente desenfocado

COMPOSICIÓN:
- Plano 3/4 lateral, auto ocupa 70% del encuadre
- Líneas limpias, sensación premium

RESTRICCIONES:
- Sin texto/logos/placas legibles
- Evitar distorsión de carrocería y llantas`,
    thumbnail: "/images/foto-pro/auto7.webp",
  },
  {
    id: "img-foto-auto-008",
    title: "Auto nocturno con lluvia (reflejos, city lights, realista)",
    area: "Fotografía Pro",
    category: "Auto (cinemático)",
    summary:
      "Auto en ciudad nocturna con suelo mojado y reflejos fuertes, estilo cinematográfico realista.",
    prompt: `Genera una foto REALISTA cinematográfica de un auto en ciudad nocturna.

DATOS:
- Auto: oscuro premium, sin logos
- Escenario: calle mojada con reflejos, luces de ciudad desenfocadas
- Lluvia: ligera (sutil, no exagerada)

ILUMINACIÓN:
- Faroles + luces urbanas reflejadas en la carrocería
- Contraste medio-alto, pero con detalle en sombras

CÁMARA:
- 35mm, f/2, ISO 1000
- Bokeh de luces, enfoque en el auto

COMPOSICIÓN:
- Frontal 3/4 o lateral, ángulo bajo
- Fondo urbano profundo

RESTRICCIONES:
- Sin texto/watermark
- Sin placas legibles, evitar ruedas deformes`,
    thumbnail: "/images/foto-pro/auto8.webp",
  },
  {
    id: "img-foto-auto-009",
    title: "Auto en estudio (fondo gris, iluminación softbox, catálogo premium)",
    area: "Fotografía Pro",
    category: "Auto (cinemático)",
    summary:
      "Foto de auto tipo estudio/garaje premium: fondo gris, softbox y detalle de pintura.",
    prompt: `Genera una foto REALISTA de auto en setting tipo estudio premium.

DATOS:
- Auto: [deportivo/sedán], color [gris/negro/rojo], sin logos visibles
- Fondo: gris neutro, estilo estudio grande o garaje premium limpio

ILUMINACIÓN:
- Softboxes grandes reflejados sutilmente en la carrocería
- Sombras suaves, detalle nítido de pintura y líneas

CÁMARA:
- 50mm, f/5.6, ISO 100
- Nitidez alta para catálogo premium

COMPOSICIÓN:
- Lateral 3/4, auto centrado, espacio para banner

RESTRICCIONES:
- Sin texto/logos/placas legibles
- Evitar reflejos extraños, ruedas ovaladas`,
    thumbnail: "/images/foto-pro/auto9.webp",
  },
  {
    id: "img-foto-auto-010",
    title: "Detalle cinematográfico del auto (faros encendidos, bokeh urbano)",
    area: "Fotografía Pro",
    category: "Auto (cinemático)",
    summary:
      "Close-up cinematográfico de faros y detalles del auto con bokeh urbano de fondo.",
    prompt: `Genera una foto REALISTA close-up cinematográfica de un auto.

DATOS:
- Auto: premium, color [oscuro], sin logos
- Detalle: enfoque en faro delantero y parte del capó
- Fondo: ciudad nocturna con bokeh de luces

ILUMINACIÓN:
- Faros encendidos (realistas, no quemados)
- Luz ambiente urbana suave

CÁMARA:
- 85mm, f/2, ISO 800
- Enfoque nítido en el faro, bokeh fuerte atrás

COMPOSICIÓN:
- Recorte limpio, detalle protagonista
- Líneas del auto realistas (sin distorsión)

RESTRICCIONES:
- Sin texto/watermark
- Evitar faros deformes o reflejos imposibles`,
    thumbnail: "/images/foto-pro/auto10.webp",
  },

  // =========================
  // CATEGORY: Moto (street)
  // =========================
  {
    id: "img-foto-auto-011",
    title: "Mujer en moto negra en avenida otoñal (lifestyle premium)",
    area: "Fotografía Pro",
    category: "Moto (street)",
    summary:
      "Foto lifestyle: mujer en moto negra en avenida con árboles otoñales, estética editorial realista.",
    prompt: `Genera una foto REALISTA lifestyle con moto en calle.

DATOS:
- Sujeto: mujer/persona, [edad], actitud segura
- Moto: negra moderna, sin logos visibles
- Outfit: chaqueta de cuero + jeans o look urbano premium
- Ubicación: avenida con árboles otoñales, hojas en el suelo, profundidad de calle

ILUMINACIÓN:
- Luz suave (tarde/nublado), tonos cálidos de otoño
- Reflejos realistas en la moto, sombras suaves

CÁMARA:
- 35mm o 50mm, f/2, ISO 200
- Enfoque en sujeto, fondo desenfocado moderado

COMPOSICIÓN:
- Plano 3/4 o completo, moto visible sin deformación
- Líneas rectas, perspectiva natural

RESTRICCIONES:
- Sin texto/logos/placas
- Evitar ruedas ovaladas y piezas inconsistentes`,
    thumbnail: "/images/foto-pro/auto11.webp",
  },
  {
    id: "img-foto-auto-012",
    title: "Moto en ciudad nocturna (neón sutil, look cinematográfico)",
    area: "Fotografía Pro",
    category: "Moto (street)",
    summary:
      "Foto cinematográfica de moto en noche urbana con neón sutil y reflejos realistas.",
    prompt: `Genera una foto REALISTA cinematográfica de moto en ciudad nocturna.

DATOS:
- Moto: negra o gris, estilo moderno, sin logos
- Sujeto: [persona] con casco (opcional), pose relajada
- Escena: calle mojada con reflejos, neón sutil magenta/cian

ILUMINACIÓN:
- Luces urbanas + neón como iluminación ambiental
- Mantener piel realista si se ve rostro

CÁMARA:
- 35mm, f/1.8, ISO 1200
- Bokeh de luces, nitidez en moto

COMPOSICIÓN:
- Ángulo bajo, moto protagonista
- Profundidad urbana, look de película

RESTRICCIONES:
- Sin texto/watermark
- Evitar piezas duplicadas o rueda deformada`,
    thumbnail: "/images/foto-pro/auto12.webp",
  },
  {
    id: "img-foto-auto-013",
    title: "Retrato con moto en carretera (golden hour, polvo sutil)",
    area: "Fotografía Pro",
    category: "Moto (street)",
    summary:
      "Modelo con moto en carretera abierta al atardecer, estética campaña outdoor.",
    prompt: `Genera una foto REALISTA de campaña con moto en carretera.

DATOS:
- Sujeto: [persona], [edad], pose editorial natural
- Moto: estilo [naked/sport], sin logos
- Ubicación: carretera abierta, paisaje minimal
- Ambiente: golden hour, polvo leve (opcional)

ILUMINACIÓN:
- Luz dorada lateral, sombras suaves
- Reflejos realistas en tanque y metal

CÁMARA:
- 50mm, f/2.2, ISO 100–200
- Enfoque en sujeto y moto, fondo suave

COMPOSICIÓN:
- Plano completo o 3/4, perspectiva natural

RESTRICCIONES:
- Sin texto/placas
- Evitar moto deformada, ruedas ovaladas`,
    thumbnail: "/images/foto-pro/auto13.webp",
  },
  {
    id: "img-foto-auto-014",
    title: "Moto estacionada (shot premium tipo catálogo, fondo limpio)",
    area: "Fotografía Pro",
    category: "Moto (street)",
    summary:
      "Foto de moto tipo catálogo premium con fondo limpio y detalle de materiales.",
    prompt: `Genera una foto REALISTA tipo catálogo premium de moto (sin personas).

DATOS:
- Moto: negra/roja/gris, limpia, sin logos visibles
- Fondo: pared neutra o garaje premium limpio
- Superficie: suelo limpio, sombras suaves

ILUMINACIÓN:
- Softbox suave, reflejos controlados en metal/pintura
- Detalle nítido sin exceso de contraste

CÁMARA:
- 50mm, f/5.6, ISO 100
- Enfoque en toda la moto

COMPOSICIÓN:
- Perfil lateral completo, moto centrada
- Líneas rectas, proporciones reales

RESTRICCIONES:
- Sin texto/watermark
- Evitar duplicaciones, partes flotantes`,
    thumbnail: "/images/foto-pro/auto14.webp",
  },
  {
    id: "img-foto-auto-015",
    title: "Moto con rider (casco, chaqueta, vibe street pro)",
    area: "Fotografía Pro",
    category: "Moto (street)",
    summary:
      "Rider con casco y chaqueta, estética street pro realista para redes.",
    prompt: `Genera una foto REALISTA street pro de rider con moto.

DATOS:
- Sujeto: [persona], [edad], casco puesto (visera oscura opcional)
- Outfit: chaqueta de moto, guantes, look auténtico
- Moto: moderna, sin logos
- Escena: calle urbana, fondo con profundidad desenfocado

ILUMINACIÓN:
- Luz suave (tarde/nublado) o noche con faroles
- Reflejos realistas en casco y moto

CÁMARA:
- 35mm, f/2, ISO 400
- Enfoque en casco/rostro y parte frontal de moto

COMPOSICIÓN:
- Plano 3/4, ángulo bajo para sensación poderosa

RESTRICCIONES:
- Sin texto/logos/placas
- Evitar manos deformes, piezas duplicadas`,
    thumbnail: "/images/foto-pro/auto15.webp",
  },

  // =========================
  // CATEGORY: Ruedas / detalles (macro)
  // =========================
  {
    id: "img-foto-auto-016",
    title: "Macro de llanta y freno (detalle realista, luz suave)",
    area: "Fotografía Pro",
    category: "Ruedas / detalles (macro)",
    summary:
      "Close-up macro de llanta y freno con textura real y reflejos controlados.",
    prompt: `Genera una foto REALISTA macro de detalle automotriz.

DATOS:
- Detalle: llanta premium + freno visible (caliper), textura real
- Auto: sin marcas visibles (genérico)
- Fondo: desenfocado, oscuro o neutro

ILUMINACIÓN:
- Luz suave lateral para revelar textura del metal y goma
- Reflejos controlados, sin brillos quemados

CÁMARA:
- Macro o 85mm, f/3.5, ISO 200
- Enfoque exacto en la textura de la llanta y freno

COMPOSICIÓN:
- Encuadre cerrado, detalle protagonista
- Estética premium, tipo publicidad

RESTRICCIONES:
- Sin texto/logos
- Evitar patrones raros o metal “derretido”`,
    thumbnail: "/images/foto-pro/auto16.webp",
  },
  {
    id: "img-foto-auto-017",
    title: "Macro de volante y tablero (interior premium, bokeh suave)",
    area: "Fotografía Pro",
    category: "Ruedas / detalles (macro)",
    summary:
      "Detalle del interior: volante y tablero con look premium, sin logos ni textos legibles.",
    prompt: `Genera una foto REALISTA macro del interior de un auto premium.

DATOS:
- Detalle principal: volante + tablero + textura de cuero
- Interior: moderno, limpio, sin logos visibles
- Fondo: desenfocado, luces suaves

ILUMINACIÓN:
- Luz suave lateral, reflejos sutiles en cuero y metal
- Ambiente cálido premium

CÁMARA:
- 50mm u 85mm, f/2.8, ISO 400
- Enfoque en textura del cuero y costuras

COMPOSICIÓN:
- Plano cerrado desde ángulo del conductor
- Bokeh suave en el fondo

RESTRICCIONES:
- Sin texto legible en pantallas
- Sin logos/marcas`,
    thumbnail: "/images/foto-pro/auto17.webp",
  },
  {
    id: "img-foto-auto-018",
    title: "Macro exterior: faro delantero (gota de lluvia, realista)",
    area: "Fotografía Pro",
    category: "Ruedas / detalles (macro)",
    summary:
      "Close-up de faro con gotas sutiles, estilo nocturno premium y reflejos reales.",
    prompt: `Genera una foto REALISTA macro del faro delantero de un auto.

DATOS:
- Detalle: faro delantero encendido, parte del capó visible
- Ambiente: noche o atardecer oscuro
- Gotas: lluvia sutil (opcional)

ILUMINACIÓN:
- Faro como fuente de luz principal + luces urbanas suaves reflejadas
- Reflejos realistas en vidrio y pintura

CÁMARA:
- 85mm, f/2.2, ISO 800
- Enfoque en faro, bokeh de luces al fondo

COMPOSICIÓN:
- Encuadre cerrado, líneas del auto rectas, sin distorsión

RESTRICCIONES:
- Sin logos/placas
- Evitar faros deformes o formas imposibles`,
    thumbnail: "/images/foto-pro/auto18.webp",
  },
  {
    id: "img-foto-auto-019",
    title: "Macro de pintura y reflejo (carrocería premium, luz suave)",
    area: "Fotografía Pro",
    category: "Ruedas / detalles (macro)",
    summary:
      "Detalle de pintura brillante con reflejos controlados para look premium tipo campaña.",
    prompt: `Genera una foto REALISTA macro de la carrocería de un auto premium.

DATOS:
- Detalle: panel de carrocería (capó/puerta) con pintura brillante
- Reflejo: líneas de luz suaves (softbox) reflejadas de forma realista
- Color: [negro/gris/rojo], sin logos visibles

ILUMINACIÓN:
- Softboxes grandes, reflejos suaves y controlados
- Mostrar textura de pintura (muy sutil), sin ruido raro

CÁMARA:
- Macro o 85mm, f/3.2, ISO 100–200
- Enfoque en reflejo y superficie

COMPOSICIÓN:
- Encuadre abstracto premium, minimalista

RESTRICCIONES:
- Sin texto/logos
- Evitar reflejos “imposibles” o artefactos`,
    thumbnail: "/images/foto-pro/auto19.webp",
  },
  {
    id: "img-foto-auto-020",
    title: "Detalle de escape y difusor (look agresivo, realista)",
    area: "Fotografía Pro",
    category: "Ruedas / detalles (macro)",
    summary:
      "Close-up de zona trasera: escape/difusor con textura real, estética performance.",
    prompt: `Genera una foto REALISTA macro de detalle performance en auto.

DATOS:
- Detalle: escape doble + difusor trasero (sin logos)
- Ambiente: garaje premium o calle nocturna (fondo desenfocado)
- Estética: agresiva pero elegante

ILUMINACIÓN:
- Luz lateral suave para revelar textura metal/carbono
- Contraste medio-alto con detalle en sombras

CÁMARA:
- 85mm, f/2.8, ISO 400
- Enfoque en metal y textura, bokeh suave atrás

COMPOSICIÓN:
- Encuadre cerrado, líneas rectas, proporciones reales

RESTRICCIONES:
- Sin texto/watermark
- Evitar piezas duplicadas o metal derretido`,
    thumbnail: "/images/foto-pro/auto20.webp",
  },
];
