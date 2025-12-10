// src/lib/prompts/text/programacion-ti-otros.js

export const textPromptsProgramacionTiOtros = [
{
  id: "proti-otr-001",
  title: "Diagnosi rapida dei bug (passi, ipotesi e correzione)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Struttura un piano professionale per trovare e risolvere un bug senza perdere tempo.",
  prompt: `Agisce come un ingegnere di debug senior.

Ingressi:
- Sintesi esatta (cosa vedi).
- No. Quando accade (routes, utenti, dispositivi).
- Log / errori (se presenti).
- No. Quello che è cambiato di recente.

Genera:
1) 10 scenari prioritari (più probabilmente → meno).
2) Quali prove confermerebbe / confutare ogni ipotesi.
3) Piano di riproduzione minimo (minimo repro).
4) strumentazione utile (log, tracce, lags) e dove metterlo.
5) Corretto proposto con rischi e rollback.
6) Test per evitare la regressione.`,
  thumbnail: ""
},

{
  id: "proti-otr-002",
  title: "Ottimizzazione delle prestazioni (p95 / p99) con piano misurabile",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Riduce la latenza identificando i colli della bottiglia e applicando miglioramenti con le metriche.",
  prompt: `Agisce come ingegnere delle prestazioni.

Ingressi:
- Sistema interessato (API, web, job).
- Tecniche attuali (p50 / p95 / p99, RPS).
- Costi (CPU / RAM / DB / IO).
- Restrizioni (serverless, DB condiviso, ecc.).

Genera:
1) Mappa del percorso critico (staggi e tempi).
2) Top 8 cause probabili e come misurare ciascuno.
3) Piano di ottimizzazione di impatto / rischio.
4) Modifiche specifiche (caching, indicatori, batching, streaming, ecc.).
5) Target target (prima / dopo) e come convalidare.
6) Piano di controllo Rollback + regressione.`,
  thumbnail: ""
},

{
  id: "proti-otr-003",
  title: "Recensione di PR come tech lead (qualità + sicurezza)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Lista di controllo per controllare le richieste di pull senza lasciare lacune.",
  prompt: `Agisce come una guida tecnologica esaminando una PR.

Ingressi:
- Descrizione del PR.
- I file giocati.
- Rischio (alto / medio / basso).
- Contesto della funzione.

Genera:
1) Domande chiave da rispondere (purpose, impatto, tradeoffs).
2) Elenco di controllo: correttezza, casi di bordo, sicurezza, prestazioni.
3) Elenco dei commenti esatti (tipo "nit", "blocking", "suggestion").
4) Test minimi da richiedere (unità / integrazione / e2e).
5) Segnali tecnici del debito e come mitigare.
6) "Approvata se" condizioni chiare.`,
  thumbnail: ""
},

{
  id: "proti-otr-004",
  title: "Database design (schema + indici + migrazione)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Modelli dati con integrità, prestazioni ed evoluzione in mente.",
  prompt: `Agisce come architetto di dati.

Ingressi:
- Entità e relazioni.
- Consultazioni critiche (top 10 reclami).
- Volume previsto (mese 1, mese 12).
- DB (Postgres / MySQL / Mongo).

Genera:
1) Schema proposto (tavole / collezioni + campi).
2) chiavi e vincoli primari / stranieri.
3) Indici consigliati da query critica.
4) Strategia di migrazione (passi, migrazione online, se applicabile).
5) Politica di smaltimento (soft delete vs hard) e audit.
6) test di integrità e prestazioni.`,
  thumbnail: ""
},

{
  id: "proti-otr-005",
  title: "Piano di monitoraggio e avviso (basic, pratico SRE)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Definire cosa misurare e quando avvisare senza spam.",
  prompt: `Agite come SRE.

Ingressi:
- App (web / api / lavoratore).
- SLAs / SLOs (se presente).
- Punti critici (pagamenti, login, checkout).
- Stack (Vercel, AWS, ecc.).

Genera:
1) Segnali d'oro: latenza, traffico, errori, saturazione.
2) Metalli specifici per componente (DB, cache, code).
3) Avvisi (tenere + finestra + gravità) con esempi.
4) Dashboard minimi (che grafica).
5) Log e tracce: quali campi includere (traceId, userId, richiesta).
6) Breve libro per avviso (cosa fare prima).`,
  thumbnail: ""
},

{
  id: "proti-otr-006",
  title: "Sicurezza pratica: indurimento web app / API",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "La lista di controllo può essere attivata per evitare gli errori più comuni.",
  prompt: `Agisce come ingegnere dell'AppSec.

Ingressi:
- Tipo di app (Next.js, API, mobile).
- Usato auth (cookies / JWT / OAuth).
- Dati sensibili (quello che tieni).
- Area pubblica (endpoint, upload).

Genera:
1) Principali rischi applicati al mio caso (IDOR, XSS, SSRF, SSRF, ecc.).
2) Controlli specifici del rischio (validazioni, intestazioni, politiche).
3) Regole di segreti (rotazione, inv vars, non loggear).
4) Protezioni per upload e endpoint costosi.
5) Lista di controllo per la distribuzione (CSP, HSTS, limiti di velocità).
6) Test o strumenti consigliati (linting / DAST / SAST).`,
  thumbnail: ""
},

{
  id: "proti-otr-007",
  title: "Strategia di cache (CDN, server, client) senza rompere i dati",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Accelerare senza servire informazioni vecchie o private per errore.",
  prompt: `Agisce come una performance di architetto.

Ingressi:
- No. Cosa vuoi cercare (HTML, API, immagini).
- Frequenza dei cambiamenti.
- Consapevolezza (pubblica / privata).
- Infra (CDN, Reis, serverless).

Genera:
1) Cosa cercare e dove (CDN / server / client).
2) TTL raccomandato per tipo di contenuto.
3) Invalidazione (cache busting, tag, purge).
4) Intestazioni (Cache-Control, Vary) con esempi.
5) Rischi (leaks, dati stanti) e mitigazione.
6) Piano di misura (tasso di frequenza, p95).`,
  thumbnail: ""
},

{
  id: "proti-otr-008",
  title: "Piano di migrazione tecnica (grande refattore senza spegnere la produzione)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Dividere un grande refactor in passi sicuri e deplorabili.",
  prompt: `Comportati come un tecnico.

Ingressi:
- No. Ciò che si desidera migrare (framework, DB, auth, architettura).
- Rischio (alto / medio / basso).
- Cambia la finestra.
- Attrezzatura disponibile.

Genera:
1) Avvicinamento (fico strangolato, doppia scrittura, bandiere di caratteristica).
2) Tassi di migrazione (millestons) con consegnabili.
3) Segnali di successo per fase (metrica / QA).
4) Piano Rollback.
5) Comunicazione e coordinamento (che valuta cosa).
6) Elenco di controllo finale prima di spegnere il vecchio.`,
  thumbnail: ""
},

{
  id: "proti-otr-009",
  title: "Progettazione di architettura per caratteristiche (ADR veloce)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Breve documento per giustificare le decisioni tecniche.",
  prompt: `Agisce come autore di un ADR (Architecture Decision Record).

Ingressi:
- Problema.
- Opzioni considerate (A / B / C).
- Restrizioni (tempo, costo, compatibilità).
- Requisiti non funzionali (perf, sicurezza).

Genera:
1) Contesto e obiettivo.
2) Opzioni + pro / contro.
3) Decisione raccomandata e perché.
(4) Conseguenze e rischi.
5) Piano di attuazione.
6) Come misurarlo ha funzionato.`,
  thumbnail: ""
},

{
  id: "proti-otr-010",
  title: "Guida alla registrazione: cosa logger e cosa NON per il vero debug",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Utile, coerente e sicuro (segreti non filtrati) loghi.",
  prompt: `Agisce come ingegnere senior.

Ingressi:
- Tipo di servizio.
- Errori comuni.
- Dati sensibili (che non possono essere registrati).
- Strumenti (console, mittente, datadog, ecc.).

Genera:
1) Campi standard per log (livello, richiesta, uso, percorso, latenza).
2) Formato consigliato (strutturato JSON).
3) Eventi chiave per logger (auth, pagamenti, errori, lavori).
(4) Dati sensibili (massaggio).
5) Esempi di buon e cattivo login.
6) Elenco di controllo per i registri di produzione.`,
  thumbnail: ""
},

{
  id: "proti-otr-011",
  title: "Strategia di test (unità / integrazione / e2e) realistica per priorità",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Costruire una strategia di test ROI elevata.",
  prompt: `Agisce come QA / tech lead.

Ingressi:
- Tipo di app.
- Flussi critici (elenco).
- Mancanza di prove (se presenti).
- Tempo disponibile a settimana.

Genera:
1) Piramide dei test adattati al mio caso.
2) Elenco di 15 test critici (per flusso) con criteri.
3) Che cosa spogliare e cosa non beccare.
4) Test contrattuali (API) e snapshot se applicabili.
5) Pipeline CI (che funziona in PR vs notte).
6) Tecniche di qualità (copertura utile, tasso sfacciato).`,
  thumbnail: ""
},

{
  id: "proti-otr-012",
  title: "CI / CD plan: pipeline semplice ma solida",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Automatizza costruire, testare e distribuire con obiettivi chiari.",
  prompt: `Comportati come DevOps.

Ingressi:
- Repo (monorep sì / no).
- Ambiente (dev / staging / prod).
- Strumento (GitHub Azioni, GitLab, ecc.).
- Requisiti (lint, test, anteprima distribuisce).

Genera:
1) Pipeline consigliato passo dopo passo.
2) Lavori e cache (ode _ moduli, costruire cache).
3) Cancelli per fusione e rilascio.
4) Versione strategia e versioni.
5) Rollback piano e caratteristiche bandiere.
6) Controllo di sicurezza (segreti, autorizzazioni).`,
  thumbnail: ""
},

{
  id: "proti-otr-013",
  title: "Gestione degli incidenti (post-mortem senza colpa)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Struttura un postmortem con azioni reali.",
  prompt: `Agisce come comandante di incidente.

Ingressi:
- No. Quello che è successo (sintomi).
- Durata dell'incidente.
- Impatto (utenti, $).
- Time line (eventi).

Genera:
1) Riepilogo esecutivo (1 paragrafo).
2) Timeline con ore / minuti.
3) Causa radice vs fattori di contributo.
4) Quali rilevazioni sono fallite ( avvisi, dashboard).
5) Azioni correttive (proprietario, priorità, data).
6) Miglioramento della prevenzione e dell'apprendimento.`,
  thumbnail: ""
},

{
  id: "proti-otr-014",
  title: "Piano di valutazione e attuazione (funzione) con compiti chiari",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Sconti su compiti, rischi, dipendenze e consegnabili.",
  prompt: `Comportati come la pianificazione dei lead.

Ingressi:
- Descrizione della caratteristica.
- Restrizioni (Deadline, attrezzature).
- Unità (API, DB, design).
- Requisiti di qualità (test, prestazioni).

Genera:
(1) Ripartizione delle attività (fronte / retro / sotto).
2) Dipendenze e blocchi.
3) Rischi e mitigazione.
4) Stime delle attività (taglietta + ore).
5) Piano di rilascio (staging, Canary, Flag).
6) Definizione di fatto.`,
  thumbnail: ""
},

{
  id: "proti-otr-015",
  title: "Guida documentazione tecnica (README + runbook)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Documento in modo utile per voi e il vostro team futuro.",
  prompt: `Agisce come scrittore tecnico.

Ingressi:
- Progetto.
- Come gestisci la locale.
- Variabili ambientali.
- Diploy e operazioni.

Genera:
1) Struttura ideale README (sezioni).
2) Impostazione locale passo dopo passo.
3) Risoluzione dei problemi comuni (errori fisici).
4) Libro di produzione ( avvisi e azioni).
5) Playbook de releases.
6) Elenco di controllo per mantenere i documenti aggiornati.`,
  thumbnail: ""
},

{
  id: "proti-otr-016",
  title: "Caratteristiche progettazione e sperimentazione (A / B) senza caos",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Lancia gradualmente i cambiamenti e misura l'impatto.",
  prompt: `Agisce come ingegnere della piattaforma.

Ingressi:
- Caratteristica da controllare.
- Segmentazione (utenti,% traffico).
- Tecniche di destinazione (conversione, errori).
- Strumento (se presente).

Genera:
1) Tipi di lags (rilascio / operazioni / esperimento).
2) Convegno di denominazione e ciclo di vita.
3) Obiettivo e regole di rollout.
(4) Analisi metrica e A / B (che misurare).
5) Piano di disattivazione / pulizia.
6) Rischi comuni (debito Flag) e mitigazione.`,
  thumbnail: ""
},

{
  id: "proti-otr-017",
  title: "Controllo di accessibilità e tecnico UX (web)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Migliorare l'accessibilità senza rompere il design o le prestazioni.",
  prompt: `Agisce come specialista nell'accessibilità web.

Ingressi:
- Pagina / flusso.
- Componenti chiave.
- Quadro (Riforma / Successivo).
- Problemi noti.

Genera:
1) Pratico WCAG Checklist (tastiera, messa a fuoco, etichette, contrasto).
2) Modifiche specifiche dei componenti.
3) Regole ARIA (cosa usare e cosa evitare).
4) Test (manuali + strumenti) e come eseguirli.
5) Rischi di regressione.
6) Priorità di impatto (alto / medio / basso).`,
  thumbnail: ""
},

{
  id: "proti-otr-018",
  title: "Fattore di codice legacy (passi sicuri + test)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Refactorizza senza paura: primi test, poi piccoli cambiamenti.",
  prompt: `Agisce come ingegnere senior.

Ingressi:
- Area File / Legacy.
- Sintomi (difficile da cambiare, bug, prestazioni).
- Test esistenti (sì / no).
- Scadenza.

Genera:
1) Strategia di Refactor (characterization, Golden Master).
2) Test minimi per agire come rete di sicurezza.
3) Sequenza di piccolo cambiamento (commettere piano).
4) Medici per misurare il miglioramento (complessità, copertura, bug).
5) Segni da fermare o invertire.
6) Risultato finale previsto (struttura / modularità).`,
  thumbnail: ""
},

{
  id: "proti-otr-019",
  title: "Architettura di autenticazione di base (cookies / JWT) per l'app web",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Applicare login semplice ma sicuro e sostenibile.",
  prompt: `Agisce come backend / ingegnere di sicurezza anteriore.

Ingressi:
- Tipo di app (SPA + API, Next, ecc.)
- Tipo di accesso (email / password, link magico).
- Requisiti (roli, sessione persistente).
- Infra (inserviente, db).

Genera:
1) Login / logout / aggiornamento flusso.
2) Cookie sicuri (httpOnly, secure, sameSite) o JWT (tradeoff).
3) Middleware / guardie (come proteggere i percorsi).
(4) Gestione delle sessioni (espulsione, revoca).
5) Protezione contro attacchi comuni (CSRF, forza bruta).
6) Test minimi e checklist per la produzione.`,
  thumbnail: ""
},

{
  id: "proti-otr-020",
  title: "Zoloy Checklist in produzione (evitare cadute)",
  area: "Programmazione IT",
  category: "Altri",
  summary:
  "Lista di controllo da lanciare senza rompere le vendite.",
  prompt: `Comportati come se avessi rilasciato il manager.

Ingressi:
- No. Ciò che è cambiato (sommario).
- Piattaforma (Vercel, AWS, ecc.).
- Rischio di cambiamento.
- Finestra di rilascio.

Genera:
1) Pre-deploy della lista di controllo (valori, migrazioni, ritardi).
2) Convalida della stadiazione (test del fumo).
3) Piano di Disperse (canaria / graduale se applicabile).
4) convalida post-deploy (metriche, registri, errori).
5) Piano di rollback immediatamente.
6) Comunicazione minima e registrazione del rilascio.`,
  thumbnail: ""
}];