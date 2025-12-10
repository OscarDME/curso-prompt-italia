// src/lib/prompts/text/edu-quizzes.js

export const textPromptsEduQuizzes = [
{
  id: "edu-quiz-001",
  title: "Quiz di livello completo (basic → intermedio → avanzato) con soluzioni e spiegazione",
  area: "Formazione",
  category: "Forse",
  summary:
  "Genera un quiz passo con risposte corrette e spiegazione pedagogica di ogni opzione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello pubblico: [secondario / universitario / professionale]
Obiettivo: [diagnosi / recensione / recensione]
Formato: [multiple / true / false / miste opzione]
Numero di domande: 30

Creare un quiz di 30 domande:
- 10 base (in piedi)
- 10 intermedi (attuazione)
- 10 avanzato (caso di bordo e ragionamento)

Per ogni domanda include:
(1) Dichiarazione chiara
2) 4 opzioni (A, B, C, D)
3) Risposta corretta
4) Spiegazione del perché è corretto
5) Spiegazione del perché ogni distrattore è errato (una linea per distrattore)
6) Capacità di valutazione (concetto specifico)
7) Livello di difficoltà (B / I / A)

Vicino:
- Tabella dei risultati (in testo) per interpretare il punteggio:
- 0-10:
- 11-20:...
- 21-30:...
- Elenco dei sottotemi da rinforzare in base ai tipici guasti.`,
  thumbnail: ""
},
{
  id: "edu-quiz-002",
  title: "Diagnosi quiz dei pre-requirements (rileva le lacune prima di andare avanti)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valutazione preventiva dell'argomento: identifica ciò che manca e suggerisce il percorso di rinforzo.",
  prompt: `Tema obiettivo: [CREMA QUI]
Prerequisiti (se lo sapete): [LIST] (se non vi proponete 10-15)
Livello: [intermedio / avanzato]

Crea una diagnosi di quiz di 20 domande:
- 12 concetti pre-requisiti
- 8 de minim- applicazione (micro problemi)

Per ogni domanda:
- Enunciato
- 4 opzioni
- Risposta corretta
- Breve spiegazione
- "Che errore rivela qui" (che differenza indica)

Alla fine:
- Diagnosi della banda (0-7, 8-14, 15-20) con raccomandazioni.
- Piano di rinforzo di 7 giorni secondo il gap identificato.`,
  thumbnail: ""
},
{
  id: "edu-quiz-003",
  title: "Prova di tipo Quiz con trappole (e guida per rilevare la trappola)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Allenamento per l'esame difficile con domande intra e segnali per rilevarli rapidamente.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Numero di domande: 20

Crea 20 domande in stile esame (opzione multipla):
- 8 normali (in piedi / applicazione)
- 8 difficile (reasoning)
- 4 trappola (l'intuizione fallisce)

Per ogni domanda:
- Enunciato
- Opzioni A-D (distratori realistici)
- Risposta corretta
- Spiegazione completa (150-250 parole se necessario)
- "Perché sta barando" (se sta barando)
- Segnale di rilevamento in 10 secondi (euristico)

Vicino:
- 10 regole d'oro per evitare trappole su questo argomento.`,
  thumbnail: ""
},
{
  id: "edu-quiz-004",
  title: "Quiz misto: multipla + vera / falsa + risposta breve",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta la profondità reale con formati diversi e criteri chiari.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Creare un quiz misto di 25 articoli:
- 12 opzione multipla (A-D)
- 8 vero / falso (compresa la spiegazione)
- 5 risposta breve (2-5 linee di risposta previste)

Include per ogni articolo:
- Enunciato
- Risposta corretta
- Spiegazione
- Errore tipico
- Punteggio consigliato (totale 100 m)

Vicino:
- Intestazione per brevi risposte (criteria + esempi).`,
  thumbnail: ""
},
{
  id: "edu-quiz-005",
  title: "Quiz per sottotemi (profilo principale): mappa di punti di forza e di debolezza",
  area: "Formazione",
  category: "Forse",
  summary:
  "Crea un quiz raggruppato da sub-item con interpretazione per area.",
  prompt: `Oggetto: [CREAMS QUI]
Elenco delle sotto-teme (se avete): [LIST] (se non, propon 6-10)
Livello: [intermedio / avanzato]

Creare un quiz di 30 domande:
- 3-5 domande per sub-item
- Miscela concettuale e applicazione

Per ogni domanda:
- Enunciato
- Opzioni A-D
- Risposta corretta
- Spiegazione
- Etichettatura sottotema

Alla fine:
- Modello di report:
- Sottotema: successo / totale + interpretazione
- Raccomandazione di studio per sub-item (cosa praticare e come).`,
  thumbnail: ""
},
{
  id: "edu-quiz-006",
  title: "Quiz di precisione concettuale: definizioni, assunzioni, limiti (alto livello)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Ideale per livello avanzato: distingue definizioni simili e ipotesi nascoste.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Numero di domande: 20

Crea 20 domande incentrate su:
- definizioni esatte
- presupposti necessari
- casi in cui il concetto NON si applica
- confronti A contro B

Formato:
- 15 opzione multipla
- 5 vero / falso "con giustificazione"

Include:
- Risposta corretta
- Breve ma rigorosa giustificazione
- "Come rilevarlo velocemente" (test track)
- Errore comune degli studenti

Vicino:
- Mini-cheat foglio di definizioni chiave.`,
  thumbnail: ""
},
{
  id: "edu-quiz-007",
  title: "Applicazione quiz (problemi brevi) con calcolo / ragionamento",
  area: "Formazione",
  category: "Forse",
  summary:
  "Quiz pratico: micro-problemi; ideale per la velocità di allenamento con la verifica.",
  prompt: `Oggetto: [CREAMS QUI]
Formato: [numerico / logico / programmazione / casi]
Livello: [intermedio / avanzato]
Domande: 20

Crea 20 micro-problemi:
Per ciascuno:
- Enunciato
- 4 opzioni A-D (con risultati plausibili)
- Risposta corretta
- Soluzione breve (passi minimi) + verifica / controllo sanitario
- Livello (1-5)

Vicino:
- Strategia temporale: come distribuire i minuti e quando saltare una domanda.`,
  thumbnail: ""
},
{
  id: "edu-quiz-008",
  title: "Quiz di controesempi: rileva quando una regola fallisce",
  area: "Formazione",
  category: "Forse",
  summary:
  "Allena il pensiero esperto: identifica i casi limite e i controcampioni.",
  prompt: `Oggetto: [CREAMS QUI]
Regole tipiche dell'argomento: [LIST] (se non, propon 6-10)

Crea 22 domande:
- 12: "Applica la regola qui?" (sì / no) con opzioni
- 10: "scegliere il controcampione" (A-D)

Per ogni domanda:
- Enunciato
- Opzioni
- Risposta corretta
- Spiegazione: che è violato e che cosa è coinvolto
-'Regola incriminata '(come direbbe un esperto)

Vicino:
- Elenco di 10 assunzioni è necessario rivedere prima di applicare le regole.`,
  thumbnail: ""
},
{
  id: "edu-quiz-009",
  title: "Metodo di selezione quiz (scelta approccio corretto e giustificare)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta se lo studente può scegliere il metodo, non solo eseguire.",
  prompt: `Oggetto: [CREAMS QUI]
Metodi / approcci disponibili: [A, B, C, D] (se non, proporre)

Crea 18 domande:
Per ciascuno:
- Caso (contesto + dati)
- Domanda: "Quale metodo useresti?"
- Opzioni A-D (metodo)
- Risposta corretta
- Giustificazione: perché questo metodo si adatta (supposti, trade-off)
- "Secondo meglio" (che sarebbe e perché)
- Errore tipico: scegliere da personalizzato

Vicino:
- Albero di decisione del testo (IF / THEN) per scegliere il metodo.`,
  thumbnail: ""
},
{
  id: "edu-quiz-010",
  title: "Quiz di lettura critica: rileva fallacies, gaps e bias",
  area: "Formazione",
  category: "Forse",
  summary:
  "Ideale per la teoria: analizza argomenti e rileva guasti logici o metodologici.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Crea 15 domande basate su testi mini-:
- Ogni domanda include un testo di 80-150 parole (argomento / soluzione)
- Domanda: Che cosa è sbagliato / che cosa manca / che cosa è nascosto?

Formato:
- 10 opzione multipla (tipo "diagnosi")
- 5 risposta breve (2-4 linee)

Include:
- Risposta corretta
- Spiegazione dettagliata
- Versione corretta dell'argomento (se applicabile)
- Criteri per le risposte brevi qualificanti

Vicino:
- Elenco di 12 errori tipici dell'argomento (checklist).`,
  thumbnail: ""
},

{
  id: "edu-quiz-011",
  title: "Quiz 'flash': 40 domande rapide (con spiegazione minima) per la recensione",
  area: "Formazione",
  category: "Forse",
  summary:
  "Recensione ultrapid: molte domande brevi per rafforzare la memoria attiva.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:

Creare un quiz flash di 40 domande:
- 30 1-2 linea opzione multipla (A-D)
- 10 vero / falso

Per ogni domanda:
- Risposta corretta
- Spiegazione minima (1-2 linee)
- "Confettore tropicale" (che opzione inganna e perché)

Vicino:
- Ampio piano di revisione (7 giorni) utilizzando questo quiz.`,
  thumbnail: ""
},
{
  id: "edu-quiz-012",
  title: "Quiz con feedback adattivo (se fallisci, ti do rinforzi)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Crea domande e anche moduli di rinforzo secondo il tipo di errore.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Progetta un quiz di 20 domande A-D.
Inoltre, creare feedback "branches":
- Per ogni domanda, definisce 3 tipi di errore (secondo il distrattore scelto).
- Per ogni tipo di errore:
- che concetto mancava
- minim- spiegazione di rinforzo (80-150 parole)
- 1 esercizio mini-immediato
- risposta del minim- esercizio

Vicino:
- Guida da usare come un 1: 1 tutor (come avanzare secondo errori).`,
  thumbnail: ""
},
{
  id: "edu-quiz-013",
  title: "Tipo quiz certificazione (100 punti) con sezioni e calibrazione",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta il dominio: sezioni, punteggi e criteri di approvazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Durata obiettivo: [60-90 min]

Creare un test di certificazione (totale 100 punti):
- Sezione A (concettuale): 12 domande (48 m)
- Sezione B (attuazione): 8 domande (32 m)
- Sezione C (casi transfrontalieri / scelta del metodo): 5 domande (20 m)

Formato di ogni domanda:
- A-D
- Risposta corretta
- Spiegazione
- punteggio assegnato
- Errore comune

Vicino:
- Approvazione standard (es. 70 / 100)
- Diagnosi per sezione (da rafforzare per punteggio).`,
  thumbnail: ""
},
{
  id: "edu-quiz-014",
  title: "Quiz di terminologia avanzata (jargon → significa → uso corretto)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta la comprensione dei termini e il loro corretto utilizzo nel contesto.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [avanzato]

Crea 25 domande:
- 15: scegli la definizione corretta
- 10: scegliere l'uso corretto in una frase / caso

Per ogni domanda:
- Enunciato (include contesto)
- Opzioni A-D
- Risposta corretta
- Spiegazione + esempio corretto + esempio sbagliato
- Errore tipico

Vicino:
- Glossario compatto con i 25 termini.`,
  thumbnail: ""
},
{
  id: "edu-quiz-015",
  title: "Idea quiz di trasformazione: si traduce tra rappresentazioni (testo ↔ formula ↔ diagramma)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta se lo studente può passare da una rappresentazione all'altra senza perdere significato.",
  prompt: `Oggetto: [CREAMS QUI]
Possibili rappresentazioni: [testo, formula, pseudo-codice, diagramma descritto]

Crea 20 domande:
- 8: testo → formula / procedura
- 6: formula / procedura → interpretazione del testo
- 6: di diagramma descritto → previsione / risultato

Include:
- Risposta corretta
- Spiegazione
- Errore comune (che confusione rappresenta)

Vicino:
- Lista di controllo per tradurre rappresentazioni (10 passi).`,
  thumbnail: ""
},

{
  id: "edu-quiz-016",
  title: "Quiz di pensiero probabilistico (incertezza, pregiudizi, decisioni)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Formazione probabilistica applicata: scenari e errori cognitivi.",
  prompt: `Oggetto / decisione: [GRIDA QUI]

Crea 20 domande:
- 10 concetti (bia, interpretazione)
- 10 di applicazione (scenari di serie)

Formato:
- A-D
- risposta corretta
- spiegazione con controllo sanitario

Include:
- 8 "interrogazioni di viaggio" (fallacy del tasso di base, regressione alla media, ecc.) e come rilevarle.
Vicino:
- Lista di 10 errori probabilistici frequenti + antidoti.`,
  thumbnail: ""
},
{
  id: "edu-quiz-017",
  title: "Quiz con mini-case: 12 scenari reali e domande inclusive",
  area: "Formazione",
  category: "Forse",
  summary:
  "Case learning: scenari realistici con domande che integrano concetti.",
  prompt: `Oggetto: [CREAMS QUI]
Industria / contesto: [educazione / salute / business / ingegneria / ecc]

Crea 12 mini-case (80-150 parole ciascuna).
Per ogni caso creare 2 domande (totale 24):
- 1 concettuale (assunzioni, definizione, limiti)
- 1 applicato (decisione, calcolo, selezione dei metodi)

Include:
- Opzioni A-D
- Risposta corretta
- Spiegazione dettagliata
- "Quali dati aggiuntivi chiederesti" per migliorare la decisione

Vicino:
- Studiare raccomandazioni secondo i fallimenti più comuni.`,
  thumbnail: ""
},
{
  id: "edu-quiz-018",
  title: "Quiz style 'oral': domanda + risposta prevista + richiesta",
  area: "Formazione",
  category: "Forse",
  summary:
  "Simula l'esame orale: risposte modello e domande di profondità.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [avanzato]

Crea 15 domande orali:
Per ciascuno:
- Domanda principale (1 linea)
- Struttura di risposta prevista (6-10 proiettili)
- Risposta modello (120-250 parole)
- 2 domande difficili
- 1 esempio + 1 caso limite
- Breve voce (larità, rigore, esempi, limiti)

Vicino:
- Modello di risposta orale in 4 passaggi.`,
  thumbnail: ""
},
{
  id: "edu-quiz-019",
  title: "Quiz di 'errore comune': identifica ciò che è sbagliato in soluzioni false",
  area: "Formazione",
  category: "Forse",
  summary:
  "Diagnosi difettosa: rileva il passo sbagliato e il concetto che è stato rotto.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Crea 12 domande diagnostiche:
Per ciascuno:
- Breve sessione del problema
- Una soluzione falsa (3-6 linee)
- Domanda: "Dov'è l'errore?"
- Opzioni A-D (tipo di errore / concetto)
- Risposta corretta
- Spiegazione: cosa ha fallito e come correggerlo
- Mini-rule per evitarlo

Vicino:
- Elenco di 12 errori ricorrenti in questo argomento (checklist).`,
  thumbnail: ""
},
{
  id: "edu-quiz-020",
  title: "Quiz finale + piano adattativo: secondo il tuo punteggio, cosa studiare (percorso personalizzato)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Integratore quiz con interpretazione e curriculum secondo i risultati di sub-item.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]
Subtemi (se avete): [LIST] (se non, propon 8)

Creare un quiz di 32 domande:
- 4 domande per sub-item (conceptual mix / applicazione)

Per ogni domanda:
- A-D
- risposta corretta
- spiegazione
- etichetta sub-item

Alla fine:
- Template per l'aggiunta di punteggi per sub-item
- Diagnosi per sub-item (alto / medio / basso)
- Personalizzato curriculum di 10 giorni:
- quali sottotemi priorità
- che tipo di pratica fare (drills / esercizi / casi)
- mini metriche di progresso al giorno`,
  thumbnail: ""
},

{
  id: "edu-quiz-021",
  title: "Quiz 'counterintuitive': 15 domande in cui l'intuizione fallisce",
  area: "Formazione",
  category: "Forse",
  summary:
  "Allena l'intuizione giusta con domande che rompono le credenze tipiche.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Genera 15 domande controintuitive (A-D).
Per ciascuno:
- Enunciato
- Opzioni A-D (molto plausibile)
- Risposta corretta
- Spiegazione: perché la tua intuizione è sbagliata
- "Mental antidoto": regola / euristica non cadere
- Mini-esempio aggiuntivo

Vicino:
- Elenco di 10 intuizioni tipiche false del tema e della sua versione corretta.`,
  thumbnail: ""
},
{
  id: "edu-quiz-022",
  title: "Quiz de 'complete the step': scegliere il prossimo passo a destra",
  area: "Formazione",
  category: "Forse",
  summary:
  "Procedura di formazione: sapere cosa fare dopo e perché.",
  prompt: `Oggetto / procedura: [GRIDA QUI]
Livello: [intermedio / avanzato]

Crea 20 domande:
In ogni domanda:
- Mostra lo stato attuale o passi 1-2 (nel testo)
- Domanda: "Qual è il prossimo passo destro?"
- Opzioni A-D
- Risposta corretta
- Spiegazione del perché quel passo (e perché gli altri non lo fanno)
- Errore tipico

Vicino:
- Elenco di controllo della procedura sommaria (passi generali).`,
  thumbnail: ""
},
{
  id: "edu-quiz-023",
  title: "Quiz of 'range and prevent': prime stime, poi seleziona risposta",
  area: "Formazione",
  category: "Forse",
  summary:
  "Controllo della salute della formazione: stima e selezione della risposta plausibile.",
  prompt: `Oggetto: [CREAMS QUI]

Crea 18 domande:
- Ogni dichiarazione richiede un range ragionevole
- Le opzioni A-D sono range / risultati

Include:
- Risposta corretta
- Stime ragionevoli (passi)
- Calcolo corto (se applicabile)
- Verifica
- Errore tipico (perché si sceglie una gamma assurda)

Vicino:
- 10 veloce stima euristica.`,
  thumbnail: ""
},
{
  id: "edu-quiz-024",
  title: "Quiz per gli insegnanti: creare domande perfette e distrattori",
  area: "Formazione",
  category: "Forse",
  summary:
  "Genera domande con distrattori basati su errori reali e spiega il suo design.",
  prompt: `Oggetto: [CREAMS QUI]
Livello degli studenti: [GRIDA QUI]

Genera 20 domande A-D.
Per ogni domanda:
- Risposta corretta (chiave)
- 3 distratori progettati:
- distrattore 1 = errore tipico concetto
- distrattore 2 = confusione dei termini
- distrattore 3 = errore procedurale
- Spiega il ragionamento progettuale di ogni distrattore ("che errore cattura")
- Spiegazione educativa della risposta corretta
- Difficoltà (1-5)

Vicino:
- Guida alla calibrazione della difficoltà di un articolo (8 regole).`,
  thumbnail: ""
},
{
  id: "edu-quiz-025",
  title: "\"Recognition\" quiz vs memoria: miscela MCQ con risposta gratuita",
  area: "Formazione",
  category: "Forse",
  summary:
  "Evitare l'illusione dal riconoscimento: combina l'opzione multipla con la risposta gratuita.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Creare 24 articoli:
- 12 opzione multipla (A-D)
- 12 risposta gratuita (2-6 linee)

Include:
- Risposta corretta
- Guida di correzione gratuita (intestazione)
- Segni di errore comuni (che rivela un errore)
- Raccomandazione: Come ripetere il quiz per la massima ritenzione

Vicino:
- Ampio piano di revisione di 14 giorni con questo quiz.`,
  thumbnail: ""
},

{
  id: "edu-quiz-026",
  title: "Quiz di ' mappa concettuale': connessioni complete e gerarchie",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta la struttura mentale del tema: relazioni, dipendenze, gerarchia.",
  prompt: `Oggetto: [CREAMS QUI]
Sottotemi (se non forniti, propon­ti 10-15)

Creare un "conceptual map quiz" con 20 articoli:
- 10 articoli: "scegliere il giusto rapporto" (A-D)
- 10 elementi: "ordine gerarchia" (da 4 opzioni di ordine)

Include:
- Risposta corretta
- Breve spiegazione (perché)
- Errore comune (scontro fisico)

Vicino:
- Carta concettuale modello (in proiettili indecenti).`,
  thumbnail: ""
},
{
  id: "edu-quiz-027",
  title: "Limite caso quiz: quando NON si applica? (presupposti e limiti)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Si forma limiti: identificare scenari in cui il metodo o il concetto fallisce.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Genera 20 domande A-D:
- Ogni domanda descrive uno scenario
- Domanda: "Si applica qui? / Che cosa dovrebbe essere violato? / Qual è il fallimento?"

Include:
- Risposta corretta
- Spiegazione dettagliata
- Violazione presunta (labelling)
- "Come salvarlo" (metodo alternativo / corretto)

Vicino:
- Elenco dei presupposti prima di applicare l'argomento (12).`,
  thumbnail: ""
},
{
  id: "edu-quiz-028",
  title: "Quiz di 'interpretazione': traduce i risultati in conclusioni corrette",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta l'interpretazione: evitare conclusioni esagerate e leggere i risultati con limiti.",
  prompt: `Oggetto: [CREAMS QUI]

Crea 18 domande:
- enunciato include un "risultato" (dati, output, affermazione, metrica)
- domanda: "Quale conclusione è giustificata?"

Formato:
- A-D (3 conclusioni errate per eccesso, causalità indebita, o generalizzazione)
- risposta corretta + spiegazione
- errore tipico + antidoto (rule)

Vicino:
- 10 regole per interpretare i risultati senza esagerare.`,
  thumbnail: ""
},
{
  id: "edu-quiz-029",
  title: "Quiz de 'mini-histories': applica concetti all'interno di una narrazione",
  area: "Formazione",
  category: "Forse",
  summary:
  "Impara dalle storie: ogni domanda viene fornita con micro-caso narrativo.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Genera 15 domande.
Ciascuna contiene:
- micro-storia (60-120 parole)
- domanda concettuale o applicata
- A-D risposte
- risposta corretta
- spiegazione dettagliata
- "dati mancanti" che sarebbero utili (1 linea)

Vicino:
- Lista di 8 schemi narrativi per inventare più casi.`,
  thumbnail: ""
},
{
  id: "edu-quiz-030",
  title: "Quiz ultra avanzato (stile master): 25 domande difficili con ragionamento",
  area: "Formazione",
  category: "Forse",
  summary:
  "Alto livello: domande dure, distrattori esperti e spiegazioni profonde.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [master / esperto]
Domande: 25

Genera 25 domande A-D con queste regole:
- Ogni distrattore deve essere plausibile per un buon studente
- Le ragioni, non la memoria superficiale, devono essere valutate
- Include 5 domande con casi di confine
- Include 5 domande di confronto A vs B

Per ogni domanda:
- Risposta corretta
- Spiegazione profonda (120-250 parole)
- No. Perché ogni distrattore è sbagliato
- Difficoltà (1-5)
- "Key idea" (1 linea) per ricordarlo

Vicino:
- Diagnosi: come interpretare gli errori (per tipo) e cosa studiare in seguito.`,
  thumbnail: ""
},

{
  id: "edu-quiz-031",
  title: "Quiz per creare (meta-questions): lo studente progetta domande e risposte",
  area: "Formazione",
  category: "Forse",
  summary:
  "Apprendimento più alto: creare domande, distrazioni e spiegazioni.",
  prompt: `Oggetto: [CREAMS QUI]

Crea un quiz generativo con 12 compiti:
Per ogni compito:
- Soppresso proposto
- Chiedi allo studente di creare:
- 1 domanda A-D
- 1 risposta corretta
- 3 distrattori basati su errori tipici
- spiegazione del perché ogni distrattore è sbagliato
- Include un esempio di modello completo (solo in 4 delle 12 attività)

Vicino:
- Direzione per la valutazione della qualità delle domande (10 criteri).`,
  thumbnail: ""
},
{
  id: "edu-quiz-032",
  title: "Quiz 'doppio strato': domanda + domanda di follow-up (deepens)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Ogni articolo ha followup che richiede spiegare perché, evitando fortuna.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Creare 15 elementi di doppio strato:
- Parte 1: MCQ A-D
- Parte 2: follow-up (breve risposta 2-4 linee) giustificando la scelta

Include:
- Risposta corretta (parte 1)
- Risposta del modello (parte 2)
- Capo della Parte 2 (criteria)
- Errore comune e come rilevarlo

Vicino:
- Come qualificare rapidamente questo formato (guida).`,
  thumbnail: ""
},
{
  id: "edu-quiz-033",
  title: "Quiz con 'error distrattori': ogni opzione rappresenta un fallimento diverso",
  area: "Formazione",
  category: "Forse",
  summary:
  "Design pedagogico: ogni distrattore corrisponde ad un errore diagnostico.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Crea 20 domande A-D dove:
- No. L'opzione giusta è concettualmente accurata
- Ogni distrattore corrisponde ad un tipo di errore:
B = confusione del termine
C = falso caso nascosto
D = errore procedurale / intuito

Per ogni domanda:
- Spiegare quale errore ogni distrattore rappresenta
- fornisce micro-reinforzamento specifico per ogni errore (2-4 linee)

Vicino:
- Guida per utilizzare il quiz come tutor (se si sceglie B / C / D, cosa studiare).`,
  thumbnail: ""
},
{
  id: "edu-quiz-034",
  title: "Velocità quiz (20 min): strategia di tempo + verifica rapida",
  area: "Formazione",
  category: "Forse",
  summary:
  "Progettato per allenare il tempo: domande più corte, con controlli rapidi.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio]
Durata: 20 minuti
Domande: 20

Crea 20 domande A-D:
- brevi dichiarazioni
- distrattori plausibili

Include:
- Risposta corretta
- Breve spiegazione (1-3 linee)
- Verifica / controllo sanitario (1 linea)
- Tempo consigliato per domanda (in secondi)

Vicino:
- Strategia ritmica (quando saltare, quando tornare).`,
  thumbnail: ""
},
{
  id: "edu-quiz-035",
  title: "Ampia recensione quiz: 5 mini-quizzes (giorno 1,3,7,14,30)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Pacchetto di conservazione: minim- forse si ripetono con crescente difficoltà.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:

Creare 5 minim- forse (10 domande ciascuno):
- Giorno 1: fondazioni
- Giorno 3: implementazione
- Giorno 7: miscelazione e interspersing
- Giorno 14: casi di confine
- Giorno 30: Integrazione dell'esame

Per ogni mini-quiz:
- Domande A-D
- Risposta corretta
- Spiegazioni
- Sottotemi coperti

Vicino:
- Guida all'uso (come valutare i progressi e cosa rafforzare).`,
  thumbnail: ""
},

{
  id: "edu-quiz-036",
  title: "Quiz di 'corretto l'affermazione': selezionare la versione precisa",
  area: "Formazione",
  category: "Forse",
  summary:
  "Forma precisione: riscrive dichiarazioni errate e rileva sfumature.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Genera 20 articoli:
- Ogni elemento dà una dichiarazione problematica (esagerato, ambiguo o falso)
- Domanda: "Qual è la versione corretta?"
- Le opzioni A-D sono riscritte (solo una è precisa)

Include:
- Risposta corretta
- Mice spiegazione (cosa è cambiato e perché)
- Errore tipico che produce il reclamo originale

Vicino:
- Lista di 10 parole pericolose (sempre / mai / garanzia...) e come usarle bene.`,
  thumbnail: ""
},
{
  id: "edu-quiz-037",
  title: "Quiz «sceglie l'ipotesi»: identifica ciò che deve essere vero per applicarsi",
  area: "Formazione",
  category: "Forse",
  summary:
  "Insegnare la lettura delle supposizioni: quale condizione è necessaria per usare una regola.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Crea 18 domande:
- Enunciato descrive un metodo / teorema / regola
- Domanda: "Qual è il presupposto necessario?"

Opzioni A-D:
- 1 assunzione corretta
- 3 casi di plausibile ma non corretto / insufficiente

Include:
- Risposta corretta
- Spiegazione
- No. E se quel presunto fallimento (mini-caso)
- alternativa se fallisci

Vicino:
- Elenco dei presupposti per il soggetto.`,
  thumbnail: ""
},
{
  id: "edu-quiz-038",
  title: "Quiz con esercizi mini-numerici: calcolo + interpretazione",
  area: "Formazione",
  category: "Forse",
  summary:
  "Valuta il calcolo e anche l'interpretazione del risultato nel contesto.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio]
Domande: 16

Per ogni domanda:
- set con numeri / dati
- chiedere di calcolare qualcosa
- e poi interpretare cosa significa

Formato:
- A-D (risultati + interpretazioni come distrattori)
- risposta corretta
- soluzione breve + corretta interpretazione
- controllo sanitario

Vicino:
- 8 errori numerici tipici (unità, segni, scale).`,
  thumbnail: ""
},
{
  id: "edu-quiz-039",
  title: "Quiz di \"combinazione dei concetti\": integra 2-3 idee per domanda",
  area: "Formazione",
  category: "Forse",
  summary:
  "Integrare le domande per misurare la comprensione reale (non la memoria).",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Crea 20 domande A-D dove ogni domanda richiede di combinare 2-3 concetti.
Per ogni domanda:
- Risposta corretta
- Spiegazione dettagliata (perché combina, quali passi)
- Perché ogni distrattore fallisce (1 linea c / u)
- Difficoltà (1-5)
- Capacità di valutazione

Vicino:
- Elenco di combinazioni di concetti più importanti (10).`,
  thumbnail: ""
},
{
  id: "edu-quiz-040",
  title: "Final Quiz 'all in one': con report e raccomandazioni personalizzate",
  area: "Formazione",
  category: "Forse",
  summary:
  "Integratore quiz con rapporto per sub-item e percorso specifico di ulteriore studio.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]
Subtemi: [LIST] (se non, propon 10)

Creare un quiz di 40 domande:
- 4 per sub-item (conceptual mix / applicazione / casi di confine)

Per ogni domanda:
- A-D
- risposta corretta
- spiegazione
- etichetta sub-item
- "errore fisico" (1 riga)

Alla fine:
- Modello di segnalazione per sub-item:
- punteggio, diagnosi, raccomandazione
- percorso di studio di 14 giorni:
- quali sottotemi priorità
- che tipo di pratica (quizze / esercizi / casi)
- metriche di progresso giornaliero`,
  thumbnail: ""
},

{
  id: "edu-quiz-041",
  title: "Class quiz: forme di discussione + domande di sondaggio",
  area: "Formazione",
  category: "Forse",
  summary:
  "Pensiero per gli insegnanti: domande che innescano la discussione con le risposte previste.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:

Crea 20 domande per la discussione in classe:
- 12 tipo MCQ A-D (voto rapido)
- 8 aperte (domande di sorveglianza)

Include:
- Risposta corretta / attesa
- Spiegazione educativa
- Richiesta di ulteriori informazioni
- Errore comune che apparirà in classe e come correggerlo

Vicino:
- script di 15 minuti per usare queste domande in classe.`,
  thumbnail: ""
},
{
  id: "edu-quiz-042",
  title: "Quiz stile 'istruzione peer': domanda concettuale + discussione + revoto",
  area: "Formazione",
  category: "Forse",
  summary:
  "Mazur Format: domanda concettuale con distrattori che generano dibattito.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Creare 15 domande di istruzione peer:
Per ciascuno:
- Inunciazione concettuale (senza calcolo)
- Opzioni A-D (distratori basati su idee sbagliate)
- Risposta corretta
- Spiegazione per l'istruttore
- "Che cosa direbbe ogni lato" (perché uno studente sceglierà B / C / D)
- Mini-script per il dibattito (2-3 domande guida)

Vicino:
- Guida per implementare revote e spiegare la risposta.`,
  thumbnail: ""
},
{
  id: "edu-quiz-043",
  title: "Quiz con 'auto-qualifica': regole per lo studente da valutare",
  area: "Formazione",
  category: "Forse",
  summary:
  "Esso include i criteri per lo studente di interpretare gli errori e l'attività di auto-assegna.",
  prompt: `Oggetto: [CREAMS QUI]

Crea 25 domande A-D.
Inoltre:
- Gruppo in 5 categorie di abilità (definisce che).
- Ogni domanda etichetta una categoria.
- No. Alla fine crea regole:
- se i guasti ≥ 3 nella categoria X → assegna la pratica Y (con istruzioni)
- No. Esso fornisce raccomandazioni specifiche per categoria (drills + esercizi + letture di tipo).

Include:
- risposte e spiegazioni giuste.`,
  thumbnail: ""
},
{
  id: "edu-quiz-044",
  title: "2-step quiz: 1) prova 2) spiegazione scritta di 5 risposte",
  area: "Formazione",
  category: "Forse",
  summary:
  "Egli valuta e le forze per giustificare: dopo aver risposto, lo studente spiega 5 risposte.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [intermedio / avanzato]

Passo 1: Crea 20 domande A-D (con risposte e spiegazione).
Passo 2: selezionare 5 domande (più importanti) e chiedere:
- spiegazione scritta (120-200 parole) giustificando la scelta
- include la risposta del modello per quei 5
- titolo di qualificazione (chiarità, rigore, esempi, limiti)

Vicino:
- Guida a "fortunato colpo" con questa fase 2.`,
  thumbnail: ""
},
{
  id: "edu-quiz-045",
  title: "Quiz 'di etichette': identifica il concetto, il sub-item e il tipo di errore",
  area: "Formazione",
  category: "Forse",
  summary:
  "Metacomnizione: non solo rispondere, ma anche identificare quale concetto viene utilizzato.",
  prompt: `Oggetto: [CREAMS QUI]
Subtemi: [LIST] (se non, propon 8)

Crea 24 domande A-D.
Per ciascuno, oltre ad una risposta corretta, comprende:
- etichetta sub-item
- specifica etichetta concept
- etichetta "tipo di errore" per ogni distrattore (confusione, assunzione, procedura)

Vicino:
- Template per registrare gli errori per tipo e correggerli.`,
  thumbnail: ""
},

{
  id: "edu-quiz-046",
  title: "Quiz 'no distrattori': vero / falso con rigorosa giustificazione",
  area: "Formazione",
  category: "Forse",
  summary:
  "Avanzato V / F con spiegazione: perfetto per ipotesi, limiti, sfumature.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]
Articoli: 25

Crea 25 vere / false affermazioni:
- 10 facili (fondazioni)
- 10 media (attuazione)
- 5 difficili (nuance, limiti di caso)

Per ogni articolo:
- V / F
- Giustificazione (80-200 parole)
- No. Se è falso, riscrivere la dichiarazione per essere vero
- Errore tipico che porta alla risposta sbagliata

Vicino:
- 10 segni di "affermazioni" (parole e strutture).`,
  thumbnail: ""
},
{
  id: "edu-quiz-047",
  title: "Quiz di 'sequenze': ordine passi corretti (procedure)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Per questioni procedurali: scegliere ordine corretto e giustificare.",
  prompt: `Oggetto / procedura: [GRIDA QUI]
Livello: [intermedio]

Crea 18 domande:
- Ogni domanda richiede 5 passaggi non ordinati
- Offre 4 opzioni di ordine (A-D)
- Risposta corretta + spiegazione

Include:
- "Il passo più dimenticato" (perché)
- Caso di frontiera in cui l'ordine cambia (se applicabile)

Vicino:
- Elenco di controllo della procedura ideale (sommario).`,
  thumbnail: ""
},
{
  id: "edu-quiz-048",
  title: "Quiz de 'quali dati manca': identifica le informazioni necessarie per decidere",
  area: "Formazione",
  category: "Forse",
  summary:
  "Criteri di formazione: sapere quali informazioni richiedere prima di applicare il concetto.",
  prompt: `Oggetto: [CREAMS QUI]

Crea 16 domande:
- ogni domanda descrive un caso incompleto
- chiede: "Quale informazione è più importante da chiedere?"

Opzioni A-D:
- dati plausibili, solo uno sblocca una buona decisione

Include:
- Risposta corretta
- Spiegazione (perché i dati sono la chiave)
- No. Cosa faresti con quei dati (passo successivo)
- Errore tipico: ordinare i dati irrilevanti

Vicino:
- Lista di 12 domande universali per chiarire i casi.`,
  thumbnail: ""
},
{
  id: "edu-quiz-049",
  title: "Quiz 'doppia verità': scegliere l'opzione 'più corretta' (nuances)",
  area: "Formazione",
  category: "Forse",
  summary:
  "Nuance avanzate: più di un'opzione può essere parzialmente vera, scegliere il meglio.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [alto]

Crea 18 domande A-D dove:
- 2 opzioni sono "true medium"
- 1 è chiaramente falso
- 1 è il più corretto (preciso, con ipotesi)

Include:
- Risposta corretta
- Spiegazione che compara perché è "più corretto"
- Assunzioni implicite
- Errore tipico

Vicino:
- Guida alla scelta 'il più corretto' negli esami (8 regole).`,
  thumbnail: ""
},
{
  id: "edu-quiz-050",
  title: "Pacchetto didattico: 5 quizze di 10 domande (pronto all'uso) + chiavi",
  area: "Formazione",
  category: "Forse",
  summary:
  "Forse pronto per la classe: 5 mini-valutazioni con chiavi e spiegazioni.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Sottotemi (se non, prospetto 5)

Creare 5 quizze separate (10 domande ciascuna):
- Quiz 1: fondazioni
- Quiz 2: implementazione
- Quiz 3: errori comuni
- Quiz 4: casi
- Quiz 5: integratore

Per ogni quiz:
- Domande A-D
- Risposta corretta
- Breve spiegazione per questione
- Difficoltà (1-5)

Vicino:
- Guida alla valutazione rapida
- Raccomandazione di cosa fare se la classe fallisce in un sub-item.`,
  thumbnail: ""
}];