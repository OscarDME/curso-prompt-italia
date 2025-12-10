// src/lib/prompts/text/programacion-ti-debugging-troubleshooting.js

export const textPromptsProgramacionTiDebuggingTroubleshooting = [
{
  id: "proti-debug-001",
  title: "Rapida diagnosi: problema → ipotesi → test",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Strutturare un piano di ricerca per isolare la causa principale senza perdere tempo.",
  prompt: `Agisce come senior support / ingegnere di produzione.

Ingressi:
- Sintesi accurata (error, messaggio, comportamento).
- No. Quando è iniziata (ricente cambiamento).
- Ambiente (locale / staging / prod).
- Impatto (utenti interessati,%).
- Disponibile (sì / no) + frammenti.

Genera:
1) Elenco prioritario delle ipotesi (top 10) con probabilità.
2) Test minimi per confermare / escludere ogni ipotesi.
3) Segni / telemetria di cui ho bisogno (log, metriche, tracce).
4) Piano di isolamento del livello (cliente → rete → backend → DB).
5) "Fast mitigation" sicuro (bandiera, rollback, limite di velocità).
6) Prevista causa radice + correzione raccomandata.`,
  thumbnail: ""
},

{
  id: "proti-debug-002",
  title: "Prova di errori 500 / 502 / 503 / 504 (web)",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Guida per differenziare l'errore da app vs gateway vs upstream vs timeout.",
  prompt: `Agite come SRE.

Ingressi:
- Codice di errore (s).
- Piattaforma (Vercel, Nginx, Cloudflare, ecc.).
- Riti colpiti.
- Latenza media e p95 / p99.
- Ultimi distribuzioni / modifiche.

Genera:
1) Possibile significato di ogni codice in questo contesto.
2) Elenco di controllo della verifica (gateway, DNS, TLS, upstream, app).
3) Come riprodurre e catturare le prove (curl, intestazioni, tempi).
4) Log segni per ogni causa comune.
5) Rapida mitigazione (caching, limite di tasso, rollback).
6) Correzione definitiva (per modificare il codice / sotto).`,
  thumbnail: ""
},

{
  id: "proti-debug-003",
  title: "Debugging problemi / sessione / autenticazione",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "SameSite, percorso, dominio, scadenza, SSR / CSR.",
  prompt: `Agisce come un esperto su Internet.

Ingressi:
- Cookie name (s).
- Dominio (s) e sottodomini.
- Flusso di accesso (passi).
- navigatore interessato (s).
- Ambiente (prod / staging / locale).
- Middleware? SSR?

Genera:
1) Elenco di controllo degli attributi dei cookie (Domain / Path / SameSite / Secure / HttpOnly).
2) Test per confermare ciò che è rotto (DevTools: Applicazione / Rete).
3) Tipici fallimenti ambientali (http vs https, localhost, subdomini).
4) Soluzione consigliata con esempi (senza TypeScript).
5) Piano di convalida cross-browser.
6) Rischi di sicurezza e come mitigarli.`,
  thumbnail: ""
},

{
  id: "proti-debug-004",
  title: "Problemi di performance: profilazione e ottimizzazione incrementale",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Trova il vero collo di bottiglia prima di 'ottenere il meglio di esso'.",
  prompt: `Agisce come ingegnere delle prestazioni.

Ingressi:
- Endpoint / pagina lenta.
- Metrico (TTFB, LCP, INP, p95).
- Carica corrente.
- Stack (Next.js / Node / DB).
- Osservabilità disponibile (APM sì / no).

Genera:
1) Albero di decisione per identificare se è CPU, IO, DB o rete.
2) Piano di misura (profilazione, registro del tempo, tracce).
3) Top 10 cause comuni in questo stack.
(4) Esperimenti (A / B) per confermare le ipotesi.
5) Vince rapidamente (caching, memoization, indici) con priorità.
6) Piano di monitoraggio (target e avvisi).`,
  thumbnail: ""
},

{
  id: "proti-debug-005",
  title: "Debug di edifici / distribuzioni falliti (CI / CD)",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Isolare errori di costruzione, dipendenze, vars e differenze di ambiente.",
  prompt: `Agisce come ingegnere CI / CD.

Ingressi:
- Piattaforma CI (GitHub Azioni, Vercel, ecc.).
- Log di errore (frammento).
- Ultimo commit / distribuzione di successo.
- Recenti cambiamenti nelle unità.
- variabili ambientali rilevanti.

Genera:
1) Classificazione del fallimento (dipendenze, lint, tipi, inv, autorizzazioni, risorse).
2) Passi per giocare locale (stessa versione ode, lockfile, installazione pulita).
3) Lista di controllo di Lockfiles e radici monorepo.
4) Soluzione probabile + fix in configurazione.
5) Piano per evitare il futuro (versione a pin, caching, controlli).`,
  thumbnail: ""
},

{
  id: "proti-debug-006",
  title: "Errori intermittenti: flakiness e condizioni di carriera",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Prova lo strano: gli insetti che a volte capitano solo.",
  prompt: `Agisce come ingegnere senior.

Ingressi:
- No. Cosa fallisce esattamente.
- Frequenza (1 / 10, 1 / 100).
- Hardware / OS.
- Concurrent / thread.
- Dipendenze esterne (API, DB).

Genera:
1) Elenco delle cause tipiche (condizioni di gara, timeouts, nondeterinismo).
2) Strumentazione per catturare prove (ID, campate, timstamp).
3) Strategia di riproduzione (test di stress, introduzione di ritardi, toggles).
4) Modelli fissi (blocchi, idemptency, retries, timeouts > p99).
5) Validazione (come assicurarsi che non passi più).`,
  thumbnail: ""
},

{
  id: "proti-debug-007",
  title: "Successivo.js debugging: middleware, rotte statiche e beni",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Isolare i problemi di matcher, caching, / pubblico, _ successivo e reindirizza.",
  prompt: `Agisce come esperto in Next.js.

Ingressi:
- Versione Next.js.
- Struttura del percorso (app / pagine).
- corrente middleware.js.
- Riti colpiti.
- Log (se presenti) / comportamento osservato.

Genera:
1) Elenco di controllo delle esclusioni corrette (_ successivo, api, file statici).
2) Diagnosi del matcher (comune errori e come semplificarlo).
3) Come convalidare quali percorsi passano attraverso middleware.
4) Raccomandazione per un matcher semplice e sicuro (JS).
5) Piano per separare auth vs beni (migliore pratica).
6) Errori tipici in Vercel (e come vederli).`,
  thumbnail: ""
},

{
  id: "proti-debug-008",
  title: "Problemi CORS: blocchi tra front e backend",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Risolvere preflight, intestazioni, credenziali e origini consentite.",
  prompt: `Agisce come esperto in HTTP / CORS.

Ingressi:
- Origine del fronte.
- URL di backend.
- Metodo (s) (GET / POST / ecc.).
- No. Se si utilizzano cookie / credenziali.
- Intestazioni personalizzate.

Genera:
1) spiegazione esatta del perché fallisce (preflight vs semplice richiesta).
2) Intestazioni corrette (Access-Control-Allow- *) secondo il caso.
3) Configurazione per le credenziali e SameSite.
4) Elenco delle prove con curl (include POTIONS).
5) Soluzioni sicure (no "*" con credenziali).
6) Lista di controllo per la produzione (proxies / CDN).`,
  thumbnail: ""
},

{
  id: "proti-debug-009",
  title: "Errori del database: serrature, blocchi, timeout",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Isolare il contenimento e rallentare la voglia senza indovinare.",
  prompt: `Agisce come DBA / ingegnere.

Ingressi:
- DB (Postgres / MySQL / ecc.).
- Query o endpoint coinvolti.
- Sintomi (tempo, deadlock, slow).
- Carica corrente.
- Indici esistenti (se noti).

Genera:
1) Diagnosi probabile (blocchi, indice mancante, N + 1, transazioni lunghe).
2) Che misurare (EXPLAIN, registro di query lento, tavoli di blocco).
3) Passi per giocare con il carico.
4) Raccomandazioni (indici, riscrittura, isolamento).
5) Rapida mitigazione (limite, cache, timeout).
6) Correzione finale + convalida.`,
  thumbnail: ""
},

{
  id: "proti-debug-010",
  title: "Debug della memoria: perdite e OOM (Node)",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Rileva perdite di memoria e picchi che ravvivano il processo.",
  prompt: `Agire come ingegnere delle prestazioni di Node.js.

Ingressi:
- Syntoma (OOM, GC thrash, slow).
- Traffico / volume.
- Sospettati Endpoints.
- Cambiamenti recenti.
- Ambiente (serverless o server).

Genera:
1) Tipici segni di perdite contro picchi legittimi.
2) Strategia di profilazione (selezioni di scapolo, linee temporali).
3) Assunzioni comuni (copie infinite, ascoltatori, chiusure).
4) Modelli fissi (LRU, limiti, streaming).
5) Lista di controllo per prevenire (budget, avvisi).
6) Piano per convalidare in staging con carico.`,
  thumbnail: ""
},

{
  id: "proti-debug-011",
  title: "Incidente nella produzione: 30 minuti di runbook",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Cosa fare quando TUTTO brucia: stabilizzare prima, imparare più tardi.",
  prompt: `Agisce come Comandante Incidente.

Ingressi:
- No. Che cosa si è rotto (sintomo).
- Impatto (vendita, utenti,%).
- Ultima modifica (deploy / config).
- Accesso (log / metriche sì / no).
- SLA (urgenza).

Genera:
1) Piano 0-5 min: contenimento e comunicazione.
2) Piano 5-15 min: isolamento veloce.
3) Piano 15-30 min: mitigazione (rollback / bandiere / caching).
4) Elenco delle prove da catturare per RCA.
5) Comunicazione agli stakeholder (messaggio breve).
6) Modello Postmortem (azioni e proprietari).`,
  thumbnail: ""
},

{
  id: "proti-debug-012",
  title: "DNS / HTTPS / TLS debugging: 'no load', 'cert error', 'NXDOMIN'",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Dominio diagnostico / guasto del certificato senza guidarti pazzo.",
  prompt: `Agisce come un ingegnere di rete / devops.

Ingressi:
- Dominio.
- fornitore DNS.
- Cert manager (Vercel / Cloudflare / ecc).
- Errore del browser esatto.
- Modifiche recenti (DNS, proxy, redirect).

Genera:
1) Elenco dei casi probabili in base all'errore.
2) Procedura di verifica (dig / nslookup, curl-I, controllo SSL).
3) Regole di propagazione e TTL (cosa aspettarsi).
4) Set consigliato per fase.
5) Controllare la configurazione sicura (HSTS, reindirizzamenti).
6) Validazione finale (browser / posizioni).`,
  thumbnail: ""
},

{
  id: "proti-debug-013",
  title: "Debug delle autorizzazioni: 401 / 403, ruoli e ACL",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Notare se la serratura è auth, autorizzazione o configurazione dell'itinerario.",
  prompt: `Agisce come ingegnere di backend.

Ingressi:
- Endpoint bloccato.
- Metodo Auth (cookie / JWT / sessione).
- Rols si aspettava.
- Tronchi di autorizzazione.
- Middleware / guardie esistenti.

Genera:
1) La differenza esatta tra 401 e 403 nel vostro caso.
2) Elenco di controllo della verifica (token, reclami, scadenza, ruoli).
3) Test per confermare le autorizzazioni (richiede con utenti diversi).
4) Corretto consigliato (polizia / guardia) con esempi di logica.
5) Piano di regressione (permettere test).
6) Rischi di sicurezza mediante "overopening".`,
  thumbnail: ""
},

{
  id: "proti-debug-014",
  title: "Debug front-end: errori di stato, idratazione e console",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Trova il motivo per cui la tua IU si rompe: mismatch hidration, bug di stato, gara.",
  prompt: `Agisce come un fronte senior.

Ingressi:
- Quadro (Riforma / Successivo).
- Errore preciso della console.
- Componente / percorso interessato.
- Riproduzione (steps).
- Dati in arrivo (API).

Genera:
1) Top assunzioni secondo errore.
2) Cosa ispezionare (React DevTools, Network, Profiler).
3) Strategia di isolamento (commentando su parti, bandiere di caratteristiche).
4) Corretto consigliato (modelli corretti).
5) Test minimi (unità / e2e) per non tornare.
6) Controllo delle prestazioni e UX dopo la correzione.`,
  thumbnail: ""
},

{
  id: "proti-debug-015",
  title: "Cache debugging: perché vedo vecchi dati",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Rileva se la cache è browser, CDN, app o DB.",
  prompt: `Agisce come ingegnere della piattaforma.

Ingressi:
- URL / endpoint.
- No. Dove viene distribuito (CDN, Vercel, proxy).
- Intestazioni correnti (Cache-Control / ETag).
- Frequenza delle modifiche dei dati.
- Comportamento osservato (quanto vecchio).

Genera:
1) Albero di decisione per individuare la cache colpevole.
2) Quali sono i punti da rivedere e come interpretarli.
3) Esperimenti (bypass cache, query param, purge).
4) Corretto consigliato (controllo di controllo, convalida).
5) Rischio di disattivare la cache (costi / latenza).
6) Pianifica per "corretto cache" (pubblico / privato).`,
  thumbnail: ""
},

{
  id: "proti-debug-016",
  title: "Tail debugging / lavori: duplicati, perdita, ritardi",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Quando i lavori funzionano due volte... o mai.",
  prompt: `Agisce come backend / SRE.

Ingressi:
- Sistema di coda.
- Sintomi (duplica, ritardi, perdita).
- Tassi di lavoro.
- Configurato retiri.
- Idempotency keys (sì / no).

Genera:
1) Probabilmente causa di sintomo.
2) Quali metriche da rivedere (lag, retries, DLQ, veachput).
3) Test da confermare (simulare crash, reby storm).
4) Modelli di fissaggio (blocchi, idemptency, timeout di visibilità).
(5) Rapida mitigazione.
6) Elenco di controllo per evitarlo in futuro.`,
  thumbnail: ""
},

{
  id: "proti-debug-017",
  title: "Debug delle dipendenze: conflitti, versioni, file di blocco",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Risolvere 'lavori sulla mia macchina' da versioni e file di blocco.",
  prompt: `Agisce come manutentore senior.

Ingressi:
- Stack (npm / filato / pnpm).
- Esattamente sbagliato.
- Versione nodo locale e in CI.
- Lockfile (s) presente.
- Monorepo (sì / no).

Genera:
1) Probabile diagnosi (risoluzione, peer deps, lock mismatch).
2) Passi di pulizia e riproduzione (rm -rf node _ moduli, cache).
3) Pinning strategy (motori, packageManager).
4) Consigliare un singolo file e root corretto.
5) Fissare consigliato con comandi.
6) Elenco di controllo per non tornare (controlli CI).`,
  thumbnail: ""
},

{
  id: "proti-debug-018",
  title: "Debug file statici: 404, percorsi e estensioni",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Risolvere i beni che non addebitano le rotte, la sensibilità dei casi e la costruzione.",
  prompt: `Agisce come un esperto di web.

Ingressi:
- Itinerario bene (ad esempio: / immagini / x.png).
- No. Dove si vive (pubblico / o importato).
- OS locale (Windows / macOS / Linux).
- Hosting (Vercel, ecc.).
- Errore (404 / 403 / mime).

Genera:
1) Elenco di controllo delle cause comuni (caso errore, percorso, basePath, formazione slash).
2) Come convalidare in uscita di costruzione.
3) Differenza tra servizio da / pubblico vs bundling.
4) Correzione consigliata (struttura e riferimenti).
5) Pianifica di migrare a formati ottimali (webp / avif) senza rompere i percorsi.
6) Test finali (incognito, intestazioni, cache).`,
  thumbnail: ""
},

{
  id: "proti-debug-019",
  title: "Debug di Env vars: \"non definita\" in prod ma non locale",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Rileva le variabili, gli ambiti, il tempo di costruzione e il tempo di esecuzione.",
  prompt: `Agisce come DevOps / Successivo esperto.

Ingressi:
- Nome (s) di inv vars.
- No. Dove vengono utilizzati (server / client).
- Piattaforma dispiegata.
- .env locale vs prod.
- Errore osservato.

Genera:
1) Lista di controllo (prefissi pubblici, tempo di costruzione, tempo di esecuzione).
2) Come stampare / validare senza filtrare i segreti.
3) Set consigliato per fase (server-only vs client).
4) Piano di convalida post-deploy.
5) Buone pratiche (valida programma, default).
6) Rischi di sicurezza (non esporre segreti).`,
  thumbnail: ""
},

{
  id: "proti-debug-020",
  title: "Analisi professionale delle cause della radice (RCA) di un bug / incidente",
  area: "Programmazione IT",
  category: "Debug & Risoluzione dei problemi",
  summary:
  "Documenta la causa principale e le azioni in modo che non si ripeta.",
  prompt: `Agisce come leader tecnico scrivendo un RCA.

Ingressi:
- No. Quello che è successo (sintomo).
- Time line (eventi con tempo).
- Impatto (utenti / soldi).
- Causa immediata trovata.
- No. Ciò che lo ha permesso (insuccessi sistemici).

Genera:
1) Riepilogo esecutivo (3-5 proiettili).
2) Tempo libero.
3) causa principale (5 perché) e fattori che contribuiscono.
4) Ciò che hai rilevato e ciò che non hai rilevato (monitoraggio di lacune).
5) Azioni correttive (priorità, titolare, data).
(6) Lezioni imparate e i cambiamenti di processo.`,
  thumbnail: ""
}];