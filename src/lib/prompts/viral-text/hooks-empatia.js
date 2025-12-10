// src/lib/prompts/viral-text/hooks-empatía.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Ganci";
const CATEGORY = "Empatia";

export const viralTextPromptsHooksEmpatia = [
{
  id: "viral-hook-empatia-001",
  title: "Se ti senti cosi', e' normale",
  summary: "Emozione valida + anello aperto con soluzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Agisce come sceneggiatore Reels / TikTok. Scrive 15 ganci (1 frase, 7-12 parole) per _ PH0 _ over _ PH1 _ _ _.
Regole:
- Inizia con "Se ti siedi..." o "Se succede..."
- No. Esso include la convalida ("è normale", "happens a noi", "non sei solo").
- Chiudi con una promessa realistica ("Ti mostro come uscire").
Consegna in lista numerata.`
},
{
  id: "viral-hook-empatia-002",
  title: "Non sei solo (e c'è una via d'uscita)",
  summary: "Empatia diretta + speranza concreta.",
  area: AREA,
  category: CATEGORY,
  prompt: `Generare 20 ganci per _ _ PH0 _ che includono "non siete soli" (o variazioni).
Requisiti:
- 8-11 parole
- No. Devono sembrare umani (senza frasi motivazionali vuote)
- No. Si conclude insinuando il passo successivo (senza spiegarlo completamente).`
},
{
  id: "viral-hook-empatia-003",
  title: "Anch'io ero lì",
  summary: "Connessione per esperienza senza vittima.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci in prima persona per _ _ PH0 _ over _ _ PH1 _ _ _ _.
Regole:
- No. Devi iniziare con "Anche io..."
- Un dettaglio specifico (tempo / luogo / sintomo)
- E questo mi ha aiutato.
Massimo 12 parole.`
},
{
  id: "viral-hook-empatia-004",
  title: "Se ti dispiace fare X, guarda qui",
  summary: "Empathized con vergogna / paura + ponte a soluzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci per _ _ PH0 _ chi si vergogna di _ _ PH1 _ _.
Template:
"Se ti dispiace...
Aggiungere un micro-beneficio (2-4 parole).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-005",
  title: "Questo è per te se sei stanco",
  summary: "E' segmentata dallo stato emotivo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Generare 20 ganci che iniziano con:
"Questo è per te se..."
Concentrati su _ _ PH0 _ Questo è _ _ PH1 _ (tirato, frustrato, bloccato).
Include una promessa di sollievo realistico.
Massimo 13 parole.`
},
{
  id: "viral-hook-empatia-006",
  title: "Se ti senti in ritardo, leggi questo",
  summary: "Esso ha empatizzato con confronto e progresso.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci per _ _ PH0 _ _ su sentirsi "lato".
Regole:
- Inizia con "Se ti senti in ritardo..."
- Menzione 1 causa comune (comparison, rumore, mancanza di piano)
- "Ti do un piano semplice.".`
},
{
  id: "viral-hook-empatia-007",
  title: "Nessuno ti ha preparato per questo",
  summary: "E' stata una sorpresa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci che iniziano con:
"Nessuno ti ha preparato per..."
Discussioni del Parlamento europeo
Regole:
- 11-14 parole
- No. Devono sentirsi reali (situazioni comuni)
- No. Insiste che ci sia una soluzione pratica.`
},
{
  id: "viral-hook-empatia-008",
  title: "Se non puoi fare tutto oggi, va bene",
  summary: "Valido e offre il prossimo micro-step.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 18 ganci per _ _ PH0 _ _ con burnout o saturazione in _ _ PH1 _.
Include:
- Validazione ("okay", "normale")
- Un micro-step di 2 minuti (non completamente spiegato)
Massimo 14 parole.`
},
{
  id: "viral-hook-empatia-009",
  title: "Ti prometto che non sei pigro",
  summary: "Incontro: mancanza di sistema, nessuna mancanza di volontà.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 15 ganci che iniziano con:
"Ti prometto che non sei pigro..."
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.
Chiudi con il riquadro: "Sei scomparso _ _ PH2 _ _ _ _ _ _ _ _ _ _ ____________
Massimo 13 parole.`
},
{
  id: "viral-hook-empatia-010",
  title: "Se sei paralizzato, capisco",
  summary: "Empatia con indecisione + soluzione breve.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci per _ _ PH0 _ _ con indecisione in _ _ PH1 _ _.
Regole:
- Inizia con "Se ti paralizza..."
- No. Deve includere "ti capisco" o variazione
- No. Promette un semplice criterio (senza spiegazione completa).`
},

{
  id: "viral-hook-empatia-011",
  title: "Se e' difficile cominciare, non e' colpa tua",
  summary: "Valida + promette la struttura.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 18 ganci:
"Se è difficile iniziare, non è colpa tua..."
Discussioni del Parlamento europeo
Esso comprende una causa strutturale specifica (mancanza di orientamento, passi confusi, obiettivo vago).
Massimo 14 parole.`
},
{
  id: "viral-hook-empatia-012",
  title: "Se hai paura di vendere, questo ti aiuta",
  summary: "Empatia con vendita e rifiuto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 ganci per _ _ PH0 _ _ _ con paura di vendere _ _ PH1 _ _.
Template:
"Se hai paura di vendere, prova questo..."
Aggiunge un beneficio specifico (fiducia, chiarezza, DM, ecc.).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-013",
  title: "Mi dispiace anche di pubblicare",
  summary: "Confessione e normalizzazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 ganci di prima persona su _ _ PH0 _.
Regole:
- Devi iniziare con "Anche io..."
- No. Deve includere "Mi dispiace" o "avevo paura".
- Chiudi con "e questo è quello che ho fatto".
Massimo 13 parole.`
},
{
  id: "viral-hook-empatia-014",
  title: "Se ti senti come se nessuno ti ascoltasse",
  summary: "Era l'invisibilità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 18 ganci per _ _ PH0 _ _ su sentirsi ignorato.
Struttura:
"Se non ti senti nessuno ti ascolta, è per _ _ PH1 _ _ _ _ _ _ _ .
_ PH2 _ _ deve essere utile e corretto (messaggio, messa a fuoco, gancio, CTA).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-015",
  title: "Se ti perdi oggi, inizia qui",
  summary: "La larghezza della chiarezza immediata.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci che finiscono con "start here".
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.
Regole:
- No. Si dovrebbe menzionare un sintomo specifico (confusione, overinfo, stagnazione)
- Prometti un semplice primo passo.`
},
{
  id: "viral-hook-empatia-016",
  title: "Se confronti, ti capisco",
  summary: "Era un confronto sociale.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 ganci circa il confronto in _ _ PH0 _ per _ _ PH1 _ _.
Regole:
- Inizia con "Se confronti..."
- Include la validazione
- Chiudere con un riquadro pratico (ad esempio "misura questo invece").`
},
{
  id: "viral-hook-empatia-017",
  title: "Ci stai provando duramente, ma con lo strumento sbagliato",
  summary: "Validazione + causa specifica.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci:
"Ci stai provando duramente... ma con... _ PH0 _ sbagliato."
Discussioni del Parlamento europeo
_ PH2 _ _ deve essere concreto (focus, tattica, canale, messaggio).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-018",
  title: "Se ti senti in colpa per il riposo",
  summary: "Empatia con riposo e produttività.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci su senso di colpa per il riposo per _ PH0 _.
Regole:
- Inizia con "Se ti senti colpevole..."
- Valida ("è normale")
- Prometti un cambio o una regola pratica.`
},
{
  id: "viral-hook-empatia-019",
  title: "Se ti dà l'ansia, non farlo così",
  summary: "Empathy + alternativa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 15 ganci per _ _ PH0 _ utilizzando:
"Se ti dà l'ansia, non farlo così..."
Poi suggerisce che c'è una semplice alternativa.
Max 12 parole.`
},
{
  id: "viral-hook-empatia-020",
  title: "Se sei bruciato, mettilo giu' prima",
  summary: "Burnout: ridurre l'attrito prima.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci per _ _ PH0 _ _ con burnout in _ PH1 _ _.
Template:
"Se sei bruciato, scendi, prima di tutto."
_ PH3 _ _ deve essere concreto (aspettative, compiti, passi, perfezione).
Max 11 parole.`
},

{
  id: "viral-hook-empatia-021",
  title: "Se sei frustrato con X, c'è un motivo",
  summary: "Frustrazione valida + causa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci:
"Se siete frustrati _ PH0 _, c'è un motivo."
Discussioni del Parlamento europeo
_ PH2 _ _ dovrebbe essere un momento del processo (vendita, creazione di contenuti, apprendimento, ecc.).
Vicino insinuando soluzione.`
},
{
  id: "viral-hook-empatia-022",
  title: "Non sei male, ti manca l'ordine",
  summary: "Empathy + sistema.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 18 ganci:
"Non sei male a _ PH0 _ _ _ _ _ _ _ _ _ _ _ _ _____ Ti stai perdendo.
ORDEN = struttura, script, passaggi, lista di controllo.
Max 12 parole.`
},
{
  id: "viral-hook-empatia-023",
  title: "Se ti senti invisibile, cambialo",
  summary: "Empathy + promessa di cambiamento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci per _ _ PH0 _ con:
"Se vi sentite invisibili, cambiate _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ________________
_ PH2 _ _ deve essere un elemento specifico (primo secondo, titolo, CTA, focus).
Max 11 parole.`
},
{
  id: "viral-hook-empatia-024",
  title: "Se sei stufo di provare, capisco",
  summary: "Era pesante e di uscita.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 ganci che includono "Sono malato" o "Sono stanco" (in prima o seconda persona).
Discussioni del Parlamento europeo
Deve chiudere con concreta speranza ("c'è un percorso semplice").`
},
{
  id: "viral-hook-empatia-025",
  title: "Non vuoi, non hai chiarezza",
  summary: "E' un classico e diretto riquadro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"Non vuoi. Ti manca la chiarezza in _ PH0 _."
X = offerta, messaggio, passo successivo, obiettivo.
Max 12 parole.`
},
{
  id: "viral-hook-empatia-026",
  title: "Se è difficile dire no",
  summary: "Era senza limiti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 15 ganci per _ _ PH0 _ _ su limiti di impostazione.
Template:
"Se è difficile dire di no, prova questo..."
Esso comprende beneficio (pace, focus, tempo).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-027",
  title: "Se ti senti in stallo, non cambiare tutto",
  summary: "Empathy + micro-adattamento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci:
"Se ti senti in stallo, non cambiare tutto: cambia _ _ PH0 _ _ _ _ _ _ _ _ _ _ _ _ ______
_ PH1 _ cemento (un passo, una frase, un'abitudine).
Max 13 parole.`
},
{
  id: "viral-hook-empatia-028",
  title: "Se non esce, non significa che non sia per te",
  summary: "Stava empatizzando con un fallimento temporaneo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 12 ganci per _ _ PH0 _ _ con frustrazione in _ _ PH1 _ _.
Include:
- "Non vuol dire che non sia per te."
- una promessa di metodo / struttura
Max 14 parole.`
},
{
  id: "viral-hook-empatia-029",
  title: "Se ti vergogni di chiedere un prezzo",
  summary: "Frizione di vendita.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci per _ _ PH0 _ che vende _ _ PH1 _ _ _.
Template:
"Se ti vergogni di dire il tuo prezzo, fallo..."
Include beneficio (sicurezza / chiarezza).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-030",
  title: "Se ti senti confuso, e' perche' stai facendo tre cose alla volta",
  summary: "Empathy + diagnosi specifica.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci con diagnosi:
"Se sei confuso, è perché..."
Perche'? Esso comprende una causa specifica (troppo molti obiettivi, troppe udienze, ecc.).
Max 14 parole.`
},

{
  id: "viral-hook-empatia-031",
  title: "Se hai difficoltà a parlare con la telecamera, prova questo",
  summary: "Stava empatizzando la paura dello stadio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci per i creatori che temono di parlare con la fotocamera.
Template:
"Se hai difficoltà a parlare con la telecamera, prova questo..."
Esso comprende un beneficio chiaro (fluidità, meno nervi, più chiarezza).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-032",
  title: "Se non sai cosa pubblicare, non sei solo",
  summary: "Editori.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci per _ _ PH0 _:
"Se non sai cosa pubblicare, non sei solo."
"Ti do tre idee oggi."
Max 13 parole.`
},
{
  id: "viral-hook-empatia-033",
  title: "Se ti senti come se non ci andassi, misura questo",
  summary: "Empathy + focus su una metrica utile.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci:
"Se ti senti di non muoverti, misura _ _ PH0 _."
Oggetto: _ _ PH1 _. Metric deve essere semplice e rilevante.`
},
{
  id: "viral-hook-empatia-034",
  title: "Se è difficile ricominciare da capo, renderlo più piccolo",
  summary: "Empathy + micro-obiettivo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci su "start over" in _ PH0 _ _.
Template:
"Se è difficile ricominciare da capo, renderlo più piccolo: _ _ PH1 _ _ _ _.
_ PH2 _ _ azione semplice.`
},
{
  id: "viral-hook-empatia-035",
  title: "Se non esci oggi, non farti punire",
  summary: "Empathy + correzione morbida.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 ganci che iniziano con:
"Se non esci oggi..."
Include "non essere punito".
e si chiude con una promessa di metodo.`
},
{
  id: "viral-hook-empatia-036",
  title: "La tua stanchezza ha senso",
  summary: "Valido e riquadro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci per _ _ PH0 _ su stanchezza in _ PH1 _ _.
Esso deve includere "sentire i falsi" e una causa specifica.
Chiudi con "Ti do una misura semplice".`
},
{
  id: "viral-hook-empatia-037",
  title: "Se stai cercando di renderlo perfetto, ti capisco",
  summary: "Era un perfezionista.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci sul perfezionismo per _ PH0 _ _.
Regole:
- Inizia con "Se stai cercando di renderlo perfetto..."
- No. Include "Ti capisco"
- Chiudilo, "meglio fare così".
Max 14 parole.`
},
{
  id: "viral-hook-empatia-038",
  title: "Se ti senti sola in questo, condividi",
  summary: "Empathy + community call.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 12 ganci che ti invitano a commentare / condividere un'esperienza.
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.
Deve includere l'empatia ("è successo anche a me").`
},
{
  id: "viral-hook-empatia-039",
  title: "Se fa male vedere i risultati di altre persone",
  summary: "Empathy con invidia / confronto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 12 ganci per _ _ PH0 _ _ circa il confronto dei risultati.
Regole:
- Inizia con "Se fa male..."
- Valore non coniugato
- Chiudi con un'azione concreta per riorientare.`
},
{
  id: "viral-hook-empatia-040",
  title: "Se ti senti indiretto, torna a questo",
  summary: "Empathy + fondazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 ganci:
"Se ti senti indiretto, torna a _ _ PH0 _."
_ PH1 _ _ deve essere concreto (oggettivo, offerta, pubblico, routine).
Max 12 parole.`
},

{
  id: "viral-hook-empatia-041",
  title: "Se hai paura di sbagliare, guarda qui",
  summary: "Era nella paura dell'errore.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci sulla paura di sbagliare a _ PH0 _.
Template:
"Se hai paura di sbagliare, guarda questo..."
Esso include un beneficio (più fiducia / meno ansia).
Max 12 parole.`
},
{
  id: "viral-hook-empatia-042",
  title: "Se ti senti stressato, non stai fallendo",
  summary: "Vuoto + riquadro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 12 ganci:
"Se sei stressato, non stai fallendo."
Chiudere con un semplice passo (non completo).
Discussioni del Parlamento europeo.`
},
{
  id: "viral-hook-empatia-043",
  title: "Se non ti credono, ti stai perdendo questo",
  summary: "Vuoto con la mancanza di credibilità + soluzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci per _ _ PH0 _ in _ _ PH1 _:
"Se non ti credono, ti stai perdendo.
_ PH3 _ _ deve essere specifico (caso, demo, prima / dopo, numeri realistici).`
},
{
  id: "viral-hook-empatia-044",
  title: "Se hai paura di iniziare, fai così",
  summary: "Empatia + microazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci:
"Se hai paura di iniziare, fallo in questo modo: _ _ PH0 _ _ _ _ _ _ _ __________
_ PH1 _ dovrebbe essere un primo passo di meno di 2 minuti.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-hook-empatia-045",
  title: "Se non senti nulla funziona, cambia prima",
  summary: "Empathy + priorità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 12 ganci:
"Se non senti nulla funziona, cambia _ _ PH0 _ _ prima.
_ PH1 _ _ deve essere la leva principale (larità, offerta, messaggio, messa a fuoco).
Discussioni del Parlamento europeo.`
},
{
  id: "viral-hook-empatia-046",
  title: "Se e' difficile tenerti costante, ecco perche'",
  summary: "Empatia + diagnosi.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci:
"Se avete difficoltà ad essere costanti, è per _ PH0 _."
_ PH1 _ _ deve essere una vera causa (piano irreale, obiettivi vaghi, mancanza di routine).
Chiudilo con "e sistemalo così..."`
},
{
  id: "viral-hook-empatia-047",
  title: "Se non esce, semplifica",
  summary: "Empathy + soluzione breve.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"Se non viene fuori, semplifichi: _ _ PH0 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _________________
_ PH1 _ _ deve essere una regolazione concreta.
Oggetto: _ _ PH2 _. Max 11 parole.`
},
{
  id: "viral-hook-empatia-048",
  title: "Se ne vale la pena, leggi questo",
  summary: "E' costato molto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 ganci per _ _ PH0 _ _ che tariffe per _ PH1 _ _.
Template:
"Se ti dispiace accusare, leggi questo..."
Include una promessa: "Ti do una frase".
Max 13 parole.`
},
{
  id: "viral-hook-empatia-049",
  title: "Se ti senti bloccato, non è una mancanza di idee",
  summary: "Vuoto + riquadro a struttura.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 18 ganci:
"Se sei rinchiuso, non è una mancanza di idee, è _ PH0 _."
_ PH1 _ = struttura, chiarezza, obiettivo.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-hook-empatia-050",
  title: "Se e' difficile farlo da solo, unisciti a questo",
  summary: "Empathy + community / action.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 ganci per chiudere con un invito a commentare per ricevere aiuto.
Esso comprende l'empatia ("Ho anche vissuto").
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.`
}];