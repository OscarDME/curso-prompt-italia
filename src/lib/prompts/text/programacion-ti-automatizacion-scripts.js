// src/lib/prompts/text/programacion-ti-automatizacion-scripts.js

export const textPromptsProgramacionTiAutomatizacionScripts = [
  {
    id: "proti-auto-001",
    title: "Automatización 360° (de proceso manual a script confiable)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Convierte un proceso repetitivo en una automatización robusta con validaciones, logs y rollback.",
    prompt: `Actúa como ingeniero de automatización senior.

Inputs:
- Proceso manual actual (pasos).
- Frecuencia (diaria/semanal/por evento).
- Fuentes de datos (CSV, API, DB, carpeta, correo).
- Salidas esperadas (archivo, DB, notificación, reporte).
- Riesgos (datos sensibles, errores costosos).

Genera:
1) Rediseño del proceso (pasos optimizados).
2) Especificación del script (entradas/salidas/validaciones).
3) Estrategia de idempotencia (cómo evitar duplicados).
4) Manejo de errores y reintentos (qué sí/qué no reintentar).
5) Logs y métricas mínimas.
6) Plan de pruebas (casos normales + edge cases).
7) Plan de rollback y “modo dry-run”.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-002",
    title: "Diseño de CLI (command-line tool) para tu equipo",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Crea un comando tipo `mi-herramienta sync --dry-run` con UX clara y segura.",
    prompt: `Actúa como dev senior creando herramientas internas.

Inputs:
- Nombre de la herramienta.
- Acciones (comandos) necesarias.
- Usuarios (técnicos/no técnicos).
- Plataforma (Windows/macOS/Linux).
- Requisitos (config, secretos, permisos).

Genera:
1) Diseño de comandos y subcomandos (ejemplos).
2) Flags recomendadas (dry-run, force, verbose, config).
3) Mensajes de salida UX (errores claros + progreso).
4) Estructura del proyecto (carpetas/módulos).
5) Estrategia de configuración (archivo + env vars).
6) Plan de packaging/distribución (npm/pip/binary).
7) Checklist de seguridad (secrets, permisos, logs).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-003",
    title: "Script para renombrar/migrar archivos por reglas (batch)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Automatiza renombres masivos, conversión de formatos y organización por carpetas.",
    prompt: `Actúa como especialista en scripts para operaciones de archivos.

Inputs:
- Carpeta origen.
- Reglas de renombrado (patrón ejemplo).
- Filtros (extensiones, tamaños, fechas).
- Acción (copiar/mover/convertir/eliminar).
- Requisitos de seguridad (backup sí/no).

Genera:
1) Algoritmo paso a paso (con modo previsualización).
2) Estrategia para evitar colisiones de nombres.
3) Política de backup (carpeta backup + restore).
4) Logs (qué registrar).
5) 15 casos de prueba (incluye edge cases).
6) Checklist para ejecutar en producción sin perder nada.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-004",
    title: "ETL rápido: de CSV/Sheets → DB con validación",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Carga datos a una DB con limpieza, normalización y reporte de errores.",
    prompt: `Actúa como data engineer práctico.

Inputs:
- Fuente (CSV/Google Sheets/Excel).
- Esquema destino (tablas/campos).
- Reglas de validación (obligatorio, formato, rangos).
- Volumen de datos.
- Frecuencia de carga.

Genera:
1) Mapeo de columnas → campos (incluye transformaciones).
2) Validaciones y normalizaciones (lista).
3) Manejo de registros inválidos (quarantine + reporte).
4) Estrategia de upsert/deduplicación.
5) Plan de performance (batching, transacciones).
6) Reporte final (métricas: insertados/actualizados/fallidos).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-005",
    title: "Integración con APIs: sync bidireccional con conflictos",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Sincroniza dos sistemas (CRM ↔ DB, Notion ↔ app) con rate limits y conflictos.",
    prompt: `Actúa como ingeniero de integraciones senior.

Inputs:
- Sistema A y sistema B.
- Qué entidades se sincronizan.
- Dirección (A->B, B->A o bidireccional).
- Rate limits conocidos.
- Reglas de conflicto (quién manda).

Genera:
1) Diseño del sync (polling vs webhooks vs híbrido).
2) Identificadores y mapping (IDs externos y locales).
3) Manejo de rate limits (backoff, batching, colas).
4) Resolución de conflictos (estrategias + ejemplos).
5) Idempotencia e historial de sync (tabla/registro).
6) Observabilidad (logs + alertas cuando se rompe).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-006",
    title: "Scraping/Extracción de datos (legal y robusto)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Extrae datos públicos cuidando términos, rate limits, parsing y cambios en HTML.",
    prompt: `Actúa como ingeniero responsable de extracción de datos.

Inputs:
- Fuente (sitio/API pública).
- Datos a extraer (campos).
- Frecuencia.
- Límite de requests por minuto (si se sabe).
- Formato de salida (CSV/JSON/DB).

Genera:
1) Enfoque recomendado (API primero, fallback scraping).
2) Estrategia de respeto (throttling, user-agent, caching).
3) Diseño de parser resiliente (selectores + fallback).
4) Manejo de cambios (tests, detección de roturas).
5) Validación y deduplicación.
6) Checklist legal/ética (sin evadir paywalls/captcha).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-007",
    title: "Automatización de reportes (diario/semanal) con envío",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Genera un reporte con KPIs, gráficos/tabla y lo envía por email/Slack.",
    prompt: `Actúa como ingeniero de analytics automation.

Inputs:
- Fuentes de datos (DB/APIs/CSV).
- KPIs requeridos.
- Destinatarios (email/Slack).
- Horario.
- Formato (HTML, PDF, CSV).

Genera:
1) Definición del reporte (secciones + métricas).
2) Consultas o extracción base (pseudo).
3) Plantilla de salida (estructura HTML o markdown).
4) Envío (SMTP/Slack webhook) y manejo de errores.
5) Scheduling (cron/GitHub Actions/serverless).
6) Observabilidad: alertas si falla o si datos faltan.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-008",
    title: "Automatización de backups y restores verificados",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Backups que realmente sirven: rotación, cifrado, verificación y simulacro de restore.",
    prompt: `Actúa como SRE.

Inputs:
- Qué se respalda (DB, carpeta, bucket).
- En qué entorno (local/cloud).
- RPO/RTO deseado (aprox).
- Retención (días/semanas).
- Requisitos de cifrado.

Genera:
1) Estrategia de backup (full/incremental, frecuencia).
2) Rotación y retención (política).
3) Cifrado y gestión de claves.
4) Verificación automática (checksums + restore test).
5) Plan de restore paso a paso.
6) Alertas y reporte de salud del backup.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-009",
    title: "Limpieza automática de datos (dedupe, normalización, reglas)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Estandariza datos sucios: nombres, emails, teléfonos, formatos, duplicados.",
    prompt: `Actúa como data quality engineer.

Inputs:
- Tipo de datos (contactos, productos, etc.).
- Campos problemáticos.
- Reglas de normalización preferidas.
- Definición de duplicado (criterios).
- Tolerancia al error.

Genera:
1) Reglas de limpieza por campo.
2) Algoritmo de deduplicación (exacta + fuzzy).
3) Reporte de cambios (antes/después).
4) Política de “no tocar” (qué campos no modificar).
5) Validación (tests con ejemplos).
6) Plan de ejecución incremental y rollback.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-010",
    title: "Automatización con colas (jobs) para tareas pesadas",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Diseña job processing: workers, retries, dead-letter queue y monitoreo.",
    prompt: `Actúa como backend engineer senior.

Inputs:
- Tipo de tareas (convertir archivos, enviar emails, etc.).
- Volumen (jobs/hora).
- Tiempos esperados por job.
- Requisitos de prioridad (alta/baja).
- Infra (Redis/SQS/RabbitMQ).

Genera:
1) Arquitectura de cola (productor/worker).
2) Estructura del payload del job.
3) Política de reintentos (backoff) y dead-letter.
4) Idempotencia (cómo evitar doble ejecución).
5) Concurrencia y throughput (cálculo aproximado).
6) Observabilidad (métricas + alertas).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-011",
    title: "Automatización de despliegues repetibles (scripts de release)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Estandariza releases: versionado, changelog, tags, build y deploy con checks.",
    prompt: `Actúa como Release Engineer.

Inputs:
- Tipo de app (monorepo o no).
- Hosting (Vercel, AWS, etc.).
- Versionado (semver sí/no).
- Requisitos de migración.
- Checks de calidad.

Genera:
1) Flujo de release (pasos exactos).
2) Script/CLI de release (comandos y flags sugeridos).
3) Generación de changelog (convenciones).
4) Checks pre-release y post-release.
5) Rollback strategy.
6) Plan para automatizarlo en CI.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-012",
    title: "Notificaciones inteligentes (alertas sin spam)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Diseña notificaciones por evento con dedupe, thresholds y ventanas silenciosas.",
    prompt: `Actúa como ingeniero de plataformas.

Inputs:
- Eventos importantes (lista).
- Canales (Slack, email, SMS).
- Condiciones para alertar (umbral).
- Ventanas horarias.
- Ruido actual (si existe).

Genera:
1) Taxonomía de alertas (info/warn/critical).
2) Reglas de deduplicación y cool-down.
3) Plantillas de mensajes (claras, accionables).
4) Routing por severidad (quién recibe qué).
5) Métricas para medir ruido y calidad.
6) Checklist para iterar reglas sin perder eventos críticos.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-013",
    title: "Automatización de generación de contenido técnico (docs, changelogs)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Genera documentación y registros a partir de commits/PRs/metadata.",
    prompt: `Actúa como developer productivity engineer.

Inputs:
- Fuente (git commits, PRs, issues).
- Formato deseado (markdown, html).
- Convenciones del equipo.
- Secciones necesarias.
- Frecuencia (por release, semanal).

Genera:
1) Mapeo fuente -> secciones (reglas).
2) Plantilla de salida (markdown).
3) Reglas para agrupar y resumir cambios.
4) Manejo de cambios breaking.
5) Integración en CI (pasos).
6) Validación para evitar docs vacías o incorrectas.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-014",
    title: "Automatización de limpieza de storage (costos y retención)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Reduce costos borrando/archivando archivos viejos con políticas y reportes.",
    prompt: `Actúa como cloud cost engineer.

Inputs:
- Storage (S3, GCS, local, etc).
- Tipos de archivos.
- Política de retención (días).
- Excepciones (carpetas/labels).
- Necesidad de archivado (sí/no).

Genera:
1) Política exacta de retención (reglas).
2) Diseño del job (escaneo, selección, acción).
3) Seguridad: dry-run, aprobaciones, backups.
4) Reporte de impacto ($ estimado, GB liberados).
5) Alertas y auditoría.
6) Plan de pruebas con un subset.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-015",
    title: "Automatización de import/export entre entornos (staging/prod)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Sincroniza configs/datos controlados entre entornos sin filtrar secretos.",
    prompt: `Actúa como DevOps.

Inputs:
- Qué se importa/exporta (datos, config, assets).
- Origen/destino (staging/prod/local).
- Datos sensibles (sí/no).
- Frecuencia.
- Formato.

Genera:
1) Lista whitelist de lo que sí se mueve y blacklist de lo que no.
2) Proceso seguro paso a paso.
3) Sanitización/anonimización si aplica.
4) Script plan con logs y validación.
5) Rollback.
6) Checklist de seguridad para secretos.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-016",
    title: "Monitoreo de jobs automáticos (healthchecks y SLA)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Asegura que las automatizaciones no mueran en silencio: heartbeats, SLAs y alertas.",
    prompt: `Actúa como SRE.

Inputs:
- Lista de automatizaciones.
- Frecuencia por job.
- Qué significa “éxito”.
- Canales de alerta.
- Tolerancia al retraso.

Genera:
1) Sistema de heartbeats (cómo reporta cada job).
2) SLAs por job (tiempo máximo sin correr).
3) Alertas: fallos, retrasos, resultados anómalos.
4) Dashboard mínimo (qué gráficas).
5) Runbook: qué hacer cuando falla (pasos).
6) Estrategia para reducir flakiness (retries, locks, idempotencia).`,
    thumbnail: "",
  },

  {
    id: "proti-auto-017",
    title: "Automatización de tareas en Windows (PowerShell) para no sufrir",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Convierte flujos comunes en scripts PowerShell con logging y Task Scheduler.",
    prompt: `Actúa como especialista en PowerShell.

Inputs:
- Tarea a automatizar.
- Rutas de archivos.
- Credenciales necesarias (sí/no).
- Frecuencia/trigger.
- Salida esperada.

Genera:
1) Script plan en PowerShell (pseudocódigo detallado).
2) Manejo de errores y exit codes.
3) Logging a archivo con timestamps.
4) Cómo programarlo con Task Scheduler (pasos).
5) Recomendaciones de permisos (mínimos).
6) Checklist de validación al instalarlo.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-018",
    title: "Automatización con GitHub Actions (jobs programados y por push)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Diseña workflows con secretos, cache, matrices, y notificaciones.",
    prompt: `Actúa como engineer de CI.

Inputs:
- Repo y stack.
- Qué automatizar (tests, reportes, sync).
- Triggers (push, PR, cron).
- Secretos necesarios.
- Tiempo máximo deseado.

Genera:
1) Estructura de workflow (jobs y pasos).
2) Manejo de secretos seguro.
3) Cache (node/pip) recomendado.
4) Estrategia de retries y timeouts.
5) Notificaciones de fallo (Slack/email).
6) Checklist para evitar costos innecesarios.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-019",
    title: "Automatización de control de calidad de archivos (lint de assets)",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Valida que assets cumplan reglas (tamaño, formato, nombre, metadata).",
    prompt: `Actúa como developer productivity.

Inputs:
- Carpeta(s) de assets.
- Reglas (formatos permitidos, max KB, naming).
- Acciones al fallar (bloquear CI o warning).
- En qué etapa corre (pre-commit/CI).
- Excepciones.

Genera:
1) Reglas de validación (lista exacta).
2) Diseño del script de verificación.
3) Reporte de resultados (resumen + detalle).
4) Integración en pre-commit y CI.
5) Política de excepciones.
6) Plan para arreglar el backlog de archivos fuera de estándar.`,
    thumbnail: "",
  },

  {
    id: "proti-auto-020",
    title: "Automatización de rotación de secretos y credenciales",
    area: "Programación & TI",
    category: "Automatización & Scripts",
    summary:
      "Plan para rotar claves sin tumbar servicios: ventanas, doble escritura y verificación.",
    prompt: `Actúa como Security/DevOps engineer.

Inputs:
- Qué secretos (API keys, DB passwords, tokens).
- Dónde viven (env vars, vault, CI).
- Servicios afectados.
- Frecuencia de rotación.
- Si hay auditoría requerida.

Genera:
1) Plan paso a paso para rotación sin downtime.
2) Estrategia de “doble secreto” (old/new) y cutover.
3) Validación post-rotación (health checks).
4) Rollback.
5) Auditoría y registro de cambios.
6) Checklist para automatizarlo (mensual/trimestral).`,
    thumbnail: "",
  },
];
