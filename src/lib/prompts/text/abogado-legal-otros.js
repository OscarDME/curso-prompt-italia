// src/lib/prompts/text/abogado-legal-otros.js

export const textPromptsAbogadoLegalOtros = [
  {
    id: "legalotros-001",
    title: "Checklist legal general para lanzar un negocio online (rápido y realista)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Revisión 360° de riesgos y básicos legales para vender online sin meter la pata.",
    prompt: `Actúa como abogado senior para negocios digitales.

Inputs:
- País/jurisdicción (genérico).
- Tipo de negocio (curso, SaaS, e-commerce, agencia, afiliados, etc).
- Canales de venta (web, IG, WhatsApp, marketplaces).
- Tipo de pagos (Stripe, PayPal, transferencias).
- Si hay datos personales (sí/no) y qué recopilas.

Genera:
1) Checklist legal priorizado (alto/medio/bajo) para poder vender ya.
2) Políticas mínimas recomendadas (términos, privacidad, reembolsos).
3) Riesgos típicos por modelo de negocio y cómo mitigarlos.
4) “Qué no prometer” en marketing para evitar problemas.
5) Plan de 7 días para quedar cubierto con lo esencial.`,
    thumbnail: "",
  },

  {
    id: "legalotros-002",
    title: "Redacción de términos y condiciones (plantilla genérica + placeholders)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Estructura completa para términos del sitio (sin citar leyes) lista para rellenar.",
    prompt: `Actúa como abogado. Crea una plantilla de Términos y Condiciones para un sitio web.

Inputs:
- Nombre del negocio.
- Qué vendes/ofreces.
- Si hay suscripción/membresía.
- Política de cancelación/reembolso.
- Contacto y soporte.

Genera:
1) Documento completo con secciones estándar.
2) Cláusulas clave: uso aceptable, pagos, reembolsos, limitación de responsabilidad (genérica), propiedad intelectual (genérica), terminación.
3) Secciones con [REEMPLAZAR] donde falte información.
4) Checklist final para revisar antes de publicarlo.`,
    thumbnail: "",
  },

  {
    id: "legalotros-003",
    title: "Política de reembolsos (clara y anti-disputas)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Política escrita para reducir chargebacks y reclamos, con lenguaje entendible.",
    prompt: `Actúa como abogado y especialista en prevención de disputas.

Inputs:
- Producto (digital/servicio).
- Ventana de reembolso (días o 'sin reembolso').
- Condiciones (consumo del contenido, descargas, asistencia a llamadas).
- Casos especiales (duplicado, fraude, error técnico).
- Canal de soporte.

Genera:
1) Política de reembolsos final para pegar en el sitio.
2) Sección de ejemplos “sí aplica / no aplica”.
3) Copy para checkout (2-3 líneas) que reduce disputas.
4) Procedimiento interno de soporte (paso a paso).
5) Respuesta tipo para emails de reembolso (3 tonos: amable/firme/muy firme).`,
    thumbnail: "",
  },

  {
    id: "legalotros-004",
    title: "Análisis de riesgo por afirmaciones publicitarias (claims) + versión segura",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Revisa promesas de marketing y las reescribe para que sean más defendibles.",
    prompt: `Actúa como abogado de publicidad/consumo.

Inputs:
- Lista de 10-20 frases/promesas de marketing.
- Producto y público.
- Evidencia que tienes para respaldar (testimonios, datos, casos).

Genera:
1) Tabla: claim original | riesgo (alto/medio/bajo) | por qué | versión más segura.
2) 10 disclaimers útiles (sin sonar asustado).
3) Reglas rápidas para tu equipo de marketing (do/don't).
4) Plantilla de “testimonio permitido” (qué incluir/qué evitar).`,
    thumbnail: "",
  },

  {
    id: "legalotros-005",
    title: "Respuesta a un chargeback/disputa de pago (pack de evidencia + narrativa)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Arma tu defensa para el procesador: evidencia, narrativa y checklist.",
    prompt: `Actúa como abogado y especialista en disputas de pago.

Inputs:
- Motivo del chargeback (no reconocido, servicio no recibido, etc).
- Fecha de compra y monto.
- Evidencia: logs de acceso, emails, IP, soporte, descargas.
- Política de reembolso publicada (sí/no).

Genera:
1) Narrativa corta (1-2 párrafos) para presentar al procesador.
2) Checklist de evidencia ideal por tipo de disputa.
3) Lista de anexos recomendados (capturas y cómo nombrarlas).
4) Respuesta tipo al cliente (para intentar resolver antes).
5) Cómo ajustar tu proceso para reducir próximos chargebacks.`,
    thumbnail: "",
  },

  {
    id: "legalotros-006",
    title: "Política de privacidad (borrador simple) + inventario de datos",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Plantilla + inventario: qué datos recolectas, para qué y cómo los manejas.",
    prompt: `Actúa como abogado de privacidad (sin citar leyes específicas).

Inputs:
- Qué datos recolectas (email, nombre, pagos, IP, etc).
- Herramientas (analytics, email marketing, pagos).
- Si hay menores (sí/no).
- Países donde vendes.

Genera:
1) Inventario de datos (tabla): dato | finalidad | base/razón | retención | tercero.
2) Política de privacidad en lenguaje claro (lista para pegar).
3) Sección de cookies/analytics (general).
4) Checklist de cumplimiento mínimo (accesos, borrado, contacto).`,
    thumbnail: "",
  },

  {
    id: "legalotros-007",
    title: "Aviso de cookies (microcopy + banner text)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Textos para banner de cookies y página de cookies, sin tecnicismos.",
    prompt: `Actúa como abogado y UX writer.

Inputs:
- Si usas analytics (sí/no).
- Si haces remarketing/ads (sí/no).
- Idioma (español neutral).

Genera:
1) Texto corto para banner (2 versiones: minimalista y detallada).
2) Texto para botón/acciones (aceptar, rechazar, configurar).
3) Copy para página de cookies (secciones + explicación simple).
4) FAQ de cookies (6 preguntas).`,
    thumbnail: "",
  },

  {
    id: "legalotros-008",
    title: "DMCA / reporte de infracción (plantillas para pedir baja de contenido)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Plantillas para reportar copias de tu contenido en redes o sitios.",
    prompt: `Actúa como abogado de propiedad intelectual (sin citar leyes).

Inputs:
- Enlace del contenido infractor.
- Enlace del contenido original.
- Prueba de autoría (capturas, fechas, archivos).
- Plataforma (YouTube, IG, TikTok, web, hosting).

Genera:
1) Email/solicitud formal de takedown (plantilla).
2) Mensaje corto para soporte de la plataforma.
3) Lista de pruebas que adjuntar.
4) Texto para enviar al infractor (amable/firme).
5) Checklist de seguimiento (24h, 72h, 7 días).`,
    thumbnail: "",
  },

  {
    id: "legalotros-009",
    title: "Revisión de un NDA/Acuerdo de confidencialidad (red flags + mejoras)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Checklist para detectar trampas comunes en un NDA antes de firmar.",
    prompt: `Actúa como abogado. Revisa un NDA desde el lado de quien firma.

Inputs:
- Pega el NDA completo o los puntos clave.
- Tu rol (receptor o divulgador).
- Qué información compartirás.
- Plazo conocido (sí/no).

Genera:
1) Red flags (lista) con explicación.
2) Qué cláusulas negociar sí o sí.
3) Versión sugerida de redacción para puntos críticos (genérica).
4) Riesgos si firmas tal cual.
5) Email de negociación (2 versiones: cordial y firme).`,
    thumbnail: "",
  },

  {
    id: "legalotros-010",
    title: "Manual interno: qué hacer si recibes una notificación legal (SOP)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Procedimiento para tu equipo: responder, documentar y escalar sin pánico.",
    prompt: `Actúa como abogado corporativo. Crea un SOP para manejo de notificaciones legales.

Inputs:
- Tipo de negocio.
- Canales de contacto (email soporte, legal, etc).
- Equipo (quién decide).
- Tipos de notificación comunes (copyright, consumidor, pago, difamación).

Genera:
1) SOP paso a paso (primeras 2 horas, 24h, 72h).
2) Plantillas de respuesta inicial (no admitir, pedir info).
3) Checklist de documentación y preservación de evidencia.
4) Matriz de severidad (baja/media/alta) y acciones.
5) “Errores que NO debemos cometer”.`,
    thumbnail: "",
  },

  {
    id: "legalotros-011",
    title: "Términos para comunidad (Discord/Telegram) + reglas anti-baneo",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Reglas claras para moderación, expulsiones y conducta dentro de comunidad.",
    prompt: `Actúa como abogado y community policy writer.

Inputs:
- Plataforma (Discord/Telegram).
- Temas sensibles (sí/no).
- Si hay menores (sí/no).
- Estilo (estricto/relajado).

Genera:
1) Reglas de comunidad (10-15 reglas).
2) Política de moderación (advertencias, suspensión, expulsión).
3) Cláusula de responsabilidad y contenido de terceros (general).
4) Plantillas de mensajes de moderación (amable/firme).
5) Lista de prácticas para evitar conflictos. `,
    thumbnail: "",
  },

  {
    id: "legalotros-012",
    title: "Cláusulas para testimonios y casos de éxito (consentimiento + uso)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Texto para pedir permiso y usar testimonios de forma segura.",
    prompt: `Actúa como abogado. Redacta texto de consentimiento para testimonios.

Inputs:
- Formato del testimonio (video, texto, captura).
- Dónde se usará (web, ads, redes).
- Si se mostrará nombre/foto (sí/no).
- Si se incluirá resultados numéricos (sí/no).

Genera:
1) Formulario/consentimiento completo.
2) Versión corta para DM/WhatsApp.
3) Sección para uso de imagen/nombre (opcional).
4) Reglas para editar testimonios sin manipular.
5) Disclaimer sugerido cuando haya resultados variables.`,
    thumbnail: "",
  },

  {
    id: "legalotros-013",
    title: "Política anti-fraude y abuso (reventas, compartición de cuentas, scraping)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Reglas para limitar abuso sin afectar a clientes normales.",
    prompt: `Actúa como abogado. Diseña política anti-fraude y abuso para producto digital.

Inputs:
- Producto (curso, biblioteca, membresía).
- Tipo de abuso observado (cuentas compartidas, scraping, reventa).
- Medidas técnicas disponibles (rate limits, logs, bloqueo IP).

Genera:
1) Política para pegar en el sitio (clara, no agresiva).
2) Tabla: abuso | señal | acción (advertir/bloquear/reembolso/ban).
3) Texto de aviso por email (1er aviso / 2do / suspensión).
4) Recomendaciones técnicas mínimas para respaldar la política.
5) Preguntas frecuentes para clientes honestos.`,
    thumbnail: "",
  },

  {
    id: "legalotros-014",
    title: "Revisión legal de landing page (estructura + riesgos + mejoras)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Audita una landing desde el lado de riesgo: claims, garantías, reembolsos, pruebas.",
    prompt: `Actúa como abogado de consumo/publicidad. Revisa una landing.

Inputs:
- Pega el texto de la landing.
- Precio y oferta.
- Garantía (si existe).
- Testimonios (si existen).
- Público objetivo.

Genera:
1) Lista de riesgos por sección (hero, bullets, testimonios, garantía, FAQ).
2) Cambios recomendados (copy alternativo).
3) Dónde agregar disclaimers sin matar conversión.
4) Checklist de elementos obligatorios (contacto, reembolso, términos).
5) Versión “más segura” del hero + bullets principales.`,
    thumbnail: "",
  },

  {
    id: "legalotros-015",
    title: "Política de afiliados (reglas de promoción + prohibiciones)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Reglas para afiliados para evitar publicidad engañosa o spam.",
    prompt: `Actúa como abogado. Crea política para programa de afiliados.

Inputs:
- Comisión.
- Canales permitidos (Meta Ads, Google, email, orgánico).
- Marca registrada (si aplica).
- Prohibiciones deseadas (spam, incentivos falsos, claims).

Genera:
1) Política completa de afiliados.
2) Lista de claims prohibidos y ejemplos.
3) Reglas de uso de marca y anuncios.
4) Consecuencias por incumplimiento (escalonadas).
5) Plantilla de email de advertencia + terminación.`,
    thumbnail: "",
  },

  {
    id: "legalotros-016",
    title: "Due diligence light para comprar un negocio (micro-checklist)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Checklist rápido para revisar riesgos antes de comprar una empresa/activo digital.",
    prompt: `Actúa como abogado y auditor de riesgos. Haz un checklist de due diligence ligero.

Inputs:
- Tipo de negocio (SaaS, ecom, contenido).
- Activos clave (dominio, listas, IP, contratos).
- Ingresos y proveedores.
- País de operación.

Genera:
1) Checklist por áreas: financiero, legal, IP, privacidad, operación.
2) “Preguntas killer” (15) que revelan problemas.
3) Red flags típicas y qué evidencia pedir.
4) Estructura de documentos a solicitar.
5) Plan de 10 días para revisión rápida.`,
    thumbnail: "",
  },

  {
    id: "legalotros-017",
    title: "Guía de cumplimiento para sorteos/concursos en redes (sin citar leyes)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Estructura segura para hacer giveaway/contest sin meterte en problemas.",
    prompt: `Actúa como abogado. Crea guía para sorteo/contest en redes.

Inputs:
- Plataforma (IG/TikTok/FB).
- Países participantes.
- Premio.
- Duración.
- Mecánica (seguir, comentar, etc).

Genera:
1) Reglas del sorteo (plantilla) con [REEMPLAZAR].
2) Checklist de riesgos (edad, países, impuestos, falsos ganadores).
3) Copy para post y story (incluyendo disclaimer breve).
4) Proceso interno para elegir ganador y documentarlo.
5) Mensajes al ganador y a no-ganadores.`,
    thumbnail: "",
  },

  {
    id: "legalotros-018",
    title: "Cláusulas para uso de contenido generado por usuarios (UGC) y permisos",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Cómo pedir permiso y dejar claro uso de UGC (reviews, fotos, videos).",
    prompt: `Actúa como abogado. Crea texto para permisos de UGC.

Inputs:
- Qué tipos de UGC (foto, video, review).
- Dónde se usará (ads, web, email).
- Si se pagará (sí/no).

Genera:
1) Texto de consentimiento UGC (largo).
2) Versión corta para DM/WhatsApp.
3) Cláusula de revocación (opcional) y cómo manejarla.
4) Checklist para guardar evidencia del consentimiento.
5) Disclaimers recomendados cuando haya resultados variables.`,
    thumbnail: "",
  },

  {
    id: "legalotros-019",
    title: "Plantilla de “respuesta legal” a reseña negativa (sin difamar, sin escalar)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Responde críticas sin admitir responsabilidad y sin quemarte públicamente.",
    prompt: `Actúa como abogado + atención al cliente. Redacta respuestas a reseñas negativas.

Inputs:
- Texto de la reseña.
- Contexto (qué pasó realmente).
- Política de reembolso (sí/no).
- Tono (neutral/amable/firme).

Genera:
1) Respuesta pública (corta, profesional).
2) Mensaje privado para resolver (más detallado).
3) Lista de cosas que NO debes decir.
4) Protocolo interno para investigar el caso.
5) 3 variaciones según el tipo de reseña (fraude, malentendido, real).`,
    thumbnail: "",
  },

  {
    id: "legalotros-020",
    title: "Checklist para proteger tu marca (nombre, logo, dominios, uso indebido)",
    area: "Abogado & Legal",
    category: "Otros",
    summary:
      "Acciones prácticas para proteger marca y evitar suplantaciones.",
    prompt: `Actúa como abogado de IP. Diseña un plan de protección de marca (genérico).

Inputs:
- Nombre de marca.
- Países objetivo.
- Canales donde existe (IG, TikTok, web).
- Si ya hay imitadores (sí/no).

Genera:
1) Checklist de protección (dominios, handles, documentación).
2) Rutina mensual de monitoreo (qué buscar).
3) Plantillas: aviso a imitador + reporte a plataforma.
4) Reglas de uso de marca para colaboradores/afiliados.
5) Plan de acción si te suplantan (paso a paso).`,
    thumbnail: "",
  },
];
