// src/lib/prompts/text/edu-explicaciones-avanzadas.js

export const textPromptsEduExplicacionesAvanzadas = [
{
  id: "edu-adv-001",
  title: "Spiegazione avanzata degli 'strati': intuito → formalismo → pratica",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Si rompe un tema complesso in 3 strati: intuito, rigore e applicazione con esercizi.",
  prompt: `Oggetto: [CREAMS QUI]

Contesto:
- Livello degli studenti (università, master, professionale).
- Area (matematica, programmazione, economia, medicina, ecc.).
- Obiettivo (sostituire, risolvere problemi, rivedere i passaggi, applicare sul lavoro).
- Conoscenza precedente (elenco breve).
- Restrizioni (non notazione avanzata / sì notazione / con esempi reali).

Fornire una spiegazione in 3 strati:

CAPA 1 - Intuzione (per "realmente capire"):
- No. Spiega l'idea con 2 potenti analogie (diverso l'un l'altro).
- No. Descrive il "errore mentale" che rende le persone non capiscono.
- No. Dà un mini-story o un caso reale che lo rende memorabile.

CAPA 2 - Formalismo (rigor senza fumo):
- Definire concetti chiave (glossario di 8-12 termini).
- Spiega i presupposti e i limiti (che NON copre).
- No. Esso comprende 1 dimostrazione guidata o derivazione (passo per passo) o un argomento rigoroso equivalente a seconda della zona.

CAPA 3 - Pratica (trasferimento):
- 3 esempi risolti (facile → medio → difficile).
- 5 esercizi proposti (con tracce, non la soluzione).
- Lista di controllo per rilevare se lo capisco (10 elementi).

Vicino:
- 5 domande di esame (con criteri di valutazione).
- "Mental map" in pallottole ( gerarchia, massimo 20 linee).`,
  thumbnail: ""
},
{
  id: "edu-adv-002",
  title: "Tutor socratico avanzato: imparare guidato da domande (senza cucchiaio)",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Insegna un concetto per mezzo di domande laureate che forzano la ragione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]
Formato: [testo / programmazione / calcolo / caso studio]

Agisce come un tutor socratico.
Regole:
- No. Non dare la soluzione diretta all'inizio.
- Fai domande in scala: comprensione → inferenza → applicazione → critica.
- Quando lo studente "fails", dà un minimo di piombo e chiede di nuovo.

Struttura:
1) diagnosi rapida (5 domande) per rilevare lacune.
2) percorso di apprendimento (8-12 passi), ogni passo contiene:
- 1 questione
- risposta prevista (nascosto in parentesi quadrate alla fine)
- errore comune
- piombo
3) Mini-finale (problema integrato) con voce di valutazione (criteria).

Alla fine:
- Astratto in 12 proiettili del imparato (senza tecniche inutili).`,
  thumbnail: ""
},
{
  id: "edu-adv-003",
  title: "Spiegazione con 'principi primi': derivato tutto da assiomi",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Costruisce un tema delle basi: assioma, principi, conseguenze e limiti.",
  prompt: `Oggetto: [CREAMS QUI]
Campo: [fisica / finanza / ML / destra / ecc.]
Livello: [avanzato]

Consegna:
A) Principi fondamentali (3-7) come "leggi" dell'argomento.
B) Per ogni principio:
- No. Che ne dici?
- Perché è ragionevole?
- coinvolgimento immediato
- Contraexample o limite di caso
C) Derivation: utilizzare i principi per costruire:
- 2 teoremi principali / approfondimenti
- 2 strumenti pratici (metodo / procedure)
(D) implementazione avanzata:
- 2 problemi di stile di esame (solto passo dopo passo)
- 1 caso reale (con dati ipotetici) e la tua analisi

Vicino:
- "Dove si rompe" (5 limiti).
- Letteratura concettuale (3-6 idee / argomenti da studiare in seguito).`,
  thumbnail: ""
},
{
  id: "edu-adv-004",
  title: "Spiega come carta: astratto, metodo, risultati, discussione",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Struttura di carta accademica per comprendere rigorosamente un concetto.",
  prompt: `Oggetto: [CREAMS QUI]
Audizione: [ingegneria / economisti / medici / ecc.]

Scrivere la spiegazione come se fosse un mini-carta:
- Titolo
- Astratto (100-150 parole)
- Introduzione (problema e motivazione)
- Quadro teorico (definizioni + ipotesi)
- Metodo (procedure o derivazione)
- Risultati (esempio o implicazioni chiave)
- Discussione (limitazioni, interpretazioni)
- Conclusione (3 ingressi chiari)
- "Recommended reading" (senza link, solo temi / lavori)

Include:
- 1 figura descritta nel testo (cosa sarebbe il grafico / diagramma e come leggerlo).
- 2 domande di revisione (peer-review).`,
  thumbnail: ""
},
{
  id: "edu-adv-005",
  title: "Spiegazione avanzata con confronto modello (A vs B vs C)",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Confronta 2-3 approcci allo stesso tema: assunzioni, trade-off e quando usare ciascuno.",
  prompt: `Oggetto: [CREAMS QUI]
Modelli / approcci per confrontare: [A], [B], [C] (se non lo sapete, proponete loro voi)

Consegna:
1) Tavola concettuale (senza formato tabella, in proiettili) con:
- Obiettivo di ogni approccio
- Presumo
- Benefici
- Svantaggi
- No. Quando fallisce
2) Esempio singolo (stesso problema) risolto con ogni approccio.
3. "Guida della precisione" sotto forma di un albero:
- No. Se hai X → utilizzare A
- No. Se avete Y → utilizzare B
- Etc.
4) 10 domande di tipo test che confondono A e B (e come distinguerle).

Vicino:
- Errori principianti (8) e errori di esperti (5).`,
  thumbnail: ""
},
{
  id: "edu-adv-006",
  title: "Spiegabile + dimostrazione guidata: test passo-passo (alto livello)",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Prove o argomentazioni formali guidate dalla comprensione dei checkpoint.",
  prompt: `Dichiara il risultato di dimostrare / giustificare: [SCREAMS QUI]
Campo: [matematica / CS / economia / fisica / filosofia]

Crea una dimostrazione guidata:
A) Intrusione precedente (perché dovrebbe essere vero).
(B) Preparazione:
- Definizioni richieste
- slogan precedenti (1-3)
- Notazione (chiaro)
C) Dimostrazione in gradini numerati con punti di controllo:
- Passo I: cosa facciamo?
- Perché lo facciamo?
- No. Cosa potrebbe andare storto?
- Mini-check: "Se capisci questo, rispondi X"
(D) Interpretazione:
- No. Cosa significa il risultato nel mondo reale
- 2 corollari utili
(E) Specchio esercizio:
- Pianifica un risultato simile e guida come dimostrarlo (senza risolverlo).`,
  thumbnail: ""
},
{
  id: "edu-adv-007",
  title: "Spiegazione come ingegneria: specificazione → casi confine → verifica",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Ideale per materie tecniche: definisce, testa contro casi limitati e validi.",
  prompt: `Tema / strumento: [SCREAMS QUI]
Uso del contesto: [produzione / accademia / ricerca]

Struttura della spiegazione come segue:
1) Specificazione (cosa fa EXACTLY e cosa non).
2) Invarianti / garanzie (3-7).
3) Bordo (minimo 10) con:
- Entrata / condizione
- Comportamento previsto
- Perché è importante?
4) Test di verifica:
- 6 test mentali
- 6 prove pratiche
(5) Risoluzione dei problemi:
- 8 guasti comuni
- diagnosi
- soluzione

Vicino:
- Lista di controllo per l'implementazione sicura / applicazione (12 articoli).`,
  thumbnail: ""
},
{
  id: "edu-adv-008",
  title: "Spiegazione con ' mappa della dipendenza': cosa imparare prima e perché",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Costruisce una mappa di orgoglio e un percorso di studio ottimale per un soggetto difficile.",
  prompt: `Oggetto: [CREAMS QUI]
Tempo disponibile: [X ore / settimana]
Obiettivo: [recensione / progetto / lavoro]

Consegna:
(A) Prerequisiti:
- Elenco dei concetti minimi (10-20)
- Quanto sono critici (alto / medio / basso)
B) Mappa delle dipendenze (in proiettili con indentazione):
- Concetto di radice
- sub-item
- sub-item
C) percorso di studio (14 giorni o 4 settimane):
- Giorno / settimana: obiettivo, lettura / pratica, mini-valutazione
(D) Valutazioni:
- 2 minim- 10 test di domanda (con risposte)
- 1 progetto integrativo (intestazione + titolo)

Vicino:
- Segni che siete pronti (10).`,
  thumbnail: ""
},
{
  id: "edu-adv-009",
  title: "Spiegazione avanzata con più analogie (e limiti di ogni analogia)",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Spiega con analogie, ma spiega anche quando non riescono a confondersi.",
  prompt: `Oggetto: [CREAMS QUI]
Audizione: [tecnico / non tecnico / misto]

Crea:
1) Spiegazione di base (chiaro e rigoroso).
2) 4 analogie da diversi domini (ad esempio cucina, musica, traffico, biologia).
3) Per ogni analogia:
- No. Che mappa a cosa (correspondenze)
- No. Cosa ti aiuta a capire
- No. Dove si rompe (limite di caso)
4) Mini-test:
- 6 domande che puoi rispondere solo se hai capito e non sei rimasto nell'analogia.

Vicino:
- No. Un'analogia "anti-analogia": un esempio che mostra il limite.`,
  thumbnail: ""
},
{
  id: "edu-adv-010",
  title: "Spiegazione con errori: imparare da controesempi e guasti tipici",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Egli insegna alto livello mostrando i fallimenti comuni e come diagnosticarli.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [avanzato]

Genera:
A) 12 errori tipici (precedente → intermedio → avanzato).
B) Per ogni errore:
- Sintomi (come sembra)
- Causa concettuale
- Esempio minimo che lo produce
- Come correggerlo (procedure)
C) 3 controcampioni classici (casi in cui "intuizione" fallisce).
D) 2 problemi intrappolano, con una soluzione spiegata e "perché questo è barare".

Vicino:
- Lista di controllo mentale di 10 domande per evitare quegli errori.`,
  thumbnail: ""
},

{
  id: "edu-adv-011",
  title: "Spiegazione avanzata per presentare in classe: script + diapositive",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Preparare una classe avanzata: narrativa, ardesia, esercizi e ritmo.",
  prompt: `Oggetto: [CREAMS QUI]
Durata: [45 / 60 / 90 minuti]
Livello: [avanzato]

Consegna:
1) Obiettivi di apprendimento (5-8).
2) Struttura da minuto a minuto (linea temporale).
3) Scrittura del Maestro (cosa direbbe) con:
- 3 momenti di "chiedere al gruppo"
- 2 mini dimostrazioni
- 1 sospensione della sintesi
4) Contenuto dello scorrevole:
- Titolo slide
- 3-5 proiettili per diapositive
- 1 figura suggerita
(5) Pratica:
- 8 esercizi (facile da difficile) + risposte brevi
6) Valutazione finale (10 domande) + sezione.

Vicino:
- Come adattare la classe se il gruppo è perso (piano B).`,
  thumbnail: ""
},
{
  id: "edu-adv-012",
  title: "Spiegazione per autodidatta: da zero a esperto con checkpoint",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Progetta l'apprendimento autonomo: teoria minima, pratica intensa, metriche e feedback.",
  prompt: `Oggetto: [CREAMS QUI]
Il vostro obiettivo finale: [risultati concreti]
Tempo: [ore / settimana]
Livello attuale: [rookie / intermedio]

Crea un piano di 30 giorni:
- Settimana 1: fondazioni (che misurare e perché)
- Settimana 2: problemi tipici
- Settimana 3: casi reali
- Settimana 4: progetto finale

Per ogni giorno:
- Obiettivo
- Concetti
- Esercizio pratico
- Mini-test (3 domande) con risposte
- Segnale di progresso (concrete metrica)

Include:
- Lista di 20 problemi di stile "drill"
- Progetto finale con titolo dettagliato (criteri e punteggi).`,
  thumbnail: ""
},
{
  id: "edu-adv-013",
  title: "Spiegazione avanzata con 'modello mentale': disegna l'idea nella tua testa",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Costruisce un modello mentale esplicito con pezzi, frecce, dinamiche e previsioni.",
  prompt: `Oggetto: [CREAMS QUI]

Costruisce un modello mentale:
1) Componenti (8-12 pezzi).
2) Relazioni (frecce): cosa provoca cosa.
3) variabili chiave (che cosa cambia e che cosa viene mantenuto).
4) Previsioni del modello:
- No. Se si sale X, basso Y (minimo 10 previsioni).
5) Casi in cui il modello non riesce (5).
6) Come "simolare" mentalmente un caso (passo per passo).
7) 3 esercizi per praticare il modello (con soluzione).

Vicino:
- "Le regole di tasca" (10 euristica).`,
  thumbnail: ""
},
{
  id: "edu-adv-014",
  title: "Spiegazione sotto forma di dibattito: tesi, antitesi e sintesi",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Esplora un argomento complesso con argomenti opposti e una sintesi utile.",
  prompt: `Oggetto: [CREAMS QUI]
Domanda dell'argomento: [SCREAMS QUI]

Crea un dibattito strutturato:
A) Tesi (Una posizione): 5 argomenti forti + prove / ragionamento.
B) Antitesi (posizione B): 5 argomenti forti + prove / ragionamento.
C) Rifutazioni incrociate (A refuta B e B refuta A) con 6 punti per lato.
D) Sintesi: quando A ha ragione, quando B ha ragione, e come decidere in pratica.

Include:
- 8 domande per moderare il dibattito.
- Conclusione pratica in 7 proiettili.`,
  thumbnail: ""
},
{
  id: "edu-adv-015",
  title: "Spiegazione con 'caso studio': dati → ipotesi → decisione",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Impara un concetto applicandolo a un caso realistico con dati ipotetici.",
  prompt: `Oggetto: [CREAMS QUI]
Industria / contesto: [CREAMS QUI]

Costruisci uno studio di caso:
1) Contesto e obiettivo.
2) Dati (inventati ma plausibili): 10-20 variabili.
3) Domande di orientamento (10).
(4) Analisi graduale dell'argomento.
5) 3 decisioni possibili e di scambio.
6) Raccomandazione finale con giustificazione.

Include:
- "Quale informazione sarebbe scomparsa" (8 articoli).
- 5 errori che un analista farebbe qui.`,
  thumbnail: ""
},

{
  id: "edu-adv-016",
  title: "Spiegazione avanzata per interviste tecniche / esami orali",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Fornisce risposte di alto livello: chiarezza, struttura, rigore ed esempi.",
  prompt: `Oggetto: [CREAMS QUI]
Tipo di valutazione: [intervista tecnica / esame orale / difesa della tesi]

Consegna:
1) Risposta ideale di 2 minuti (struttura: definizione → intuito → esempio → limite).
2) Risposta ideale di 8 minuti (deeper con derivazione).
3) 12 domande difficili che potrebbero essere poste.
4) Per ogni domanda:
- risposta modello
- errore comune
- "segno di maturità" (ciò che un esperto menziona)

Include:
- 5 brevi analogie che puoi usare se l'intervistatore non capisce.`,
  thumbnail: ""
},
{
  id: "edu-adv-017",
  title: "Spiegazione avanzata con risolto 'catena degli esercizi di ragionamento '-stile",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Valuta i problemi mostrando decisioni, alternative e verifica.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 3 problemi (facile / medio / difficile) e li riassume come segue:
- Pensare al problema (cosa chiedi davvero)
- Dati e variabili
- Possibili strategie (2-3) e perché si sceglie una
- Soluzione passo dopo passo
- Verifica (come si verifica che va bene)
- "Se cambi X, cosa succede" (sensibilità)

Vicino con:
- 8 esercizi aggiuntivi con tracce
- 10 errori quando li risolve e come evitarli`,
  thumbnail: ""
},
{
  id: "edu-adv-018",
  title: "Spiegazione con 'costruzione dall'esempio': generalizza alla teoria",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Comincia con esempi concreti e deriva la teoria generale e i suoi limiti.",
  prompt: `Oggetto: [CREAMS QUI]

Struttura:
1) 3 esempi specifici (molto diversi).
2) Per ogni esempio:
- quale modello appare
- quali ordini variabili
(3) Generale:
- formula il "rulo" o la teoria
- definisce le condizioni
(4) Contraexample:
- caso in cui fallisce
5. Attuazione:
- 2 nuovi problemi risolti

Vicino:
- "Regole di decisione" (8 proiettili) e "alerts" (5).`,
  thumbnail: ""
},
{
  id: "edu-adv-019",
  title: "Spiegazione avanzata 'black box to white box': come funziona dentro",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Si muove dall'uso pratico alla comprensione interna: componenti, flussi e guasti.",
  prompt: `Tema / strumento: [SCREAMS QUI]

Consegna:
A) scatola nera:
- No. Ciò che entra, ciò che esce, che ottimizza (se applicato)
- 5 esempi di utilizzo corretto
(B) scatola bianca:
- Componenti interni (8-12)
- Flusso passo dopo passo (come descritto)
- Parametri e loro effetto
(C) Non riuscita e diagnosticata:
- 10 guasti tipici
- segni
- casi domestici
- soluzione
(D) Ampliamento:
- 6 domande avanzate con risposte ai modelli

Vicino:
- Elenco di buona pratica (12).`,
  thumbnail: ""
},
{
  id: "edu-adv-020",
  title: "Spiegazione avanzata per 'trasferire': applica quello che hai imparato a un nuovo dominio",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Insegna il concetto e poi lo costringe ad essere applicato al di fuori del suo contesto tipico.",
  prompt: `Oggetto: [CREAMS QUI]
Dominio tipico: [A]
Nuovo dominio: [B] (scegliere uno diverso: medicina, economia, sport, arte, ecc.)

Consegna:
1) Spiega l'argomento nel dominio A (rigorosamente).
2) identifica il suo "core trasferibile" (5-8 principi).
3) Repose l'argomento nel dominio B:
- mappatura delle variabili
- adeguamenti delle ipotesi
4) Risolvere 2 casi in dominio B (passo per passo).
5) 6 esercizi di trasferimento (stato + traccia).

Vicino:
- Lista di trasferimento "trappole" (8) e come evitarle.`,
  thumbnail: ""
},

{
  id: "edu-adv-021",
  title: "Spiegazione avanzata 'con storia': narrazione da ricordare (senza perdere rigore)",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Esso definisce il concetto di storia (problema, tensione, scoperta) con il formalismo integrato.",
  prompt: `Oggetto: [CREAMS QUI]
Contesto storico o fittizio: [scegliere: laboratorio, azienda, guerra, spedizione, startup, ospedale]
Tono: [serioso / epico / vicino]

Crea una spiegazione narrativa:
- Atto 1: problema reale (perché conta)
- Atto 2: tentativo fallito (errore comune)
- Atto 3: Insight (formalismo e definizione)
- Atto 4: attuazione (esempio risolto)
- Atto 5: limite e lezione

Include:
- Glossario (10 termini)
- 5 domande di comprensione
- 5 esercizi di applicazione con tracce`,
  thumbnail: ""
},
{
  id: "edu-adv-022",
  title: "Spiegazione avanzata 'con simulazione mentale': prevede i risultati",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Imparare a prevedere: cambiare variabili e prognostici; quindi controllare con le regole.",
  prompt: `Oggetto: [CREAMS QUI]

Consegna:
1) Modello semplificato (variabili, relazioni).
2) 12 scenari "e se...?"
- cambia 1 variabile alla volta
- poi cambia 2 variabili combinate (interazione)
3) Per ogni scenario:
- Previsione ragionata
- spiegazione (quale regola si applica)
4) 3 scenari di sorpresa ("l'intuizione fallisce") e perché.

Vicino:
- 10 domande se questo, allora che 'per autovalutazione.`,
  thumbnail: ""
},
{
  id: "edu-adv-023",
  title: "Spiegazione avanzata con 'notazione minima': rigore con simboli necessari",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Utilizzare solo la notazione necessaria; definire tutto ed evitare simboli inutili.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [avanzato]
Restrizione: "Notazione minima"

Consegna:
- Definire la notazione (5-10 simboli massimi).
- No. Spiega chiaramente il concetto che usa quella notazione.
- 2 brevi derivazioni (o argomenti), completamente spiegato.
- 3 esempi risolti.
- Sei esercizi.

Vicino:
- Elenco di 8 errori di notazione che creano confusione.`,
  thumbnail: ""
},
{
  id: "edu-adv-024",
  title: "Spiegazione avanzata 'a programma': dal concetto all'algoritmo",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Converte la teoria in passi algoritmici: pseudocodice, complessità e test.",
  prompt: `Concetto:
Lingua di destinazione: [Python / JS / Java / ecc.]

Consegna:
1) spiegazione concettuale (cosa, perché).
2) Specifica: ingressi / uscite, assunzioni.
3) Algoritmo:
- pseudo-codice
- analisi della complessità
- casi
4) implementazione della guida (codice example se applicabile).
5) Test:
- 8 prove di unità suggerite
- 5 test di stress

Vicino:
- 6 errori di implementazione e come rilevarli.`,
  thumbnail: ""
},
{
  id: "edu-adv-025",
  title: "Spiegazione avanzata «per la ricerca»: domande aperte e limiti",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Insegna e poi si collega con i confini: confini, dispute, ricerca.",
  prompt: `Oggetto: [CREAMS QUI]

Consegna:
A) Spiegazione rigorosa dello stato "standard" dell'argomento.
B) Limitazioni (tecniche, concettuali, empiriche).
C) Controversie o discussioni (3-6) con:
- posizione A
- posizione B
- prove
D) Domande aperte (8-12) ancora sotto indagine.
E) Proposta di un mini-progetto (1-2 settimane) per esplorare una domanda.

Vicino:
- Come valutare i documenti di argomento (12-point checklist).`,
  thumbnail: ""
},

{
  id: "edu-adv-026",
  title: "Spiegazione avanzata «con voce»: come valutare le soluzioni degli studenti",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Crea criteri di valutazione ed esempi di buone / cattive risposte.",
  prompt: `Oggetto: [CREAMS QUI]
Tipo di attività: [problema / test / progetto / presentazione]

Consegna:
1) Compiti (ovviamente, non ambigui).
2. Denominazione:
- criteri (6-10)
- livelli (ottimo / buono / regolare / cattivo)
- descrittori specifici
3) Esempi:
- 1 risposta eccellente (modello)
- 1 risposta media (con guasto)
- 1 risposta negativa (con guasti)
4) Tipo Feedback:
- 10 commenti riutilizzabili (costruttivi)

Vicino:
- 8 errori per penalizzare sì o sì e perché.`,
  thumbnail: ""
},
{
  id: "edu-adv-027",
  title: "Spiegazione avanzata 'per memoria': mnemotecnia + struttura",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Crea tecniche per ricordare problemi complessi: schizzi, storie, palazzo mentale.",
  prompt: `Oggetto: [CREAMS QUI]

Consegna:
1) Copertina: dividere il tema in 6-10 "blocchi".
2) Mnemotecnia:
- frase acronimo o promemoria (senza cringe)
- breve storia che codifica concetti
3) Palazzo mentale:
- 8-12 "stazioni" con oggetti simbolici
4) Flashcards:
- 20 Q / A avanzato
5) Prove:
- mini-esame di 15 domande

Vicino:
- Ampio piano di revisione di 14 giorni.`,
  thumbnail: ""
},
{
  id: "edu-adv-028",
  title: "Spiegazione 'con display': descrive 3 diagrammi essenziali",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Anche se non disegna, definisce diagrammi chiave: assi, variabili, lettura e interpretazione.",
  prompt: `Oggetto: [CREAMS QUI]

Consegna:
- 3 diagrammi / cifre chiave (esattamente li descrivono):
1) Qual è il campione (assi / elementi)
2) Come leggere
3) Che intuizione dà
4) Misinterpretazione
- Poi spiega il soggetto facendo riferimento a quei diagrammi come ancoraggi.
- 2 esempi risolti utilizzando ogni diagramma.
- 6 esercizi in cui lo studente sceglie il diagramma corretto.

Vicino:
- "Guida alle figure di lettura" (10 regole).`,
  thumbnail: ""
},
{
  id: "edu-adv-029",
  title: "Spiegazione avanzata 'tipo di isolamento': problema → diagnosi → raccomandazione",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Si applica un concetto a un problema pratico con lo stile di consulenza (MECE, ipotesi).",
  prompt: `Oggetto: [CREAMS QUI]
Problema pratico: [CREAMS QUI]
Contesto: [azienda / scuola / laboratorio / ecc.]

Consegna:
1) Chiarificazione del problema (problemi MEC).
2) Ipotesi (3-5) e quali dati convalidano ciascuno.
(3) Quadro del tema applicato al problema (passo per passo).
4) Diagnosi con dati ipotetici.
5) Raccomandazioni (prioritizzate) + rischi + piano di attuazione.
6) Successo (6-10 KPI).

Vicino:
- "Cosa farei se mi sbagliassi" (piano di emergenza).`,
  thumbnail: ""
},
{
  id: "edu-adv-030",
  title: "Spiegazione \"duale\" avanzata: per matematici e praticanti",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Due spiegazioni parallele: una formale e una applicata, collegate da mappatura.",
  prompt: `Oggetto: [CREAMS QUI]

Due versioni sono consegnate:
A) Versione formale:
- definizioni
- teorema / risultato
- breve derivazione o dimostrazione
- 2 esercizi formali
(B) Versione applicata:
- intuito
- regole d'uso
- 3 casi reali
- controllo da applicare

Allora:
- Mappa: per ogni elemento formale, qual è la sua interpretazione pratica (10 coppie).

Vicino:
- 10 domande di esame congiunto (formale + applicata).`,
  thumbnail: ""
},

{
  id: "edu-adv-031",
  title: "Spiegazione avanzata 'con trappole' (stile olissido / esame difficile)",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Formazione ad alta difficoltà con problemi di trappola, strategie e verifica.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Consegna:
- 6 problemi intrappolano (progressivo).
- Per ogni problema:
- Perché sta barando?
- strategia corretta
- soluzione passo dopo passo
- verifica
- 10 euristiche per rilevare trappole.
- 8 esercizi extra (nessuna soluzione) con tracce.

Vicino:
- Piano di pratica (7 sessioni) per padroneggiare queste trappole.`,
  thumbnail: ""
},
{
  id: "edu-adv-032",
  title: "Spiegazione avanzata 'con domande di follow-up': stile insegnante rigoroso",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Esplorare e quindi premere con richieste; ideale per consolidare il dominio.",
  prompt: `Oggetto: [CREAMS QUI]

1) Spiega l'argomento (rigorosamente, senza gergo in eccesso).
2) Allora faccia 15 domande dure:
- E se...?
- "in quali condizioni..."
- E se la presunta...?
- "rispetto a..."

Per ogni domanda:
- risposta modello (concisa, precisa)
- errore tipico
- come scopro se ho capito

Vicino:
- 12 proiettili di "segni domini" dell'argomento.`,
  thumbnail: ""
},
{
  id: "edu-adv-033",
  title: "Spiegazione avanzata: costruire un 'scheat foglio' di una pagina",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Riepilogo ultra denso ma comprensibile: formule / idee, casi, limiti e passi.",
  prompt: `Oggetto: [CREAMS QUI]

Creare un foglio di scacchi di 1 pagina (in testo):
- Definizioni essenziali (10)
- Formula / leggi / regole (se applicabili) con interpretazione
- Procedura passo-passo (elenco di controllo)
- Tipici casi (6)
- Bordo (6)
- Errori comuni (10)
- 8 domande flash con risposte
- 3% - esempi risolti

Regola:
- No. Tutto deve adattarsi in formato compatto, stile appuntito.`,
  thumbnail: ""
},
{
  id: "edu-adv-034",
  title: "Spiegazione avanzata per 'insegnare gli altri': lo studente diventa insegnante",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Creare materiale per lo studente per spiegare il tema: script, esempi e domande.",
  prompt: `Oggetto: [CREAMS QUI]

Consegnare un kit per insegnare:
1) Spiegazione di 5 minuti (scritto).
2) spiegazione di 20 minuti (struttura + punti).
3) 3 analogie con limiti.
4) 3 dimostrazioni o esempi su ardesia (passo per passo).
5) 12 domande per valutare la comprensione (con risposte).
6) 6 esercizi di pratica (con indizi).

Vicino:
- Errori nell'insegnamento di questo tema (8) e come evitarli.`,
  thumbnail: ""
},
{
  id: "edu-adv-035",
  title: "Spiegazione avanzata con 'metacognition': come pensare al soggetto",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Non solo spiega il soggetto: insegna il tipo di pensiero che richiede.",
  prompt: `Oggetto: [CREAMS QUI]

Consegna:
A) Che tipo di pensiero richiede:
- matematico, causale, probabilistico, sistemico, clinico, ecc.
B) 10 domande metacognitive per risolvere i problemi del soggetto.
(C) Strategie:
- come iniziare
- come verificare
- come rilevare la supersemplificazione
D) 3 problemi risolti evidenziando il pensiero (non solo passi).
E) 6 esercizi con "che cosa pensa di praticare".

Vicino:
- Elenco di controllo mentale per quando si rimane bloccati (12).`,
  thumbnail: ""
},

{
  id: "edu-adv-036",
  title: "Spiegazione avanzata 'da intuito sbagliato a correggere l'intuizione '",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Corregge intuizioni sbagliate con esempi, controesempi e ricostruzione mentale.",
  prompt: `Oggetto: [CREAMS QUI]

Struttura:
1) Un errore tipico (come la maggior parte pensano).
2) Perché sembra ragionevole (empatia).
3) Controcampione minimo (si rompe).
4) Ricostruzione dell'intuizione corretta:
- nuova metafora
- nuova regola
- nuova abitudine mentale
5) 3 esempi risolti mostrando la nuova abitudine.
6) 8 esercizi da praticare.

Vicino:
- 10 segni che hai restituito all'intuizione sbagliata e come tornare.`,
  thumbnail: ""
},
{
  id: "edu-adv-037",
  title: "Spiegazione avanzata con 'domanda di assunzioni': cosa si assume senza vedere",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Rende esplicite ipotesi nascoste e come cambiano il risultato se sono alterate.",
  prompt: `Oggetto: [CREAMS QUI]

Consegna:
1) Elenco delle ipotesi (12-20).
2) Classificazione: essenziale vs auspicabile.
3) Per 6 casi:
- e se fosse stuprata
- esempio di fallimento
- correzione o alternativa
4) 2 problemi risolti, uno con il cosiddetto "bello" e uno con il cosiddetto "rotto".
5) Guida alla decisione: quale versione da utilizzare in base alla situazione.

Vicino:
- Elenco delle ipotesi prima di applicare il soggetto nel mondo reale.`,
  thumbnail: ""
},
{
  id: "edu-adv-038",
  title: "Tipo di spiegazione avanzata 'libro': capitolo completo con sezioni",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Capitolo stile libro: teoria, esempi, esercizi, note e riepilogo.",
  prompt: `Oggetto: [CREAMS QUI]
Lunghezza obiettivo: [1200-2500 parole]

Scrivi un "chapter" con:
1) Introduzione stimolante (con caso reale).
2) Concetti e definizioni (glossario).
(3) Sviluppo formale (rigour).
4) Esempi risolti (3).
5) Note e avvisi (limiti e limiti dei casi).
6) Esercizi (10) con tracce.
7) Riepilogo del capitolo (15 proiettili).
8) "Per andare oltre" (segue argomenti).

Regola:
- Mantenere coerenza pedagogica e progressione.`,
  thumbnail: ""
},
{
  id: "edu-adv-039",
  title: "Avanzato 'con display mentale di processo': flusso dinamico",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Per i processi: spiega come scorrere con stati, transizioni e condizioni.",
  prompt: `Oggetto/processo: [GRIDA QUI]

Consegna:
- Stati (6-12).
- Transizioni: stato → azione → nuovo stato.
- Variabili che influiscono sulle transizioni.
- 3 percorsi a flusso completo (casi diversi).
- 5 casi di confine (che è rotto e perché).
- 2 esercizi: "Dati questo stato e i dati, dove vai?"

Vicino:
- Elenco di controllo per errori di debug (12).`,
  thumbnail: ""
},
{
  id: "edu-adv-040",
  title: "Spiegazione avanzata con 'micro-derivazioni': mini test lungo",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Spiega con piccoli argomenti formali inseriti, per tenere il rigore senza abrupting.",
  prompt: `Oggetto: [CREAMS QUI]

Scrivere una spiegazione dove:
- Ogni sezione comprende una mini-derivation / test (4-10 linee) che giustifica il punto.
- Mantenere continuità: intuito → mini-test → esempio.

Struttura:
1) Idea centrale
2) Strumento 1 (mini-test + esempio)
3) Strumento 2 (mini-test + esempio)
4) Strumento 3 (mini-test + esempio)
(5) Integrazione: caso reale (risolto)
6) Limiti: quando non usare

Vicino:
- 8 esercizi con tracce
- 10 domande flash con risposte`,
  thumbnail: ""
},

{
  id: "edu-adv-041",
  title: "Spiegazione avanzata: creare una banca di domande tipo esame (con soluzioni)",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Genera domande difficili e le loro soluzioni, con criteri di qualificazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Formato: [opzione multipla / sviluppo / problemi]

Genera:
- 20 domande (mix: 8 concettuale, 8 calcolo / applicazione, 4 recensione / prova).
- Soluzione completa per ciascuno.
- Per ogni domanda:
- quello che valuta
- errore comune
- punteggio e criteri

Vicino:
- "Coverage map": quali sottotemi hai toccato e quali sono mancanti.`,
  thumbnail: ""
},
{
  id: "edu-adv-042",
  title: "Spiegazione \"laboratorio\" avanzata: ipotesi, esperimento, analisi",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Trasformare il soggetto in un laboratorio: cosa misurare, come provare e come interpretare.",
  prompt: `Oggetto: [CREAMS QUI]

Progetta un laboratorio:
1) Domanda di ricerca.
2) Ipotesi (3).
3) Variabili: dipendente, indipendente, controllo.
4) Procedura (passi).
5) Dati simulati (piccola tabella nel testo: 12-20 righe).
6) Analisi e interpretazione.
7) Minacce alla validità (8).

Vicino:
- 10 relazioni e sezione valutazione.`,
  thumbnail: ""
},
{
  id: "edu-adv-043",
  title: "Spiegazione avanzata con 'differenziazione': versione per 3 profili studenteschi",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Stesso tema adattato a 3 stili: teorico, pratico, visivo / verbale.",
  prompt: `Oggetto: [CREAMS QUI]

Creare 3 versioni:
A) Profilo teorico: definizioni, derivazioni, precisione.
(B) Profilo pratico: regole d'uso, liste di controllo, casi reali.
C) Profilo visivo / verbale: diagrammi descritti, analogie, metafore con limiti.

Per ogni versione:
- Spiegazione (500-900 parole)
- 2 esempi risolti
- 6 esercizi con tracce

Vicino:
- Raccomanda quale profilo è mio con 7 domande diagnostiche.`,
  thumbnail: ""
},
{
  id: "edu-adv-044",
  title: "Spiegazione avanzata 'con sintesi': riassume il tema in 5 rappresentazioni",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Trasforma il tema in: definizione, analogia, formula / procedura, esempio, contraexample.",
  prompt: `Oggetto: [CREAMS QUI]

Crea 5 rappresentazioni:
1) Definizione rigorosa (2-4 linee)
2) Analogo (e il suo limite)
3) Procedura o formula (con interpretazione)
4) Esempio di lavoro (passo per passo)
5) Contraexample (dove l'intuizione fallisce)

Allora:
- Collegare il 5 con una "mappa" a 12 bobine.
- 10 domande flash con risposte.`,
  thumbnail: ""
},
{
  id: "edu-adv-045",
  title: "Spiegazione avanzata 'di padrone': 80 / 20 + approfondimento strategico",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Si identifica il 20% che dà l'80% del dominio e poi come approfondire senza perdere.",
  prompt: `Oggetto: [CREAMS QUI]

Consegna:
1) 80 / 20: 6-10 idee che spiegano 80% (perché).
2) I 10 errori che ti trattengono di più.
(3) Pratica deliberata:
- 12 esercizi chiave (con soluzioni)
- ordine raccomandato
(4) Finanziamento:
- 6 sottotemi avanzati
- per studiarli
- come sapere che le domine

Vicino:
- Piano di 2 settimane (giorno-giorno) con metriche di progresso.`,
  thumbnail: ""
},

{
  id: "edu-adv-046",
  title: "Spiegazione avanzata 'con traduzione gergo': dizionario esperto → chiaro",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Convertire gergo tecnico in chiare spiegazioni senza perdere precisione.",
  prompt: `Oggetto: [CREAMS QUI]
Elenco dei termini tecnici (se avete): [PEGAR]

Consegna:
- Dizionario di 25 termini:
- definizione tecnica (1-2 linee)
- traduzione in lingua chiara (1-2 linee)
- breve esempio
- errore comune quando si utilizza il termine
- Allora una spiegazione completa (700-1200 parole) usando:
- 70% lingua chiara
- 30% tecnico (solo se fornito)

Vicino:
- 10 domande per assicurarmi di aver capito il gergo senza memorizzarlo.`,
  thumbnail: ""
},
{
  id: "edu-adv-047",
  title: "Spiegazione \"causal vs correlazione\": ragionamento e prova",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Robusto modello per spiegare e analizzare la causalità in qualsiasi campo.",
  prompt: `Phenomenum / affermazione: [GRIDA QUI]

Consegna:
1) Definire la causalità contro la correlazione (rigorosamente).
2) Elenco di 10 bias / errori (confusione, selezione, causalità inversa, ecc.) con esempi.
3) Struttura di prova:
- quali prove sarebbero utili
- che esistono progetti di studio (e di scambio)
4) Studio caso con dati ipotetici:
- identifica la confusione
- propone una strategia di identificazione
(5) Esercizi:
- 8 dichiarazioni per classificare (causale / correlazione / non determinato)
- e giustifica

Vicino:
- Elenco di controllo cautistico (12 articoli).`,
  thumbnail: ""
},
{
  id: "edu-adv-048",
  title: "Spiegazione «probabilistica» avanzata: incertezza, intervalli e decisione",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Insegna a pensare con probabilità: distribuzione, rischio, utilità e decisioni.",
  prompt: `Oggetto o decisione: [CREAMS QUI]

Consegna:
1) Che cosa è l'incertezza qui (fonte).
(2) Modellazione:
- distribuzione plausibile (2-3)
- assunzioni
3) Intervales / scenari:
- miglior caso / base / peggiore caso
4. Decisione:
- criterio (utilità prevista, robustezza, minimax, ecc.)
- sensibilità (che variabile ordini)
5) Esempio numerico completo (con calcoli chiari).
6) Esercizi (6) con tracce.

Vicino:
- 10 errori di pensiero probabilistico e come correggerli.`,
  thumbnail: ""
},
{
  id: "edu-adv-049",
  title: "Spiegazione avanzata 'con curriculum design': modulo di apprendimento completo",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Progetta un modulo: obiettivi, contenuti, attività, valutazione e risorse.",
  prompt: `Oggetto: [CREAMS QUI]
Durata del modulo: [1-4 settimane]
Livello: [avanzato]

Consegna:
- Obiettivi (Bloom) (8-12)
- Contenuto per unità
- Attività pratiche (minimo 10)
- Lettura consigliata / risorse (per tema, senza link)
- Valutazione:
- diagnosi
- formazione (quizze, compiti)
- sintesi (progetto / recensione)
- Progetto finale con intestazione dettagliata (criteri / punteggi)
- piano di feedback (come dare feedback)

Vicino:
- Rischi educativi (5) e mitigazione.`,
  thumbnail: ""
},
{
  id: "edu-adv-050",
  title: "Spiegazione avanzata 'masterclass': 30 min + script di esercizio + Q & A",
  area: "Formazione",
  category: "Spiegazioni avanzate",
  summary:
  "Full Masterclass: narrativa, rigore, demo, esercizi e sezione domande.",
  prompt: `Oggetto: [CREAMS QUI]
Audizione: [professionali / studenti]
Durata: 30 minuti

Crea una masterclass:
1) Apertura (2 min): storia / caso che è agganciato.
2) Core (20 min): 3 idee principali con rigore:
- idea 1: definizione + minim- derivazione + esempio
- idea 2: definizione + minim- derivazione + esempio
- idea 3: definizione + minim- derivazione + esempio
3) Esercizio dal vivo (5 min): enunciato + soluzione guidata.
4) Chiudere (3 min): sintesi + lista di controllo applicabile.

Include:
- 12 domande difficili Q & A con risposte modello.
- 6 "comune errori" e come rispondere dal vivo.`,
  thumbnail: ""
}];