// src/lib/prompts/text/abogado-legal-litigio-resolucion-conflictos.js

export const textPromptsAbogadoLegalLitigioResolucionConflictos = [
  {
    id: "legallitigio-001",
    title: "Análisis inicial de caso + estrategia (árbol de decisiones)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Diagnóstico completo del caso: hechos, riesgos, opciones y estrategia recomendada.",
    prompt: `Actúa como abogado litigante senior. Analiza el caso y diseña estrategia.

Inputs:
- Jurisdicción/país (sin citar leyes específicas).
- Tipo de conflicto (civil, mercantil, consumo, etc.).
- Hechos en bullet points (cronología).
- Partes involucradas y relación.
- Evidencia disponible (docs, chats, testigos).
- Objetivo del cliente (cobrar, defenderse, acuerdo, medidas urgentes).
- Presupuesto/urgencia.

Genera:
1) Resumen del caso (1 página).
2) Issues clave y puntos controvertidos.
3) Fortalezas/debilidades (tabla).
4) Árbol de decisiones: A) negociar, B) mediación, C) demanda, D) defensa.
5) Plan de próximos 14 días (acciones y documentos a reunir).
6) Mensaje para el cliente explicando riesgos en lenguaje simple.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-002",
    title: "Cronología blindada (timeline) + lagunas y preguntas clave",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Convierte hechos confusos en una cronología sólida y detecta huecos de información.",
    prompt: `Actúa como abogado. Construye una cronología cronológica del caso.

Inputs:
- Lista de hechos con fechas aproximadas.
- Documentos y mensajes disponibles.
- Eventos clave (pagos, entregas, incumplimientos).

Genera:
1) Timeline en tabla: fecha | evento | evidencia | impacto legal/estratégico (genérico).
2) 15 preguntas de seguimiento para cerrar lagunas.
3) “Hechos buenos” vs “hechos malos” para tu cliente (tabla).
4) Lista de evidencia faltante priorizada (alta/media/baja).
5) Red flags (inconsistencias) que un abogado rival atacaría.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-003",
    title: "Carta de reclamación pre-litigio (firme, profesional y negociadora)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Redacta una carta formal para reclamar pago/daños antes de demandar (sin incendiar).",
    prompt: `Actúa como abogado. Redacta una carta de reclamación pre-litigio.

Inputs:
- Deudor/parte contraria (nombre, empresa).
- Hechos (resumen).
- Monto reclamado o reparación exigida.
- Plazo para responder/pagar.
- Evidencia principal (facturas, contrato, chats).
- Tono deseado: suave / firme / muy firme.

Genera:
1) Carta completa en formato profesional.
2) 3 versiones del párrafo de cierre (suave/firme/muy firme).
3) Lista de anexos a adjuntar.
4) Guion de llamada de seguimiento (5-7 líneas).
No cites artículos; usa lenguaje general.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-004",
    title: "Respuesta a carta de reclamación (defensa + propuesta de salida)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Responde una reclamación sin admitir responsabilidad y abriendo puerta a acuerdo.",
    prompt: `Actúa como abogado defensor. Responde una carta de reclamación.

Inputs:
- Acusaciones principales.
- Tu versión de los hechos.
- Evidencia a favor.
- Qué estás dispuesto a ofrecer (si aplica).
- Líneas rojas (no admitir culpa, no pagar X, etc).

Genera:
1) Carta de respuesta completa.
2) Párrafos opcionales: (A) rechazo total, (B) rechazo parcial, (C) oferta sin admisión.
3) Lista de puntos que pedirás como prueba.
4) Texto “sin perjuicio / sin reconocimiento” (genérico).
5) Propuesta de acuerdo en 3 escenarios (bajo/medio/alto).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-005",
    title: "Teoría del caso (storyline) para juez/árbitro: 1 página",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Crea la narrativa central: qué pasó, por qué importa, qué pides y por qué.",
    prompt: `Actúa como abogado litigante. Construye una “teoría del caso” clara y persuasiva.

Inputs:
- Hechos clave (máximo 10 bullets).
- Objetivo (cobro/daños/defensa).
- Evidencia estrella (máximo 5 piezas).
- Punto débil (si existe).

Genera:
1) Teoría del caso (máximo 400-600 palabras).
2) 5 frases “sound bites” para audiencias.
3) Lista de 6 hechos que debes probar sí o sí.
4) Mapa: evidencia → hecho que prueba (tabla).
5) Cómo neutralizar el punto débil (3 tácticas).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-006",
    title: "Mapa de pruebas (documental / testimonial / pericial) + plan de obtención",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Organiza toda la evidencia y planifica cómo conseguir lo que falta.",
    prompt: `Actúa como abogado. Diseña un mapa de pruebas.

Inputs:
- Qué quieres probar (pretensiones o defensas).
- Evidencia que ya tienes.
- Evidencia que sospechas que tiene la otra parte.
- Testigos potenciales.

Genera:
1) Matriz: elemento a probar | tipo de prueba | fuente | prioridad | riesgo.
2) Plan para obtener evidencia faltante (pasos y orden).
3) Checklist de preservación de evidencia digital (chats, correos).
4) Lista de riesgos de “evidencia contaminada” y cómo evitarlos.
5) Guion para entrevista inicial de testigos (10 preguntas).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-007",
    title: "Cuantificación de daños (escenarios) + soporte documental",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Calcula daños/adeudos sin inventar: escenarios y documentos para justificar.",
    prompt: `Actúa como abogado y analista. Cuantifica daños/adeudos en escenarios.

Inputs:
- Monto base (si existe).
- Pagos realizados.
- Costos relacionados.
- Daño emergente vs lucro cesante (si aplica).
- Evidencia financiera disponible.

Genera:
1) 3 escenarios: conservador / probable / agresivo (tabla).
2) Qué documentos respaldan cada rubro (lista).
3) Qué rubros NO reclamarías por falta de soporte (y por qué).
4) Plan para conseguir soporte documental (pasos).
5) Resumen ejecutivo para explicar daños al cliente (lenguaje simple).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-008",
    title: "Borrador de demanda (esqueleto + secciones + placeholders)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Estructura una demanda genérica (sin citar artículos) lista para rellenar.",
    prompt: `Actúa como abogado. Redacta un borrador de demanda (plantilla).

Inputs:
- Jurisdicción/foro (genérico).
- Parte actora y demandada.
- Hechos (cronología).
- Pretensión (qué pides).
- Daños/monto.
- Evidencia principal.

Genera:
1) Documento con secciones estándar.
2) Hechos numerados, claros.
3) Pretensiones y peticiones finales.
4) Lista de anexos sugeridos.
5) Checklist de revisión antes de presentar.
Usa [REEMPLAZAR] donde falte info. No cites leyes específicas.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-009",
    title: "Contestación de demanda (estructura + defensas + tono correcto)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Plantilla de contestación para negar/aceptar hechos y plantear defensas.",
    prompt: `Actúa como abogado defensor. Redacta una contestación a demanda.

Inputs:
- Resumen de la demanda/pretensiones.
- Hechos alegados por la otra parte.
- Tu versión de hechos.
- Evidencia a favor.
- Objetivo (desestimar, limitar daños, negociar).

Genera:
1) Contestación completa con secciones estándar.
2) Tabla: hecho alegado | postura (admito/niego/parcial) | explicación breve | evidencia.
3) Lista de defensas genéricas aplicables (sin citar leyes).
4) Pretensiones del demandado (qué solicitas al tribunal).
5) Estrategia paralela de negociación (2 propuestas).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-010",
    title: "Excepciones/defensas preliminares (checklist + redacción base)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Identifica defensas iniciales frecuentes y redacta texto base para usarlas.",
    prompt: `Actúa como abogado. Construye defensas preliminares genéricas.

Inputs:
- Tipo de asunto.
- Foro/jurisdicción (genérico).
- Fechas y plazos relevantes.
- Documentos clave.

Genera:
1) Checklist de defensas preliminares aplicables (con explicación).
2) Redacción base corta para cada una (3-6 líneas).
3) Pruebas/documentos necesarios para sostenerlas.
4) Riesgos de alegarlas si no aplican (qué evitar).
5) Orden recomendado para presentarlas.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-011",
    title: "Guion de negociación (BATNA, concesiones, líneas rojas)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Sistema para negociar acuerdos sin regalar el caso.",
    prompt: `Actúa como abogado negociador. Diseña un guion de negociación.

Inputs:
- Objetivo final.
- Monto ideal / mínimo aceptable.
- Riesgos del caso.
- Relación futura con la otra parte (sí/no).
- Tiempo/urgencia.

Genera:
1) BATNA y WATNA (mejor/peor alternativa).
2) Lista de concesiones escalonadas (qué doy y qué pido).
3) Líneas rojas y señales de salida.
4) Script de 10 minutos para llamada (apertura → propuesta → cierre).
5) 5 frases para manejar objeciones comunes.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-012",
    title: "Acuerdo de conciliación/transacción (borrador) – no contratos comerciales, solo settlement",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Borrador de acuerdo para cerrar disputa: pagos, renuncias, confidencialidad, no admisión.",
    prompt: `Actúa como abogado. Redacta un acuerdo de conciliación/transacción (settlement).

Inputs:
- Partes.
- Disputa (resumen).
- Pagos/compensación.
- Fechas de cumplimiento.
- Si habrá confidencialidad (sí/no).
- Si habrá cláusula de no desprestigio (sí/no).
- Consecuencia por incumplimiento.

Genera:
1) Settlement completo con secciones estándar.
2) Cláusulas: no admisión, liberación/renuncia de acciones, confidencialidad (opcional), no desprestigio (opcional).
3) Anexo: calendario de pagos.
4) Texto corto para email de cierre “acuerdo alcanzado”.
Sin citar leyes; usa [REEMPLAZAR] donde falte info.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-013",
    title: "Preparación de audiencia: guion + orden de argumentos + objetivos",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Arma un guion para audiencia: apertura, puntos clave, respuestas y cierre.",
    prompt: `Actúa como abogado litigante. Diseña preparación para audiencia.

Inputs:
- Tipo de audiencia (medidas, preliminar, juicio, etc).
- 3 argumentos principales.
- Evidencia principal.
- Argumentos probables de la otra parte.

Genera:
1) Guion de 5-8 minutos (apertura → desarrollo → cierre).
2) Lista de preguntas que podría hacer el juez y respuestas sugeridas.
3) “Si me interrumpen, vuelvo a…” (frases puente).
4) Prioridad: qué decir sí o sí en 60 segundos.
5) Checklist pre-audiencia (documentos, copias, anexos).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-014",
    title: "Interrogatorio directo (testigo propio) – preguntas por bloques",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Estructura preguntas para testigo propio y evita preguntas peligrosas.",
    prompt: `Actúa como abogado. Diseña interrogatorio directo para testigo propio.

Inputs:
- Quién es el testigo (rol/relación).
- Hechos que debe acreditar (lista).
- Documentos que puede autenticar.
- Puntos sensibles (qué evitar).

Genera:
1) Bloques de preguntas: identificación, contexto, hechos, documentos, cierre.
2) 25-40 preguntas sugeridas (claras y secuenciales).
3) Preguntas prohibidas/arriesgadas y por qué.
4) Mini-guion de preparación del testigo (cómo responder).
5) 5 preguntas de “rescate” si se confunde.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-015",
    title: "Contrainterrogatorio (testigo contrario) – objetivos y preguntas ‘sí/no’",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Guía para debilitar credibilidad y fijar hechos admitidos.",
    prompt: `Actúa como abogado. Diseña contrainterrogatorio para testigo contrario.

Inputs:
- Perfil del testigo contrario.
- Contradicciones conocidas (chats/documentos).
- Hechos que quieres fijar.
- Punto emocional que puede explotar.

Genera:
1) Objetivos del contrainterrogatorio (máx 5).
2) 30 preguntas cerradas (sí/no) por bloques.
3) Ruta si niega: evidencia a mostrar (por orden).
4) Cómo evitar que explique demasiado (técnicas).
5) Cierre: 3 preguntas finales para dejar “la idea” en sala.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-016",
    title: "Mediación: brief de 1 página + propuesta de arreglo",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Documento compacto para mediación: hechos, puntos, propuesta y concesiones.",
    prompt: `Actúa como abogado. Redacta un brief para mediación.

Inputs:
- Disputa (resumen).
- Hechos clave.
- Riesgos de cada parte.
- Qué quieres obtener.
- Qué estarías dispuesto a conceder.

Genera:
1) Brief 1 página (hechos + posición).
2) Lista de 6 puntos negociables.
3) Propuesta inicial de arreglo (monto/acciones/plazos).
4) “Paquete alterno” por si rechazan la primera propuesta.
5) Script de apertura para mediación (2 min).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-017",
    title: "Gestión de evidencia digital (WhatsApp/Emails/GDrive): protocolo simple",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Checklist y protocolo para preservar evidencia digital sin arruinar su validez.",
    prompt: `Actúa como abogado. Crea un protocolo práctico de preservación de evidencia digital.

Inputs:
- Fuentes: WhatsApp, email, redes, drive, llamadas, etc.
- Tipo de evidencia (mensajes, archivos, logs, capturas).
- Quién tiene acceso.

Genera:
1) Checklist de preservación por fuente (pasos concretos).
2) Nombres sugeridos de carpetas y convención de archivos.
3) Qué NO hacer (errores típicos: editar, reenviar, recortar, etc.).
4) Plan de cadena de custodia básico (registro simple).
5) Lista de evidencia prioritaria “de alto impacto”.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-018",
    title: "Resumen del expediente (case brief) para entregar a otro abogado",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Paquete claro para ‘handoff’: hechos, documentos, estado, plazos y estrategia.",
    prompt: `Actúa como abogado. Resume el expediente para transferencia.

Inputs:
- Hechos y cronología.
- Documentos clave.
- Estado del caso (si hay proceso).
- Plazos próximos.
- Contactos/testigos.

Genera:
1) Resumen ejecutivo (máx 1 página).
2) Cronología (tabla).
3) Índice de documentos clave con descripción.
4) Lista de pendientes y plazos críticos.
5) Recomendación de estrategia (2 caminos).`,
    thumbnail: "",
  },

  {
    id: "legallitigio-019",
    title: "Riesgo reputacional y comunicación (qué decir / qué NO decir)",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Guías para comunicarte con clientes/usuarios/redes durante una disputa sin meterte el pie.",
    prompt: `Actúa como abogado y PR de crisis. Crea lineamientos de comunicación durante litigio.

Inputs:
- Contexto del conflicto.
- Audiencias (clientes, redes, proveedores, equipo).
- Qué se filtró o puede filtrarse.
- Tono de marca.

Genera:
1) “Talking points” permitidos (5-8).
2) Lista de frases prohibidas y por qué.
3) Respuestas tipo FAQ (8 preguntas).
4) Plantillas cortas: email a clientes + comunicado interno.
5) Plan de escalamiento: cuándo responde abogado vs soporte.`,
    thumbnail: "",
  },

  {
    id: "legallitigio-020",
    title: "Checklist de preparación antes de demandar (o antes de responder) + scoring",
    area: "Abogado & Legal",
    category: "Litigio & Resolución de Conflictos",
    summary:
      "Evalúa si conviene litigar: checklist con score para decidir con cabeza fría.",
    prompt: `Actúa como abogado. Crea un checklist con scoring para decisión de litigar.

Inputs:
- Objetivo del cliente.
- Evidencia disponible.
- Presupuesto.
- Urgencia.
- Riesgo comercial/reputacional.
- Disponibilidad de testigos.

Genera:
1) Checklist con 25 ítems y score (0-2 cada uno).
2) Interpretación del score (verdes/amarillos/rojos).
3) Lista de “deal breakers” (cuándo NO demandar).
4) Plan alternativo si no se litiga (negociación/mediación).
5) Lista de documentos mínimos antes de mover un dedo.`,
    thumbnail: "",
  },
];
