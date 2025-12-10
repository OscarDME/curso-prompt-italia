// src/lib/prompts/text/edu-ejercicios.js

export const textPromptsEduEjercicios = [
{
  id: "edu-ex-001",
  title: "Generatore di Esercizio per livello (con binari, soluzioni e intestazione)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Crea esercizi graduati (facili → difficili) con tracce, soluzioni passo-passo e criteri di valutazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello studente: [secondario / universitario / professionale]
Formato: [problemi numerici / teoria / programmazione / casi]
Obiettivo: [recensione / pratica / progetto]
Restrizioni: [senza calcolo / con derivazione / ecc.]

Genera un insieme di 15 esercizi:
- 5 basilari (minimo dominio)
- 5 intermedi (trasferimento)
- 5 avanzati (casi di integrazione e di confine)

Per l'esercizio CADA sono inclusi:
1) Dichiarazione chiara (senza ambiguità)
2) Che cosa valuta (skill / concept)
3) 2-3 binari progressivi (da morbido a diretto)
4) Soluzione completa passo dopo passo
5) Verifica / verifica (come controllare che sia bene)
6) Errore comune e come evitarlo
7) Criteri di qualificazione (intestazione corta, 0-10)

Vicino:
- Carta di copertura (che sotto-temi hai coperto e che mancano).`,
  thumbnail: ""
},
{
  id: "edu-ex-002",
  title: "Banca di 'drills' (pratica liberata): 30 brevi esercizi per automatizzare",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Esercizi brevi e ripetibili per padroneggiare sottoskill specifici.",
  prompt: `Oggetto: [CREAMS QUI]
Sottocapacità di automatizzare: [ad esempio derivare, rilevare fallacies, factorize, equazioni di equilibrio, ecc.]
Livello: [intermedio / avanzato]
Tempo per esercizio: [1-5 min]

Genera 30 trapani:
- 10 di riscaldamento (modelli ripetuti)
- 10 di variazione (cambiamento 1 condizione alla volta)
- 10 di miscela (interspersed: tipi di miscela per evitare "pilota automatico")

Per ogni trapano:
- Enunciato
- Risposta finale (solo risultato)
- 1 micro-track (max 1 linea)
- "Che modello di allenamento".

Vicino:
- Piano di pratica di 7 giorni (sessioni, ordine, ripetizioni, criteri di progresso).`,
  thumbnail: ""
},
{
  id: "edu-ex-003",
  title: "Esercizi di prova (con trappole) + come rilevare ogni trappola",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Formazione per l'esame difficile: problemi - trappola, strategia e verifica.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Formato di valutazione: [test / sviluppo / orale]

Creare 12 esercizi di stile di esame:
- 4 concettuale (definizione, limiti, ipotesi)
- 4 di applicazione (calcolo / procedura)
- 4 trappola (l'intuizione fallisce)

Per ogni esercizio comprende:
- Enunciato
- No. Perché è una trappola (se applicabile)
- Strategia corretta (passaggi)
- Soluzione dettagliata
- Verifica (come controllare)
- Errore tipico degli studenti
- "Signal" per rilevare la trappola in 10 secondi

Vicino:
- 10 euristiche per evitare trappole + 6 domande di autocontrollo.`,
  thumbnail: ""
},
{
  id: "edu-ex-004",
  title: "Esercizi per «casi transfrontalieri»: limiti massimi e condizioni rare",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Esercizi focalizzati sui punti in cui il metodo di solito fallisce: casi limite, eccezioni e cosiddette rotte.",
  prompt: `Oggetto: [CREAMS QUI]
Tipico metodo tema / regola: [SCREAMING QUI]

Genera il bordo di esercizio del caso 15:
- 5 dove tutto funziona "bello"
- 5 quando un caso viene violato
- 5 dove diverse ipotesi sono rotte (o vi è ambiguità)

Per ogni esercizio:
- Enunciato
- No. Ciò che dovrebbe essere soddisfatto / violato
- No. Qual è la conseguenza di questa violazione?
- Soluzione passo-passo (e alternativa se il metodo standard non riesce)
- "Case reading" (1-2 linee)

Vicino:
- Elenco dei presupposti prima di applicare il metodo (12 elementi).`,
  thumbnail: ""
},
{
  id: "edu-ex-005",
  title: "Esercizi \"Spiegazione\": risponde come esperto (non solo per risolvere)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Esercizi dove il compito è quello di spiegare e giustificare; ideale per esami orali e dominio reale.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Genera 10 esercizi di spiegazione:
- 4: "Define e giustifica"
- 3: "Compare A vs B"
- 3: "Critica un argomento / soluzione"

Per ogni esercizio:
- Enunciato
- Struttura di risposta prevista (6-10 script di proiettile)
- Risposta del modello (200-450 parole)
- 5 domande difficili che un insegnante farebbe a te
- Testa (chiarezza, rigore, esempi, limiti)

Vicino:
- 10 frasi utili per sembrare chiare e rigorose in un orale.`,
  thumbnail: ""
},
{
  id: "edu-ex-006",
  title: "Esercizi \"Transfer\": applica il concetto al di fuori del suo contesto",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Formazione di trasferimento reale: cambiamento di dominio, dati e obiettivi senza cambiare il nucleo concettuale.",
  prompt: `Concetto:
Dominio tipico: [A]
Nuovi domini (scelta 2): [B], [C]

Genera 12 esercizi:
- 4 in A domain (da consolidare)
- 4 nel dominio B (trasferimento)
- 4 nel dominio C (trasferimento più difficile)

Per ogni esercizio:
- Enunciato con un contesto realistico
- No. Quale parte del concetto viene utilizzato (principio)
- Traccia principale (1-3 linee)
- Soluzione dettagliata
- "Come sapere se la risposta ha senso" (regola di controllo sanitario)

Vicino:
- Lista di 8 trappole di trasferimento e come evitarle.`,
  thumbnail: ""
},
{
  id: "edu-ex-007",
  title: "Esercizi 'mini project': 5 sfide integrative con i deliverables",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Integrare le sfide con i responsabili e la voce: ideale per l'apprendimento basato sul progetto.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [avanzato]
Tempo per sfida: [2-6 ore]
Strumenti ammessi: [CREAMS QUI]

Crea 5 mini-progetti:
Per ciascuno:
- Contesto e obiettivo
- Consegna (3-6)
- Requisiti tecnici / concettuali
- Dati (se applicabile, inventare piccoli set di dati nel testo)
- Passi consigliati (non completamente)
- Criteri di valutazione (intestazione con punteggi)
- "estensione" per aumentare la difficoltà
- "Final Checklist" prima della consegna

Vicino:
- Come presentare i risultati (reporting template).`,
  thumbnail: ""
},
{
  id: "edu-ex-008",
  title: "Esercizi \"diagnostici\": rileva errore in soluzioni false",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Imparare trovando difetti: Ti do delle soluzioni sbagliate e tu diagnostica dove e perché.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Genera 10 esercizi "diagnostici":
Per ciascuna comprende:
- Enunciato del problema
- Una soluzione falsa (realistica) con 2-4 passi
- Domande:
1) In quale passo è l'errore?
2) Quale concetto / presunto fallito?
3) Come è corretto?
- Soluzione corretta completa
- "Come evitare questo errore in futuro" (euristico)

Vicino:
- Elenco di 12 errori ricorrenti in questo argomento.`,
  thumbnail: ""
},
{
  id: "edu-ex-009",
  title: "\"Richiesta breve, risposta profonda\" esercizi (tipo orale)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Domande brevi che richiedono risposte profonde e strutturate.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Genera 20 domande brevi (1 linea) che valutano:
- definizioni
- limiti
- assunzioni
- intuito
- confronto degli approcci
- interpretazioni

Per ogni domanda:
- Risposta modello (80-180 parole)
- 1 breve esempio
- 1 controesempio o limite di caso
- 1 domanda più difficile

Vicino:
- Guida alle risposte della struttura in 4 fasi (templato).`,
  thumbnail: ""
},
{
  id: "edu-ex-010",
  title: "Esercizi con 'soluzione verificabile': include i metodi di verifica",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Esercizi in cui la verifica fa parte dell'apprendimento: controlli sanitari, alternative, stime.",
  prompt: `Oggetto: [CREAMS QUI]
Formato: [numerico / concettuale / programmazione]

Genera 12 esercizi.
Per ciascuna comprende:
- Enunciato
- Soluzione completa
- 3 metodi di verifica:
1) controllo sanitario (stima / ordine di grandezza)
2) metodo alternativo (se presente)
3) semplice caso (test in un esempio banale)
- Errore comune e prevenzione

Vicino:
- Elenco di verifica generale (10 passaggi).`,
  thumbnail: ""
},

{
  id: "edu-ex-011",
  title: "Esercizi \"Building\": crea esempi e controcampioni",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Lo studente non solo risolve: costruisce casi che incontrano o spezzano proprietà.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 15 esercizi di costruzione:
- 8: costruisce un esempio che soddisfa le condizioni (A, B, C)
- 7: costruisce un controcampione che rompe esattamente una condizione

Per ogni esercizio:
- Enunciato (condizioni chiare)
- Soluzione con costruzione passo
- Spiegazione del perché incontra / rompe
- Variazione: cambia una condizione e chiede cosa succede

Vicino:
- "Kit di costruzione" (euristica per inventare esempi).`,
  thumbnail: ""
},
{
  id: "edu-ex-012",
  title: "Esercizi con 'ladder': stesso problema, 6 livelli di profondità",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Un singolo problema diventa 6, aumentando gradualmente la complessità per il dominio reale.",
  prompt: `Oggetto: [CREAMS QUI]
Progetta 1 problema di base ( contesto realistico) e poi crea una scala a 6 livelli:

Livello 1: comprensione (definire le variabili)
Livello 2: implementazione diretta
Livello 3: variazione (cambiare un parametro)
Livello 4: caso di bordo
Livello 5: Ottimizzazione / scelta del metodo
Livello 6: generalizzazione e test / giustificazione

Include:
- Enunciati di ogni livello
- Soluzione dettagliata per livello
- "Quali treni di abilità" a livello

Vicino:
- Come valutare se qualcuno domina il soggetto usando questa scala.`,
  thumbnail: ""
},
{
  id: "edu-ex-013",
  title: "Esercizi intersperati: 5 tipi si mescolano per evitare di imparare l'illusione",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Interleaving: mescolare i tipi di esercizio; migliorare la discriminazione e la selezione dei metodi.",
  prompt: `Oggetto: [CREAMS QUI]
Tipi di esercizio da mescolare (scegliere 5): [definizione, calcolo, test, diagnosi, trasferimento, caso reale, confronto]

Genera 25 esercizi intersperati (ordine misto):
Per ciascuno:
- Enunciato
- Tipo (uno dei 5)
- Circuito minimo
- Soluzione completa
- "Perché questo tizio si confonde con un altro" (1 linea)

Vicino:
- Guida: come scegliere il metodo corretto (albero di decisione nei proiettili).`,
  thumbnail: ""
},
{
  id: "edu-ex-014",
  title: "Esercizi 'Data': piccolo dataset + domande + soluzioni",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Apprendimento dei dati: crea un set di dati (testo) e problemi che lo utilizzano.",
  prompt: `Oggetto: [CREAMS QUI]
Contesto: [scuola / società / salute / ecc.]
Variabili: [list 6-12]

Crea un piccolo set di dati (20-40 righe) in formato testo (CSV-like).
Quindi creare 12 esercizi in base a questi dati:
- 4 descrittivi
- 4 infetti / decisione (se applicabile)
- 4 avanzato (bordo, trade-off)

Per ogni esercizio:
- Enunciato
- Traccia
- Soluzione completa
- Verifica (come rivedere)

Vicino:
- 8 domande extra senza una soluzione per la pratica.`,
  thumbnail: ""
},
{
  id: "edu-ex-015",
  title: "Esercizi con restrizioni': imparare in condizioni (senza X, con Y)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Essa forza la creatività e il dominio limitando strumenti o imponendo regole.",
  prompt: `Oggetto: [CREAMS QUI]
Restrizioni (scegliere 2-4):
- senza calcolatore
- senza derivati
- senza Internet
- solo metodo grafico
- solo argomenti verbali
- limite di tempo (2 min)
- solo esempi (senza teoria)

Genera 12 esercizi adattati a queste restrizioni:
Per ciascuno:
- Enunciato
- No. Che abilità si allena
- Soluzione che rispetta le restrizioni
- Errore comune
- Come verificare rapidamente

Vicino:
- Piano di pratica per migliorare sotto restrizione.`,
  thumbnail: ""
},

{
  id: "edu-ex-016",
  title: "Esercizi' con rubbed': si qualifica automaticamente con criteri",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Crea esercizi in cui la valutazione è predefinita: ideale per gli insegnanti.",
  prompt: `Oggetto: [CREAMS QUI]
Tipo: [problema / test / progetto / presentazione]
Livello: [avanzato]

Generare 10 esercizi.
Per ciascuna comprende:
- Enunciato
- Soluzione di risposta o modello prevista
- Intestazione dettagliata (criteri + livelli + punteggio)
- Esempi di risposta:
- Eccellente.
- media
- Male.
- commenti feedback (3) da livello

Vicino:
- Modello di valutazione riutilizzabile.`,
  thumbnail: ""
},
{
  id: "edu-ex-017",
  title: "Esercizi \"sintesi\": riassume, collega e generalizza",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Compiti di sintesi per livello avanzato: collegare sottotemi, creare quadri e generalizzare.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 12 esercizi di sintesi:
- 4: mappe concettuali (istruzioni + soluzione di esempio)
- 4: collega A a B (argomento + esempio)
- 4: generalizza (da caso a regola)

Per ogni esercizio:
- Enunciato
- Struttura traccia (come rispondere)
- Risposta del modello (150-350 parole) o soluzione
- Criteri di valutazione

Vicino:
- 10 "perché" domande per approfondire qualsiasi risposta.`,
  thumbnail: ""
},
{
  id: "edu-ex-018",
  title: "\"Esercizi di Comparison': A vs B vs C con casi e decisione",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Profondo confronto di approcci: ipotesi, trade-off, selezione e guasti.",
  prompt: `Oggetto: [CREAMS QUI]
Approcci da confrontare: [A], [B], [C] (se non lo sai, proponi tu)

Genera 10 esercizi:
- 4: identificare l'approccio corretto a un caso
- 3: spiegare il trade-off con esempio
- 3: caso in cui due approcci falliscono e uno funziona

Per ogni esercizio:
- Caso (contesto + dati minimi)
- Domanda
- Soluzione modello con giustificazione
- Errore comune
- "Regola di decisione" (1 linea)

Vicino:
- Albero decisione testo per scegliere approccio.`,
  thumbnail: ""
},
{
  id: "edu-ex-019",
  title: "Esercizi di tipo di competizione: velocità + precisione + verifica",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Routine competitiva: pensiero rapido / calcoli con le verifiche di non fallire.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Tempo totale: [20-40 min]

Creare una sessione di tipo competizione:
A) Sprint (10 min): 10 esercizi brevi (risposta finale) + chiavi.
B) Sfondo medio (15 min): 4 esercizi medi (soluzione corta).
C) Fondo (15 min): 1 lungo periodo (soluzione completa + verifica).
D) Post-mortem:
- elenco di errori probabili in ogni blocco
- raccomandazioni ritmiche

Include:
- Soluzioni e verifiche per tutto.`,
  thumbnail: ""
},
{
  id: "edu-ex-020",
  title: "Esercizi di ricerca: pone domande e progetti di valutazione",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Esercizi per pensare come ricercatore: ipotesi, design, prove e critiche.",
  prompt: `Oggetto: [CREAMS QUI]
Contesto: [accademico / industriale]

Genera 8 esercizi di tipo di ricerca:
Per ciascuno:
- Domanda di ricerca
- Ipotesi (2)
- No. Quali prove ti servirebbero?
- Progettazione di valutazione (esperimento / studio / simulazione)
- Rischi di validità (3-5)
- Risposta modello (cosa ti aspetteresti di trovare)

Vicino:
- Elenco di controllo per valutare la qualità delle prove (12 punti).`,
  thumbnail: ""
},

{
  id: "edu-ex-021",
  title: "Esercizi per la programmazione ': strumenti, test, ottimizza",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Per i soggetti tecnici: esercizi che forzano ad implementare e testare con i casi di confine.",
  prompt: `Oggetto: [CREAMS QUI]
Lingua: [Python / JS / ecc.]
Livello: [intermedio / avanzato]

Genera 10 esercizi di programmazione:
Per ciascuno:
- Enunciato (ingressi / uscite)
- Requisiti (complessità, memoria, stile)
- Bordo (minimo 5)
- Test (minimo 6)
- Soluzione di riferimento (codice)
- Spiegazione dell'approccio
- Possibile ottimizzazione (cosa migliorare)

Vicino:
- Lista di controllo del debug per questo tipo di attività.`,
  thumbnail: ""
},
{
  id: "edu-ex-022",
  title: "Esercizi' con spiegazione inversa': dalla soluzione deduce il problema",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Imparare inverso: Vi do una soluzione / risultato e ricostruite il problema e il ragionamento.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 12 esercizi inverso:
Per ciascuno:
- Risultato finale (numero, dichiarazione, decisione, esito)
- Frammento di ragionamento (2-4 linee)
- Attività degli studenti:
(1) Ricostruire la possibile formulazione
2) completare i passaggi mancanti
- Soluzione: una dichiarazione valida + risoluzione completa
- "Che abilità di addestramento."

Vicino:
- 8 consigli per risolvere esercizi inversa.`,
  thumbnail: ""
},
{
  id: "edu-ex-023",
  title: "Esercizi di \"lettura critica\": rilevando falle, lacune e assunzioni",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Ideale per teoria e saggi: analizza argomenti con precisione.",
  prompt: `Oggetto: [CREAMS QUI]

Creare 10 esercizi di lettura critica:
Per ciascuno:
- Un argomento scritto / soluzione (150-250 parole) con 2-4 possibili guasti
- Domande:
- identifica i presupposti
- rileva fallacy o salto logico
- riscrivere correttamente l'argomento
- Soluzione modello (analisi + versione corretta)
- Testa (chiarezza, rigore, prove, controcampioni)

Vicino:
- Lista di 15 tipici fallacies / salti in questo argomento.`,
  thumbnail: ""
},
{
  id: "edu-ex-024",
  title: "Esercizi per obiettivi': comprendere, applicare, analizzare, creare (Bloom)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Crea esercizi allineati a Bloom: dalla comprensione alla creazione di nuove soluzioni.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 18 esercizi:
- 4 Capire (spiegare con le parole)
- 4 Applicare (solvere)
- 4 Analyse (compare, decomporre)
- 3 Valutare (criticizzare, giustificare)
- 3 Crea (nuovo caso, nuovo metodo)

Per ogni esercizio:
- Enunciato
- Risposta del modello / soluzione
- Traccia
- Criteri di valutazione

Vicino:
- Come utilizzare questo set per studiare in 7 giorni.`,
  thumbnail: ""
},
{
  id: "edu-ex-025",
  title: "Esercizi di oralità ': spiegare in 60s, 3min e 8min",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Allena precise spiegazioni orali ed esempi in tempi diversi.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 10 consigli di spiegazione orale:
Per ciascuno:
Domanda (1 linea)
- Struttura di risposta
- Risposta del modello in:
A) 60 secondi
B) 3 minuti
C) 8 minuti
- 3 domande difficili
- 1 esempio e 1 caso limite

Vicino:
- Lista di controllo per un suono chiaro sotto pressione (12 punti).`,
  thumbnail: ""
},

{
  id: "edu-ex-026",
  title: "Esercizi di memoria attivi: flashcard avanzate + confusione",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Potenti flashcard con confusione e 'perché no' imparare senza illusione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Crea 40 flashcard:
- 25 concettuali (definizioni, supposizioni, limiti)
- 15 di applicazione (micro-problemi)

Per ogni flashcard:
- Domanda
- Risposta
- Confuser (possibile ma non corretta risposta) + perché è errato
- Segnale per differenziare
- Mini-esempio o metafora

Vicino:
- Ampio piano di revisione 14 giorni (calendar).`,
  thumbnail: ""
},
{
  id: "edu-ex-027",
  title: "Esercizi per competenze': rompere il soggetto in subskillings e addestrarli",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Dividere un tema complesso in subskill e creare esercizi specifici per ciascuno.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

1) Identificare 8-12 subskills necessario per padroneggiare l'argomento.
2) Per ogni subskill:
- 3 esercizi (facile da difficile)
- Traccia
- Soluzioni
- Errore comune
- Mecrico di dominio (come lo so)

Vicino:
- Itinerario consigliato (ordine di subskills) + piano di 10 giorni.`,
  thumbnail: ""
},
{
  id: "edu-ex-028",
  title: "Esercizi di \"Generalizzazione\": dal caso particolare alla regola",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Imparare generalizzando: osservare i modelli nei casi e fare le regole, con verifica.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 12 esercizi:
- 6: Vi do tre casi e voi non credete alla regola.
- 6: Vi do la regola, e voi generate tre casi che lo fanno, e uno che lo rompe.

Per ogni esercizio:
- Enunciato
- Soluzione (regola/casi)
- Giustificazione
- Verifica (come controllare)

Vicino:
- Euristica da generalizzare senza sovraccarico (8).`,
  thumbnail: ""
},
{
  id: "edu-ex-029",
  title: "Esercizi' tipo clinico ': prende decisioni con informazioni incomplete",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Forma la decisione sotto incertezza: ipotesi, domande, prove e azione.",
  prompt: `Oggetto: [CREAMS QUI]
Contesto: [clinical / business / ingegneria / formazione]

Crea 8 casi di decisione:
Per ogni caso:
- Stato (dati iniziali)
- No. Quali informazioni manca (ma sarebbe utile)
- 5 domande che faresti
- 3 scenari alternativi
- No. Quali prove supporta / confuta ogni ipotesi
- Decisione raccomandata + piano d'azione
- Rischi e mitigazione

Vicino:
- Elenco di controllo della decisione in incertezza (12 punti).`,
  thumbnail: ""
},
{
  id: "edu-ex-030",
  title: "Esercizi di sintesi finale: esame completo + soluzioni + analisi di errore",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Un esame integrato completo con soluzioni e una guida alla diagnosi di fallimento.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Durata obiettivo: [60-120 min]

Creare un esame completo:
Sezione A (concettuale): 10 domande (con risposte modello)
Sezione B (attuazione): 6 problemi (con soluzioni passo-passo)
Sezione C (avanzata): 2 casi integrativi (con soluzione + verifica)

Inoltre:
- Totale voce (100 punti) e distribuzione per sezione
- "Error map": 15 errori comuni e che cosa significano (cosa non hai capito)
- Piano di correzione: cosa praticare secondo errore

Vicino:
- Elenco di studio finale (controlla 20 articoli).`,
  thumbnail: ""
},

{
  id: "edu-ex-031",
  title: "Esercizi con creatività ': inventare il proprio problema e risolverlo",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Genera problemi originali: formulazione, soluzione, verifica e bordo caso.",
  prompt: `Oggetto: [CREAMS QUI]

In primo luogo, insegnami a inventare problemi:
- 10 serie di dichiarazioni (moulds) per questo argomento
- 10 variabili posso cambiare per generare varianti
- 6 criteri "buon problema" (né banali né impossibili)

Poi genera 8 problemi originali e per ciascuno:
- Enunciato
- Soluzione completa
- Verifica
- Cambiamento più difficile
- Cambio con bordo caso

Vicino:
- Come usarlo per studiare con un amico (dinamico).`,
  thumbnail: ""
},
{
  id: "edu-ex-032",
  title: "Esercizi di 'Correzione': migliora una cattiva risposta finché non è eccellente",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Risposte: da cattivo → media → buono → ottimo, con commenti.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 10 esercizi:
Per ciascuna comprende:
- Domanda
- Scarsa risposta (con guasti tipici)
- Compito: migliorarlo a "medium", poi "buono", poi "ottimo"
- Ottima soluzione modello (finale)
- Osservazioni di correzione in ogni fase (mancante)

Vicino:
- Controllo autocorrezione (12 articoli).`,
  thumbnail: ""
},
{
  id: "edu-ex-033",
  title: "Esercizi' con il tempo ': set timed + strategia ritmica",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Praticare con orologio per i test: 30 / 45 / 60 min set con strategia ritmica.",
  prompt: `Oggetto: [CREAMS QUI]
Obiettivo: [review]
Durata del set: [30 / 45 / 60 min]

Creare 3 set timed:
- Set 1: velocità (corte domande)
- Set 2: precisione (questioni medie)
- Set 3: integrazione (problema lungo)

Per ogni set:
- Elenco degli esercizi (con soluzione)
- Tempo consigliato per esercizio
- Strategia ritmica (quando saltare, quando tornare)
- Checklist di verifica rapida

Vicino:
- Piano di 1 settimana con questi set (progressione).`,
  thumbnail: ""
},
{
  id: "edu-ex-034",
  title: "Esercizi con spiegazione scritta ('): struttura del tipo di prova tecnica",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Per materie teoriche: esercizi di lunga risposta con struttura e voce.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 8 domande a risposta lunga (test tecnico):
Per ogni domanda:
- Enunciato
- Struttura consigliata (introduzione → tesi → sviluppo → contrasto → chiusura)
- Risposta modello (500-900 parole)
- Fonti / prove "tipo" (quale tipo di prova useresti)
- Testa (argomentazione, prove, precisione, limiti, chiarezza)

Vicino:
- 10 connettori e frasi utili per la scrittura accademica.`,
  thumbnail: ""
},
{
  id: "edu-ex-035",
  title: "Esercizi con dibattito ': difende una posizione con prove e limiti",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Forma argomento: tesi, prove, controargoment, sintesi.",
  prompt: `Oggetto: [CREAMS QUI]
Domanda di discussione: [CREAMS QUI]

Genera 8 esercizi di discussione:
Per ciascuno:
- Postura A e postura B
- Prove o ragionamento previsto per ogni posizione
- 5 domande di contrattacco (interrogatorio)
- Modello A e B risposta (150-300 parole ciascuna)
- Sintesi: quando ogni posizione è valida (criteria)

Vicino:
- Direzione della discussione (chiarità, prove, onestà intellettuale).`,
  thumbnail: ""
},

{
  id: "edu-ex-036",
  title: "Esercizi \"Modeling\": formalizza un fenomeno in variabili e relazioni",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Convertire fenomeni in modelli: variabili, ipotesi, equazioni / regole e validazione.",
  prompt: `Tema / fenomeno: [GRIDA QUI]
Livello: [alto]

Creare 10 esercizi di modellazione:
Per ciascuno:
- Contesto
- No. Cosa modellare
- Variabili (lista)
- Assunzioni
- Modello proposto (rule / equazione / algoritmo)
- Come convalidarlo (quali dati, quali prove)
- Soluzione di modello

Vicino:
- Lista di controllo di buona modellazione (12 articoli).`,
  thumbnail: ""
},
{
  id: "edu-ex-037",
  title: "Esercizi con analogie': crea analogie corrette (e spiega limiti)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Formazione per spiegare: generare analogie utili senza confondere con la semplificazione.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 12 esercizi:
- 6: crea un'analogia da un dominio dato (cucina, musica, sport, ecc.)
- 6: rilevare il limite di una data analogia (e correggerlo)

Per ogni esercizio:
- Enunciato
- Soluzione modello (analogia e mappatura)
- "Dove si rompe" (limite di caso)
- Come risolvere o avvertire lo studente

Vicino:
- 10 regole per costruire buone analogie tecniche.`,
  thumbnail: ""
},
{
  id: "edu-ex-038",
  title: "Esercizi prioritari: decidere quale metodo utilizzare e perché",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "L'obiettivo non è quello di risolvere, ma di scegliere l'approccio giusto con la giustificazione.",
  prompt: `Oggetto: [CREAMS QUI]
Metodi disponibili: [lista A / B / C...]

Generare 15 esercizi:
Per ciascuno:
- Problema / caso
- Domanda: "Quale metodo useresti e perché?"
- Soluzione modello:
- metodo scelto
- assunzioni
- passi
- alternativa (seconda migliore)
- Errore comune: scegliere metodo per abitudine
- Firma rapida per decidere

Vicino:
- Albero di decisione testuale (IF / THEN).`,
  thumbnail: ""
},
{
  id: "edu-ex-039",
  title: "Esercizi con incertezza ': intervalli, scenari e sensibilità",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Problemi che richiedono la considerazione dell'incertezza: scenari e sensibilità.",
  prompt: `Oggetto / decisione: [GRIDA QUI]

Genera 10 esercizi:
Per ciascuno:
- Dati con intervalli (non numeri unici)
- Richieste:
1) calcolare / decidere sotto 3 scenari (ottimistico / base / pessimistico)
2) identificare la variabile più sensibile
3) proporre una decisione robusta
- Soluzione completa con spiegazione
- Verifica / controllo sanitario

Vicino:
- 8 errori quando si tratta di incertezza.`,
  thumbnail: ""
},
{
  id: "edu-ex-040",
  title: "Esercizi 'Meta-confusion': distingue concetti simili (A vs B)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Impostare per smettere di confondere concetti simili: definizioni, test e casi.",
  prompt: `Oggetto: [CREAMS QUI]
Coppie confuse: [A vs B], [C vs D], ecc. (se non lo fai, proponi 5 comuni)

Genera 20 esercizi:
- 10: classifica i casi (è A o B?)
- 5: spiega la differenza con esempio e controesempio
- 5: "fissa questa frase" (ha confusione)

Include:
- Soluzioni con giustificazione
- "Fast test" per distinguere ogni coppia (1-2 domande)
- Errori comuni e come evitarli

Vicino:
- Mini-cheat foglio di distinzioni (bullette).`,
  thumbnail: ""
},

{
  id: "edu-ex-041",
  title: "Esercizi di \"terazione\": Ti do un feedback come insegnante (simulato)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Simula un insegnante che valuta e chiede miglioramenti: iterazione fino ad alta qualità.",
  prompt: `Oggetto: [CREAMS QUI]
Tipo di risposte: [sviluppo / soluzione / test / codice]

Genera 6 compiti dove:
- Tu dici la frase
- Dare una risposta iniziale "studente" (media)
- feedback degli insegnanti (difficile ma giusto)
- Mostra la versione migliorata
- Spieghi cosa è cambiato e perché

Vicino:
- Modello auto-feedback per me a itere me stesso.`,
  thumbnail: ""
},
{
  id: "edu-ex-042",
  title: "Esercizi 'Automazione': crea abitudini di pratica e di monitoraggio",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Progetta un sistema di pratica: set, metriche, recensione di errore e progressione.",
  prompt: `Oggetto: [CREAMS QUI]
Tempo disponibile: [min / day]
Obiettivo: [review / project]

Crea un sistema:
1) 3 serie di esercizi (corto / medio / lungo) con esempi concreti.
2) Metrico di progresso (8-12).
3) Registrazione di errore:
- categorie (10)
- come correggere ciascuno
4) propagazione di 14 giorni:
- cosa fare ogni giorno
- come regolare se guasto
5. "Final test" con soluzione e intestazione.

Include:
- 20 esercizi di tipo per alimentare il sistema.`,
  thumbnail: ""
},
{
  id: "edu-ex-043",
  title: "Esercizi \"Calibrazione\": stime in primo luogo, calcola in seguito",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Intuito quantitativo di formazione: stime e controlli prima del calcolo formale.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 12 esercizi:
Per ciascuno:
- Prima richiesta una stima (ordine di grandezza / gamma / approccio)
- Quindi chiedere il calcolo esatto (se applicabile)
- Soluzione: stima ragionevole + calcolo accurato
- Confrontare: quanto era la stima e perché
- Verifica e controlli sanitari

Vicino:
- Guida rapida di stima (10 euristica).`,
  thumbnail: ""
},
{
  id: "edu-ex-044",
  title: "Esercizi di lettura grafica: interpreta, non credenti, critica",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Forma l'interpretazione della grafica / figure con domande e soluzioni avanzate.",
  prompt: `Oggetto: [CREAMS QUI]
Tipo di grafica: [linea, barre, dispersione, ROC, ecc.]

Creare 10 esercizi:
Per ciascuno:
- Descrivere un grafico (nel testo) con assi, trend, outliers
- Domande:
1) interpreta la tendenza
2) infestare possibile causa (con cautela)
3) identifica i parametri / limitazioni
4) quali dati aggiuntivi chiederesti
- Soluzione full model

Vicino:
- Controllo grafico della lettura critica (12).`,
  thumbnail: ""
},
{
  id: "edu-ex-045",
  title: "Esercizi di \"comunicazione\": spiega lo stesso a 3 uditori",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Comunicazione pratica: stessa idea spiegata a bambino, studente ed esperto.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 10 esercizi:
Per ogni esercizio:
- Domanda o sub-item
- Risposta del modello per:
A) 12 anni (ovviamente, analogia)
B) Studente universitario (più rigoroso)
C) esperto (preciso, limite)
- 2 esempi per udito
- 1 errore comune per udito

Vicino:
- Modello per adattare la spiegazione senza perdere la precisione.`,
  thumbnail: ""
},

{
  id: "edu-ex-046",
  title: "\"Extreme Sintesi\" esercizi: sommario in 1 frase, 5 proiettili, 1 pagina",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Comprensione della formazione: riassumere un tema a diversi livelli senza perdere l'essenziale.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 12 esercizi:
Ogni richiesta di un riassunto di un sub-item in:
1) 1 frase (max 12 parole)
2) 5 proiettili (max 1 linea ciascuno)
3) 1 pagina (400-700 parole) con esempio e limite

Include:
- Soluzione modello per 4 esercizi (il più difficile).
- Intestazione per la valutazione dei riassunti (chiarità, accuratezza, copertura, esempio, limiti).

Vicino:
- Errori tipici quando si sommano (10).`,
  thumbnail: ""
},
{
  id: "edu-ex-047",
  title: "Esercizi di selezione variabili: definisce, misura, operativizza",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Si allena per convertire i concetti in variabili misurabili e la misurazione del design.",
  prompt: `Oggetto / costruzione: [SCREAMS QUI] (ad esempio "motivazione", "qualità", "rischio", "apprendimento")

Genera 10 esercizi:
Per ciascuno:
- Definire la costruzione con precisione
- Scopo 3 variabili misurabili (operazionalizzazione)
- Come misurarli (strumento, scala, frequenza)
- Possibile misura bias (3)
- Soluzione full model

Vicino:
- Elenco di controllo operativo (12).`,
  thumbnail: ""
},
{
  id: "edu-ex-048",
  title: "\"Causality\" esercizi: progetta lo studio o l'esperimento",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Pratica avanzata: proporre studi causali con controllo del bias.",
  prompt: `Relazione per indagare: [X colpisce Y]
Contesto:

Genera 8 esercizi:
Per ciascuno:
- Obiettivo 2 possibili disegni (esperimentali e osservazionali)
- Variabili di controllo / possibile confusione
- No. Quali dati raccogliere
- Come analizzare
- Limitazioni
- Soluzione modello (disegno consigliato + perché)

Vicino:
- Lista di controllo (12).`,
  thumbnail: ""
},
{
  id: "edu-ex-049",
  title: "La robustezza degli esercizi: testare la soluzione contro gli scenari",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Robustezza della formazione: cambiare le ipotesi e valutare se la soluzione è sostenuta.",
  prompt: `Oggetto: [CREAMS QUI]

Genera 10 esercizi:
Per ciascuno:
- Problemi di base
- Soluzione base (risolto)
- 3 disturbi (cambia ipotesi / parametri)
- Recalcula / re-razone con ogni disturbo
- Conclusione: quanto è robusta la soluzione e perché

Vicino:
- 10 euristiche di robustezza applicabili a qualsiasi problema.`,
  thumbnail: ""
},
{
  id: "edu-ex-050",
  title: "Esercizi Mega Pack: 50 domande miste + soluzioni (modalità intensiva)",
  area: "Formazione",
  category: "Esercizi",
  summary:
  "Confezione intensiva: concettuale, applicazione, diagnosi, trasferimento, sintesi.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Obiettivo: [review / project]
Tempo totale: [2-4 ore]

Genera 50 esercizi misti:
- 15 concettuale
- 15 dell'attuazione
- 10 diagnosi (soluzioni false)
- 5 trasferimento
- 5 sintesi / test

Include:
- Soluzioni complete per i primi 30
- Traccia per gli altri 20
- Intestazione globale (100 punti)
- Piano di correzione basato sui risultati:
- se fallisci in X → cosa praticare
- risorse / strategie

Vicino:
- Checklist dominio finale (20 articoli).`,
  thumbnail: ""
}];