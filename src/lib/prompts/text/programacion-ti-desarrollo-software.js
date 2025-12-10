// src/lib/prompts/text/programacion-ti-desarrollo-software.js

export const textPromptsProgramacionTiDesarrolloSoftware = [
{
  id: "proti-001",
  title: "Architettura software a 360 ° (da idea a produzione)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Architettura del design, stack, moduli, flussi e decisioni tecniche con trade-off.",
  prompt: `Agisce come architetto di software senior.

Ingressi:
- No. Che problema risolve il prodotto.
- Tipo di app (web, mobile, API, desktop).
- Gli utenti si aspettavano (oggi e in 12 mesi).
- Requisiti chiave (latenza, sicurezza, offline, integrazioni).
- Restrizioni (budget, attrezzature, tempo).

Genera:
1) Proposta di architettura (diagramma descritto nel testo).
2) Raccomandato Stack (front, backend, DB, cache, coda) e perché.
(3) Principali moduli / servizi e responsabilità.
4) Data design (entità base + relazioni).
5) Flussi critici (login, pagamenti, ricerche, ecc.) passo dopo passo.
6) Rischi tecnici + mitigazione.
7) Lista di controllo per la produzione (osservabilità, backup, CI / CD).`,
  thumbnail: ""
},

{
  id: "proti-002",
  title: "Piano di implementazione Sprint (MVP in 14-28 giorni)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Convertire i requisiti in backlog, storie, priorità e consegnabili da sprint.",
  prompt: `Agisce come Tech Lead con una mentalità del prodotto.

Ingressi:
- caratteristiche desiderate (elenco).
- Data di destinazione.
- Attrezzatura (numero di devs e profili).
- Preferito Stack (se applicabile).
- Rischi noti.

Genera:
1) Definizione di MVP (che cosa entra e che cosa viene posticipato).
2) Backlog nelle storie degli utenti (min. 15) con criteri di accettazione.
3) Roadmap per sprint (2 settimane ciascuna) con consegnabili.
4) Unità tecniche e ordine suggerito.
5) Piano e ambienti QA (dev / staging / prod).
6) Metalli per convalidare il MVP (prodotto + tecnico).`,
  thumbnail: ""
},

{
  id: "proti-003",
  title: "Progettazione API REST (standard + endpoint + errori)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Struttura, contratti, validazione, auth, impaginazione e codici di errore.",
  prompt: `Si comporta come un ingegnere senior backend.

Ingressi:
- Dominio (e-commerce, corsi, CRM, ecc.).
- Risorse principali (utenti, ordini, ecc.).
- Tipo di auth (JWT, cookie, OAuth).
- Regole aziendali importanti.
- Pagare / filtrare / bisogno di ricerca.

Genera:
1) Convenzioni (nomi, versioni, leader).
2) Elenco di endpoint (CRUD + azioni) con esempi di richiesta / risposta JSON.
3) schema di errore (codici, messaggi, campi).
4) Pagare, ordinare e filtri (forma standard).
5) Regole di sicurezza (limite di tasso, autorizzazioni, portata / ruoli).
6) Lista di controllo per la documentazione (OpenAPI / Swagger).`,
  thumbnail: ""
},

{
  id: "proti-004",
  title: "Database Design (SQL) pronto a costruire",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Modello relazionale, normalizzazione, indici, vincoli e migrazione.",
  prompt: `Agisce come ingegnere di dati / DBA.

Ingressi:
- entità aziendali (lista).
- Azioni comuni (consulzioni fisiche).
- Volume stimato (registri / mese).
- Requisiti (consistenza, audit, cancellazione morbida).
- DB preferito (Postgres / MySQL / SQLite).

Genera:
1) entità diagramma - relazione descritta (tavole e relazioni).
2) Base DDL SQL (TABLE CREATE) con chiavi, vincoli e tipi.
3) Indicazioni consigliate per consultazione.
4) Strategia di migrazione (nome, rollback).
5) Considerazioni di performance e scalabilità.
6) Audit (creato _ a / aggiornato _ a, monitoraggio modifiche).`,
  thumbnail: ""
},

{
  id: "proti-005",
  title: "Autenticazione e sistema di ruolo (RBAC) senza cagare",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Design di login sicuro, sessioni, ruoli / autorizzazioni, aggiornamento e backend / controlli frontali.",
  prompt: `Agisce come un fullstack di sicurezza.

Ingressi:
- Tipo di app.
- Rols necessario (ad esempio amministratore, utente, editor).
- Requisiti di sessione (cookie / JWT).
- No. Se ci sarà 2FA (sì / no).
- Restrizioni legali (se applicabili).

Genera:
1) Proposta di auth (opzione A e B) con pro / contro.
2) Ruolo / modello di autorizzazioni (matrice).
3) Login / logout / flusso di aggiornamento (passo per passo).
4) Regole di sicurezza: hashing, CSRF, XSS, rotazione, tasso-limit.
5) Struttura Middleware / guardie in backend e percorsi protetti anteriori.
6) Elenco dei test di sicurezza per auth.`,
  thumbnail: ""
},

{
  id: "proti-006",
  title: "Codice recensione brutale (checklist + commenti di tipo senior)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Checklist recensione ed esempi di commenti che sollevano la qualità senza essere un mammone.",
  prompt: `Agisce come recensore senior su un team ad alte prestazioni.

Ingressi:
- Lingua e quadro.
- tasso di cambio (funzione, bugfix, refactor).
- Prestazioni / restrizioni di sicurezza.
- Norme di corda (lint, test).
- Codice Frammento o PR Descrizione.

Genera:
1) Elenco di controllo: correttezza, design, leggibilità, test, sicurezza, prestazioni.
2) 10 commenti di esempio (chiaro, azionabile, inumidito).
3) Segni rossi (anti-patterns) che devono bloccare la fusione.
4) Raccomandazioni refactor con piccoli passi.
5) Come misurare che il PR ha migliorato il sistema (metrico).`,
  thumbnail: ""
},

{
  id: "proti-007",
  title: "Fattore pianificato (spaghetti a modulare) con passi sicuri",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Piano refattore ininterrotto: incrementale, con test di rollout e strategia.",
  prompt: `Agisce come specialista Tech Lead in grandi refactors.

Ingressi:
- No. Quale parte è brutta (cartella / file / modulo).
- Sintomi (bug, difficile da cambiare, legato a tutto).
- Rischio (alto / medio / basso).
- Copertura dei test.
- Scadenza.

Genera:
1) Diagnosi: cosa fa male e perché.
2) Strategia ideale: schema strangler / caratteristiche bandiere / moduli.
3) Piano in 5-10 piccoli gradini (ciascuno unificato).
4) Quali test per creare prima (unità / integrazione / e2e) e in che ordine.
5) Strategia di rollout e rollback.
6) Definizione di fatto per chiudere il refactor.`,
  thumbnail: ""
},

{
  id: "proti-008",
  title: "Debugging guidato (trovare il bug senza perdere la testa)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Protocollo di debug: ipotesi, riproduzione, loghi, bisect e verifica.",
  prompt: `Agisce come ingegnere senior per risolvere gli incidenti.

Ingressi:
- Sintomo esatto.
- No. Dove accade (ambiente, percorso, caratteristica).
- Log / stacktrack (se presenti).
- Cambiamenti recenti.
- Frequenza (sempre / intermittente).

Genera:
1) 10 scenari ordinati per probabilità.
2) Come giocare in modo affidabile (steps).
3) Che registri / metriche da aggiungere e dove.
4) Piano di isolamento: ridurre variabili, bisect, toggles.
5) Come convalidare la correzione ed evitare regressioni.
6) Postmortem mini: causa principale + azione preventiva.`,
  thumbnail: ""
},

{
  id: "proti-009",
  title: "Strategia di test completa (unità + integrazione + e2e) per la tua app",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Definire la piramide di prova, cosa provare, come organizzare e cosa automatizzare.",
  prompt: `Agisce come QA lead + ingegnere del software.

Ingressi:
- Tipo di app e stack.
- Principali rischi (pagamenti, auth, dati).
- Attrezzatura e tempo.
- Infra (CI, staging).
- Strumenti preferiti.

Genera:
1) Test piramide e distribuzione raccomandata (%).
2) Elenco delle prove critiche (min. 20) per tipo.
3) Convenzioni: denominazione, struttura della cartella, apparecchi.
4) Mocks e la strategia dei dati di prova.
5) pipeline raccomandata CI (lint, test, e2e, copertura).
6) Metrico: copertura utile, flakiness, tempo totale.`,
  thumbnail: ""
},

{
  id: "proti-010",
  title: "CI / CD per schieramenti senza paura (pipeline + Gates + rollback)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Progettare una moderna pipeline con controlli, anteprime, release e rollback.",
  prompt: `Agisce come DevOps / Platform Engineer.

Ingressi:
- Repo (monorep / multirepo).
- Hosting (Vercel, AWS, ecc.).
- Ambiente (dev / staging / prod).
- Ho bisogno di migrazione.
- Tolleranza al rischio (alto / basso).

Genera:
1) Pipeline ideale (staggi e ordine).
2) Tassi di qualità (lint, test, copertura, scansione di sicurezza).
3) Strategia di distribuzione (blu/verde, canari, bandiere di funzionalità).
(4) Gestione sicura della migrazione DB.
5) Rollback e veloce runbook.
6) Avvisi e osservabilità minima per le versioni.`,
  thumbnail: ""
},

{
  id: "proti-011",
  title: "Documentazione tecnica utilizzata (README + ADRs + runbooks)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Struttura utile dei documenti: a bordo, decisioni, funzionamento e risoluzione dei problemi.",
  prompt: `Agisce come Tech Writer + Staff Engineer.

Ingressi:
- Tipo di progetto.
- Attrezzatura (nuovo sì / no devs).
- Aree di problemi comuni.
- Come si dispiega oggi.
- Incidenti comuni.

Genera:
(1) Indice di documentazione minima praticabile.
2) Tempio di README (sezioni esatte).
3) Tempio di ADR (Architettura Decision Record).
4) Runbook per 3 incidenti tipici (steps + comandi).
5) Elenco di controllo per mantenere i documenti aggiornati.`,
  thumbnail: ""
},

{
  id: "proti-012",
  title: "Stime tecniche realistiche (senza promessa)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Come valutare le caratteristiche con rischi, assunzioni, buffer e portata chiara.",
  prompt: `Agisce come Tech Lead responsabile della pianificazione.

Ingressi:
- Caratteristica da costruire.
- Dipendenze esterne.
- Complessità ricevuta (bassa / media / alta).
- Attrezzatura e capacità settimanale.
- Data di destinazione (se presente).

Genera:
1) Ripartizione per componenti (anteriore, backend, dati, QA, DevOps).
2) ipotesi esplicite (min. 10).
3) Rischi e sconosciuti con un piano di picco.
(4) Stima per rango (ottimo / realistico / pessimistico).
5) Piano di taglio della gamma se complicato.
6) Come segnalare la stima a un business non-conflitto.`,
  thumbnail: ""
},

{
  id: "proti-013",
  title: "Migrazione dall'eredità al moderno (senza il sistema)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Piano graduale: delimitare, avvolgere, sostituire, misurare e spegnere.",
  prompt: `Agisce come Staff Engineer specializzato nella migrazione.

Ingressi:
- Sistema attuale (stack).
- Problemi (prestazioni, debito, costi).
- No. Quale parte per migrare prima.
- Restrizioni (downtime zero, compliance).
- Attrezzatura e struttura del tempo.

Genera:
1) Strategia raccomandata (strangler, riscrittura parziale, ecc.).
2) Piano di fase con pietre miliari chiare.
3) Che misurare in ogni fase (metriche tecniche + business).
4) Rischi tipici e mitigazione.
5) Piano di compatibilità (API, dati, auth).
6) Criteri per disattivare l'eredità.`,
  thumbnail: ""
},

{
  id: "proti-014",
  title: "Ricerca e performance: come ottimizzare le query lente",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Diagnosi degli endpoint lenti: profilazione, indici, cache, batching e N + 1.",
  prompt: `Agisce come ingegnere delle prestazioni.

Ingressi:
- Endpoint o query slow.
- DB e ORM (se applicabile).
- Volume (registri).
- SLA desiderato (ms / sec).
- Osservazioni (pace, intermittente).

Genera:
1) Diagnosi elenco di controllo (profilazione, log, spiegare l'analisi).
2) Presupposti comuni (N + 1, mancanza di indice, overfeting).
3) Piano di ottimizzazione passo (veloce - > profondo).
4) strategia di caching (cosa, dove, invalidazione).
5) Come convalidare il miglioramento (benchmarks prima / dopo).
6) Rischi di misoptimizzazione e come evitarli.`,
  thumbnail: ""
},

{
  id: "proti-015",
  title: "Disegno del sistema di traccia e dei registri (osservabilità minima)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Definire registri utili, identificazioni di correlazione, metriche, tracciamento, avvisi e dashboard.",
  prompt: `Agite come SRE.

Ingressi:
- Tipo di app.
- Infra (senzaserver, contenitori, ecc.).
- Incidenti frequenti.
- Strumenti (Sentry, Datadog, OpenTelemetry, ecc.).
- No. Quanto è critico (basso / alto).

Genera:
1) Cosa logger (campi obbligatori) e cosa no (PII).
2) ID di correlazione e propagazione (richiesta - > servizi).
3) Tecniche minime: latenza, errori, throughput, saturazione.
4) Tracce: che abbraccia e come chiamarli.
5) avvisi con soglie sensibili (evitare il rumore).
6) Dashboard minimo (5 grafica essenziale).`,
  thumbnail: ""
},

{
  id: "proti-016",
  title: "Sicurezza di base nelle applicazioni web (lista di controllo pragmatico)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Elenco di controllo abilitato alla sicurezza: intestazioni, auth, convalida di input, segreti e autorizzazioni.",
  prompt: `Agisce come un AppSec pragmatico.

Ingressi:
- Stack (anteriore / posteriore).
- Tipo di auth.
- Se memorizzo dati sensibili (sì / no).
- Hosting.
- Integrazione esterna.

Genera:
1) Lista di controllo di 25 punti (alta / media / bassa priorità).
2) Controlli di backend (validazione, sanificazione, limite di tasso).
3) Controlli frontali (XSS, CSP, rendering sicuro).
4) Gestione segreta (valori, rotazione, accesso).
5) CORS / CSRF / cookie: configurazione consigliata.
6) Come fare una rapida revisione prima della produzione.`,
  thumbnail: ""
},

{
  id: "proti-017",
  title: "Ottimizzazione frontale: Core Web Vitals (piano di miglioramento)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Pianifica per migliorare LCP / CLS / INP con azioni e misure concrete.",
  prompt: `Agisce come ingegnere di prestazioni davanti.

Ingressi:
- Quadro (Next / React / Vue).
- Pagine lente (lista).
- Immagini / video (sì / no).
- Bundle (se lo so).
- Hosting / CDN.

Genera:
1) Probabile diagnosi metrica (LCP / CLS / INP).
2) azioni specifiche per ciascuna metrica (priorità 1-2-3).
3) Strategia immagine (formati, reattivi, pigri, segnaposto).
4) Strategia JS (dividere codice, importazione dinamica, albero-shaking).
5) Come misurare strumenti e rituali (prima / dopo).
6) Checklist finale per il rilascio.`,
  thumbnail: ""
},

{
  id: "proti-018",
  title: "Integrazione dei pagamenti (Stripe / PayPal) con sicurezza e contabilità",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Disegna flussi di checkout, webhooks, stati, reattempts e riconciliazione.",
  prompt: `Agisce come ingegnere senior fullstack.

Ingressi:
- Fornitore (Stripe / PayPal).
- Tipo di raccolta (una volta / abbonamento).
- Monete e paesi.
- No. Se ci sono rimborsi / coupon.
- Modello di prodotto (corso, SaaS, ecc).

Genera:
1) Flusso di pagamento end-to-end (anteriore - > backend - > fornitore - > webhold).
2) Stato del modello (a pagamento / pagato / fallito / recast) e regole.
3) Struttura Webhooks (verificazione, idempower, reattempts).
4) Raccomandata tabella / raccolta per registrare le transazioni.
5) Gestione della cassa bordo (doppio webhook, timeout, chargeback).
6) Elenco dei test (sandbox) prima della produzione.`,
  thumbnail: ""
},

{
  id: "proti-019",
  title: "Generazione backlog tecnica (debt) prioritaria da impatto",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Convertire il debito tecnico in biglietti attuabili con impatto, sforzo e rischio.",
  prompt: `Agisce come Tech Lead che vuole pagare il debito senza fermare il business.

Ingressi:
- Lista di dolori tecnici.
- Recenti incidenti.
- Aree del codice con più modifiche.
- Disponibile (se presente).
- Capacità mensile del debito (%).

Genera:
1) 20 biglietti del debito tecnico (formato: titolo, descrizione, DoD).
2) Prioritizzazione (impatto vs sforzo) e top 5 raccomandato.
3) Che debito NON pagare ancora (e perché).
4) Piano mensile (2-4 settimane) con consegnabili.
5) Come misurare che il debito pagato ha migliorato il sistema.`,
  thumbnail: ""
},

{
  id: "proti-020",
  title: "Caratteristiche di progettazione (attivazione e esperimenti)",
  area: "Programmazione IT",
  category: "Sviluppo del software",
  summary:
  "Implementa i ritardi per ridurre il rischio nelle versioni e fare test di base A / B.",
  prompt: `Si comporta come Staff Engineer.

Ingressi:
- Caratteristica di lancio.
- Rischio (alto / medio / basso).
- Utenti (segmenti).
- Infra (se serverless o proprio backend).
- Necessità del test A / B (sì / no).

Genera:
1) Tipi di bandiere necessarie (rilascio, ops, esperimento).
2) Architettura delle terre (dove vivono, come vengono valutati).
3) Strategia di rollout (0% - > 1% - > 10% - > 50% - > 100%).
4) Monitoraggio durante il rollout (metrici e avvisi).
5) Piano di rollback immediatamente.
6) Lands (debito) pulizia e regole per rimuoverli.`,
  thumbnail: ""
}];