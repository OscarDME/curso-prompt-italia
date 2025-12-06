// src/lib/prompts/text/finanzas-contabilidad-impuestos-cumplimiento.js

export const textPromptsFinanzasContabilidadImpuestosCumplimiento = [
  {
    id: "fintax-001",
    title: "Checklist fiscal anual para freelancers/negocios (sin errores comunes)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Organiza obligaciones, calendario y documentación para operar en orden.",
    prompt: `Actúa como contador organizacional. No des asesoría fiscal específica por país; enfócate en estructura y mejores prácticas.

Inputs:
- País/estado (si aplica).
- Tipo de actividad: empleado/freelancer/negocio.
- Frecuencia de ingresos (mensual/variable).
- Si emito facturas/recibos (sí/no).
- Herramienta actual (Excel/app/ninguna).

Genera:
1) Checklist anual por trimestre/mes (qué revisar y cuándo).
2) Lista de documentos a guardar (ingresos, gastos, bancarios).
3) Rutina semanal/mensual para mantener todo al día.
4) Top 10 errores comunes y cómo evitarlos.
5) Plantilla de “carpeta fiscal” con estructura y nombres.`,
    thumbnail: "",
  },

  {
    id: "fintax-002",
    title: "Sistema de reservas para impuestos (tax buckets) con reglas automáticas",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Define cuánto apartar por cada cobro y evita sorpresas al final del periodo.",
    prompt: `Actúa como asesor financiero/contador.

Inputs:
- Ingreso promedio mensual.
- Variabilidad del ingreso (baja/media/alta).
- Porcentaje estimado de impuestos (si lo conozco; si no, propón rango conservador).
- Gastos del negocio (aprox).
- Si soy empleado/freelancer/empresa.

Genera:
1) Sistema por “cubetas”: impuestos, operación, ahorro, reinversión.
2) Reglas de transferencia (por cada cobro) en % y montos ejemplo.
3) Umbrales: cuándo subir o bajar el % de reserva.
4) Checklist mensual para conciliar y ajustar.
5) Protocolo de emergencia si ya me gasté la reserva.`,
    thumbnail: "",
  },

  {
    id: "fintax-003",
    title: "Clasificación de gastos deducibles vs no deducibles (plantilla práctica)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Crea un sistema de categorías para registrar gastos de forma limpia.",
    prompt: `Actúa como contador (enfoque general, no legal).

Inputs:
- Tipo de negocio/actividad.
- Tipos de gastos frecuentes (lista).
- Método de pago (tarjeta/efectivo/mixto).
- Si guardo comprobantes (sí/no).

Genera:
1) Tabla de categorías sugeridas (20–30) y ejemplos por categoría.
2) Reglas para evidencia/soporte (qué guardar y cómo).
3) Etiquetas para marcar “revisar con contador” si hay duda.
4) Plantilla de registro (campos y formato).
5) Flujo semanal: capturar → validar → archivar → conciliar.`,
    thumbnail: "",
  },

  {
    id: "fintax-004",
    title: "Calendario de obligaciones y pagos (mensual/semanal) listo para copiar",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Convierte tus obligaciones en un calendario operativo sin olvidos.",
    prompt: `Actúa como administrador contable.

Inputs:
- Tipo de contribuyente (empleado/freelancer/empresa).
- Frecuencia de declaraciones (mensual/trimestral/anual).
- Fechas clave conocidas (si las tengo).
- Procesos actuales (caótico/medio/ordenado).

Genera:
1) Calendario anual con bloques de trabajo (preparación, revisión, pago, archivo).
2) Lista de recordatorios automáticos (qué y cuándo).
3) Checklist por periodo (mensual/trimestral/anual).
4) Señales de alerta: cuándo pedir apoyo profesional.
5) Plantilla de “cierre fiscal” mensual de 60 minutos.`,
    thumbnail: "",
  },

  {
    id: "fintax-005",
    title: "Plan de cumplimiento para e-commerce/ventas online (orden de documentos)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Organiza ingresos de pasarelas, comisiones, reembolsos y reportes.",
    prompt: `Actúa como contador para ventas en línea.

Inputs:
- Plataforma(s) de venta y pago.
- Volumen de ventas mensual.
- Reembolsos/cancelaciones (bajo/medio/alto).
- Moneda y países donde vendo.
- Si tengo inventario (sí/no).

Genera:
1) Flujo para registrar ventas brutas, comisiones, neto y reembolsos.
2) Categorías contables sugeridas (ingresos, fees, chargebacks, envíos, etc.).
3) Checklist mensual de conciliación entre banco vs plataforma.
4) Documentos a descargar/guardar (y periodicidad).
5) Plantilla de reporte mensual para el contador.`,
    thumbnail: "",
  },

  {
    id: "fintax-006",
    title: "Organización de facturas/recibos: nomenclatura, carpetas y control",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Sistema simple para que nunca se te pierda un comprobante.",
    prompt: `Actúa como especialista en control documental.

Inputs:
- Cantidad estimada de comprobantes al mes.
- Si trabajo con papel, digital o ambos.
- Herramientas: Drive/OneDrive/Dropbox/local.
- Si tengo equipo (PC/móvil).

Genera:
1) Estructura de carpetas por año/mes/tipo.
2) Convención de nombres (fecha_proveedor_monto_categoria).
3) Flujo de captura desde el móvil (pasos).
4) Checklist semanal de “cero pendientes”.
5) Regla de retención de documentos (en términos generales) y backups.`,
    thumbnail: "",
  },

  {
    id: "fintax-007",
    title: "Protocolos contra multas: control de plazos + verificación doble",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Reduce riesgo de recargos con procesos y validaciones.",
    prompt: `Actúa como compliance officer (nivel práctico).

Inputs:
- Tipo de obligaciones (impuestos, seguridad social, licencias, etc.).
- Historial: ¿ya me multaron antes? (sí/no y por qué).
- Equipo: solo yo / con contador / con admin.
- Frecuencia de pagos.

Genera:
1) Sistema de control de plazos (3 capas de recordatorio).
2) Lista de verificación antes de enviar/pagar (10 puntos).
3) Control de evidencias: qué guardar como “prueba”.
4) Protocolo de corrección si detecto un error después.
5) “Tablero” semanal para ver estatus en 1 minuto.`,
    thumbnail: "",
  },

  {
    id: "fintax-008",
    title: "Guion para hablar con un contador: preguntas clave y entregables",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Asegura que te den claridad, no solo 'todo bien': qué pedir y cómo.",
    prompt: `Actúa como asesor para contratar/coordinar contabilidad.

Inputs:
- Tipo de actividad (empleado/freelancer/empresa).
- Complejidad: baja/media/alta.
- Dolor principal (impuestos altos, desorden, multas, etc.).
- Herramientas actuales.

Genera:
1) Lista de 20 preguntas para hacerle al contador (con intención).
2) Entregables mínimos mensuales: qué reportes exigir.
3) Checklist de lo que yo debo entregar (y cómo).
4) Indicadores para evaluar si el contador está haciendo buen trabajo.
5) Plantilla de email/mensaje para iniciar la conversación.`,
    thumbnail: "",
  },

  {
    id: "fintax-009",
    title: "Reporte mensual para impuestos: resumen ejecutivo para revisar rápido",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Un formato de 1 página para ver ingresos, gastos, base y reservas.",
    prompt: `Actúa como contador y creador de reportes.

Inputs:
- Ingresos del mes (bruto y neto si aplica).
- Gastos del mes (por categorías).
- Reservas para impuestos (monto/%).
- Deudas/obligaciones pendientes.
- Metas del mes siguiente.

Genera:
1) Plantilla de reporte mensual 1 página (secciones y campos).
2) Definiciones simples de cada campo para no confundirme.
3) Checklist de conciliación (banco vs registro).
4) 5 preguntas de revisión (para detectar errores).
5) Plan de acción del siguiente mes según resultados.`,
    thumbnail: "",
  },

  {
    id: "fintax-010",
    title: "Conciliación bancaria para cumplimiento: método rápido (sin llorar)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Proceso para cuadrar banco con registros y evitar inconsistencias.",
    prompt: `Actúa como auxiliar contable.

Inputs:
- Número de cuentas bancarias.
- Volumen de transacciones mensual.
- Si uso efectivo (sí/no).
- Registro actual (Excel/app/ninguno).

Genera:
1) Método paso a paso para conciliar (semanal y mensual).
2) Categorías de “diferencias” comunes y cómo resolverlas.
3) Checklist para detectar pagos duplicados, suscripciones olvidadas, comisiones.
4) Plantilla de “log de diferencias” con columnas.
5) Reglas para dejar evidencia y auditoría interna.`,
    thumbnail: "",
  },

  {
    id: "fintax-011",
    title: "Plan de cumplimiento para ingresos internacionales (estructura y riesgos)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Organiza cobros multi-moneda y documentación para operar con orden.",
    prompt: `Actúa como asesor de control financiero (sin dar asesoría legal).

Inputs:
- País de residencia.
- Países donde cobro/vendo.
- Monedas.
- Plataformas de pago.
- Si recibo transferencias o tarjetas.

Genera:
1) Sistema para registrar ingresos por país/moneda.
2) Reglas para tipo de cambio (cómo documentarlo).
3) Checklist documental para cada cobro (comprobante, reporte, banco).
4) Señales de riesgo donde debo consultar profesional local.
5) Reporte mensual sugerido para resumen internacional.`,
    thumbnail: "",
  },

  {
    id: "fintax-012",
    title: "Plan para separar finanzas personales vs negocio (cumplimiento limpio)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Evita mezclar dinero y simplifica contabilidad con reglas y cuentas.",
    prompt: `Actúa como contador.

Inputs:
- Si ya mezclo finanzas (sí/no).
- N° de cuentas actuales.
- Gastos mixtos (internet, celular, transporte).
- Ingresos del negocio.
- Dolor: desorden / impuestos / control.

Genera:
1) Estructura recomendada de cuentas (mínimo viable).
2) Reglas para pagos mixtos y reembolsos.
3) Checklist semanal para mantener separación.
4) Qué documentar para justificar movimientos.
5) Plan de migración en 14 días para ordenar sin parar el negocio.`,
    thumbnail: "",
  },

  {
    id: "fintax-013",
    title: "Control de nómina básico (si tengo 1–5 empleados) + cumplimiento",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Organiza pagos, registros y reportes internos sin errores de proceso.",
    prompt: `Actúa como administrador contable para micro-empresa (sin asesoría legal).

Inputs:
- N° de empleados.
- Frecuencia de pago (semanal/quincenal/mensual).
- Tipo de contratación (si aplica).
- Beneficios/bonos (si aplica).
- Herramienta actual.

Genera:
1) Checklist por periodo de pago (antes/durante/después).
2) Campos mínimos a registrar por empleado (plantilla).
3) Proceso para comprobantes y archivo documental.
4) Alertas: señales de incumplimiento o desorden.
5) Reporte mensual interno de nómina (1 página).`,
    thumbnail: "",
  },

  {
    id: "fintax-014",
    title: "Auditoría interna express: ¿mis números están limpios?",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Revisa consistencia y detecta huecos antes de que sea un problema.",
    prompt: `Actúa como auditor interno (nivel básico).

Inputs:
- Mes a revisar.
- Ingresos registrados.
- Gastos registrados.
- Extractos bancarios (monto total).
- Si manejo efectivo.

Genera:
1) Checklist de auditoría (20 puntos) para detectar inconsistencias.
2) Pruebas simples: sumas, ratios, reconciliación.
3) “Lista de hallazgos” con severidad (alta/media/baja).
4) Plan de corrección por prioridad.
5) Qué automatizar para que no vuelva a pasar.`,
    thumbnail: "",
  },

  {
    id: "fintax-015",
    title: "Plan de control de efectivo (cash) para no perder rastreo",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Registro y evidencia mínima para efectivo sin caos.",
    prompt: `Actúa como contador práctico.

Inputs:
- % de ingresos en efectivo.
- % de gastos en efectivo.
- Frecuencia de depósitos al banco.
- Si guardo tickets (sí/no).

Genera:
1) Libro de caja (plantilla) con campos y reglas.
2) Protocolo diario/semanal para registrar efectivo.
3) Reglas para depósitos: cuándo, cuánto, y cómo documentar.
4) Señales de fuga y formas de control.
5) Rutina mensual para cuadrar efectivo vs banco.`,
    thumbnail: "",
  },

  {
    id: "fintax-016",
    title: "Proceso para manejar reembolsos y devoluciones (cumplimiento contable)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Evita enredos registrando correctamente devoluciones y contracargos.",
    prompt: `Actúa como contador para negocio digital.

Inputs:
- Plataforma(s) de cobro.
- Frecuencia de reembolsos (baja/media/alta).
- Motivos comunes.
- Política de reembolso.

Genera:
1) Flujo de proceso: solicitud → aprobación → devolución → registro → evidencia.
2) Categorías contables para reembolsos/chargebacks.
3) Checklist de evidencias (capturas, correos, folios).
4) Reporte mensual de reembolsos (campos y métricas).
5) Reglas para prevenir fraude y abusos (operativo).`,
    thumbnail: "",
  },

  {
    id: "fintax-017",
    title: "Plan de control de inventario básico (si vendo producto físico)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Sistema mínimo para registrar entradas/salidas y evitar pérdidas.",
    prompt: `Actúa como controller de inventarios (básico).

Inputs:
- Tipo de productos.
- N° de SKUs aproximados.
- Canal de venta.
- Frecuencia de compras a proveedor.
- Problema principal (faltantes, exceso, pérdidas).

Genera:
1) Plantilla de inventario (campos mínimos).
2) Proceso de entradas/salidas (paso a paso).
3) Conteo cíclico (cada semana/mes) y cómo hacerlo rápido.
4) Métricas clave (rotación, quiebres, merma).
5) Checklist de cierre mensual para inventarios.`,
    thumbnail: "",
  },

  {
    id: "fintax-018",
    title: "SOP de documentación: de gasto a archivo (estilo empresa)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Convierte el caos en un procedimiento estándar repetible.",
    prompt: `Actúa como especialista en SOPs contables.

Inputs:
- Quién hace el proceso (yo / asistente).
- Herramientas (Drive/OneDrive/Notion/Sheets).
- Tipos de gastos comunes.
- Frecuencia de compras.

Genera:
1) SOP completo: objetivo, alcance, responsables, pasos, calidad.
2) Checklist de calidad (qué debe tener cada registro).
3) Plantillas: registro de gastos, log de diferencias, tracker de obligaciones.
4) Política de backups y control de versiones.
5) Indicadores del proceso (tiempo, % comprobantes completos, etc).`,
    thumbnail: "",
  },

  {
    id: "fintax-019",
    title: "Plan para preparar una declaración/revisión con contador (paquete listo)",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Arma un paquete ordenado para que el contador trabaje rápido y barato.",
    prompt: `Actúa como coordinador contable.

Inputs:
- Periodo a declarar (mes/trimestre/año).
- Volumen de transacciones.
- Si hay ingresos internacionales.
- Si hay empleados.
- Herramientas.

Genera:
1) Lista exacta de archivos a entregar (por orden).
2) Formato de nombrado para todo el paquete.
3) Resumen ejecutivo para el contador (1 página) con números clave.
4) Checklist final antes de enviar (errores típicos).
5) Email/mensaje de entrega con instrucciones claras.`,
    thumbnail: "",
  },

  {
    id: "fintax-020",
    title: "Tablero de cumplimiento mensual: status, evidencias y pendientes",
    area: "Finanzas & Contabilidad",
    category: "Impuestos & Cumplimiento",
    summary:
      "Dashboard simple para saber si estás ‘al 100’ cada mes.",
    prompt: `Actúa como analista de operaciones financieras.

Inputs:
- Obligaciones (lista).
- Fuentes de datos (bancos, plataformas, facturas).
- Equipo (solo yo / con contador / con admin).
- Frecuencia de revisión.

Genera:
1) Estructura de tablero con secciones (obligaciones, docs, conciliación, reservas).
2) Campos por tarea: responsable, fecha, estatus, link evidencia, notas.
3) Ritmo de actualización (semanal) con checklist.
4) Semáforo (verde/amarillo/rojo) y reglas para cada color.
5) Versión “mínimo viable” en 10 minutos y versión “pro” en 60 minutos.`,
    thumbnail: "",
  },
];
