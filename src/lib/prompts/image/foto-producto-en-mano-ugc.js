// src/lib/prompts/image/foto-producto-en-mano-ugc.js

export const imagePromptsFotoProductoEnManoUGC = [
  // =========================
  // CATEGORY: Producto en mano (UGC)
  // =========================
  {
    id: "img-ugc-mano-001",
    title: "Producto en mano frente a cámara (selfie UGC, luz natural suave)",
    area: "Fotografía Pro",
    category: "Producto en mano (UGC)",
    summary:
      "Selfie creíble mostrando el producto cerca del rostro, look auténtico tipo UGC.",
    prompt: `Genera una foto REALISTA estilo selfie UGC mostrando un producto en la mano.

DATOS:
- Persona: [mujer/hombre/persona] de [edad], expresión natural (sonrisa leve o neutra)
- Producto: [describir producto genérico], SIN marcas ni texto legible
- Pose: sosteniendo el producto cerca del rostro, mano relajada, dedos visibles
- Fondo: interior simple (casa) o exterior suave, desenfocado

ILUMINACIÓN:
- Luz natural suave (ventana o sombra abierta)
- Piel realista, sin filtros extremos

CÁMARA:
- Simular smartphone cámara frontal, nitidez natural, compresión realista
- Enfoque en rostro y producto (ambos nítidos)

COMPOSICIÓN:
- Encuadre: rostro + hombros, producto a un lado del rostro
- Estilo auténtico, no publicitario exagerado

RESTRICCIONES CRÍTICAS:
- Mano anatómicamente correcta (5 dedos, proporciones reales)
- Sin texto/logos/watermark`,
    thumbnail: "/images/foto-pro/ugc1.webp",
  },
  {
    id: "img-ugc-mano-002",
    title: "Producto en mano con fondo de baño (skincare UGC, luz blanca)",
    area: "Fotografía Pro",
    category: "Producto en mano (UGC)",
    summary:
      "UGC típico de skincare en baño limpio, luz blanca suave y look realista.",
    prompt: `Genera una foto REALISTA UGC en baño (skincare style) con producto en mano.

DATOS:
- Persona: [persona], [edad], maquillaje mínimo
- Producto: frasco/dispensador/caja genérica de skincare, sin marca ni texto legible
- Escena: baño moderno limpio, espejo al fondo (sin doble reflejo raro)
- Pose: sosteniendo el producto hacia la cámara

ILUMINACIÓN:
- Luz blanca suave tipo baño (no azul intensa), sombras mínimas
- Piel natural con textura real

CÁMARA:
- Simular smartphone, nitidez natural
- Enfoque en producto, rostro ligeramente detrás pero claro

COMPOSICIÓN:
- Plano medio-corto (pecho a cabeza)
- Estética cotidiana, auténtica

RESTRICCIONES:
- Sin logos/texto legible
- Mano realista (5 dedos), evitar deformaciones`,
    thumbnail: "/images/foto-pro/ugc2.webp",
  },
  {
    id: "img-ugc-mano-003",
    title: "Producto en mano sentado en sofá (lifestyle UGC, cálido)",
    area: "Fotografía Pro",
    category: "Producto en mano (UGC)",
    summary:
      "Persona en sala mostrando producto en mano, vibe hogar cálida y creíble.",
    prompt: `Genera una foto REALISTA UGC en casa, sentado/a en un sofá, mostrando un producto en la mano.

DATOS:
- Persona: [persona], [edad], expresión amistosa
- Producto: [describir producto genérico], sin marcas
- Escena: sala minimal con sofá claro, planta o lámpara desenfocadas
- Pose: producto en mano cerca del pecho o rostro

ILUMINACIÓN:
- Luz cálida suave (tarde), sombras ligeras
- Colores naturales, sin filtros fuertes

CÁMARA:
- Simular smartphone, 28–35mm equivalente
- Enfoque en rostro, producto también legible visualmente

COMPOSICIÓN:
- Plano medio, ambiente visible pero desenfocado

RESTRICCIONES:
- Sin texto/logos
- Mano correcta, sin dedos extra`,
    thumbnail: "/images/foto-pro/ugc3.webp",
  },
  {
    id: "img-ugc-mano-004",
    title: "Producto en mano en exterior (sombra abierta, look auténtico)",
    area: "Fotografía Pro",
    category: "Producto en mano (UGC)",
    summary:
      "UGC en exterior mostrando el producto, luz natural pareja y fondo suave desenfocado.",
    prompt: `Genera una foto REALISTA UGC en exterior mostrando un producto en la mano.

DATOS:
- Persona: [persona], [edad], expresión natural
- Producto: [describir producto], genérico, sin marca/etiqueta legible
- Fondo: parque/calle desenfocados, luz natural
- Pose: producto cerca de cámara, rostro visible

ILUMINACIÓN:
- Sombra abierta (luz suave), sin sombras duras
- Piel realista, colores neutros

CÁMARA:
- Simular smartphone, nitidez natural
- Enfoque equilibrado: producto y ojos

COMPOSICIÓN:
- Rostro centrado, producto en primer plano ligeramente lateral

RESTRICCIONES:
- Sin texto/logos
- Mano anatómicamente correcta`,
    thumbnail: "/images/foto-pro/ugc4.webp",
  },
  {
    id: "img-ugc-mano-005",
    title: "Producto en mano con uñas cuidadas (beauty UGC, manos perfectas)",
    area: "Fotografía Pro",
    category: "Producto en mano (UGC)",
    summary:
      "Enfoque en mano sosteniendo producto, uñas cuidadas y anatomía perfecta.",
    prompt: `Genera una foto REALISTA UGC con enfoque en mano sosteniendo el producto.

DATOS:
- Mano: uñas cuidadas (natural o manicura simple), piel realista
- Producto: [frasco/caja genérica], sin marca ni texto legible
- Fondo: desenfocado (casa o exterior suave)
- Opcional: rostro parcial desenfocado detrás para contexto

ILUMINACIÓN:
- Luz suave natural, reflejos ligeros en el producto
- Foco en textura de piel y producto

CÁMARA:
- Macro suave o 50mm, f/2.8, ISO 200
- Enfoque principalmente en la mano y el producto

COMPOSICIÓN:
- Producto centrado, mano sostiene de forma natural

RESTRICCIONES CRÍTICAS:
- 5 dedos, proporciones reales, sin deformaciones
- Sin texto/logos/watermark`,
    thumbnail: "/images/foto-pro/ugc5.webp",
  },

  // =========================
  // CATEGORY: Unboxing / prueba (UGC)
  // =========================
  {
    id: "img-ugc-mano-006",
    title: "Unboxing UGC en mesa (caja abierta, manos realistas)",
    area: "Fotografía Pro",
    category: "Unboxing / prueba (UGC)",
    summary:
      "Foto estilo unboxing: caja abierta en mesa, manos abriendo, look real sin marcas.",
    prompt: `Genera una foto REALISTA estilo UGC de unboxing sobre una mesa.

DATOS:
- Escena: mesa limpia (madera clara o blanca)
- Producto: caja genérica sin marca, abierta, contenido parcialmente visible (sin texto legible)
- Manos: dos manos abriendo o sosteniendo la tapa, anatomía perfecta
- Fondo: interior hogar, desenfocado

ILUMINACIÓN:
- Luz natural de ventana, suave
- Sombras ligeras y realistas

CÁMERA:
- 35mm o 50mm, f/2.8, ISO 250
- Enfoque en caja y manos

COMPOSICIÓN:
- Plano superior ligeramente inclinado (top-down suave)
- Estética auténtica, no súper publicitaria

RESTRICCIONES:
- Sin logos/texto legible
- Manos correctas (5 dedos cada una), sin dedos extra`,
    thumbnail: "/images/foto-pro/ugc6.webp",
  },
  {
    id: "img-ugc-mano-007",
    title: "Producto recién sacado de caja (primer plano, textura real)",
    area: "Fotografía Pro",
    category: "Unboxing / prueba (UGC)",
    summary:
      "Primer plano del producto sostenido tras unboxing, textura real y fondo hogar desenfocado.",
    prompt: `Genera una foto REALISTA UGC mostrando el producto recién sacado de la caja.

DATOS:
- Producto: [gadget/frasco/caja], genérico sin marca
- Caja: abierta en segundo plano (desenfocada), sin texto legible
- Mano: sostiene el producto firmemente pero natural
- Fondo: hogar minimal, desenfocado

ILUMINACIÓN:
- Luz natural suave, colores reales
- Reflejos controlados en el producto

CÁMERA:
- 50mm, f/2.2, ISO 200
- Enfoque en el producto, mano nítida

COMPOSICIÓN:
- Producto centrado, caja atrás como contexto

RESTRICCIONES:
- Sin logos/texto legible
- Mano realista sin deformaciones`,
    thumbnail: "/images/foto-pro/ugc7.webp",
  },
  {
    id: "img-ugc-mano-008",
    title: "Aplicando el producto (skincare: crema en mejilla, realista)",
    area: "Fotografía Pro",
    category: "Unboxing / prueba (UGC)",
    summary:
      "Foto UGC aplicando producto (crema/serum) con piel realista y gesto natural.",
    prompt: `Genera una foto REALISTA UGC aplicando un producto de skincare.

DATOS:
- Persona: [persona], [edad], rostro limpio
- Producto: crema/serum genérico en frasco sin marca
- Acción: aplicando una pequeña cantidad en mejilla o mano (sin exceso)
- Fondo: baño o habitación, desenfocado

ILUMINACIÓN:
- Luz suave natural o luz blanca suave de baño
- Piel realista con textura natural

CÁMERA:
- 50mm u 85mm, f/2.8, ISO 250
- Enfoque en rostro y gesto de aplicación

COMPOSICIÓN:
- Primer plano o plano medio-corto

RESTRICCIONES CRÍTICAS:
- Manos y dedos correctos
- Sin texto/logos, sin piel plástica`,
    thumbnail: "/images/foto-pro/ugc8.webp",
  },
  {
    id: "img-ugc-mano-009",
    title: "Probando producto frente al espejo (UGC realista, sin doble reflejo raro)",
    area: "Fotografía Pro",
    category: "Unboxing / prueba (UGC)",
    summary:
      "Estilo UGC frente al espejo: producto visible, reflejo natural y ambiente real.",
    prompt: `Genera una foto REALISTA UGC frente a un espejo probando un producto.

DATOS:
- Persona: [persona], [edad]
- Producto: genérico sin marca, sostenido cerca del espejo
- Escena: baño limpio, espejo principal, reflejo realista
- Acción: mostrando el producto o aplicándolo

ILUMINACIÓN:
- Luz blanca suave, natural
- Piel realista, sombras mínimas

CÁMERA:
- Simular smartphone, nitidez natural
- Enfoque equilibrado en rostro y producto

COMPOSICIÓN:
- Mirror shot creíble, sin reflejos imposibles

RESTRICCIONES:
- Evitar doble reflejo imposible o manos duplicadas
- Sin logos/texto legible`,
    thumbnail: "/images/foto-pro/ugc9.webp",
  },
  {
    id: "img-ugc-mano-010",
    title: "Antes y después (2 paneles, UGC creíble, sin texto)",
    area: "Fotografía Pro",
    category: "Unboxing / prueba (UGC)",
    summary:
      "Composición tipo antes/después en dos paneles, creíble para UGC (sin texto en la imagen).",
    prompt: `Genera una imagen REALISTA tipo antes vs después en 2 paneles (lado a lado), estilo UGC.

DATOS:
- Persona: [persona], [edad]
- Panel IZQUIERDO (ANTES): expresión neutral, piel/escena “normal”
- Panel DERECHO (DESPUÉS): expresión más feliz, mejora sutil y realista (no exagerada)
- Producto: genérico sin marca, visible en el panel derecho en la mano

ILUMINACIÓN:
- Consistente en ambos paneles (misma luz)
- Piel realista, sin filtros fuertes

CÁMERA:
- Estilo smartphone, nitidez natural
- Fondo similar y desenfocado

COMPOSICIÓN:
- Dos paneles limpios, sin texto ni etiquetas en la imagen

RESTRICCIONES:
- Sin texto/watermark
- Evitar cambios irreales o exagerados`,
    thumbnail: "/images/foto-pro/ugc10.webp",
  },

  // =========================
  // CATEGORY: Fondo limpio (ads UGC)
  // =========================
  {
    id: "img-ugc-mano-011",
    title: "Producto en mano con fondo liso (UGC para anuncios, limpio)",
    area: "Fotografía Pro",
    category: "Fondo limpio (ads UGC)",
    summary:
      "Foto UGC limpia para ads: persona + producto con fondo liso y luz suave.",
    prompt: `Genera una foto REALISTA estilo UGC para anuncio, con fondo liso.

DATOS:
- Persona: [persona], [edad], sonrisa leve
- Producto: [describir], genérico sin marca
- Fondo: liso (blanco/crema/gris claro), limpio
- Pose: producto al frente, rostro visible

ILUMINACIÓN:
- Luz suave uniforme (softbox o ventana)
- Piel natural, sin retoque excesivo

CÁMERA:
- 50mm, f/2.8, ISO 100
- Enfoque nítido en ojos y producto

COMPOSICIÓN:
- Plano medio-corto, espacio negativo para texto (pero NO incluir texto)

RESTRICCIONES:
- Sin texto/logos
- Mano realista sin deformaciones`,
    thumbnail: "/images/foto-pro/ugc11.webp",
  },
  {
    id: "img-ugc-mano-012",
    title: "Producto en mano estilo 'review' (gesto señalando, manos correctas)",
    area: "Fotografía Pro",
    category: "Fondo limpio (ads UGC)",
    summary:
      "Persona mostrando producto y señalándolo con la otra mano (ideal para ads), anatomía perfecta.",
    prompt: `Genera una foto REALISTA UGC estilo review, con fondo limpio.

DATOS:
- Persona: [persona], [edad], expresión entusiasta pero real
- Producto: genérico sin marca, sostenido en una mano
- Gesto: con la otra mano, señalar el producto (dedo índice) de forma natural
- Fondo: liso (gris claro o crema)

ILUMINACIÓN:
- Suave y uniforme, sombras mínimas

CÁMERA:
- 50mm, f/3.2, ISO 100
- Enfoque en rostro y producto

COMPOSICIÓN:
- Plano medio-corto, producto bien visible

RESTRICCIONES CRÍTICAS:
- Manos correctas (5 dedos), dedo señalando natural
- Sin texto/logos/watermark`,
    thumbnail: "/images/foto-pro/ugc12.webp",
  },
  {
    id: "img-ugc-mano-013",
    title: "Producto en mano con expresión sorpresa (hook visual UGC)",
    area: "Fotografía Pro",
    category: "Fondo limpio (ads UGC)",
    summary:
      "UGC para anuncios con expresión de sorpresa (hook visual) y producto visible en mano.",
    prompt: `Genera una foto REALISTA UGC para anuncios con expresión de sorpresa.

DATOS:
- Persona: [persona], [edad], expresión sorprendido/a (sin caricatura)
- Producto: [describir], genérico sin marca
- Fondo: liso (blanco roto o gris claro)
- Pose: producto cerca del rostro, mano natural

ILUMINACIÓN:
- Luz suave frontal, piel realista
- Contraste moderado, colores naturales

CÁMERA:
- 50mm, f/2.8, ISO 100
- Enfoque en ojos y producto

COMPOSICIÓN:
- Plano medio-corto, producto protagonista

RESTRICCIONES:
- Sin texto/logos
- Evitar expresión exagerada tipo cartoon`,
    thumbnail: "/images/foto-pro/ugc13.webp",
  },
  {
    id: "img-ugc-mano-014",
    title: "Producto en mano con fondo pastel (branding cute, UGC realista)",
    area: "Fotografía Pro",
    category: "Fondo limpio (ads UGC)",
    summary:
      "UGC con fondo pastel para estética friendly y branding, manteniendo realismo.",
    prompt: `Genera una foto REALISTA UGC con fondo pastel (branding).

DATOS:
- Persona: [persona], [edad], sonrisa natural
- Producto: genérico sin marca
- Fondo: pastel sólido (mint / azul cielo / lila suave)
- Outfit: colores neutros, sin patrones fuertes

ILUMINACIÓN:
- Luz suave uniforme, sombras suaves

CÁMERA:
- 50mm, f/3.2, ISO 100
- Enfoque en rostro y producto

COMPOSICIÓN:
- Plano medio-corto, espacio negativo lateral

RESTRICCIONES:
- Sin texto/logos
- Mantener color pastel limpio y parejo`,
    thumbnail: "/images/foto-pro/ugc14.webp",
  },
  {
    id: "img-ugc-mano-015",
    title: "Producto en mano en ángulo 3/4 (look premium, fondo neutro)",
    area: "Fotografía Pro",
    category: "Fondo limpio (ads UGC)",
    summary:
      "Foto UGC más premium: sujeto en 3/4, producto visible, estética limpia y profesional.",
    prompt: `Genera una foto REALISTA UGC premium con sujeto en ángulo 3/4.

DATOS:
- Persona: [persona], [edad], expresión confiable
- Producto: genérico sin marca, sostenido a la altura del pecho
- Fondo: neutro liso (gris cálido o beige)
- Outfit: smart casual minimal

ILUMINACIÓN:
- Softbox lateral suave + relleno ligero
- Piel realista, detalle natural

CÁMERA:
- 85mm, f/2.8, ISO 100
- Enfoque en ojos, producto claro

COMPOSICIÓN:
- Plano medio-corto, pose elegante pero natural

RESTRICCIONES:
- Sin texto/logos
- Evitar manos deformes`,
    thumbnail: "/images/foto-pro/ugc15.webp",
  },

  // =========================
  // CATEGORY: Producto en mano (solo manos / close-up)
  // =========================
  {
    id: "img-ugc-mano-016",
    title: "Close-up solo manos sosteniendo producto (fondo suave, realista)",
    area: "Fotografía Pro",
    category: "Producto en mano (solo manos / close-up)",
    summary:
      "Close-up de manos sosteniendo producto, ideal para ads y catálogos sin mostrar rostro.",
    prompt: `Genera una foto REALISTA close-up de manos sosteniendo un producto (sin rostro).

DATOS:
- Manos: tono de piel [describir], uñas limpias, anatomía perfecta
- Producto: [describir], genérico sin marca ni texto legible
- Fondo: suave desenfocado (crema/gris), minimal

ILUMINACIÓN:
- Luz suave lateral para textura
- Reflejos controlados en el producto

CÁMERA:
- Macro o 85mm, f/3.5, ISO 200
- Enfoque en manos y producto

COMPOSICIÓN:
- Producto centrado, manos simétricas o naturales
- Estética limpia tipo anuncio

RESTRICCIONES CRÍTICAS:
- 5 dedos por mano, proporciones reales
- Sin texto/logos/watermark`,
    thumbnail: "/images/foto-pro/ugc16.webp",
  },
  {
    id: "img-ugc-mano-017",
    title: "Close-up producto en mano con fondo cocina (real, cotidiano)",
    area: "Fotografía Pro",
    category: "Producto en mano (solo manos / close-up)",
    summary:
      "Producto en mano con fondo cotidiano (cocina) desenfocado, look auténtico.",
    prompt: `Genera una foto REALISTA close-up de producto en mano con fondo cotidiano.

DATOS:
- Mano: anatomía perfecta, uñas naturales
- Producto: [describir], genérico sin marca
- Fondo: cocina desenfocada (madera/azulejos suaves), ambiente real

ILUMINACIÓN:
- Luz natural de ventana, suave
- Colores reales, contraste moderado

CÁMERA:
- 50mm, f/2.2, ISO 250
- Enfoque en producto, fondo bokeh

COMPOSICIÓN:
- Producto ligeramente a un lado, mano visible completa

RESTRICCIONES:
- Sin texto/logos
- Evitar dedos extra o producto deformado`,
    thumbnail: "/images/foto-pro/ugc17.webp",
  },
  {
    id: "img-ugc-mano-018",
    title: "Close-up producto en mano con luz dramática suave (premium UGC)",
    area: "Fotografía Pro",
    category: "Producto en mano (solo manos / close-up)",
    summary:
      "Versión UGC premium: close-up con luz más dramática pero suave, look de campaña.",
    prompt: `Genera una foto REALISTA close-up premium de producto en mano.

DATOS:
- Mano: piel realista, uñas limpias, sin deformaciones
- Producto: [describir], genérico sin marcas
- Fondo: oscuro suave o neutro (gris carbón), minimal

ILUMINACIÓN:
- Key light lateral suave + relleno mínimo
- Sombra con detalle, reflejos controlados

CÁMERA:
- 85mm, f/2.8, ISO 200
- Enfoque nítido en producto y textura de piel

COMPOSICIÓN:
- Encuadre cerrado, producto protagonista

RESTRICCIONES:
- Sin texto/logos/watermark
- 5 dedos, anatomía perfecta`,
    thumbnail: "/images/foto-pro/ugc18.webp",
  },
  {
    id: "img-ugc-mano-019",
    title: "Producto en mano con gesto 'aprobación' (pulgar arriba, realista)",
    area: "Fotografía Pro",
    category: "Producto en mano (solo manos / close-up)",
    summary:
      "Mano sosteniendo producto + pulgar arriba (o gesto OK) para mensaje visual de aprobación.",
    prompt: `Genera una foto REALISTA de producto en mano con gesto de aprobación.

DATOS:
- Mano 1: sosteniendo un producto genérico sin marca
- Mano 2 (opcional) o misma mano: gesto de pulgar arriba o gesto OK NATURAL
- Fondo: interior desenfocado (hogar) o fondo liso neutro

ILUMINACIÓN:
- Luz suave natural, sombras suaves

CÁMERA:
- 50mm, f/2.8, ISO 200
- Enfoque en manos y producto

COMPOSICIÓN:
- Producto claramente visible, gesto de aprobación junto a él

RESTRICCIONES CRÍTICAS:
- Anatomía perfecta (dedos correctos, articulaciones reales)
- Sin texto/logos/watermark`,
    thumbnail: "/images/foto-pro/ugc19.webp",
  },
  {
    id: "img-ugc-mano-020",
    title: "Producto en mano con fondo de escritorio (setup creator, realista)",
    area: "Fotografía Pro",
    category: "Producto en mano (solo manos / close-up)",
    summary:
      "Producto en mano con setup de escritorio (laptop/teclado desenfocados), estilo creator real.",
    prompt: `Genera una foto REALISTA de producto en mano con fondo de escritorio (creator setup).

DATOS:
- Mano: sosteniendo producto genérico sin marca
- Fondo: escritorio con laptop/teclado/agenda DESENFOCADOS (sin logos, sin texto legible)
- Estilo: productivity/creator, auténtico

ILUMINACIÓN:
- Luz suave de ventana o lámpara cálida ligera
- Colores naturales, sombras suaves

CÁMERA:
- 50mm, f/2.2, ISO 320
- Enfoque en producto, bokeh en fondo

COMPOSICIÓN:
- Producto centrado, escritorio aporta contexto

RESTRICCIONES:
- Sin texto/logos
- Mano realista (5 dedos), sin deformaciones`,
    thumbnail: "/images/foto-pro/ugc20.webp",
  },
];
