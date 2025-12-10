// src/lib/prompts/text/programacion-ti-automatizacion-scripts.js

export const textPromptsProgramacionTiAutomatizacionScripts = [
{
  id: "proti-auto-001",
  title: "Automazione a 360 ° (dal processo manuale allo script affidabile)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Converte un processo ripetitivo in una solida automazione con validazioni, log e rollback.",
  prompt: `Agisce come ingegnere di automazione senior.

Ingressi:
- Processo manuale attuale (steps).
- Frequenza (daily / settimanale / per evento).
- Fonti dati (CSV, API, DB, cartella, posta).
- Uscita prevista (file, DB, notifica, report).
- Rischi (dati sensibili, errori costosi).

Genera:
1) Processo di ridisegna (passi ottimizzati).
2) Specifica Script (input / uscite / convalida).
3) strategia di idempotency (come evitare duplicati).
4) Gestione degli errori e dei reattriti (cosa fare / non riprovare).
5) Log e metriche minime.
6) Piano di prova (casi normali + casi di bordo).
7) Piano Rollback e "modalità di corsa a secco".`,
  thumbnail: ""
},

{
  id: "proti-auto-002",
  title: "CLI (strumento lineare) design per il computer",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Creare un tipo di comando 'my-sync tool --dry-run' con UX chiaro e sicuro.",
  prompt: `Agisce come uno sviluppo senior che crea strumenti interni.

Ingressi:
- Nome degli attrezzi.
- Azioni (comandi) richieste.
- Utenti (tecnici / non tecnici).
- Piattaforma (Windows / macOS / Linux).
- Requisiti (configura, segreti, autorizzazioni).

Genera:
1) Progettazione dei comandi e dei sottocomandi (esampli).
2) Bandiere consigliate (a secco, forza, verbose, config).
3) messaggi di uscita UX (cerca errori + progresso).
4) Struttura del progetto (cartelle / moduli).
5) Strategia di configurazione (file + inv vars).
6) Imballaggio / piano di distribuzione (npm / tubo / binario).
7) Controllo di sicurezza (segreti, autorizzazioni, registri).`,
  thumbnail: ""
},

{
  id: "proti-auto-003",
  title: "Script per rinominare / migrare i file per regole (batch)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Automatizza rinunzi di massa, conversione di formati e organizzazione da cartelle.",
  prompt: `Agisce come specialista di script per le operazioni di file.

Ingressi:
- Cartella di casa.
- Regole di rinominazione (modello example).
- Filtri (estensione, dimensioni, date).
- Azione (copia / spostare / convertire / eliminare).
- Requisiti di sicurezza (backup sì / no).

Genera:
1) algoritmo passo-passo (con modalità di anteprima).
2) Strategia per evitare collisioni di nomi.
3) Politica di backup (backup + cartella di ripristino).
4) Log (da registrare).
5) 15 casi di prova (compresi i casi di bordo).
6) Lista di controllo da eseguire in produzione senza perdere nulla.`,
  thumbnail: ""
},

{
  id: "proti-auto-004",
  title: "Fast ETL: CSV / Fogli → DB con validazione",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Caricare i dati in un DB con pulizia, normalizzazione e segnalazione di errori.",
  prompt: `Agisce come ingegnere di dati pratico.

Ingressi:
- Fonte (CSV / Google Sheets / Excel).
- Schema di destinazione (tavole / campi).
- Regole di convalida (obbligatorio, formato, intervalli).
- Volume dei dati.
- Frequenza di carico.

Genera:
1) Mappa di colonne → campi (comprese le trasformazioni).
2) Convalidazioni e normalizzazione (elenco).
3) Gestione dei record non validi (quarantina + relazione).
(4) Strategia di aggiornamento / duplicazione.
5) Piano di prestazione (batching, transazioni).
6) Rapporto finale (metrico: inserito / aggiornato / fallito).`,
  thumbnail: ""
},

{
  id: "proti-auto-005",
  title: "Integrazione con API: sincronizzazione dei conflitti a due vie",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Sincronizza due sistemi (CRM ↔ DB, Nozione ↔ app) con limiti di tasso e conflitti.",
  prompt: `Agisce come ingegnere integrativo senior.

Ingressi:
- Sistema A e sistema B.
- No. Quali entità sono sincronizzate.
- Indirizzo (A- > B, B- > A o a due vie).
- Limiti tariffari noti.
- Regole di conflitto (che è responsabile).

Genera:
1) Sync design (polling vs webhooks vs ibrido).
2) Identificazione e mappatura (ID esterni e locali).
3) Gestione dei limiti di tasso (backoff, batching, code).
4) Risoluzione dei conflitti (strategie + esempi).
5) Idempotency e storia della sincronizzazione (tabella / record).
6) Osservabilità (log + avvisi quando rotto).`,
  thumbnail: ""
},

{
  id: "proti-auto-006",
  title: "Scraping / Estrazione dati (legale e robusto)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Estrarre i dati pubblici curando termini, limiti di tasso, parcheggio e modifiche HTML.",
  prompt: `Agisce come ingegnere responsabile dell'estrazione dei dati.

Ingressi:
- Fonte (sito / API pubblica).
- Dati da estrarre (campi).
- Frequenza.
- Limite di richiesta al minuto (se noto).
- Formato di uscita (CSV / JSON / DB).

Genera:
1) Approccio consigliato (prima API, raschiamento di caduta).
2) Strategia di rispetto (throttling, user-agent, caching).
3) Progettazione di parser resiliente (selettori + fallback).
4) Gestione degli ingranaggi (test, rilevamento di rottura).
5) Validazione e duplicazione.
6) Elenco legale / etico (non evadere paywalls / captcha).`,
  thumbnail: ""
},

{
  id: "proti-auto-007",
  title: "Automazione dei rapporti (giornali / settimanali) con invio",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Genera un rapporto con KPis, grafica / tabella e lo invia via e-mail / Slack.",
  prompt: `Agisce come ingegnere dell'automazione di analisi.

Ingressi:
- Fonti di dati (DB / APis / CSV).
- KPis richiesto.
- Indirizzo (email / Slack).
- Tempo.
- Formato (HTML, PDF, CSV).

Genera:
1) Definizione del rapporto (sezioni + metriche).
2) Consultazione o estrazione di base (pseudo).
3) modello di uscita (struttura HTML o markdown).
4) Invio (SMTP / Slack webhold) e gestione degli errori.
(5) Scheduling (cron / GitHub Azioni / serverless).
6) Osservabilità: avvisi se non riesce o se i dati mancano.`,
  thumbnail: ""
},

{
  id: "proti-auto-008",
  title: "Automazione di backup e ripristino verificati",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Backup che servono davvero: rotazione, crittografia, verifica e ripristino della simulazione.",
  prompt: `Agite come SRE.

Ingressi:
- No. Ciò che è supportato (DB, cartella, secchio).
- No. In quale ambiente (locale / cloud).
- RPO / RTO (ca.
- Conservazione (giorni / settimane).
- Requisiti di crittografia.

Genera:
1) Strategia di backup (full / incrementale, frequenza).
(2) Rotazione e conservazione (polizia).
3) Fine e gestione delle chiavi.
4) Verifica automatica (controlla + prova di ripristino).
5) Piano di ripristino passo per passo.
6) Rapporti e avvisi di salute di backup.`,
  thumbnail: ""
},

{
  id: "proti-auto-009",
  title: "Pulizia automatica dei dati (dedupe, standardizzazione, regole)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Dati sporchi standard: nomi, email, telefoni, formati, duplicati.",
  prompt: `Agisce come ingegnere della qualità dei dati.

Ingressi:
- Tipo di dati (contatti, prodotti, ecc.).
- Campi difficili.
- Norme preferenziali.
- Definizione di duplicato (criteria).
Tolleranza all'errore.

Genera:
1) regole di pulizia del campo.
2) algoritmo di deduplicazione (esatto + fuzzy).
3) Cambia rapporto (prima / dopo).
4) "Non toccare" politica (che i campi non cambiano).
5) Validazione (test con esempi).
6) Il piano di esecuzione incrementale e rollback.`,
  thumbnail: ""
},

{
  id: "proti-auto-010",
  title: "Automazione con lavori pesanti",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Progetta l'elaborazione del lavoro: lavoratori, retries, coda ded-letter e monitoraggio.",
  prompt: `Si comporta come un ingegnere senior backend.

Ingressi:
- Tipo di attività (convertire file, inviare e-mail, ecc.).
- Volume (lavori / ora).
- I tempi previsti da Job.
- Requisiti prioritari (alto / basso).
- Infra (Reis / SQS / RabbitMQ).

Genera:
1) architettura del tail (produttore / lavoratore).
2) Struttura del carico utile del lavoro.
3) Politica dei reattori (backoff) e lettera morta.
4) Idempotency (come evitare la doppia esecuzione).
5) Concorrenza e throughput (calcolo approssimativo).
6) Osservabilità (metrici + avvisi).`,
  thumbnail: ""
},

{
  id: "proti-auto-011",
  title: "Automazione di distribuzioni ripetibili (scubi di rilascio)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Rilasciazioni standard: versioneado, changelog, tag, build e deploy con i controlli.",
  prompt: `Agire come Ingegnere di rilascio.

Ingressi:
- Tipo di app (monorep o no).
- Hosting (Vercel, AWS, ecc.).
- Versioned (semver sì / no).
- Requisiti di migrazione.
- Controllo di qualità.

Genera:
1) Flusso di uscita (passi esatti).
2) script di rilascio / CLI (comandi e bandiere).
3) Generazione di changelog (convenzioni).
4) Controlla pre-rilascio e post-rilascio.
5) Strategia Rollback.
6) Piano per automatizzarlo in CI.`,
  thumbnail: ""
},

{
  id: "proti-auto-012",
  title: "Smart Notifications (senza avvisi spam)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Progetta notifiche per evento con dedupe, soglie e finestre silenziose.",
  prompt: `Agisce come ingegnere della piattaforma.

Ingressi:
- Eventi importanti (lista).
- Canali (Slack, email, SMS).
- Condizioni di avvertimento (sentire).
- Finestre del tempo.
- Rumore attuale (se presente).

Genera:
1) Alert taxonomy (info / avvertire / critico).
2) Regole di duplicazione e raffreddamento.
3) Modelli di messaggio (chiaro, attuabile).
4) Rilevamento per gravità (che riceve cosa).
5) Metrico per la misurazione del rumore e della qualità.
6) Elenco di controllo per iterare regole senza perdere eventi critici.`,
  thumbnail: ""
},

{
  id: "proti-auto-013",
  title: "Automazione della generazione di contenuti tecnici (doc, changelils)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Genera documentazione e documenti da impegni / PR / metadati.",
  prompt: `Agisce come uno sviluppo di ingegnere della produttività.

Ingressi:
- Fonte (impegni, PR, questioni).
- formato desiderato (markdown, html).
- Convenzioni di squadra.
- Sezioni necessarie.
- Frequenza (per rilascio, settimanale).

Genera:
1) Mapping sorgente - sezioni > (regole).
2) Uscita (markdown).
3) Regole per raggruppare e riassumere i cambiamenti.
4) Cambiare la rottura della gestione.
5) Integrazione in CI (steps).
6) Validazione per evitare documenti vuoti o errati.`,
  thumbnail: ""
},

{
  id: "proti-auto-014",
  title: "Automazione di pulizia di stoccaggio (costi e ritenzione)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Riduce i costi eliminando / archiviando vecchi file con politiche e report.",
  prompt: `Agisce come ingegnere del costo del cloud.

Ingressi:
- Conservazione (S3, GCS, locale, ecc.).
- Tipo di file.
- Politica di conservazione (giorni).
- Eccezioni (cartelle / etichette).
- La necessità di archiviazione (sì / no).

Genera:
1) Accurata politica di ritenzione (regole).
2) Progettazione del lavoro (scala, selezione, azione).
3) Sicurezza: a secco, approvazioni, backup.
4) Rapporto di impatto (stimato, GB rilasciato).
5) Avvisi e audit.
6) Piano di prova con un sottoinsieme.`,
  thumbnail: ""
},

{
  id: "proti-auto-015",
  title: "Automazione dell'importazione / esportazione tra ambienti (staging / prod)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Sincronizza configurazioni / dati controllati tra ambienti segreti non filtrati.",
  prompt: `Comportati come DevOps.

Ingressi:
- No. Ciò che è importato / esportato (dati, configurazione, attività).
- Origine / destinazione (staging / prod / locale).
- Dati sensibili (sì / no).
- Frequenza.
- Formato.

Genera:
1) Lista bianca di ciò che si muove e lista nera di ciò che non.
2) Processo sicuro passo dopo passo.
3) Sanitizzazione / anonimizzazione se applicabile.
4) Piano di script con registro e convalida.
5) Rollback.
6) Elenco di controllo di sicurezza per i segreti.`,
  thumbnail: ""
},

{
  id: "proti-auto-016",
  title: "Monitoraggio dei lavori automatici (controlli sanitari e SLA)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Assicura che le automazioni non muoiano in silenzio: Heartbeats, SLAs e avvisi.",
  prompt: `Agite come SRE.

Ingressi:
- Lista delle automazioni.
- Frequenza per lavoro.
- No. Cosa significa "successo"?
- Canali di avvertimento.
- Tolleranza al ritardo.

Genera:
1) Sistema di battito cardiaco (come ogni rapporto di lavoro).
2) SLA per lavoro (tempo massimo senza esecuzione).
3) avvisi: guasti, ritardi, risultati anormali.
4) minimo Dashboard (che grafica).
5) Runbook: cosa fare quando si fallisce (passi).
6) Strategia per ridurre la flacibilità (sconti, serrature, idempotency).`,
  thumbnail: ""
},

{
  id: "proti-auto-017",
  title: "Automazione delle attività di Windows (PowerShell) per evitare la sofferenza",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Convertire flussi comuni a Potenza Conchiglia gli script con Logging e Task Scheduler.",
  prompt: `Agisce come specialista di PowerShell.

Ingressi:
- Compito per automatizzare.
- Percorsi di file.
- Credenziali richiesti (sì / no).
- Frequenza / trigger.
- Partenza prevista.

Genera:
1) Potenza Piano di script Shell (sottocodice dettagliato).
2) Gestione degli errori e codici di uscita.
3) Registrazione a file con timstamps.
4) Come programmare con Task Scheduler (steps).
(5) Raccomandazioni sulle autorizzazioni (minimo).
6) Controllo di convalida durante l'installazione.`,
  thumbnail: ""
},

{
  id: "proti-auto-018",
  title: "Automazione con GitHub Actions (programmato e push job)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Flussi di lavoro di progettazione con segreti, cache, matrici e notifiche.",
  prompt: `Agisce come ingegnere informatico.

Ingressi:
Ripeti e fermati.
- Cosa automatizzare (test, report, sincronizzazione).
- Triggers (push, PR, cron).
- Segreti necessari.
- Tempo massimo desiderato.

Genera:
1) Struttura del flusso di lavoro (lavori e passi).
2) Gestione sicura dei segreti.
3) Cache (nodo / tubo) consigliato.
(4) Strategia per retratti e timeout.
5) Notifiche di default (Slack / email).
6) Lista di controllo per evitare costi inutili.`,
  thumbnail: ""
},

{
  id: "proti-auto-019",
  title: "Automazione del controllo della qualità dei file (asset lint)",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Convalida che i beni soddisfano le regole (dimensione, formato, nome, metadati).",
  prompt: `Agisce come una produttività di sviluppo.

Ingressi:
- Portfolio (s) di beni.
- Regole (formati permessi, max KB, denominazione).
- Azioni in caso di guasto (blocco CI o avviso).
- No. A quale stadio funziona (pre-commit / CI).
- Eccezioni.

Genera:
1) regole di convalida (elenco esatto).
2) Progettazione dello script di verifica.
3) Rapporto dei risultati (sommario + dettaglio).
4) Integrazione in pre-commissione e CI.
5) Politica delle eccezioni.
6) Piano per correggere i file di backlog di serie.`,
  thumbnail: ""
},

{
  id: "proti-auto-020",
  title: "Automazione della rotazione dei segreti e delle credenziali",
  area: "Programmazione IT",
  category: "Automazione e script",
  summary:
  "Pianifica di ruotare i tasti senza servizi di ribaltamento: finestre, doppia scrittura e verifica.",
  prompt: `Agisce come ingegnere di sicurezza / DevOps.

Ingressi:
- No. Quali segreti (chiavi API, password DB, gettoni).
- No. Dove vivono (v vars, caveau, CI).
- Servizi interessati.
- Frequenza di rotazione.
- No. Se c'è un audit richiesto.

Genera:
1) Piano passo per la rotazione dei tempi di inattività.
2) strategia "doppio segreto" (vecchio / nuovo) e cutover.
3) convalida post-rotazione (controlli sanitari).
4) Rollback.
(5) Audit e registrazione delle modifiche.
6) Lista di controllo per l'automazione (mese / trimestrale).`,
  thumbnail: ""
}];