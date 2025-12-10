// src/lib/prompts/viral-text/hooks-curiosidad.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Ganci";
const CATEGORY = "Curiosità";

export const viralTextPromptsHooksCuriosidad = [
{
  id: "viral-hook-curiosidad-001",
  title: "Ti faccio vedere una cosa che quasi nessuno capisce",
  summary: "Mistero + chiara promessa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Agisce come scrittore virale. Scrivere 20 ganci (7-11 parole) per _ _ PH0 _ _ per iniziare con:
"Ti faccio vedere..."
Regole:
- No. Istiga un meccanismo ("perché succede", "che cosa lo spara", "che cosa lo ferma")
- No. Non rivelare il "come" completo
- Lo spagnolo neutro.`
},
{
  id: "viral-hook-curiosidad-002",
  title: "La vera ragione (non evidente)",
  summary: "Curiosità per causa nascosta.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 ganci per _ _ PH0 _ con struttura:
"Il vero motivo per cui _ PH1 _ è..."
_ PH2 _ = obiettivo o dolore (vendure, crescere, concentrare, ecc.)
Massimo 10 parole. Nessun clickbat vuoto.`
},
{
  id: "viral-hook-curiosidad-003",
  title: "Il dettaglio che si ottiene sempre",
  summary: "Curiosità per \"micro dettaglio\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci (max 9 parole) per _ PH0 _ _ utilizzando:
"Il dettaglio che si ottiene sempre: _ _ PH1 _ _ _ _"
_ PH2 _ deve essere concreto e fattibile.`
},
{
  id: "viral-hook-curiosidad-004",
  title: "Se capisci questo, tutto diventa più facile",
  summary: "Uncino di comprensione chiave.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 18 ganci per _ _ PH0 _ con l'inizio:
"Se capisci questo..."
Condizioni:
- 7-12 parole
- No. È necessario insinuare il concetto chiave senza spiegarlo completamente.
- Finisci con "guarda" o "ascolta questo".`
},
{
  id: "viral-hook-curiosidad-005",
  title: "Ti manca un pezzo e non sai nemmeno quale",
  summary: "Curiosità per \"pezzo mancante\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci per _ _ PH0 _:
"Ti manca un pezzo e non sai nemmeno quale".
Aggiungere una traccia (2-4 parole) del pezzo, senza rivelarlo completamente.`
},
{
  id: "viral-hook-curiosidad-006",
  title: "Questo cambia quando fai questa domanda",
  summary: "Ciclo aperto da \"questione chiave\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 ganci dove prometti una domanda potente per _ PH0 _.
Regole:
- No. Devi avere una domanda.
- No. Non dire l'intera domanda (solo insinuare)
- Max 11 parole.`
},
{
  id: "viral-hook-curiosidad-007",
  title: "Scommetto che non lo sapevi",
  summary: "Sfida di tipo curiosità (senza aggressione).",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 ganci che iniziano con:
"Ci scommetto..."
Discussioni del Parlamento europeo
Renderlo amichevole, non arrogante. Max 10 parole.`
},
{
  id: "viral-hook-curiosidad-008",
  title: "Guarda cosa succede quando cambi 1 cosa",
  summary: "Curiosità per micro-cambio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 ganci con:
"Guarda cosa succede quando cambi _ _ PH0 _"
_ _ PH1 _ _ _ _ _ _ _ _ _ _ _
_ PH3 _ _ deve essere super concreto (senso, ordine, punto, passo).`
},
{
  id: "viral-hook-curiosidad-009",
  title: "Il modo veloce (ma raro) di farlo",
  summary: "Curiosità con metodo \"raro\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci per _ _ PH0 _ con:
"La forma veloce (ma rara) di _ PH1 _ _ _"
_ PH2 _ deve essere un'azione di nicchia.
Max 12 parole. Chiudilo con "Ti faccio vedere".`
},
{
  id: "viral-hook-curiosidad-010",
  title: "C'e' un motivo per cui ti succede sempre",
  summary: "Curiosità per pattern ripetuti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 ganci che includono:
"Ti succede sempre..."
Discussioni del Parlamento europeo
Non dire tutta la ragione, solo un grilletto.`
},

{
  id: "viral-hook-curiosidad-011",
  title: "Lo riepilogo in un'idea (che nessuno usa)",
  summary: "Promette semplice + curiosità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci su _ _ PH0 _:
"Riassumo in un'idea che nessuno usi..."
Devi chiudere con "guarda questo" o "ascolta".
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-012",
  title: "Questo funziona per un motivo inaspettato",
  summary: "Curiosità per causa non evidente.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci per _ _ PH0 _ con:
"Questo funziona per una ragione inaspettata..."
Regole:
- 7-12 parole
- No. Non rivelare tutta la ragione
- Evita promesse assolute.`
},
{
  id: "viral-hook-curiosidad-013",
  title: "La parte più importante è nascosta",
  summary: "Curiosità per \"parte nascosta\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 18 ganci:
"La parte più importante è nascosta in _ PH0 _ _ _ _.
_ PH1 _ = un passo / situazione (ad esempio "il tuo primo messaggio", "la tua chiusura", "il tuo titolo").
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-014",
  title: "Non è magia, è questo (e ti mostro)",
  summary: "Curiosità + promessa di prova.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci con:
"Non è magia, è _ PH0 _..."
_ PH1 _ _ deve essere un concetto semplice (struttura, attrito, chiarezza, test, ecc.).
Finisci con "ti faccio vedere".
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-015",
  title: "Questo ti salva gli errori (e ti dico quali)",
  summary: "Curioso per \"bug list\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 ganci per _ _ PH0 _ _ questa promessa:
"ti fa tre errori."
Non elencare gli errori, fai finta che vengano.
Max 11 parole.`
},
{
  id: "viral-hook-curiosidad-016",
  title: "Il segno che ti dice la verità",
  summary: "Curiosità per \"segno\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"Il segnale che ti sta dicendo la verità: _ PH0 _ _ _ _ _ _ _ _ _ _ _ _ _ _______________
SCIAL deve essere misurabile / osservabile per _ _ PH1 _ _ _.`
},
{
  id: "viral-hook-curiosidad-017",
  title: "Se guardi questo, cambia il risultato",
  summary: "Curiosità per il fuoco.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 25 ganci:
"Se guardi _ _ PH0 _, cambia il risultato."
Per _ _ PH1 _ _. _ _ PH2 _ _ _ deve essere un elemento specifico del processo.`
},
{
  id: "viral-hook-curiosidad-018",
  title: "Questo è il momento esatto in cui si rompe",
  summary: "Curiosità per \"momento esatto\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 ganci per _ _ PH0 _ con:
"L'esatto momento in cui si rompe è quando _ _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ___________________
_ PH2 _ _ deve essere specifico (passo, frase, decisione).
Max 13 parole.`
},
{
  id: "viral-hook-curiosidad-019",
  title: "La regola che nessuno ti ha spiegato bene",
  summary: "Curiosità per \"rule\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci per _ _ PH0 _:
"La regola che nessuno ti ha spiegato bene..."
Chiudilo con "lo traduco".
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-020",
  title: "Te lo mostrerò prima (e perché)",
  summary: "Curiosità per trasformazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 15 ganci di trasformazione per _ _ PH0 _:
"Ti mostrerò prima... e perché."
Sembra credibile. Max 11 parole.`
},

{
  id: "viral-hook-curiosidad-021",
  title: "C'e' un passo che stai saltando",
  summary: "Curiosità del \"passo perduto\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 25 ganci:
"C'è un passo che salti..."
Discussioni del Parlamento europeo
Aggiungere una pista a quel passo (1-3 parole), senza rivelarlo completamente.`
},
{
  id: "viral-hook-curiosidad-022",
  title: "Questo trucco non mostra, ma ci si sente",
  summary: "Curiosità sensoriale / emotiva.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 18 ganci:
"Questo trucco non mostra, ma ci si sente..."
# For _ PH0 _ in _ _ # PH1 _ #
Chiudi con "guardare" o "ascoltare questo".`
},
{
  id: "viral-hook-curiosidad-023",
  title: "Ti mancano 1 parola (letterale)",
  summary: "Curiosità delle parole chiave.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci:
"Lei manca 1 parola: "_ _ PH0 _ _"
Perche'? La parola dovrebbe essere utile in copia / vendite / contenuto.
Non spiegare perché, solo "e cambiare tutto".`
},
{
  id: "viral-hook-curiosidad-024",
  title: "Quello che nessuno guarda è quello che decide",
  summary: "Curiosità da variabile nascosta.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci:
"Quello che nessuno guarda è quello che decide: _ _ PH0 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ____________________
_ PH1 _ _ deve essere nascosta variabile (frizione, contesto, tempi, alimentazione, energia...).`
},
{
  id: "viral-hook-curiosidad-025",
  title: "Dimmi se ti succede",
  summary: "Curiosità + identificazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Generare 20 ganci che iniziano con:
"Dimmi se ti succede questo..."
Discussioni del Parlamento europeo
Finisce con "perché c'è un motivo"`
},
{
  id: "viral-hook-curiosidad-026",
  title: "Ti sto dicendo cosa sta succedendo davvero",
  summary: "Curiosità per vera spiegazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci che iniziano con:
"Ti spiego cosa sta succedendo davvero..."
Oggetto: _ _ PH0 _. Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-027",
  title: "Questo è ciò che cambia quando capisci X",
  summary: "Curiosità per salto di livello.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci:
"Questo cambia quando capisci _ PH0 _..."
_ PH1 _ = concetto chiave di nicchia.
Chiudi con "guarda questo".
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-028",
  title: "Una volta che lo vedi, non puoi vederlo",
  summary: "Curioso per una visione forte.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci con:
"Dal momento che lo vedi, non puoi vederlo..."
Discussioni del Parlamento europeo
Deve sembrare un'intuizione (non un'overstatement).`
},
{
  id: "viral-hook-curiosidad-029",
  title: "Quello che nessuno ti ha detto del primo secondo",
  summary: "Curiosità per il primo secondo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci su "primo secondo" per _ PH0 _.
Struttura:
"Quello che nessuno ti ha detto del primo secondo..."
Chiudi con "Ti insegno".
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-030",
  title: "Questo e' risolto con una calzata ridicola",
  summary: "Piccola curiosità di regolazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci:
"Questo è organizzato con una regolazione ridicola: _ _ PH0 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _______________________
_ PH1 _ _ deve essere regolazione micro-reale.
Discussioni del Parlamento europeo.`
},

{
  id: "viral-hook-curiosidad-031",
  title: "Ti faccio vedere il trucco senza complicare",
  summary: "Curiosità + basso attrito.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci:
"Ti faccio vedere il trucco senza complicare..."
Oggetto: _ _ PH0 _. Max 11 parole.`
},
{
  id: "viral-hook-curiosidad-032",
  title: "La differenza è in questo (e non ti hanno detto)",
  summary: "Curiosità per la differenza chiave.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"La differenza è in _ PH0 _... e non te l'hanno detto."
_ PH1 _ deve essere la leva chiave di _ _ PH2 _ _.`
},
{
  id: "viral-hook-curiosidad-033",
  title: "Quello che fai alla fine cambia tutto",
  summary: "Chiusure curiose.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 18 ganci circa la fine / chiusura in _ PH0 _:
"Quello che fai alla fine cambia tutto..."
Chiudi con "guarda".
Max 11 parole.`
},
{
  id: "viral-hook-curiosidad-034",
  title: "Impara questo e salva te stesso",
  summary: "Curiosità + risparmio di sforzo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci:
"Impara questo e salva te stesso..."
Discussioni del Parlamento europeo Deve sembrare realistico. Max 11 parole.`
},
{
  id: "viral-hook-curiosidad-035",
  title: "Se ti dico questo, cambia la tua attenzione",
  summary: "Curiosità per frase chiave.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci:
"Se vi dico questo, cambia la vostra attenzione..."
Include "in 10 secondi".
Max 12 parole. Discussioni del Parlamento europeo.`
},
{
  id: "viral-hook-curiosidad-036",
  title: "La chiave e' quello che non dici",
  summary: "Curiosità dell'omissione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 18 ganci per copia / contenuto in _ PH0 _:
"La chiave è quello che non dici..."
Chiudi con "Ti mostro".
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-037",
  title: "Questo modello viene ripetuto (e puoi usarlo)",
  summary: "Curiosità per schema.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"Questo modello è ripetuto... e puoi usarlo."
Discussioni del Parlamento europeo Aggiungi traccia 1-3 parole del modello.`
},
{
  id: "viral-hook-curiosidad-038",
  title: "Ti faccio vedere il trucco che uso (senza fumo)",
  summary: "Curiosità + credibilità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 ganci:
"Ti mostro il trucco che uso... (senza fumo)"
Oggetto: _ _ PH0 _. Max 11 parole.`
},
{
  id: "viral-hook-curiosidad-039",
  title: "Guarda qui",
  summary: "Curiosità per prova.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"Non indovinare... guarda questo."
Discussioni del Parlamento europeo
Aggiungere una traccia di prova (dati, esempio, prima / dopo) senza mostrarlo.`
},
{
  id: "viral-hook-curiosidad-040",
  title: "Ti lascio il metodo in 3 passaggi (ma guarda con 2)",
  summary: "Curiosità a passo critico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 ganci su metodo a 3 fasi in _ PH0 _.
Dovrebbe includere:
- "3 passi".
- "occhio con 2"
Max 14 parole.`
},

{
  id: "viral-hook-curiosidad-041",
  title: "Questo errore sembra piccolo, ma colpisce duramente",
  summary: "Curiosità per l'impatto nascosto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 18 ganci:
"Questo errore sembra piccolo, ma colpisce duramente..."
Discussioni del Parlamento europeo Chiudi con "guarda il perché".
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-042",
  title: "Quello che nessuno ti ha detto del 'perché'",
  summary: "Una vera curiosità di motivazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 ganci:
"Che cosa nessuno ti ha detto di 'perché'..."
Discussioni del Parlamento europeo
Sembra una vera intuizione, non una motivazione economica.`
},
{
  id: "viral-hook-curiosidad-043",
  title: "Ti faccio vedere un modo diverso",
  summary: "Curiosità in alternativa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"Vi mostro una forma diversa di _ PH0 _..."
_ PH1 _ = azione comune di nicchia.
Chiudi con "in 15 secondi".
Max 13 parole.`
},
{
  id: "viral-hook-curiosidad-044",
  title: "Fai questo e dimmi se noti la differenza",
  summary: "Curiosità da esperimento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 ganci tipo di esperimento:
"Fai questo e dimmi se noti la differenza..."
Discussioni del Parlamento europeo Devi suggerire un semplice cambiamento.`
},
{
  id: "viral-hook-curiosidad-045",
  title: "La frase che cambia la risposta",
  summary: "Curiosità per frase magica (realistica).",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci:
"La frase che cambia la risposta: '_ _ PH0 _ _ _"
_ PH1 _ _ deve essere copia / incolla per _ _ PH2 _ _ _.
Non spiegare perché, "e vedere".`
},
{
  id: "viral-hook-curiosidad-046",
  title: "Sembra strano, ma funziona",
  summary: "Curiosità con metodo non intuitivo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 18 ganci:
"Questo sembra strano, ma funziona..."
Oggetto: _ _ PH0 _. Chiudi con "guarda".
Max 11 parole.`
},
{
  id: "viral-hook-curiosidad-047",
  title: "Ti faccio vedere cosa fa nessuno",
  summary: "Curiosità a vantaggio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci:
"Ti mostro cosa sta facendo nessuno _ PH0 _..."
Deve sembrare specifico (non "qualcosa di segreto").
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-048",
  title: "Perche' ti sta succedendo",
  summary: "Curiosità per spiegazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci in forma di domanda:
"Perché?"
E aggiungi "ti spiego" alla fine.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-hook-curiosidad-049",
  title: "Ti faccio vedere il punto esatto",
  summary: "Curiosità per dettagli precisi.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci:
"Vi mostro il punto esatto dove _ _ _ _ _ _ _ modifiche."
Oggetto: _ _ PH1 _ _. X = conversione / ritenzione / vendite / chiarezza / ecc.
Max 12 parole.`
},
{
  id: "viral-hook-curiosidad-050",
  title: "Se lo fai, capisci il gioco",
  summary: "Curioso per \"rule del gioco\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci:
"Se lo fai, capisci il gioco..."
Discussioni del Parlamento europeo È necessario implicare la regola (chiarezza, offerta, ritenzione, ecc.).
Chiudi con "guarda il perché".`
}];