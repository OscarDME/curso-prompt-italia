// src/lib/prompts/text/abogado-legal-contratos.js

export const textPromptsAbogadoLegalContratos = [
  {
    id: "legalcontratos-001",
    title: "Checklist maestro para redactar contrato (cualquier servicio/producto)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Crea un checklist completo de cláusulas, anexos y datos para redactar un contrato sólido.",
    prompt: `Actúa como abogado corporativo/contractual. Necesito un checklist maestro para redactar un contrato.

Inputs:
- Tipo de contrato (servicios, SaaS, consultoría, compraventa, licencia, etc.).
- Jurisdicción/país (si aplica).
- Partes (empresa/individuo) y roles.
- Alcance del servicio/entregable.
- Precio, forma de pago, impuestos.
- Duración, renovaciones, terminación.
- Riesgos principales del negocio (chargebacks, IP, datos, retrasos).
- Nivel de formalidad (simple / enterprise).

Genera:
1) Datos que debo recolectar antes de redactar (20+).
2) Índice recomendado del contrato (secciones).
3) Cláusulas esenciales (explica propósito + riesgos si se omiten).
4) Cláusulas opcionales según escenario (por bullets).
5) Anexos típicos (SOW, SLA, DPA, NDA, etc.) y cuándo usarlos.
6) Red flags/ambigüedades comunes y cómo evitarlas.
7) Lista de “decisiones de negocio” (qué negociar sí o sí).

Entrega en español, estilo práctico. No inventes leyes específicas; marca “depende de jurisdicción”.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-002",
    title: "Contrato de prestación de servicios (borrador completo)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Genera un borrador completo con cláusulas estándar listas para copiar y adaptar.",
    prompt: `Actúa como abogado. Redacta un BORRADOR de contrato de prestación de servicios.

Inputs:
- Partes (nombre legal, domicilio, RFC/ID si aplica).
- Servicio exacto y entregables.
- Fechas, hitos, revisiones.
- Honorarios (monto, moneda, impuestos) y forma de pago.
- Política de cambios (scope creep) y extras.
- Confidencialidad (sí/no).
- Propiedad intelectual (quién se queda qué).
- Responsabilidad/limitación (nivel deseado).
- Jurisdicción y ley aplicable (si se conoce).

Genera:
Documento con: definiciones, objeto, alcance, obligaciones, pagos, cambios, propiedad intelectual, confidencialidad, protección de datos (si aplica), garantías y disclaimers, limitación de responsabilidad, terminación, fuerza mayor, notificaciones, cesión, integridad, firmas.

Incluye campos [REEMPLAZAR] donde falten datos. Mantén tono legal profesional (sin inventar artículos de ley).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-003",
    title: "Auditoría de contrato: riesgos, sesgos y puntos a negociar",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Revisa un contrato pegado y detecta riesgos, cláusulas abusivas y mejoras concretas.",
    prompt: `Actúa como abogado. Voy a pegar un contrato y quiero una auditoría.

Inputs:
- Texto del contrato.
- Mi rol (proveedor/cliente).
- Qué me preocupa (pago, IP, datos, terminación, responsabilidad).
- Jurisdicción (si se sabe).

Genera:
1) Resumen ejecutivo en 5 bullets.
2) Riesgos críticos (top 10) con severidad alta/media/baja y por qué.
3) Cláusulas a renegociar con propuestas de redacción alternativa.
4) Ambigüedades y huecos (qué falta).
5) Preguntas clave para la contraparte.
No des asesoría legal definitiva; enfócate en mejores prácticas y riesgos.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-004",
    title: "Propiedad intelectual (IP): 6 variantes listas para copiar",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Genera 6 opciones de cláusula IP (cesión, licencias, híbrida, etc.).",
    prompt: `Actúa como abogado. Necesito cláusulas de Propiedad Intelectual listas para copiar.

Inputs:
- Tipo de trabajo (software, diseño, contenido, curso, consultoría).
- Quién paga (cliente) y quién crea (proveedor).
- Materiales preexistentes (sí/no).
- Si se permite reutilización (sí/no).
- Si hay sublicencias/terceros (sí/no).

Genera 6 variantes:
A) Cesión total al cliente.
B) Licencia exclusiva.
C) Licencia no exclusiva.
D) Híbrida (core del proveedor + entregable del cliente).
E) Plantillas del proveedor + personalización.
F) IP conjunta (co-owned) con reglas claras.

Para cada variante:
- Texto de cláusula.
- Pros/Contras para proveedor y cliente.
- Riesgos típicos y mitigación.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-005",
    title: "Cláusulas de pagos + mora + reembolsos (low-ticket / cursos)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Estructura términos de pago, no reembolso, chargebacks y disputas para productos digitales.",
    prompt: `Actúa como abogado enfocado en productos digitales. Redacta cláusulas de pago y reembolsos.

Inputs:
- Producto (curso, membresía, plantillas, SaaS).
- Precio y modalidad (único / suscripción / mensualidades).
- Política de reembolso (sí/no, plazo).
- Riesgo de chargebacks (alto/medio/bajo).
- Entrega (inmediata, por módulos, acceso temporal).

Genera:
1) Cláusula de precio/pago/impuestos (sin inventar tasas).
2) Mora/intereses (marca “según ley local”).
3) Política de reembolsos clara (incluye excepciones).
4) Procedimiento anti-chargeback (soporte antes de disputar).
5) Suspensión/terminación por falta de pago.
6) Versión corta en lenguaje simple para T&C.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-006",
    title: "Limitación de responsabilidad: 5 niveles (lite → enterprise)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Crea versiones de limitación de responsabilidad según riesgo y tamaño del deal.",
    prompt: `Actúa como abogado. Necesito cláusulas de limitación de responsabilidad.

Inputs:
- Rol (cliente/proveedor).
- Daño temido (datos, reputación, lucro cesante).
- Ticket (low/mid/high).
- Si hay seguro (sí/no).
- Si es B2C o B2B.

Genera 5 niveles:
1) Suave (exclusión de indirectos).
2) Moderada (cap por monto pagado en X meses).
3) Fuerte (cap bajo + exclusiones amplias).
4) Enterprise (cap + carve-outs: fraude, dolo, IP, datos).
5) B2C producto digital (lenguaje claro y razonable).

Incluye: texto + qué protege + riesgos + tips de negociación.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-007",
    title: "Terminación: causales, aviso, efectos y supervivencia",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Diseña una terminación equilibrada, con efectos, devolución de materiales y pagos pendientes.",
    prompt: `Actúa como abogado. Redacta una sección de terminación completa.

Inputs:
- Duración (fijo/indefinido).
- Aviso deseado (días).
- Entregables/hitos (sí/no).
- Confidencialidad/IP/datos (sí/no).
- Penalidad por cancelación (sí/no).

Genera:
1) Terminación por conveniencia (con aviso).
2) Terminación por incumplimiento (cure period).
3) Terminación inmediata (causales graves).
4) Efectos de terminación (pagos, entregables, accesos).
5) Cláusulas que sobreviven (confidencialidad, IP, limitación, etc.).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-008",
    title: "Contrato SaaS: estructura + cláusulas clave (SLA, seguridad, soporte)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Plantilla de estructura y textos clave para SaaS con enfoque en riesgos comunes.",
    prompt: `Actúa como abogado SaaS. Diseña el contrato SaaS.

Inputs:
- Producto SaaS y función.
- Planes y precios.
- Datos tratados (personales/sensibles/no).
- Uptime objetivo.
- Canales de soporte.
- Integraciones de terceros.

Genera:
1) Índice (Master Agreement + anexos).
2) Licencia/uso aceptable/cuentas.
3) Seguridad/backups/soporte.
4) SLA (métricas, créditos, exclusiones).
5) DPA (roles, subprocesadores, notificación de brecha).
6) Renovación/cancelación + exportación de datos.
No inventes cumplimiento legal; deja campos [REEMPLAZAR].`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-009",
    title: "NDA (unilateral o mutuo) + resumen para no abogados",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Redacta un NDA completo con definiciones, excepciones, duración y remedios.",
    prompt: `Actúa como abogado. Redacta un NDA.

Inputs:
- Tipo (unilateral/mutuo).
- Propósito de divulgación.
- Duración del NDA y de la obligación.
- Jurisdicción.
- Tipo de info (técnica, comercial, código, secretos).

Genera:
- NDA completo con: definiciones, exclusiones, obligaciones, cuidado razonable, no licencia, devolución/destrucción, duración, remedios, no solicitación (opcional), ley aplicable, firmas.
- Versión “resumen en 8 bullets” en lenguaje simple.
Incluye campos [REEMPLAZAR].`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-010",
    title: "No competencia / no solicitación (enfoque razonable y defendible)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Genera variantes razonables (especialmente no solicitación) minimizando riesgo de nulidad.",
    prompt: `Actúa como abogado. Necesito cláusulas de no competencia / no solicitación.

Inputs:
- Relación (empleo/contratista/proveedor).
- Industria/actividad.
- Territorio (si aplica).
- Plazo deseado.
- Intereses a proteger (clientes, empleados, secretos).

Genera:
1) Versión recomendada: NO SOLICITACIÓN de clientes y empleados.
2) Versión suave de no competencia (si procede) con límites razonables.
3) Riesgos de enforceability (sin citar leyes).
4) Alternativas: confidencialidad reforzada, no uso, no desvío.
5) Checklist para ajustar a jurisdicción.`,
    thumbnail: "",
  },

  // --- +10 NUEVOS (hasta 20) ---

  {
    id: "legalcontratos-011",
    title: "Master Service Agreement (MSA) + Statement of Work (SOW)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Estructura un MSA reusable y un SOW por proyecto para evitar scope creep y pleitos.",
    prompt: `Actúa como abogado para servicios B2B. Diseña un esquema MSA + SOW.

Inputs:
- Tipo de servicio.
- Frecuencia de proyectos (uno / recurrente).
- Riesgos (retrasos, dependencias del cliente, IP, subcontratistas).
- Modelo de pago (por hora / fijo / hitos).
- Jurisdicción (si se sabe).

Genera:
1) Qué va en el MSA (condiciones generales reutilizables).
2) Qué va en el SOW (alcance, entregables, fechas, aceptación).
3) Plantilla de SOW con campos [REEMPLAZAR].
4) Cláusula de cambios (change requests) y control de alcance.
5) Proceso de aceptación/rechazo de entregables.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-012",
    title: "Acuerdo de afiliados (comisiones, atribución, fraude, payouts)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Crea términos para afiliados con reglas claras para evitar abuso y disputas de comisión.",
    prompt: `Actúa como abogado. Redacta un acuerdo/terms para afiliados.

Inputs:
- Producto (curso, SaaS, físico).
- Comisión (% o monto), cookies/atribución.
- Periodo de pago (semanal/mensual), umbral mínimo.
- Política de reembolsos/chargebacks.
- Canales permitidos (ads, email, cupones, brand bidding).
- Prohibiciones (spam, claims engañosos, incentivos).

Genera:
1) Definiciones clave.
2) Reglas de atribución y elegibilidad de comisiones.
3) Fraude y conductas prohibidas (con ejemplos).
4) Payouts: calendario, retenciones, ajustes por reembolsos.
5) Terminación y efecto (pérdida de comisiones fraudulentas).
6) Plantilla lista para pegar en T&C.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-013",
    title: "Contrato de licencia de contenido (plantillas, prompts, assets)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Define una licencia de uso para contenido digital sin ceder IP: límites, sublicencias, redistribución.",
    prompt: `Actúa como abogado de propiedad intelectual. Redacta un contrato de licencia de contenido digital.

Inputs:
- Tipo de contenido (prompts, plantillas, PDFs, videos, imágenes).
- Uso permitido (personal, comercial, interno, reventa).
- Duración (perpetua/temporal).
- Territorio (global/local).
- Si permite sublicencia (sí/no).
- Prohibiciones (redistribución, scraping, compartición de cuenta).

Genera:
1) Licencia concedida (alcance exacto).
2) Restricciones y usos prohibidos.
3) Atribución (si aplica) y marcas.
4) Terminación por abuso + remedios.
5) Texto “en lenguaje simple” para mostrar en checkout.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-014",
    title: "Términos y condiciones (Terms of Service) para web/app",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Outline + borrador de TOS para plataforma de curso/SaaS con cuentas, límites y cancelaciones.",
    prompt: `Actúa como abogado. Crea Términos y Condiciones (TOS) para una web/app.

Inputs:
- Tipo (curso, membresía, SaaS).
- País/jurisdicción.
- Política de reembolso/cancelación.
- Conductas prohibidas (compartir cuenta, scraping, reventa).
- Contenido de usuario (si hay).
- Pagos (Stripe, PayPal) y chargebacks.
- Limitación de responsabilidad deseada.

Genera:
1) Índice y secciones.
2) Borrador completo con [REEMPLAZAR] cuando falten datos.
3) Sección “Uso aceptable” detallada.
4) Sección pagos/reembolsos/cancelación clara.
5) Versión corta (resumen) para la página de checkout.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-015",
    title: "Cláusula de indemnización (indemnity): 4 variantes",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Indemnización por IP, uso indebido, terceros, y límites razonables con procedimiento de defensa.",
    prompt: `Actúa como abogado. Genera cláusulas de indemnización con enfoque práctico.

Inputs:
- Rol (proveedor/cliente).
- Riesgo principal: IP, datos, claims de terceros, incumplimiento.
- Ticket (low/mid/high).
- Si hay seguros (sí/no).

Genera 4 variantes:
A) Indemnización solo por infracción de IP (proveedor indemniza).
B) Mutua por incumplimiento y claims de terceros.
C) Fuerte para cliente (amplia) + cómo acotarla.
D) Para B2C digital (razonable + simple).

Incluye:
- Texto de cláusula.
- Procedimiento: notificación, control de defensa, cooperación, settlement.
- Riesgos y tips de negociación.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-016",
    title: "Fuerza mayor + contingencias operativas (incluye IA/terceros)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Redacta fuerza mayor moderna (proveedores cloud, caídas, bloqueos de plataformas) y qué pasa con pagos/plazos.",
    prompt: `Actúa como abogado. Redacta una cláusula de fuerza mayor moderna.

Inputs:
- Tipo de servicio o producto.
- Dependencias (cloud, APIs, pasarelas, plataformas).
- Si hay plazos críticos.
- Qué pasa con pagos durante la contingencia.

Genera:
1) Definición de fuerza mayor con ejemplos modernos (sin exagerar).
2) Obligación de mitigación y notificación.
3) Efectos: suspensión de obligaciones, extensión de plazos.
4) Terminación si se prolonga (X días) con efectos.
5) Reglas de pagos/fees durante la suspensión.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-017",
    title: "Cláusula de aceptación de entregables (QA, revisiones, criterios)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Evita el “nunca está listo” con criterios de aceptación, ventanas de revisión y aceptación tácita.",
    prompt: `Actúa como abogado. Necesito una sección de aceptación de entregables.

Inputs:
- Tipo de entregable (diseño, dev, contenido, curso).
- Número de rondas de revisión.
- Tiempo de revisión (días).
- Qué cuenta como “defecto” vs “cambio de alcance”.

Genera:
1) Definiciones (entregable, defecto, cambio).
2) Proceso: entrega → revisión → feedback → corrección.
3) Aceptación tácita si no responden en X días.
4) Límite de revisiones + costo de extras.
5) Qué sucede si el cliente no coopera (dependencias).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-018",
    title: "Protección de datos (DPA) simplificado para proveedores",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Crea un anexo de tratamiento de datos sin inventar cumplimiento: roles, subprocesadores, brechas.",
    prompt: `Actúa como abogado. Redacta un DPA (Data Processing Addendum) simplificado.

Inputs:
- Tipo de datos (personales/sensibles/no).
- Roles (responsable/encargado o equivalente).
- Subprocesadores (sí/no, lista si existe).
- Medidas de seguridad generales.
- Plazo de retención y borrado.

Genera:
1) Objeto y alcance del tratamiento.
2) Roles y responsabilidades (sin citar leyes específicas).
3) Subprocesadores: autorización/notificación.
4) Seguridad: medidas organizativas/técnicas (a nivel general).
5) Brechas: notificación y cooperación.
6) Retención, devolución o borrado al terminar.
Incluye [REEMPLAZAR] donde falten datos y nota “depende de jurisdicción”.`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-019",
    title: "Compraventa de activo digital (dominio, sitio web, base de emails)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Estructura un contrato de compraventa y entrega (escrow, garantías, no competencia, activos incluidos).",
    prompt: `Actúa como abogado. Quiero un borrador para compraventa de un activo digital.

Inputs:
- Activo (dominio, web, app, cuentas sociales, contenido).
- Qué se incluye y qué NO (código, marca, diseños, datos).
- Precio y forma de pago (anticipo/escrow/hitos).
- Fecha de cierre y entrega.
- Garantías del vendedor (titularidad, no infracción, no deudas).
- Transferencias (DNS, repos, accesos, llaves, cuentas).
- Si hay base de datos de clientes y consentimiento (si aplica).

Genera:
1) Checklist pre-cierre.
2) Borrador de contrato con anexos de activos.
3) Procedimiento de transferencia paso a paso.
4) Garantías y limitaciones razonables.
5) No solicitación/no competencia (opcional y razonable).`,
    thumbnail: "",
  },

  {
    id: "legalcontratos-020",
    title: "Cláusula de resolución de disputas (escalamiento, mediación, arbitraje)",
    area: "Abogado & Legal",
    category: "Contratos",
    summary:
      "Crea un flujo de resolución de conflictos para reducir pleitos: escalamiento, plazos, jurisdicción/foro.",
    prompt: `Actúa como abogado. Diseña una sección de resolución de disputas.

Inputs:
- Relación B2B o B2C.
- País/jurisdicción (si se sabe).
- Preferencia: tribunales vs arbitraje.
- Urgencia (medidas cautelares, IP, confidencialidad).

Genera:
1) Escalamiento: negociación entre responsables (con plazos).
2) Mediación (opcional) y plazos.
3) Arbitraje o tribunales: redacción con [REEMPLAZAR] de foro/lengua/sede.
4) Excepciones para medidas urgentes (IP/confidencialidad).
5) Reglas de costos y honorarios (genéricas, sin inventar leyes).`,
    thumbnail: "",
  },
];
