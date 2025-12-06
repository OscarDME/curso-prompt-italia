// src/lib/prompts/text/programacion-ti-otros.js

export const textPromptsProgramacionTiOtros = [
  {
    id: "proti-otr-001",
    title: "Diagnóstico rápido de bug (pasos, hipótesis y fix)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Estructura un plan profesional para encontrar y arreglar un bug sin perder tiempo.",
    prompt: `Actúa como ingeniero senior debugging.

Inputs:
- Síntoma exacto (qué se ve).
- Cuándo ocurre (rutas, usuarios, dispositivos).
- Logs/errores (si hay).
- Qué cambió recientemente.

Genera:
1) 10 hipótesis priorizadas (más probable → menos).
2) Qué evidencia confirmaría/refutaría cada hipótesis.
3) Plan de reproducción mínima (minimal repro).
4) Instrumentación útil (logs, traces, flags) y dónde ponerla.
5) Fix propuesto con riesgos y rollback.
6) Tests para evitar regresión.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-002",
    title: "Optimización de rendimiento (p95/p99) con plan medible",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Reduce latencia identificando cuellos de botella y aplicando mejoras con métricas.",
    prompt: `Actúa como performance engineer.

Inputs:
- Sistema afectado (API, web, job).
- Métricas actuales (p50/p95/p99, RPS).
- Costos (CPU/RAM/DB/IO).
- Restricciones (serverless, DB compartida, etc.).

Genera:
1) Mapa de la ruta crítica (etapas y tiempos).
2) Top 8 causas probables y cómo medir cada una.
3) Plan de optimización por impacto/risgo.
4) Cambios concretos (caching, indices, batching, streaming, etc.).
5) Metas objetivo (antes/después) y cómo validar.
6) Plan de rollback + checklist de regresión.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-003",
    title: "Revisión de PR como tech lead (calidad + seguridad)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Checklist para revisar pull requests sin dejar huecos.",
    prompt: `Actúa como tech lead revisando un PR.

Inputs:
- Descripción del PR.
- Archivos tocados.
- Riesgo (alto/medio/bajo).
- Contexto del feature.

Genera:
1) Preguntas clave a responder (propósito, impacto, tradeoffs).
2) Checklist: correctness, edge cases, seguridad, performance.
3) Lista de comentarios exactos (tipo “nit”, “blocking”, “suggestion”).
4) Pruebas mínimas a exigir (unit/integration/e2e).
5) Señales de deuda técnica y cómo mitigar.
6) “Approved if” condiciones claras.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-004",
    title: "Diseño de base de datos (schema + índices + migraciones)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Modela datos con integridad, performance y evolución en mente.",
    prompt: `Actúa como arquitecto de datos.

Inputs:
- Entidades y relaciones.
- Consultas críticas (top 10 queries).
- Volumen esperado (mes 1, mes 12).
- DB (Postgres/MySQL/Mongo).

Genera:
1) Schema propuesto (tablas/colecciones + campos).
2) Claves primarias/foráneas y constraints.
3) Índices recomendados por query crítica.
4) Estrategia de migración (pasos, online migrations si aplica).
5) Política de borrado (soft delete vs hard) y auditoría.
6) Tests de integridad y performance.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-005",
    title: "Plan de monitoreo y alertas (SRE básico, práctico)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Define qué medir y cuándo alertar sin spam.",
    prompt: `Actúa como SRE.

Inputs:
- App (web/api/worker).
- SLAs/SLOs (si existen).
- Puntos críticos (pagos, login, checkout).
- Stack (Vercel, AWS, etc).

Genera:
1) Golden signals: latencia, tráfico, errores, saturación.
2) Métricas específicas por componente (DB, cache, colas).
3) Alertas (umbral + ventana + severidad) con ejemplos.
4) Dashboards mínimos (qué gráficas).
5) Logs y trazas: qué campos incluir (traceId, userId, requestId).
6) Runbook corto por alerta (qué hacer primero).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-006",
    title: "Seguridad práctica: hardening de app web/APIs",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Checklist accionable para evitar los errores más comunes.",
    prompt: `Actúa como AppSec engineer.

Inputs:
- Tipo de app (Next.js, API, mobile).
- Auth usado (cookies/JWT/OAuth).
- Datos sensibles (qué guardas).
- Superficie pública (endpoints, uploads).

Genera:
1) Top riesgos aplicados a mi caso (IDOR, XSS, CSRF, SSRF, etc.).
2) Controles concretos por riesgo (validaciones, headers, policies).
3) Reglas de secretos (rotación, env vars, no loggear).
4) Protecciones para uploads y endpoints caros.
5) Checklist para despliegue (CSP, HSTS, rate limits).
6) Tests o herramientas (linting/DAST/SAST) recomendados.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-007",
    title: "Estrategia de caching (CDN, server, client) sin romper datos",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Acelera sin servir información vieja o privada por error.",
    prompt: `Actúa como arquitecto performance.

Inputs:
- Qué quieres cachear (HTML, API, imágenes).
- Frecuencia de cambios.
- Sensibilidad (público/privado).
- Infra (CDN, Redis, serverless).

Genera:
1) Qué cachear y dónde (CDN/server/client).
2) TTL recomendado por tipo de contenido.
3) Invalidación (cache busting, tags, purge).
4) Headers (Cache-Control, Vary) con ejemplos.
5) Riesgos (leaks, stale data) y mitigación.
6) Plan de medición (hit ratio, p95).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-008",
    title: "Plan de migración técnica (refactor grande sin apagar producción)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Divide un refactor grande en pasos seguros y deployables.",
    prompt: `Actúa como tech lead.

Inputs:
- Qué se quiere migrar (framework, DB, auth, arquitectura).
- Riesgo (alto/medio/bajo).
- Ventana de cambios.
- Equipo disponible.

Genera:
1) Enfoque (strangler fig, dual-write, feature flags).
2) Fases de migración (milestones) con entregables.
3) Señales de éxito por fase (métricas/QA).
4) Plan de rollback.
5) Comunicación y coordinación (quién valida qué).
6) Checklist final antes de apagar lo viejo.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-009",
    title: "Diseño de arquitectura para feature (ADR rápido)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Documento corto para justificar decisiones técnicas.",
    prompt: `Actúa como autor de un ADR (Architecture Decision Record).

Inputs:
- Problema.
- Opciones consideradas (A/B/C).
- Restricciones (tiempo, costo, compatibilidad).
- Requisitos no funcionales (perf, seguridad).

Genera:
1) Contexto y objetivo.
2) Opciones + pros/contras.
3) Decisión recomendada y por qué.
4) Consecuencias y riesgos.
5) Plan de implementación.
6) Cómo medir que funcionó.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-010",
    title: "Guía de logging: qué loggear y qué NO para debug real",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Logs útiles, consistentes y seguros (sin filtrar secretos).",
    prompt: `Actúa como ingeniero senior.

Inputs:
- Tipo de servicio.
- Errores comunes.
- Datos sensibles (qué no se puede loggear).
- Tooling (console, sentry, datadog, etc.).

Genera:
1) Campos estándar por log (level, requestId, userId, route, latency).
2) Formato recomendado (JSON estructurado).
3) Eventos clave a loggear (auth, pagos, errores, jobs).
4) Redacción de datos sensibles (masking).
5) Ejemplos de logs buenos y malos.
6) Checklist para logs en producción.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-011",
    title: "Testing strategy (unit/integration/e2e) realista por prioridad",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Construye una estrategia de tests con ROI alto.",
    prompt: `Actúa como QA/tech lead.

Inputs:
- Tipo de app.
- Flujos críticos (lista).
- Stack de tests (si existe).
- Tiempo disponible por semana.

Genera:
1) Pirámide de tests adaptada a mi caso.
2) Lista de 15 tests críticos (por flujo) con criterios.
3) Qué mockear y qué NO mockear.
4) Tests de contract (API) y snapshots si aplica.
5) Pipeline CI (qué corre en PR vs nightly).
6) Métricas de calidad (coverage útil, flaky rate).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-012",
    title: "Plan de CI/CD: pipeline simple pero sólido",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Automatiza builds, tests y deploy con gates claros.",
    prompt: `Actúa como DevOps.

Inputs:
- Repo (monorepo sí/no).
- Entornos (dev/staging/prod).
- Herramienta (GitHub Actions, GitLab, etc.).
- Requisitos (lint, tests, preview deploys).

Genera:
1) Pipeline recomendado paso a paso.
2) Jobs y caches (node_modules, build cache).
3) Gates para merge y release.
4) Strategy de versionado y releases.
5) Rollback plan y feature flags.
6) Checklist de seguridad (secrets, permisos).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-013",
    title: "Gestión de incidentes (postmortem sin culpas)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Estructura un postmortem con acciones reales.",
    prompt: `Actúa como incident commander.

Inputs:
- Qué pasó (síntomas).
- Duración del incidente.
- Impacto (usuarios, $).
- Línea del tiempo (eventos).

Genera:
1) Resumen ejecutivo (1 párrafo).
2) Timeline con horas/minutos.
3) Root cause vs contributing factors.
4) Qué detecciones fallaron (alertas, dashboards).
5) Acciones correctivas (owner, prioridad, fecha).
6) Mejoras de prevención y aprendizaje.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-014",
    title: "Estimación y plan de implementación (feature) con tareas claras",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Desglosa en tareas, riesgos, dependencias y entregables.",
    prompt: `Actúa como tech lead planificando.

Inputs:
- Feature description.
- Restricciones (deadline, equipo).
- Dependencias (APIs, DB, diseño).
- Requisitos de calidad (tests, performance).

Genera:
1) Breakdown en tareas (frontend/backend/infra).
2) Dependencias y bloqueos.
3) Riesgos y mitigación.
4) Estimación por tarea (t-shirt size + horas).
5) Plan de release (staging, canary, flag).
6) Definition of Done.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-015",
    title: "Guía para documentación técnica (README + runbook)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Documenta de forma útil para ti y tu equipo futuro.",
    prompt: `Actúa como technical writer.

Inputs:
- Proyecto.
- Cómo se corre local.
- Variables de entorno.
- Deploy y operaciones.

Genera:
1) Estructura README ideal (secciones).
2) Setup local paso a paso.
3) Troubleshooting común (errores típicos).
4) Runbook de producción (alertas y acciones).
5) Playbook de releases.
6) Checklist para mantener docs actualizadas.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-016",
    title: "Diseño de feature flags y experimentación (A/B) sin caos",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Lanza cambios gradualmente y mide impacto.",
    prompt: `Actúa como ingeniero de plataforma.

Inputs:
- Feature a controlar.
- Segmentación (usuarios, % tráfico).
- Métricas objetivo (conversión, errores).
- Herramienta (si existe).

Genera:
1) Tipos de flags (release/ops/experiment).
2) Naming convention y lifecycle.
3) Reglas de targeting y rollout.
4) Métricas y análisis A/B (qué medir).
5) Plan de desactivación/cleanup.
6) Riesgos comunes (flag debt) y mitigación.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-017",
    title: "Check de accesibilidad y UX técnica (web)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Mejora accesibilidad sin romper diseño ni performance.",
    prompt: `Actúa como especialista en accesibilidad web.

Inputs:
- Página/flujo.
- Componentes clave.
- Framework (React/Next).
- Problemas conocidos.

Genera:
1) Checklist WCAG práctico (keyboard, focus, labels, contrast).
2) Cambios concretos en componentes.
3) Reglas de ARIA (qué usar y qué evitar).
4) Tests (manual + herramientas) y cómo ejecutarlos.
5) Riesgos de regresión.
6) Prioridad por impacto (alto/medio/bajo).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-018",
    title: "Refactor de código legacy (pasos seguros + pruebas)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Refactoriza sin miedo: primero pruebas, luego cambios pequeños.",
    prompt: `Actúa como ingeniero senior.

Inputs:
- Archivo/área legacy.
- Síntomas (difícil de cambiar, bugs, performance).
- Tests existentes (sí/no).
- Deadline.

Genera:
1) Estrategia de refactor (caracterización, golden master).
2) Tests mínimos para actuar como red de seguridad.
3) Secuencia de cambios pequeños (commit plan).
4) Métricas para medir mejora (complejidad, cobertura, bugs).
5) Señales para detener o revertir.
6) Resultado final esperado (estructura/modularidad).`,
    thumbnail: "",
  },

  {
    id: "proti-otr-019",
    title: "Arquitectura de autenticación básica (cookies/JWT) para app web",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Implementa login simple pero seguro y mantenible.",
    prompt: `Actúa como backend/frontend security engineer.

Inputs:
- Tipo de app (SPA + API, Next, etc.)
- Tipo de login (email/password, magic link).
- Requisitos (roles, sesión persistente).
- Infra (serverless, db).

Genera:
1) Flujo de login/logout/refresh.
2) Cookies seguras (httpOnly, secure, sameSite) o JWT (tradeoffs).
3) Middleware/guards (cómo proteger rutas).
4) Manejo de sesión (expiración, revocación).
5) Protección contra ataques comunes (CSRF, brute force).
6) Tests mínimos y checklist para producción.`,
    thumbnail: "",
  },

  {
    id: "proti-otr-020",
    title: "Checklist de deploy en producción (evitar caídas)",
    area: "Programación & TI",
    category: "Otros",
    summary:
      "Lista de verificación para lanzar sin romper ventas.",
    prompt: `Actúa como release manager.

Inputs:
- Qué cambió (resumen).
- Plataforma (Vercel, AWS, etc.).
- Riesgo del cambio.
- Ventana de release.

Genera:
1) Checklist pre-deploy (env vars, migraciones, flags).
2) Validación en staging (smoke tests).
3) Plan de deploy (canary/gradual si aplica).
4) Validación post-deploy (métricas, logs, errores).
5) Plan de rollback inmediato.
6) Comunicación mínima y registro del release.`,
    thumbnail: "",
  },
];
