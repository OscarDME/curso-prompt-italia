// src/lib/prompts/text/programacion-ti-debugging-troubleshooting.js

export const textPromptsProgramacionTiDebuggingTroubleshooting = [
  {
    id: "proti-debug-001",
    title: "Diagnóstico rápido: problema → hipótesis → pruebas",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Estructura un plan de investigación para aislar la causa raíz sin perder tiempo.",
    prompt: `Actúa como ingeniero senior de soporte/producción.

Inputs:
- Síntoma exacto (error, mensaje, comportamiento).
- Cuándo empezó (cambio reciente).
- Entorno (local/staging/prod).
- Impacto (usuarios afectados, %).
- Logs disponibles (sí/no) + fragmentos.

Genera:
1) Lista priorizada de hipótesis (top 10) con probabilidad.
2) Pruebas mínimas para confirmar/descartar cada hipótesis.
3) Señales/telemetría que necesito (logs, métricas, traces).
4) Plan de aislamiento por capas (cliente → red → backend → DB).
5) “Fast mitigation” seguro (feature flag, rollback, rate limit).
6) Causa raíz esperada + fix recomendado.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-002",
    title: "Triaging de errores 500/502/503/504 (web)",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Guía para diferenciar error de app vs gateway vs upstream vs timeouts.",
    prompt: `Actúa como SRE.

Inputs:
- Código(s) de error.
- Plataforma (Vercel, Nginx, Cloudflare, etc.).
- Rutas afectadas.
- Latencia promedio y p95/p99.
- Últimos despliegues/cambios.

Genera:
1) Significado probable de cada código en este contexto.
2) Checklist de verificación (gateway, DNS, TLS, upstream, app).
3) Cómo reproducir y capturar evidencia (curl, headers, timing).
4) Señales en logs para cada causa común.
5) Mitigaciones rápidas (caching, rate limit, rollback).
6) Fix definitivo (qué cambiar en código/infra).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-003",
    title: "Debugging de problemas de cookies/sesión/autenticación",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Aísla fallos por SameSite, path, domain, expiración, SSR/CSR.",
    prompt: `Actúa como experto en auth web.

Inputs:
- Cookie name(s).
- Dominio(s) y subdominios.
- Flujo de login (pasos).
- Navegador(s) afectados.
- Entorno (prod/staging/local).
- ¿Middleware? ¿SSR?

Genera:
1) Checklist de cookie attributes (Domain/Path/SameSite/Secure/HttpOnly).
2) Pruebas para confirmar qué se rompe (DevTools: Application/Network).
3) Fallos típicos por ambiente (http vs https, localhost, subdominios).
4) Solución recomendada con ejemplos (sin TypeScript).
5) Plan de validación cross-browser.
6) Riesgos de seguridad y cómo mitigarlos.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-004",
    title: "Problemas de performance: perfilado y optimización incremental",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Encuentra el cuello de botella real antes de ‘optimizar a ciegas’.",
    prompt: `Actúa como performance engineer.

Inputs:
- Endpoint/página lenta.
- Métricas (TTFB, LCP, INP, p95).
- Carga concurrente.
- Stack (Next.js/Node/DB).
- Observabilidad disponible (APM sí/no).

Genera:
1) Árbol de decisión para identificar si es CPU, IO, DB o red.
2) Plan de medición (perfilado, logs de tiempos, traces).
3) Top 10 causas comunes en este stack.
4) Experimentos (A/B) para confirmar hipótesis.
5) Quick wins (caching, memoization, indexes) con prioridades.
6) Plan de seguimiento (metas y alertas).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-005",
    title: "Debugging de builds/deploys que fallan (CI/CD)",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Aísla errores de build, dependencias, env vars y diferencias de entorno.",
    prompt: `Actúa como CI/CD engineer.

Inputs:
- Plataforma CI (GitHub Actions, Vercel, etc.).
- Log del error (fragmento).
- Último commit/despliegue exitoso.
- Cambios recientes en dependencias.
- Variables de entorno relevantes.

Genera:
1) Clasificación del fallo (dependencias, lint, types, env, permisos, recursos).
2) Pasos para reproducir local (misma versión node, lockfile, clean install).
3) Checklist de lockfiles y monorepo roots.
4) Solución probable + fix en configuración.
5) Plan para evitarlo a futuro (pin versions, caching, checks).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-006",
    title: "Errores intermitentes: flakiness y condiciones de carrera",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Trata lo raro: bugs que solo pasan a veces.",
    prompt: `Actúa como ingeniero senior.

Inputs:
- Qué falla exactamente.
- Frecuencia (1/10, 1/100).
- Hardware/OS.
- Concurrencia/hilos.
- Dependencias externas (API, DB).

Genera:
1) Lista de causas típicas (race conditions, timeouts, nondeterminism).
2) Instrumentación para capturar evidencia (IDs, spans, timestamps).
3) Estrategia de reproducción (stress test, introducir delays, toggles).
4) Fix patterns (locks, idempotency, retries, timeouts > p99).
5) Validación (cómo asegurar que ya no pasa).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-007",
    title: "Debugging de Next.js: middleware, rutas y assets estáticos",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Aísla problemas de matcher, caching, /public, _next y redirects.",
    prompt: `Actúa como experto en Next.js.

Inputs:
- Versión de Next.js.
- Estructura de rutas (app/pages).
- middleware.js actual.
- Rutas afectadas.
- Logs (si hay) / comportamiento observado.

Genera:
1) Checklist de exclusiones correctas (_next, api, archivos estáticos).
2) Diagnóstico del matcher (errores comunes y cómo simplificarlo).
3) Cómo validar qué rutas pasan por el middleware.
4) Recomendación de matcher simple y seguro (JS).
5) Plan para separar auth vs assets (mejor práctica).
6) Errores típicos en Vercel (y cómo verlos).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-008",
    title: "Problemas de CORS: bloqueos entre frontend y backend",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Soluciona preflight, headers, credentials y origins permitidos.",
    prompt: `Actúa como experto en HTTP/CORS.

Inputs:
- Origen del frontend.
- URL del backend.
- Método(s) (GET/POST/etc.).
- Si usa cookies/credentials.
- Headers personalizados.

Genera:
1) Explicación exacta de por qué falla (preflight vs simple request).
2) Headers correctos (Access-Control-Allow-*) según caso.
3) Config para credentials y SameSite.
4) Lista de pruebas con curl (incluye OPTIONS).
5) Soluciones seguras (no “*” con credentials).
6) Checklist para producción (proxies/CDN).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-009",
    title: "Errores de base de datos: locks, deadlocks, timeouts",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Aísla contención y queries lentas sin adivinar.",
    prompt: `Actúa como DBA/engineer.

Inputs:
- DB (Postgres/MySQL/etc.).
- Query o endpoint involucrado.
- Síntoma (timeout, deadlock, slow).
- Carga concurrente.
- Índices existentes (si se sabe).

Genera:
1) Diagnóstico probable (locks, missing index, N+1, transacciones largas).
2) Qué medir (EXPLAIN, slow query log, lock tables).
3) Pasos para reproducir con carga.
4) Recomendaciones (índices, reescritura, aislamiento).
5) Mitigación rápida (limitar, cache, timeouts).
6) Fix definitivo + validación.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-010",
    title: "Debugging de memoria: leaks y OOM (Node)",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Detecta fugas de memoria y picos que revientan el proceso.",
    prompt: `Actúa como performance engineer de Node.js.

Inputs:
- Síntoma (OOM, GC thrash, slow).
- Tráfico/volumen.
- Endpoints sospechosos.
- Cambios recientes.
- Ambiente (serverless o server).

Genera:
1) Señales típicas de leak vs picos legítimos.
2) Estrategia de profiling (heap snapshots, timelines).
3) Hipótesis comunes (caches infinitas, listeners, closures).
4) Fix patterns (LRU, límites, streaming).
5) Checklist para prevenir (budgets, alertas).
6) Plan para validar en staging con carga.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-011",
    title: "Incidente en producción: runbook de 30 minutos",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Qué hacer cuando TODO arde: estabilizar primero, aprender después.",
    prompt: `Actúa como Incident Commander.

Inputs:
- Qué se rompió (síntoma).
- Impacto (ventas, usuarios, %).
- Último cambio (deploy/config).
- Acceso (logs/metrics sí/no).
- SLA (urgencia).

Genera:
1) Plan 0–5 min: contención y comunicación.
2) Plan 5–15 min: aislamiento rápido.
3) Plan 15–30 min: mitigación (rollback/flags/caching).
4) Checklist de evidencia a capturar para RCA.
5) Comunicación a stakeholders (mensaje breve).
6) Postmortem template (acciones y owners).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-012",
    title: "Debugging de DNS/HTTPS/TLS: ‘no carga’, ‘cert error’, ‘NXDOMAIN’",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Diagnostica fallos de dominio/certificado sin volverte loco.",
    prompt: `Actúa como network/devops engineer.

Inputs:
- Dominio.
- Proveedor DNS.
- Cert manager (Vercel/Cloudflare/etc).
- Error exacto del navegador.
- Cambios recientes (DNS, proxy, redirect).

Genera:
1) Lista de causas probables según error.
2) Pasos de verificación (dig/nslookup, curl -I, SSL check).
3) Reglas de propagación y TTL (qué esperar).
4) Fix recomendado por escenario.
5) Checklist de configuración segura (HSTS, redirects).
6) Validación final (navegadores/ubicaciones).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-013",
    title: "Debugging de permisos: 401/403, roles y ACLs",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Aísla si el bloqueo es auth, autorización o configuración de ruta.",
    prompt: `Actúa como backend engineer.

Inputs:
- Endpoint bloqueado.
- Auth method (cookie/JWT/session).
- Roles esperados.
- Logs de autorización.
- Middleware/guards existentes.

Genera:
1) Diferencia exacta entre 401 vs 403 en tu caso.
2) Checklist de verificación (token, claims, expiración, roles).
3) Pruebas para confirmar permisos (requests con distintos usuarios).
4) Fix recomendado (policy/guard) con ejemplos de lógica.
5) Plan de regresión (tests de permisos).
6) Riesgos de seguridad al “abrir de más”.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-014",
    title: "Debugging de front-end: estado, hydration y errores en consola",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Encuentra por qué tu UI se rompe: hydration mismatch, state bugs, race.",
    prompt: `Actúa como frontend senior.

Inputs:
- Framework (React/Next).
- Error exacto en consola.
- Componente/ruta afectada.
- Reproducción (pasos).
- Datos que llegan (API).

Genera:
1) Hipótesis top según el error.
2) Qué inspeccionar (React DevTools, Network, Profiler).
3) Estrategia de aislamiento (comentando partes, feature flags).
4) Fix recomendado (patterns correctos).
5) Tests mínimos (unit/e2e) para que no regrese.
6) Checklist de performance y UX tras el fix.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-015",
    title: "Debugging de cachés: por qué veo datos viejos",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Detecta si el cache es navegador, CDN, app o DB.",
    prompt: `Actúa como engineer de plataformas.

Inputs:
- URL/endpoint.
- Dónde está desplegado (CDN, Vercel, proxy).
- Headers actuales (Cache-Control/ETag).
- Frecuencia de cambios del dato.
- Comportamiento observado (qué tan viejo).

Genera:
1) Árbol de decisión para ubicar el cache culpable.
2) Qué headers revisar y cómo interpretarlos.
3) Experimentos (bypass cache, query param, purge).
4) Fix recomendado (cache-control, revalidation).
5) Riesgo de desactivar cache (costos/latencia).
6) Plan para “cache correcto” (público/privado).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-016",
    title: "Debugging de colas/jobs: duplicados, pérdida, retrasos",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Cuando los jobs se ejecutan 2 veces… o nunca.",
    prompt: `Actúa como backend/SRE.

Inputs:
- Sistema de cola.
- Síntoma (duplicados, atraso, pérdida).
- Tasa de jobs.
- Retries configurados.
- Idempotency keys (sí/no).

Genera:
1) Causas probables por síntoma.
2) Qué métricas revisar (lag, retries, DLQ, throughput).
3) Pruebas para confirmar (simular crash, retry storm).
4) Fix patterns (locks, idempotency, visibility timeout).
5) Mitigación rápida.
6) Checklist para evitarlo en el futuro.`,
    thumbnail: "",
  },

  {
    id: "proti-debug-017",
    title: "Debugging de dependencias: conflictos, versiones, lockfiles",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Resuelve ‘works on my machine’ por versiones y lockfiles.",
    prompt: `Actúa como maintainer senior.

Inputs:
- Stack (npm/yarn/pnpm).
- Error exacto.
- Node version local y en CI.
- Lockfile(s) presentes.
- Monorepo (sí/no).

Genera:
1) Diagnóstico probable (resolución, peer deps, lock mismatch).
2) Pasos para limpiar y reproducir (rm -rf node_modules, cache).
3) Estrategia de pinning (engines, packageManager).
4) Recomendar un solo lockfile y root correcto.
5) Fix recomendado con comandos.
6) Checklist para que no vuelva (CI checks).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-018",
    title: "Debugging de archivos estáticos: 404, rutas y extensiones",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Resuelve assets que no cargan por rutas, case-sensitivity y build.",
    prompt: `Actúa como experto web.

Inputs:
- Ruta del asset (ej: /images/x.png).
- Dónde vive (public/ o importado).
- OS local (Windows/macOS/Linux).
- Hosting (Vercel, etc.).
- Error (404/403/mime).

Genera:
1) Checklist de causas comunes (case mismatch, path, basePath, trailing slash).
2) Cómo validar en build output.
3) Diferencia entre servir desde /public vs bundling.
4) Fix recomendado (estructura y referencias).
5) Plan para migrar a formatos óptimos (webp/avif) sin romper rutas.
6) Pruebas finales (incognito, headers, cache).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-019",
    title: "Debugging de env vars: ‘undefined’ en prod pero no en local",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Detecta variables mal nombradas, scopes, build-time vs runtime.",
    prompt: `Actúa como DevOps/Next expert.

Inputs:
- Nombre(s) de env vars.
- Dónde se usan (server/client).
- Plataforma deploy.
- .env local vs prod.
- Error observado.

Genera:
1) Checklist (prefijos públicos, build-time, runtime).
2) Cómo imprimir/validar sin filtrar secretos.
3) Fix recomendado por escenario (server-only vs client).
4) Plan de validación post-deploy.
5) Buenas prácticas (schema validation, defaults).
6) Riesgos de seguridad (no exponer secretos).`,
    thumbnail: "",
  },

  {
    id: "proti-debug-020",
    title: "Root Cause Analysis (RCA) profesional de un bug/incidente",
    area: "Programación & TI",
    category: "Debugging & Troubleshooting",
    summary:
      "Documenta la causa raíz y acciones para que no se repita.",
    prompt: `Actúa como líder técnico escribiendo un RCA.

Inputs:
- Qué pasó (síntoma).
- Línea de tiempo (eventos con hora).
- Impacto (usuarios/dinero).
- Causa inmediata encontrada.
- Qué lo permitió (fallas sistémicas).

Genera:
1) Resumen ejecutivo (3–5 bullets).
2) Línea de tiempo clara.
3) Causa raíz (5 whys) y factores contribuyentes.
4) Qué detectó y qué no detectó (gaps de monitoreo).
5) Acciones correctivas (prioridad, owner, fecha).
6) Lecciones aprendidas y cambios de proceso.`,
    thumbnail: "",
  },
];
