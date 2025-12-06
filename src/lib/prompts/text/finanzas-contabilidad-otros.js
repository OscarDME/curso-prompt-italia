// src/lib/prompts/text/finanzas-contabilidad-otros.js

export const textPromptsFinanzasContabilidadOtros = [
  {
    id: "finoth-001",
    title: "Diagnóstico financiero 360° (negocio pequeño) en 30 minutos",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Revisión rápida para saber qué arreglar primero: caja, márgenes, gastos y deudas.",
    prompt: `Actúa como CFO para negocio pequeño.

Inputs:
- Ingresos mensuales promedio (últimos 3 meses).
- Gastos fijos y variables.
- Deudas (monto, tasa, pago mensual).
- Saldo de efectivo actual.
- Objetivo (estabilidad/crecer/ahorrar).

Genera:
1) Diagnóstico en 4 bloques: liquidez, rentabilidad, apalancamiento, eficiencia.
2) 10 preguntas clave para detectar fugas.
3) Lista de “acciones de alto impacto” para 7 días.
4) Plan de 30 días con prioridades.
5) Métricas a monitorear semanalmente.`,
    thumbnail: "",
  },

  {
    id: "finoth-002",
    title: "Control de suscripciones y cargos hormiga (detección + limpieza)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Encuentra y elimina gastos invisibles, y crea un sistema para que no regresen.",
    prompt: `Actúa como analista de gastos.

Inputs:
- Bancos/tarjetas que uso.
- Suscripciones conocidas (lista).
- Frecuencia de compras online.
- Si comparto cuentas con alguien (sí/no).

Genera:
1) Método paso a paso para auditar cargos de 90 días.
2) Tabla de clasificación: esencial / útil / prescindible.
3) Script para cancelar (email/mensaje) y checklist de confirmación.
4) Regla mensual de mantenimiento (10 min).
5) Estimación de ahorro potencial con rangos (bajo/medio/alto).`,
    thumbnail: "",
  },

  {
    id: "finoth-003",
    title: "Política de precios: cómo subir precios sin matar conversiones",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Define estructura, anclajes y escalones para aumentar margen de forma segura.",
    prompt: `Actúa como estratega de pricing con enfoque financiero.

Inputs:
- Producto/servicio.
- Precio actual.
- Costos (tiempo, herramientas, insumos).
- Competencia (barata/igual/cara).
- Objetivo (más margen / más volumen / premium).

Genera:
1) 3 estrategias de aumento (directo, escalonado, por bundles).
2) Tabla de escenarios: precio vs volumen vs utilidad (con ejemplos).
3) Cómo crear anclajes (plan básico/pro/premium).
4) Mensajes para comunicar el cambio (sin justificar de más).
5) Checklist de señales para revertir o ajustar.`,
    thumbnail: "",
  },

  {
    id: "finoth-004",
    title: "Proyección de caja simple (cashflow) para 12 semanas",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Modelo semanal para evitar quedarte sin dinero aunque vendas bien.",
    prompt: `Actúa como controller de flujo de caja.

Inputs:
- Saldo inicial.
- Ingresos esperados por semana (o promedio).
- Gastos fijos (fechas y montos).
- Gastos variables estimados.
- Eventos: lanzamientos/temporadas/pagos grandes.

Genera:
1) Plantilla de cashflow 12 semanas (columnas y fórmulas en texto).
2) Cómo estimar ingresos conservador vs realista.
3) Regla de “piso mínimo de caja” y qué hacer si lo cruzo.
4) Plan de contingencia (acciones en 48h).
5) Ritual semanal de 15 min para actualizarlo.`,
    thumbnail: "",
  },

  {
    id: "finoth-005",
    title: "Plan anti-estrés: ordena finanzas personales + negocio (mixto)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Sistema híbrido cuando todo está mezclado y necesitas control rápido.",
    prompt: `Actúa como organizador financiero.

Inputs:
- Ingreso personal y del negocio (si aplica).
- Deudas personales y del negocio.
- Ahorros actuales.
- Tipo de caos (mezcla total / algo ordenado).
- Herramientas (banco, Excel, apps).

Genera:
1) Plan de 14 días para separar y ordenar (paso a paso).
2) Reglas de pagos: quién paga qué (personal vs negocio).
3) Sistema de sobres/cubetas (5 buckets) con porcentajes.
4) Checklist semanal de mantenimiento.
5) Indicadores de progreso (claros y medibles).`,
    thumbnail: "",
  },

  {
    id: "finoth-006",
    title: "Estrategia de reducción de deuda (bola de nieve vs avalancha)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Elige el método correcto y arma un plan realista de pagos.",
    prompt: `Actúa como asesor financiero (educativo).

Inputs:
- Lista de deudas: saldo, tasa, pago mínimo.
- Ingreso mensual disponible para deuda.
- Nivel de riesgo/estrés (bajo/medio/alto).
- Si espero ingresos extra (sí/no).

Genera:
1) Comparativa bola de nieve vs avalancha y cuál elegir según mi caso.
2) Tabla de pagos sugeridos por deuda (orden recomendado).
3) Fecha estimada de liquidación por escenario (con rangos).
4) 5 tácticas para liberar flujo (sin aumentar deuda).
5) Script para negociar/solicitar mejoras (tono profesional).`,
    thumbnail: "",
  },

  {
    id: "finoth-007",
    title: "Guía para definir salario del dueño (owner’s pay) sin ahogar el negocio",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Determina cuánto pagarte de forma estable aunque tus ventas sean variables.",
    prompt: `Actúa como CFO para solopreneur.

Inputs:
- Ingresos últimos 3 meses.
- Gastos fijos del negocio.
- Reservas actuales.
- Objetivo personal mensual.
- Variabilidad del ingreso.

Genera:
1) Método para calcular “salario base” + “bono variable”.
2) Umbrales de seguridad (cuándo NO subirte el pago).
3) Ejemplo numérico con 3 escenarios.
4) Regla de reparto: reinversión vs dueño vs reserva.
5) Checklist mensual de ajuste.`,
    thumbnail: "",
  },

  {
    id: "finoth-008",
    title: "Unit economics: costo de servir y margen real por producto",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Calcula margen real considerando comisiones, reembolsos, soporte y tiempo.",
    prompt: `Actúa como analista financiero.

Inputs:
- Precio de venta.
- Costos directos (insumos, herramientas, horas).
- Comisiones (pasarela, marketplace).
- Reembolsos (%).
- Soporte promedio por cliente.

Genera:
1) Fórmula de margen real (en texto) y cómo calcularla.
2) Tabla de costos “ocultos” típicos.
3) 3 palancas para mejorar margen sin subir precio.
4) Señales para pausar un producto no rentable.
5) Reporte corto de unit economics (plantilla).`,
    thumbnail: "",
  },

  {
    id: "finoth-009",
    title: "Presupuesto base cero (ZBB) para negocio digital",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Rediseña tu presupuesto desde cero y asigna cada peso/dólar con intención.",
    prompt: `Actúa como planner financiero.

Inputs:
- Ingreso mensual esperado.
- Lista de gastos actuales.
- Prioridades: crecimiento/estabilidad/profit.
- Canales de adquisición.
- Tools imprescindibles.

Genera:
1) Proceso ZBB explicado simple.
2) Categorías sugeridas y límites iniciales.
3) Regla para “gastos que se pagan solos” vs “placeres”.
4) Revisión quincenal: cómo ajustar sin romper el plan.
5) Plantilla lista para copiar en Sheets.`,
    thumbnail: "",
  },

  {
    id: "finoth-010",
    title: "Modelo de comisiones para equipo de ventas/afiliados (sin pérdidas)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Diseña comisiones que incentiven sin destruir tu margen.",
    prompt: `Actúa como CFO y diseñador de incentivos.

Inputs:
- Producto y precio.
- Margen bruto estimado.
- Reembolsos promedio.
- Tipo de vendedor (afiliado/closer/partner).
- Objetivo (volumen / calidad / LTV).

Genera:
1) 3 esquemas de comisiones (flat, escalonado, por calidad).
2) Reglas anti-fraude y anti-chargeback.
3) Ejemplos numéricos con margen final.
4) Contrato/condiciones operativas (puntos clave, no legal).
5) KPI para monitorear que el plan funciona.`,
    thumbnail: "",
  },

  {
    id: "finoth-011",
    title: "Plan de compras grandes (capex) sin descapitalizarte",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Decide cuándo comprar equipo/herramientas grandes y cómo financiarlo sanamente.",
    prompt: `Actúa como controller.

Inputs:
- Compra deseada (monto).
- Beneficio esperado (ahorro/ingreso).
- Caja actual.
- Deudas existentes.
- Urgencia (baja/media/alta).

Genera:
1) Marco de decisión: comprar vs esperar vs rentar vs financiar.
2) Regla de “máximo % de caja” para la compra.
3) Plan de ahorro para comprar (semanal/mensual).
4) Evaluación de ROI simple (con ejemplo).
5) Checklist antes de ejecutar.`,
    thumbnail: "",
  },

  {
    id: "finoth-012",
    title: "Sistema de metas financieras (OKRs) para negocio pequeño",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Convierte objetivos en números: ingresos, margen, caja, CAC y retención.",
    prompt: `Actúa como CFO.

Inputs:
- Meta anual (ingresos o utilidad).
- Canales de venta.
- Producto(s).
- Métricas actuales (si tengo).
- Equipo (solo yo / equipo).

Genera:
1) 3–5 objetivos financieros (O) y 3–4 KR por objetivo.
2) Ritmo de seguimiento semanal/mensual.
3) Tablero con métricas y umbrales (verde/amarillo/rojo).
4) Acciones si un KR va en rojo.
5) Ejemplo completo con números ficticios.`,
    thumbnail: "",
  },

  {
    id: "finoth-013",
    title: "Reporte para inversionista/partner (simple y convincente)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Estructura de informe mensual para socios sin abrumar con contabilidad.",
    prompt: `Actúa como analista de reporting.

Inputs:
- Ingresos del mes.
- Gastos principales.
- Eventos: lanzamientos, campañas, cambios.
- Métricas (clientes, churn, tickets, etc).
- Próximos pasos.

Genera:
1) Formato de reporte de 1–2 páginas.
2) KPIs clave según modelo (servicios, SaaS, infoproducto).
3) “Narrativa” del mes: qué pasó y por qué.
4) Riesgos y mitigaciones (top 5).
5) Plan del siguiente mes (prioridades).`,
    thumbnail: "",
  },

  {
    id: "finoth-014",
    title: "Precio mínimo rentable: cálculo y reglas para no aceptar malos clientes",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Define tu piso de precio según costos, tiempo y margen objetivo.",
    prompt: `Actúa como analista de rentabilidad.

Inputs:
- Costo por hora estimado (o salario deseado).
- Horas por proyecto/servicio.
- Costos fijos mensuales.
- Capacidad mensual (proyectos).
- Margen objetivo.

Genera:
1) Fórmula para precio mínimo rentable.
2) Ejemplo con 3 escenarios (bajo, medio, premium).
3) Política de descuentos (cuándo sí/cuándo no).
4) Reglas para scope creep (financieras).
5) Checklist antes de cotizar.`,
    thumbnail: "",
  },

  {
    id: "finoth-015",
    title: "Sistema de anexos y anexos: control de costos por proyecto (job costing)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Registra horas y costos por proyecto para saber cuáles te dejan dinero.",
    prompt: `Actúa como controller de proyectos.

Inputs:
- Tipo de proyectos.
- Duración promedio.
- Costos directos (herramientas, freelancers).
- Si cobro fijo o por hora.
- Problemas actuales (margen incierto, retrasos).

Genera:
1) Plantilla de job costing (campos y organización).
2) Proceso semanal para capturar horas/costos.
3) Indicadores: margen por proyecto, desvíos, horas reales vs estimadas.
4) Cómo ajustar precios basado en datos.
5) Reporte post-mortem por proyecto (checklist).`,
    thumbnail: "",
  },

  {
    id: "finoth-016",
    title: "Política de reembolsos desde finanzas: cómo minimizar impacto en caja",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Estrategia operativa para reducir reembolsos y proteger flujo sin mala reputación.",
    prompt: `Actúa como CFO con enfoque en experiencia del cliente.

Inputs:
- Tasa de reembolso actual (si la sé).
- Motivos comunes.
- Tipo de oferta (curso, SaaS, servicio).
- Ventana de garantía.
- Canales de venta.

Genera:
1) Medidas preventivas (antes de comprar): claridad, expectativas, filtros.
2) Medidas post-compra: onboarding, soporte, quick wins.
3) Opciones de resolución: crédito, pausa, upgrade, soporte extra.
4) Cómo provisionar reembolsos en caja (reserva).
5) KPI y alertas para detectar problemas temprano.`,
    thumbnail: "",
  },

  {
    id: "finoth-017",
    title: "Plan para construir fondo de emergencia del negocio (3 niveles)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Crea reservas para aguantar meses flojos sin recortar a lo loco.",
    prompt: `Actúa como asesor financiero empresarial.

Inputs:
- Gastos fijos mensuales.
- Variabilidad del ingreso.
- Caja actual.
- Velocidad de crecimiento.
- Riesgos principales (ads, proveedor, plataforma).

Genera:
1) 3 niveles de fondo (1 mes, 3 meses, 6 meses) y meta por nivel.
2) Estrategia de aportación semanal/mensual.
3) Reglas de uso (cuándo se usa y cómo se repone).
4) Dónde guardarlo (opciones generales) y por qué.
5) Plan de 90 días para iniciarlo.`,
    thumbnail: "",
  },

  {
    id: "finoth-018",
    title: "Plan de mejora de margen: 12 palancas con impacto estimado",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Lista accionable para subir utilidad sin depender solo de vender más.",
    prompt: `Actúa como consultor de rentabilidad.

Inputs:
- Producto/servicio y precio.
- Costos principales.
- Canal de adquisición.
- Estructura de equipo.
- Problema: margen bajo / CAC alto / muchos reembolsos.

Genera:
1) 12 palancas (precio, bundles, costos, churn, upsells, etc).
2) Para cada palanca: dificultad (baja/media/alta) e impacto (bajo/medio/alto).
3) Plan de ejecución en 4 semanas (prioridad).
4) Métricas para medir si funcionó.
5) Riesgos y cómo mitigarlos.`,
    thumbnail: "",
  },

  {
    id: "finoth-019",
    title: "Dashboard financiero en Notion/Sheets: diseño de tablero mínimo",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Un tablero simple con KPIs esenciales para ver salud del negocio a diario.",
    prompt: `Actúa como analista de BI financiero.

Inputs:
- Modelo de negocio (servicio, infoproducto, SaaS, e-commerce).
- Fuentes de datos (Stripe/PayPal/banco/Shopify).
- KPIs que ya mido (si alguno).
- Frecuencia de revisión.

Genera:
1) KPIs núcleo (5–8) según modelo.
2) Estructura del tablero (secciones, vistas, filtros).
3) Campos y definiciones para evitar confusión.
4) Rituales: revisión diaria/semana/mes.
5) Versión “mínimo viable” (una hoja) y versión “pro” (tablero completo).`,
    thumbnail: "",
  },

  {
    id: "finoth-020",
    title: "Cómo preparar un ‘cierre mensual’ como empresa (aunque seas solo tú)",
    area: "Finanzas & Contabilidad",
    category: "Otros",
    summary:
      "Rutina estándar para cerrar el mes: conciliación, reporte, decisiones.",
    prompt: `Actúa como controller corporativo.

Inputs:
- N° de cuentas/ tarjetas.
- N° de fuentes de ingresos.
- Volumen de transacciones.
- Si tengo inventario/empleados.

Genera:
1) Cierre mensual paso a paso (orden exacto).
2) Tiempo estimado por bloque y cómo reducirlo.
3) Checklist de entrega (reportes y evidencias).
4) Preguntas de dirección: decisiones que debo tomar con el cierre.
5) Plantilla de “acta de cierre” con conclusiones y tareas.`,
    thumbnail: "",
  },
];
