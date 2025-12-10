// src/lib/prompts/text/abogado-legal-cumplimiento.js

export const textPromptsAbogadoLegalCumplimiento = [
{
  id: "legalcumplimiento-001",
  title: "Programma di conformità da zero (per pime / startup)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Progetta un programma di conformità pratico: politiche, rischi, responsabilità e prove.",
  prompt: `Agisce come avvocato di conformità. Progetta un programma di conformità da zero.

Ingressi:
- Girare / industria.
- Paese / giurisdizione principale.
- Dimensione squadra (numero di dipendenti).
- Canali di vendita (online, face, B2B / B2C).
- Rischi ricevuti (dati, pubblicità, pagamenti, fornitori).
- Livello di formalità (basico / medio / alto).

Genera:
1) Mappa del rischio (10 + rischi) con probabilità / impatto.
2) Politiche minime (elenco) + obiettivo di ciascuno.
3) Ruolo e responsabile (che approva, chi esegue).
4) Controlli e prove (cosa salvare per dimostrare la conformità).
5) Programma annuale (audit interni, formazione, recensioni).
6) Elenco di controllo "Conformità MVP" (minimo di funzionamento).
Non cita articoli di legge; marchio "dipende dalla giurisdizione.".`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-002",
  title: "Registrazione di rischio legale pronto a copiare",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Crea una matrice di rischio legale con colonne, criteri e un esempio completato.",
  prompt: `Agisce come avvocato di rischio. Costruisce un registro dei rischi.

Ingressi:
- Business e modello (come fai soldi).
- Paesi dove opera.
- Processi chiave (marketing, pagamenti, dati, supporto, fornitori).
- Attività critiche (marca, base clienti, piattaforma).

Genera:
1) Modello con colonne raccomandate (rischio, causa, controllo, proprietario, KPI, prove, ecc.).
2) Criteri per determinare probabilità e impatto (1-5).
3) 15 rischi tipici per questo tipo di attività (ad esempio punteggio).
4) Piano di mitigazione del rischio (azioni specifiche).
5) Come rivedere / aggiornare mensile.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-003",
  title: "Politiche interne necessarie (manuale veloce)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Esso definisce l'insieme minimo di politiche interne e come attuarle senza burocrazia.",
  prompt: `Agisce come avvocato interno (in-house). Mi serve un manuale di politica interna veloce.

Ingressi:
- Tipo di azienda (servizi, e-commerce, SaaS, info product).
- Squadra.
- No. Se ci sono appaltatori / freelance.
- No. Se gestisci i dati personali.

Genera:
1) Elenco delle politiche essenziali (10-15) e di ciò che ciascuna copre.
2) Quale documento va "pubblico" (TOS / Privacy) vs "interno".
3) Formato consigliato (1-2 pagine per policy) per la conformità.
4) Approvazione del flusso e onboarding (come formare nuovi).
(5) Prova minima (cosa risparmiare) per l'audit.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-004",
  title: "Compliance Checklist per marketing e pubblicità (promessi, reclami, testimonianze)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Evitare reclami per pubblicità fuorviante: elenco dei reclami, reclami e prove.",
  prompt: `Agisce come avvocato nella pubblicità / consumo. Creare una lista di controllo di conformità per il marketing.

Ingressi:
- Tipo di offerta (corso, servizio, app, e-commerce).
- reclami tipici (risultati, tempi, denaro, salute, "garantito").
- Canali (TikTok, Meta Annunci, e-mail, atterraggio).
- Uso di testimonianze / casi di successo (sì / no).
- Politica di rimborso.

Genera:
1) Copia elenco di controllo (20 + articoli).
2) Elenco delle "risposte ad alto rischio" e come riscriverle.
3) Disclaim consigliati (in lingua semplice).
4) corretta gestione delle testimonianze (e se / cosa no, prove).
5) Modello di approvazione interna per le campagne.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-005",
  title: "Conformità di base nell'assistenza clienti (reclami, rimborsi, controversie)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "SOP di progettazione per il supporto che riduce i chargeback, i reclami e l'escalation legale.",
  prompt: `Agisce come avvocato + operazioni. Progettazione del servizio clienti SOPs per la conformità.

Ingressi:
- Prodotto (corso, SaaS, fisico).
- Frequenza dei reclami e del tipo (accesso, qualità, consegna, spese).
- Politica di rimborso (sì / no, limiti di tempo).
- Passi a pagamento (Stripe / PayPal / altro).

Genera:
1) Albero di decisione di sostegno (rimborso / cambiamento / scaling).
2) Messaggi modello (5) per casi tipici.
3) Processo anti-ricarica (prove, tempi, loghi).
4) Registrazione degli incidenti (che risparmiare e per quanto tempo).
5) Tecniche di conformità (supporto SLA, tasso di disputa, ecc.).
Non inventare leggi, concentrati sulle migliori pratiche.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-006",
  title: "Informativa sulla privacy MVP (online + testo di base)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Crea una politica sulla privacy minima, con i campi [REPLACE] per il tuo sito / app.",
  prompt: `Agisce come avvocato. Definisce un MVP Informativa sulla privacy.

Ingressi:
- Tipo di affari.
- Dati raccolti (email, pagamento, IP, analisi, cookie).
- Provider (Stripe, Vercel, email marketing, analisi).
- Paese / giurisdizione principale.
- No. Se ci sono minori (sì / no).

Genera:
1) Sezione Outline.
2) Testo di base completo con [REEMPLAZAR] dove i dati mancano.
3) Tavola semplice: tipo di dati → scopo → base / giustificazione (non citando leggi).
4) Diritti dell'utente (generico) + come applicare.
5) Cookie (testo semplice) e link alle preferenze, se del caso.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-007",
  title: "Gestione del fornitore (rischio di terze parti) + contratto quadro",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Lista di controllo per valutare fornitori e clausole chiave per ridurre i rischi.",
  prompt: `Agisce come avvocato commerciale / conformità. Progetta un processo di valutazione del fornitore.

Ingressi:
- Tipo di fornitore (cloud, marketing, freelance, agenzie).
- Accesso ai dati personali (sì / no).
- Accesso ai sistemi critici (sì / no).
- Livello critico (alto / medio / basso).

Genera:
1) Checklist de due diligence (sicurezza, legale, finanziario).
2) classificazione del rischio e che controlli ogni livello richiede.
3) Clausole contrattuali minime (confidenzialità, IP, dati, SLA, cessazione).
(4) Prove / documenti da richiedere.
5) "Annual review" del fornitore.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-008",
  title: "Compliance per corsi / membrane (accesso, licenze, anti-condivisione)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Regole di struttura e testi per ridurre la pirateria e l'abuso senza uccidere conversioni.",
  prompt: `Agisce come avvocato per prodotti digitali (corsi / membrane).

Ingressi:
- Modalità (vita, accesso annuale, mensile).
- Numero di utenti per conto (1 / 2 / attrezzatura).
- Restrizioni (nessuna condivisione, nessuna rivendita, nessun raschiamento).
- Misure tecniche (marca, limitazione del dispositivo, ecc.).
- Politica di rimborso.

Genera:
1) Regolamento / Anti-sharing (TOS) regole con linguaggio chiaro.
(2) Politica di uso accettabile (esampli).
3) Avvertimento processo → sospensione → terminazione (passo).
4) Messaggi per informare l'utente (3 modelli).
5) Elenco delle prove per le controversie (log, IP, accessi).`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-009",
  title: "Formazione interna: piano di 30 giorni (conformità essenziale)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Piano di formazione per il team di rispettare (senza burocrazia): moduli + quiz.",
  prompt: `Agisce come avvocato di conformità e progettista di istruzione. Crea un piano di formazione di 30 giorni.

Ingressi:
- Tipo di azienda.
- Aree di attrezzature (marketing, supporto, sviluppo, vendite).
- Principali rischi (dati, crediti, pagamenti, IP).
- Livello iniziale di attrezzature.

Genera:
1) Calendario 30 giorni (lezioni micro-al giorno).
(2) 8 moduli principali (titolo + obiettivi).
3) 10 quiz (con risposta) domande da valutare.
(4) Materiale minimo per modulo (1-pager).
(5) Medichi: assistenza, valutazione, incidenti ridotti.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-010",
  title: "Gestione legale degli incidenti: protocollo + escalation",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Creare un protocollo per gli incidenti: minacce legali, reclami, lacune, DMCA / IP, ecc.",
  prompt: `Agisce come avvocato interno. Progetta un protocollo per la gestione di incidenti legali.

Ingressi:
- Tipo di incidenti più probabili (rimborsi, chargeback, IP, dati).
- Canali di contatto (email, supporto, reti).
- Attrezzatura disponibile (che decide).

Genera:
1) Classificazione degli incidenti (livello 1-3) con esempi.
2) SLA di risposta suggerita da livello.
3) Roles: chi risponde, chi approva, chi documenti.
4) Elenco di controllo della documentazione (cosa salvare).
5) Modelli di risposta (minaccia legale, reclamo IP, grave reclamo).
Non inventare articoli di legge; concentrarsi su processi e rischi.`,
  thumbnail: ""
},

// +10 para llegar a 20

{
  id: "legalcumplimiento-011",
  title: "Controllo mensile di conformità (elenco di controllo operativo)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Checklist mensile per rivedere marketing, pagamenti, dati, supporto e contratti senza perdere tempo.",
  prompt: `Agisce come agente di conformità. Crea un audit mensile con la lista di controllo.

Ingressi:
- Tipo di affari.
- Strumenti (paypass, CRM, analisi, e-mail).
- Volume del cliente.

Genera:
1) Controllo mensile per area (marketing, pagamenti, dati, supporto, fornitori).
2) Prove da fissare per punto.
3) Indicatori che innescano l'azione correttiva.
4) Modello di report mensile (1 pagina).
5) Backlog dei miglioramenti (come priorità).`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-012",
  title: "Copiare la correzione per evitare rischi (prima / dopo)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Prendere frasi rischiose e riscriverle su 3 livelli di sicurezza senza uccidere conversioni.",
  prompt: `Agisce come avvocato pubblicitario + copywriter. Ti daro' delle richieste di marketing e voglio riscrivere la cassaforte.

Ingressi:
- Bottiglie originali (lista).
- Prodotto e nicchia.
- Canale (ads / atterraggio / email).
- Rischio (salute, denaro, risultati garantiti).
- Tono di marca.

Genera per ogni frase:
1) Diagnosi del rischio (perché è rischioso).
2) Riscrittura di livello 1 (aggressiva ma più sicura).
(3) Riscrittura di livello 2 (lastra di equilibrio).
4) Riscrittura di livello 3 (molto conservatore).
5) Disclaimer consigliato e prove suggerite.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-013",
  title: "Politica di conservazione e cancellazione dei dati (semplice ed eseguibile)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Definire quanto risparmiare, dove, chi accede e come eliminare senza interrompere le operazioni.",
  prompt: `Agire come avvocato + governance dei dati. Crea una semplice politica di ritenzione e cancellata.

Ingressi:
- Tipi di dati (clienti, pagamenti, supporto, analisi).
- Strumenti dove vivono (Stripe, email, DB, Nozione, ecc.).
- Requisiti operativi (supporto, contabilità).
- Rischio di perdita (alto / medio / basso).

Genera:
1) Tabella: tipo di dati → scopo → ritenzione suggerita (con nota "dipendente da giudizio").
2) Cancellazione e procedura di anonimizzazione.
3) Controllo di accesso (roli).
4) Checklist di pulizia trimestrale.
5) Prove interne (log, biglietti).`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-014",
  title: "Consenso e comunicazioni (email / WhatsApp / SMS) - guida pratica",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Guida per catturare il consenso e gestire l'opt-out correttamente nel marketing.",
  prompt: `Agisce come avvocato. Crea una guida pratica per le comunicazioni commerciali.

Ingressi:
- Canali (email, WhatsApp, SMS).
- Tipo di pubblico (casse, clienti, entrambi).
Paese / giurisdizione.
- Strumento di spedizione.

Genera:
1) Quale consenso per catturare e dove (controlla, form, onboarding).
2) Testi consigliati (3) per la casella di controllo e avviso.
3) Opt-out / processo basso (steps) e come registrarlo.
4) frequenza raccomandata e buone pratiche anti-spam.
5) Elenco di errori comuni e come evitarli.
Non citare le leggi; contrassegnare "dipende dalla giurisdizione".`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-015",
  title: "Compliance per il rilascio di garanzie (rimborso, \"rischio,\")",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Struttura una sezione di garanzia che è chiara e riduce le dispute senza promettere impossibile.",
  prompt: `Agisce come avvocato di consumo + CRO. Design sezione garanzia per un atterraggio.

Ingressi:
- Tipo di prodotto.
- Periodo di garanzia (giorni).
- Condizioni (ad esempio moduli completi, prove, ecc.).
- Se è B2C / B2B.
- Rischio di abuso (alto / medio / basso).

Genera:
1) Ambito della sezione garanzia (chiaro e persuasivo).
2) Termini esatti (che copre e che cosa non).
3) Processo da richiedere (passi + tempi).
4) Disclaim per evitare interpretazioni.
5) Garanzia FAQ (8 domande).`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-016",
  title: "Conservazione / conformità e-commerce (termine, spedizioni, rendimenti)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Elenco di controllo e testi di base per politiche di spedizione, rendimenti e termini di acquisto.",
  prompt: `Agisce come avvocato per il commercio elettronico. Crea pacchetto policy e checklist.

Ingressi:
- Tipo di prodotto (fisico / digitale).
- Paesi che vendete.
- Tempi di consegna e pacco.
- Politica di ritorno / cambio.
- Garanzie, difetti, reclami.

Genera:
1) Elenco di controllo della conformità al checkout e post-acquisto.
(2) Politica di spedizione (testo base).
3) Politica di ritorno e cambiamento (testo base).
(4) Garanzia / politica di difetti.
5) Messaggi per e-mail transazionali (3).`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-017",
  title: "Compliance per l'utilizzo di IA (disclaim + limiti + responsabilità)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Termini per i prodotti che utilizzano IA: errori, non consulenza, responsabilità e uso accettabile.",
  prompt: `Agisce come avvocato. Ho bisogno di clausole / avvisi per un prodotto che utilizza IA.

Ingressi:
- Prodotto (corso, strumento, richieste, SaaS).
- No. Cosa fa l'IA (raccomandazioni, generazione, automazione).
- Rischio di utilizzo (salute, legali, finanziarie, basse).
- No. Se l'utente può caricare dati sensibili (sì / no).

Genera:
1) Disclaimer "nessuna consulenza professionale" (se applicabile).
2) Avviso di errori / limitazioni.
3) Responsabilità dell'utente (valida, uso a rischio).
4) Politica di input (senza dati sensibili) e moderazione.
5) Breve testo per IU (tooltips e modi).`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-018",
  title: "Compliance nella gestione della testimonianza e' prima / dopo '",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "SOP per raccogliere, verificare, pubblicare e aggiornare le testimonianze senza entrare in bronzi.",
  prompt: `Agisce come avvocato pubblicitario. SOP design di testimonianza / casi di successo.

Ingressi:
- Prodotto e nicchia.
- Canali dove sono pubblicati.
- No. Se ci sono risultati finanziari / sanitari.
- No. Come vengono raccolti (forma, DM, intervista).
- No. Se ci sono incentivi (sconto, regalo).

Genera:
1) Elenco di verifica (prove minime).
2) Consenso / permesso di utilizzo (testo).
3) Regole di redazione (da evitare).
4) Raccomandazioni di disclaim.
5) Assegnazione e revisioni: quando aggiornare o revocare.`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-019",
  title: "Protocollo di conformità per freelance / appaltatori",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Processo di noleggio e controllo degli appaltatori: NDA, IP, accesso, consegna e uscita.",
  prompt: `Agisce come avvocato + operazioni. Progetta un protocollo per freelance / appaltatori.

Ingressi:
- Tipo di lavoro (dev, design, supporto, marketing).
- Accesso ai dati / sistemi (sì / no).
- Durata del fidanzamento.
- Liberabile.

Genera:
1) Pacchetto documentario minimo (NDA, IP, contract, SOW).
2) Gestione dell'accesso: principio di privilegio minimo.
3) Checklist di bordo (giorno 1).
4) Offboarding Checklist (voca l'accesso, il ritorno, cancellato).
5) Prove e file (che salvare).`,
  thumbnail: ""
},

{
  id: "legalcumplimiento-020",
  title: "Valutazione della conformità prima degli annunci di arrampicata (pre-flight checklist)",
  area: "Avvocato e legale",
  category: "Rispetto",
  summary:
  "Checklist pre-flight per il lancio di annunci senza essere impostata o rivendicata: copia, reclami, politica, pagine.",
  prompt: `Agisce come avvocato + performance marketer. Creare una lista di controllo pre-flight prima di annunci di arrampicata.

Ingressi:
- Prodotto e promessa.
- canale pubblicitario.
- Landing/check stack.
- Politica di rimborso / garanzia.
- Uso di testimonianze / ante- dopo.

Genera:
1) Lista di controllo di atterraggio (sezioni, disclaim, politiche visibili).
2) Elenco di controllo di creativo e copia (chiari, comparativi, "garantiti").
3) Elenco di controllo di supporto (SLA, processi di rimborso, prove).
4) Elenco dei dati (cookie / analytics / consenso).
5) Vai / No-Go criteri (che dovrebbero essere sì o sì).`,
  thumbnail: ""
}];