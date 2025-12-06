// src/lib/prompts/text/programacion-ti-desarrollo-software.js

export const textPromptsProgramacionTiDesarrolloSoftware = [
  {
    id: "proti-001",
    title: "Arquitectura de software 360° (de idea a producción)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Diseña arquitectura, stack, módulos, flujos y decisiones técnicas con trade-offs.",
    prompt: `Actúa como arquitecto de software senior.

Inputs:
- Qué problema resuelve el producto.
- Tipo de app (web, mobile, API, escritorio).
- Usuarios esperados (hoy y en 12 meses).
- Requisitos clave (latencia, seguridad, offline, integraciones).
- Restricciones (presupuesto, equipo, tiempo).

Genera:
1) Propuesta de arquitectura (diagrama descrito en texto).
2) Stack recomendado (frontend, backend, DB, cache, queue) y por qué.
3) Módulos/servicios principales y responsabilidades.
4) Diseño de datos (entidades base + relaciones).
5) Flujos críticos (login, pagos, búsquedas, etc.) paso a paso.
6) Riesgos técnicos + mitigación.
7) Checklist para pasar a producción (observabilidad, backups, CI/CD).`,
    thumbnail: "",
  },

  {
    id: "proti-002",
    title: "Plan de implementación por sprints (MVP en 14–28 días)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Convierte requisitos en backlog, historias, prioridades y entregables por sprint.",
    prompt: `Actúa como Tech Lead con mentalidad de producto.

Inputs:
- Features deseadas (lista).
- Fecha objetivo.
- Equipo (número de devs y perfiles).
- Stack preferido (si aplica).
- Riesgos conocidos.

Genera:
1) Definición de MVP (qué entra y qué se pospone).
2) Backlog en historias de usuario (mín. 15) con criterios de aceptación.
3) Roadmap por sprints (2 semanas cada uno) con entregables.
4) Dependencias técnicas y orden sugerido.
5) Plan de QA y ambientes (dev/staging/prod).
6) Métricas para validar el MVP (producto + técnico).`,
    thumbnail: "",
  },

  {
    id: "proti-003",
    title: "Diseño de API REST (estándares + endpoints + errores)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Estructura endpoints, contratos, validación, auth, paginación y códigos de error.",
    prompt: `Actúa como backend engineer senior.

Inputs:
- Dominio (e-commerce, cursos, CRM, etc.).
- Recursos principales (usuarios, pedidos, etc.).
- Tipo de auth (JWT, cookies, OAuth).
- Reglas de negocio importantes.
- Necesidad de paginación/filtros/búsqueda.

Genera:
1) Convenciones (nombres, versionado, headers).
2) Lista de endpoints (CRUD + acciones) con ejemplos de request/response JSON.
3) Esquema de errores (códigos, mensajes, campos).
4) Paginación, sorting y filtros (forma estándar).
5) Reglas de seguridad (rate limit, permisos, scopes/roles).
6) Checklist para documentación (OpenAPI/Swagger).`,
    thumbnail: "",
  },

  {
    id: "proti-004",
    title: "Diseño de base de datos (SQL) listo para construir",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Modelo relacional, normalización, índices, constraints y migraciones.",
    prompt: `Actúa como ingeniero de datos/DBA.

Inputs:
- Entidades del negocio (lista).
- Acciones frecuentes (consultas típicas).
- Volumen estimado (registros/mes).
- Requisitos (consistencia, auditoría, soft delete).
- DB preferida (Postgres/MySQL/SQLite).

Genera:
1) Diagrama entidad-relación descrito (tablas y relaciones).
2) DDL SQL base (CREATE TABLE) con llaves, constraints y tipos.
3) Índices recomendados según consultas.
4) Estrategia de migraciones (naming, rollback).
5) Consideraciones de rendimiento y escalabilidad.
6) Auditoría (created_at/updated_at, tracking de cambios).`,
    thumbnail: "",
  },

  {
    id: "proti-005",
    title: "Sistema de autenticación y roles (RBAC) sin cagadas",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Diseña login seguro, sesiones, roles/permisos, refresh, y controles en backend/frontend.",
    prompt: `Actúa como security-minded fullstack senior.

Inputs:
- Tipo de app.
- Roles necesarios (ej. admin, user, editor).
- Requisitos de sesión (cookie/JWT).
- Si habrá 2FA (sí/no).
- Restricciones legales (si aplica).

Genera:
1) Propuesta de auth (opción A y B) con pros/contras.
2) Modelo de roles/permisos (matriz).
3) Flujo de login/logout/refresh (paso a paso).
4) Reglas de seguridad: hashing, CSRF, XSS, rotación, rate-limit.
5) Estructura de middleware/guards en backend y rutas protegidas en frontend.
6) Checklist de pruebas de seguridad para auth.`,
    thumbnail: "",
  },

  {
    id: "proti-006",
    title: "Code review brutal (checklist + comentarios tipo senior)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Checklist de revisión y ejemplos de comentarios que elevan calidad sin ser mamón.",
    prompt: `Actúa como revisor senior en un equipo de alto rendimiento.

Inputs:
- Lenguaje y framework.
- Tipo de cambio (feature, bugfix, refactor).
- Restricciones de performance/seguridad.
- Estándares del repo (lint, tests).
- Fragmento de código o descripción del PR.

Genera:
1) Checklist: correctitud, diseño, legibilidad, tests, seguridad, performance.
2) 10 comentarios ejemplo (claros, accionables, sin humillar).
3) Señales rojas (anti-patrones) que deben bloquear el merge.
4) Recomendaciones de refactor con pasos pequeños.
5) Cómo medir que el PR mejoró el sistema (métricas).`,
    thumbnail: "",
  },

  {
    id: "proti-007",
    title: "Refactor planificado (de spaghetti a modular) con pasos seguros",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Plan de refactor sin romper producción: incremental, con tests y estrategia de rollout.",
    prompt: `Actúa como Tech Lead especialista en refactors grandes.

Inputs:
- Qué parte está fea (carpeta/archivo/módulo).
- Síntomas (bugs, difícil de cambiar, atado a todo).
- Riesgo (alto/medio/bajo).
- Cobertura de tests actual.
- Deadline.

Genera:
1) Diagnóstico: qué duele y por qué.
2) Estrategia ideal: strangler pattern / feature flags / módulos.
3) Plan en 5–10 pasos pequeños (cada uno mergeable).
4) Qué tests crear primero (unit/integration/e2e) y en qué orden.
5) Estrategia de rollout y rollback.
6) Definition of Done para cerrar el refactor.`,
    thumbnail: "",
  },

  {
    id: "proti-008",
    title: "Debugging guiado (encuentra el bug sin perder la cabeza)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Protocolo de debugging: hipótesis, reproducción, logs, bisect y verificación.",
    prompt: `Actúa como ingeniero senior resolviendo incidentes.

Inputs:
- Síntoma exacto.
- Dónde ocurre (entorno, ruta, feature).
- Logs/stacktrace (si hay).
- Cambios recientes.
- Frecuencia (siempre/intermitente).

Genera:
1) 10 hipótesis ordenadas por probabilidad.
2) Cómo reproducir de forma confiable (pasos).
3) Qué logs/metrics agregar y dónde.
4) Plan de aislamiento: reducir variables, bisect, toggles.
5) Cómo validar el fix y evitar regresiones.
6) Postmortem mini: causa raíz + acción preventiva.`,
    thumbnail: "",
  },

  {
    id: "proti-009",
    title: "Testing strategy completa (unit + integration + e2e) para tu app",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Define pirámide de pruebas, qué testear, cómo organizar y qué automatizar.",
    prompt: `Actúa como QA lead + software engineer.

Inputs:
- Tipo de app y stack.
- Riesgos principales (pagos, auth, datos).
- Equipo y tiempo.
- Infra (CI, staging).
- Herramientas preferidas.

Genera:
1) Pirámide de tests y distribución recomendada (%).
2) Lista de pruebas críticas (mín. 20) por tipo.
3) Convenciones: naming, estructura de carpetas, fixtures.
4) Estrategia de mocks y test data.
5) CI pipeline recomendado (lint, tests, e2e, cobertura).
6) Métricas: cobertura útil, flakiness, tiempo total.`,
    thumbnail: "",
  },

  {
    id: "proti-010",
    title: "CI/CD para deploys sin miedo (pipeline + gates + rollback)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Diseña un pipeline moderno con checks, previews, releases y rollback.",
    prompt: `Actúa como DevOps/Platform engineer.

Inputs:
- Repo (monorepo/multirepo).
- Hosting (Vercel, AWS, etc.).
- Environments (dev/staging/prod).
- Necesidad de migraciones.
- Tolerancia al riesgo (alta/baja).

Genera:
1) Pipeline ideal (etapas y orden).
2) Gates de calidad (lint, tests, coverage, security scan).
3) Estrategia de deploy (blue/green, canary, feature flags).
4) Manejo de migraciones DB seguro.
5) Rollback y runbook rápido.
6) Alertas y observabilidad mínima para releases.`,
    thumbnail: "",
  },

  {
    id: "proti-011",
    title: "Documentación técnica que sí se usa (README + ADRs + runbooks)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Estructura docs útiles: onboarding, decisiones, operación y troubleshooting.",
    prompt: `Actúa como Tech Writer + Staff Engineer.

Inputs:
- Tipo de proyecto.
- Equipo (nuevos devs sí/no).
- Áreas problemáticas frecuentes.
- Cómo se despliega hoy.
- Incidentes comunes.

Genera:
1) Índice de documentación mínima viable.
2) Template de README (secciones exactas).
3) Template de ADR (Architecture Decision Record).
4) Runbook para 3 incidentes típicos (pasos + comandos).
5) Checklist para mantener docs actualizadas.`,
    thumbnail: "",
  },

  {
    id: "proti-012",
    title: "Estimación técnica realista (sin prometer pendejadas)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Cómo estimar features con riesgos, supuestos, buffers y alcance claro.",
    prompt: `Actúa como Tech Lead responsable de planificación.

Inputs:
- Feature a construir.
- Dependencias externas.
- Complejidad percibida (baja/media/alta).
- Equipo y capacidad semanal.
- Fecha objetivo (si existe).

Genera:
1) Desglose por componentes (frontend, backend, data, QA, DevOps).
2) Supuestos explícitos (mín. 10).
3) Riesgos y “unknowns” con plan de descubrimiento (spikes).
4) Estimación por rangos (optimista/realista/pesimista).
5) Plan de recorte de alcance si se complica.
6) Cómo comunicar la estimación a negocio sin conflicto.`,
    thumbnail: "",
  },

  {
    id: "proti-013",
    title: "Migración de legacy a moderno (sin tumbar el sistema)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Plan gradual: delimitar, envolver, reemplazar, medir y apagar.",
    prompt: `Actúa como Staff Engineer especializado en migraciones.

Inputs:
- Sistema actual (stack).
- Problemas (performance, deuda, costos).
- Qué parte migrar primero.
- Restricciones (downtime cero, compliance).
- Equipo y plazo.

Genera:
1) Estrategia recomendada (strangler, rewrite parcial, etc.).
2) Plan por fases con hitos claros.
3) Qué medir en cada fase (métricas técnicas + de negocio).
4) Riesgos típicos y mitigación.
5) Plan de compatibilidad (APIs, datos, auth).
6) Criterios para apagar el legacy.`,
    thumbnail: "",
  },

  {
    id: "proti-014",
    title: "Búsqueda y performance: cómo optimizar consultas lentas",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Diagnóstico de endpoints lentos: profiling, índices, cache, batching y N+1.",
    prompt: `Actúa como ingeniero de performance.

Inputs:
- Endpoint o query lenta.
- DB y ORM (si aplica).
- Volumen (registros).
- SLA deseado (ms/seg).
- Observaciones (picos, intermitencia).

Genera:
1) Checklist de diagnosis (profiling, logs, explain analyze).
2) Hipótesis comunes (N+1, falta de índice, overfetching).
3) Plan de optimización en pasos (rápido -> profundo).
4) Estrategia de caching (qué, dónde, invalidación).
5) Cómo validar mejora (benchmarks antes/después).
6) Riesgos de optimizar mal y cómo evitarlos.`,
    thumbnail: "",
  },

  {
    id: "proti-015",
    title: "Diseño de sistema de logs y trazas (observabilidad mínima)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Define logs útiles, correlation IDs, métricas, tracing, alertas y dashboards.",
    prompt: `Actúa como SRE.

Inputs:
- Tipo de app.
- Infra (serverless, containers, etc.).
- Incidentes frecuentes.
- Herramientas (Sentry, Datadog, OpenTelemetry, etc).
- Qué tan crítico es (bajo/alto).

Genera:
1) Qué loggear (campos obligatorios) y qué NO (PII).
2) Correlation IDs y propagación (request -> servicios).
3) Métricas mínimas: latencia, errores, throughput, saturation.
4) Trazas: qué spans y cómo nombrarlos.
5) Alertas con umbrales sensatos (evitar ruido).
6) Dashboard mínimo (5 gráficos esenciales).`,
    thumbnail: "",
  },

  {
    id: "proti-016",
    title: "Seguridad básica en apps web (checklist pragmático)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Checklist accionable de seguridad: headers, auth, input validation, secrets y permisos.",
    prompt: `Actúa como AppSec pragmático.

Inputs:
- Stack (frontend/backend).
- Tipo de auth.
- Si almaceno datos sensibles (sí/no).
- Hosting.
- Integraciones externas.

Genera:
1) Checklist de 25 puntos (prioridad alta/media/baja).
2) Controles en backend (validación, sanitización, rate limit).
3) Controles en frontend (XSS, CSP, safe rendering).
4) Gestión de secretos (env vars, rotación, access).
5) CORS/CSRF/cookies: configuración recomendada.
6) Cómo hacer una revisión rápida antes de producción.`,
    thumbnail: "",
  },

  {
    id: "proti-017",
    title: "Optimización de frontend: Core Web Vitals (plan de mejora)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Plan para mejorar LCP/CLS/INP con acciones concretas y medición.",
    prompt: `Actúa como performance engineer frontend.

Inputs:
- Framework (Next/React/Vue).
- Páginas lentas (lista).
- Imágenes/videos (sí/no).
- Tamaño de bundle (si lo sé).
- Hosting/CDN.

Genera:
1) Diagnóstico probable por métrica (LCP/CLS/INP).
2) Acciones concretas para cada métrica (prioridad 1-2-3).
3) Estrategia de imágenes (formatos, responsive, lazy, placeholders).
4) Estrategia de JS (code splitting, dynamic import, tree-shaking).
5) Cómo medir: herramientas y ritual (before/after).
6) Checklist final para release.`,
    thumbnail: "",
  },

  {
    id: "proti-018",
    title: "Integración de pagos (Stripe/PayPal) con seguridad y contabilidad",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Diseña flujos de checkout, webhooks, estados, reintentos y conciliación.",
    prompt: `Actúa como ingeniero fullstack senior.

Inputs:
- Proveedor (Stripe/PayPal).
- Tipo de cobro (one-time/subscription).
- Monedas y países.
- Si hay reembolsos/cupones.
- Modelo de producto (curso, SaaS, etc).

Genera:
1) Flujo de pago end-to-end (front -> backend -> proveedor -> webhook).
2) Modelo de estados (pending/paid/failed/refunded) y reglas.
3) Estructura de webhooks (verificación, idempotencia, reintentos).
4) Tabla/colección recomendada para registrar transacciones.
5) Manejo de edge cases (doble webhook, timeout, chargeback).
6) Checklist de pruebas (sandbox) antes de production.`,
    thumbnail: "",
  },

  {
    id: "proti-019",
    title: "Generación de backlog técnico (deuda) priorizado por impacto",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Convierte deuda técnica en tickets accionables con impacto, esfuerzo y riesgo.",
    prompt: `Actúa como Tech Lead que quiere pagar deuda sin frenar el negocio.

Inputs:
- Lista de dolores técnicos.
- Incidentes recientes.
- Áreas del código con más cambios.
- Métricas disponibles (si hay).
- Capacidad mensual para deuda (%).

Genera:
1) 20 tickets de deuda técnica (formato: título, descripción, DoD).
2) Priorización (impacto vs esfuerzo) y top 5 recomendados.
3) Qué deuda NO pagar aún (y por qué).
4) Plan mensual (2–4 semanas) con entregables.
5) Cómo medir que la deuda pagada mejoró el sistema.`,
    thumbnail: "",
  },

  {
    id: "proti-020",
    title: "Diseño de feature flags (activación gradual y experimentos)",
    area: "Programación & TI",
    category: "Desarrollo de software",
    summary:
      "Implementa flags para reducir riesgo en releases y hacer A/B testing básico.",
    prompt: `Actúa como Staff Engineer.

Inputs:
- Feature a lanzar.
- Riesgo (alto/medio/bajo).
- Usuarios (segmentos).
- Infra (si serverless o backend propio).
- Necesidad de A/B test (sí/no).

Genera:
1) Tipos de flags necesarios (release, ops, experiment).
2) Arquitectura de flags (dónde viven, cómo se evalúan).
3) Estrategia de rollout (0%->1%->10%->50%->100%).
4) Monitoreo durante rollout (métricas y alertas).
5) Plan de rollback inmediato.
6) Limpieza de flags (deuda) y reglas para retirarlas.`,
    thumbnail: "",
  },
];
