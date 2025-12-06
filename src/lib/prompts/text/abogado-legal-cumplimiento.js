// src/lib/prompts/text/abogado-legal-cumplimiento.js

export const textPromptsAbogadoLegalCumplimiento = [
  {
    id: "legalcumplimiento-001",
    title: "Programa de compliance desde cero (para pyme/startup)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Diseña un programa de cumplimiento práctico: políticas, riesgos, responsables y evidencias.",
    prompt: `Actúa como abogado de compliance. Diseña un programa de cumplimiento desde cero.

Inputs:
- Giro/industria.
- País/jurisdicción principal.
- Tamaño del equipo (número de empleados).
- Canales de venta (online, presencial, B2B/B2C).
- Riesgos percibidos (datos, publicidad, pagos, proveedores).
- Nivel de formalidad (básico/medio/alto).

Genera:
1) Mapa de riesgos (10+ riesgos) con probabilidad/impacto.
2) Políticas mínimas (lista) + objetivo de cada una.
3) Roles y responsables (quién aprueba, quién ejecuta).
4) Controles y evidencias (qué guardar para demostrar cumplimiento).
5) Calendario anual (auditorías internas, capacitaciones, revisiones).
6) Checklist “MVP compliance” (lo mínimo viable para operar).
No cites artículos de ley; marca “depende de jurisdicción”.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-002",
    title: "Matriz de riesgos legales (Legal Risk Register) lista para copiar",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Crea una matriz de riesgos legales con columnas, criterios y un ejemplo rellenado.",
    prompt: `Actúa como abogado de riesgos. Construye una matriz de riesgos legales (risk register).

Inputs:
- Negocio y modelo (cómo gana dinero).
- Países donde opera.
- Procesos clave (marketing, pagos, datos, soporte, proveedores).
- Activos críticos (marca, base de clientes, plataforma).

Genera:
1) Plantilla con columnas recomendadas (riesgo, causa, control, owner, KPI, evidencia, etc.).
2) Criterios para puntuar probabilidad e impacto (1-5).
3) 15 riesgos típicos para este tipo de negocio (con puntuación ejemplo).
4) Plan de mitigación por riesgo (acciones concretas).
5) Cómo revisar/actualizar mensual.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-003",
    title: "Políticas internas indispensables (manual rápido)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Define el set mínimo de políticas internas y cómo implementarlas sin burocracia.",
    prompt: `Actúa como abogado interno (in-house). Necesito un manual rápido de políticas internas.

Inputs:
- Tipo de empresa (servicios, e-commerce, SaaS, info producto).
- Tamaño del equipo.
- Si hay contractors/freelancers.
- Si se manejan datos personales.

Genera:
1) Lista de políticas indispensables (10-15) y qué cubre cada una.
2) Qué documento va “público” (TOS/Privacidad) vs “interno”.
3) Formato recomendado (1-2 páginas por política) para que se cumpla.
4) Flujo de aprobación y onboarding (cómo entrenar a nuevos).
5) Evidencias mínimas (qué guardar) para auditoría.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-004",
    title: "Checklist de cumplimiento para marketing y publicidad (promesas, claims, testimonios)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Evita reclamos por publicidad engañosa: checklist de claims, disclaimers y pruebas.",
    prompt: `Actúa como abogado en publicidad/consumo. Crea un checklist de cumplimiento para marketing.

Inputs:
- Tipo de oferta (curso, servicio, app, e-commerce).
- Claims típicos (resultados, tiempos, dinero, salud, “garantizado”).
- Canales (TikTok, Meta Ads, email, landing).
- Uso de testimonios/casos de éxito (sí/no).
- Política de reembolsos.

Genera:
1) Checklist de revisión de copy (20+ items).
2) Lista de “claims de alto riesgo” y cómo reescribirlos.
3) Disclaimers recomendados (en lenguaje simple).
4) Manejo correcto de testimonios (qué sí/qué no, evidencias).
5) Plantilla de aprobación interna para campañas.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-005",
    title: "Cumplimiento básico en atención al cliente (quejas, reembolsos, disputas)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Diseña SOPs para soporte que reduzcan chargebacks, quejas y escalamiento legal.",
    prompt: `Actúa como abogado + operations. Diseña SOPs de atención al cliente orientados a cumplimiento.

Inputs:
- Producto (curso, SaaS, físico).
- Frecuencia de quejas y tipo (acceso, calidad, entrega, cobros).
- Política de reembolsos (sí/no, plazos).
- Pasarelas de pago (Stripe/PayPal/otra).

Genera:
1) Árbol de decisiones de soporte (refund / cambio / escalamiento).
2) Mensajes plantilla (5) para casos típicos.
3) Proceso anti-chargeback (evidencias, tiempos, logs).
4) Registro de incidentes (qué guardar y por cuánto tiempo).
5) Métricas de cumplimiento (SLA soporte, tasa de disputa, etc.).
No inventes leyes; enfócate en mejores prácticas.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-006",
    title: "Política de privacidad MVP (outline + texto base)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Crea una política de privacidad mínima viable, con campos [REEMPLAZAR] para tu sitio/app.",
    prompt: `Actúa como abogado. Redacta una Política de Privacidad MVP.

Inputs:
- Tipo de negocio.
- Datos que se recaban (email, pago, IP, analytics, cookies).
- Proveedores (Stripe, Vercel, email marketing, analytics).
- País/jurisdicción principal.
- Si hay menores (sí/no).

Genera:
1) Outline de secciones.
2) Texto base completo con [REEMPLAZAR] donde falten datos.
3) Tabla simple: tipo de dato → finalidad → base/justificación (sin citar leyes).
4) Derechos del usuario (genérico) + cómo solicitar.
5) Cookies (texto simple) y link a preferencias si aplica.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-007",
    title: "Gestión de proveedores (third-party risk) + contrato marco",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Checklist para evaluar proveedores y cláusulas clave para reducir riesgos.",
    prompt: `Actúa como abogado de compras/compliance. Diseña un proceso de evaluación de proveedores.

Inputs:
- Tipo de proveedor (cloud, marketing, freelancers, agencias).
- Acceso a datos personales (sí/no).
- Acceso a sistemas críticos (sí/no).
- Nivel de criticidad (alto/medio/bajo).

Genera:
1) Checklist de due diligence (seguridad, legal, financiero).
2) Clasificación de riesgo y qué controles exige cada nivel.
3) Cláusulas mínimas del contrato (confidencialidad, IP, datos, SLA, terminación).
4) Evidencias/documentos a pedir.
5) Plantilla de “revisión anual” del proveedor.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-008",
    title: "Cumplimiento para cursos/membresías (acceso, licencias, anti-compartición)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Estructura reglas y textos para reducir piratería y abuso sin matar conversiones.",
    prompt: `Actúa como abogado para productos digitales (cursos/membresías).

Inputs:
- Modalidad (acceso de por vida, anual, mensual).
- Nº de usuarios por cuenta (1/2/equipo).
- Restricciones (no compartir, no reventa, no scraping).
- Medidas técnicas (watermark, limitación dispositivos, etc.).
- Política de reembolso.

Genera:
1) Cláusulas/Reglas anti-compartición (TOS) con lenguaje claro.
2) Política de uso aceptable (ejemplos).
3) Proceso de advertencia → suspensión → terminación (escalonado).
4) Mensajes para informar al usuario (3 plantillas).
5) Checklist de evidencias para disputas (logs, IP, accesos).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-009",
    title: "Capacitación interna: plan de 30 días (compliance esencial)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Plan de entrenamiento para que el equipo cumpla (sin burocracia): módulos + quizzes.",
    prompt: `Actúa como abogado compliance y diseñador instruccional. Crea un plan de capacitación de 30 días.

Inputs:
- Tipo de empresa.
- Áreas del equipo (marketing, soporte, dev, ventas).
- Riesgos principales (datos, claims, pagos, IP).
- Nivel inicial del equipo.

Genera:
1) Calendario 30 días (micro-lecciones diarias).
2) 8 módulos principales (título + objetivos).
3) 10 preguntas tipo quiz (con respuesta) para evaluar.
4) Material mínimo por módulo (1-pager).
5) Métricas: asistencia, evaluación, incidentes reducidos.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-010",
    title: "Manejo de incidentes legales: protocolo + escalamiento",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Crea un protocolo para incidentes: amenazas legales, reclamos, brechas, DMCA/IP, etc.",
    prompt: `Actúa como abogado interno. Diseña un protocolo de manejo de incidentes legales.

Inputs:
- Tipo de incidentes más probables (refunds, chargebacks, IP, datos).
- Canales de contacto (email, soporte, redes).
- Equipo disponible (quién decide).

Genera:
1) Clasificación de incidentes (niveles 1-3) con ejemplos.
2) SLA de respuesta sugerido por nivel.
3) Roles: quién responde, quién aprueba, quién documenta.
4) Checklist de documentación (qué guardar).
5) Plantillas de respuesta (amenaza legal, reclamación de IP, queja grave).
No inventes artículos de ley; enfócate en proceso y riesgos.`,
    thumbnail: "",
  },

  // +10 para llegar a 20

  {
    id: "legalcumplimiento-011",
    title: "Auditoría de cumplimiento mensual (checklist operativa)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Checklist mensual para revisar marketing, pagos, datos, soporte y contratos sin perder tiempo.",
    prompt: `Actúa como compliance officer. Crea una auditoría mensual con checklist.

Inputs:
- Tipo de negocio.
- Herramientas (pasarela pagos, CRM, analytics, email).
- Volumen de clientes.

Genera:
1) Checklist mensual por área (marketing, pagos, datos, soporte, proveedores).
2) Evidencia que se debe adjuntar por punto.
3) Indicadores que disparan acción correctiva.
4) Plantilla de reporte mensual (1 página).
5) Backlog de mejoras (cómo priorizar).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-012",
    title: "Corrección de copy para evitar riesgos (antes/después)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Tomas frases riesgosas y las reescribes en 3 niveles de seguridad sin matar conversiones.",
    prompt: `Actúa como abogado de publicidad + copywriter. Te daré claims de marketing y quiero reescrituras seguras.

Inputs:
- Frases originales (lista).
- Producto y nicho.
- Canal (ads/landing/email).
- Riesgo (salud, dinero, resultados garantizados).
- Tono de marca.

Genera para cada frase:
1) Diagnóstico del riesgo (por qué es riesgosa).
2) Reescritura nivel 1 (agresiva pero más segura).
3) Reescritura nivel 2 (balance).
4) Reescritura nivel 3 (muy conservadora).
5) Disclaimer recomendado y evidencia sugerida.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-013",
    title: "Política de retención y borrado de datos (simple y ejecutable)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Define cuánto guardar, dónde, quién accede, y cómo borrar sin romper operaciones.",
    prompt: `Actúa como abogado + data governance. Crea una política simple de retención y borrado.

Inputs:
- Tipos de datos (clientes, pagos, soporte, analytics).
- Herramientas donde viven (Stripe, email, DB, Notion, etc.).
- Necesidades operativas (soporte, contabilidad).
- Riesgo de fuga (alto/medio/bajo).

Genera:
1) Tabla: tipo de dato → finalidad → retención sugerida (con nota “depende de jurisdicción”).
2) Procedimiento de borrado y anonimización.
3) Control de accesos (roles).
4) Checklist trimestral de limpieza.
5) Evidencias internas (logs, tickets).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-014",
    title: "Consentimientos y comunicaciones (email/WhatsApp/SMS) - guía práctica",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Guía para capturar consentimientos y manejar opt-out correctamente en marketing.",
    prompt: `Actúa como abogado. Crea guía práctica para comunicaciones comerciales.

Inputs:
- Canales (email, WhatsApp, SMS).
- Tipo de audiencia (leads, clientes, ambos).
- País/jurisdicción.
- Herramienta de envíos.

Genera:
1) Qué consentimiento capturar y dónde (checkout, formulario, onboarding).
2) Textos sugeridos (3) para checkbox y aviso.
3) Proceso de opt-out/baja (pasos) y cómo registrarlo.
4) Frecuencia recomendada y buenas prácticas anti-spam.
5) Lista de errores comunes y cómo evitarlos.
No cites leyes; marca “depende de jurisdicción”.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-015",
    title: "Cumplimiento para landing de garantías (garantía, “sin riesgo”, devoluciones)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Estructura una sección de garantía que sea clara y reduzca disputas sin prometer imposibles.",
    prompt: `Actúa como abogado de consumo + CRO. Diseña sección de garantía para una landing.

Inputs:
- Tipo de producto.
- Plazo de garantía (días).
- Condiciones (p.ej., completar módulos, evidencia, etc.).
- Si es B2C/B2B.
- Riesgo de abuse (alto/medio/bajo).

Genera:
1) Copy de la sección garantía (claro y persuasivo).
2) Términos exactos (qué cubre y qué no).
3) Proceso para solicitar (pasos + tiempos).
4) Disclaimers para evitar interpretaciones.
5) FAQ de garantía (8 preguntas).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-016",
    title: "Cumplimiento de tienda / e-commerce (términos, envíos, devoluciones)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Checklist y textos base para políticas de envío, devoluciones y términos de compra.",
    prompt: `Actúa como abogado para e-commerce. Crea paquete de políticas y checklist.

Inputs:
- Tipo de producto (físico/digital).
- Países a los que vendes.
- Tiempos de entrega y paquetería.
- Política de devoluciones/cambios.
- Garantías, defectos, reclamaciones.

Genera:
1) Checklist de cumplimiento en checkout y post-compra.
2) Política de envíos (texto base).
3) Política de devoluciones y cambios (texto base).
4) Política de garantías/defectos.
5) Mensajes para emails transaccionales (3).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-017",
    title: "Cumplimiento para uso de IA (disclaimers + límites + responsabilidad)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Términos para productos que usan IA: errores, no asesoría, responsabilidades y uso aceptable.",
    prompt: `Actúa como abogado. Necesito cláusulas/avisos para un producto que usa IA.

Inputs:
- Producto (curso, herramienta, prompts, SaaS).
- Qué hace la IA (recomendaciones, generación, automatización).
- Riesgo de uso (salud, legal, financiero, bajo).
- Si el usuario puede subir datos sensibles (sí/no).

Genera:
1) Disclaimer “no asesoría profesional” (si aplica).
2) Advertencias sobre errores/limitaciones.
3) Responsabilidad del usuario (validar, uso bajo su riesgo).
4) Política de inputs (no subir datos sensibles) y moderación.
5) Texto corto para UI (tooltips y modales).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-018",
    title: "Cumplimiento en manejo de testimonios y ‘antes/después’",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "SOP para recolectar, verificar, publicar y actualizar testimonios sin meterte en broncas.",
    prompt: `Actúa como abogado de publicidad. Diseña SOP de testimonios/casos de éxito.

Inputs:
- Producto y nicho.
- Canales donde se publican.
- Si hay resultados financieros/salud.
- Cómo se recolectan (formulario, DM, entrevista).
- Si hay incentivos (descuento, regalo).

Genera:
1) Checklist de verificación (evidencia mínima).
2) Consentimiento/permiso de uso (texto).
3) Reglas de redacción (qué evitar).
4) Disclaimers recomendados.
5) Caducidad y revisiones: cuándo actualizar o retirar.`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-019",
    title: "Protocolo de cumplimiento para freelancers/contractors",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Proceso para contratar y controlar contractors: NDA, IP, accesos, entregas y salida.",
    prompt: `Actúa como abogado + operaciones. Diseña un protocolo para freelancers/contractors.

Inputs:
- Tipo de trabajo (dev, diseño, soporte, marketing).
- Acceso a datos/sistemas (sí/no).
- Duración del engagement.
- Entregables.

Genera:
1) Paquete documental mínimo (NDA, IP, contrato, SOW).
2) Gestión de accesos: principio de mínimo privilegio.
3) Checklist de onboarding (día 1).
4) Checklist de offboarding (revocar accesos, devolución, borrado).
5) Evidencia y archivo (qué guardar).`,
    thumbnail: "",
  },

  {
    id: "legalcumplimiento-020",
    title: "Evaluación de cumplimiento antes de escalar ads (pre-flight checklist)",
    area: "Abogado & Legal",
    category: "Cumplimiento",
    summary:
      "Checklist pre-flight para lanzarte a ads sin que te tumben o te reclamen: copy, claims, políticas, pages.",
    prompt: `Actúa como abogado + performance marketer. Crea un pre-flight checklist antes de escalar ads.

Inputs:
- Producto y promesa.
- Canal de ads.
- Landing/checkout stack.
- Políticas de reembolso/garantía.
- Uso de testimonios/antes-después.

Genera:
1) Checklist de landing (secciones, disclaimers, políticas visibles).
2) Checklist de creativos y copy (claims, comparativos, “garantizado”).
3) Checklist de soporte (SLA, procesos de reembolso, evidencias).
4) Checklist de datos (cookies/analytics/consentimientos).
5) Go/No-Go criteria (qué debe estar sí o sí).`,
    thumbnail: "",
  },
];
