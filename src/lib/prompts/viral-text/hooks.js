// src/lib/prompts/viral-text/hooks.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Ganci";
const CATEGORY = "Sorpresa";

export const viralTextPromptsHooks = [
{
  id: "viral-hook-sorpresa-001",
  title: "L'errore che tutti fanno (e non notano)",
  summary: "Gancio di sorpresa + promessa di correzione immediata.",
  area: AREA,
  category: CATEGORY,
  prompt: `Agisce come sceneggiatore Reels / TikTok. Creare 10 ganci di 1 frase (massimo 9 parole) per la nicchia: _ PH0 _.
Formato: Gancio → (perchè il battito in 1 linea).
Regole:
- Devi iniziare con "Stai facendo questo male..."
- No. Devi promettere un risultato concreto in 7 giorni.
- No. Nessun clickbat vuoto: menziona una vera causa.
- Lo spagnolo neutro.`
},
{
  id: "viral-hook-sorpresa-002",
  title: "Ti stanno mentendo con questo consiglio",
  summary: "Uncino di morbida contraddizione contro una punta popolare.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 12 ganci virali che attaccano un popolare _ _ PH0 _ consigli.
Struttura obbligatoria:
1) "Ti stanno mentendo con..." + _ PH1 _
2) mini-test in 6-10 parole
3) prometto: "in 20 secondi te lo spiegherò."
Fallo per il pubblico: _ _ PH2 _.`
},
{
  id: "viral-hook-sorpresa-003",
  title: "L'ho provato ed è andato dall'altra parte",
  summary: "Uncino da esperimento fallito che lascia curiosità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci "esperimento" per _ PH0 _ _.
Ogni foro deve:
- Inizia con "ho provato e..."
- Compresa una svolta inaspettata.
- Chiudi con una domanda.
Esempio di tono: diretto, strada, ma professionale.`
},
{
  id: "viral-hook-sorpresa-004",
  title: "Nessuno ti dice questa parte",
  summary: "Gancio di segreto / omissione, senza reazione eccessiva.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci per _ _ PH0 _ _ con la frase "Nessuno ti dice..."
Regole:
- 6 a 10 parole.
- No. È necessario insinuare una "parte non confortevole" o sottovalutata.
- No. Evita promesse illegali o garantite.
- No. Include 5 varianti più lisce (meno conflittuali).`
},
{
  id: "viral-hook-sorpresa-005",
  title: "Verità scomoda in 1 frase",
  summary: "Uncino corto, pugno, per anello aperto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 25 ganci (massimo 8 parole) per _ _ PH0 _ questo suono come "verità scomode".
Struttura:
- Forte affermazione + dettaglio specifico.
- Niente insulti.
- Devi invitare "cosa faccio allora".
Consegna in lista numerata.`
},
{
  id: "viral-hook-sorpresa-006",
  title: "Il trucco più strano che funziona",
  summary: "Gancio di rarità + convalida.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 ganci per _ _ PH0 _ _ utilizzando "The Weird Trick..."
Include:
- 5 ganci per principianti
- 5 per livello intermedio
- 5 per avanzato
Aggiungere alla fine di ogni foro: (che cosa promette in 3 parole).`
},
{
  id: "viral-hook-sorpresa-007",
  title: "Cosa farei se iniziassi da zero",
  summary: "Reset Hook con sorpresa + chiarezza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 ganci in prima persona per _ _ PH0 _ iniziare con:
"Se iniziassi da zero, lo farei:"
Regole:
- 1 singola frase.
- No. Cita un passo che contraddice l'intuizione comune.
- Tono: vicino mentore.`
},
{
  id: "viral-hook-sorpresa-008",
  title: "Sembra brutto, ma è per il meglio",
  summary: "Uncino che gioca con tensione morale / bizzarro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 18 ganci per _ _ PH0 _ _ con questo modello:
"Questo suona male, ma...
Condizioni:
- No. Che il "poco male" è etico (senza frode / danni).
- No. Il beneficio è tangibile e specifico.
- 9-11 parole massime.`
},
{
  id: "viral-hook-sorpresa-009",
  title: "Il tuo problema non e' quello che pensi",
  summary: "Uncino da incontrare con sorpresa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci che iniziano con:
"Il tuo problema non è _ PH0 _, it's _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ ____________
Per l'industria: _ _ PH2 _ _.
Include 5 esempi per ogni sub-item: _ _ PH3 _, _ _ PH4 _ _, _ _ _ PH5 _ _, _ _ _ PH6 _ _ _ _ _ _ _ _ _ _.`
},
{
  id: "viral-hook-sorpresa-010",
  title: "Ti salvo 6 mesi",
  summary: "Uncino con una promessa per risparmiare tempo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 15 ganci per _ _ PH0 _ Iniziare con:
"Ti salverò sei mesi..."
Regole:
- No. Si dovrebbe menzionare l'errore specifico che si evita.
- Niente "garantito".
- Tono urgente ma realistico.`
},

{
  id: "viral-hook-sorpresa-011",
  title: "Il consiglio che mi costava soldi",
  summary: "Uncino di apprendimento costoso (sorpresa + storia).",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 12 brevi storie ganci (1 frase) per _ PH0 _ _ per iniziare con:
"Il consiglio che mi costava soldi era..."
Deve chiudere con "e vi dico cosa fare".
Tienilo credibile e concreto.`
},
{
  id: "viral-hook-sorpresa-012",
  title: "Non farlo se vuoi i risultati",
  summary: "Proibizione gancio con torsione specifico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci che iniziano con:
"Non farlo se vuoi"
Esso comprende un "questo" molto specifico (azione concreta).
Massimo 10 parole per buco.`
},
{
  id: "viral-hook-sorpresa-013",
  title: "Il minimo dettaglio che cambia tutto",
  summary: "Microdetail gancio + alto impatto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 ganci su microdettagli per _ PH0 _.
Base:
"Il minimo dettaglio che cambia tutto: _ _ PH1 _ _ _ _"
Fare _ _ _ _ PH2 _ essere attuabile in 2 minuti.`
},
{
  id: "viral-hook-sorpresa-014",
  title: "Smettila di seguire questa regola",
  summary: "Regola anti-popolare del gancio (sorpresa).",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 15 ganci per _ _ PH0 _ utilizzando:
"Smetti di seguire questa regola: _ _ PH1 _ _ _"
Poi aggiunge 1 mini-argumento (massimo 8 parole).
Nessuna aggressione. Semplice, sfocato.`
},
{
  id: "viral-hook-sorpresa-015",
  title: "Questo ha rovinato i miei risultati (fino ad oggi)",
  summary: "Drama Hook controllato con risoluzione ravvicinata.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 ganci per _ _ PH0 _ con:
"Questo ha rovinato i miei risultati... fino ad oggi."
Include una traccia del "arrangiamento" ma non lo rivela completo.
Tono: onesto, inesagerato.`
},
{
  id: "viral-hook-sorpresa-016",
  title: "La scorciatoia non è un collegamento",
  summary: "Paradossale Gancio per anello aperto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 20 ganci paradossali su _ _ PH0 _ _ _.
Struttura:
"La scorciatoia non è _ _ PH1 _ _, is _ PH2 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __________
Fare _ _ _ PH3 _ Suggerire e correggere.`
},
{
  id: "viral-hook-sorpresa-017",
  title: "La tua formula è incompleta",
  summary: "Uncino di \"ti manca un pezzo\".",
  area: AREA,
  category: CATEGORY,
  prompt: `Generare 15 ganci che iniziano con:
"La vostra formula è incompleta: vi manca _ PH0 _ _ _"
Per...
Ogni _ _ _ _ PH2 _ _ deve essere un'azione concreta o un concetto chiaro.`
},
{
  id: "viral-hook-sorpresa-018",
  title: "Se lo fai, fermati",
  summary: "Uncino di specifico autosabotaggio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 20 ganci di auto-sabotaggio per _ _ PH0 _ _.
Regole:
- No. Devono iniziare con "Se fai questo..."
- No. Devono finire con una chiara conseguenza.
- Nessuna generalità (nessun "pensante negativo").`
},
{
  id: "viral-hook-sorpresa-019",
  title: "Non è una mancanza di talento, è questo",
  summary: "Ristrutturazione emotiva Gancio + soluzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci:
"Non è una mancanza di talento, è _ _ PH0 _"
Perche'?
_ PH2 _ _ deve essere specifico e corretto entro 1 settimana.`
},
{
  id: "viral-hook-sorpresa-020",
  title: "Lo stai misurando male",
  summary: "Gancio di metrica sbagliata (sorpresa).",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 15 ganci per _ _ PH0 _ sotto forma di correzione metrica.
Template:
"La stai misurando male: guarda _ PH1 _ _ _ _ _"
Fare _ _ _ _ PH2 _ cemento e utile.`
},

{
  id: "viral-hook-sorpresa-021",
  title: "Sembra ovvio, ma nessuno lo sa",
  summary: "Uncino di ignoranza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Generare 25 ganci per _ _ PH0 _ _ per iniziare con:
"Questo sembra ovvio, ma..."
Deve includere una semplice azione che quasi nessuno corre.
Massimo 11 parole.`
},
{
  id: "viral-hook-sorpresa-022",
  title: "Il motivo per cui non funziona per te",
  summary: "Uncino causa diretta con sorpresa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 ganci con:
"La ragione per cui non funziona per te"
Completo di una causa inaspettata ma reale.
Concentrati su: _ _ PH1 _ _ _.`
},
{
  id: "viral-hook-sorpresa-023",
  title: "Il consiglio che ti dà risultati opposti",
  summary: "Gancio di investimenti di aspettative.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 ganci su "tips che vanno indietro" per _ PH0 _ _.
Struttura del gancio:
- Consigli tipici
- Di fronte al risultato di 4-7 parole
Tutto in una sola frase.`
},
{
  id: "viral-hook-sorpresa-024",
  title: "Fai il contrario (ma così)",
  summary: "Uncino controacorrient con istruzioni.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 18 ganci:
"Fai il contrario: invece di _ _ PH0 _, do _ PH1 _ _ _ _ _
Per...
_ PH3 _ _ e _ _ PH4 _ _ deve essere azioni concrete e realistiche.`
},
{
  id: "viral-hook-sorpresa-025",
  title: "Ti manca una linea (letterale)",
  summary: "Uncino testuale micro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 15 ganci per copia / marketing dove il turno è "una linea".
Template:
"Le manca una linea: _ _ PH0 _"
Il _ _ PH1 _ dovrebbe essere una frase esatta che è possibile incollare.`
},
{
  id: "viral-hook-sorpresa-026",
  title: "Il trucco è noioso (per questo funziona)",
  summary: "Uncino anti-hype, credibile.",
  area: AREA,
  category: CATEGORY,
  prompt: `Generare 20 ganci con questa idea:
"Il trucco è noioso... ecco perché funziona."
Perche'?
Ti faccio vedere come. "`
},
{
  id: "viral-hook-sorpresa-027",
  title: "Non è per tutti",
  summary: "Morbido gancio di esclusione (segmenta).",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 15 ganci che iniziano con:
"Questo non è per tutti, è per..."
Definire un profilo ultra specifico di _ _ PH0 _ _.
Nessun elitismo aggressivo.`
},
{
  id: "viral-hook-sorpresa-028",
  title: "La parte che ignorate di più (e pesate di più)",
  summary: "Uncino e' l'obiettivo sbagliato.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci per _ _ PH0 _:
"La parte più ignorante è la più pesante: _ PH1 _ _ _"
Do _ PH2 _ _ qualcosa di concreto (ad esempio "la vostra chiusura", "la vostra offerta", "il vostro primo paragrafo").`
},
{
  id: "viral-hook-sorpresa-029",
  title: "Se fai solo 1 cosa oggi",
  summary: "Uncino di priorità unica (sorpresa).",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 25 ganci per iniziare con:
"Se fai solo una cosa oggi..."
Perche'?
Dev'essere un'azione ad alto impatto, a bassa frizione.`
},
{
  id: "viral-hook-sorpresa-030",
  title: "La regola 3-1-1",
  summary: "Gancio con struttura mini-numerical.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare 12 ganci con strutture numeriche inventate (ma utile) per _ PH0 _ _.
Esempio di formattazione: "31-1 regola: _ PH1 _"
Allora spiega il nome in 6 parole all'interno del buco.`
},

{
  id: "viral-hook-sorpresa-031",
  title: "Ti sto dicendo dall'esperienza (e fa male)",
  summary: "Uncino di confessione + tensione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 15 ganci per _ _ PH0 _ che inizio con:
"Ti sto dicendo dall'esperienza..."
Include un mini "pain" e una promessa di soluzione.
Massimo 12 parole.`
},
{
  id: "viral-hook-sorpresa-032",
  title: "Questa abitudine ruba i tuoi risultati",
  summary: "Uncino di abitudine invisibile.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci su abitudini invisibili in _ PH0 _.
Template:
"Questa abitudine ti ruba _ _ PH1 _: _ _ PH2 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ____
Lascia che l'abitudine sia quotidiana e specifica.`
},
{
  id: "viral-hook-sorpresa-033",
  title: "Non hai bisogno di altre informazioni, ne hai bisogno",
  summary: "Informazioni saturazione gancio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci per _ _ PH0 _ che sono sovraccaricati di informazioni.
Template:
"Non hai bisogno di maggiori informazioni, hai bisogno _ _ PH1 _ _ _ _ _ _
_ PH2 _ _ deve essere una semplice azione o sistema.`
},
{
  id: "viral-hook-sorpresa-034",
  title: "Che nessuno fa nel primo secondo",
  summary: "Primo secondo gancio specifico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci circa il "primo secondo" per _ PH0 _ _.
Si dovrebbe menzionare qualcosa di visivo o verbale che è fatto all'inizio.
Si chiude con "e per questo sta tenendo"`
},
{
  id: "viral-hook-sorpresa-035",
  title: "Il nemico non è l'algoritmo",
  summary: "Uncino credenza anti-popolare.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 12 ganci con questa idea:
"Il nemico non è l'algoritmo, è _ _ PH0 _ _"
Per i creatori in _ PH1 _.
_ PH2 _ _ deve essere un contenuto o un errore di offerta.`
},
{
  id: "viral-hook-sorpresa-036",
  title: "Il tuo contenuto fallisce per questo (non per qualità)",
  summary: "Uncino di sorpresa causa no-obvious.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci:
"Il tuo contenuto fallisce per _ _ PH0 _, non per qualità."
_ PH1 _ _ deve variare: struttura, chiarezza, offerta, attrito, contesto, tempistica.
Concentrati su _ _ PH2 _ _.`
},
{
  id: "viral-hook-sorpresa-037",
  title: "Questo ti fa sembrare amatoriale senza che tu noti",
  summary: "Dettaglio amatoriale Hook.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 25 "particolari dilettanti" ganci per _ PH0 _.
Template:
"Questo ti fa sembrare amatoriale: _ _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _______
_ PH2 _ deve essere concreto e facile da correggere.`
},
{
  id: "viral-hook-sorpresa-038",
  title: "La frase che cambia la tua risposta",
  summary: "Uncino script / formula testuale.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 15 ganci basati su "Un'esatta FRASE".
Template:
"Salva questa frase e cambia tutto: "_ _ PH0 _ _"
Il _ _ PH1 _ dovrebbe essere pronto a copiare e incollare per _ _ PH2 _ _.`
},
{
  id: "viral-hook-sorpresa-039",
  title: "Non rendere più difficile",
  summary: "Uncino più semplice con giro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Generare 20 ganci che iniziano con:
"Non rendere più difficile..."
Poi completo di una semplificazione inaspettata per _ PH0 _ _ _.
Massimo 10 parole.`
},
{
  id: "viral-hook-sorpresa-040",
  title: "Il trucco è rimuovere, non mettere",
  summary: "Gancio di rapimento (sorpresa).",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 15 ganci con:
"Il trucco è quello di rimuovere _ _ PH0 _, non mettere _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _____
Per...
_ PH3 _ e _ _ PH4 __ deve essere cose reali (passaggi, parole, abitudini).`
},

{
  id: "viral-hook-sorpresa-041",
  title: "Questo cambiamento di ordine migliora tutto",
  summary: "Gancio per riordinare i passi.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 18 ganci su "cambiare l'ordine" per _ PH0 _.
Template:
"Cambiare l'ordine: prima _ _ PH1 _, poi _ PH2 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ______________________________________________________________________________________________________________
Questo _ PH3 _ _ / _ PH4 _ _ sono azioni chiare.`
},
{
  id: "viral-hook-sorpresa-042",
  title: "Quello che fai per \"sicurezza\" ti tiene indietro",
  summary: "Uncino di comportamento protettivo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 15 ganci:
"Quella cosa che fai per la sicurezza... Ti sta trattenendo."
Completo di un tipico comportamento di _ PH0 _ _.
Aggiungere un mini "perché" in 5 parole.`
},
{
  id: "viral-hook-sorpresa-043",
  title: "Stai saltando il passo invisibile",
  summary: "Uncino in un passo omesso.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 ganci che includono l'idea:
"Passo invisibile"
Template:
Stai saltando il passaggio invisibile: _ PH0 _ _ _ _ _ _ _ _ _ _ _ _
Per _ _ PH1 _ _. _ PH2 _ _ _ deve essere fattibile.`
},
{
  id: "viral-hook-sorpresa-044",
  title: "Se succede, è un buon segno",
  summary: "Uncino per incontrare una sorpresa positiva.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci:
"Se ti succede, è un buon segno."
Perche'?
_ PH2 _ deve essere qualcosa di comune e non pericoloso (ad esempio nervi, dubbi, giù).`
},
{
  id: "viral-hook-sorpresa-045",
  title: "E' quello che non farei",
  summary: "Gancio di postura forte senza aggressione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 15 ganci solido stile di opinione:
"Non farei nemmeno questo pazzo:
Perche'?
PH2 _ _ deve essere una strategia comune ma negativa in un determinato contesto.
Ti diro' cosa farei. "`
},
{
  id: "viral-hook-sorpresa-046",
  title: "Il cambiamento di 5 parole",
  summary: "Gancio di micro-edizione testuale.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 20 ganci:
"Il cambiamento di 5 parole che migliora _ _ PH0 _ _"
Include nel libro le 5 parole esatte tra citazioni.
Concentrati su _ _ PH1 _ _.`
},
{
  id: "viral-hook-sorpresa-047",
  title: "Il motivo per cui ti ignorano",
  summary: "Uncino che colpisce un vero dolore.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 18 ganci per _ _ PH0 _ con:
"La ragione per cui ti ignorano è..."
Completa di un errore di messa a fuoco (non con insulti).
Sembra diretto e utile.`
},
{
  id: "viral-hook-sorpresa-048",
  title: "Questo è più importante della strategia",
  summary: "Uncino di priorità di sorpresa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 ganci:
"Questo è più importante della strategia: _ _ PH0 _ _ _"
Perche'?
_ PH2 _ _ deve essere una base specifica (larità, offerta, consistenza, energia, ecc.) ma spiegato.`
},
{
  id: "viral-hook-sorpresa-049",
  title: "Cosa faccio prima di pubblicare",
  summary: "Uncino di rituale segreto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 15 ganci su "prima di pubblicare" per _ PH0 _ creatori.
Template:
"Prima di pubblicare, faccio questo: _ _ PH1 _ _ _ _ _
_ PH2 _ deve essere semplice e raro.`
},
{
  id: "viral-hook-sorpresa-050",
  title: "Il segreto è la fine, non l'inizio",
  summary: "Gancio di investimento (finale > inizio).",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 12 ganci su script in cui la chiave è la chiusura.
Template:
"Il segreto è la fine:
_ PH1 _ deve essere concreto (CTA, payoff, affare, test, esempio, ecc.).
Per...`
}];