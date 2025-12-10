// src/lib/prompts/text/programacion-ti-apis-backend.js

export const textPromptsProgramacionTiApisBackend = [
{
  id: "proti-api-001",
  title: "Progettazione professionale API REST (risorse, rotte e contratti)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Definire gli endpoint, le risorse, il nome, la paga, gli errori e la versione come backend senior.",
  prompt: `Agisce come architetto di backend.

Ingressi:
- Prodotto / caratteristica.
- Principali entità (ad esempio utenti, ordini).
- Operazioni richieste (CRUD + azioni).
- Requisiti (auth, ruoli, limiti di tasso, webhooks).
- SLA (latenza / volume).

Genera:
1) Modello di risorse (elenco delle entità + relazioni).
2) Endpoint REST (GET / POST / PATCH / DELITE) con percorsi ed esempi.
3) Convenzione di risposta (codici di stato, busta, errori).
4) Paging (cursor vs offset) e filtri / ordinazione.
5) Versioned (URI / intestazioni) + strategia di deprecazione.
6) Controllo di sicurezza e osservabilità (log, traccia id).`,
  thumbnail: ""
},

{
  id: "proti-api-002",
  title: "Contratto OpenAPI / Swagger pronto a documentare",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Crea una specifica chiara con schemi, esempi e codici di errore.",
  prompt: `Agisce come esperto in APis.

Ingressi:
- Elenco degli endpoint esistenti o desiderati.
- Auth (Bearer / cookies / API Key).
- Modelli di dati (campi, tipi).
- Errori comuni.

Genera:
1) Schema OpenAPI (struttura consigliata).
2) Compose schemi (DTO) con validazioni.
3) Esempi di richieste / risposte per endpoint.
4) Codici di errore standardizzati (problema + json o simili).
5) Regole di compatibilità e di rottura delle modifiche.
6) Elenco di controllo per la documentazione QA.`,
  thumbnail: ""
},

{
  id: "proti-api-003",
  title: "Progettazione di endpoint idempotent (pagamenti, ordini, webhooks)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Evitare duplicati con chiavi di idency, serrature e dedupe.",
  prompt: `Comportati da senior backend.

Ingressi:
- Azione critica (ad esempio la creazione di pagamento, la creazione di ordine).
- Origine (cliente, webhook, lavoro).
- Rischio (duplica, reattriti).
- DB disponibile.

Genera:
1) strategia di idempotency (chiave, TTL, portata).
2) Set / tavolo per dedupe con indici.
3) richiesta di flusso → verifica → esecuzione → risposta.
4) Gestione dei pezzi di ricambio (cliente / server) e timeout.
5) Considerazioni di emergenza (locks vs upserts).
6) Test che provano idempotency (casi limite).`,
  thumbnail: ""
},

{
  id: "proti-api-004",
  title: "Autenticazione e autorizzazione per API (roli e ambiti)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Definire il modello di permessi, reclami, obiettivi e politiche di accesso.",
  prompt: `Agisce come un ingegnere di backend di sicurezza.

Ingressi:
- Tipi di utenti (admin, utente, personale).
- Risorse protette.
- Strategia auth (JWT / cookie / sessione).
- Necessità di multitenant (sì / no).

Genera:
1) Modello di ruolo / portata (matrice di autorizzazioni).
2) Claims e token struttura / sessione.
3) Middleware / guardie (pseudocDi).
4) strategia di aggiornamento / scadenza.
5) Pratiche sicure (rotazione, revoca, CSRF se applicabile).
6) Test di autorizzazione (permettere / negare).`,
  thumbnail: ""
},

{
  id: "proti-api-005",
  title: "Progettazione, ricerca e filtro (API)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Definire i parametri di query e le prestazioni per le grandi liste.",
  prompt: `Agisce come ingegnere di backend focalizzato sulla scalabilità.

Ingressi:
- Usa la lista.
- Dimensioni stimate (n).
- Campi filtrati / ordinati.
- Requisiti di ricerca (testo, corrispondenza esatta).

Genera:
1) Disegno di params di query (filtri, tipo, includere).
2) Cursor impaginazione (preferito) con l'esempio completo.
3) Strategia di ricerca (DB full-text vs servizio esterno).
4) regole anti-abuso (limiti, dimensione pagina massima, limite di tasso).
5) Indici consigliati in DB.
6) Test e casi di confine (cambiamenti durante le pagine).`,
  thumbnail: ""
},

{
  id: "proti-api-006",
  title: "Strategia di errore coerente (codici, messaggi, tracciabilità)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Errori standard per i clienti + facile debug.",
  prompt: `Comportati da backend.

Ingressi:
- Quadro/lingua.
- Consumatore (proprio davanti, terzo).
- Tipiche categorie di errori.

Genera:
1) Formato di errore (struttura standard JSON).
2) Errore della mappa → codice di stato (tabella).
3) Regole del messaggio (user-safe vs interni).
4) Traccia ID e correlazione dei log.
5) Esempi di errori per 400 / 401 / 403 / 404 / 409 / 422 / 429 / 500.
6) Guida per i clienti (reti, gestione).`,
  thumbnail: ""
},

{
  id: "proti-api-007",
  title: "Tasso di limitazione e anti-abuso (da IP, utente, token)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Proteggi la tua API senza rompere utenti reali.",
  prompt: `Agisce come sicurezza SRE / back-end.

Ingressi:
- Tipo di API (pubblica / privata).
- Traffico previsto (RPS).
- operazioni costose (quali).
- Infra (serverless / server, Reis sì / no).

Genera:
1) La politica dei limiti di tasso per via (tabella).
2) algoritmo consigliato (token buck / fally buck / finestra fissa).
3) Risposte 429 (intestazioni, regy-after).
4) Eccezioni (utenti premium, lista dei permessi).
5) Protezione extra (WAF, captcha in endpoint critici).
6) Avvisi metrici e sintonizzati.`,
  thumbnail: ""
},

{
  id: "proti-api-008",
  title: "Webhooks: progettazione, sicurezza e reattempts",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Realizza robusti webhooks con firme e ri-consegna.",
  prompt: `Agisce come architetto di integrazioni.

Ingressi:
- Eventi da emettere (lista).
- Ci si aspetta.
- Indirizzi (terze parti, fronte, partner).
- Requisiti di sicurezza.

Genera:
1) Elenco eventi e convenzioni di nomina.
2) Schema di carico di pagamento + esempi.
3) Firma / verifica (HMAC) e rotazione dei segreti.
4) Reattempts e backoff + DLQ.
5) Idempotency alla reception.
6) Pannello di monitoraggio minimo (log, consegna, guasto).`,
  thumbnail: ""
},

{
  id: "proti-api-009",
  title: "Progettazione file APis (carica, streaming, download)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Salite sicure e veloci con URL firmati e validazione.",
  prompt: `Agisce come ingegnere di backend.

Ingressi:
- Tipo di file (immagini, video, pdf).
- Dimensione media e massima.
- Stoccaggio (S3-like, locale, ecc.).
- Ho bisogno di CDN.

Genera:
1) Flusso consigliato (diretto -to-storage vs attraverso backend).
2) Endpoint necessari (init upload, finish, list, delete).
3) Convalidazioni (mime, dimensione, antivirus se applicabile).
4) Permessi (che possono vedere / scaricare).
5) strategia CDN / cache.
6) Rischi e mitigazione (hotlinking, abuso).`,
  thumbnail: ""
},

{
  id: "proti-api-010",
  title: "N + 1 ed efficiente design degli endpoint (include / espande)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Evitare chiamate extra con endpoint aggiunti e inclusi.",
  prompt: `Agisce come ingegnere del backend del personale.

Ingressi:
- IU o caso d'uso (che schermo).
- Dati richiesti (elenco).
- Latenza mirata.
- Disponibilità di jins / ORM.

Genera:
1) Diagnosi se N + 1 (come rilevarla).
2) Opzioni di progettazione (includere, espandere, batch, GraphQL).
3) Endpoint consigliato con una risposta di esempio.
4) strategia di cache (server e cliente).
5) Query ottimizzato (pseudocode + indici suggeriti).
6) Metrica per convalidare il miglioramento.`,
  thumbnail: ""
},

{
  id: "proti-api-011",
  title: "Strategia di concorrenza e coerenza (blocco ottimale)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Evitare di modificare le modifiche con ETags, campi di versione o serrature.",
  prompt: `Agisce come esperto di consistenza.

Ingressi:
- Risorse da modificare.
- Rischio di edizioni simultanee.
- DB (Postgres / MySQL / ecc).
- Requisiti UX (mostrare sì / nessun conflitto).

Genera:
1) Strategia consigliata (setag / If-Match vs campo versione).
2) Modifiche del regime (se applicabili).
3) Flusso PATCH con gestione 409 / 412.
4) UI / Clienti: come risolvere i conflitti.
5) Test ricorrenti.
6) Tradeoff e quando usare serrature pessimistiche.`,
  thumbnail: ""
},

{
  id: "proti-api-012",
  title: "Progettazione di lavori di sfondo dall'API (modelli asincroni)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Convertire lunghe operazioni in posti di lavoro con stati chiari.",
  prompt: `Comportati da backend.

Ingressi:
- Funzionamento lungo (ad esempio esportazione, video di processo).
- Tempo stimato.
- Necessità di progresso (sì / no).
- Cola infra (sì / no).

Genera:
1) Endpoint per avviare un lavoro e una risposta immediata (202).
2) modello di stato (incassato / in esecuzione / successo / fallito).
3) Endpoint per stato e risultati.
4) Reattento, idempowers e dedupe.
5) UX consigliato davanti.
6) Osservabilità (correlazione ids, metriche).`,
  thumbnail: ""
},

{
  id: "proti-api-013",
  title: "Migrazione API senza rompere i clienti (compatibile all'indietro)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Cambia il piano di rottura con deprecazione e monitoraggio.",
  prompt: `Agisce come proprietario del prodotto API.

Ingressi:
- cambiamento desiderato (prima o meno).
- Clienti esistenti (quanti, chi).
- Finestra di migrazione.

Genera:
1) Classificazione del cambiamento (rottura / non rottura).
2) Strategia di versione (v1 / v2 o intestazioni).
3) Piano di rollout graduale.
4) Comunicazione ai clienti (messaggio + timeline).
5) Telemetria per rilevare i clienti arretrati.
6) Controllo finale per rimuovere v1.`,
  thumbnail: ""
},

{
  id: "proti-api-014",
  title: "API design in GraphQL: schema e soluzioni",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Crea uno schema GraphQL ben modellato con soluzioni efficienti.",
  prompt: `Agisce come architetto GraphQL.

Ingressi:
- Entità e relazioni.
- Casi di utilizzo chiave (schermi).
- Regole di permesso.
- Rischio di N + 1.

Genera:
1) Schema: tipi, reclami, mutazioni.
2) Pagine (connessioni) con esempi.
3) Autorizzazione (direttive o middleware) per campo.
(4) Anti-N + 1 strategia (DataLoader).
5) Errori e validazione.
6) Controllo delle prestazioni e della sicurezza.`,
  thumbnail: ""
},

{
  id: "proti-api-015",
  title: "Indurimento API contro attacchi comuni (OWASP)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Elenco di controllo pratico per proteggere gli endpoint e i dati.",
  prompt: `Agisce come ingegnere dell'AppSec.

Ingressi:
- Metodo Auth.
- Tipi di dati sensibili.
- Mostra (pubblica / privata).
- Stack.

Genera:
1) I principali rischi (OWASP API Top 10) applicati al mio caso.
2) Controlli specifici (valida, authZ, throttling).
3) Registrazione sicura (senza segreti).
4) Protezione contro SSRF, iniezione, IDOR.
5) Intestazioni e configurazione consigliate.
6) Test minimi / scansioni (SAST / DAST).`,
  thumbnail: ""
},

{
  id: "proti-api-016",
  title: "Fattore Slow endpoint: piano e proposta di ottimizzazione",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Trasformare un punto d'estremità lento in un endpoint stabile con passi misurabili.",
  prompt: `Agisce come ingegnere delle prestazioni di backend.

Ingressi:
- Endpoint.
- p95 / p99 e RPS.
- Query / SQL o pseudo-codice.
- Dimensione dei dati.
- Corrente infra.

Genera:
1) Diagnosi probabile (DB, serializzazione, N + 1, cache).
2) Strumentazione da aggiungere (orari per fase).
3) Modifiche proposte (indici, riscrittura delle query, caching).
4) Piano di rollout (bandiera della temperatura, canario).
5) Obiettivi previsti (prima / dopo).
6) Piano di regressione (test e monitoraggio).`,
  thumbnail: ""
},

{
  id: "proti-api-017",
  title: "Progettazione di ricerca avanzata (facce, rilevanza, ranking)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Implementare la ricerca utilizzabile con filtri, sfaccettature e risultati utili.",
  prompt: `Agisce come ingegnere di ricerca.

Ingressi:
- No. Ciò che è ricercato (unità).
- I campi di ricerca.
- Filtri richiesti.
- Taglia corpo.
- Ho bisogno di un posto.

Genera:
1) Modello di indicazione (quali campi e perché).
2) Ricerca API (params: q, filtri, sfaccettature, sorta).
3) strategia di importazione (boost, recency, partite esatte).
4) Paginazione e performance.
5) Cerca l'osservanza (richiede, CTR, nessun risultato).
6) piano di miglioramento iterativo.`,
  thumbnail: ""
},

{
  id: "proti-api-018",
  title: "Design multitenant (isolamento di organizzazione)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Evitare perdite di dati tra gli inquilini con politiche chiare.",
  prompt: `Agisce come architetto SaaS multitenant.

Ingressi:
- No. Che cosa è un inquilino (org, workspace).
- Utenti e ruoli.
- DB attuale.
- Requisiti di isolamento (alto / basso).

Genera:
1) Strategia di isolamento (livello di carico, schema per inquilino, db per inquilino).
2) Dati e schema chiave.
3) Mezzo di risoluzione inquilino (sottodominio, intestazione, token).
4) Controlli anti-IDOR.
5) Migrazione da single-tenant.
6) Test e audit per garantire l'isolamento.`,
  thumbnail: ""
},

{
  id: "proti-api-019",
  title: "Audit e Tracability API ( log di audit)",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Registra azioni critiche con chi / quando / cosa cambiato.",
  prompt: `Comportati da backend.

Ingressi:
- Azioni critiche (creare, eliminare, aggiornare, esportare).
- Dati sensibili.
- Requisiti legali / conformità (se applicabile).
- Ritenzione del logo.

Genera:
1) modello di registro Audit (campi consigliati).
2) Quali eventi registrare e quali registrare (privacy).
3) Strategia di storage (db vs log store).
4) Endpoint per registri di audit con filtri.
5) Protezioni (resistenza antimanomissione, autorizzazioni).
6) Elenco di controllo per convalidare che serve in incidenti.`,
  thumbnail: ""
},

{
  id: "proti-api-020",
  title: "Controllo qualità per backend prima della produzione",
  area: "Programmazione IT",
  category: "APis & Backend",
  summary:
  "Elenco finale: sicurezza, prestazioni, test, osservabilità e DX.",
  prompt: `Comportati come un tecnico.

Ingressi:
- Stack e ambiente.
- Problemi critici.
- Requisiti aziendali (SLA, conformità).

Genera una lista di controllo utilizzabile con:
1) Sicurezza (auth / authZ, convalida, segreti).
2) Prestazioni (p95 obiettivi, caching, indici DB).
3) Osservabilità (log, metriche, tracciamento, avvisi).
4) Resilienza (oraggi, ripetizioni, interruttori).
5) Test (unità, integrazione, contratto).
6) Operazione (runbook, rollback, bandiere di funzionalità).`,
  thumbnail: ""
}];