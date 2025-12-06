// src/lib/prompts/text/finanzas-contabilidad-presupuesto-planificacion.js

export const textPromptsFinanzasContabilidadPresupuestoPlanificacion = [
  {
    id: "finpres-001",
    title: "Presupuesto mensual 50/30/20 personalizado + métricas de control",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Crea un presupuesto realista y medible para tu situación con reglas claras.",
    prompt: `Actúa como asesor financiero (enfoque práctico, sin prometer rendimientos).

Inputs:
- Ingreso neto mensual.
- Deudas (tipo, tasa, pago mínimo).
- Gastos fijos (renta, servicios, transporte, etc).
- Gastos variables.
- Metas (ahorro, emergencia, compra grande).
- Tolerancia al riesgo (baja/media/alta).

Genera:
1) Presupuesto mensual estilo 50/30/20 adaptado a mis números (si no aplica, propone otra estructura).
2) Tabla: categoría | monto | % | límite semanal.
3) Reglas de control (top 7) para no romper el presupuesto.
4) 5 métricas clave para revisar cada semana (incluye umbrales).
5) Plan de ajuste si hay un mes malo (ingreso baja 20%).`,
    thumbnail: "",
  },

  {
    id: "finpres-002",
    title: "Presupuesto base cero (Zero-Based Budget) paso a paso",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Asigna cada peso/dólar a un propósito para eliminar fugas y gastar con intención.",
    prompt: `Actúa como coach financiero.

Inputs:
- Ingreso neto mensual.
- Lista de gastos fijos y variables del último mes.
- Metas financieras (3).
- Ahorro actual.
- Cuenta(s) bancarias que uso.

Genera:
1) Presupuesto base cero con categorías sugeridas.
2) Asignación exacta para: fijos, variables, ahorro, fondo de emergencia, deuda, diversión.
3) Con qué frecuencia mover dinero (semanal/quincenal) y cómo.
4) Plantilla de revisión semanal (checklist).
5) 10 recortes "sin dolor" según mis gastos.`,
    thumbnail: "",
  },

  {
    id: "finpres-003",
    title: "Plan para crear fondo de emergencia (3–6 meses) sin ahorcarte",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Construye un colchón financiero con hitos, plazos y automatizaciones.",
    prompt: `Actúa como asesor financiero conservador.

Inputs:
- Gasto mensual esencial (solo lo básico).
- Ahorro actual.
- Estabilidad de ingresos (estable/variable).
- Dependientes (sí/no).
- Riesgos (salud, auto, trabajo).

Genera:
1) Objetivo recomendado de emergencia (3, 4.5 o 6 meses) con justificación.
2) Plan de aportaciones por semana/mes para llegar en X meses (propón 3 escenarios).
3) Dónde guardarlo (opciones seguras, liquidez) sin mencionar marcas si no es necesario.
4) Reglas de uso: cuándo sí / cuándo no tocarlo.
5) Checklist mensual para mantenerlo y reponerlo si lo uso.`,
    thumbnail: "",
  },

  {
    id: "finpres-004",
    title: "Plan agresivo para salir de deudas (avalancha vs bola de nieve)",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Estrategia para pagar deudas más rápido con calendario de pagos y recortes.",
    prompt: `Actúa como asesor financiero y analista.

Inputs:
- Lista de deudas: saldo, tasa, pago mínimo.
- Ingreso neto mensual.
- Capacidad extra de pago mensual.
- Prioridad personal (motivación rápida vs ahorro en intereses).

Genera:
1) Comparación avalancha vs bola de nieve aplicada a mis números.
2) Calendario de pagos mensual (primeros 6 meses detallados + resumen anual).
3) Cómo redistribuir pagos cuando una deuda se liquida.
4) 10 ideas para liberar flujo de efectivo este mes.
5) Reglas para no recaer (sistema de prevención).`,
    thumbnail: "",
  },

  {
    id: "finpres-005",
    title: "Plan de flujo de efectivo semanal (cashflow) para ingresos variables",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Organiza tu dinero por semanas y prioridades si cobras por ventas/comisiones.",
    prompt: `Actúa como planificador financiero para freelancers/emprendedores.

Inputs:
- Ingresos estimados por semana (últimas 8 semanas).
- Gastos fijos con fecha de pago.
- Gastos variables promedio.
- Deudas y metas.
- Método de cobro (diario/semanal/quincenal).

Genera:
1) Sistema de “buckets” (cubetas) y % sugeridos.
2) Calendario semanal de asignación (qué día separar qué).
3) Regla de prioridad cuando entra dinero (orden exacto).
4) Plan para semanas malas (umbral y acciones).
5) Checklist de cierre semanal (15 min).`,
    thumbnail: "",
  },

  {
    id: "finpres-006",
    title: "Presupuesto para pareja/familia (modelo justo) + acuerdos",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Crea un sistema compartido sin peleas: contribuciones, metas y reglas.",
    prompt: `Actúa como mediador financiero.

Inputs:
- Ingreso neto de cada persona.
- Gastos compartidos y personales.
- Metas (casa, viaje, emergencia, deudas).
- Estilo de gasto (ahorrador/gastón/mixto).

Genera:
1) Modelo recomendado (50/50, proporcional, híbrido) con justificación.
2) Presupuesto compartido y personal con montos.
3) Reglas: compras grandes, suscripciones, emergencias, deudas.
4) Reunión financiera mensual (agenda + checklist).
5) “Acuerdo escrito” tipo 1 página para firmar simbólicamente.`,
    thumbnail: "",
  },

  {
    id: "finpres-007",
    title: "Plan anual de metas financieras (OKRs) con hitos mensuales",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Convierte tus metas en objetivos medibles y seguimiento mensual.",
    prompt: `Actúa como asesor financiero orientado a metas.

Inputs:
- Metas (máx 5) con monto y fecha deseada.
- Ingreso actual y esperado.
- Deudas.
- Ahorro actual.
- Riesgos y prioridades.

Genera:
1) OKRs financieros (Objectives + Key Results) para 12 meses.
2) Hitos mensuales con montos exactos.
3) Indicadores adelantados (hábitos) y atrasados (resultados).
4) Plan de revisión trimestral: qué ajustar y cómo.
5) Plantilla de tablero (dashboard) en texto para copiar a Notion/Sheets.`,
    thumbnail: "",
  },

  {
    id: "finpres-008",
    title: "Plan para comprar algo grande (auto/casa/equipo) sin descapitalizarte",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Define cuánto ahorrar, cuánto financiar y cómo no romper tu estabilidad.",
    prompt: `Actúa como asesor financiero.

Inputs:
- Qué quieres comprar y costo estimado.
- Ahorro disponible.
- Ingreso neto mensual.
- Deudas actuales.
- Urgencia (alta/media/baja).
- Tolerancia al riesgo.

Genera:
1) Monto máximo recomendado para pago mensual (regla conservadora).
2) Plan de ahorro para enganche con 3 escenarios (rápido/medio/relajado).
3) Impacto en presupuesto mensual y qué recortar.
4) Checklist antes de comprar (documentos, seguros, mantenimiento).
5) Plan "post-compra" para recuperar liquidez.`,
    thumbnail: "",
  },

  {
    id: "finpres-009",
    title: "Plan de reducción de gastos (auditoría) con ranking por impacto",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Detecta fugas de dinero y recorta de forma inteligente sin afectar calidad de vida.",
    prompt: `Actúa como auditor personal de gastos.

Inputs:
- Extracto de gastos del último mes (lista o categorías).
- Gastos fijos (renta, servicios, etc.).
- Suscripciones.
- Compras hormiga.
- Objetivo: ahorrar X por mes.

Genera:
1) Clasificación de gastos: esencial / importante / prescindible.
2) Ranking de recortes por impacto (top 15) con ahorro estimado.
3) Plan de 30 días para implementar recortes (semanal).
4) Reglas para evitar “rebote” (gastar por ansiedad).
5) Alternativas baratas para 10 gastos comunes.`,
    thumbnail: "",
  },

  {
    id: "finpres-010",
    title: "Sistema de sobres (envelope method) moderno con cuentas digitales",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Implementa el método de sobres usando cuentas/bóvedas digitales y automatizaciones.",
    prompt: `Actúa como coach financiero.

Inputs:
- Ingreso neto mensual.
- Frecuencia de cobro.
- Categorías principales de gasto.
- Nivel de disciplina (bajo/medio/alto).

Genera:
1) Estructura de sobres (10–15) con % sugeridos.
2) Reglas de recarga (cada cobro) y límites.
3) Qué hacer si un sobre se queda sin fondos (protocolos).
4) Automatizaciones recomendadas (transferencias, alertas).
5) Checklist de mantenimiento semanal de 10 minutos.`,
    thumbnail: "",
  },

  {
    id: "finpres-011",
    title: "Presupuesto para estudiantes (rentas, comida, transporte) + hacks de ahorro",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Presupuesto simple para sobrevivir y avanzar con poco ingreso.",
    prompt: `Actúa como asesor financiero para estudiantes.

Inputs:
- Ingreso mensual (beca, trabajo).
- Renta y servicios.
- Transporte.
- Comida.
- Deudas (si aplica).
- Meta (ahorrar X / pagar deuda / estabilizar).

Genera:
1) Presupuesto por categorías (ideal y mínimo viable).
2) Plan semanal de comida con costo estimado (sin marcas).
3) 20 hacks de ahorro prácticos y realistas.
4) Señales de alerta (cuando estás fuera de control) + qué hacer.
5) Mini-plan para crear un fondo de emergencia de 1 mes.`,
    thumbnail: "",
  },

  {
    id: "finpres-012",
    title: "Presupuesto para negocios pequeños (micro-P&L) + control de caja",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Organiza ingresos, costos, gastos y caja para no quedarte sin liquidez.",
    prompt: `Actúa como contador/finanzas para micro-negocios.

Inputs:
- Ingresos promedio mensuales.
- Costos directos (proveedores, plataformas, comisiones).
- Gastos operativos (apps, sueldos, anuncios).
- Impuestos estimados (si aplica).
- Objetivo de utilidad.

Genera:
1) Plantilla de micro P&L: ingresos, COGS, margen, gastos, utilidad.
2) Presupuesto mensual por rubros con % recomendados.
3) Regla de “reserva” para impuestos y contingencias.
4) Ritmo de revisión: semanal (caja) y mensual (P&L).
5) Señales de peligro de caja + plan de recuperación.`,
    thumbnail: "",
  },

  {
    id: "finpres-013",
    title: "Plan para elevar tu ahorro del 0% al 15% en 60 días",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Estrategia gradual para aumentar ahorro sin sentir que te asfixias.",
    prompt: `Actúa como coach financiero conductual.

Inputs:
- Ingreso neto mensual.
- Ahorro actual (0–5%).
- 5 gastos que más te pesan.
- Nivel de estrés financiero (1–10).
- Meta de ahorro.

Genera:
1) Plan de 8 semanas (objetivo semanal de ahorro).
2) Recortes progresivos con alternativas.
3) Automatización recomendada (día y monto).
4) Recompensas y reglas para mantener motivación (sin sabotear).
5) Qué hacer si fallas una semana (protocolo de regreso).`,
    thumbnail: "",
  },

  {
    id: "finpres-014",
    title: "Plan para organizar pagos y fechas (anti-morosidad) + calendario",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Evita recargos y atrasos: calendario, recordatorios y prioridades.",
    prompt: `Actúa como asesor financiero.

Inputs:
- Lista de cuentas a pagar + fechas.
- Ingreso y frecuencia de cobro.
- Si hay deudas con interés/recargos.
- Método actual (caótico/medio/ordenado).

Genera:
1) Calendario de pagos mensual (estructura por semanas).
2) Estrategia: pagar al cobrar vs pagar al vencimiento (recomienda una).
3) Sistema de recordatorios y revisión semanal.
4) Prioridad de pagos (orden con justificación).
5) Plan de contingencia si falta dinero (qué posponer y cómo negociar).`,
    thumbnail: "",
  },

  {
    id: "finpres-015",
    title: "Plan de “presupuesto minimalista” (3 cuentas) para gente ocupada",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Sistema simple y automático con pocas decisiones.",
    prompt: `Actúa como asesor financiero. Diseña un sistema de 3 cuentas (o 3 buckets) súper simple.

Inputs:
- Ingreso neto mensual.
- Gastos fijos.
- Metas (ahorro/deuda).
- Tipo de ingreso (estable/variable).
- Disciplina (baja/media/alta).

Genera:
1) Estructura 3 cuentas: Gastos fijos / Gastos variables / Objetivos.
2) Porcentajes y montos exactos.
3) Cuándo transferir (día del mes o por cobro).
4) Reglas anti-desorden.
5) Checklist mensual (10 min) para mantenerlo.`,
    thumbnail: "",
  },

  {
    id: "finpres-016",
    title: "Plan de presupuesto para viajes (sin endeudarte)",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Ahorra para un viaje con calendario, costos y un plan B.",
    prompt: `Actúa como asesor financiero.

Inputs:
- Costo estimado del viaje.
- Fecha del viaje.
- Ahorro actual.
- Ingreso mensual.
- Nivel de flexibilidad (puedo recortar mucho/poco).

Genera:
1) Meta mensual de ahorro y fecha de cumplimiento (3 escenarios).
2) Categorías del viaje con % sugeridos (vuelos, hospedaje, comida, extras).
3) Estrategia de compra (qué pagar primero y cuándo).
4) Plan B si suben precios o baja el ingreso.
5) Checklist final 2 semanas antes del viaje.`,
    thumbnail: "",
  },

  {
    id: "finpres-017",
    title: "Plan financiero post-crisis (reconstrucción en 90 días)",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Recupera control después de un golpe (deuda, pérdida de ingreso, emergencia).",
    prompt: `Actúa como asesor financiero en situaciones de crisis.

Inputs:
- Qué pasó (pérdida de ingreso, emergencia médica, deuda).
- Ingreso actual.
- Gastos esenciales.
- Deudas.
- Apoyos disponibles (familia, seguro, etc).

Genera:
1) Presupuesto de supervivencia (mínimo viable) por 30 días.
2) Plan 90 días en 3 fases (estabilizar, reparar, construir).
3) Qué negociar y con quién (deudas, servicios, renta) + guiones breves.
4) Checklist semanal de seguimiento.
5) Señales de que ya puedo volver a “modo normal”.`,
    thumbnail: "",
  },

  {
    id: "finpres-018",
    title: "Plan para contabilizar gastos y ahorrar impuestos (organización documental)",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Sistema para ordenar recibos, categorías y reportes mensuales (sin asesoría fiscal específica).",
    prompt: `Actúa como contador organizado. (No des asesoría fiscal específica, solo estructura y buenas prácticas.)

Inputs:
- Si soy empleado/freelancer/empresa.
- Tipos de gastos (equipo, software, transporte, etc).
- Herramientas actuales (nada/Excel/app).
- Frecuencia de facturación/recibos.

Genera:
1) Estructura de carpetas y nomenclatura (digital) por mes y tipo.
2) Categorías contables comunes (lista) para registrar gastos.
3) Rutina semanal (15 min) + rutina mensual (60 min).
4) Plantilla de registro: fecha, proveedor, categoría, método, comprobante, nota.
5) Checklist de cierre mensual para estar listo ante un contador/auditoría.`,
    thumbnail: "",
  },

  {
    id: "finpres-019",
    title: "Plan de presupuesto para “crecer ingresos” (Bono: estrategia de subida)",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Alinea presupuesto con crecimiento: inversión, ahorro y control del gasto.",
    prompt: `Actúa como asesor financiero para crecimiento personal/negocios.

Inputs:
- Ingreso actual.
- Habilidad principal (ventas, freelancing, etc).
- Tiempo disponible a la semana.
- Gastos fijos.
- Meta de ingreso en 90 días.

Genera:
1) Presupuesto “actual” vs “presupuesto objetivo” (qué cambia).
2) Porcentaje recomendado para inversión en crecimiento (cursos, herramientas, ads, etc).
3) Plan de acción semanal para subir ingresos (5 acciones).
4) Indicadores de retorno (qué medir) para decidir si vale la pena.
5) Reglas para evitar que el aumento de ingreso se vuelva aumento de gasto.`,
    thumbnail: "",
  },

  {
    id: "finpres-020",
    title: "Diagnóstico financiero express (score) + plan de mejora",
    area: "Finanzas & Contabilidad",
    category: "Presupuesto & Planificación",
    summary:
      "Evalúa tu salud financiera con un score y un plan de 30 días.",
    prompt: `Actúa como asesor financiero.

Inputs:
- Ingreso neto.
- Ahorro disponible.
- Deudas y pagos.
- Gastos esenciales.
- Objetivos principales.
- Estrés financiero (1–10).

Genera:
1) Score de salud financiera (0–100) con 5 sub-scores (ahorro, deuda, liquidez, estabilidad, hábitos).
2) Diagnóstico: 3 problemas raíz.
3) Plan de 30 días con tareas semanales.
4) Reglas simples (máx 7) para mantener el progreso.
5) Checklist de revisión mensual para no volver atrás.`,
    thumbnail: "",
  },
];
