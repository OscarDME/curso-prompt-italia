// src/lib/prompts/text/abogado-legal-otros.js

export const textPromptsAbogadoLegalOtros = [
{
  id: "legalotros-001",
  title: "Elenco legale generale per lanciare un business online (veloce e realistico)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "360 ° revisione dei rischi e basi legali da vendere online senza avvitare.",
  prompt: `Agisce come avvocato senior per gli affari digitali.

Ingressi:
- Paese / giurisdizione (generico).
- Tipo di attività (corso, SaaS, e-commerce, agenzia, affiliati, ecc.).
- Canali di vendita (web, IG, WhatsApp, markplaces).
- Tipo di pagamento (Stripe, PayPal, trasferimenti).
- No. Se ci sono dati personali (sì / no) e ciò che raccogli.

Genera:
1) Elenco di controllo legale prioritario (alto / medio / basso) per essere in grado di vendere già.
2) politiche minime consigliate (termini, privacy, rimborso).
3) Rischi tipici per modello di business e come mitigarli.
4) "Che cosa non promettono" nel marketing per evitare problemi.
5) 7 giorni intendono essere coperti con l'essenziale.`,
  thumbnail: ""
},

{
  id: "legalotros-002",
  title: "Testo dei termini e delle condizioni (modello generico + segnaposto)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Struttura completa per i termini del sito (non citando leggi) pronti a riempire.",
  prompt: `Agisce come avvocato. Creare un modello Termini e Condizioni per un sito web.

Ingressi:
- Nome di affari.
- No. Che cosa si vende / offerta.
- No. Se c'è un abbonamento / abbonamento.
- Cancellazione / politica di rimborso.
- Contatto e supporto.

Genera:
1) Documento completo con sezioni standard.
2) Clausole chiave: uso accettabile, pagamenti, rimborsi, limitazione della responsabilità (generico), proprietà intellettuale (generico), cessazione.
3) Sezioni con [REEMPLAZAR] dove manca l'informazione.
4) Checklist finale da rivedere prima della pubblicazione.`,
  thumbnail: ""
},

{
  id: "legalotros-003",
  title: "Politica di rimborso (chiaro e anti-dispute)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Politica scritta per ridurre i costi e le richieste, con linguaggio comprensibile.",
  prompt: `Agisce come avvocato e specialista della prevenzione delle dispute.

Ingressi:
- Prodotto (digitale / servizio).
- finestra di rimborso (giorni o "nessun rimborso").
- Condizioni (consumo di contenuti, download, assistenza chiamata).
- Casi speciali (duplica, frode, errore tecnico).
- Canale di supporto.

Genera:
1) Politica di rimborso finale da incollare sul sito.
2) Esempi sezione "Si applica / non si applica."
3) Copia di controllo (2-3 linee) che riduce le controversie.
4) Procedura di sostegno interno (passo per passo).
5) Tipo risposta per e-mail di rimborso (3 toni: amichevole / solida / molto solida).`,
  thumbnail: ""
},

{
  id: "legalotros-004",
  title: "Analisi del rischio tramite reclami pubblicitari + versione sicura",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Controllare le promesse di marketing e riscrivere loro per renderli più defensibili.",
  prompt: `Agisce come un avvocato pubblicitario / consumatore.

Ingressi:
- Lista di 10-20 frasi / promesse di marketing.
- Prodotto e pubblico.
- Prove che dovete sostenere (testimoni, dati, casi).

Genera:
1) Tabella: reclamo originale - 124; rischio (alto / medio / basso) - 124; perché - 124; versione più sicura.
2) 10 utili disclaimer (non sono spaventati).
3) regole rapide per il vostro team di marketing (fare / non).
4) modello di "testimonianze permesse" (che includere / cosa evitare).`,
  thumbnail: ""
},

{
  id: "legalotros-005",
  title: "Risposta a un chargeback / contenzioso di pagamento (pacchetto di prova + narrazione)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Arma la tua difesa per il processore: prove, narrazione e lista di controllo.",
  prompt: `Agisce come avvocato e specialista delle controversie di pagamento.

Ingressi:
- Motivo del chargeback (non riconosciuto, servizio non ricevuto, ecc.).
- Data di acquisto e importo.
- Prove: log di accesso, e-mail, IP, supporto, download.
- Politica di rimborso pubblicata (sì / no).

Genera:
1) Short Narrative (1-2 paragrafi) da presentare al processore.
2) Elenco di controllo delle prove ideali per tipo di controversia.
3) Elenco degli allegati consigliati (catches e come nominarli).
4) Tipo di risposta al cliente (per cercare di risolvere prima).
5) Come regolare il processo per ridurre i prossimi chargeback.`,
  thumbnail: ""
},

{
  id: "legalotros-006",
  title: "Politica sulla privacy (semplificare il progetto) + inventario dei dati",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Template + inventario: quali dati raccogli, per cosa e come gestirli.",
  prompt: `Agisce come avvocato della privacy (per non parlare di leggi specifiche).

Ingressi:
- No. Quali dati raccogli (email, nome, pagamenti, IP, ecc.).
- Strumenti (analisi, email marketing, pagamenti).
- No. Se ci sono minori (sì / no).
- Paesi dove vendi.

Genera:
1) inventario dei dati (tabella): dati - 124; scopo - 124; base / rapporto - 124; ritenzione - 124; terzo.
2) Informativa sulla privacy in lingua chiara (pronta a incollare).
3) Cookie / Analytics (Generale) Sezione.
4) Controllo della conformità minima (accesso, cancellazione, contatto).`,
  thumbnail: ""
},

{
  id: "legalotros-007",
  title: "Avviso di cookie (microcopia + testo banner)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Testi per cookie banner e cookie pagina, nessuna tecnica.",
  prompt: `Agisce come avvocato e scrittore UX.

Ingressi:
- No. Se si utilizza l'analisi (sì / no).
- No. Se si fa remarketing / annunci (sì / no).
- Lingua (neutral spagnolo).

Genera:
1) breve testo per banner (2 versioni: minimalista e dettagliata).
2) Testo per pulsante / azioni (accettare, rifiutare, configurare).
3) Copia pagina Cookie (sezioni + semplice spiegazione).
4) Cookie FAQ (6 domande).`,
  thumbnail: ""
},

{
  id: "legalotros-008",
  title: "DMCA / rapporto di violazione (tenuti di ordinare la perdita di contenuti)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Modelli per segnalare copie dei tuoi contenuti su reti o siti.",
  prompt: `Agisce come avvocato di proprietà intellettuale (per non parlare di leggi).

Ingressi:
- Collegamento di contenuti di violazione.
- Link del contenuto originale.
- Prova di autorizzazione (catches, date, file).
- Piattaforma (YouTube, IG, TikTok, web, hosting).

Genera:
1) Email / richiesta formale di takedown (templato).
2) Breve messaggio per il supporto della piattaforma.
3) Elenco delle prove da allegare.
4) Testo da inviare al colpevole (amichevole / ditta).
5) Elenco di controllo del follow-up (24h, 72h, 7 giorni).`,
  thumbnail: ""
},

{
  id: "legalotros-009",
  title: "Recensione di un accordo NDA / Privacy (Rete per i miglioramenti +)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Lista di controllo per rilevare trappole comuni in un NDA prima di firmare.",
  prompt: `Agisce come avvocato. Controlla un NDA dal lato di chi firma.

Ingressi:
- Incolla l'intero NDA o punti chiave.
- Il tuo ruolo (ricevitore o divulgazione).
- No. Quali informazioni condividerete.
- Limite di tempo (sì / no).

Genera:
1) Red lags (list) con spiegazione.
2) Quali termini negoziare sì o sì.
3) Versione di redazione consigliata per punti critici (generico).
4) Rischi se firmate così.
5) E-mail di trading (2 versioni: cordiale e solida).`,
  thumbnail: ""
},

{
  id: "legalotros-010",
  title: "Manuale interno: cosa fare se si riceve una notifica legale (SOP)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Procedura per il vostro team: rispondere, documentare e scalare senza panico.",
  prompt: `Agisce come avvocato aziendale. Crea un SOP per gestire le notifiche legali.

Ingressi:
- Tipo di affari.
- Canali di contatto (assistenza e-mail, legale, ecc.).
- Squadra (che decide).
- Tipi comuni di notifica (copyright, consumatore, pagamento, diffamazione).

Genera:
1) Passo dopo passo SOP (prima 2 ore, 24h, 72h).
2) Modelli di risposta iniziale (non ammettere, informazioni ordine).
3) Elenco di controllo della documentazione e conservazione delle prove.
4) Severe Matrix (basso / medio / alto) e azioni.
5) "Errori che non dovremmo fare".`,
  thumbnail: ""
},

{
  id: "legalotros-011",
  title: "Termini comunitari (Discord / Telegram) + regole anti-baneo",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Regole chiare per la moderazione, le espulsioni e la condotta all'interno della comunità.",
  prompt: `Agisce come avvocato e scrittore di politiche comunitarie.

Ingressi:
- Piattaforma (Discord / Telegram).
- Problemi sensibili (sì / no).
- No. Se ci sono minori (sì / no).
- Stile (stretto / rilassato).

Genera:
1) Norme comunitarie (10-15 regole).
(2) Politica di moderazione (avvertimento, sospensione, espulsione).
(3) Clausola di responsabilità e di contenuto di terzi (generale).
4) Modelli di messaggi di moderazione (tipo / azienda).
5) Elenco delle pratiche di prevenzione dei conflitti.`,
  thumbnail: ""
},

{
  id: "legalotros-012",
  title: "Clausole di prova e di successo (consenso + utilizzo)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Testo per ordinare il permesso e utilizzare la testimonianza in modo sicuro.",
  prompt: `Agisce come avvocato. Un messaggio per la testimonianza.

Ingressi:
- Formato di testimonianza (video, testo, cattura).
- No. Dove sarà utilizzato (web, annunci, reti).
- No. Se si mostra nome / foto (sì / no).
- Se i risultati numerici (sì / no) sono inclusi.

Genera:
(1) Modulo / consenso completo.
2) Versione breve per DM / WhatsApp.
3) Sezione immagine / nome (opzionale).
4) Regole per la modifica di testimonianze non manipolate.
5) Disclaimer consigliato quando ci sono risultati variabili.`,
  thumbnail: ""
},

{
  id: "legalotros-013",
  title: "Politica antifrode e abusiva (rivendita, condivisione account, raschiamento)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Regole per limitare l'abuso senza pregiudicare i clienti normali.",
  prompt: `Agisce come avvocato. Politica di progettazione contro frodi e abusi per prodotto digitale.

Ingressi:
- Prodotto (corso, biblioteca, appartenenza).
- Tipo di abuso osservato (conti condivisi, raschiamento, rivendita).
- Misure tecniche disponibili (limiti tariffari, log, blocco IP).

Genera:
1) Politica di colpire il sito (chiaro, non aggressivo).
2) Tabella: abuso - 124; segnale - 124; azione (avvertimento / blocco / rimborso / divieto).
3) Testo di avviso e-mail (1 ° avviso / 2do / sospensione).
4) Raccomandazioni tecniche minime per sostenere la politica.
5) Domande frequenti per clienti onesti.`,
  thumbnail: ""
},

{
  id: "legalotros-014",
  title: "Revisione legale della pagina di atterraggio (struttura + rischi + miglioramenti)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Controlla uno sbarco dal lato del rischio: crediti, garanzie, rimborsi, prove.",
  prompt: `Agisce come un consumatore / avvocato pubblicitario. Controlla un atterraggio.

Ingressi:
- Incolla il testo dell'atterraggio.
- Prezzo e offerta.
- Garanzia (se presente).
- Testimonianze (se presenti).
- Al pubblico.

Genera:
1) Elenco dei rischi per sezione (Hero, Bullets, testimonianze, garanzia, FAQ).
2) Modifiche raccomandate (copia alternativa).
3) Dove aggiungere disclaim senza uccidere la conversione.
4) Elenco degli elementi obbligatori (contatto, rimborso, termini).
5) versione "Safer" dell'eroe + proiettili principali.`,
  thumbnail: ""
},

{
  id: "legalotros-015",
  title: "Politica di affiliazione (regole di promozione + divieti)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Regole per le affiliate per evitare pubblicità ingannevole o spam.",
  prompt: `Agisce come avvocato. Creare politica per il programma di affiliazione.

Ingressi:
- Commissione.
- Canali consentiti (Meta Ads, Google, email, organico).
- Registrazione (se applicabile).
- Prolungati proibizioni (spam, falsi incentivi, reclami).

Genera:
1) Politica di adesione completa.
2) Elenco dei reclami e degli esempi proibiti.
3) Regole di utilizzo di marca e annunci.
(4) Conseguenze non conformi (fase).
5) Avvertenza + modello di e-mail di terminazione.`,
  thumbnail: ""
},

{
  id: "legalotros-016",
  title: "Due diligence light per acquistare un business (micro-checklist)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Quick Checklist per rivedere i rischi prima di acquistare una società / asset digitale.",
  prompt: `Agisce come avvocato e revisore dei rischi. Fai una lista di controllo di due diligence.

Ingressi:
- Tipo di attività (SaaS, ecom, contenuto).
- Attività chiave (dominio, liste, IP, contratti).
- Redditi e fornitori.
- Paese di funzionamento.

Genera:
1) Lista di controllo per area: finanziaria, legale, IP, privacy, funzionamento.
2) "Killer Questions" (15) che rivelano problemi.
3) Tipiche terre rosse e quali prove chiedere.
(4) Struttura dei documenti da richiedere.
5) Piano di 10 giorni per una rapida revisione.`,
  thumbnail: ""
},

{
  id: "legalotros-017",
  title: "Guida di conformità per i sorteggi di rete / concorsi (non comprese le leggi)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Struttura sicura per rendere giveaway / rispondere senza entrare nei guai.",
  prompt: `Agisce come avvocato. Creare una guida per il disegno / conteggio su reti.

Ingressi:
- Piattaforma (IG / TikTok / FB).
- Paesi partecipanti.
- Premio.
- Durata.
- Meccanico (follow, commento, ecc.).

Genera:
1) Disegnare regole (template) con [REEMPLAZAR].
2) Elenco di controllo del rischio (età, paesi, tasse, falsi vincitori).
3) Copia post e storia (compreso breve disclaimer).
4) Processo interno per scegliere vincitore e documentarlo.
5) Messaggi al vincitore e non vincitori.`,
  thumbnail: ""
},

{
  id: "legalotros-018",
  title: "Contenuto generato dall'utente (UGC) e clausole di autorizzazioni",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Come ordinare il permesso e fare uso chiaro di UGC (recensioni, foto, video).",
  prompt: `Agisce come avvocato. Crea testo per i permessi UGC.

Ingressi:
- No. Quali tipi di UGC (foto, video, recensione).
- No. Dove sarà utilizzato (ad, web, e-mail).
- Se pagato (sì / no).

Genera:
1) testo di consenso UGC (lungo).
2) Versione breve per DM / WhatsApp.
3) Clausola di abrogazione (opzionale) e come gestirla.
4) Elenco di controllo per mantenere la prova del consenso.
5) Raccomandato disclaim quando ci sono risultati variabili.`,
  thumbnail: ""
},

{
  id: "legalotros-019",
  title: "\"Risposta legale\" modello a recensione negativa (inondata, non aumentata)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Risponde alle critiche senza ammettere responsabilità e senza bruciare i cittadini.",
  prompt: `Agire come avvocato + servizio clienti. Esso stabilisce le risposte alle recensioni negative.

Ingressi:
- Testo della recensione.
- Contesto (cosa è successo veramente).
- Politica di rimborso (sì / no).
- Tono (neutral / amichevole / ditta).

Genera:
1) Risposta pubblica (breve, professionale).
2) Messaggi privati da risolvere (più dettagliati).
3) Elenco delle cose che non devi dire.
(4) Protocollo interno per indagare il caso.
5) 3 variazioni per tipo di revisione (fraud, incomprensione, reale).`,
  thumbnail: ""
},

{
  id: "legalotros-020",
  title: "Lista di controllo per proteggere il tuo marchio (nome, logo, domini, abuso)",
  area: "Avvocato e legale",
  category: "Altri",
  summary:
  "Azioni pratiche per proteggere il marchio ed evitare sopianti.",
  prompt: `Agisce come avvocato IP. Progetta un piano di protezione del marchio (generico).

Ingressi:
- Nome di marca.
- Paesi target.
- Canali dove esiste (IG, TikTok, web).
- No. Se ci sono già imitatori (sì / no).

Genera:
1) Elenco di controllo di protezione (domini, maniglie, documentazione).
2) routine di monitoraggio mensile (cosa cercare).
3) Modelli: avviso di imitatore + rapporto piattaforma.
4) Norme di marcatura per collaboratori / affiliati.
5) Piano d'azione se siete soppiantati (passo per passo).`,
  thumbnail: ""
}];