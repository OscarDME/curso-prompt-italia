// src/lib/prompts/text/abogado-legal-litigio-resolucion-conflictos.js

export const textPromptsAbogadoLegalLitigioResolucionConflictos = [
{
  id: "legallitigio-001",
  title: "Analisi dei casi iniziali + strategia (albero di decisione)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Diagnosi completa dei casi: fatti, rischi, opzioni e strategia consigliata.",
  prompt: `Agisce come contenzioso senior. Analizza il caso e progetta la strategia.

Ingressi:
- Giurisdizione / paese (non comprese le leggi specifiche).
- Tipo di conflitto (civile, commerciale, consumo, ecc.).
- Fatto in punti.
- Parti coinvolte e relazioni.
- Prove disponibili (doc, chat, testimoni).
- No. L'obiettivo del cliente (per raccogliere, difendere, accettare, misure urgenti).
- Bilancio/emergenza.

Genera:
1) Riepilogo dei casi (1 pagina).
2) Questioni chiave e punti controversi.
3) Punti di forza / debolezze (tabella).
4) Albero delle decisioni: A) negoziato, B) mediazione, C) domanda, D) difesa.
5) Piano dei prossimi 14 giorni (azioni e documenti da raccogliere).
6) Messaggio per il cliente che spiega i rischi in una lingua semplice.`,
  thumbnail: ""
},

{
  id: "legallitigio-002",
  title: "Cronologia armata (linea temporale) + lacune e domande chiave",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Converte i fatti confondenti in una solida cronologia e rileva le lacune delle informazioni.",
  prompt: `Agisce come avvocato. Costruisce una cronologia del caso.

Ingressi:
- Lista eventi con date approssimative.
- Documenti e messaggi disponibili.
- Eventi chiave (pagamenti, consegne, non conformità).

Genera:
1) Timeline in tabella: data - 124; evento - 124; prove - 124; impatto legale / strategico (generico).
2) 15 domande di follow-up per chiudere le lacune.
3) "buoni fatti" vs "cattivo fatti" per il vostro cliente (tabella).
4) Elenco delle prove mancanti di priorità (alto / medio / basso).
5) Terre rosse (incongruenze) che un avvocato rivale avrebbe attaccato.`,
  thumbnail: ""
},

{
  id: "legallitigio-003",
  title: "Lettera di rivendicazione pre-litto (ferma, professionale e negoziatore)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Scrivere una lettera formale per richiedere il pagamento / danni prima di fare causa (non bruciato).",
  prompt: `Agisce come avvocato. Esso definisce una lettera di pretesa pre-illuminista.

Ingressi:
- Deudor / opposto (nome, azienda).
- Fatti (sommario).
- Importo richiesto o compensazione.
- E' ora di rispondere / pagare.
- Prove principali (fatture, contratti, chat).
- Tono desiderato: morbido / fermo / molto fermo.

Genera:
1) Carta completa in formato professionale.
2) 3 versioni del paragrafo di chiusura (soft / ferma / molto solida).
3) Elenco degli allegati allegati allegati.
4) Monitoraggio dello script di chiamata (5-7 linee).
Non citare articoli; usare la lingua generale.`,
  thumbnail: ""
},

{
  id: "legallitigio-004",
  title: "Risposta alla lettera di reclamo (proposta di difesa + uscita)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Risponde a un reclamo senza ammettere responsabilità e aprire la porta all'accordo.",
  prompt: `Agisce come avvocato difensore. Risponde a una lettera di reclamo.

Ingressi:
- Spese principali.
- La sua versione dei fatti.
- Prove a favore.
- No. Che cosa siete disposti a offrire (se applicabile).
- Linee rosse (non ammettere colpa, non pagare X, ecc.).

Genera:
(1) Lettera piena di risposta.
2) paragrafi facoltativi: (A) rifiuto totale, (B) rifiuto parziale, (C) offerta non accettata.
3) Elenco dei punti che ordinate come prova.
4) Il testo "senza pregiudizio / senza riconoscimento" (generico).
5) Proposta di accordo in 3 scenari (basso / medio / alto).`,
  thumbnail: ""
},

{
  id: "legallitigio-005",
  title: "Teoria del caso (storyline) per giudice / arbitro: 1 pagina",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Crea la narrazione centrale: quello che è successo, perché conta, quello che chiedi e perché.",
  prompt: `Agisce come avvocato contenzioso. Costruisce una chiara e persuasiva "teoria dei casi".

Ingressi:
- Fatti chiave (massimo 10 proiettili).
- Obiettivo (recupero / danno / difesa).
- Prova stellare (massimo 5 pezzi).
- Punto debole (se presente).

Genera:
1) teoria dei casi (massimo 400-600 parole).
2) 5 frasi "suono morso" per le udienze.
3) Elenco di 6 fatti è necessario dimostrare sì o sì.
4) Mappa: prove → fatto che prova (tabella).
5) Come neutralizzare il punto debole (3 tattiche).`,
  thumbnail: ""
},

{
  id: "legallitigio-006",
  title: "Evidence map (documentario / testimonial / esperto) + piano di approvvigionamento",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Organizza tutte le prove e pianifica come ottenere ciò che manca.",
  prompt: `Agisce come avvocato. Progettare una mappa di prova.

Ingressi:
- No. Quello che vuoi dimostrare (pretensioni o difese).
- Le prove che hai già.
- Prove che sospetti l'altra parte.
- Potenziali testimoni.

Genera:
1) Matrice: elemento di prova - 124; tipo di prova - 124; fonte - 124; priorità - 124; rischio.
2) Piano per ottenere prove mancanti (passi e ordine).
3) Controllo della conservazione delle prove digitali (chat, e-mail).
4) Elenco dei rischi di "prove contaminate" e come evitarle.
5) Guida per l'intervista iniziale (10 domande).`,
  thumbnail: ""
},

{
  id: "legallitigio-007",
  title: "Quantificazione dei danni (scenarios) + supporto documentario",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Calcola danni/addebiti non inventati: scenari e documenti da giustificare.",
  prompt: `Agisce come avvocato e analista. Quantifica danni / debito negli scenari.

Ingressi:
- Importo base (se presente).
- Pagamenti effettuati.
- Costi correlati.
- Danni emergenti vs perdita di profitto (se applicabile).
- Prove finanziarie disponibili.

Genera:
1) 3 scenari: conservatore / probabile / aggressivo (tabella).
2) Quali documenti supportano ogni articolo (lista).
3) Quali elementi NON pretendere per mancanza di supporto (e perché).
4) Piano per ottenere supporto documentario (steps).
5) Riepilogo esecutivo per spiegare i danni del cliente (lingua semplice).`,
  thumbnail: ""
},

{
  id: "legallitigio-008",
  title: "Cancellatore di domanda (scheletro + sezioni + segnaposto)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Struttura una domanda generica (per non parlare di articoli) pronto a riempire.",
  prompt: `Agisce come avvocato. Esso stabilisce un progetto di applicazione (templato).

Ingressi:
- Giurisdizione / forum (generico).
- Attore e convenuto.
- Fatti (cronologia).
- Pretensione.
- Danni / quantità.
- Prove principali.

Genera:
1) Documento con sezioni standard.
2) fatti numerati, chiaro.
(3) Pretensioni e richieste finali.
4) Elenco degli allegati suggeriti.
5) Checklist recensione prima della presentazione.
Usa [REEMPLAZAR] dove manca l'informazione. Non citare leggi specifiche.`,
  thumbnail: ""
},

{
  id: "legallitigio-009",
  title: "Risposta della domanda (struttura + difese + tono corretto)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Modello di risposta per negare / accettare fatti e sollevare difese.",
  prompt: `Agisce come avvocato difensore. Scrivi una risposta su richiesta.

Ingressi:
- Sommario della domanda / reclami.
- Fatti presunti dall'altra parte.
- La tua versione dei fatti.
- Prove a favore.
- Obiettivo (dismissione, limitazione dei danni, negoziare).

Genera:
1) Risposta completa con sezioni standard.
2) Tabella: presunto fatto - 124; posizione (ammissione / negazione / parziale) - 124; breve spiegazione - 124; prova.
3) Elenco delle difese generiche applicabili (non comprese le leggi).
4) Pretensioni dell'imputato (cosa chiedete alla corte).
5) Strategia di negoziazione parallela (2 proposte).`,
  thumbnail: ""
},

{
  id: "legallitigio-010",
  title: "Deroghe preliminari / difese (checklist + wording di base)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Identifica frequenti difese iniziali e scrive testo di base per usarle.",
  prompt: `Agisce come avvocato. Costruisce le difese preliminari generiche.

Ingressi:
- Tipo.
- Forum / giurisdizione (generico).
- Date e scadenze rilevanti.
- Documenti chiave.

Genera:
1) Elenco di controllo delle difese preliminari applicabili (con spiegazione).
2) Base corta per ciascuna (3-6 linee).
(3) Prove / documenti necessari per sostenerli.
4) Rischi di rivendicarli se non si applicano (cosa evitare).
5) Ordine consigliato di presentarli.`,
  thumbnail: ""
},

{
  id: "legallitigio-011",
  title: "Script di negoziazione (BATNA, concessioni, linee rosse)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Sistema di accordi di negoziazione senza cedere il caso.",
  prompt: `Agisce come avvocato negoziale. Progetta uno script di negoziazione.

Ingressi:
- Obiettivo finale.
- Importo ideale / minimo accettabile.
- Rischi di caso.
- Rapporto futuro con l'altra parte (sì / no).
- Tempo/urgenza.

Genera:
1) BATNA e WATNA (migliore / alternativa peggiore).
2) Elenco delle concessioni graduali (cosa do e cosa chiedo).
3) Linee rosse e segnali di uscita.
4) 10 minuti di call script (apertura → proposta → chiusura).
5) 5 frasi per trattare obiezioni comuni.`,
  thumbnail: ""
},

{
  id: "legallitigio-012",
  title: "Conciliazione / accordo di transazione (trattato) - non contratti commerciali, solo regolamento",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Progetto di accordo per chiudere la controversia: pagamenti, rinuncia, riservatezza, non ammissione.",
  prompt: `Agisce come avvocato. Esso stabilisce un accordo di insediamento.

Ingressi:
- Parti.
- Disguise (sommario).
- Pagamenti / compensazione.
- Date di conformità.
- No. Se c'è riservatezza (sì / no).
- No. Se ci sarà una clausola non discredito (sì / no).
- Conseguenze per non conformità.

Genera:
1) Composizione completa con sezioni standard.
2) Clausole: non-ammissione, rilascio / rinuncia di azioni, riservatezza (facoltativo), non-diprestigio (opzionale).
(3) Allegato: Calendario dei pagamenti.
4) Breve testo per la chiusura e-mail "accordo raggiunto".
Per non parlare di leggi; utilizzare [REEMPLAZAR] dove le informazioni sono mancanti.`,
  thumbnail: ""
},

{
  id: "legallitigio-013",
  title: "Preparazione dell'udito: script + ordine di argomenti + obiettivi",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Armare uno script del pubblico: apertura, punti chiave, risposte e chiusura.",
  prompt: `Agisce come avvocato contenzioso. Progettare preparazione del pubblico.

Ingressi:
- Tipo di udito (misure, preliminare, prova, ecc.).
- 3 argomenti principali.
- Prove principali.
- Probabili argomenti dall'altra parte.

Genera:
1) 5-8 minuti di script (apertura → sviluppo → chiusura).
2) Elenco delle domande che il giudice potrebbe fare e le risposte suggerite.
3) "Se mi interrompi, torno a..." (frasi ponti).
4) Priorità: cosa dire sì o sì in 60 secondi.
(5) Elenco di controllo (documenti, copie, allegati).`,
  thumbnail: ""
},

{
  id: "legallitigio-014",
  title: "Interrogatorio diretto (prossimo testimone) - domande di blocco",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Struttura domande di self-witness ed evitare domande pericolose.",
  prompt: `Agisce come avvocato. Progetta di interrogare direttamente il suo testimone.

Ingressi:
- Chi è il testimone (rolo / relazione).
- Fatti da accreditare (lista).
- Documenti che puoi autenticare.
- Punti sensibili (da evitare).

Genera:
1) Blocchi di domanda: identificazione, contesto, fatti, documenti, chiusura.
2) 25-40 domande suggerite (chiaro e sequenziale).
3) Domande proibite / rischiose e perché.
4) Mini- script della preparazione del testimone (come rispondere).
5) 5 domande "rescue" se confuse.`,
  thumbnail: ""
},

{
  id: "legallitigio-015",
  title: "Interrogazione (contrario) - obiettivi e domande\" sì / no",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Guida ad indebolire la credibilità e stabilire fatti accettati.",
  prompt: `Agisce come avvocato. Progetta l'esame incrociato per il testimone opposto.

Ingressi:
- Profilo del testimone opposto.
- violazioni note (cassi / documenti).
- I fatti che vuoi risolvere.
- Punto emotivo che puo' esplodere.

Genera:
1) Obiettivi di esame incrociato (max 5).
2) 30 domande chiuse (sì / no) per blocco.
3) Percorso se negato: prove da mostrare (in ordine).
4) Come evitare di spiegare troppo (tecnica).
5) Chiudi: 3 domande finali per lasciare "l'idea" in camera.`,
  thumbnail: ""
},

{
  id: "legallitigio-016",
  title: "Misurazione: 1 pagina breve + proposta di disposizione",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Documento compatto per la mediazione: fatti, punti, proposte e concessioni.",
  prompt: `Agisce come avvocato. Sta scrivendo un brief per la mediazione.

Ingressi:
- Disguise (sommario).
- Fatti chiave.
- Rischi da ogni lato.
- No. Cosa vuoi ottenere?
- No. Quello che sarebbe disposto a concedere.

Genera:
1) Breve 1 pagina (fatti + posizione).
2) Elenco di 6 punti negoziabili.
3) Proposta iniziale di regolamento (importo / azioni / limiti di tempo).
4. "pacchetto alternativo" nel caso rifiutassero la prima proposta.
5) Aprire lo script per la mediazione (2 min).`,
  thumbnail: ""
},

{
  id: "legallitigio-017",
  title: "Gestione delle prove digitali (WhatsApp / Email / GDrive): protocollo semplice",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Elenco di controllo e protocollo per preservare le prove digitali senza rovinarne la validità.",
  prompt: `Agisce come avvocato. Crea un protocollo pratico per preservare le prove digitali.

Ingressi:
- Fonti: WhatsApp, e-mail, reti, unità, chiamate, ecc.
- Tipo di prova (messaggio, file, registri, catture).
- Chi ha accesso.

Genera:
1) Elenco di controllo della prenotazione per fonte (passi concreti).
2) nomi di cartelle suggeriti e convenzione di file.
3) Cosa NON fare (errore di tipo: editare, inoltrare, tagliare, ecc.).
4) catena di base del piano di custodia (iscrizione semplice).
5) Elenco delle prove prioritarie "alto impatto".`,
  thumbnail: ""
},

{
  id: "legallitigio-018",
  title: "Riepilogo del caso per consegnare ad un altro avvocato",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Pacchetto chiaro per 'handoff': fatti, documenti, stato, scadenze e strategia.",
  prompt: `Agisce come avvocato. Summarizzare il file per il trasferimento.

Ingressi:
- Fatti e cronologia.
- Documenti chiave.
- Stato della causa (se si verificano procedimenti).
- La prossima volta.
- Contatto / testimone.

Genera:
1) Riepilogo esecutivo (max 1 pagina).
2) Cronologia (tabella).
3) Indice documenti chiave con descrizione.
4) Elenco delle scadenze eccezionali e critiche.
5) Raccomandazione di strategia (2 strade).`,
  thumbnail: ""
},

{
  id: "legallitigio-019",
  title: "Rischio di sostituzione e comunicazione (cosa dire / cosa non dire)",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Linee guida per comunicare con i clienti / utenti / reti durante una disputa senza mettere il piede in.",
  prompt: `Agisce come avvocato e PR di crisi. Crea linee guida di comunicazione durante il contenzioso.

Ingressi:
- Contesto del conflitto.
- Audizione (clienti, reti, fornitori, attrezzature).
- No. Ha trapelato o può trapelare.
- Tono di marca.

Genera:
1) "I punti di ristoro" consentiti (5-8).
2) Elenco delle frasi proibite e perché.
3) risposte alle domande (8 domande).
4) Modelli brevi: e-mail ai clienti + comunicazione interna.
5) Piano di scala: quando l'avvocato vs il supporto risponde.`,
  thumbnail: ""
},

{
  id: "legallitigio-020",
  title: "Preparazione della lista di controllo prima di esigere (o prima di rispondere) + punteggio",
  area: "Avvocato e legale",
  category: "Controversia e conflitto Risoluzione",
  summary:
  "Valutare se è opportuno contenzioso: lista di controllo con punteggio per decidere con testa fredda.",
  prompt: `Agisce come avvocato. Creare una lista di controllo con punteggio per la decisione del contenzioso.

Ingressi:
- Obiettivo del cliente.
- Prove disponibili.
- Bilancio.
- Emergenza.
- Rischio commerciale / reputazionale.
- Disponibilità di testimoni.

Genera:
1) Lista di controllo con 25 elementi e punteggio (0-2 ciascuno).
2) Interpretazione punteggio (verde / giallo / rosso).
3) Elenco dei "deal breakers" (quando non si fa causa).
4) Piano alternativo se non contenzioso (negoziazione / mediazione).
5) Elenco dei documenti minimi prima di spostare un dito.`,
  thumbnail: ""
}];