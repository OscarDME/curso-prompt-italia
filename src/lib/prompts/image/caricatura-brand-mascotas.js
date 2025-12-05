// src/lib/prompts/image/caricatura-brand-mascotas.js

export const imagePromptsCaricaturaBrandMascotas = [
  {
    id: "img-toon-mascota-001",
    title: "Mascota 2D — saludo épico (sticker con energía)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota de marca saludando con exageración cartoon y líneas de acción suaves.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF, NO VIDEO, NO SECUENCIA.

ESTILO VISUAL:
- Caricatura 2D tipo animación (line art limpio, contorno consistente, colores planos).
- Cel shading suave (1 sombra + 1 brillo máximo).
- Look “sticker” con borde blanco opcional (si el fondo es transparente).

PERSONAJE (MASCOTA):
- Tipo: [perro/gato/conejo/axolote/mapache/dragón mini], estilo adorable.
- Proporciones: cabeza 60%, cuerpo 40%, ojos grandes con highlights simples.
- Detalles de marca: [pañuelo], [gorrita], [collar], [parche], en colores de la paleta.
- Paleta: 3–5 colores (principal, secundario, acento, sombras).

POSE / ACCIÓN:
- Pose de saludo exagerada: brazo/pata arriba + sonrisa grande.
- Añade “energía” con: 2–4 líneas de acción + 2 estrellitas + 1 pequeño “whoosh” (sin texto).

COMPOSICIÓN:
- Centrado, plano medio (de cintura a cabeza), espacio negativo alrededor.

FONDO:
- Transparente preferido o color sólido pastel (#HEX opcional).

RESTRICCIONES:
- Sin texto, sin logos, sin marcas, sin watermark.
- Anatomía cartoon coherente (sin dedos extra, sin deformaciones).`,
    thumbnail: "/images/caricatura/mascota1.png",
  },

  {
    id: "img-toon-mascota-002",
    title: "Mascota 3D cute — pose toy con brillo premium",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota tipo juguete 3D caricatura, iluminación suave y look coleccionable.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO VISUAL:
- Caricatura 3D cute (toy-like), materiales mate con micro brillo suave (no realista).
- Iluminación: 1 key suave + 1 fill sutil + rim light muy leve.
- Sombras blandas, nada fotográfico.

PERSONAJE:
- Mascota: [animal], adorable, formas redondeadas, ojos grandes.
- Detalle divertido: pequeño sticker/patch genérico (SIN texto) en el accesorio.
- Colores: paleta de marca (3–5 tonos).

POSE:
- Pose “idle” coleccionable: ligeramente inclinado y con una patita levantada (como saludando tímido).

ESCENA / PROPS:
- Base simple tipo “peana” circular minimal, color neutro.
- 2 iconitos flotantes SIN texto (corazón/estrella) como decoración.

FONDO:
- Transparente o degradado muy suave.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Evitar hiperrealismo total: no piel/pelo real, no poros, no fotografía.`,
    thumbnail: "/images/caricatura/mascota2.png",
  },

  {
    id: "img-toon-mascota-003",
    title: "Hoja de personaje pro — 4 vistas + accesorios (sin texto)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Character sheet en una sola imagen: 4 vistas y set de accesorios, sin palabras.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA tipo “character sheet” (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación, contornos limpios, colores planos con cel shading leve.

CONTENIDO (TODO EN LA MISMA IMAGEN):
1) Mascota en 4 vistas: frente, perfil, espalda, 3/4.
2) Mini set de accesorios al lado (sin texto): [pañuelo], [gorra], [mochilita], [lentes], dibujados aparte.
3) 3 expresiones mini (solo carita): feliz, sorprendido, travieso.

DISEÑO:
- Mantener EXACTAMENTE el mismo personaje en todas las vistas.
- Paleta consistente (3–5 colores) + sombras consistentes.

COMPOSICIÓN:
- Grid limpio con márgenes; todo ordenado y con espacio negativo.

FONDO:
- Blanco liso o transparente.

RESTRICCIONES:
- Sin texto, sin letras, sin números, sin logos, sin watermark.`,
    thumbnail: "/images/caricatura/mascota3.png",
  },

  {
    id: "img-toon-mascota-004",
    title: "Tabla de expresiones divertida — 9 emociones (1 imagen)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Expression sheet con emociones exageradas y súper claras, sin texto.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG) tipo “expression sheet”. NO GIF.

ESTILO:
- Caricatura 2D tipo animación (facial features exagerables).
- Ojos expresivos: cejas claras, bocas simples, mejillas.

CONTENIDO (EN LA MISMA IMAGEN):
- 9 expresiones de la MISMA mascota (cuadritos/viñetas SIN texto):
1) feliz 2) shock 3) duda 4) emoción 5) “uy…” vergüenza
6) orgullo 7) cansancio 8) travieso 9) “modo caos” (ojitos girando o estrellitas)

DETALLES:
- Puedes añadir pequeños símbolos gráficos SIN texto cerca de cada cara: gotita, chispas, nubecita, estrellitas, rayitos.

FONDO:
- Blanco o transparente.

RESTRICCIONES:
- Sin texto, sin logos, sin watermark.
- Misma paleta y estructura facial en todas.`,
    thumbnail: "/images/caricatura/mascota4.png",
  },

  {
    id: "img-toon-mascota-005",
    title: "Mascota con pancarta vacía — presentador de ofertas (overlay)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota estilo presentador señalando un cartel completamente vacío, ideal para colocar UI encima.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP) con FONDO TRANSPARENTE. NO GIF.

ESTILO:
- Caricatura 2D flat tipo animación, limpio y comercial.

ESCENA:
- Mascota [animal] con sonrisa y actitud de presentador.
- Sostiene una pancarta/rectángulo grande con esquinas redondeadas.

REQUISITO CRÍTICO:
- La pancarta debe estar 100% VACÍA: sin texto, sin iconos, sin símbolos, sin líneas, sin patrones.

POSE:
- Una mano/pata sujeta el cartel y la otra lo señala.
- Añade 2–3 estrellitas o chispas alrededor de la mascota (SIN texto).

COMPOSICIÓN:
- Dejar mucho espacio dentro del cartel para que luego yo ponga contenido.

RESTRICCIONES:
- Sin logos, sin marcas, sin watermark.`,
    thumbnail: "/images/caricatura/mascota5.png",
  },

  {
    id: "img-toon-mascota-006",
    title: "Celebración máxima — confetti + copa (sin texto)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota celebrando como campeón con confetti y un trofeo genérico.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación, cel shading suave.

ESCENA:
- Mascota saltando en pose congelada de celebración.
- Confetti alrededor (formas simples).
- Trofeo/copa genérica en una pata (sin marcas, sin texto).

EXPRESIÓN:
- Súper feliz: boca abierta, ojos brillantes, mejillas rosadas suaves.

FONDO:
- Transparente o color sólido suave.

RESTRICCIONES:
- Sin texto/logos/watermark.
- No sobrecargar: confetti NO tapa cara.`,
    thumbnail: "/images/caricatura/mascota6.png",
  },

  {
    id: "img-toon-mascota-007",
    title: "Idea brillante — bombilla + chispa mágica (sin texto)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota con cara de “¡ajá!” y bombilla genérica con chispas.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación, líneas limpias.

ESCENA:
- Mascota mirando hacia arriba con expresión de “¡ajá!”.
- Bombilla cartoon genérica sobre su cabeza con 3–5 chispitas (sin texto).

DETALLES:
- Añadir líneas de énfasis alrededor de la bombilla (tipo manga suave) SIN texto.
- Sombra ovalada simple bajo el personaje para anclarlo.

FONDO:
- Transparente preferido.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Bombilla sin marca, sin letras.`,
    thumbnail: "/images/caricatura/mascota7.png",
  },

  {
    id: "img-toon-mascota-008",
    title: "Like exagerado — dedos dobles + estrellitas",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota haciendo un ‘like’ súper exagerado, con brillo estilo sticker.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D flat, sticker.

POSE:
- Mascota con pulgar arriba (o gesto equivalente) y guiño.
- Añade 3–6 estrellitas/destellos simples alrededor para energía.

COMPOSICIÓN:
- Personaje centrado, espacio negativo en bordes.

FONDO:
- Transparente o pastel sólido.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Manos/patas correctas, sin dedos extra.`,
    thumbnail: "/images/caricatura/mascota8.png",
  },

  {
    id: "img-toon-mascota-009",
    title: "Burbuja de protección — mascota dentro (estilo power-up)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota dentro de una burbuja cartoon, vibe ‘escudo’ divertido.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación (o 3D cute NO realista).
- Burbuja estilo cartoon (no cristal realista): borde suave, reflejo simple.

ESCENA:
- Mascota dentro de una burbuja transparente.
- Expresión confiada/divertida (como power-up).

EFECTOS:
- 2–4 chispas alrededor de la burbuja.
- Sombra ovalada suave abajo.

FONDO:
- Transparente preferido.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Evitar reflejos fotográficos.`,
    thumbnail: "/images/caricatura/mascota9.png",
  },

  {
    id: "img-toon-mascota-010",
    title: "Carrera congelada — speed pose (sin animar)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota corriendo en pose congelada con líneas de velocidad cartoon.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación.

ESCENA:
- Mascota en pose de carrera congelada (una pierna adelante, otra atrás).
- Líneas de velocidad detrás + pequeño “whoosh” gráfico (sin texto).
- Orejas/cola con sensación de movimiento (solo por forma).

COMPOSICIÓN:
- Personaje en 3/4, ligeramente en tercio, con espacio hacia donde corre.

FONDO:
- Transparente.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Anatomía coherente (patas/pies correctos).`,
    thumbnail: "/images/caricatura/mascota10.png",
  },

  {
    id: "img-toon-mascota-011",
    title: "Mascota loader conceptual — girando aro (imagen estática)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Ilustración que sugiere ‘cargando’ con elementos gráficos, sin texto.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D minimal, estilo UI.

ESCENA:
- Mascota mirando un aro/puntos alrededor (iconos genéricos), como si estuviera “cargando”.
- Añade 6–8 puntitos alrededor formando un círculo (sin números, sin letras).

TRUCO VISUAL:
- Usa líneas de acción y pequeñas estelas para sugerir giro, en una sola imagen.

FONDO:
- Transparente.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Mantener todo simple y legible.`,
    thumbnail: "/images/caricatura/mascota11.png",
  },

  {
    id: "img-toon-mascota-012",
    title: "Secreto — gesto ‘shh’ con mirada cómplice",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota pidiendo silencio con vibe travieso, estilo animación 2D.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación.

POSE:
- Mascota con dedo/pata en la boca (shh), ojos mirando de lado (cómplice).
- Añade 1 nubecita de “susurro” o gotita cartoon (sin texto).

COMPOSICIÓN:
- Plano medio, centrado.

FONDO:
- Transparente preferido.

RESTRICCIONES:
- Sin texto/logos/watermark.`,
    thumbnail: "/images/caricatura/mascota12.png",
  },

  {
    id: "img-toon-mascota-013",
    title: "Amor total — abraza corazón gigante",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota abrazando un corazón grande, súper cute y brandable.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D flat con cel shading suave.

ESCENA:
- Mascota abrazando un corazón grande (icono genérico).
- Mejillas sonrojadas suaves + ojos brillantes.
- 2–4 mini corazones flotando alrededor (sin texto).

FONDO:
- Transparente o pastel sólido.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Corazones sin marcas, sin letras.`,
    thumbnail: "/images/caricatura/mascota13.png",
  },

  {
    id: "img-toon-mascota-014",
    title: "Modo turbo — patines cohete (cómico)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota con patines cohete cartoon, pose dinámica divertida.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación, humor.

ESCENA:
- Mascota usando patines cohete cartoon (genéricos, sin marca).
- Estela de fuego simplificada (formas suaves), líneas de velocidad detrás.
- Cara de “¡vamos!” divertida.

COMPOSICIÓN:
- Personaje diagonal (de abajo-izquierda hacia arriba-derecha) para energía.
- Sombra ovalada pequeña o ninguna (si está “volando”).

FONDO:
- Transparente.

RESTRICCIONES:
- Sin texto/logos/watermark.`,
    thumbnail: "/images/caricatura/mascota14.png",
  },

  {
    id: "img-toon-mascota-015",
    title: "Estrella premium — medalla de ‘top’ (sin texto)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota sosteniendo medalla/estrella genérica, vibe logro.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D limpia, estética premium.

ESCENA:
- Mascota sosteniendo una estrella o medalla genérica (sin letras).
- Brillos simples alrededor (destellos minimal).
- Expresión orgullosa y tierna.

FONDO:
- Transparente o degradado suave.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Medalla/estrella sin letras, sin símbolos de marca.`,
    thumbnail: "/images/caricatura/mascota15.png",
  },

  {
    id: "img-toon-mascota-016",
    title: "Mascota ‘POV: tutorial’ — señala espacio vacío (overlay)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota señalando un área vacía grande para que coloques UI o texto después.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP) con FONDO TRANSPARENTE. NO GIF.

ESTILO:
- Caricatura 2D tipo animación, líneas limpias.

COMPOSICIÓN:
- Mascota colocada en el borde izquierdo (o derecho) mirando hacia el centro.
- Deja un área vacía grande al centro/derecha para colocar contenido después.

POSE:
- Mascota señalando hacia el área vacía + guiño o sonrisa.

EXTRAS:
- 2 flechas gráficas genéricas (SIN texto) apuntando al área vacía (opcionales, simples).

RESTRICCIONES:
- Área vacía sin texto ni iconos.
- Sin logos/watermark.`,
    thumbnail: "/images/caricatura/mascota16.png",
  },

  {
    id: "img-toon-mascota-017",
    title: "Aplausos congelados — ‘clap’ con pose divertida",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota aplaudiendo (pose congelada) con chispitas de celebración.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación.

ESCENA:
- Mascota con manos/patas juntas como si estuviera aplaudiendo.
- Añade chispitas/destellos alrededor para reforzar el “clap”.

EXPRESIÓN:
- Feliz, orgullosa, ojos brillantes.

FONDO:
- Transparente preferido.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Manos/patas correctas, sin dedos extra.`,
    thumbnail: "/images/caricatura/mascota17.png",
  },

  {
    id: "img-toon-mascota-018",
    title: "Facepalm — ‘ay no’ caricatura (meme-ready)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota haciendo facepalm con gotita de vergüenza (sin texto).",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación.

ESCENA:
- Mascota con una mano/pata tapándose la cara (facepalm).
- Añade 1 gotita cartoon y 2 líneas de “drama” (sin texto).

EXPRESIÓN:
- Vergüenza divertida, no triste.

FONDO:
- Transparente o sólido suave.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Anatomía coherente (sin manos extra).`,
    thumbnail: "/images/caricatura/mascota18.png",
  },

  {
    id: "img-toon-mascota-019",
    title: "Regalo sorpresa — caja abierta con brillos (sin texto)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota entregando una caja de regalo abierta con luz cartoon.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación.

ESCENA:
- Mascota sosteniendo una caja de regalo genérica (sin marcas).
- Caja semi abierta con brillo/luz cartoon saliendo (formas simples).
- Confetti mínimo y destellos.

FONDO:
- Transparente preferido.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Caja sin letras, sin etiquetas, sin marca.`,
    thumbnail: "/images/caricatura/mascota19.png",
  },

  {
    id: "img-toon-mascota-020",
    title: "Chef mascota — cocina mini (súper cómico, brandable)",
    area: "PS de Caricatura",
    category: "Mascotas",
    summary: "Mascota vestida de chef con utensilios cartoon, escena divertida.",
    prompt: `Genera UNA SOLA IMAGEN ESTÁTICA (PNG/WebP/JPG). NO GIF.

ESTILO:
- Caricatura 2D tipo animación, humor, contorno limpio.

ESCENA:
- Mascota con gorro de chef y delantal (sin texto).
- Sostiene una espátula o cuchara cartoon.
- Frente a una ollita pequeña con vapor en forma de nubecita (sin letras).

DETALLES DIVERTIDOS:
- Expresión concentrada/seria pero cute.
- Añade 2–3 ingredientes cartoon flotando (tomate, zanahoria, estrella, etc.) sin marcas.

FONDO:
- Transparente o cocina minimal muy simple.

RESTRICCIONES:
- Sin texto/logos/watermark.
- Utensilios y props genéricos, sin marcas.`,
    thumbnail: "/images/caricatura/mascota20.png",
  },
];
