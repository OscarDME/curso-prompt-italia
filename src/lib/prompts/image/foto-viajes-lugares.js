// src/lib/prompts/image/foto-viajes-lugares.js

export const imagePromptsFotoViajesLugares = [
  // =========================
  // CATEGORY: Ciudad / urbano
  // =========================
  {
    id: "img-viaje-001",
    title: "Ciudad al atardecer (calle icónica, luz dorada, look cinematográfico)",
    area: "Fotografía Pro",
    category: "Ciudad / urbano",
    summary:
      "Foto de viaje urbana realista al golden hour con profundidad, gente sutil y estética cinematográfica.",
    prompt: `Genera una fotografía REALISTA de viaje en ciudad al atardecer.

DATOS:
- Lugar: calle urbana icónica genérica (sin marcas ni letreros legibles)
- Elementos: arquitectura interesante, faroles, tránsito sutil
- Personas: algunas personas de fondo (desenfocadas), naturales
- Estilo: cinematic travel, colores naturales (no exagerar saturación)

ILUMINACIÓN:
- Golden hour (luz dorada lateral), sombras suaves
- Reflejos realistas en ventanas y pavimento

CÁMARA:
- 35mm, f/2.2, ISO 200
- Enfoque en el punto de interés, fondo con bokeh suave

COMPOSICIÓN:
- Líneas guía (calle) hacia el fondo, sensación de profundidad
- Espacio negativo ligero para uso en diseño (pero NO incluir texto)

RESTRICCIONES:
- Sin texto/watermarks
- Evitar carteles o marcas legibles`,
    thumbnail: "/images/foto-pro/viaje1.webp",
  },
  {
    id: "img-viaje-002",
    title: "Calle nocturna con neón sutil (lluvia ligera, reflejos, realista)",
    area: "Fotografía Pro",
    category: "Ciudad / urbano",
    summary:
      "Escena nocturna urbana con suelo mojado y bokeh de luces, neón sutil sin exceso.",
    prompt: `Genera una foto REALISTA de ciudad nocturna con estética cinematográfica.

DATOS:
- Lugar: calle urbana genérica, moderna
- Ambiente: suelo ligeramente mojado (reflejos), lluvia muy sutil opcional
- Luces: neón sutil magenta/cian + faroles cálidos
- Personas: opcional, pocas y desenfocadas

ILUMINACIÓN:
- Contraste medio-alto, mantener detalle en sombras
- Reflejos realistas en pavimento

CÁMARA:
- 35mm, f/1.8, ISO 1600
- Bokeh de luces al fondo, enfoque en punto medio

COMPOSICIÓN:
- Perspectiva de calle con profundidad, look movie still

RESTRICCIONES:
- Sin texto/logos legibles
- Evitar exceso de glow artificial`,
    thumbnail: "/images/foto-pro/viaje2.webp",
  },
  {
    id: "img-viaje-003",
    title: "Café en calle europea (mañana, luz suave, travel editorial)",
    area: "Fotografía Pro",
    category: "Ciudad / urbano",
    summary:
      "Vibe editorial: terraza de café en calle bonita, luz de mañana suave y realismo.",
    prompt: `Genera una foto REALISTA editorial de viaje en una calle con terraza de café.

DATOS:
- Escena: mesas en exterior, sillas, calle de piedra o pavimento bonito
- Elementos: plantas, ventanas, detalles arquitectónicos (sin letreros legibles)
- Personas: 1–2 personas desenfocadas opcional, ambiente relajado
- Estilo: travel editorial, limpio y luminoso

ILUMINACIÓN:
- Luz de mañana suave, sombras muy ligeras
- Colores naturales, tonos cálidos neutros

CÁMARA:
- 50mm, f/2.2, ISO 200
- Enfoque en mesa/elemento principal, fondo bokeh

COMPOSICIÓN:
- Regla de tercios, sensación acogedora

RESTRICCIONES:
- Sin texto/logos legibles
- Evitar rostros raros en fondo`,
    thumbnail: "/images/foto-pro/viaje3.webp",
  },
  {
    id: "img-viaje-004",
    title: "Vista desde mirador urbano (skyline, atardecer, haze suave)",
    area: "Fotografía Pro",
    category: "Ciudad / urbano",
    summary:
      "Skyline realista desde mirador con bruma suave y luz de atardecer, look premium.",
    prompt: `Genera una foto REALISTA de skyline urbano desde un mirador.

DATOS:
- Lugar: vista panorámica de ciudad (edificios genéricos, sin marcas)
- Atmósfera: bruma/haze suave realista (no exagerada)
- Elementos: barandal o punto de mirador sutil en primer plano

ILUMINACIÓN:
- Atardecer, luz cálida suave con gradiente en el cielo
- Sombras suaves, detalle en edificios

CÁMARA:
- 70mm, f/4, ISO 200
- Nitidez alta, leve compresión telefotográfica

COMPOSICIÓN:
- Horizonte recto, skyline en tercio superior
- Espacio negativo en cielo (sin texto)

RESTRICCIONES:
- Sin texto/watermarks
- Evitar edificios deformes`,
    thumbnail: "/images/foto-pro/viaje4.webp",
  },

  // =========================
  // CATEGORY: Naturaleza / paisajes
  // =========================
  {
    id: "img-viaje-005",
    title: "Montañas al amanecer (niebla ligera, épico pero realista)",
    area: "Fotografía Pro",
    category: "Naturaleza / paisajes",
    summary:
      "Paisaje de montaña al amanecer con niebla sutil y color natural, estilo travel premium.",
    prompt: `Genera una foto REALISTA de montañas al amanecer.

DATOS:
- Escena: cordillera con picos, valle y niebla ligera en capas (sutil)
- Elementos: vegetación natural, sin elementos fantásticos
- Estilo: travel premium, realista, sin HDR exagerado

ILUMINACIÓN:
- Amanecer: luz suave dorada/rosada, sombras largas delicadas
- Gradiente natural en el cielo

CÁMARA:
- 24–35mm, f/5.6, ISO 100–200
- Nitidez general, profundidad amplia

COMPOSICIÓN:
- Capas de profundidad (primer plano/medio/fondo), sensación épica

RESTRICCIONES:
- Sin texto/watermarks
- Evitar montañas “pintadas” irreales`,
    thumbnail: "/images/foto-pro/viaje5.webp",
  },
  {
    id: "img-viaje-006",
    title: "Playa tropical (agua turquesa realista, palmeras, luz brillante)",
    area: "Fotografía Pro",
    category: "Naturaleza / paisajes",
    summary:
      "Playa luminosa con agua turquesa realista, palmeras y estética veraniega premium.",
    prompt: `Genera una foto REALISTA de playa tropical.

DATOS:
- Escena: playa con arena clara, palmeras, mar turquesa realista
- Elementos: olas suaves, espuma natural, cielo despejado
- Personas: opcional, muy pequeñas y desenfocadas a lo lejos

ILUMINACIÓN:
- Luz brillante de mediodía o mañana, sombras suaves
- Colores naturales (no saturación excesiva)

CÁMARA:
- 24–28mm, f/5, ISO 100
- Nitidez amplia, horizonte recto

COMPOSICIÓN:
- Horizonte en tercio superior, palmera en un lado para enmarcar

RESTRICCIONES:
- Sin texto/watermarks
- Evitar agua “neón” irreal`,
    thumbnail: "/images/foto-pro/viaje6.webp",
  },
  {
    id: "img-viaje-007",
    title: "Bosque otoñal (camino, luz suave, colores cálidos naturales)",
    area: "Fotografía Pro",
    category: "Naturaleza / paisajes",
    summary:
      "Bosque otoñal con camino y tonos cálidos naturales, estilo postal realista.",
    prompt: `Genera una foto REALISTA de bosque en otoño con un camino.

DATOS:
- Escena: camino entre árboles con hojas otoñales, suelo con hojas secas
- Elementos: niebla suave opcional, rayos de luz muy sutiles
- Estilo: travel natural, realista, sin filtros fuertes

ILUMINACIÓN:
- Luz suave (tarde/nublado), sombras delicadas
- Colores cálidos naturales (amarillo/naranja/rojo) sin exagerar

CÁMARA:
- 35mm, f/3.5, ISO 200
- Enfoque en el camino, fondo con profundidad

COMPOSICIÓN:
- Camino como línea guía hacia el centro

RESTRICCIONES:
- Sin texto/watermarks
- Evitar patrones repetidos artificiales`,
    thumbnail: "/images/foto-pro/viaje7.webp",
  },
  {
    id: "img-viaje-008",
    title: "Cascada en selva (larga exposición ligera, realista, verde profundo)",
    area: "Fotografía Pro",
    category: "Naturaleza / paisajes",
    summary:
      "Cascada realista con efecto de agua suave tipo larga exposición y verde profundo natural.",
    prompt: `Genera una foto REALISTA de cascada en entorno natural.

DATOS:
- Escena: cascada mediana con rocas y vegetación, agua clara realista
- Estilo: travel naturaleza, limpio, sin fantasía
- Agua: efecto suave tipo larga exposición (ligero, no “algodón exagerado”)

ILUMINACIÓN:
- Luz difusa (bosque), sombras suaves, contraste moderado
- Verde profundo realista

CÁMARA:
- 24–35mm, f/8, ISO 100 (simular larga exposición)
- Nitidez en rocas y vegetación

COMPOSICIÓN:
- Cascada centrada, rocas en primer plano para profundidad

RESTRICCIONES:
- Sin texto/watermarks
- Evitar agua irreal o vegetación duplicada`,
    thumbnail: "/images/foto-pro/viaje8.webp",
  },
  {
    id: "img-viaje-009",
    title: "Desierto con dunas (golden hour, sombras largas, minimal)",
    area: "Fotografía Pro",
    category: "Naturaleza / paisajes",
    summary:
      "Dunas minimalistas en golden hour con sombras largas, estética calm y premium.",
    prompt: `Genera una foto REALISTA de desierto con dunas.

DATOS:
- Escena: dunas onduladas minimalistas, sin elementos modernos
- Elementos: huellas sutiles opcional, horizonte limpio
- Estilo: minimal travel, premium, natural

ILUMINACIÓN:
- Golden hour, sombras largas finas, tonos cálidos suaves
- Contraste moderado para resaltar textura de arena

CÁMARA:
- 50–70mm, f/5.6, ISO 100
- Compresión leve para formas de dunas

COMPOSICIÓN:
- Líneas curvas de dunas como protagonistas, mucho espacio negativo

RESTRICCIONES:
- Sin texto/watermarks
- Evitar arena “plástica” o patrones repetidos`,
    thumbnail: "/images/foto-pro/viaje9.webp",
  },

  // =========================
  // CATEGORY: Arquitectura / monumentos (genérico, sin marcas)
  // =========================
  {
    id: "img-viaje-010",
    title: "Catedral/templo (interior, luz por vitrales, realista)",
    area: "Fotografía Pro",
    category: "Arquitectura / monumentos",
    summary:
      "Interior solemne con luz entrando por vitrales y atmósfera realista, sin elementos legibles.",
    prompt: `Genera una foto REALISTA de interior de catedral/templo (arquitectura).

DATOS:
- Escena: interior con arcos altos, vitrales, bancos, detalles ornamentales
- Personas: opcional, pocas y pequeñas, desenfocadas para escala
- Estilo: travel editorial, realista

ILUMINACIÓN:
- Luz entrando por vitrales (rayos suaves), polvo en el aire sutil opcional
- Sombras suaves, mantener detalle

CÁMARA:
- 24mm, f/4.5, ISO 800
- Gran angular moderado, líneas verticales rectas (sin distorsión)

COMPOSICIÓN:
- Simetría central, pasillo hacia el altar (sin símbolos legibles)

RESTRICCIONES:
- Sin texto/watermarks
- Evitar deformación de columnas/arcos`,
    thumbnail: "/images/foto-pro/viaje10.webp",
  },
  {
    id: "img-viaje-011",
    title: "Puente icónico genérico (amanecer, niebla leve, look postal)",
    area: "Fotografía Pro",
    category: "Arquitectura / monumentos",
    summary:
      "Puente grande al amanecer con bruma leve y agua, estética postal realista sin marcas.",
    prompt: `Genera una foto REALISTA de un puente grande icónico genérico (sin identificar).

DATOS:
- Escena: puente sobre río o bahía, niebla suave opcional
- Elementos: agua con reflejos, skyline lejano desenfocado
- Estilo: travel postcard premium

ILUMINACIÓN:
- Amanecer, luz suave, tonos fríos-cálidos equilibrados
- Reflejos realistas, contraste moderado

CÁMARA:
- 35–50mm, f/5.6, ISO 200
- Nitidez amplia, líneas rectas

COMPOSICIÓN:
- Puente como diagonal o regla de tercios, horizonte recto

RESTRICCIONES:
- Sin texto/watermarks
- Evitar señales o logos legibles`,
    thumbnail: "/images/foto-pro/viaje11.webp",
  },
  {
    id: "img-viaje-012",
    title: "Barrio colorido (fachadas, calle estrecha, luz suave, realista)",
    area: "Fotografía Pro",
    category: "Arquitectura / monumentos",
    summary:
      "Calle con fachadas coloridas y vibe travel, colores naturales y sin carteles legibles.",
    prompt: `Genera una foto REALISTA de un barrio con fachadas coloridas.

DATOS:
- Escena: calle estrecha con fachadas pintadas, balcones, plantas
- Elementos: adoquines, puertas, ventanas (sin letreros legibles)
- Personas: opcional, pocas y desenfocadas

ILUMINACIÓN:
- Luz suave (tarde/nublado), colores naturales
- Sombras leves, look editorial

CÁMARA:
- 35mm, f/2.8, ISO 250
- Enfoque en fachadas, profundidad de calle

COMPOSICIÓN:
- Líneas guía por la calle, sensación de exploración

RESTRICCIONES:
- Sin texto/watermarks
- Evitar patrones repetidos artificiales`,
    thumbnail: "/images/foto-pro/viaje12.webp",
  },

  // =========================
  // CATEGORY: Interior / hotel / Airbnb
  // =========================
  {
    id: "img-viaje-013",
    title: "Habitación de hotel minimal (luz de ventana, cama impecable, realista)",
    area: "Fotografía Pro",
    category: "Interior / hotel / Airbnb",
    summary:
      "Interior hotel/Airbnb minimal con luz natural y estética limpia tipo travel influencer.",
    prompt: `Genera una foto REALISTA de interior de hotel/Airbnb minimal.

DATOS:
- Escena: habitación luminosa, cama impecable, mesitas, lámparas
- Decoración: minimal cálida (madera, blanco, beige), sin marcas
- Ventana: luz natural entrando, cortinas suaves

ILUMINACIÓN:
- Luz de ventana suave, sombras delicadas
- Colores neutros naturales, sin HDR exagerado

CÁMARA:
- 24mm, f/4, ISO 250
- Gran angular moderado, líneas rectas (sin distorsión)

COMPOSICIÓN:
- Simetría parcial, sensación de calma

RESTRICCIONES:
- Sin texto/watermarks
- Evitar objetos deformes o repetidos`,
    thumbnail: "/images/foto-pro/viaje13.webp",
  },
  {
    id: "img-viaje-014",
    title: "Desayuno en cama (travel cozy, luz suave, editorial realista)",
    area: "Fotografía Pro",
    category: "Interior / hotel / Airbnb",
    summary:
      "Desayuno en cama estilo travel cozy para redes, luz suave y comida realista.",
    prompt: `Genera una foto REALISTA editorial de desayuno en cama (travel cozy).

DATOS:
- Escena: bandeja con desayuno (café, fruta, pan), vajilla sin marcas
- Cama: sábanas blancas arrugadas natural, estética cozy
- Fondo: habitación elegante desenfocada, luz de ventana

ILUMINACIÓN:
- Luz suave natural, tonos cálidos neutros
- Textures reales en comida y tela

CÁMARA:
- 50mm, f/2.5, ISO 400
- Enfoque en bandeja, fondo bokeh

COMPOSICIÓN:
- Bandeja centrada, manos opcionales pero anatómica correcta

RESTRICCIONES:
- Sin texto/watermarks
- Evitar comida “plástica”`,
    thumbnail: "/images/foto-pro/viaje14.webp",
  },
  {
    id: "img-viaje-015",
    title: "Vistas desde balcón (taza en primer plano, ciudad/mar desenfocado)",
    area: "Fotografía Pro",
    category: "Interior / hotel / Airbnb",
    summary:
      "POV travel desde balcón con taza en primer plano y vista desenfocada al fondo.",
    prompt: `Genera una foto REALISTA tipo POV desde un balcón de hotel.

DATOS:
- Primer plano: mano sosteniendo una taza (sin logo), enfoque nítido
- Fondo: vista a ciudad o mar, desenfocado con bokeh suave
- Elementos: barandal del balcón, plantas opcionales, estética travel

ILUMINACIÓN:
- Luz de mañana o golden hour suave
- Colores naturales, sensación relajada

CÁMARA:
- 50mm, f/2.0, ISO 200
- Enfoque en la taza y mano, bokeh fuerte atrás

COMPOSICIÓN:
- Taza en tercio, vista como contexto épico

RESTRICCIONES CRÍTICAS:
- Mano anatómicamente correcta
- Sin texto/watermarks`,
    thumbnail: "/images/foto-pro/viaje15.webp",
  },

  // =========================
  // CATEGORY: Calle / lifestyle travel
  // =========================
  {
    id: "img-viaje-016",
    title: "Viajero con maleta en calle (look editorial, profundidad, realista)",
    area: "Fotografía Pro",
    category: "Calle / lifestyle travel",
    summary:
      "Lifestyle travel: persona con maleta caminando en ciudad, look editorial realista.",
    prompt: `Genera una foto REALISTA lifestyle de viaje con una persona y maleta.

DATOS:
- Persona: [persona], [edad], outfit travel casual premium (sin logos)
- Accesorios: maleta o mochila genérica (sin marcas)
- Escena: calle urbana bonita, fondo desenfocado
- Acción: caminando o mirando un mapa/teléfono (sin texto legible)

ILUMINACIÓN:
- Luz suave (mañana o tarde), sombras ligeras
- Colores naturales, estética editorial

CÁMARA:
- 35mm, f/2.2, ISO 250
- Enfoque en persona, fondo bokeh moderado

COMPOSICIÓN:
- Espacio hacia donde camina, líneas guía

RESTRICCIONES:
- Sin texto/watermarks
- Evitar logos en maletas/ropa`,
    thumbnail: "/images/foto-pro/viaje16.webp",
  },
  {
    id: "img-viaje-017",
    title: "POV pasaporte y boarding genérico (sin texto legible, travel aesthetic)",
    area: "Fotografía Pro",
    category: "Calle / lifestyle travel",
    summary:
      "Travel aesthetic: pasaporte y boleto/boarding genérico, sin texto legible, estilo editorial.",
    prompt: `Genera una foto REALISTA estilo travel aesthetic tipo POV.

DATOS:
- Primer plano: mano sosteniendo pasaporte genérico + boarding genérico (sin texto legible)
- Fondo: aeropuerto desenfocado o ventanal con aviones (sin marcas)
- Props: café o maleta desenfocados opcional

ILUMINACIÓN:
- Luz blanca suave tipo aeropuerto
- Colores reales, look limpio

CÁMARA:
- 50mm, f/2.0, ISO 500
- Enfoque en mano y documentos, fondo bokeh

COMPOSICIÓN:
- Documentos centrados, estética social media

RESTRICCIONES CRÍTICAS:
- Mano anatómicamente correcta
- Sin texto legible, sin logos/watermarks`,
    thumbnail: "/images/foto-pro/viaje17.webp",
  },
  {
    id: "img-viaje-018",
    title: "Sendero y mochila (espalda del viajero, naturaleza, realista)",
    area: "Fotografía Pro",
    category: "Calle / lifestyle travel",
    summary:
      "Viajero de espaldas en sendero natural con mochila, vibe aventura realista.",
    prompt: `Genera una foto REALISTA de viaje aventura en sendero.

DATOS:
- Persona: [persona], [edad], de espaldas, mochila genérica sin logo
- Escena: sendero en naturaleza (bosque/montaña), profundidad
- Acción: caminando, postura creíble

ILUMINACIÓN:
- Luz suave de mañana o tarde, sombras delicadas
- Colores naturales, atmósfera aventura

CÁMARA:
- 35mm, f/2.8, ISO 400
- Enfoque en persona, fondo con detalle moderado

COMPOSICIÓN:
- Persona en tercio inferior, sendero como línea guía

RESTRICCIONES:
- Sin texto/watermarks
- Evitar mochila con marca legible`,
    thumbnail: "/images/foto-pro/viaje18.webp",
  },
  {
    id: "img-viaje-019",
    title: "Mirador con persona (silhouette suave, paisaje épico, realista)",
    area: "Fotografía Pro",
    category: "Calle / lifestyle travel",
    summary:
      "Persona en mirador contemplando paisaje, silhouette suave y estética épica pero realista.",
    prompt: `Genera una foto REALISTA de viajero/a en mirador con paisaje.

DATOS:
- Persona: [persona], [edad], de espaldas o perfil, postura contemplativa
- Escena: mirador con paisaje amplio (montañas/mar/valle)
- Estilo: epic travel, realista, sin fantasía

ILUMINACIÓN:
- Amanecer o atardecer, contraluz suave (silhouette con detalle)
- Bruma ligera opcional

CÁMARA:
- 24–35mm, f/5.0, ISO 200
- Profundidad amplia, nitidez general

COMPOSICIÓN:
- Persona pequeña para escala, paisaje protagonista

RESTRICCIONES:
- Sin texto/watermarks
- Evitar cielo hiper saturado`,
    thumbnail: "/images/foto-pro/viaje19.webp",
  },
  {
    id: "img-viaje-020",
    title: "Mercado local (colores naturales, gente desenfocada, travel documental)",
    area: "Fotografía Pro",
    category: "Calle / lifestyle travel",
    summary:
      "Travel documental: mercado local con textura, colores reales y gente desenfocada.",
    prompt: `Genera una foto REALISTA estilo travel documental en un mercado local.

DATOS:
- Escena: puestos de frutas/especias/pan, colores vivos pero naturales
- Personas: varias personas, desenfocadas o de espaldas (sin rostros extraños)
- Detalles: texturas reales, luz ambiente del mercado

ILUMINACIÓN:
- Luz natural filtrada o luz interior suave
- Contraste medio, mantener detalle

CÁMARA:
- 35mm, f/2.2, ISO 800
- Enfoque en un puesto principal, fondo bokeh moderado

COMPOSICIÓN:
- Capas de profundidad, sensación de “estar ahí”

RESTRICCIONES:
- Sin texto/watermarks
- Evitar letreros o marcas legibles`,
    thumbnail: "/images/foto-pro/viaje20.webp",
  },
];
