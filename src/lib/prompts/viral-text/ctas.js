// src/lib/prompts/viral-text/ctas.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Ctis";
const CATEGORY = "Parole chiave + commenti DM";

export const viralTextPromptsCtas = [
{
  id: "viral-cta-comentarios-001",
  title: "CTA parola chiave per inviare il modello",
  summary: "Direttamente CTA per sparare commenti e inviare da DM.",
  area: AREA,
  category: CATEGORY,
  prompt: `Agisce come uno stratega della crescita. Scrive 15 Cems per la fine di un Reel over _ _ PH0 _ _.
Obiettivo: commentare una parola chiave per ricevere un modello DM.
Requisiti:
- Include la parola chiave: "_ _ PH1 _"
- 1 singola frase, massimo 14 parole
- Tono: vicino, non disperato
Consegna nella lista.`
},
{
  id: "viral-cta-comentarios-002",
  title: "CTA con promessa specifica (non sovrastata)",
  summary: "Parola chiave + valore concreto e realistico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 CCE con parole chiave per _ _ PH0 _ over _ _ PH1 _ _.
Struttura: "Commenti _ _ PH2 _ e vi comando _ _ PH3 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ PH4 _ _ deve essere specifico (check, script, template, file swipe).
Evitare le parole: "gratuito", "urgente", "ultima possibilità".`
},
{
  id: "viral-cta-comentarios-003",
  title: "CTA con opzione doppia parola chiave",
  summary: "2 parole chiave per segmentare gli interessi.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 12 Cems con due opzioni di parola chiave per la segmentazione.
Formato:
"Commenti _ PH0 _ Se volete _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _________________________________________________
Discussioni del Parlamento europeo Ascoltare: _ _ PH5 _.
Che X e Y sono risorse diverse.`
},
{
  id: "viral-cta-comentarios-004",
  title: "CTA: commenti e ti invio un vero esempio",
  summary: "Prometti un vero esempio per aumentare l'intenzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 TC per _ _ PH0 _ per offrire "un vero esempio".
Dovrebbe includere la parola chiave _ _ PH1 _ _.
Varierebbe il tono: 5 diretto, 5 casual, 5 premium.`
},
{
  id: "viral-cta-comentarios-005",
  title: "CTA con micro-autorità",
  summary: "Egli suggerisce che l'hai già usato e funziona (credibile).",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 15 Ceps con parola chiave per _ _ PH0 _ _ per menzionare che è "il modello che uso".
Esempio: "Commenti _ _ PH1 _ e ti invio il modello che uso".
Che siano tutti diversi. Max 14 parole.`
},
{
  id: "viral-cta-comentarios-006",
  title: "CTA gentile: nessuna pressione",
  summary: "Chiama per azione morbida.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 morbidi (senza pressione) Ceps per _ PH0 _ _.
È necessario includere la parola chiave _ _ PH1 _ e l'idea di "se è qualsiasi uso per voi."
Max 16 parole.`
},
{
  id: "viral-cta-comentarios-007",
  title: "CTA con curiosità: 'Io lo passo a voi'",
  summary: "Vicino al mistero per aumentare i commenti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 Ctis con parole chiave che includono la frase "lo passo su".
Discussioni del Parlamento europeo
Rendere la risorsa intrigante ma specifico.
Massimo 14 parole.`
},
{
  id: "viral-cta-comentarios-008",
  title: "CTA per serie: parte 2 per parola chiave",
  summary: "Osserva parole chiave per la parte 2 ricezione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 12 Tens per la chiusura video che invitano "parte 2" di DM.
Include la parola chiave _ _ PH0 _.
Regole:
- Non implorare.
- No. Egli menziona quale parte 2 (1 cosa) include.
Max 16 parole.`
},
{
  id: "viral-cta-comentarios-009",
  title: "CTA per giostra: parola chiave alla fine",
  summary: "E' progettato per i post robusti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 CTA per carosello oltre _ _ PH0 _ che chiedono di commentare _ PH1 _.
Deve offrire: lista di controllo / modello / guida.
Include 5 varianti che chiedono anche "salvata".`
},
{
  id: "viral-cta-comentarios-010",
  title: "CTA con mini impegno",
  summary: "Chiedere di commentare parola chiave + un segnale (emoji / numero).",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 Cems per _ PH0 _ dove chiedono:
"Commenti _ PH1 _ + un numero da 1 a 3"
scegliere la versione della risorsa.
Esempio: "1 veloce, 2 completo, 3 pro."
Max 18 parole.`
},

{
  id: "viral-cta-comentarios-011",
  title: "CTA: Osservare la parola chiave se si desidera un esempio",
  summary: "Segmenti per volontà.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 20 Tems per iniziare con:
"Se vuoi un esempio..."
e termina con "commento _ _ PH0 _ _ _ _ _ _ _ _ _ _ _ _ _ __________________________
Discussioni del Parlamento europeo.`
},
{
  id: "viral-cta-comentarios-012",
  title: "CTA per obiezioni: Se non sai dove '",
  summary: "Progettato per principianti bloccati.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 TC con parole chiave per le persone bloccate in _ PH0 _ _.
Deve includere "se non sai da dove cominciare".
parola chiave: _ _ PH1 _.
Max 18 parole.`
},
{
  id: "viral-cta-comentarios-013",
  title: "CTA per il pubblico avanzato",
  summary: "Tono pro, risorsa pro, parola chiave.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 TC per il pubblico avanzato a _ PH0 _ _.
Offre una risorsa avanzata (framework, script, audit, file swipe).
Include la parola chiave _ _ PH1 _.
Tono: premium e diretto.`
},
{
  id: "viral-cta-comentarios-014",
  title: "CTA con incentivo alla velocità (senza falsa urgenza)",
  summary: "\"Lo mando a te oggi\" senza manipolazioni.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 Ceps con parola chiave per _ PH0 _ che includono:
"Te lo mando oggi"
Non sembra un'offerta limitata.
Max 14 parole.`
},
{
  id: "viral-cta-comentarios-015",
  title: "CTA: parola chiave + domanda",
  summary: "CTA che termina con domanda per ulteriori risposte.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 Tems che chiedono di commentare _ PH0 _ _ e finire in questione.
Discussioni del Parlamento europeo
Esempio: "Tell X e te lo passerò, vero?"
Max 18 parole.`
},
{
  id: "viral-cta-comentarios-016",
  title: "CTA con promessa di 3 versioni",
  summary: "Offre versioni (mini, complete, pro).",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 10 CCE:
"Commenti _ _ PH0 _ e ti mando 3 versioni: mini, complete e pro".
Discussioni del Parlamento europeo
Fare 10 variazioni senza ripetere il vocabolario.`
},
{
  id: "viral-cta-comentarios-017",
  title: "CTA: parola chiave + spedizione automatica",
  summary: "Cita l'automazione senza suono bot.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 Cems dovunque tu dica che viene inviato automaticamente dal DM.
Include la parola chiave _ _ PH0 _.
Discussioni del Parlamento europeo
Tono umano, zero robot.`
},
{
  id: "viral-cta-comentarios-018",
  title: "CTA: parola chiave + 'Ti lascio pronto '",
  summary: "Prometti di \"copiare / incollare\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 Cems per _ _ PH0 _ quella promessa di "copiare e incollare".
Include la parola chiave _ _ PH1 _.
Max 16 parole.`
},
{
  id: "viral-cta-comentarios-019",
  title: "CTA per magnete al piombo senza dire 'magnete di carico '",
  summary: "Offre risorse scaricabili con la parola chiave.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 TC che forniscono una guida scaricabile / PDF / checklist
senza dire "magnete di carico".
Include la parola chiave _ _ PH0 _.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-cta-comentarios-020",
  title: "CTA con leggero test sociale",
  summary: "\"L'ho passato a X e l'ho servito\" senza fare figure.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 12 Tens con parole chiave che includono "Several servito..."
Nessun numero.
Oggetto: _ _ PH0 _ _. keyword: _ _ PH1 _ _ _ _.
Max 16 parole.`
},

{
  id: "viral-cta-comentarios-021",
  title: "CTA: parola chiave + elenco degli esempi",
  summary: "Offre esempi per aumentare il desiderio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 Cems for _ _ PH0 _ _ offre "lista di esempi".
parola chiave: _ _ PH1 _.
Varierebbe la risorsa: esempi di ganci, script, CTA, offerte, ecc.`
},
{
  id: "viral-cta-comentarios-022",
  title: "CTA: parola chiave + mini-audit",
  summary: "Offre la verifica della lista di controllo DM.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 10 celle per _ _ PH0 _ _ offrire "mini-audit" da DM.
Include la parola chiave _ _ PH1 _.
Renderlo etico: "Vi lascio 3 miglioramenti rapidi.".`
},
{
  id: "viral-cta-comentarios-023",
  title: "CTA per nicchia locale",
  summary: "Parola chiave + \"L'adatto alla tua città / business\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 12 Cems per le aziende locali circa _ PH0 _.
Include la parola chiave _ _ PH1 _.
Devi dire di adattarlo al tuo tipo di lavoro.
Max 18 parole.`
},
{
  id: "viral-cta-comentarios-024",
  title: "CTA: parola chiave + 'Ti lascio armato '",
  summary: "Promettimi armato pronto a usare.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 Cems per _ _ PH0 _ _ con la frase "Lascio armato".
parola chiave: _ _ PH1 _.
Vedrebbe cosa "armi": script, cattura, struttura, lista di controllo.`
},
{
  id: "viral-cta-comentarios-025",
  title: "CTA con parola facile (1-2 sillabe)",
  summary: "Breve parole chiave per più commenti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Proponi 20 Cós con 1-2 sillabe (ad esempio "ya", "mix", "pro", "kit").
Discussioni del Parlamento europeo
Ogni CTA dovrebbe includere: "Tell _ _ PH1 _ _ _ _ _ _ _ e lo passerò a voi da DM."`
},
{
  id: "viral-cta-comentarios-026",
  title: "CTA: parola chiave + 'se vuoi il mio schermo '",
  summary: "Per i creatori che fanno video.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 Cems per i creatori su _ PH0 _ _ per offrire "il mio script".
Include la parola chiave _ _ PH1 _.
Tono: vicino, naturale.`
},
{
  id: "viral-cta-comentarios-027",
  title: "CTA: parola chiave + 'Invio la struttura'",
  summary: "Concentrati sui quadri.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 TC che offrono "struttura" o "framework" da DM.
parola chiave: _ PH0 _. Discussioni del Parlamento europeo
Egli avrebbe visto la frase finale (DM, messaggio, inviarlo a voi, ecc.).`
},
{
  id: "viral-cta-comentarios-028",
  title: "CTA con bonus per DM",
  summary: "Offre bonus extra se si commenta la parola chiave.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 Cems per _ _ PH0 _ dove la risorsa ha un bonus.
Formato:
"Commenti _ PH1 _ e ti mando _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _______________________________________________________________________________________________________________________________________________________________
Fai il bonus piccolo e utile.`
},
{
  id: "viral-cta-comentarios-029",
  title: "CTA: parola chiave + 'te lo personalizo '",
  summary: "Personalizzazione della luce senza troppa promessa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 10 celle che includono "Lo personalizzo" per _ PH0 _.
parola chiave: _ _ PH1 _.
Chiarire la portata: "1 regolazione rapida" o "una versione adattata".`
},
{
  id: "viral-cta-comentarios-030",
  title: "CTA: parola chiave + 'La trasformo nella tua nicchia '",
  summary: "Adattamento a nicchia per più intenzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 12 CCE:
"Tell _ _ PH0 _ e lo trasformo nella tua nicchia."
Discussioni del Parlamento europeo
Fai 12 variazioni con sinonimi (adatto, terra, tradurre nel tuo caso).`
},

{
  id: "viral-cta-comentarios-031",
  title: "CTA con parole chiave e test rapido",
  summary: "Chiedi di commentare + prova e risultati di rivendita.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 10 Tem che chiedono:
1) commento _ PH0 _
2) testare l'appello oggi
3) ritorno e commento sul risultato
Discussioni del Parlamento europeo
Tono stimolante, zero pressione.`
},
{
  id: "viral-cta-comentarios-032",
  title: "CTA per obiezione 'Non ho tempo'",
  summary: "Fa un rapido appello.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 12 Tens con parole chiave per le persone senza tempo.
Include "ci vogliono 5 minuti".
parola chiave: _ PH0 _.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-cta-comentarios-033",
  title: "CTA con parola chiave + risorsa 'elenco delle frasi '",
  summary: "Scambi di frasi pronte a copiare.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 Cems per _ _ PH0 _ _ che offre "lista di frasi" di DM.
Include la parola chiave _ _ PH1 _.
Sembra utile e specifico.`
},
{
  id: "viral-cta-comentarios-034",
  title: "CTA: parola chiave + modello a 3 fasi",
  summary: "Semplice personale, alta conversione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 TC che offrono un modello a 3 fasi per _ PH0 _ _.
Include la parola chiave _ _ PH1 _.
Max 16 parole.`
},
{
  id: "viral-cta-comentarios-035",
  title: "CTA: parola chiave + esempio nel tuo caso",
  summary: "Offre un esempio applicato all'utente.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 10 CCE:
"Commenti _ _ PH0 _ e vi invio un esempio applicato al vostro caso."
Discussioni del Parlamento europeo Ascolto:
Nessuna promessa di consulenza.`
},
{
  id: "viral-cta-comentarios-036",
  title: "CTA: parola chiave + mini-guida",
  summary: "Guida breve e concreta.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 Cems per _ _ PH0 _ _ offrire "mini-guida" di DM.
Include la parola chiave _ _ PH1 _.
Varierebbe lo stile: 10 casual, 10 formale.`
},
{
  id: "viral-cta-comentarios-037",
  title: "CTA con parola chiave + 'Ti invio senza spam '",
  summary: "Riduce l'attrito per paura di spam.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 CT che includono una frase antispam:
"La mando senza spam" / "nessun link raro" / "solo la risorsa".
Include la parola chiave _ _ PH0 _.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-cta-comentarios-038",
  title: "CTA: parola chiave + 'Lascio in bozza'",
  summary: "Prometti il contenuto pronto a copiare.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 10 Cems dove offri di consegnare "una bozza pronta".
parola chiave: _ PH0 _. Discussioni del Parlamento europeo
Ej: Caption ready, script pronto, messaggio pronto.`
},
{
  id: "viral-cta-comentarios-039",
  title: "CTA: parola chiave + elenco degli errori",
  summary: "Errori = alto salvato e desiderio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 TC che offrono "elenco degli errori" per _ PH0 _ _.
Include la parola chiave _ _ PH1 _.
Tienilo breve (max 16 parole).`
},
{
  id: "viral-cta-comentarios-040",
  title: "CTA: parola chiave con tono divertente",
  summary: "CTA giocoso per aumentare i commenti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 Cems con la parola chiave _ _ PH0 _ _ per _ _ PH1 _ _ con tono divertente (senza cringe).
Deve includere una sorta di argano: "Io lo passerò e sarò pronto".
Max 16 parole.`
},

{
  id: "viral-cta-comentarios-041",
  title: "CTA: parola chiave + 'lo sto inviando ora. '",
  summary: "Immediatamente senza falsa urgenza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 TA con:
"Tell _ PH0 _ E ora te lo mando".
Discussioni del Parlamento europeo
Fare 12 variazioni senza ripetere "ora" (ad esempio "ora in poi", "già").`
},
{
  id: "viral-cta-comentarios-042",
  title: "CTA: parola chiave + modelli per 3 formati",
  summary: "Offre varianti di formato (Reel, carosello, storia).",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 10 CCE che offrono modelli per 3 formati.
Formato base:
"Commenti _ _ PH0 _ _ e vi invio versioni per Reel, Carousel e Story."
Discussioni del Parlamento europeo.`
},
{
  id: "viral-cta-comentarios-043",
  title: "CTA: parola chiave + 'per inviare il mio file swipe '",
  summary: "Promessa Premium: file swipe.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 CECs che offrono "il mio file swipe" per _ PH0 _ _.
Include la parola chiave _ _ PH1 _.
Tono: pro e diretto, non arrogante.`
},
{
  id: "viral-cta-comentarios-044",
  title: "CTA: parola chiave + 'Lo traduco al tuo livello '",
  summary: "Segmentati per livello utente.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 10 CCE:
"Commenti _ _ PH0 _ _ _ e lo traduco al vostro livello (beginner / intermedi / pro)."
Discussioni del Parlamento europeo
Fare 10 variazioni.`
},
{
  id: "viral-cta-comentarios-045",
  title: "CTA: parola chiave + 'Ti invio il modello esatto '",
  summary: "Chiarezza e specificità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 CCE che includono "il modello esatto".
parola chiave: _ PH0 _. Discussioni del Parlamento europeo
Max 16 parole.`
},
{
  id: "viral-cta-comentarios-046",
  title: "CTA: parola chiave + promessa di 5 esempi",
  summary: "Offre esempi concreti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 CCE:
"Commenti _ _ PH0 _ e vi mando 5 esempi pronti."
Discussioni del Parlamento europeo
Fai una varietà di esempi (hooks, script, didascalie, messaggi).`
},
{
  id: "viral-cta-comentarios-047",
  title: "CTA: parola chiave + 'Lascio semplice per Lei'",
  summary: "Riduce l'attrito per complessità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 12 CCE con parole chiave _ _ PH0 _ che includono "Lascio semplice".
Discussioni del Parlamento europeo
Tieni il tuo tono umano e corto.`
},
{
  id: "viral-cta-comentarios-048",
  title: "CTA: parola chiave + 'Invio la struttura in 1 foglio '",
  summary: "Riepilogo promessa in 1 foglio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 10 CECs che offrono "1 struttura del foglio."
Include la parola chiave _ _ PH0 _. Discussioni del Parlamento europeo
Fare 10 variazioni senza ripetizione.`
},
{
  id: "viral-cta-comentarios-049",
  title: "CTA: parola chiave + 'lo passerò e mi dici'",
  summary: "Crea una conversazione successiva.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 Celle che finiscono con:
"Ti passerò e mi dirò se è buono."
Include la parola chiave _ _ PH0 _.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-cta-comentarios-050",
  title: "CTA da chiudere con autorità morbida",
  summary: "Chiusura mentore e spedizione DM.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 Cems con parole chiave che suonano come un mentore:
"Se vuoi che lo lasci pronto, commento _ _ PH0 _ _."
Discussioni del Parlamento europeo Ascolto:
Nessun suono per la vendita dura.`
}];