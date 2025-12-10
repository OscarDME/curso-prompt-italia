// src/lib/prompts/text/soporte-docs.js

export const textPromptsSoporteDocs = [
{
  id: "sop-doc-001",
  title: "Centro assistenza: struttura perfetta + checklist di qualità",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Esso genera un articolo completo di aiuto con passaggi, cattura suggeriti, errori comuni e FAQ.",
  prompt: `Tema dell'articolo: []
Prodotto / caratteristica: []
Udienza: [precedente / misto / avanzato]
Canale: [web / app]
Tono: [chiudi / neutrale / premium]
Obiettivo dell'articolo: [solvere X senza supporto di contatto]

Scrivimi un articolo di Help Center pronto a postare con:
1) Titolo SEO (3 opzioni) + suggerito slug.
2) Riepilogo (2-3 linee) + "quando usare" e "quando NON applicare".
3) Requisiti precedenti (conti, permessi, piano).
4) Passi principali (8-14) con:
- azione esatta
- cosa dovrebbe vedere l'utente
- dove il passaggio può fallire
5) Sezione "Esiti comuni" (min. 8) e la sua soluzione.
6) Soluzione alternativa / soluzione di lavoro (se applicabile).
7) FAQ (10 domande) focalizzata sui veri dubbi.
8. Sezione "Se non ancora funzionante":
- quali dati raccogliere
- come contattare il supporto (templato)
9) Suggerimenti di catture / diagrammi:
- in che modo
- che ogni immagine dovrebbe mostrare
10) Lista di controllo editoriale (12 punti): chiarezza, accessibilità, coerenza, link.`,
  thumbnail: ""
},
{
  id: "sop-doc-002",
  title: "Guida rapida (Quickstart) per i nuovi utenti: 15 minuti prima di vincere",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Quickstart per l'utente per ottenere un risultato palpabile in meno di 15 minuti.",
  prompt: `Uscita: []
Risultato "prima vittoria": []
L'utente ideale: []
Piattaforma: [web / app]
[]

Crea una guida rapida con:
1) Obiettivo (una frase) + quello che imparerai.
2) Elenco dei requisiti (2-6).
3) percorso trifase:
- Fase 1 (2-4 min): configurazione minima
- Fase 2 (5-8 min): azione principale
- Fase 3 (2-3 min): verifica + passo successivo
4) passi numerati con micro-controlli "vedere questo?"
5) Errori comuni (6) e come evitarli.
6) "Next level": 5 cose da esplorare in seguito.
7) Final CTA: risorse correlate + dove chiedere aiuto.`,
  thumbnail: ""
},
{
  id: "sop-doc-003",
  title: "Documento \"Come funziona\" (concettuale): spiega il sistema senza tecnicità + glossario",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Concettuale Doc per ridurre i biglietti: come funziona, perché X passa e come pensare il prodotto.",
  prompt: `Elemento per spiegare: [iscrizione / fatturazione / funzione / algoritmo]
Livello utente: []
[]

Scrivere un documento di concetto che include:
1) Spiegazione a 3 livelli:
- 1 paragrafo ultra semplice
- spiegazione media con esempio
- più spiegazioni tecniche (opzionale)
2) "Che cosa è" vs "cosa NON" (tavola concettiva in testo).
3) 5 analogie utili (senza cringe) per spiegare ai non tecnici.
4) Casi tipici (10): "Se X passa, significa Y."
5) Glossario (12-20 termini) con definizioni semplici.
6) Sezione "miti" (8) e correzione.
7) Come evitare errori: checklist (10).`,
  thumbnail: ""
},
{
  id: "sop-doc-004",
  title: "Master FAQ: 30 domande reali (gruppo) + risposte brevi e lunghe",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Crea una FAQ che riduce davvero il supporto: risposte coerenti e attuabili.",
  prompt: `Uscita: []
Oggetto: [accesso / fatturazione / uso / sicurezza]
[]

Genera una FAQ con:
1) 30 domande raggruppate in 5 sezioni (6 domande ciascuna).
2) Per ogni domanda:
- risposta breve (1-2 linee)
- lunga risposta (5-8 linee) con passi se applicato
- link suggerito all'articolo relativo (inventare il titolo se non esiste)
3) 10 "conflitto fisico" domande e come rispondere con calma.
4) Guida interna: come mantenere aggiornati le FAQ (processo e frequenza).`,
  thumbnail: ""
},
{
  id: "sop-doc-005",
  title: "Base di conoscenza per il supporto: tassonomia, etichette, standard e manutenzione",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Progettare la struttura del vostro Centro assistenza: categorie, tag e regole di scrittura.",
  prompt: `Tipo di azienda: [SaaS / ecommerce / corso]
Volume previsto di articoli: []
Attrezzature: []

Creare una Conoscenza Piano base con:
(1) Tassonomia:
- 8-12 categorie principali
- 3-6 sottocategorie per ciascuna
2) Tag system (20-40 tag) con regole di utilizzo.
3) Norme di documentazione:
- voce / tono
- lunghezza del bersaglio
- formato passo
- come nominare articoli
4) Processo di aggiornamento:
- trigger (tickets, releases, modifiche)
- cadenza (settimanale / mensile)
- ruoli (proprietario / recensore)
5) Metrico: che misurare (tasso di difesa, ricerche fallite, ecc.).
6) Lista di controllo editoriale per approvare un articolo.`,
  thumbnail: ""
},

{
  id: "sop-doc-006",
  title: "Runbook per gli agenti: come risolvere un caso start-to-end (con modelli)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Manuale dell'agente interno: diagnosi, scaling, documentazione e chiusura coerente.",
  prompt: `Uscita: []
Tipi di casi: [elenco breve]
Canali: []

Creare un runbook interno con:
1) Flusso standard ( diagramma di testo) dal biglietto → chiusura.
2) Guida diagnostica: 12 domande base + quando usarle.
3. "Do / Don't" (15 coppie).
(4) Modelli:
- richiesta dei dati
- spiega la politica
- salire a L2
- chiusura con prevenzione
5) Lista di controllo della documentazione (10 campi obbligatori).
(6) Scala:
- criteri
- priorità
- dati minimi da allegare
7) QA: criteri di qualità (rubrica 1-5).`,
  thumbnail: ""
},
{
  id: "sop-doc-007",
  title: "Articolo di risoluzione dei problemi (tipo dell'albero): 'Se vedete questo errore → fare questo' (20 rami)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Documento decisionale in stile albero per errori comuni e soluzioni rapide.",
  prompt: `Problema generico: [non caricare / non log in / non può pagare / ecc.]
Piattaforma: [web / app]
Errori tipici: [se l'hai fatto, colpiscili]

Creare una risoluzione dei problemi con:
1) diagnosi iniziale (5 controlli rapidi).
2) Albero di decisione in testo con 20 rami:
- stato → azione → risultato atteso
3) allenamenti sicuri (5).
4) Quando scalare e quali dati collegare (controllare).
5) Sezione "Cosa fare" (10).
6) FAQ (10).`,
  thumbnail: ""
},
{
  id: "sop-doc-008",
  title: "Ricarica note amichevoli (utenti): modifica sommario + impatto + azioni",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Modello di nota versione che riduce i biglietti per modifiche inaspettate.",
  prompt: `Versione / data: []
Modifiche (proiettili a bastone): []
Nuove funzionalità: []
[]
Cambiamenti di rottura: []

Scrivi note di rilascio con:
1) Riepilogo esecutivo (5 proiettili).
2) Quali cambiamenti per l'utente (per ruoli / piani se applicato).
3) Modifiche importanti (dettaglio) + prima vs successivo.
4) Se ci sono cambiamenti di rottura:
- che è interessato
- Cosa dovresti fare?
- periodo
5) FAQ (8) anticipando dubbi.
6. "Guida di supporto":
- macro (6)
- tags
- quando salire.`,
  thumbnail: ""
},
{
  id: "sop-doc-009",
  title: "Guida alla migrazione: prima di → dopo (passaggi, rischi, rollback e verifica)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Documento di migrazione che evita i biglietti: passi, verifica, fallback e checklist.",
  prompt: `Che cosa è migrato: [piano / sistema / caratteristica]
Udienza: [utenti / amministratori]
Rischi:
Finestra: []

Crea una guida con:
1) Contesto: perché è migrato e ciò che l'utente vince.
2) Requisiti precedenti.
3) Piano passo dopo passo (10-18 gradini) con punti di verifica.
4) Rischi e mitigazione (10).
5) Piano Rollback (se applicabile) spiegato semplice.
6) FAQ (10).
7) Guida di supporto: segnali di guasto + macro (8).`,
  thumbnail: ""
},
{
  id: "sop-doc-010",
  title: "Documento politico per il sostegno (operativo): trasformare le regole nelle decisioni",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Trasforma le politiche lunghe in un manuale utilizzabile per gli agenti e QA.",
  prompt: `Le politiche attuali (collocare o sommare): []
Casi tipici: []
Strumento di supporto: [Zendesk / Interfono / ecc.]

Genera:
1) "Lastra di grano" in 1 pagina: regole se → allora.
2) Albero di decisione per 3 temi:
- rimborso
- cancellazioni
- abuso / frode
3) Macros pronto a copiare (20) per fase:
- approvato
- negato
- cassa grigio (informazioni ordine)
4) QA Checklist per verificare la conformità (12 criteri).
5) Guida alla registrazione: tag e campi obbligatori.`,
  thumbnail: ""
},

{
  id: "sop-doc-011",
  title: "Documento SOP di 'come scrivere docs': stile, buoni / cattivi esempi e regole",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Manuale editoriale per tutta la documentazione per essere coerente.",
  prompt: `Fai / tono: []
[]
Documenti della piattaforma: [Nozione / Centro assistenza]
Livello di dettaglio: []

Creare un SOP editoriale con:
1) regole di stile (15) con buoni / cattivi esempi.
2) Formato articolo standard (templato).
3) Come scrivere passi:
- azione verb
- risultato atteso
- soluzione se fallisci
4) Convenzioni: nomi dei menu, pulsanti, segnaposto.
5) Accessibilità: lingua, contrasto, testo alt, evitare gergo.
6) Processo: progetto → revisione → pubblicare → aggiornamento.
7) Checklist finale (20).`,
  thumbnail: ""
},
{
  id: "sop-doc-012",
  title: "Mappa dei contenuti: quali articoli per scrivere prima secondo i biglietti (80 / 20 priorità)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Piano di contenuti Docs a base di impatto: biglietti, ricerca e attrito superiore.",
  prompt: `I migliori biglietti (se hai, incolla 10): []
Top ricerche fallite (se avete): []
Uscita: []

Crea:
1) Metodo per la priorità (impatto × frequenza × difficoltà).
2) Lista di 25 articoli "must-have" con:
- titolo
- obiettivo
- sezione dove vivi
- perché riduce i biglietti
3) Roadmap 4 settimane per creare / aggiornare.
4) KPI a settimana (difesa,% biglietti ripetuti, ecc.).
5) Template per convertire il biglietto → articolo (passi).`,
  thumbnail: ""
},
{
  id: "sop-doc-013",
  title: "'Status Page' template e messaggi di incidente (docs + macro)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Crea testo per la pagina di stato e gli articoli di incidente con una cadenza di aggiornamenti.",
  prompt: `Incidente: []
[]
[]
[]
Canali: [status page / email / social]

Genera:
1) Pagina di stato del modello:
- indagare
- identificato
- monitoraggio
- risolto
2) Articolo post-mortem (utente):
- quello che è successo (alto livello)
- Cosa abbiamo fatto?
- prevenzione
3) FAQ incidente (10).
4) Supporto Macros (10) per rispondere ai biglietti durante l'incidente.`,
  thumbnail: ""
},
{
  id: "sop-doc-014",
  title: "Guida visiva: elenco di catture consigliate + standard di annotazioni (frecce, blur, ecc.)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "È standard catturare in documenti: cosa catturare, come segnare e come nascondere i dati.",
  prompt: `Prodotto: [web / app]
Aree sensibili: [email / pagamenti]
Stile: [minimo / esplicativo]

Definire uno standard di screenshot con:
1) Quando utilizzare cattura vs GIF vs video.
2) regole di annotazione:
- frecce
- evidenziata
- dati blur
3) Convenzioni: dimensioni, risoluzione, formato, nomi di file.
4) "Cosa catturare" in 10 tipi di elementi comuni.
5) Lista di controllo della privacy dell'immagine (12).`,
  thumbnail: ""
},
{
  id: "sop-doc-015",
  title: "Documento di formazione per i nuovi attori: 7 giorni, attività, valutazione e risorse",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Piano di onboarding per agenti con compiti giornalieri e voci di valutazione.",
  prompt: `Attrezzatura: [numero]
Strumenti: [helpdesk, CRM]
Uscita: []
[]

Creare un piano di 7 giorni con:
1) Obiettivi al giorno.
2) Moduli: prodotto, tono, politiche, strumenti, scaling.
3) Compiti pratici (2-3 al giorno).
4) "Shadowing" e la recensione dei biglietti.
5) Responsabile della valutazione (1-5) con 8 criteri.
6) Quiz finale (15 domande) per convalidare la comprensione.
7) Lista di controllo per attivare l'agente di produzione.`,
  thumbnail: ""
},

{
  id: "sop-doc-016",
  title: "Modello di articolo bilingue (ES / EN): mantenere la consistenza ed evitare traduzioni rare",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Struttura per documenti in due lingue con glossari e consistenza dei termini.",
  prompt: `Oggetto: []
Terminologia chiave: []
[]

Crea:
1) modello ES/EN parallelo con sezioni fisse.
2) Glossario di termini (20) con traduzione preferita.
3) Regole per non tradurre: nomi dei pulsanti, caratteristiche, ecc.
4) Elenco di controllo della lingua QA (12).
5) Esempio di 1 sezione già scritta in entrambe le lingue.`,
  thumbnail: ""
},
{
  id: "sop-doc-017",
  title: "\"Compatibilità 'documento (browser / dispositivi): tabella chiara + risoluzione dei problemi per piattaforma",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Specifica la compatibilità e le soluzioni quando l'utente è in ambiente non supportato.",
  prompt: `Uscita: []
Supporto ufficiale: [Chrome / Firefox / iOS / ecc.]
Limitazioni: []

Crea un documento con:
1) Tabella (in testo) di compatibilità:
- browser / dispositivo
- supportato sì / no
- note
2) Requisiti minimi (hardware / rete).
3) Risoluzione dei problemi per ambiente (web, iOS, Android) con passaggi.
4) FAQ (10).
5) Supporto Macros (8) per "ambiente" non supportato senza suono duro.`,
  thumbnail: ""
},
{
  id: "sop-doc-018",
  title: "KBA (Knowledge Base Article) fatturazione: \"Come leggere la fattura\" + casi fiscali",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Aiuta gli utenti a comprendere oneri, ricevute, tasse e concetti comuni.",
  prompt: `Sentiero: [Stripe / ecc.]
Tasse: [IVA / IVA]
Paesi: []

Scrivi un articolo:
1) Struttura di una fattura (campi e significato).
2) Differenza tra ricevuta / fattura / nota (a seconda del contesto).
3) Tasse: perché appaiono e come vengono calcolate (alto livello).
(4) 10 casi comuni di confusione (doppia carica, ritenzione, ecc.).
5) Passi per scaricare dati di fattura / aggiornamento.
6) FAQ (12).`,
  thumbnail: ""
},
{
  id: "sop-doc-019",
  title: "\"Nessun supporto 'guida di risoluzione dei problemi: autodiagnosi in 5 minuti",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Controllo rapido di autodiagnosi per ridurre i biglietti di base.",
  prompt: `Uscita: []
Problemi comuni: [list]

Crea una guida "5 minuti" con:
1) 8 controlli rapidi (ordinati per effetto).
2) 5 passaggi specifici per piattaforma (web / app).
3) Segni che è un vero bug (6).
4) Se avete bisogno di supporto: modello di dati minimo.
5) Messaggio di chiusura umano: "Se non è fisso, vi aiutiamo.".`,
  thumbnail: ""
},
{
  id: "sop-doc-020",
  title: "Documento 'come chiedere supporto': cosa includere per risolvere 2x più velocemente",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Insegna agli utenti di inviare buoni biglietti con esempi.",
  prompt: `Canali di supporto: []
Dati tecnici utili: []

Scrivi un articolo che include:
1) Perché aiutare (breve spiegazione).
2) modello di biglietto ideale:
- obiettivo
- passi
- atteso vs ottenuto
- ambiente
- prove
3) Esempi:
- biglietto cattivo (e perché)
- buon biglietto (e perché)
4) Come prendere cattura / registrare breve video.
5) FAQ (8).`,
  thumbnail: ""
},

{
  id: "sop-doc-021",
  title: "Documento interno: macro dizionario e quando usarli (per consistenza)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Catalogo Macro (titolo, scopo, condizioni) per ridurre la variabilità del supporto.",
  prompt: `Categorie: [billing, accesso, bug, spedizioni]
[]

Creare un dizionario macro con:
1) 40 macro (titolo + testo + quando usare + quando non usare).
2) Tag associati da macro.
3) "Macro combos": sequenze di 3 macro per flussi comuni.
4) Guida anti-robot: come personalizzare 1 linea senza rompere la consistenza.`,
  thumbnail: ""
},
{
  id: "sop-doc-022",
  title: "Modello di documentazione di processo (SOP) per operazioni: passi, ruoli, SLA e rischi",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Modello SOP universale per qualsiasi processo: ruoli, rischi, QA e metriche.",
  prompt: `Procedura per documentare: []
Strumenti: []
[]

Creare un SOP con:
1) Scopo e portata.
2) ruoli e responsabilità (RACI semplificato).
3) Ingressi / uscite.
4) Passi dettagliati (12-20).
5) Controllo qualità (punti di controllo).
6) Rischi e mitigazione (10).
7) Metrico (5-8) per valutare le prestazioni.
8) Execution Checklist (stampabile).
9) Piano di miglioramento continuo.`,
  thumbnail: ""
},
{
  id: "sop-doc-023",
  title: "Documento 'guida agli amministratori': autorizzazioni, ruoli, sicurezza e best practice",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Doc per gli amministratori che riducono i biglietti di autorizzazione e l'accesso.",
  prompt: `Uscita: []
Disponibile: []
Azioni sensibili: [invitare, fatturare, eliminare]

Scrivere una guida per gli amministratori con:
1) Che ogni ruolo può fare (tabella nel testo).
2) Come assegnare ruoli (passi).
(3) Migliori pratiche di sicurezza (10).
4) Casi comuni (10) e come risolvere.
5) Elenco di controllo "impostazione sicura" a 12 punti.
6) FAQ (12).`,
  thumbnail: ""
},
{
  id: "sop-doc-024",
  title: "Guida alla risoluzione degli incidenti per il supporto: playbook e messaggi preapprovati",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Interno Playbook: gravità, comunicazione, macro e coordinamento con l'ingegneria.",
  prompt: `Uscita: []
Punti positivi: [P1-P4]
Canali: [status / chat / email]

Crea playbook con:
1) Definizione di gravità con esempi.
2) Azioni per gravità (che cosa fa sostegno).
3) Messaggi preapprovati (15) per clienti e tirocinanti.
4) Elenco di controllo per aprire incidente (10).
5) Elenco di controllo per chiudere l'incidente (10).
6) Modello interno post-mortem (RCA).`,
  thumbnail: ""
},
{
  id: "sop-doc-025",
  title: "Documento ufficiale di terminologia: nomi esatti di funzionalità, pulsanti e schermi",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Evitare confusione: glossario ufficiale dell'UI per il supporto e i documenti.",
  prompt: `Uscita: []
Lingua: [ES]
Elenco schermi / menu: [se hai, incolla]

Crea:
1) IU Glossario:
- nome ufficiale
- sinonimi uso della gente
- Dov'è?
2) Regole per riferimento a pulsanti / menu in testo.
3) Elenco di 25 frasi standard per guidare la navigazione.
4) Elenco di controllo editoriale per mantenere la coerenza.`,
  thumbnail: ""
},

{
  id: "sop-doc-026",
  title: "Doc di 'permissioni ed errori': tabella di errore → cause → soluzione → che può risolvere",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Mappa delle autorizzazioni: riduce i biglietti \"Non posso\" e accelera l'arrampicata al proprietario giusto.",
  prompt: `Sistema di rotazione: []
Errori comuni: []

Creare un documento con:
1) Tabella (testo) di 25 errori:
- messaggio visibile
- causa probabile
- soluzione
- ruolo necessario
2) Guida: come rilevare se l'utente non ha autorizzazioni (segnali).
3) Macros (8) per chiedere all'amministratore di abilitarlo.`,
  thumbnail: ""
},
{
  id: "sop-doc-027",
  title: "Integrazione Doc: guida di integrazione + risoluzione dei problemi + limiti di supporto",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Crea articoli costituiti da integrazione con passaggi specifici e risoluzione dei problemi.",
  prompt: `Integrazione: [Zapier / Meta / Google / ecc.]
Tipico obiettivo: []
Requisiti: [API chiavi / ruoli]

Scrivi un articolo con:
1) Che cosa fa l'integrazione e casi di utilizzo (5).
2) Requisiti e autorizzazioni precedenti.
3) Collegamento graduale (10-14).
4) Verifica: come confermare che funziona.
5) Risoluzione dei problemi (12) per errori frequenti.
6) Limitazioni e ciò che il vostro team non supporta.
7) FAQ (10) + modello per richiedere il supporto da parte di terzi.`,
  thumbnail: ""
},
{
  id: "sop-doc-028",
  title: "Modello breve 'manuale utente': moduli, navigazione, consigli e scorciatoie",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Manuale compatto per gli utenti che non vogliono leggere; task oriented.",
  prompt: `Uscita: []
Moduli: [list]
Principali compiti: [list]

Creare un breve manuale con:
1) Mappa di navigazione (testo).
2) 10 compiti principali con mini passaggi.
3) 10 consigli / scorciatoie (le migliori pratiche).
4. "Esecuzioni tropicali" (8) e come evitarle.
5) FAQ (10) + risorse raccomandate.`,
  thumbnail: ""
},
{
  id: "sop-doc-029",
  title: "Doc per il supporto \"UX change\": prima vs dopo + dove è ora + perché",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Aiuta gli utenti confusi dalle modifiche: mappa prima / dopo e guida rapida.",
  prompt: `Cambio UX: []
Pannelli interessati: []
Motivo del cambiamento: []

Genera:
1) Riepilogo del cambiamento (2-3 linee).
2) Prima vs dopo (elenco di 8-12 differenze).
3) "Dove è ora" con passi per compito (8 compiti).
4) FAQ (10) e supporto macro (8).
5) Nota per evitare i biglietti: copia suggerita in-app.`,
  thumbnail: ""
},
{
  id: "sop-doc-030",
  title: "Elenco di controllo dell'audit di documentazione: rilevare gli elementi rotti, obsoleti e confusi",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Sistema pratico per rivedere i documenti su base mensile con criteri specifici.",
  prompt: `Documenti di piattaforma: []
Frequenza: [al mese]
Fonti di segnale: [ticche / ricerca]

Crea:
1) Checklist Audit (25 punti) con:
- chiarezza
- precisione
- collegamenti
- screenshots
- SEO di base
(2) Metodo di rilevazione degli elementi idonei da aggiornare (10 segnali).
3) Audit report template (campi).
4) Piano mensile di manutenzione (3 ore / settimana).`,
  thumbnail: ""
},

{
  id: "sop-doc-031",
  title: "'supportare documentazione' modello: come scrivere un \"Known Issues\" che serve",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Problemi noti standard: sintomi, sfondo, stato e chi colpisce.",
  prompt: `Prodotto / versione: []
Elenco dei problemi (se presenti): []

Creare un Conosciuto Formato numeri con:
1) Campi obbligatori per emissione:
- sintomo
- a chi colpisce
- gravità
- nel mondo
- stato
- ETA (se presente)
2) Esempio di 5 questioni già completate (inventate se necessario).
3) Supporto macro per ogni stato (6).
4) Regole di aggiornamento e cadenza.`,
  thumbnail: ""
},
{
  id: "sop-doc-032",
  title: "Guida a \"come esportare / importare dati\": passi comuni, formati, limiti e errori",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Articolo di esportazione / importazione completo con esempi di CSV e risoluzione dei problemi.",
  prompt: `Tipo di dati: [utenti / contatti / ordini]
Formato: [CSV / JSON]
Limiti: [rows / size]

Scrivere una guida con:
1) Esportazione: passi + quali campi sono inclusi.
2) Importa: modello di file (campi, esempi di righe).
3) Convalidazioni e errori comuni (12) + soluzione.
4) Buona pratica: pulizia dei dati, codifica, separatori.
5) Verifica post-import.
6) FAQ (10) + come ordinare il supporto se fallisce.`,
  thumbnail: ""
},
{
  id: "sop-doc-033",
  title: "Documento \"Accounts and security\": 2FA, sessioni, dispositivi, attività e recupero",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Sicurezza Doc per ridurre i biglietti e aumentare la fiducia.",
  prompt: `Sistemi: [2FA / email / pass / SSO]
Piattaforma []

Crea un articolo con:
1) Come attivare 2FA (steps).
2) Come visualizzare e chiudere le sessioni.
3) Cosa fare se si sospetta impegno (passi immediate).
4) Recupero account (senza richiedere password).
5) segni di phishing (10).
6) FAQ (12) + supporto macro (8).`,
  thumbnail: ""
},
{
  id: "sop-doc-034",
  title: "Documento 'failed fatturaing': reattempts, cause, soluzioni e sospensioni",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Articolo completo per guasti di pagamento con cause e soluzioni di tempo.",
  prompt: `Sentiero: []
Cause comuni: [fondi insufficienti / banca / 3DS]
Politica di sospensione: []

Scrivi un articolo con:
1) Che cosa significa "pagamento soddisfatto"?
2) Cronogramma di reattribuzioni e notifiche.
3) Cause (10) con soluzioni specifiche.
4) Come aggiornare il metodo di pagamento (passi).
5) Che dire di accesso / dati.
6) FAQ (12) + supporto macro (8).`,
  thumbnail: ""
},
{
  id: "sop-doc-035",
  title: "'Support guide' modello: come scrivere risposte con un singolo CTA (ridotto e indietro)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Manuale interno per rispondere meglio: 1 CTA, empatia e verifica.",
  prompt: `Canale: [chat / email]
[]

Crea una guida con:
1) struttura di risposta a 7 linee.
2) Come riassumere il problema (parafrasando).
3) Come fare passi: massimo 2 per messaggio (chat) o 6 per e-mail.
4) Single CTA: come formularlo (10 esempi).
5) Verifica del successo: 10 frasi.
6) Anti-patterns: 12 errori tipici e come evitarli.`,
  thumbnail: ""
},

{
  id: "sop-doc-036",
  title: "Documento 'standard di supporto': tempi, tono, macrouso e chiusura",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Definire che cosa \"eccellente supporto\" sembra nella vostra squadra.",
  prompt: `Attrezzature: []
Canali: []
Obiettivo SLA: []

Creare uno standard interno con:
1) Principi (5-7).
2) Tono / voce (do / don't + esempi).
3) Tempi: risposta iniziale, aggiornamenti, chiusura.
4) Uso delle macro: quando sì / quando no.
5) Qualità: Lista di controllo (15) e rubrico.
6) Come gestire casi difficili (annuncio cliente, legale, ecc.).`,
  thumbnail: ""
},
{
  id: "sop-doc-037",
  title: "Guida a 'cambiamenti piani': aggiornamento / download, valutazione ed effetti sulle caratteristiche",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Articolo per ridurre i biglietti di fatturazione: cosa succede quando si cambia il piano.",
  prompt: `Piani: [list]
Prorated: [sì / no]
Effetti: [limiti, caratteristiche]

Scrivi un articolo con:
1) Che cosa succede all'aggiornamento (quando si applica, carica).
2) Che cosa succede per scaricare (quando si applica, limiti).
3) Prorated con semplice esempio numerico.
4) Casi tipici (12) e risposte.
5) FAQ (12) + supporto macro (10).`,
  thumbnail: ""
},
{
  id: "sop-doc-038",
  title: "Doc. di risoluzione dei conflitti: quando il supporto e il cliente non sono d'accordo",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Guida interna al trattamento delle controversie: prove, politiche e decelerazione.",
  prompt: `Tipo di conflitto: [rimborso / politica / bug]
Politiche: []

Creare un documento interno con:
1) Principio: empatia senza cedere ad abuso.
2) Come raccogliere prove (lista di controllo).
3) Come spiegare le politiche in forma umana.
4) Come offrire alternative.
5) Protocollo di escalation al supervisore / legale.
6) macro "difficili" (12) con frasi sicure.`,
  thumbnail: ""
},
{
  id: "sop-doc-039",
  title: "Documento 'strati di supporto': L1 / L2 / L3 e criteri di arrampicata",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Definisce chiaramente le responsabilità per livello per evitare ping-pong.",
  prompt: `Attrezzatura: [supporto / ingegneria / ops]
Strumento biglietto: []
[]

Crea un documento con:
1) Che cosa risolve L1, L2, L3 (elenco dettagliato).
(2) Criteri di scaling (per tipo di caso).
3) Dati minimi tramite scaling (checklist).
4) SLA interna tra le squadre.
(5) Modelli:
- handoff
- aggiornare il client
- risoluzione finale`,
  thumbnail: ""
},
{
  id: "sop-doc-040",
  title: "Doc di 'modelli di comunicazione': pacchetto completo per il supporto (40 pezzi)",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Kit di comunicazione: Saluti, dati di ordine, aggiornamenti, chiusure, politiche, arrampicata.",
  prompt: `Uscita: []
[]
Canali: [chat / email / WhatsApp]

Genera un pacchetto da 40 pezzi:
- 8 saluti (per canale)
- 8 dati d'ordine (compatto)
- 6 aggiornamenti (con e senza notizie)
- 8 chiusure (con prevenzione)
- 6 politiche (rimborso / cancellazione / ecc.)
- 4 scalation (L2 / legale)

Ogni pezzo dovrebbe includere:
(1) Testo
2) Quando usare
(3) 1 variante alternativa (più diretta).`,
  thumbnail: ""
},

{
  id: "sop-doc-041",
  title: "Doc per 'errore di posta': no email, spam, domini, whitelist",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Guida completa per problemi di posta: passi dal fornitore e dalla lista di controllo.",
  prompt: `Tipo di e-mail: [login / ricevute / notifiche]
Fornitori comuni: [Gmail / Outlook]
[]

Scrivi un articolo con:
1) Lista rapida (8).
2) Passi per fornitore (Gmail / Outlook) per controllare lo spam e filtri.
3) Whitelisting (come farlo) + quali indirizzi aggiungere.
4) Problemi di dominio aziendale (IT).
5) Se persiste: quali dati ordinare (intestazioni se applicabili).
6) FAQ (10) + supporto macro (8).`,
  thumbnail: ""
},
{
  id: "sop-doc-042",
  title: "Guida 'download e accessi': link scaduti, limiti e recupero",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Doc per prodotti digitali: recuperare l'accesso e correggere i link scaduti.",
  prompt: `Prodotto digitale: []
Links: [expire / no]
Piattaforma []

Crea un articolo con:
1) Come accedere allo shopping (passi).
2) link scaduti: perché e come rigenerarsi.
3) Limiti di scarico (se applicabili).
4) Problemi comuni (10) e soluzione.
5) Se il phishing è sospettato: cosa fare.
6) FAQ (10) + supporto macro (8).`,
  thumbnail: ""
},
{
  id: "sop-doc-043",
  title: "Doc 'come segnalare bug' per gli utenti di potenza: repro, loghi, HAR e brevi video",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Guida avanzata per segnalazioni di bug di alta qualità.",
  prompt: `Prodotto: [web]
Utenti avanzati: [sì]
Strumenti: [Chrome]

Scrivere una guida con:
1) modello di report bug.
2) Come registrare video corto utile (cosa mostrare).
3) Come rimuovere il registro della console (passi).
4) Come esportare file HAR (steps) se applicato.
5) Come non utilizzare i dati prima dell'invio.
6) Cosa NON inviare (dati sensibili).
7) FAQ (8).`,
  thumbnail: ""
},
{
  id: "sop-doc-044",
  title: "'Compliance e privacy' Doc per il supporto: cosa registrarsi in biglietti e cosa non",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Norme sulla privacy per gli agenti: PII, pagamenti, password, cattura e ritenzione.",
  prompt: `Regione: []
Strumento biglietto: []

Creare un documento interno con:
1) Cosa non chiedere mai (lista).
2) Che cosa se chiedete e come (si veda).
3) Come gestire catture PII (blur, scrittura).
4) Retenzione dei biglietti: cosa rimane e quanto (alto livello).
5) Personale sicuro per richiedere la verifica.
(6) Elenco di controllo della conformità (15).`,
  thumbnail: ""
},
{
  id: "sop-doc-045",
  title: "Doc per gli utenti di business: onboarding, security, SSO e best practice",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Guida aziendale per ridurre i biglietti: SSO, ruoli, sicurezza e supporto.",
  prompt: `Uscita: []
[sì / no]
[]

Scrivere un documento aziendale con:
1) Elenco di controllo di bordo (15).
2) Configurazione consigliata (sicurezza, ruoli).
3) SSO (se applicabile): passi + risoluzione dei problemi.
(4) Gestione e accesso degli utenti.
5) FAQ (12) + supporto macro (10).`,
  thumbnail: ""
},

{
  id: "sop-doc-046",
  title: "Doc 'Come leggere un errore': modello per standardizzare messaggi di errore e azioni",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Convertire errori tecnici in messaggi utili con azioni e link.",
  prompt: `Sistema: []
Errori comuni: Traduzione:

Crea uno standard:
1) Formato di errore:
- titolo
- quello che è successo (umano)
- cosa fare ora (azione)
- dettagli tecnici (collapsing)
- link all'articolo
2) 15 esempi di errori riscritti a seguito dello standard.
3) Guida di supporto: come mappare l'errore → articolo → macro.`,
  thumbnail: ""
},
{
  id: "sop-doc-047",
  title: "'File uploading' Doc: formati, dimensioni, errori e soluzioni",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Articolo completo di upload con limiti, compressione e risoluzione dei problemi.",
  prompt: `Tipo di file: [immagini / video / docs]
Limiti: [dimensione / formato]
Piattaforma: [web / app]

Scrivi un articolo con:
1) Requisiti (formati / dimensioni).
2) Come salire (passi).
3) Errori comuni (12) con soluzione.
4) Suggerimenti: compressione e qualità.
5) FAQ (10) + supporto macro (8).`,
  thumbnail: ""
},
{
  id: "sop-doc-048",
  title: "Doc 'inventario degli articoli': elenco dei documenti critici + proprietario + data + successiva recensione",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Modello per mantenere la vostra base di conoscenza viva e aggiornata.",
  prompt: `[]
Proprietari: [team / people]
Recensione di frequenza: []

Crea un inventario in formato tabla-in-text con colonne:
- Titolo
- Categoria
- Titolare
- Ultimo aggiornamento
- Prossima recensione
- Indicatori (biglietti associati, ricerche)
Include:
1) 25 articoli "critici" suggeriti per la vostra attività.
2) Procedura mensile (steps) per la revisione e l'aggiornamento.
3) Come decidere di "file" vs "update".`,
  thumbnail: ""
},
{
  id: "sop-doc-049",
  title: "Doc.: «Procedura di rimborso» (internal): passi a piedi + controlli",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "SOP interno per il trattamento dei rimborsi con controlli, registri e comunicazioni.",
  prompt: `Sentiero: [Stripe / PayPal / ecc.]
Politica: []
[]

Creare un SOP interno con:
(1) Requisiti precedenti (verificazioni).
2) Accurate passi sulla passerella (generico se non c'è dettaglio).
3) Controlli antifrode.
4) Comunicazione al cliente:
- approvato
- tempi
- voucher
5) Registrazione interna:
- campi obbligatori
- tags
(6) Audit: checklist (10).`,
  thumbnail: ""
},
{
  id: "sop-doc-050",
  title: "'Supporto controllo qualità' Doc: rubrico, esempi e processo di coaching",
  area: "Supporto clienti & SOP",
  category: "Docs",
  summary:
  "Sistema QA per il supporto: criteri, punteggio, esempi e piano di miglioramento.",
  prompt: `Attrezzature: []
Canali: []
Obiettivo: [CSAT / deflettore]

Crea un documento con:
1) QA (1-5) con 10 criteri:
- chiarezza, empatia, CTA unico, accuratezza, politiche, ecc.
2) Esempi di:
- risposta 5 / 5
- risposta 3 / 5
- risposta 1 / 5
3) Processo di revisione:
- campionamento
- feedback
- coaching
4) Piano di miglioramento per agente (staff).
5) Medici e come interpretarli.`,
  thumbnail: ""
}];