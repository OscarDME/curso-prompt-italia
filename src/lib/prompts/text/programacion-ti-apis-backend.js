// src/lib/prompts/text/programacion-ti-apis-backend.js

export const textPromptsProgramacionTiApisBackend = [
  {
    id: "proti-api-001",
    title: "Diseño de API REST profesional (recursos, rutas y contratos)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Define endpoints, recursos, naming, paginación, errores y versionado como backend senior.",
    prompt: `Actúa como arquitecto backend.

Inputs:
- Producto/feature.
- Entidades principales (ej: usuarios, pedidos).
- Operaciones necesarias (CRUD + acciones).
- Requisitos (auth, roles, rate limits, webhooks).
- SLAs (latencia/volumen).

Genera:
1) Modelo de recursos (lista de entidades + relaciones).
2) Endpoints REST (GET/POST/PATCH/DELETE) con rutas y ejemplos.
3) Convención de respuestas (status codes, envelope, errores).
4) Paginación (cursor vs offset) y filtros/ordenamiento.
5) Versionado (URI/headers) + estrategia de deprecación.
6) Checklist de seguridad y observabilidad (logs, trace id).`,
    thumbnail: "",
  },

  {
    id: "proti-api-002",
    title: "Contrato OpenAPI/Swagger listo para documentar",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Crea una especificación clara con schemas, ejemplos y códigos de error.",
    prompt: `Actúa como experto en APIs.

Inputs:
- Lista de endpoints existentes o deseados.
- Auth (Bearer/cookies/API Key).
- Modelos de datos (campos, tipos).
- Errores comunes.

Genera:
1) Esquema OpenAPI (estructura recomendada).
2) Component schemas (DTOs) con validaciones.
3) Ejemplos de requests/responses por endpoint.
4) Códigos de error estandarizados (problem+json o similar).
5) Reglas de compatibilidad y cambios breaking.
6) Checklist para QA de la documentación.`,
    thumbnail: "",
  },

  {
    id: "proti-api-003",
    title: "Diseño de endpoints idempotentes (pagos, órdenes, webhooks)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Evita duplicados con idempotency keys, locks y dedupe.",
    prompt: `Actúa como backend senior.

Inputs:
- Acción crítica (ej: crear pago, crear orden).
- Origen (cliente, webhook, job).
- Riesgo (duplicados, reintentos).
- DB disponible.

Genera:
1) Estrategia de idempotencia (key, TTL, scope).
2) Esquema/tabla para dedupe con índices.
3) Flujo request → verificación → ejecución → respuesta.
4) Manejo de retries (client/server) y timeouts.
5) Consideraciones de concurrencia (locks vs upserts).
6) Tests que prueben idempotencia (casos límite).`,
    thumbnail: "",
  },

  {
    id: "proti-api-004",
    title: "Autenticación y autorización para APIs (roles y scopes)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Define modelo de permisos, claims, scopes y políticas de acceso.",
    prompt: `Actúa como security-minded backend engineer.

Inputs:
- Tipos de usuarios (admin, usuario, staff).
- Recursos protegidos.
- Estrategia auth (JWT/cookie/session).
- Necesidad de multi-tenant (sí/no).

Genera:
1) Modelo de roles/scopes (matriz de permisos).
2) Claims y estructura de token/sesión.
3) Middleware/guards (pseudocódigo).
4) Estrategia de refresco/expiración.
5) Prácticas seguras (rotación, revocación, CSRF si aplica).
6) Tests de autorización (permit/deny).`,
    thumbnail: "",
  },

  {
    id: "proti-api-005",
    title: "Diseño de paginación, búsqueda y filtros (API)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Define query params y performance para listas grandes.",
    prompt: `Actúa como backend engineer enfocado en escalabilidad.

Inputs:
- Recurso a listar.
- Tamaño estimado (n).
- Campos filtrables/ordenables.
- Requisitos de búsqueda (texto, exact match).

Genera:
1) Diseño de query params (filters, sort, include).
2) Cursor pagination (preferida) con ejemplo completo.
3) Estrategia para búsqueda (DB full-text vs servicio externo).
4) Reglas anti-abuso (limits, max page size, rate limiting).
5) Índices recomendados en DB.
6) Tests y casos borde (cambios mientras paginas).`,
    thumbnail: "",
  },

  {
    id: "proti-api-006",
    title: "Estrategia de errores consistente (códigos, mensajes, trazabilidad)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Estandariza errores para clientes + debugging fácil.",
    prompt: `Actúa como backend lead.

Inputs:
- Framework/lenguaje.
- Consumidor (frontend propio, terceros).
- Categorías de error típicas.

Genera:
1) Formato de error (estructura JSON estándar).
2) Mapeo error → status code (tabla).
3) Reglas de mensajes (user-safe vs internal).
4) Trace IDs y correlación de logs.
5) Ejemplos de errores para 400/401/403/404/409/422/429/500.
6) Guía para clientes (retries, handling).`,
    thumbnail: "",
  },

  {
    id: "proti-api-007",
    title: "Rate limiting y anti-abuso (por IP, usuario, token)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Protege tu API sin romper a usuarios reales.",
    prompt: `Actúa como SRE/back-end security.

Inputs:
- Tipo de API (pública/privada).
- Tráfico esperado (RPS).
- Operaciones caras (cuáles).
- Infra (serverless/servers, Redis sí/no).

Genera:
1) Política de rate limits por ruta (tabla).
2) Algoritmo recomendado (token bucket/leaky bucket/fixed window).
3) Respuestas 429 (headers, retry-after).
4) Excepciones (usuarios premium, allowlist).
5) Protección extra (WAF, captcha en endpoints críticos).
6) Métricas y alertas para tuning.`,
    thumbnail: "",
  },

  {
    id: "proti-api-008",
    title: "Webhooks: diseño, seguridad y reintentos",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Implementa webhooks robustos con firmas y re-delivery.",
    prompt: `Actúa como arquitecto de integraciones.

Inputs:
- Eventos a emitir (lista).
- Payload esperado.
- Destinatarios (terceros, tu frontend, partners).
- Requisitos de seguridad.

Genera:
1) Lista de eventos y naming conventions.
2) Esquema de payload + ejemplos.
3) Firma/verificación (HMAC) y rotación de secretos.
4) Reintentos y backoff + DLQ.
5) Idempotencia en recepción.
6) Panel mínimo de monitoreo (logs, entregas, fallos).`,
    thumbnail: "",
  },

  {
    id: "proti-api-009",
    title: "Diseño de APIs para archivos (uploads, streaming, downloads)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Subidas seguras y rápidas con URLs firmadas y validación.",
    prompt: `Actúa como backend engineer.

Inputs:
- Tipo de archivo (imágenes, video, pdf).
- Tamaño promedio y máximo.
- Almacenamiento (S3-like, local, etc.).
- Necesidad de CDN.

Genera:
1) Flujo recomendado (direct-to-storage vs through backend).
2) Endpoints necesarios (init upload, finalize, list, delete).
3) Validaciones (mime, size, antivirus si aplica).
4) Permisos (quién puede ver/descargar).
5) Estrategia de CDN/cache.
6) Riesgos y mitigaciones (hotlinking, abuse).`,
    thumbnail: "",
  },

  {
    id: "proti-api-010",
    title: "N+1 y diseño de endpoints eficientes (include/expand)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Evita llamadas de más con includes y endpoints agregados.",
    prompt: `Actúa como staff backend engineer.

Inputs:
- UI o caso de uso (qué pantalla).
- Datos requeridos (lista).
- Latencia objetivo.
- Disponibilidad de joins/ORM.

Genera:
1) Diagnóstico si es N+1 (cómo detectarlo).
2) Opciones de diseño (include, expand, batch, GraphQL).
3) Endpoint recomendado con respuesta ejemplo.
4) Estrategia de caching (server y client).
5) Query optimizada (pseudocódigo + índices sugeridos).
6) Métricas para validar la mejora.`,
    thumbnail: "",
  },

  {
    id: "proti-api-011",
    title: "Estrategia de concurrencia y consistencia (optimistic locking)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Evita pisarse cambios con ETags, version fields o locks.",
    prompt: `Actúa como experto en consistencia.

Inputs:
- Recurso que se edita.
- Riesgo de ediciones simultáneas.
- DB (Postgres/MySQL/etc).
- Requisitos de UX (mostrar conflicto sí/no).

Genera:
1) Estrategia recomendada (ETag/If-Match vs version field).
2) Cambios en esquema (si aplica).
3) Flujo PATCH con manejo de 409/412.
4) UIs/Clientes: cómo resolver conflictos.
5) Tests de concurrencia.
6) Tradeoffs y cuándo usar locks pesimistas.`,
    thumbnail: "",
  },

  {
    id: "proti-api-012",
    title: "Diseño de background jobs desde la API (async patterns)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Convierte operaciones largas en jobs con estados claros.",
    prompt: `Actúa como backend lead.

Inputs:
- Operación larga (ej: exportar, procesar video).
- Tiempo estimado.
- Necesidad de progreso (sí/no).
- Infra de colas (sí/no).

Genera:
1) Endpoint para iniciar job y respuesta inmediata (202).
2) Modelo de estado (queued/running/succeeded/failed).
3) Endpoint para consultar estado y obtener resultado.
4) Reintentos, idempotencia y dedupe.
5) UX recomendada en frontend.
6) Observabilidad (correlation ids, métricas).`,
    thumbnail: "",
  },

  {
    id: "proti-api-013",
    title: "Migración de API sin romper clientes (backward compatible)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Plan de cambios breaking con deprecación y monitoreo.",
    prompt: `Actúa como API product owner.

Inputs:
- Cambio deseado (breaking o no).
- Clientes existentes (cuántos, quiénes).
- Ventana de migración.

Genera:
1) Clasificación del cambio (breaking/non-breaking).
2) Estrategia de versionado (v1/v2 o headers).
3) Plan de rollout gradual.
4) Comunicación a clientes (mensaje + timeline).
5) Telemetría para detectar clientes rezagados.
6) Checklist final para retirar v1.`,
    thumbnail: "",
  },

  {
    id: "proti-api-014",
    title: "Diseño de API en GraphQL: schema y resolvers",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Crea un esquema GraphQL bien modelado con resolvers eficientes.",
    prompt: `Actúa como arquitecto GraphQL.

Inputs:
- Entidades y relaciones.
- Casos de uso clave (pantallas).
- Reglas de permisos.
- Riesgo de N+1.

Genera:
1) Schema: types, queries, mutations.
2) Paginación (connections) con ejemplos.
3) Autorización (directives o middleware) por campo.
4) Estrategia anti N+1 (DataLoader).
5) Errores y validación.
6) Checklist de performance y seguridad.`,
    thumbnail: "",
  },

  {
    id: "proti-api-015",
    title: "Hardening de API contra ataques comunes (OWASP)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Checklist práctico para proteger endpoints y datos.",
    prompt: `Actúa como AppSec engineer.

Inputs:
- Auth method.
- Tipos de datos sensibles.
- Exposición (pública/privada).
- Stack.

Genera:
1) Top riesgos (OWASP API Top 10) aplicados a mi caso.
2) Controles específicos (validation, authZ, throttling).
3) Logging seguro (sin secretos).
4) Protección contra SSRF, injection, IDOR.
5) Headers recomendados y configuración.
6) Tests/escaneos (SAST/DAST) mínimos.`,
    thumbnail: "",
  },

  {
    id: "proti-api-016",
    title: "Refactor de endpoint lento: plan y propuesta de optimización",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Convierte un endpoint lento en uno estable con pasos medibles.",
    prompt: `Actúa como backend performance engineer.

Inputs:
- Endpoint.
- p95/p99 y RPS.
- Query/SQL o pseudocódigo.
- Tamaño de datos.
- Infra actual.

Genera:
1) Diagnóstico probable (DB, serialización, N+1, cache).
2) Instrumentación a añadir (timers por etapa).
3) Propuesta de cambios (índices, query rewrite, caching).
4) Plan de rollout (feature flag, canary).
5) Metas esperadas (antes/después).
6) Plan de regresión (tests y monitoreo).`,
    thumbnail: "",
  },

  {
    id: "proti-api-017",
    title: "Diseño de búsqueda avanzada (facetas, relevancia, ranking)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Implementa búsqueda usable con filtros, facetas y resultados útiles.",
    prompt: `Actúa como ingeniero de búsqueda.

Inputs:
- Qué se busca (entidad).
- Campos buscables.
- Filtros requeridos.
- Tamaño del corpus.
- Necesidad de ranking.

Genera:
1) Modelo de indexación (qué campos y por qué).
2) API de búsqueda (params: q, filters, facets, sort).
3) Estrategia de relevancia (boosts, recency, exact matches).
4) Paginación y performance.
5) Observabilidad de búsqueda (queries, CTR, no-results).
6) Plan de mejora iterativa.`,
    thumbnail: "",
  },

  {
    id: "proti-api-018",
    title: "Diseño multi-tenant (aislamiento por organización)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Evita fugas de datos entre tenants con políticas claras.",
    prompt: `Actúa como arquitecto SaaS multi-tenant.

Inputs:
- Qué es un tenant (org, workspace).
- Usuarios y roles.
- DB actual.
- Requisitos de aislamiento (alto/bajo).

Genera:
1) Estrategia de aislamiento (row-level, schema per tenant, db per tenant).
2) Esquema de datos y claves.
3) Middleware de tenant resolution (subdominio, header, token).
4) Controles anti-IDOR.
5) Migración desde single-tenant.
6) Tests y auditoría para asegurar aislamiento.`,
    thumbnail: "",
  },

  {
    id: "proti-api-019",
    title: "API para auditoría y trazabilidad (audit logs)",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Registra acciones críticas con quién/cuándo/qué cambió.",
    prompt: `Actúa como backend lead.

Inputs:
- Acciones críticas (crear, borrar, actualizar, exportar).
- Datos sensibles.
- Requisitos legales/compliance (si aplica).
- Retención de logs.

Genera:
1) Modelo de audit log (campos recomendados).
2) Qué eventos registrar y cuáles NO (privacidad).
3) Estrategia de almacenamiento (db vs log store).
4) Endpoint para consultar audit logs con filtros.
5) Protecciones (tamper resistance, permisos).
6) Checklist para validar que sirve en incidentes.`,
    thumbnail: "",
  },

  {
    id: "proti-api-020",
    title: "Checklist de calidad para backend antes de producción",
    area: "Programación & TI",
    category: "APIs & Backend",
    summary:
      "Lista final: seguridad, performance, tests, observabilidad y DX.",
    prompt: `Actúa como tech lead.

Inputs:
- Stack y entorno.
- Endpoints críticos.
- Requisitos de negocio (SLA, compliance).

Genera un checklist accionable con:
1) Seguridad (auth/authZ, validation, secrets).
2) Performance (p95 targets, caching, DB indexes).
3) Observabilidad (logs, metrics, tracing, alerts).
4) Resiliencia (timeouts, retries, circuit breakers).
5) Tests (unit, integration, contract).
6) Operación (runbooks, rollback, feature flags).`,
    thumbnail: "",
  },
];
