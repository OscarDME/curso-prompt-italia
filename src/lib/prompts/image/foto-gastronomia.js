// src/lib/prompts/image/foto-gastronomia.js

export const imagePromptsFotoGastronomia = [
  // =========================
  // CATEGORY: Platos (restaurant / editorial)
  // =========================
  {
    id: "img-food-001",
    title: "Plato gourmet en restaurante (luz cálida, shallow depth, realista)",
    area: "Fotografía Pro",
    category: "Platos (restaurant / editorial)",
    summary:
      "Foto editorial de restaurante: plato gourmet con luz cálida y fondo bokeh premium.",
    prompt: `Genera una fotografía REALISTA de gastronomía estilo restaurante (editorial).

DATOS:
- Plato: [describir plato gourmet] (presentación cuidada, porciones reales)
- Vajilla: plato de cerámica premium (sin logos)
- Fondo: restaurante elegante desenfocado (bokeh de luces cálidas)

ILUMINACIÓN:
- Luz cálida suave lateral (tipo lámpara/ambiente restaurante)
- Brillos controlados en salsas/aceites, textura real

CÁMARA:
- 50mm u 85mm, f/2.0, ISO 400
- Enfoque en punto principal del plato (proteína o garnish)

COMPOSICIÓN:
- Plano 3/4 (ángulo de 45°), plato centrado
- Estética de revista, colores naturales

RESTRICCIONES:
- Sin texto/watermarks
- Evitar comida “plástica” o irreal`,
    thumbnail: "/images/foto-pro/food1.webp",
  },
  {
    id: "img-food-002",
    title: "Plato minimalista fine dining (fondo oscuro, low-key elegante)",
    area: "Fotografía Pro",
    category: "Platos (restaurant / editorial)",
    summary:
      "Fine dining low-key: fondo oscuro, plato minimalista y luces controladas tipo campaña.",
    prompt: `Genera una foto REALISTA fine dining low-key (elegante).

DATOS:
- Plato: minimalista (pocos elementos), emplatado artístico
- Vajilla: negra o gris carbón (sin logos)
- Fondo: oscuro desenfocado, ambiente sofisticado

ILUMINACIÓN:
- Key light lateral suave, sombras con detalle
- Reflejos controlados, contraste medio-alto

CÁMARA:
- 85mm, f/2.2, ISO 500
- Enfoque nítido en el elemento principal

COMPOSICIÓN:
- Ángulo 45° o muy bajo (hero), enfoque selectivo
- Estética premium de campaña

RESTRICCIONES:
- Sin texto/logos
- Evitar sombras empastadas (quiero detalle)`,
    thumbnail: "/images/foto-pro/food2.webp",
  },
  {
    id: "img-food-003",
    title: "Pasta cremosa en mesa de madera (luz natural, estilo hogar premium)",
    area: "Fotografía Pro",
    category: "Platos (restaurant / editorial)",
    summary:
      "Foto realista de pasta en mesa de madera, luz natural de ventana, vibe hogareña premium.",
    prompt: `Genera una foto REALISTA de un plato de pasta cremosa en mesa.

DATOS:
- Plato: pasta cremosa con toppings realistas (queso, hierbas, pimienta)
- Props: tenedor, servilleta de tela, vaso (sin marcas)
- Superficie: mesa de madera cálida
- Fondo: cocina o comedor desenfocado

ILUMINACIÓN:
- Luz natural lateral de ventana
- Texturas visibles (pasta, salsa), vapor sutil opcional

CÁMARA:
- 50mm, f/2.2, ISO 250
- Enfoque en centro del plato

COMPOSICIÓN:
- Ángulo 45°, composición acogedora

RESTRICCIONES:
- Sin texto/watermarks
- Evitar ingredientes irreales o deformes`,
    thumbnail: "/images/foto-pro/food3.webp",
  },
  {
    id: "img-food-004",
    title: "Hamburguesa jugosa estilo anuncio (macro detalle, realista)",
    area: "Fotografía Pro",
    category: "Platos (restaurant / editorial)",
    summary:
      "Hamburguesa estilo campaña: macro de textura, ingredientes realistas y luz controlada.",
    prompt: `Genera una foto REALISTA estilo anuncio de una hamburguesa.

DATOS:
- Comida: hamburguesa grande pero realista (pan, carne, queso, vegetales)
- Detalles: textura de pan y carne, brillo sutil en salsa
- Fondo: desenfocado, oscuro o neutro, estilo campaña

ILUMINACIÓN:
- Luz lateral suave + relleno mínimo
- Alto detalle, sin look “fake”

CÁMARA:
- 85mm, f/2.8, ISO 200
- Enfoque en el centro (carne/queso), bokeh en fondo

COMPOSICIÓN:
- Plano frontal ligeramente bajo (hero)
- Estética publicitaria premium

RESTRICCIONES:
- Sin texto/logos
- Evitar ingredientes flotantes o formas imposibles`,
    thumbnail: "/images/foto-pro/food4.webp",
  },
  {
    id: "img-food-005",
    title: "Postre de chocolate (bokeh cálido, estilo cafetería premium)",
    area: "Fotografía Pro",
    category: "Platos (restaurant / editorial)",
    summary:
      "Postre de chocolate con luz cálida y fondo tipo cafetería desenfocado, estética premium.",
    prompt: `Genera una foto REALISTA de un postre de chocolate estilo cafetería premium.

DATOS:
- Postre: [brownie/tarta/mousse] con detalles (cacao, frutos rojos)
- Vajilla: plato pequeño cerámica, sin logos
- Fondo: cafetería cálida desenfocada con bokeh

ILUMINACIÓN:
- Luz cálida suave (ambiente cafetería) + reflejos controlados
- Textura real del chocolate, brillo sutil

CÁMARA:
- 50mm, f/2, ISO 400
- Enfoque en el postre, fondo bokeh

COMPOSICIÓN:
- Ángulo 45°, props sutiles: taza café desenfocada opcional

RESTRICCIONES:
- Sin texto/watermark
- Evitar chocolate “plástico”`,
    thumbnail: "/images/foto-pro/food5.webp",
  },

  // =========================
  // CATEGORY: Top-down / flat lay
  // =========================
  {
    id: "img-food-006",
    title: "Flat lay desayuno saludable (top-down, luz natural, minimal)",
    area: "Fotografía Pro",
    category: "Top-down / flat lay",
    summary:
      "Flat lay minimal: desayuno saludable con luz natural y composición limpia para redes.",
    prompt: `Genera una foto REALISTA top-down (flat lay) de desayuno saludable.

DATOS:
- Elementos: bowl de fruta + yogurt, café/té, pan tostado, frutos secos
- Superficie: mesa clara o madera, estética minimal
- Props: cubiertos y servilleta de tela, sin marcas

ILUMINACIÓN:
- Luz natural suave desde un lado, sombras finas

CÁMARA:
- Top-down 90°, nitidez uniforme
- 35mm equivalente, f/4, ISO 200

COMPOSICIÓN:
- Orden limpio, espacio negativo para usar en diseño (pero NO pongas texto)

RESTRICCIONES:
- Sin texto/watermark
- Evitar objetos duplicados o deformes`,
    thumbnail: "/images/foto-pro/food6.webp",
  },
  {
    id: "img-food-007",
    title: "Flat lay pizza artesanal (top-down, textura real, apetecible)",
    area: "Fotografía Pro",
    category: "Top-down / flat lay",
    summary:
      "Pizza artesanal top-down con textura real del queso y masa, look apetecible para anuncios.",
    prompt: `Genera una foto REALISTA top-down de una pizza artesanal.

DATOS:
- Pizza: masa artesanal, queso derretido realista, toppings coherentes
- Props: tabla de madera, cortador/rodaja, servilleta
- Fondo: mesa rústica limpia, sin marcas

ILUMINACIÓN:
- Luz natural suave, resaltar textura del queso
- Sombras leves

CÁMARA:
- Top-down 90°, 35mm, f/4, ISO 200
- Nitidez uniforme

COMPOSICIÓN:
- Pizza centrada con props alrededor

RESTRICCIONES:
- Sin texto/logos
- Evitar queso “plástico” o toppings flotando`,
    thumbnail: "/images/foto-pro/food7.webp",
  },
  {
    id: "img-food-008",
    title: "Flat lay café y postre (estética cozy, tonos cálidos)",
    area: "Fotografía Pro",
    category: "Top-down / flat lay",
    summary:
      "Flat lay cozy de café y postre con tonos cálidos y composición instagrammable.",
    prompt: `Genera una foto REALISTA flat lay (top-down) de café + postre.

DATOS:
- Elementos: taza de café (latte) + postre pequeño + cuchara + servilleta
- Superficie: mesa de madera cálida
- Estilo: cozy, minimal, sin marcas ni logos

ILUMINACIÓN:
- Luz cálida suave (tarde), sombras delicadas

CÁMARA:
- Top-down 90°, f/3.5, ISO 250
- Nitidez clara, sin blur excesivo

COMPOSICIÓN:
- Colocar elementos en diagonal, con espacio negativo

RESTRICCIONES:
- Sin texto/watermark
- Evitar espuma del café irreal`,
    thumbnail: "/images/foto-pro/food8.webp",
  },
  {
    id: "img-food-009",
    title: "Flat lay ingredientes para cocinar (mise en place, limpio y realista)",
    area: "Fotografía Pro",
    category: "Top-down / flat lay",
    summary:
      "Mise en place top-down: ingredientes ordenados para receta, estilo limpio y didáctico.",
    prompt: `Genera una foto REALISTA top-down de mise en place (ingredientes listos para cocinar).

DATOS:
- Ingredientes: [verduras, especias, aceite, sal, pasta/arroz], todo realista
- Contenedores: bowls pequeños de cerámica, tabla de cortar
- Superficie: encimera clara o cemento suave, estética moderna

ILUMINACIÓN:
- Luz natural suave, sombras finas

CÁMARA:
- Top-down 90°, 35mm, f/4, ISO 200
- Nitidez uniforme

COMPOSICIÓN:
- Orden prolijo, cada ingrediente visible, look didáctico premium

RESTRICCIONES:
- Sin texto/logos
- Evitar ingredientes deformes o repetidos`,
    thumbnail: "/images/foto-pro/food9.webp",
  },
  {
    id: "img-food-010",
    title: "Flat lay sushi premium (minimal, vajilla negra, estilo editorial)",
    area: "Fotografía Pro",
    category: "Top-down / flat lay",
    summary:
      "Sushi top-down premium con vajilla negra, composición minimal y look editorial.",
    prompt: `Genera una foto REALISTA top-down de sushi premium.

DATOS:
- Sushi: nigiri y makis con textura real, pescado realista
- Vajilla: negra o pizarra, sin logos
- Props: palillos, salsa soja en bowl, jengibre (sin exceso)

ILUMINACIÓN:
- Luz suave con contraste moderado para resaltar textura del pescado
- Reflejos controlados

CÁMARA:
- Top-down 90°, 50mm, f/4, ISO 250
- Nitidez uniforme

COMPOSICIÓN:
- Minimal, mucho espacio negativo

RESTRICCIONES:
- Sin texto/watermark
- Evitar pescado “plástico” o repetición de piezas`,
    thumbnail: "/images/foto-pro/food10.webp",
  },

  // =========================
  // CATEGORY: Bebidas
  // =========================
  {
    id: "img-food-011",
    title: "Latte art en cafetería (macro suave, bokeh cálido, realista)",
    area: "Fotografía Pro",
    category: "Bebidas",
    summary:
      "Latte art realista con bokeh cálido de cafetería, estilo premium y natural.",
    prompt: `Genera una foto REALISTA de una bebida de cafetería (latte art).

DATOS:
- Bebida: latte en taza cerámica sin logos, latte art claro y realista
- Escena: mesa de cafetería, fondo con bokeh cálido
- Props: cuchara, servilleta de tela, opcional: croissant desenfocado

ILUMINACIÓN:
- Luz cálida suave, reflejos controlados en la taza
- Textura realista de espuma

CÁMARA:
- 85mm, f/2, ISO 400
- Enfoque en latte art, bokeh fuerte atrás

COMPOSICIÓN:
- Ángulo 45°, taza protagonista

RESTRICCIONES:
- Sin texto/watermark
- Evitar latte art “perfecto irreal”`,
    thumbnail: "/images/foto-pro/food11.webp",
  },
  {
    id: "img-food-012",
    title: "Smoothie saludable (colores naturales, fondo claro, estilo wellness)",
    area: "Fotografía Pro",
    category: "Bebidas",
    summary:
      "Smoothie estilo wellness con fondo claro y luz natural, look limpio para redes.",
    prompt: `Genera una foto REALISTA de smoothie saludable estilo wellness.

DATOS:
- Bebida: smoothie en vaso transparente sin marcas, color natural (frutas reales)
- Props: frutas alrededor (plátano, berries), pajilla simple
- Fondo: claro (blanco/crema), minimal

ILUMINACIÓN:
- Luz natural suave, sombras mínimas
- Colores reales, no saturación excesiva

CÁMERA:
- 50mm, f/2.8, ISO 200
- Enfoque en vaso, fondo ligeramente desenfocado

COMPOSICIÓN:
- Vaso centrado con props sutiles

RESTRICCIONES:
- Sin texto/logos
- Evitar líquidos con textura “gelatina” irreal`,
    thumbnail: "/images/foto-pro/food12.webp",
  },
  {
    id: "img-food-013",
    title: "Cóctel nocturno (bar elegante, luces bokeh, realista)",
    area: "Fotografía Pro",
    category: "Bebidas",
    summary:
      "Cóctel en bar elegante con bokeh nocturno, estética premium y reflejos controlados.",
    prompt: `Genera una foto REALISTA de un cóctel en bar elegante.

DATOS:
- Bebida: cóctel en copa (sin marcas), garnish realista (cítrico/hierbas)
- Escena: bar de lujo, fondo oscuro con luces cálidas desenfocadas
- Superficie: barra pulida con reflejos sutiles

ILUMINACIÓN:
- Luz cálida lateral, contraste medio-alto
- Reflejos realistas en cristal (sin brillos quemados)

CÁMERA:
- 85mm, f/1.8, ISO 1000
- Enfoque en la copa, bokeh fuerte atrás

COMPOSICIÓN:
- Ángulo 45°, copa protagonista

RESTRICCIONES:
- Sin texto/watermark
- Evitar hielo o garnish imposible`,
    thumbnail: "/images/foto-pro/food13.webp",
  },
  {
    id: "img-food-014",
    title: "Té con vapor sutil (cozy, luz suave, estilo hogar)",
    area: "Fotografía Pro",
    category: "Bebidas",
    summary:
      "Taza de té con vapor sutil, estética cozy y realista para contenido calm.",
    prompt: `Genera una foto REALISTA de una taza de té caliente con vapor sutil.

DATOS:
- Bebida: té en taza sin logos
- Props: libro desenfocado, manta o servilleta, estilo cozy
- Fondo: interior hogar, cálido, desenfocado

ILUMINACIÓN:
- Luz suave cálida (tarde), sombras delicadas
- Vapor MUY sutil y realista

CÁMERA:
- 50mm, f/2, ISO 400
- Enfoque en taza, bokeh en fondo

COMPOSICIÓN:
- Ángulo 45°, atmósfera acogedora

RESTRICCIONES:
- Sin texto/logos
- Evitar vapor exagerado o falso`,
    thumbnail: "/images/foto-pro/food14.webp",
  },
  {
    id: "img-food-015",
    title: "Agua saborizada (look fresco, luz brillante, estilo verano)",
    area: "Fotografía Pro",
    category: "Bebidas",
    summary:
      "Bebida fresca tipo verano con frutas, luz brillante y estética limpia.",
    prompt: `Genera una foto REALISTA de agua saborizada estilo verano.

DATOS:
- Bebida: jarra o vaso con agua + rodajas de cítrico + menta (realista)
- Condensación: gotas sutiles en el cristal
- Fondo: claro, minimal, vibe fresco

ILUMINACIÓN:
- Luz brillante natural, sombras suaves
- Colores frescos, contraste moderado

CÁMERA:
- 50mm, f/2.8, ISO 100–200
- Enfoque en el vaso, fondo suave

COMPOSICIÓN:
- Vaso centrado, props mínimos

RESTRICCIONES:
- Sin texto/watermark
- Evitar hielo irreal o frutas deformes`,
    thumbnail: "/images/foto-pro/food15.webp",
  },

  // =========================
  // CATEGORY: Cocina / proceso (hands in frame)
  // =========================
  {
    id: "img-food-016",
    title: "Manos preparando ensalada (proceso real, luz natural, sin deformaciones)",
    area: "Fotografía Pro",
    category: "Cocina / proceso (hands in frame)",
    summary:
      "Foto de proceso: manos preparando ensalada en tabla, look auténtico y didáctico.",
    prompt: `Genera una foto REALISTA de proceso en cocina con manos en escena.

DATOS:
- Acción: manos cortando verduras para ensalada en tabla
- Ingredientes: tomates, pepino, hojas verdes, aceite, sal (realistas)
- Utensilios: cuchillo y bowl, sin marcas
- Fondo: cocina desenfocada

ILUMINACIÓN:
- Luz natural de ventana, suave
- Texturas reales, colores naturales

CÁMERA:
- 35mm, f/2.8, ISO 250
- Enfoque en manos e ingredientes

COMPOSICIÓN:
- Ángulo 45° o semitop-down
- Estética auténtica, no “perfecta de estudio”

RESTRICCIONES CRÍTICAS:
- Manos anatómicamente perfectas (5 dedos, sin deformaciones)
- Sin texto/logos/watermark`,
    thumbnail: "/images/foto-pro/food16.webp",
  },
  {
    id: "img-food-017",
    title: "Vertiendo salsa sobre plato (acción congelada, detalle real)",
    area: "Fotografía Pro",
    category: "Cocina / proceso (hands in frame)",
    summary:
      "Acción culinaria: salsa cayendo sobre el plato, congelada, con textura real.",
    prompt: `Genera una foto REALISTA de acción culinaria (pour shot).

DATOS:
- Acción: mano vertiendo salsa sobre un plato (la salsa en caída congelada)
- Plato: comida [describir] lista para servir
- Fondo: cocina o mesa desenfocada, sin marcas

ILUMINACIÓN:
- Luz suave lateral para resaltar brillo de la salsa
- Reflejos controlados, textura real

CÁMERA:
- 85mm, f/2.8, ISO 400
- Velocidad alta (acción congelada), enfoque en zona de la salsa y plato

COMPOSICIÓN:
- Ángulo 45°, plato protagonista
- Estética tipo publicidad culinaria

RESTRICCIONES:
- Manos perfectas (sin dedos extra)
- Sin texto/logos`,
    thumbnail: "/images/foto-pro/food17.webp",
  },
  {
    id: "img-food-018",
    title: "Espolvoreando azúcar/cacao (macro de postre, partículas realistas)",
    area: "Fotografía Pro",
    category: "Cocina / proceso (hands in frame)",
    summary:
      "Macro espolvoreando cacao/azúcar sobre postre, detalle realista y look premium.",
    prompt: `Genera una foto REALISTA macro de proceso espolvoreando.

DATOS:
- Acción: mano espolvoreando cacao o azúcar sobre un postre
- Postre: [tarta/brownie/capuchino], textura real
- Fondo: desenfocado, tonos cálidos y premium

ILUMINACIÓN:
- Luz suave lateral, partículas visibles y realistas
- No exagerar partículas

CÁMERA:
- Macro o 85mm, f/2.8, ISO 400
- Enfoque en la caída del polvo y superficie del postre

COMPOSICIÓN:
- Encuadre cerrado, look publicitario

RESTRICCIONES:
- Mano anatómicamente correcta
- Sin texto/watermark`,
    thumbnail: "/images/foto-pro/food18.webp",
  },
  {
    id: "img-food-019",
    title: "Cocinando en sartén (vapor sutil, proceso realista)",
    area: "Fotografía Pro",
    category: "Cocina / proceso (hands in frame)",
    summary:
      "Foto de proceso en sartén: salteado con vapor sutil, luz natural y realismo.",
    prompt: `Genera una foto REALISTA de proceso cocinando en sartén.

DATOS:
- Acción: salteado en sartén (verduras o proteína), espátula visible
- Vapor: sutil, realista
- Cocina: moderna, limpia, desenfocada
- Ingredientes coherentes, sin deformaciones

ILUMINACIÓN:
- Luz natural suave o luz cálida de cocina
- Brillos controlados en aceite, textura real

CÁMERA:
- 35mm, f/2.8, ISO 500
- Enfoque en la sartén y comida, fondo bokeh

COMPOSICIÓN:
- Ángulo 45° cercano, dinámica de cocina real

RESTRICCIONES:
- Sin logos/texto
- Evitar humo excesivo o comida irreal`,
    thumbnail: "/images/foto-pro/food19.webp",
  },
  {
    id: "img-food-020",
    title: "Sirviendo plato en mesa (mano colocando plato, estilo hogar premium)",
    area: "Fotografía Pro",
    category: "Cocina / proceso (hands in frame)",
    summary:
      "Momento de servir: mano colocando el plato en mesa, vibe hogar premium auténtico.",
    prompt: `Genera una foto REALISTA de servir un plato en mesa.

DATOS:
- Acción: mano colocando un plato terminado sobre la mesa
- Plato: [describir], presentación realista
- Mesa: madera o mantel neutro, props mínimos (vaso, cubiertos)
- Fondo: comedor/cocina desenfocado

ILUMINACIÓN:
- Luz suave natural, tonos cálidos
- Textura real en comida y vajilla

CÁMERA:
- 50mm, f/2.5, ISO 300
- Enfoque en plato y mano, fondo bokeh suave

COMPOSICIÓN:
- Ángulo 45°, sensación acogedora

RESTRICCIONES CRÍTICAS:
- Mano perfecta (5 dedos, articulaciones reales)
- Sin texto/watermark`,
    thumbnail: "/images/foto-pro/food20.webp",
  },
];
