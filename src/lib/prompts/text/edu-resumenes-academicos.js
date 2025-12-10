// src/lib/prompts/text/edu-resumenes-academicos.js

export const textPromptsEduResumenesAcademicos = [
{
  id: "edu-res-001",
  title: "Riepilogo accademico IMRAD (documento completo) + contributi, limiti e replica",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Summarizzare una carta formato IMRAD con ingressi, limitazioni e possibili repliche.",
  prompt: `Qui incollare la carta (o un estratto lungo) e completa:
- Disciplina:
- Tipo di studio: [esperimentale / osservazionale / teorico / recensione]
- Audizione: [studenti / ricercatori / manager]
- Lunghezza prevista: [300 / 600 / 900 parole]
- Approccio: [più tecnico / più concettuale]

Compito:
1) Sommarizzare il lavoro in formato IMRAD:
- Introduzione: problema, gap, obiettivo, ipotesi.
- Metodi: progettazione, campione / dati, variabili, procedura, analisi.
- Risultati: risultati chiave (con numeri se presenti), figure / tabelle importanti.
- Discussione: interpretazione, implicazioni, confronto con la letteratura, limiti.

(2) Estratto:
- 5 contributi principali (con precisione).
- 5 limiti / minacce alla validità (internal / esterno / costruzione).
- 5 concetti chiave con definizioni operative.
- 5 citazioni "parafrassibili" (senza copia letterale; idea + sezione dove appare).

(3) Chiusura:
- 3 domande di ricerca aperte.
- 2 idee replica (cosa cambierebbe e perché).
- 1 versione ultra-breve (280-character tweet accademico).`,
  thumbnail: ""
},
{
  id: "edu-res-002",
  title: "Riassunto critico con matrice: cosa dice, quale prova, cosa assume, cosa manca",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Riepilogo critico strutturato per una lettura accademica impegnativa.",
  prompt: `Testo da riassumere: [PENGA QUI]
Disciplina: []
Livello stretto: [alto]

Restituisce un sommario in 4 blocchi (con cartoni animati e frasi brevi):
A) Che cosa dici (tesi) - 5 proiettili
B) Quali prove fornisce - 5 proiettili (dati, metodo, esempi)
C) Cosa assumete - 6 proiettili (supposti espliciti e impliciti)
D) Che mancanza / rischi - 6 proiettili (bia, limiti, dati mancanti)

Allora:
- 3 forti controargomenti (steelman) contro la tesi
- 3 miglioramenti metodologici specifici
- 1 sintesi bilanciata (150-220 parole) "il buono + il debole".
.`,
  thumbnail: ""
},
{
  id: "edu-res-003",
  title: "Riassunto per la revisione bibliografica (art status) + mappa tematica",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Trasformare un documento o un capitolo in una voce pronta per la tua recensione della letteratura.",
  prompt: `Incollare il testo: [PEGA QUI]
Oggetto della sua recensione: []
Citation style (solo riferimento testuale): [APA / IEEE / Chicago]

Voglio:
1) Riassunto orientato alla letteratura (250-450 parole):
- problema, concentrazione, risultati, contributo al campo.
2) Come si inserisce nello stato dell'arte:
- No. Quale linea / scuola rappresenta?
- No. Qual e' il dibattito?
- No. Cosa contraddice o conferma?
3) Carta tematica:
- 6 tag (parole chiave) + perché
- 3 oggetti ipotetici "vicini" che dovreste cercare (titoli consuggested + che cosa avrebbero fornito)
4) Nota d'uso:
- No. Il paragrafo della mia recensione dovrebbe essere citato (introduzione / quadro / discussione) e per quale scopo.`,
  thumbnail: ""
},
{
  id: "edu-res-004",
  title: "Riassunto con estrazione variabile e definizione (operazionalizzazione)",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Estrae variabili, misure e definizioni: ideale per replicare o studiare design.",
  prompt: `Testo / carta: [PEGA QUI]
Obiettivo: [replicare / progettare lo studio simile / comprendere variabili]

Resi:
1) Riepilogo generale (200-350 parole).
2) Tabella in testo (con colonne):
- Variabile / costruttivo
- Definizione (come lo capiscono)
- Operazionalizzazione (come lo misurano)
- Tipo (IV / DV / Controllo / Moderatore / Mediatore)
- Fonte / Sezione (dove appare)
3) Minacce alla validità:
- 2 detenuti
- 2 esterno
- 2 di costruzione
4) raccomandazioni:
- 3 miglioramenti per misurare meglio queste variabili.`,
  thumbnail: ""
},
{
  id: "edu-res-005",
  title: "Riassunto con 'filo logico': locali → metodo → inferenza → conclusione",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Reagisce l'argomento della carta come un filo logico verificabile.",
  prompt: `Incollare il testo: [PEGA QUI]
Livello: [avanzato]

Voglio che ricostruisca il filo logico:
1) locali (5-10) - che cosa deve essere vero per l'argomento a lavorare.
2) Metodo / funzionamento (come si spostano dai locali alle prove).
3) Inferenze chiave (3-6): dove i dati "giungono" alla conclusione.
4) Conclusioni (3): principali, secondarie e implicite.

Allora:
- No. Essa indica 3 punti in cui l'argomento dipende da un'ipotesi fragile.
- Prop 2 test aggiuntivi che rafforzano il filo logico.
- Fai un riassunto finale di 180-250 parole per mantenere quel filo.`,
  thumbnail: ""
},
{
  id: "edu-res-006",
  title: "Riepilogo comparativo: Fascicolo A vs Fascicolo B (similarità, differenze, che concorda)",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Confronto critico tra due documenti e un verdetto ragionato.",
  prompt: `Pega Paper A: []
Pega Paper B: []
Tema generale: []

Resi:
1) Sintesi di A (150-250 parole) e B (150-250 parole).
(2) Matrice comparativa:
- Domanda di ricerca
- Metodo / dati
- Risultati principali
- Fortezza
- Parità
- Generale
(3) Conflitto:
- No. Dove contraddicono e perché? (3 punti)
(4) Verdict:
- No. Che è più convincente in quali condizioni?
- No. Che studio faresti per risolvere la controversia?

Vicino con:
- 8 proiettili da citare in una recensione letteraria.`,
  thumbnail: ""
},
{
  id: "edu-res-007",
  title: "Riepilogo 'per l'esposizione': script di 5 minuti + diapositive suggerite",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Trasforma una carta in uno script pronto a presentare in classe o seminario.",
  prompt: `Testo / carta: [PEGA QUI]
Durata dell'esposizione: 5 minuti
Audizione: [classe / seminario / comitato]

Consegna:
1) Scritto scritto (450-650 parole):
- gancio, problema, metodo, risultati, implicazioni, chiusura.
2) Struttura scorrevole (8-10):
- Titolo scorrevole + 3 proiettili
- quale grafico / tabella metteresti e perché
3) Domande per il pubblico (3) apertura del dibattito.
4) "Questioni difficili" che potrebbero essere poste (5) + risposte brevi.`,
  thumbnail: ""
},
{
  id: "edu-res-008",
  title: "Riepilogo 'a studio': Cornell + glossario + autoesame",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Convertire un testo in note di studio e aggiungere autovalutazione.",
  prompt: `Testo: [PIGA QUI]
Livello: [università / laurea]

Crea:
(1) Note di Cornell:
- Colonna chiave / domande (10-15)
- Colonna delle note (risposte sviluppate)
- Sommario alla fine (120-180 parole)
2) Glossario:
- 12-20 termini chiave con definizione + esempio
3) Autoesame:
- 10 domande (6 MCQ + 4 aperto)
- risposte corrette + breve spiegazione`,
  thumbnail: ""
},
{
  id: "edu-res-009",
  title: "Riepilogo del capitolo del libro: tesi, struttura, concetti, citazioni utili",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Summarizzare un lungo capitolo mantenendo la struttura e i concetti chiave.",
  prompt: `Capitolo:
Obiettivo: [studio / recensione / preparare la classe]
Lunghezza prevista: [400-800 parole]

Voglio:
1) Tesi principale del capitolo (1-2 frasi).
(2) Struttura della sezione:
- Sezione → idea principale → 2 sottoidea + esempio.
3) 10 concetti chiave (definizione + come vengono utilizzati qui).
4) 6 idee "citative" (parafrasi) che indicano quale sezione li supporta.
5) 3 critiche (il debole / il discutibile) con argomenti.
(6) 1 applicazione pratica (come sarebbe utilizzato in un progetto reale).`,
  thumbnail: ""
},
{
  id: "edu-res-010",
  title: "Riepilogo sistematico di una recensione: domande, criteri, risultati, lacune",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Disegna l'essenza di una recensione, con lacune e raccomandazioni future.",
  prompt: `Testo della recensione: [PENGA QUI]
[]
Obiettivo: [situazione attuale della cattura]

Resi:
1) Domanda (s) di revisione e motivazione (100-150 parole).
2) Criteri:
- inclusione / esclusione (se appaiono; se non, infestare con cautela)
- tipo di prova
3) Risultati principali:
- 6-10 proiettili, raggruppati per tema
4) Consenso contro le controversie:
- 3 consenso
- 3 controversie
(5) Gaps:
- 6 lacune reali e specifiche
6) Agenda futura:
- 5 linee di ricerca consigliate con "perché ora".`,
  thumbnail: ""
},

{
  id: "edu-res-011",
  title: "Astratto per 'lavoro correlato': 1 paragrafo perfetto + 6 citazioni nei proiettili",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Uscita pronta per incollare in una sezione di lavoro relativa.",
  prompt: `Carta / testo: [PEGA QUI]
Il vostro tema:

Genera:
1) Un paragrafo del "lavoro relativo" (160-220 parole) con:
- contesto del campo
- Che lavoro fa?
- come è diverso.
- limitazione significativa
2) 6 proiettili "citativi", ciascuno con:
- idea
- perché è importante
- quale parte del testo lo supporta (sezione o frase approssimativa)

Vicino:
- 3 frasi alternative per cambiare stile e non ripetere 'questo lavoro...'.`,
  thumbnail: ""
},
{
  id: "edu-res-012",
  title: "Astratto con 'claim chart': affermazione → prove → forza → rischio",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Mappa delle dichiarazioni e delle prove per valutare rapidamente la forza.",
  prompt: `Testo: [PIGA QUI]

Costruisci un grafico a richiesta in formato tabella di testo con colonne:
- Claim (stato)
- Prove (che cosa presentano)
- Tipo di prova (dati / argomento / teoria / esperimento / modello)
- Forza (alto / medio / basso) + perché
- Rischio / minaccia (bias, confusione, generalizzazione)
- No. Ciò che sarebbe necessario per aumentare la forza

Include minimo 8 reclami.

Allora:
- Sommarizzare in 200-300 parole "che cosa è ben supportato" vs "cosa è allettante".`,
  thumbnail: ""
},
{
  id: "edu-res-013",
  title: "Riepilogo della tesi: ingressi di estratto, struttura teorica, metodo replicabile",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Orientato a scrivere la tesi: qual è l'uso della carta e come incorporarla.",
  prompt: `Testo: [PIGA QUI]
Oggetto della mia tesi:
Capitolo dove lo userò: [quadro teorico / metodologia / discussione]

Resi:
1) Riepilogo carta (200-300 parole).
2) Quali parti posso utilizzare e come:
- 3 idee per il quadro teorico (in relazione al mio tema)
- 2 metodi / idee di misura
- 2 risultati per la discussione
3) Rischi quando citati (2-4): interpretazioni o limiti comuni.
4) 5 frasi "pronti ad integrare" (parafrasi accademica), in tono formale.`,
  thumbnail: ""
},
{
  id: "edu-res-014",
  title: "Astratto con 'concept map': concetti → relazioni →",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Rappresenta il testo come una rete di concetti e relazioni per imparare in profondità.",
  prompt: `Testo: [PIGA QUI]

Consegna:
1) Lista di 12-18 concetti chiave
2) Rapporto tra concetti (minimo 20) in formato:
- Concept A - (relazione) → Concept B [spiegazione 1 linea]
3) 3 importanti "routes" (4-6-concept chains) che spiegano il nucleo di testo
4) Un esempio applicato (caso realistico) utilizzando almeno 6 concetti
5) Riepilogo finale (180-240 parole) basato sulla mappa (non solo narrativa).`,
  thumbnail: ""
},
{
  id: "edu-res-015",
  title: "Riassunto 'da rivedere': valutazione rapida + decisioni (accetta / recensione / rigetto)",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Simula la relazione di revisione: punti di forza, punti deboli e miglioramenti concreti.",
  prompt: `Carta / testo: [PEGA QUI]
Rol: rassegna conferenza / rivista
Criteri: [novità, chiarezza, rigore, riproducibilità, impatto]

Resi:
1) Riepilogo neutro (150-220 parole).
2) Fortezza (5 proiettili).
3) Proibizioni (6 proiettili) - tecniche e chiarezza.
4) Domande per gli autori (6) - concreto, non-generico.
(5) Raccomandazioni (5) - modifiche attuabili.
(6) Verdetto:
- Accetta / Review / Reject
- 1 paragrafo che giustifica, con attenzione alle prove e agli standard.
.`,
  thumbnail: ""
},

{
  id: "edu-res-016",
  title: "Sintesi dell'articolo teorico: concetti, argomenti, controesempi, coerenza",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Per i testi privi di dati: ricostruire l'argomento e valutare la consistenza.",
  prompt: `Testo teorico: [PEGA QUI]

Voglio:
1) Tesi e obiettivi (1-2 frasi).
2) Punto principale:
- 6-10 passi (premessa → conclusione)
3) Concetti chiave:
- 10 concetti con definizione secondo l'autore + la vostra parafrasi.
4) Possibili controcampioni (3):
- dove la tesi potrebbe fallire
5) Coerenza interna:
- 3 punti forti
- 3 punti deboli (spese logiche, definizioni circolari, ambiguità)
6) Riepilogo finale (220-320 parole).`,
  thumbnail: ""
},
{
  id: "edu-res-017",
  title: "Sintesi della metodologia: dataset, procedura, pipeline, riproducibilità",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Estrae la pipeline metodologica e valuta la riproducibilità, ideale per la replica.",
  prompt: `Sezione Metodologia: [PENGA QUI]
[]
Obiettivo: [replicare / comprendere pipeline]

Resi:
1) Pipeline passo dopo passo (8-14 gradini).
2) Dettagli reproducibili:
- dati richiesti
- pre-elaborazione
- parametri rilevanti
- metrica e valutazione
- strumenti / ambiente (se menzionato)
3) Punti ambiziosi (lista): ciò che non è chiaro.
4) Cosa faresti agli autori a rispondere (10 domande).
5) Riassunto di 150-220 parole di metodologia.`,
  thumbnail: ""
},
{
  id: "edu-res-018",
  title: "Sintesi dei risultati: risultati, magnitudo, incertezza, limiti di interpretazione",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Si trasforma i risultati in conclusioni corrette e non superate.",
  prompt: `Sezione risultati (o tabella / cifre): [PENGA QUI]

Consegna:
1) 6-10 risultati in proiettili (include numeri e magnitudo se esistono).
2) Incertezza:
- intervalli / p-valori / errori (se appaiono)
- se non si presentano: quanto più si fida
3) Interpretazione responsabile:
- quali conclusioni si tengono (3-5)
- quali conclusioni NON sono supportate (3-5) e perché
4) implicazioni pratiche (3) con cautela.
5) Riepilogo finale (180-260 parole).`,
  thumbnail: ""
},
{
  id: "edu-res-019",
  title: "Astratto 'per astratto': crea 3 astratti (tecnica, generale, ultra breve)",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Genera astratti adattati a pubblico diverso, senza inventare risultati.",
  prompt: `Testo / carta: [PEGA QUI]
Disciplina: []
Audizioni: [tecnica / generale / comitato]

Creare 3 astratti:
A) Tecnico (150-250 parole) - metodo e risultati con precisione
B) Generale (120-180 parole) - meno gergo, più intuito
C) Ultra breve (50-80 parole) - essenza

Regole:
- No. Non inventare i dati; se manca un dato, contrassegnare [DATE NOT PRESS].
- Mantenere la consistenza: problema → metodo → risultati → coinvolgimento.
- No. Include 5 parole chiave finali per ogni astratto.`,
  thumbnail: ""
},
{
  id: "edu-res-020",
  title: "Sommario con 'leggi domande' (seminar): guida di discussione",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Sommario + guida alla domanda per condurre un seminario accademico.",
  prompt: `Testo: [PIGA QUI]

Consegna:
1) Riepilogo (250-400 parole).
2) 12 domande di discussione (facile da difficile):
- 4 della comprensione
- 4 di critiche metodologiche
- 4 delle implicazioni e dell'estensione
(3) 6 "punti caldi" (luoghi dove c'è spesso dibattito o confusione).
4) Una chiusura: il vostro giudizio equilibrato (120-180 parole) del valore del testo.`,
  thumbnail: ""
},

{
  id: "edu-res-021",
  title: "Riepilogo per 'nota di ricerca': idea + metodo + contributo in 1 pagina",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Convertire un documento in una nota di ricerca di una pagina pronta per il file personale.",
  prompt: `Carta / testo: [PEGA QUI]
Formato finale: 1 pagina (ma nel testo)

Voglio una nota di ricerca con sezioni:
- Riferimento (autore / anno / titolo se disponibile)
- Problema e motivazione
- Domanda / ipotesi
- Metodo / dati (molto specifico)
- Risultati chiave
- Contributo (perché conta)
- Limitazioni
- Idee proprie (come lo userei) + 3 appuntamenti per il mio lavoro (parafraso)

Vicino con:
- 5 parole chiave
- 3 documenti relativi alla ricerca (titoli sospesi).`,
  thumbnail: ""
},
{
  id: "edu-res-022",
  title: "Astratto 'anti-plagiarismo': parafrasi accademica pulita + conservazione del significato",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Parafrasi in modo accademico senza copiare, mantenendo precisione e sfumature.",
  prompt: `Testo: [PIGA QUI]
Lingua di uscita: [Inglese / Spagnolo]
Tono: accademico formale

Compito:
1) Sommarizzare in 250-350 parole senza frasi di copia.
2) Tenere:
- stessi concetti
- le stesse sfumature (condizioni, limiti, incertezza)
(3) Note:
- 8 termini tecnici da mantenere come (se applicabile)
- 6 posti dove c'è ambiguità nell'originale (e come hai risolto o conservato)

Vicino:
- 3 versioni alternative del primo paragrafo (stile diverso).`,
  thumbnail: ""
},
{
  id: "edu-res-023",
  title: "Riassunto per 'evidence matrix': trovare → prove → contesto → generalizzazione",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Matrix struttura di tipo prove-tipo per le decisioni basate su prove.",
  prompt: `Testo / carta: [PEGA QUI]
Decisione o questione pratica Mi interessa:

Creare una matrice di prove (tabella nel testo) con colonne:
- Trovare
- Prove (quali dati / risultato lo supporta)
- Contesto (popolazione / ambiente)
- Limitazioni
- Come generalizzabile (alto / medio / basso + perché)
- No. Quale coinvolgimento pratico (con cautela)

Include minimo 8 risultati.
Allora:
- 1 sommario esecutivo (180-260 parole) orientato alla decisione.
- 5 "sì" raccomandazioni basate su prove.`,
  thumbnail: ""
},
{
  id: "edu-res-024",
  title: "Riassunto dei multidocumenti: fondere 3-5 testi in una sintesi coerente",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Esso collega più fonti con accordi, conflitti e agenda futura.",
  prompt: `Pega 3-5 testi (separati da # #):
#
[TESTO 1]
#
[TEXT 2]
#
[TESTO 3]
(...)

Tema unificante: []

Consegna:
1) Sintesi integrata (500-900 parole):
- che problema condividono
- ciò che ogni testo fornisce
- dove completano
- dove contraddicono
2. Matrice di confronto del testo:
- tesi, metodo / prove, risultati, limiti
3) Consenso (3-6) e controversia (3-6)
4) Agenda della ricerca:
- 6 domande future
5. "Cosa cito":
- 10 proiettili di idee da citare (parafrasi), indicando da quale testo proviene.`,
  thumbnail: ""
},
{
  id: "edu-res-025",
  title: "Riassunto per la scrittura teorica del quadro: concetti → definizioni → relazioni",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Crea un quadro mini-teorico da un testo: definizioni e relazioni.",
  prompt: `Testo: [PIGA QUI]
Oggetto della mia ricerca: []

Crea:
(1) Sommario (200-300 parole).
2) nucleo concettuale:
- 10 concetti chiave con definizioni
- 15 relazioni tra concetti (A → B) con spiegazione 1 linea
3) Proposta di un quadro (250-400 parole):
- come organizzare un quadro teorico con questi concetti
- ordine raccomandato di presentazione
(4) Fori:
- 5 cose che mancano per il quadro da completare (che i testi da cercare).`,
  thumbnail: ""
},

{
  id: "edu-res-026",
  title: "Riepilogo 'per manifesto scientifico': proiettili, messaggio centrale, visuale suggerita",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Diventa un poster: chiaro, visivo e convincente.",
  prompt: `Carta / testo: [PEGA QUI]
Udienza: [Congresso generale / Tecnico nicchia]

Voglio:
1) Messaggio centrale (1 frase).
2) 6 sezioni di poster (titolo + 3-5 proiettili c / u):
- Sfondo, Obiettivo, Metodi, Risultati, Discussione, Takeaway
3) Visivi consigliati:
- 3 grafica / figure che metteresti e perché
4) "Pitch del corridoio" (90-140 parole)
5) 5 domande che dovrebbero affrontare il poster + risposte brevi.`,
  thumbnail: ""
},
{
  id: "edu-res-027",
  title: "Astratto per 'class point': versione didattica + esempi + esercizi",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Convertire un testo accademico in una nota di classe con esempi e pratica.",
  prompt: `Testo: [PIGA QUI]
Livello del corso: []
Durata della classe: [45 / 60 / 90 min]

Consegna:
1) Obiettivo strutturato:
- obiettivi di apprendimento (5)
- concetti chiave (10) con definizioni
- spiegazione della sezione (con esempi)
- analogie e avvisi (casi dove sono confusi)
2) 5 esempi sviluppati (dal più semplice al più complesso)
3) 8 esercizi (con soluzione breve)
4) 10 domande quiz (con risposte)`,
  thumbnail: ""
},
{
  id: "edu-res-028",
  title: "Riassunto con 'linea temporale delle idee': come l'argomento evolve sezione per sezione",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Seguire il flusso di testo come linea temporale per capire la struttura.",
  prompt: `Testo: [PIGA QUI]

Crea una linea temporale di idee:
- Lista di 10-18 "beats" in ordine:
- No. Beat #, sezione approssimativa, idea principale, perché importa

Allora:
- 5 "ponti" (frasi) che collegano un battito al successivo (parafraso)
- 3 posti in cui il testo potrebbe essere riordinato per essere più chiaro
- Riepilogo finale 200-280 parole dopo la timeline.`,
  thumbnail: ""
},
{
  id: "edu-res-029",
  title: "Riassunto «controllo di qualità»: rileva incongruenze e ambiguità",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Revisione di un testo accademico: incongruenze, definizioni sciolte e vuote.",
  prompt: `Testo: [PIGA QUI]

Fare un audit:
1) Riepilogo neutro (150-220 parole).
2. Inconsistenza (minimo 6):
- cita l'idea (parafraso) + perché è incoerente
(3) Ambiente (minimo 6):
- termine ambiguo o frase
- 2 possibili interpretazioni
- cosa pensi che l'intenzione dell'autore sia e perché (se può essere rinviato)
(4) Ampie definizioni (minimo 5):
- che il concetto ha bisogno di definizione operativa
- proposta di definizione migliore
5) Raccomandazioni specifiche per il miglioramento (8).`,
  thumbnail: ""
},
{
  id: "edu-res-030",
  title: "Riepilogo finale \"tutti in uno\": accademico + executive + studio + discussione",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Un pacchetto completo: riassunto accademico, esecutivo, note di studio e guida di discussione.",
  prompt: `Testo / carta: [PEGA QUI]

Consegnare un pacchetto con:
1) Riepilogo accademico (300-450 parole) con metodo e risultati.
2) Riepilogo esecutivo (120-180 parole) per non esperti.
3) Note di studio:
- 12 proiettili di concetti
- 10 definizioni
- 6 confusione tipica
4) Guida alle discussioni:
- 8 domande (facile da difficile)
- 3 recensioni metodologiche
- 3 idee di estensione / ricerca
(5) Vicino:
- 1 "one-liner" (1 frase) che cattura esattamente il contributo.`,
  thumbnail: ""
},

{
  id: "edu-res-031",
  title: "Sintesi della tesi / tesi: capitoli, contributi, metodo, risultati, limiti",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Riassunto di lavori lunghi (tesi) senza perdere la struttura per capitolo.",
  prompt: `Estratto di Pega o indice + sezioni chiave: [PEGA QUI]
Lunghezza prevista: [500-1200 parole]

Resi:
1) Riepilogo generale (200-300 parole).
2) Mappa del capitolo (se presente):
- Capitolo → obiettivo → trovare → come connettersi con tutto il
3) Contributi:
- 5 contributi (teoretico / metodologico / applicato)
(4) Metodo:
- diagramma testuale della pipeline
5) Risultati e prove:
- 6-10 proiettili di magnitudo / indicatori se c'è
(6) Limitazioni e lavori futuri:
- 6 limiti + 6 linee future

Vicino:
- 1 astratto "del congresso" (150-220 parole).`,
  thumbnail: ""
},
{
  id: "edu-res-032",
  title: "Riassunto con un approccio \"riplicativo\": passi, materiali, risorse e rischi",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Estrarre tutto il necessario per replicare lo studio o l'esperimento.",
  prompt: `Carta / testo: [PEGA QUI]
Obiettivo: replicare

Consegna:
1) Riepilogo (150-250 parole).
2) Elenco di controllo della replica:
- dati (fonte, dimensione, formato)
- variabili (definizione + misurazione)
- procedura passo dopo passo
- strumenti / softwars
- metriche di valutazione
3. "Unknowledge":
- 10 cose che non sono chiare e si deve chiedere / decidere
4) Rischi:
- 8 rischi per replicare (bia, confusione, dipendenze)
5) Proposta di risposta:
- che si cambierebbe (2-4 modifiche) per testare la robustezza.`,
  thumbnail: ""
},
{
  id: "edu-res-033",
  title: "Astratto in formato 'op-ed accademico': idea centrale con cautela e sfumature",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Trasformare un giornale in un pezzo arguativo per il pubblico generale senza perdere rigore.",
  prompt: `Testo: [PIGA QUI]
Udienza: pubblico informato
Tono: chiaro, senza gergo, ma rigoroso

Crea:
1) Astratto in formato op-ed (700-1000 parole):
- Uncino.
- problema
- cosa ha trovato il giornale
- cosa NON significa (limiti)
- implicazioni pratiche (non sovrastate)
- vicino a una domanda potente
2) 10 frasi "anti-fumo" per non sovrastare
3) 5 analogie accurate (con limiti) per spiegare il concetto`,
  thumbnail: ""
},
{
  id: "edu-res-034",
  title: "Riepilogo multiaudience: studente, insegnante, ricercatore, esecutivo",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Quattro versioni dello stesso contenuto adattate a diverse esigenze.",
  prompt: `Testo / carta: [PEGA QUI]

Crea 4 riassunti coerenti (non inventati):
A) Studente (200-300 parole, concentrarsi sull'apprendimento)
B) Professore (200-300 parole, focus sull'insegnamento e la valutazione)
C) Ricercatore (200-300 parole, focus su metodo, lacune, replica)
D) Esecutivo (120-180 parole, focus sul coinvolgimento e la decisione)

Allora:
- 12 termini chiave con definizione (singolo glossario per tutti)
- 6 "punti di confusione" e come chiarirli`,
  thumbnail: ""
},
{
  id: "edu-res-035",
  title: "Riepilogo per \"piano di lettura\": cosa leggere prima, cosa saltare, cosa segnare",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Creare strategia di lettura: dove prestare attenzione e come prendere appunti.",
  prompt: `Carta / testo: [PEGA QUI]
Tempo disponibile: [15 / 30 / 60 / 120 min]
Obiettivo: [comprendere / replicare / criticare / citare in tesi]

Consegna:
1) Riepilogo rapido (120-180 parole).
2) Piano di lettura del tempo:
- 15 min: quali sezioni leggere + cosa segnare
- 30 min:...
- 60 min:...
- 120 min...
3) Elenco di 12 domande guida durante la lettura.
4) Modello di nota: (problema, metodo, risultati, limiti, citazioni utili).`,
  thumbnail: ""
},

{
  id: "edu-res-036",
  title: "Riassunto per 'systematization': definisce le categorie e classifica i risultati",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Crea categorie analitiche e classifica i risultati del testo in essi.",
  prompt: `Testo: [PIGA QUI]
Obiettivo: systematise per una recensione o un report

1) Scopo 6-10 categorie analitiche pertinenti al testo.
2) Sommarizzare il testo in proiettili e assegnare ogni proiettile a una categoria.
3) Per ogni categoria:
- quello che dice il testo
- quali prove usi
- quale limitazione appare

Vicino:
- 5 "insights" (che appaiono quando si attraversano le categorie)
- 5 domande future derivanti dalla sistematizzazione.`,
  thumbnail: ""
},
{
  id: "edu-res-037",
  title: "Riassunto di \"carta con matematica\": intuito + formalismo + interpretazione",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Spiega le carte tecniche con le equazioni: cosa significano e cosa realmente implicano.",
  prompt: `Carta / estratto (include equazioni): [PENGA QUI]
Livello di lettore: [intermedio / avanzato]

Consegna:
1) Riepilogo concettuale (200-300 parole): quale problema e quale idea.
2) Equazioni chiave (fino a 5):
- digitare l'equazione (se presente)
- spiega ogni termine in lingua naturale
- No. Che vuoi dire?
- come viene utilizzato nell'argomento (risultato)
(3) Interpretazione:
- cosa significa il risultato nella pratica
- cosa NON significa (limiti)
4) 5 domande di autoesame con risposte.`,
  thumbnail: ""
},
{
  id: "edu-res-038",
  title: "Astratto 'con triad': cosa porta, chi serve, quando fallisce",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Riepilogo ultra utile: ingresso, pubblico e limiti operativi.",
  prompt: `Testo / carta: [PEGA QUI]

Resi:
(1) Sommario (200-280 parole).
2) Che cosa fornisce (5 proiettili):
- teorico / metodologico / applicato
3) Chi serve (4 profili) e come ognuno lo userebbe.
4) Quando fallisce:
- 6 condizioni in cui il risultato non si applica o si indebolisce
5) Cosa farei:
- 3 progetti di estensione / utilizzare idee.

Vicino:
- 1 frase "se ricordi solo una cosa"`,
  thumbnail: ""
},
{
  id: "edu-res-039",
  title: "Abstract oriented to 'exam question': genera 10 domande e chiavi",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Convertire un testo in materiale prezioso: domande, risposte e rubriche.",
  prompt: `Testo: [PIGA QUI]
Livello: [università / laurea]

Crea:
1) Riepilogo del testo (200-300 parole).
(2) 10 domande di recensione:
- 4 comprensione
- 3 applicazione / trasferimento
- 3 limitazioni critiche /
3) Modello risposte per ogni domanda (80-180 parole)
(4) breve titolo di qualificazione (criteri per domanda)

Vicino:
- 6 errori tipici degli studenti durante lo studio di questo testo.`,
  thumbnail: ""
},
{
  id: "edu-res-040",
  title: "Riassunto 'prove contro parere': fatti separati, inferenze e opinioni",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Livelli separati di affermazione per evitare di confondere i dati con l'interpretazione.",
  prompt: `Testo: [PIGA QUI]

Classifica e riassume in 3 strati:
1) FATTI (che cosa è osservato / detto con prove) - minimo 8 proiettili
2) INFERENZE (che finiscono di fatto) - minimo 8 proiettili
3) OPZIONI / INTERPRETAZIONI - minimo 6 proiettili

Per ogni proiettile indica:
- quale parte del testo lo supporta (sezione approssimata)
- quanto è forte (alto / medio / basso) e perché

Vicino:
- 1 sommario finale (180-240 parole) che mantiene la separazione chiara.`,
  thumbnail: ""
},

{
  id: "edu-res-041",
  title: "Riepilogo «per proposta»: utilizzare il documento per giustificare il progetto",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Convertire le prove del testo in argomenti per una proposta o una sovvenzione.",
  prompt: `Testo / carta: [PEGA QUI]
Il mio progetto / proposta: [DESCRIZIONE IN 3-6 LINEAS]

Consegna:
1) Riepilogo della carta (150-220 parole).
2) Come usarlo per giustificare la mia proposta:
- 5 argomenti (prove → coinvolgimento → perché il mio progetto è necessario)
3) Limitazioni quando si utilizza (3-5) ad essere onesti.
4) Paragrafo pronto a incollare in "giustificazione" (180-260 parole).
5) 5 frasi alternative (non ripetere lo stile).`,
  thumbnail: ""
},
{
  id: "edu-res-042",
  title: "Riassunto 'per la discussione dei risultati': si collega con la teoria e la letteratura",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Utile per la scrittura di discussione: implicazioni, meccanismi, confronto con la letteratura.",
  prompt: `Testo / carta: [PEGA QUI]
Il mio risultato o ipotesi: []

Consegna:
1) Riepilogo carta (180-240 parole).
2) Proporre meccanismi (3-6) e su quali prove si basano.
3) Come si collega con la teoria:
- 3 possibili quadri teorici o scuole (se non disponibili, proposte)
4) Come lo userei in discussione:
- 6 frasi "dibattito di tipo" (parafraso) che collegano la ricerca → teoria → limite.
5) 4 avvertimenti per non esagerare.`,
  thumbnail: ""
},
{
  id: "edu-res-043",
  title: "Astratto 'con lista di controllo PRISMA-like': quali rapporti e cosa non",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Verifica report (specialmente per recensioni / studi) per valutare la trasparenza.",
  prompt: `Testo / carta: [PEGA QUI]
Tipo: [recensione / studio]

Creare una lista di controllo "PRISMA-like" adattata:
- 20 articoli (domande di relazione: dati, metodo, selezione, analisi, bias)

Valuta quindi il testo:
- Per ogni punto: Sì / No / parziale
- Justify in 1 linea (parafraso)
- Note 8 cose critiche mancanti (se manca)

Vicino:
- Sintesi dell'impatto di queste carenze sulla fiducia del risultato.`,
  thumbnail: ""
},
{
  id: "edu-res-044",
  title: "Astratto per 'Note di Zettelksten': 8 chip atomici + collegamenti",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Trasforma un testo in chip atomici in entrata (Zettelkasten).",
  prompt: `Testo: [PIGA QUI]
Argomento / Zettelksten file: []

Crea 8 note atomiche:
Per ogni nota:
- Titolo breve
- Idea unica (80-140 parole)
- Breve esempio
- "Links" ad altre note (2-3 titoli consigliati)
- Tags (3-6)
- Domanda che si apre (per continuare a pensare)

Vicino:
- Una "nota indice" di 6-10 proiettili che collegano le 8 note.`,
  thumbnail: ""
},
{
  id: "edu-res-045",
  title: "Riepilogo «consistenza»: verificare se le conclusioni seguono i risultati",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Allineamento Evalúa: domanda → metodo → risultati → conclusione; rileva sovrastato.",
  prompt: `Testo / carta: [PEGA QUI]

Do:
1) Astratto di 180-240 parole.
(2) Allineamento:
- Domanda / ipotesi (che cosa è esattamente?)
- Metodo (puoi rispondere?)
- Risultati (che mostrano?)
- Conclusioni (che dicono?)

(3) Note 6 possibili sovrastanze:
- la dichiarazione
- perché non tenerlo completamente
- come riscrivere con cautela

Vicino:
- 5 raccomandazioni per migliorare l'allineamento in una versione rivista.`,
  thumbnail: ""
},

{
  id: "edu-res-046",
  title: "Riassunto in formato 'read foglio': preventivo, idea chiave, uso, critica, domande",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Formato del foglio di lettura completo per il tuo file accademico.",
  prompt: `Testo / carta: [PEGA QUI]
Riferimento (se lo avete): [autore, anno, titolo]

Restituisce una scheda:
- Riferimento
- Idea chiave (1-2 frasi)
- Sommario (200-300 parole)
- 5 concetti chiave (definizione + esempio)
- 3 date da usare (parafraso, con sezione)
- 3 critiche (metodologico o concettuale)
- 5 domande che ho lasciato
- Come lo collego al mio tema (120-180 parole)`,
  thumbnail: ""
},
{
  id: "edu-res-047",
  title: "Riepilogo 'per gli studenti': spiegazione chiara + analogie + esercizi",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Versione educativa: insegnare contenuti accademici senza perdere rigore.",
  prompt: `Testo: [PIGA QUI]
Livello studente: [secondario / università]
Tempo: [30 / 60 / 90 min]

Crea:
1) Riepilogo educativo (250-400 parole) con esempi.
2) 5 analogie accurate (e i loro limiti).
3) 6 confusione tipica (e come correggerli).
4) 8 esercizi (con soluzione breve) sul letto.
5) 10 domande quiz (con risposte).`,
  thumbnail: ""
},
{
  id: "edu-res-048",
  title: "Riepilogo dell'articolo con i dati: extra metrico, dimensioni degli effetti e rilevanza pratica",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Convertire i numeri in comprensione: grandezza, incertezza, reale importanza.",
  prompt: `Carta / estratto con dati: [PEGA QUI]

Consegna:
1) Riepilogo (180-260 parole).
(2) Estrazione quantitativa:
- metriche segnalate (elenco)
- dimensioni effetto (se presenti)
- significato / incertezza (se presente)
- confronti chiave (baseline vs metodo)
3) Interpretazione pratica:
- che cambia "in realtà" con quei numeri
- quando sarebbe irrilevante anche se significativo
4) 5 domande ai numeri "audit" (come misurano, pregiudizi, ecc.).`,
  thumbnail: ""
},
{
  id: "edu-res-049",
  title: "Riassunto 'con due voci': cosa direbbe un difensore contro un critico",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Genera due prospettive per vedere punti di forza e di debolezza senza pregiudizi.",
  prompt: `Testo / carta: [PEGA QUI]

Crea:
1) Riepilogo neutro (180-240 parole).
2) Difensore dei diritti umani:
- 6 proiettili dei migliori (novità, metodo, chiarezza, utilità)
- 1 paragrafo di difesa (120-180 parole)
3) Voce critica:
- 6 proiettili dei più deboli (foglie, limiti, sovrastamento)
- 1 paragrafo critico (120-180 parole)
(4) Riepilogo:
- quando sarebbe valido usare questo lavoro e con che tipo di pressione

Vicino:
- 5 raccomandazioni specifiche per migliorare la carta.`,
  thumbnail: ""
},
{
  id: "edu-res-050",
  title: "Pacchetto sommario completo: astratto + IMRAD + scheda + domande + curriculum",
  area: "Formazione",
  category: "Sintesi accademica",
  summary:
  "Un mega-output: varie forme di sommario + strumenti per studiare e discutere.",
  prompt: `Testo / carta: [PEGA QUI]
Livello: [università / laurea]
Obiettivo: [studio / recensione / tesi]

Consegna:
1) astratto tecnico (150-250 parole).
2) Riepilogo IMRAD (400-700 parole).
3) Leggi foglio (riferimento, chiave idea, uso, recensioni, domande).
4) Glossario di 15 termini (definizione + esempio).
5) 12 domande di discussione (con 6 "difficile").
6) Autoesame:
- 10 MCQ + 5 aperto
- risposte corrette
7) Curricula 7 giorni:
- per andare ogni giorno
- come valutare i progressi
- cosa fare se fallisco in X.`,
  thumbnail: ""
}];