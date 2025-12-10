// src/lib/prompts/text/edu-planes-clase.js

export const textPromptsEduPlanesClase = [
{
  id: "edu-plan-001",
  title: "Piano di classe completa (60 min) con obiettivi, attività, valutazione e chiusura",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Crea un piano di 60 minuti con momenti, materiali, guida didattica e valutazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello educativo: [primario / secondario / liceo / università / corporate]
Tempo totale: 60 minuti
Dimensione del gruppo: []
Contesto (faccia / online / ibrido): []
Conoscenza precedente: []
Restrizioni (senza Internet, risorse limitate, ecc.): []

Creare un piano dettagliato di classe iper con:
1) Obiettivi di apprendimento (5) utilizzando verbi misurabili (Bloom).
2) Criteri di successo (quale prova vedrò di sapere che l'hanno fatto).
3) Ordine del giorno al minuto (min 0-60) con:
- cosa fa l'insegnante (breve sceneggiatura)
- quello che fa lo studente
- risorse / materiali
- istruzioni esatte (testo da dire in classe)
- possibili errori / domande e come rispondere
4) Attività centrale (apprendimento attivo):
- passo dinamico passo dopo passo
- ruoli (se applicabili)
- esempi e controcampioni
5) Valutazione della formazione:
- 6 domande veloci + risposte attesi
- controllo dell'osservazione
(6) Vicino:
- sintesi in 3 proiettili
- "Exit ticket" (3 domande) con criteri di correzione
7) Compito / estensione (2 opzioni: facile e impegnativo).
(8) Adattazioni:
- per studenti ritardati
- per avanzati
- per diverse esigenze (assistenza, lingua, ecc.).`,
  thumbnail: ""
},
{
  id: "edu-plan-002",
  title: "90 min piano di classe (approfondimento) + guida alle domande",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Seminario con lettura, domande, dibattito strutturato e partecipazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello: [università avanzata / laurea / corporate]
Durata: 90 min
Lettura base (se presente): [paste / descrivere]

Progetta un seminario completo:
1) Obiettivi (4-6) e concetti chiave (10).
2) Preclasse:
- 3 compiti di preparazione (lettura guidata)
- 8 domande di lettura (2 facili, 4 calze, 2 difficili)
3) Ordine al minuto (0-90):
- apertura (5-10): inquadratura, aspettative
- discussione guidata (40-50): sequenza di domande con "richiedi"
- attività (20): dibattito di squadra / fishbowl / think-pair-share
- chiusura (10): asporto + sintesi
4) Banca delle domande:
- 12 domande socratiche
- 6 domande "trappola" per vedere la vera comprensione
- 6 domande di applicazione per casi reali
5) Valutazione:
- voce di partecipazione (4 criteri x 4 livelli)
- biglietto di uscita (3) e come qualificarlo
(6) Piano B:
- se il gruppo non partecipa, cosa fai (strategie specifiche).`,
  thumbnail: ""
},
{
  id: "edu-plan-003",
  title: "Piano di classe inclinato (classe invertita) con microsezione e pratica",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Design invertito: pre-classe, classe pratica e post-class con follow-up.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata in classe: 50-70 min
Piattaforma: [Google Classroom / Nozione / Moodle / Nessuno]

Crea un piano invertito:
1) Preclass (20-40 min):
- microsezione (scritto + proiettili)
- lettura breve (supplemento di 250 parole)
- mini-quiz di 8 domande (con risposte)
2) In classe (schedule al minuto):
- riscaldamento 5 min
- pratica guidata 15 min (ad esempio risolto)
- lavoro in squadre 25 min (casi)
- vicino 10 min (retro + dubbi)
3) Post-class:
- attività di consolidamento (2 livelli)
- riflessione (questione mecognitiva)
- criterio di valutazione (intestazione semplice)
(4) Note:
- errori tipici
- come rilevare chi non ha capito e come re-teach rapidamente.`,
  thumbnail: ""
},
{
  id: "edu-plan-004",
  title: "Piano di classe basato su progetto di 2 settimane (PBL): consegnabili e intestazioni",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Progetto completo: domanda guida, fasi, consegnabili, intestazioni e valutazione.",
  prompt: `Oggetto / problema: [GRIDA QUI]
Livello:
Durata: 2 settimane
Sessioni: [quanti e quanti minuti]
Risorse disponibili: []

Progetta un PBL completo:
1) Domanda di guida (questione guida) + criteri di un buon risultato.
2) Prodotto finale: quello che forniscono (formato, requisiti, esempio).
3) Fasi (con calendario):
- ricerca
- design
- prototipo / progetto
- feedback
- consegna finale
4) Consegna per fase (con lista di controllo).
5) Rubrica:
- voce finale del prodotto (4 criteri x 4 livelli)
- voce di processo (partecipazione, iterazione, prove)
6) Mini-lessons "just-in-time" (5 microrezioni) per sostenere.
(7) Differenziazione:
- ruoli per squadra
- supporto per supporti
- estensione per avanzato
(8) Valutazione:
- autovalutazione + co-valutazione (forme + criteri)
- come evitare il free-ripping (meccanismi).`,
  thumbnail: ""
},
{
  id: "edu-plan-005",
  title: "Piano di classe per competenze: pensiero critico (con casi e fallacies)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Classe progettata per il pensiero critico: casi, fallacies, dibattito e valutazione.",
  prompt: `Capacità dell'obiettivo: pensiero critico
Contesto / tema: [CREAMS QUI]
Livello:
Durata: 60-90 min

Creare un piano dettagliato con:
1) Obiettivi (Bloom) e criteri di successo.
2) Mini-lesson (10 min): concetti chiave (fallacies, prove, inferenza).
3) Attività centrale (30-40 min):
- 3% - casi con argomenti
- gli studenti devono identificare: affermazione, prova, supposizione, fallacia, conclusione
- guida di lavoro passo-passo
4) Discussione strutturata:
- formato (pro / contra)
- regole e turni
- Domande moderatori
5) Valutazione:
- voce (chiarità, prove, logica, rispetto)
- biglietto di uscita (3)
(6) Materiale didattico:
- sceneggiatura di frasi per reindirizzare le discussioni e correggere fallacies inumiditi.`,
  thumbnail: ""
},

{
  id: "edu-plan-006",
  title: "Piano di classe 'Active Learning' con domande e rivoco",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Implementare l'istruzione peer: domande concettuali, discussione e rivoto.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 50-75 min

Designer Peer Allenamento classe di stile:
1) Obiettivi (4-6).
2) Avvertimento: 5 min (questione di cancellazione).
3) ciclo IP (ripetto 5 volte):
- domanda concettuale (A-D) con veri distrattori
- 1° voto
- discussione tra pari (2-3 min) con messaggio di conversazione
- 2° voto
- spiegazione dell'insegnamento (che dire e cosa non dire)
4) Include 10 domande IP pronte (con risposte e spiegazioni).
5) Strategia se il revoto peggiora le risposte (cosa fai).
6) Valutazione rapida alla fine (biglietto di uscita + voce minima).`,
  thumbnail: ""
},
{
  id: "edu-plan-007",
  title: "Piano di classe online (Zoom / Meet) con interazione reale e antifatica",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "La classe online può essere gestita con dinamiche, pause, sale di rottura e valutazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min
Strumenti: [Zoom / Meet / Miro / Jamboard / Nessuno]

Creare un piano online:
1) Standard e dinamiche (camera, chat, partecipazione) con script di 60 secondi.
2) Ordine del giorno al minuto (0-60) compreso:
- microsegmenti di 6-10 min
- pause attive (2)
- Attività di rottura (1-2 giri)
- live survey / quiz (10 domande)
(3) Materiali:
- scivoli: struttura consigliata (8-10)
- il personale dello studente (testo)
(4) Gestione partecipativa:
- come chiamare studenti scomodi
- strategie per i silenzi
5) Valutazione:
- prova minima (capture, risposta, mini task)
- voce espressa per qualificarsi in 5 min.`,
  thumbnail: ""
},
{
  id: "edu-plan-008",
  title: "Piano di classe con valutazione autentica: prodotto reale + pubblico reale",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Esso fornisce una valutazione autentica: il lavoro applicabile e le voci con criteri reali.",
  prompt: `Oggetto: [CREAMS QUI]
(Relazione, tutorial, proposta, demo, ecc.)
Audience reale: [team, class, community, client simulato]
Durata: [1 classe / 1 settimana]

Crea:
1) Obiettivi e criteri del prodotto (requisiti obbligatori).
2) Processo:
- fasi con tempi
- punti di controllo (punti di controllo)
(3) Intestazione:
- qualità tecnica
- chiarezza / comunicazione
- prova / giustificazione
- iterazione / miglioramento
(4) Retrofeeding:
- guida di feedback (NO sandwich; usare "impatto + evidenza + passo successivo")
- 2 round di feedback
(5) Antiplagio:
- come progettare per rendere difficile da copiare
- prove di processo richieste.`,
  thumbnail: ""
},
{
  id: "edu-plan-009",
  title: "Piano di sequenza didattica (3 classi) con progressione e valutazione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Tre sessioni connesse: introduzione, pratica, integrazione con la valutazione finale.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata per sessione: [50 / 60 / 90]
Obiettivo finale: []

Progetta una sequenza di 3 classi:
CLASSE 1 (introduzione):
- obiettivi, agenda per minuti, attivazione delle conoscenze precedenti
- mini-attività + valutazione della formazione

CLASSE 2 (pratica):
- pratica guidata + lavoro di squadra
- banca esercizio passo-passo + soluzioni

CLASSE 3 (integrazione):
- caso integratori / progetto breve
- valutazione sommaria + titolo

Inoltre:
- piano materiale
- glossario chiave
- errori tipici per classe + come correggerli.`,
  thumbnail: ""
},
{
  id: "edu-plan-010",
  title: "Piano di classe di laboratorio: ipotesi, esperimento, analisi e report",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Clase-lab: progettazione sperimentale, registrazione dei dati e rapporto con sezione.",
  prompt: `Tema / laboratorio: [GRIDA QUI]
Livello:
Durata: [90-120 min]
Materiali disponibili: []

Progetta un laboratorio:
1) Obiettivi e sicurezza (se applicabile).
2) Ipotesi e variabili:
- IV, VD, controlli
- previsioni
3) Procedura passo dopo passo con tempi.
4) Modello di raccolta dati (tabella nel testo).
(5) Analisi:
- quali calcoli / strumenti da utilizzare
- come interpretare i risultati
6) Relazione finale:
- struttura (IMRAD semplificato)
- titolo di valutazione
7) Errori comuni e risoluzione dei problemi.`,
  thumbnail: ""
},

{
  id: "edu-plan-011",
  title: "Piano di classe 'microteaching': insegnare un concetto difficile in 15 minuti",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Progetta un microlase super efficace: spiegazione + esempio + mini-check.",
  prompt: `Concetto duro: [CREAMS QUI]
Livello:
Tempo: 15 minuti

Microclase design con:
1) Obiettivo (1) e prova di successo (1).
2) Gancio (30s) + analogia (1).
3) Spiegazione in 3 passi (scrittura letterale).
4) Esempio di lavoro (passo per passo).
5) Mini-check (3 domande) con risposte e perché.
6) Errore tipico + come prevenirlo in una frase.
7) "Riepilogo di una frase" per lo studente da ricordare.`,
  thumbnail: ""
},
{
  id: "edu-plan-012",
  title: "UDL (Universal Design) piano di classe: accessi multipli e prove multiple",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Piano UDL inclusivo con opzioni di accesso, partecipazione e dimostrazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min

Crea un piano UDL:
1) obiettivi chiari (3-5) + criteri di successo.
2) Mezzi multipli di rappresentazione:
- 3 modi per spiegare il contenuto (testo, visivo descritto, esempio)
3) Mezzi multipli di azione / espressione:
- 3 modi per dimostrare l'apprendimento (quiz, mini-progetto, spiegazione orale)
(4) Mezzi multipli di impegno:
- 3 opzioni di business secondo interesse
5) ordine del giorno al minuto (0-60) con alternative.
(6) Disposizioni:
- attenzione
- lettura / scrittura
- lingua
- ansia quando partecipa
(7) Valutazione:
- voce flessibile + come qualificarsi correttamente.`,
  thumbnail: ""
},
{
  id: "edu-plan-013",
  title: "Piano di classe per la formazione aziendale (competenze di lavoro) con la pratica e la misura",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Formazione aziendale: obiettivi, simulazioni, KPI e trasferimento al lavoro.",
  prompt: `Capacità di lavoro: [GRIDA QUI]
Ruolo dei partecipanti: []
Durata: [60 / 90 / 120]
Contesto: [attrezzatura commerciale / supporto / operazioni / ecc.]

Sessione di designer:
1) Obiettivi misurabili e allineati (4) al KPI.
2) Ordine del giorno per minuti con microsegmenti.
(3) Simulazioni:
- 2 roll-play con script, ruoli, criteri
- controllo dell'osservazione
4) Casi effettivi:
- 3 casi tipici dell'azienda (se non ci sono, make up realistico)
5) Valutazione:
- pretest e posttest (8 domande ciascuna)
- piano di follow-up 7 giorni
(6) Trasferimento:
- "azioni di lunedì": 5 azioni concrete
- modello retrò settimanale.`,
  thumbnail: ""
},
{
  id: "edu-plan-014",
  title: "Piano di classe per insegnare con esempi e controesempi (concetti con limiti)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Il design si è concentrato sui limiti: esempi, controesempi e casi di confine.",
  prompt: `Tema / concetto: [GRIDA QUI]
Livello:
Durata: 60 min

Crea:
1) Obiettivi (4) e criteri di successo.
2) 6 esempi (facile a complesso) con spiegazione.
3) 6 controesempi (dove NON si applica) con spiegazione della presunta violazione.
(4) Attività:
- gruppi classificare i casi come "applica / non si applica / dipende"
- guida di discussione e giustificazione
5) Valutazione della formazione:
- 10 domande rapide (A-D) con risposte
(6) Vicino:
- controllo delle ipotesi prima di applicare il concetto.`,
  thumbnail: ""
},
{
  id: "edu-plan-015",
  title: "Piano di classe per l'apprendimento dei problemi (breve PBL): problema realistico in 1 sessione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "PBL in classe: problema, ricerca rapida, soluzione e riflessione.",
  prompt: `Oggetto: [CREAMS QUI]
Durata: 70-90 min
Livello:

Progetta una breve classe PBL:
1) problema realistico (descrizione 120-200 parole) con i dati iniziali.
(2) Obiettivi di apprendimento (5).
3) Agenda per minuti:
- capire il problema
- la generazione di ipotesi
- ricerca rapida (risorse)
- proposta di soluzione
- presentazione
- riflessione
(4) Materiali:
- Foglio di lavoro (domande guidate)
- modello di soluzione (criteria)
5) Valutazione:
- voce della soluzione (4 criteri x 4 livelli)
- rapida autovalutazione
(6) Debrief:
- quello che hanno imparato
- sarebbero diversi con altre informazioni.`,
  thumbnail: ""
},

{
  id: "edu-plan-016",
  title: "Piano di classe con gamification (missioni, punti, narrazione) senza perdere rigore",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Scommette attività: missioni e progressi con valutazione reale.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min
Narrativo: [sci-fi / fantasy / azienda / mistero]

Crea un piano gamified:
1) Storia quadro (1 paragrafo) + missione principale.
2) 3 missioni per difficoltà (facile / medio / difficile) allineate agli obiettivi.
3) Sistema di punto chiaro (che cosa segna e che cosa non).
4) Agenda per minuti e regole.
5) Materiali stampabili (in testo):
- carte di missione
- foglio di registrazione
6) Valutazione (intestazione) in modo che il gioco non è "solo gioco".
(7) Inclusione:
- come impedirgli di vincere solo il più veloce / più estroverso.`,
  thumbnail: ""
},
{
  id: "edu-plan-017",
  title: "Piano di classe per insegnare come scrivere (struttura, esempi, pratica e rubrica)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Classe per scrittura accademica o tecnica: struttura, bozza e feedback con titolo.",
  prompt: `Tipo di testo: [trial / abstract / report / posta formale]
Oggetto: [CREAMS QUI]
Livello:
Durata: 90 min

Design:
1) Obiettivi (5).
2) Mini-lesson:
- struttura del testo
- errori tipici
- buoni / cattivi esempi (2 in ciascuno)
3) Laboratorio di scrittura:
- modello di progetto (sezioni + richieste)
- tempo per fase (pianificazione, progetto, revisione)
4) Feedback:
- peer review guide (checklist)
- 2 tondi (macro e micro)
5. Denominazione:
- struttura, chiarezza, prove, stile, correzione
(6) Vicino:
- piano di miglioramento individuale (3 azioni per studente).`,
  thumbnail: ""
},
{
  id: "edu-plan-018",
  title: "Piano di lezione di lettura scolastica (come leggere le carte) con pratica reale",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Insegna a leggere i documenti: scansione, domande guida, grafico di reclamo e discussione.",
  prompt: `Disciplina: [CREAMS QUI]
Carta da usare (se avete): [collegamento o estratto]
Livello: [università / laurea]
Durata: 75-90 min

Classe di designer:
1) Obiettivi: (leggi rapidamente, identifica la tesi, il metodo, i risultati, i limiti).
(2) Strategia di lettura:
- 3 passaggi (5-7 min, 10-15 min, 20-30 min) con istruzioni
(3) Attività:
- costruire Quadro di Rivenzione in attrezzature
- rilevare 3 debolezze metodologiche
(4) Discussione:
- 8 domande guida
5) Valutazione:
- mini-quiz (10 domande) con risposte
- biglietto di uscita (3) + minimo intestazione
(6) Materiali:
- modello di note di lettura (testo).`,
  thumbnail: ""
},
{
  id: "edu-plan-019",
  title: "Piano di classe: preparare l'esame (strategie + pratica + metacognizione)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Sessione per migliorare le prestazioni: tecnica di studio, pratica e recensione di errore.",
  prompt: `Oggetto / tema: [GRIDA QUI]
Tipo di esame: [MCQ / test / problemi]
Livello:
Durata: 60-90 min

Design:
1) Obiettivi e criteri.
2) Mini-lesson (10-15 min):
- Pratica spaziosa
- interspersed
- richiamo attivo
3) Pratica:
- 15 domande (o 10 problemi) con soluzioni
- Timing e strategia del tempo
4) Analisi degli errori:
- modello per classificare gli errori (concetto / assunzione / procedura)
- formazione rapida (come correggere ogni tipo)
(5) Vicino:
- un piano individuale di 7 giorni per l'esame (giorno-giorno).`,
  thumbnail: ""
},
{
  id: "edu-plan-020",
  title: "Piano di classe con stazioni / rotazione (4 stazioni) per la pratica intensiva",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Rotazione della stazione: varia pratica e rapida valutazione per stazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60-80 min
Numero di stazioni: 4

Stazioni di progettazione:
1) Stazione 1: fondazioni (esercizi brevi) - 8 articoli
2) Stazione 2: implementazione (casi) - 3 casi
3) Stazione 3: errori comuni (diagnosi) - 6 elementi
4) Stazione 4: sfida (alto livello) - 4 articoli

Include:
- istruzioni esatte a ogni stazione
- tempo per stazione + rotazione
- foglio di risposta
- guida didattica (da osservare)
- valutazione della stazione (intestazione semplice)
Vicino:
- biglietto di sintesi e di uscita (3).`,
  thumbnail: ""
},

{
  id: "edu-plan-021",
  title: "Piano di classe con valutazione differenziata (3 livelli) senza ingiustizia",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Stessa concorrenza, tre livelli di attività; voce comune per una valutazione equa.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60-90 min

Crea:
1) Competenza unica (cosa dovrebbe essere in grado di fare lo studente).
2) Compito a 3 livelli:
- Livello 1 (supporto): guidato
- Livello 2 (standard): indipendente
- Livello 3 (challenge): estensione / trasferimento
(3) Voce unica (criteri comuni) applicabile a tutti i 3 livelli.
4) Agenda per minuti:
- Mino-lesson
- lavoro
- revisione
- vicino
5) Come assegnare livelli senza stigmatizzazione.
6) Come spostare gli studenti di livello durante la classe (strategia).`,
  thumbnail: ""
},
{
  id: "edu-plan-022",
  title: "Piano di classe per insegnare con analogie (e i loro limiti) + valutazione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Analisi ben fatte: quando servono, quando confondono e come valutare la comprensione.",
  prompt: `Concetto astratto: [CREAMS QUI]
Livello:
Durata: 50-60 min

Design:
1) 5 analogie diverse (di vita quotidiana) spiegando:
- che corrisponde a quello che
- dove l'analogia è rotta (limite)
2) Sequenza di insegnamento:
- analogia 1 → formalizzazione → contraexample → analogia 2
(3) Attività:
- gli studenti creano la loro analogia e la criticano con limiti
(4) Valutazione:
- quiz di 10 domande
- titolo di valutazione delle analogie
(5) Vicino:
- definizione formale finale (1-2 frasi) in modo da non rimanere sola con analogia.`,
  thumbnail: ""
},
{
  id: "edu-plan-023",
  title: "Piano di classe per la risoluzione dei problemi (insegnamento della modellazione → pratica guidata indipendente →)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Lo faccio / lo facciamo / lo fai.",
  prompt: `Tema del problema: [SCREAMS QUI]
Livello:
Durata: 70-90 min

Crea:
1) Obiettivi e criteri.
(2) I GU (formazione della modellazione):
- 1 esempio di problema risolto con spiegazione verbale (script)
3) Noi facciamo (esercizio guidato):
- 2 problemi con passi guidati + domande di gruppo
4) Lo fai (prassi indipendenti):
- 6 problemi scalati (facile → difficile) con risposte
(5) Differenziazione:
- indizi per coloro che sono bloccati
- sfida extra per avanzato
(6) Valutazione:
- controllo del processo
- biglietto di uscita con 2 problemi brevi.`,
  thumbnail: ""
},
{
  id: "edu-plan-024",
  title: "Class plan to 'teach with error': usare gli errori da imparare (non punire)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Classe progettata intorno a errori tipici, con correzione rispettosa e apprendimento profondo.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min

Design:
1) Obiettivi (4-6).
2) Elenco di 8 errori tipici dell'argomento (ad esempio).
(3) Attività centrale:
- hai soluzioni sbagliate
- gli studenti diagnosticano l'errore (concetto / assunzione / procedura)
- riscrivere la soluzione corretta
(4) Scrittura del Maestro:
- frasi per normalizzare l'errore
- come correggere senza umiliare
5) Valutazione:
- 10 domande diagnostiche (A-D) con risposte
- biglietto di uscita: "spiega 1 errore e come evitarlo"
(6) Vicino:
- controllo anti-error (10 articoli).`,
  thumbnail: ""
},
{
  id: "edu-plan-025",
  title: "Piano di classe interdisciplinare: collega 2 soggetti con un caso inclusivo",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Integra due aree: obiettivi incrociati, attività centrale e valutazione integrata.",
  prompt: `Oggetto A: []
Oggetto B: []
Tema di integrazione: [CREMA QUI]
Livello:
Durata: 90 min

Crea:
1) Obiettivi di A (3) e B (3) + obiettivi integrati (3).
2) Caso inclusivo (150-250 parole).
(3) Attività:
- le squadre risolvono il caso applicando entrambi i quadri
- guida passo-passo
4) Prodotto finale:
- formato + criteri
5) voce integrata (4 criteri x 4 livelli).
(6) Vicino:
- riflessione: ciò che A ha contribuito, ciò che B ha contribuito, e ciò che ho imparato integrando.`,
  thumbnail: ""
},

{
  id: "edu-plan-026",
  title: "1: 1 piano di classe di tutoring (diagnosi → insegnamento → pratica → piano personale)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Formato di tutoring: rileva lacune, insegna, pratiche e lascia un curriculum.",
  prompt: `Oggetto: [CREAMS QUI]
Livello degli studenti: []
Tempo: 45-60 min
Obiettivo (revisione / progetto): []

Crea un piano di tutoraggio:
1) Diagnosi (10 min):
- 8 domande rapide con le risposte attesi
- come interpretare i guasti
2) Istruzione focale (15 min):
- spiegazione a 3 passi + esempio forte
3) Pratica (15-20 min):
- 5 esercizi phased + soluzioni
- tracce graduate (hint 1 / 2 / 3) per esercizio
4) Chiudi (5 min):
- Riepilogo degli studenti (che dire)
- Piano 7 giorni (da giorno a giorno)
- semplice metrico per misurare il progresso.`,
  thumbnail: ""
},
{
  id: "edu-plan-027",
  title: "Piano unitario (4 settimane): obiettivi, sequenze, valutazioni e materiali",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Unità completa: settimana a settimana, con valutazione formativa e sommaria.",
  prompt: `Tema / unità: [SCREAMING HERE]
Livello:
Durata: 4 settimane
Incontri settimanali: []
Durata per sessione: []

Progetta l'unità:
1) Obiettivi generali (6) + mappa del concetto.
2) Settimana 1-4:
- obiettivi specifici
- attività chiave
- valutazione della formazione
- compito
(3) Valutazione sommaria:
- tipo (esame / progetto / portafoglio)
- voce e criteri
(4) Materiali:
- letture, video, attività
- versioni a bassa risorsa (low-tech)
(5) Differenziazione:
- supporto e estensione
(6) Rischi:
- dove di solito si bloccano e come evitarlo.`,
  thumbnail: ""
},
{
  id: "edu-plan-028",
  title: "Piano di classe con apprendimento cooperativo (role, interdipendenza e co-valutazione)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Real cooperativa: ruoli, responsabilità e co-valutazione per evitare la libera circolazione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60-90 min
Dimensioni dell'attrezzatura: 3-5

Crea:
1) Obiettivi e criteri.
2) ruoli di squadra (4-5 ruoli) con chiare responsabilità.
(3) Attività cooperativa:
- prodotto finale
- passi
- interdipendenza positiva (che richiede cooperazione)
(4) Contabilità:
- prove individuali + prove di gruppo
- co-valutazione (formato + criteri)
5. Denominazione:
- qualità del prodotto
- collaborazione (criteri osservabili)
(6) Piano B:
- cosa fai se c'è conflitto o uno studente non partecipa.`,
  thumbnail: ""
},
{
  id: "edu-plan-029",
  title: "Piano di classe per la valutazione orale: formazione + titolo + domande",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Preparazione per esame orale: pratica guidata, domande difficili e rubriche.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min

Design:
1) Obiettivi (4-5).
2) Mini-lesson:
- come strutturare una risposta orale (4-step template)
3) Banca delle domande:
- 12 domande (facile da difficile)
- 6 domande "per approfondire"
- risposte modello (sommario)
4. Pratica:
- dinamica da coppie
- Timeter
- checklist feedback immediato
5. Denominazione:
- chiarezza, rigore, esempi, limiti, comunicazione
(6) Vicino:
- piano di miglioramento individuale (3 azioni).`,
  thumbnail: ""
},
{
  id: "edu-plan-030",
  title: "Piano di classe per chiusura unità (smart recensione + recensione pratica + piano)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Chiusura: revisione con interlock, revisione della pratica e del piano di consolidamento.",
  prompt: `Unità / tema: [SCREAMS QUI]
Livello:
Durata: 90 min

Crea:
1) diagnosi rapida (10 min): 12 domande (A-D) con risposte.
2) Recensione intelligente (30 min):
- intervallato da sottotemi (come alternare)
- minim- spiegazioni di 6 confusioni tipiche
3) Recensione della pratica (30 min):
- 20 domande (o 10 problemi) con chiave
4) recensione errore (15 min):
- modello per classificare gli errori (concetto / assunzione / procedura)
- formazione rapida per tipo
(5) Chiudere (5 min):
- 7 giorni post-unità + piano metrico.`,
  thumbnail: ""
},

{
  id: "edu-plan-031",
  title: "Piano di classe con valutazione del portafoglio (prove, criteri, calendario)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Progetta un portafoglio: prove, tempi di consegna e voci chiare.",
  prompt: `Tema / corso:
Livello:
Durata del portafoglio: [2-6 settimane]

Crea:
1) Qual è il portafoglio e quali prove dovrebbero includere (6-10 prove).
2) Orari di consegna e checkpoint (settimanale).
3. Denominazione:
- qualità delle prove
- riflessione
- iterazione / miglioramento
- presentazione / chiarezza
(4) Modelli:
- foglio di prova (cosa ho fatto, perché, quello che ho imparato, il prossimo miglioramento)
- controllo recensione
5) Come valutare in modo equo:
- criteri minimi
- come evitare "riempire"
- come gestire ritardi e recensioni.`,
  thumbnail: ""
},
{
  id: "edu-plan-032",
  title: "Piano di classe per insegnare 'metacognizione': come studiare e monitorare la comprensione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Sessione per imparare a imparare: monitoraggio, riviste di studio e strategie.",
  prompt: `Oggetto / tema: [GRIDA QUI]
Livello:
Durata: 60 min

Design:
1) Obiettivi e criteri.
2) Mini-lesson (10-12 min):
- illusione della concorrenza
- richiamo attivo
- ripetizione spaziata
- interspersed
(3) Attività:
- gli studenti fanno un mini-test
- prevedere il tuo punteggio (calibrazione)
- confrontare e regolare la strategia
4) Strumenti:
- modello di carta di studio (testo)
- Lista di controllo di "ho capito davvero?"
(5) Vicino:
- un curriculum di 10 giorni (con tempo e metrica).`,
  thumbnail: ""
},
{
  id: "edu-plan-033",
  title: "Piano di classe 'dibattito con prove': ricerca veloce + argomento + titolo",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Discussione basata sulle prove: ruoli, ricerca rapida e valutazione rigorosa.",
  prompt: `Tema di discussione: [CREAMS QUI]
Livello:
Durata: 80-90 min

Crea:
1) Obiettivi (argo con prove, confuta, riconosce limiti).
2) Roles: pro / contra / giudici / verificatori.
(3) Ricerca rapida:
- domande guida
- come valutare le fonti (intestazione semplice)
(4) Discussione:
- struttura con tempi (apertura, argomenti, rimbalzo, chiusura)
- script di moderazione
5) Prove:
- modello per registrare rivendicazioni → prove →
(6) Valutazione:
- titolo (prove, logica, chiarezza, rispetto)
- auto e co-valutazione
(7) Vicino:
- riflessione: cosa ha cambiato la sua posizione e perché.`,
  thumbnail: ""
},
{
  id: "edu-plan-034",
  title: "Piano di classe 'learning by design': costruire qualcosa (artefatto) per capire il concetto",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Design building: creare un artefatto per interiorizzare il concetto.",
  prompt: `Concetto / tema: [SCREAMS QUI]
Artefatto da costruire: [modello, infografia, simulazione, mappa, ecc.]
Livello:
Durata: 60-90 min

Crea:
1) Obiettivi e criteri del manufatto.
2) Materiali e restrizioni.
3) Agenda per minuti:
- Mino-lesson
- design / disegno
- costruzione
- revisione
- miglioramento
- presentazione
4) Modello di progettazione (questioni guida).
5) La voce artefatto (4 criteri x 4 livelli).
(6) Vicino:
- connessione esplicita: quale parte del manufatto rappresenta quale concetto
- 3 domande per trasferire l'apprendimento.`,
  thumbnail: ""
},
{
  id: "edu-plan-035",
  title: "Piano di classe «valutazione della formazione continua»: 6 controlli durante la sessione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Inserire i controlli di formazione ogni pochi minuti: domande, mini-task e correzione rapida.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min

Progetta una classe con 6 punti di valutazione della formazione:
- Check # 1 (min 5)
- Check # 2 (min 12)
- Check # 3 (min 20)
- Check # 4 (min 32)
- Check # 5 (min 45)
- Check # 6 (min 55)

Per ogni controllo:
- formato (questione, esercizio, voto, spiegazione in 1 frase)
- risposta prevista
- cosa farebbe l'insegnante se il 30% fallisse contro se il 70% fallisse (ramification)
Inoltre:
- obiettivi, orari per minuti e chiusura con biglietto di uscita.`,
  thumbnail: ""
},

{
  id: "edu-plan-036",
  title: "Piano di classe per studenti a bassa motivazione: pertinenza, autonomia e rapida realizzazione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Design motivazionale: rilevanza, scelta, vittorie veloci e clima di classe.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min
Problema: bassa motivazione / apatia / resistenza

Crea un piano:
1) Uncino basato sulla pertinenza (caso reale) + script.
(2) Autonomia:
- 3 opzioni di attività (stessa competenza)
3) Successo rapido:
- Mini- 5 min compito con "vitto"
(4) Attività centrale:
- dinamica collaborativa con ruoli
5) Feedback:
- frasi e tecniche per rafforzare il progresso reale
(6) Valutazione:
- prova minima e biglietto di uscita semplice
(7) Vicino:
- "perché questo è importante" in 1 minuto (scritto).`,
  thumbnail: ""
},
{
  id: "edu-plan-037",
  title: "Piano di classe per insegnare concetti astratti: cemento → rappresentazione → astrazione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Sequenza CRA: cemento, rappresentazioni e astrazione con valutazione.",
  prompt: `Concetto astratto: [CREAMS QUI]
Livello:
Durata: 60 min

Progetti con CRA:
1) cemento (15 min):
- Attività manipolativa o simulata (senza materiali costosi)
2) Rappresentanza (20 min):
- diagrammi descritti + esempi
3) Astrazione (15 min):
- definizione formale + esercizi
(4) Valutazione della formazione:
- 10 domande (mix)
(5) Differenziazione:
- supporto e estensione
(6) Vicino:
- sintesi di 3 passi per ricordare il concetto.`,
  thumbnail: ""
},
{
  id: "edu-plan-038",
  title: "Piano di classe per recuperare ritardo (rimediazione) con diagnosi e microgruppi",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Rimediazione: diagnosi, microgruppi vuoti e prova di miglioramento.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60-90 min

Crea:
1) diagnosi iniziale (10 min):
- 12 articoli con risposte
- come raggruppare gli studenti secondo i risultati
(2) Microgruppi:
- Gruppo A (gap 1): mini-lesson + 4 esercizi
- Gruppo B (gap 2): mini-lesson + 4 esercizi
- Gruppo C (gap 3): mini-lesson + 4 esercizi
(3) Rotazione o lavoro parallelo:
- istruzioni esatte
- cosa fa l'insegnante in ogni minuto
(4) Valutazione finale (10 min):
- 8 articoli simili
- interpretazione: è migliorata?
5) Piano di sorveglianza:
- compiti di 7 giorni (microaree).`,
  thumbnail: ""
},
{
  id: "edu-plan-039",
  title: "Piano di classe con 'apprendimento basato sulla storia': insegnare il tema con una storia",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Apprendimento narrativo: storia, punti di decisione e riflessione.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60-75 min
Storia genere: [mistero / avventura / azienda / sci-fi]

Design:
1) Storia quadro (200-350 parole) con 3 momenti di decisione.
2) In ogni decisione:
- opzioni di azione
- questione accademica relativa (che si applica il concetto)
- risposta prevista e spiegazione
(3) Attività:
- le squadre scelgono le decisioni e giustificano
(4) Valutazione:
- 10 domande quiz basate sulla storia (con risposte)
(5) Vicino:
- quali concetti sono stati imparati e come guardano nella "vita reale".`,
  thumbnail: ""
},
{
  id: "edu-plan-040",
  title: "Piano di classe Capstone (progetto finale) con consegnabili, titolo e difesa",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Progetto completo finale: consegnabili, revisione, presentazione e difesa con titolo.",
  prompt: `Corso / unità: [SCREAMS QUI]
Livello:
Durata: [1-4 settimane]
Prodotto finale: []

Design Capstone:
1) Progetto Breve (oggettiva, requisiti, restrizioni).
2) Consegnabile:
- proposta
- progetto / prototipo
- consegna finale
- difesa / presentazione
3) Calendario con pietre miliari e punti di controllo.
(4) Rubrica:
- prodotto finale
- processo e iterazione
- difesa orale (questioni e criteri)
5) Antiplagio / autenticità:
- prove di processo richieste
(6) Modelli:
- proposta
- log di lavoro
- Controllo finale.`,
  thumbnail: ""
},

{
  id: "edu-plan-041",
  title: "Piano di classe per insegnare con i casi (metodo di caso): lettura, analisi e discussione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Metodo del caso: preparare, analizzare, discutere e decidere con criteri chiari.",
  prompt: `Caso (se avete, colpite; se non, descrivere il soggetto): []
Livello:
Durata: 90 min

Crea:
1) Obiettivi (5).
2) Preclasse:
- domande guida di lettura (10)
- mini-quiz (8) con risposte
3) In classe:
- orario al minuto
- mappatura del caso (attori, obiettivi, restrizioni)
- analisi (alternativi + trade-off)
- decisione finale + giustificazione
4) Insegnante domanda banca (12) con richieste.
5) Valutazione:
- partecipazione e analisi
- biglietto di uscita: raccomandazione in 5 linee + 2 rischi + 1 mitigazione.`,
  thumbnail: ""
},
{
  id: "edu-plan-042",
  title: "Piano di classe per insegnare 'trasferimento': da esempio a nuovo caso",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Design per il trasferimento: esempio base, variazioni e nuovo caso non visto.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60-75 min

Crea:
1) Esempio di base (solto) + spiegazione.
2) 4 variazioni nell'esempio:
- cambia un'ipotesi
- cambia un parametro
- cambiare l'obiettivo
- aggiunge una restrizione
3) Nuovo (non visto) caso da risolvere in squadre:
- modello di soluzione (steps)
(4) Valutazione:
- la voce che premia il trasferimento (non memoria)
- 8 domande di chiusura (con risposte)
(5) Vicino:
- 5 euristiche per riconoscere "questo è lo stesso modello".`,
  thumbnail: ""
},
{
  id: "edu-plan-043",
  title: "Piano di classe con IA come tutor (sicuro ed etico): sollecitazioni, limiti e verifica",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Integrazione di IA: Prompti per l'apprendimento, la verifica e la prevenzione della dipendenza.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60-90 min
Strumento IA: [ChatGPT / altro]
Politica del corso: [permesso / limitato / vietato nelle valutazioni]

Creare un piano:
1) Obiettivi: apprendimento + alfabetizzazione IA.
2) Regole etiche:
- ciò che è permesso e ciò che non è
- come citare l'uso di IA
- come verificare
(3) Attività:
- gli studenti usano IA per spiegare il concetto e generare esempi
- quindi è necessario controllare con fonti / note e errori corretti
4) Assicurazione (10) per tutoraggio:
- spiegare, chiedere, rilevare gli errori, generare la pratica
5) Valutazione:
- l'apprendimento delle prove senza IA (uscita biglietto o mini-test)
(6) Vicino:
- elenco di verifica (10 passaggi).`,
  thumbnail: ""
},
{
  id: "edu-plan-044",
  title: "Un piano di classe con l'apprendimento basato sui dati: mini-dataset e conclusioni",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Classe per analizzare i dati: domande, presupposti, analisi e conclusioni responsabili.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 75-90 min

Include:
1) Mini-dataset (inventato se non disponibile) con 12-20 righe e 4-6 variabili (tavolo in testo).
2) Domande di ricerca (5) sul dataset.
(3) Attività:
- pulizia di base
- analisi (descrittiva, comparazione, semplice correlazione se applicabile)
- visuale consigliata (descritto)
(4) Guida all'interpretazione (cosa si può concludere e cosa non si può concludere).
5) Valutazione:
- breve relazione (struttura e sezione)
- mini-quiz (10 domande) con risposte.
.`,
  thumbnail: ""
},
{
  id: "edu-plan-045",
  title: "Real World Class Plan: collega il tema a 3 professioni e 3 casi",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Pertinenza professionale: casi per professione, attività e valutazione applicata.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 60 min

Crea:
1) Introduzione con rilevanza:
- 3 professioni dove viene utilizzato
- 3 casi reali (mini) per professione
(2) Attività centrale:
- le squadre scelgono 1 professione e risolvono 1 caso
- soluzione modello + criteri
3) Presentazione del fulmine:
- 2 min per squadra
(4) Valutazione:
- voce applicata (accuratezza, ragionamento, comunicazione, limiti)
- biglietto di uscita: "come lo useresti nella tua vita / lavoro"
(5) Vicino:
- ponte al prossimo tema (che cosa viene e perché).`,
  thumbnail: ""
},

{
  id: "edu-plan-046",
  title: "Piano breve della classe di intervento (30 min): mini-oggettiva, pratica e valutazione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Super efficiente classe breve: obiettivo unico, pratica concreta e prove alla fine.",
  prompt: `Oggetto: [REAMS QUI]
Livello:
Durata: 30 min

Design:
1) Obiettivo unico ( misurabile).
2) Ordine al minuto (0-30) con:
- Gancio 2 min
- spiegazione 8 min
- pratica guidata 10 min
- pratica veloce 7 min
- valutazione 3 min
3) 6 esercizi di pratica (breve) con risposte.
4) Biglietto di uscita (2 articoli) + chiave.
5) Nota didattica: errori tipici e come correggerli in 1 frase.`,
  thumbnail: ""
},
{
  id: "edu-plan-047",
  title: "Piano di classe 'apprendimento per confronto': A vs B (modelli, teorie, metodi)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Insegna confrontando due approcci: somiglianze, differenze, quando usare ciascuno.",
  prompt: `Approccio A: []
Approccio B: []
Oggetto: [CREAMS QUI]
Livello:
Durata: 60-75 min

Crea:
1) Tabella comparativa A vs B (iniziale).
2) Ordine del giorno per minuti:
- spiegazione di A
- spiegazione di B
- confronto
- attività di scelta del metodo con i casi
3) 6 casi:
- per ogni caso: che è appropriato e perché (risposta prevista)
(4) Valutazione:
- 12 domande (MCQ) con risposte e spiegazioni
(5) Vicino:
- albero di decisione testuale per scegliere A vs B.`,
  thumbnail: ""
},
{
  id: "edu-plan-048",
  title: "Piano di classe per insegnare vocabolario / terminologia tecnica (lucenziario vivo)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Costruisce la terminologia: definizioni, esempi, usi corretti e quiz.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: 50-60 min

Design:
1) Elenco di 15-25 termini chiave (se non, proporli).
2. attività "Live glossary":
- l'attrezzatura crea definizioni + esempi + esempi
- cross-review
3) Guida agli insegnanti per correggere le definizioni senza imporre.
(4) Valutazione:
- 20 domande quiz (15 MCQ + 5 completo) con risposte
(5) Vicino:
- modello per continuare ad espandere il glossario durante il corso.`,
  thumbnail: ""
},
{
  id: "edu-plan-049",
  title: "Piano di classe per preparare (orali) presentazioni con pratica e intestazione",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Workshop di presentazione: struttura, storia, diapositive, pratica, feedback e sezione.",
  prompt: `Argomento per presentazioni: [GRIDA QUI]
Livello:
Durata: 90 min

Crea:
1) Obiettivi (5).
2) Mini-lesson:
- struttura (buco → problema → idea → prova → chiusura)
- scivoli (regole semplici)
3) Workshop:
- modello di script (testo)
- pratica in coppie (tonde)
- elenco dei feedback
(4) Rubrica:
- chiarezza, struttura, prove, voce, gestione del tempo
5) Banca di "problemi difficili" (10) e come rispondere senza rinunciare.
(6) Vicino:
- piano di miglioramento individuale 7 giorni.`,
  thumbnail: ""
},
{
  id: "edu-plan-050",
  title: "All-field class plan: genera piano per tema e contesto (modello riutilizzabile)",
  area: "Formazione",
  category: "Piani di classe",
  summary:
  "Modello universale per creare piani di classe coerenti e misurabili su qualsiasi argomento.",
  prompt: `Oggetto: [CREAMS QUI]
Livello:
Durata: []
Contesto: [faccia / online / ibrida]
Risorse: []
Obiettivo del corso: []

Voglio un elenco modello riutilizzabile per copiare / incollare che include:
1) Obiettivi (Bloom) + criteri di successo.
2) Attivazione delle conoscenze precedenti (3 dinamiche).
3) Istruzioni dirette (breve script) + esempi.
4) Pratica guidata + pratica indipendente.
5) Differenziazione (supporti e estensioni).
6) Valutazione della formazione (minimo 5 assegni) + biglietto di uscita.
7) Compito e seguito.
(8) Materiali pronti:
- Scheda di lavoro
- quiz (10 domande) con chiave
- Breve voce del prodotto/attività
9. Sezione "Rischio":
- 8 errori tipici e come rispondere dal vivo.`,
  thumbnail: ""
}];