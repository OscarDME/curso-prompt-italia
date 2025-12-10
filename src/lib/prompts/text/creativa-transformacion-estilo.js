// src/lib/prompts/text/creativa-transformacion-estilo.js

export const textPromptsCreativaTransformacionEstilo = [
{
  id: "crea-est-001",
  title: "Riscrittura totale: 1 testo, 12 stili (con guida di coerenza)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Trasforma un testo di base in 12 stili diversi pur mantenendo il significato e migliorando la voce.",
  prompt: `Tieni il testo di base (100-400 parole) e dimmi:
1) udito (che lo leggerà).
2) Obiettivo (pensare, vendere, spiegare, provocare).
3) Dominante (e un'emozione nascosta).
4) 5 parole proibite (cliché non vuoi).
5) Livello di Cruità (0-10).

Compito:
A) Estrae il "core" del testo in 5 proiettili (che non possono cambiare).
B) identifica la voce attuale: ritmo, record, metafore, distanza emotiva (breve diagnosi).
C) Riscrivere il testo in questi 12 stili (ogni versione 150-250 parole):
1) Minimalista (linee corte, tagli duri)
2) Lírico-cinematografia (immagini sensoriali)
3) Noir (voce su off, ironia)
4) Humor asciutto (Deadpan)
5) Realismo sporco (concreto, ruvido)
6) Adulto romantico (calda, senza cursilery)
7) Errore sottile (tensione, innuendo)
8) Intimate Sci-fi (metodo tecnologico)
9) Elegante fantasia (regole poetiche)
10) Test personale (onestà diretta)
11) Storia del bambino (semplice, simbolico)
(12) Lettera confessionale (sottotesto)

D) Per ogni versione, aggiungere:
- 1 frase "firma" (la migliore linea).
- 3 decisioni di stile (perché suona così).
- 1 rischio (dove potrebbe essere superato).

Alla fine:
- Raccomandare lo stile migliore per il bersaglio e dirmi come mescolare 2 stili senza rompere coerenza.`,
  thumbnail: ""
},
{
  id: "crea-est-002",
  title: "Style Clone: imita una 'voce' non accoppiata (impronta linguistica)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Imita le caratteristiche di stile (ritmo, sintassi, immagini) di un autore / voce senza replicare il contenuto letterale.",
  prompt: `Dammi...
- No. Un autore / voce di riferimento (o descrive la voce: "breve frasi, cinismo, metafore urbane...").
- Oggetto del testo da scrivere.
- Formato (storia, poesia, monologo, scena).
- Lunghezza (300-900 parole).
- 6 parole per apparire.

Compito:
1) Definire un "impronta di stile" con 10 regole osservabili, per esempio:
- Lunghezza media della frase
- Tipo di metafora (concreto / astratto)
- livello di ironia
- Uso delle domande
- Rhythm (taglio, ripetizioni)
2) Scrivere il testo in conformità alle 10 regole.
3) Quindi creare una versione "ancora più tua":
- Tieni sei regole.
- Rompere 4 regole con intenti

Alla fine:
- Elenco 8 funzioni che sei riuscito a imitare senza copiare il contenuto.`,
  thumbnail: ""
},
{
  id: "crea-est-003",
  title: "Cambio tono chirurgico: stesso testo, 6 toni con lo stesso messaggio",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere cambiando il tono senza cambiare l'idea: utile per adattarsi al pubblico.",
  prompt: `Incolla il testo di base e dimmi:
- Pubblico (A) e pubblico (B).
- Emozione che non dovrebbe essere persa.
- livello desiderato di formalità (0-10).

Riscrivere il testo in 6 toni (150-300 parole ciascuna):
1) Serena e matura
2) Urgente e teso (non sovrastato)
3) Elegante ironico
4) Tierno-Intima
5) Moderato umorismo nero
(6) Difficile minimalista

Per ogni versione, aggiungere:
- "Seeds" di tono: 5 parole / risorse utilizzate.
- 1 linea di chiusura alternativa.

Alla fine:
- Raccomanda che usare per (A) e che per (B) e perché.`,
  thumbnail: ""
},
{
  id: "crea-est-004",
  title: "Traduzione creativa: da prosa a poesia e da poesia a prosa",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Girare un testo in una poesia (gratuito verso) e poi tornare a prosa senza perdere l'anima.",
  prompt: `Incollare il testo (120-400 parole) e dirmi:
- Articolo
- Tono
- 3 immagini richieste
- Parole proibite (3-8)

Do:
A) Estrae 12 immagini "core" (frasi o dettagli visivi).
B) Convertire il testo in un poema di versi libero (28-42 versi):
- 5 sensi
- 3 ripetizioni deliberate
- mezzo giro (rivelazione)
C) Convertire la poesia in prosa poetica (350-600 parole):
- brevi paragrafi
- musica
- fine memorabile (max. 12 parole)

Alla fine:
- Spiegare ciò che è stato vinto e ciò che è stato perso in ogni trasformazione (5 proiettili).`,
  thumbnail: ""
},
{
  id: "crea-est-005",
  title: "Dal cliché all'immagine: riscrittura antifrasi fatta (livello pro)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Rileva i cliché e li sostituisce con immagini originali ancorate a oggetti / azioni.",
  prompt: `Incolla il tuo messaggio e dimmi:
- No. Che tipo di cliché ti disturba di più (motivativo, romantico, drammatico, business).
- Tono di destinazione.

Compito:
1) Segnare (in un elenco) tutte le frasi generiche o astratte (minimo 10 se disponibili).
2) Per ciascuno:
- spiega perché è cliché (1 linea)
- propone 3 sostituzioni con immagine concreta (oggetto / azione / scena)
3) Riscrivere il testo completo:
- 70% cemento, 30% massimo astratto
- verbi forti
- nuove metafore (minimo 3)

Alla fine:
- Elenco di controllo anticliché per l'uso nei testi futuri (12 punti).`,
  thumbnail: ""
},
{
  id: "crea-est-006",
  title: "Cambiamento di POV: primo, secondo, terzo e narratore inaffidabile",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere per punti di vista per cambiare privacy, tensione e mistero.",
  prompt: `Incolla una scena o un testo (200-600 parole) e dimmi:
- No. Che cosa dovrebbe essere lo stesso (3 cose).
- No. Ciò che si desidera migliorare (intimacy, mistero, tensione, umorismo).
- Segreto che non deve essere rivelato affatto.

Riscrivere in 4 POV:
1) Prima persona (intimo, confessionale)
2) 2a persona (accusatoria o offerta)
3) Terza persona limitata (vicino al protagonista)
4) Narratore inaffidabile (distorti e contraddizioni)

Per ogni versione:
- 1 linea "firma"
- 3 modifiche chiave (che cosa hai fatto diverso)
- 1 rischio

Alla fine:
- No. Si consiglia il POV ideale secondo quello che voglio migliorare.`,
  thumbnail: ""
},
{
  id: "crea-est-007",
  title: "Brutale condanna: 900 → 300 → 100 → 30 parole (senza perdere essenza)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riduce un testo a strati con conservazione del nucleo, ideale per ritmo e precisione.",
  prompt: `Incollare il testo (600-1200 parole) e dirmi:
- Messaggio centrale (1 frase)
- Numero principale
- 5 frasi / idee che non possono scomparire

Crea 4 versioni:
A) 300-350 parole (pulito, diretto)
B) 100-120 parole (compatto e potente)
C) 30-40 parole (esplosione emotiva)
D) 1 frase (max 12 parole) come chiusura / aforismo

Per ogni riduzione, spiega:
- No. Cosa hai preso e perche'?
- No. Quello che hai conservato (core)
- No. Quale risorsa hai usato per mantenere l'emozione

Alla fine:
- Dammi 10 possibili titoli / chiusure in base alla versione 30-40 parole.`,
  thumbnail: ""
},
{
  id: "crea-est-008",
  title: "Amplificazione: 150 parole → 900 (profondità, strati, sottotesto)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Espandere un breve testo in un lungo senza riempire, aggiungendo scene, simboli e ritmo.",
  prompt: `Incolla il testo breve (80-200 parole) e dimmi:
- Luogo
- Persona (s)
- 1 simbolo centrale
- Emozione nascosta
- No. Che cosa NON vuoi (non melodramma / nessuna volgarità / ecc.)

Compito:
1) Diagnosi: ciò che manca per sentirlo (partimenti sensoriali, conflitto, ritmo, sottotesto).
2) Espansione a 700-1000 parole:
- aggiunge 2 scene specifiche
- aggiunge 5 dettagli sensoriali per scena
- inserire 1 giro a metà
- integra il simbolo 4 volte (significa varia)
3) Finale: una frase memorabile (max 12 parole)

Allora:
- Elenco di 12 "specifici dettagli" che sollevano il testo (per copiare e incollare).`,
  thumbnail: ""
},
{
  id: "crea-est-009",
  title: "Trasmutazione di genere: dramma → thriller / romanticismo → terrore / ecc.",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Cambia il genere mantenendo carattere e tema; ristruttura tensione e scene.",
  prompt: `Dammi...
- Testo base o panoramica (150-400 parole).
- Sesso attuale.
- Sesso mirato.
- Soggetto da mantenere.
- 2 scene che devono sopravvivere (anche se cambiano).

Compito:
A) Identifica il "motore" del genere corrente (cosa lo fa funzionare).
B) Definire il "motore" del genere target (tensione, mistero, desiderio, ecc.).
C) Riscrivere la panoramica e poi scrivere 2 scene chiave (2-4 pagine ciascuna):
- Scena 1: nuova apertura nel genere target
- Scena 2: climax adattato al genere target

Alla fine:
- Tavolo: elemento originale → equivalente in nuovo genere (8-12 righe).`,
  thumbnail: ""
},
{
  id: "crea-est-010",
  title: "Chirurgia ritmica: musicalità, cadenza e respirazione del testo",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Ritmo migliorato: alternanza di frasi, tagli, ripetizione, variazione e interruzioni.",
  prompt: `Incollare il testo (200-700 parole) e dirmi:
- No. Che emozione vuoi che segni il ritmo (tensione / tenerezza / urgenza).
- No. Se lo leggerai ad alta voce (sì / no).
- Livello di sofisticazione (semplice / media / letteraria).

Compito:
1) Analisi del ritmo: lunghezza media della frase, varietà, luoghi in cui cade.
2) Riscrittura con ritmo migliorato:
- alterna frasi brevi e lunghe
- utilizzare 3 ripetizioni deliberate (anafora o coro)
- aggiunge 2 pause drammatiche (linea singola)
- rimuove mullets e ridondanze
3) versione "Voice on off" (se applicabile): 160-220 parole con ritmo orale.

Alla fine:
- 10 regole del ritmo che posso sempre applicare.`,
  thumbnail: ""
},

{
  id: "crea-est-011",
  title: "Trasformazione 'epoch estetica': lo stesso testo in 4 periodi",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere un testo in stili di età: dettaglio, record e lessico.",
  prompt: `Incolla il testo di base e dimmi:
- Posto.
- Soggetto.
- No. Quali parole moderne devo evitare (5-10).

Riscrivere in 4 estetica (200-350 parole ciascuna):
1) XIX secolo (eleganto, frasi lunghe, osservazione)
2) Anni 20 (ritmo, glamour / rumore)
3) 80 anni (cultura pop, neon, velocità)
4) Vicino al futuro (tecnologia quotidiana, privacy)

Per ogni estetica:
- 10 dettagli temporali integrati in azione (non espositiva)
- 1 linea finale memorabile

Alla fine:
- Raccomandazione: quali poteri estetici il soggetto e perché.`,
  thumbnail: ""
},
{
  id: "crea-est-012",
  title: "Riscrittura per 'metodo centrale': l'intero testo sotto un simbolo",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Trasformare il testo per girare una metafora sostenuta (non ripetuta).",
  prompt: `Incolla il testo e scegli una metafora centrale:
- Opzioni: "mare", "casa", "ruota", "fuoco", "ice", "ponte", "giardino", "macchina".
(o dimmi il tuo)

Compito:
1) Fare una mappa metafora: 12 associazioni (oggetti / azioni) del simbolo.
2) Riscrivere il testo (300-600 parole):
- la metafora appare nei dettagli, non come "questo è come..."
- 4 apparizioni sottili + 1 aspetto esplicito alla fine
- impedisce di ripetere le stesse parole del simbolo (senza spam)

Alla fine:
- 10 frasi alternative che usano la metafora in modo diverso.`,
  thumbnail: ""
},
{
  id: "crea-est-013",
  title: "Eliminazione di aggettivi: forza di verbi e sostantivi",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Un esercizio per \"indurire\" la prosa: rimuovere aggettivi e ottenere precisione.",
  prompt: `Incolla un testo (150-500 parole).

Compito:
A) Elencare i 20 aggettivi più deboli o generici nel testo (se ci sono meno, tutti).
B) Per ciascuno, propon:
- 2 verbi più forti
- 2 sostantivo più specifico
- 1 immagine alternativa
C) Riscrivere il testo:
- massimo 6 aggettivi in totale
- tutto il resto è realizzato con verbi, sostantivi e azioni

Alla fine:
- Confronta: cosa si sente diverso (5 proiettili).`,
  thumbnail: ""
},
{
  id: "crea-est-014",
  title: "Trasformazione al 'realismo sensoriale': 5 sensi per scena",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Trasformare un testo piatto in un testo sensoriale con ancoraggio fisico e atmosfera.",
  prompt: `Incollare il testo o la scena (200-600 parole) e dirmi:
- No. Il posto esatto
- Tempo / stazione
- Emozione dominante

Riscrivi:
- Aggiungere minimo 2 dettagli per senso (vista, orecchio, odore, tocco, gusto).
- No. Non aggiungere il riempimento: ogni dettaglio deve rivelare carattere o conflitto.
- 1 piccolo gesto deve dire quello che non è detto.

Alla fine:
- Elenco di 15 dettagli sensoriali alternativi per lo stesso posto.`,
  thumbnail: ""
},
{
  id: "crea-est-015",
  title: "Trasformazione a 'sottotesto': dire di meno, significare di più",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Egli riscrive una scena in modo che il vero conflitto non sia detto, agire.",
  prompt: `Colpisci una scena (dialogo o prosa) e dimmi:
- conflitto visibile
- Un vero conflitto nascosto
- No. Cosa non si può dire esplicitamente
- Oggetto del sottotesto

Riscrivi la scena:
- No. Riduce le spiegazioni emotive del 70%.
- Utilizzare azioni (guardi, interruzioni, oggetti, interruzioni).
- Ogni personaggio deve avere un obiettivo e una tattica (tattica di cambiamento 2 volte).
- Finale: una frase innocente che, per sottotesto, è devastante.

Alla fine:
- Tavolo: linea originale → nuovo sottotesto (8-12 righe).`,
  thumbnail: ""
},

{
  id: "crea-est-016",
  title: "Trasformazione a 'humor': trasformare il dramma in commedia senza tradire il tema",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere in umorismo (asciutto / assurdo / ironico) pur mantenendo la verità centrale.",
  prompt: `Incollare il testo (200-600 parole) e dirmi:
- Tipo di umorismo (Deadpan, assurda, morbida sarcasmo, commedia nera).
- No. Che tema da non perdere.
- No. Che umore (0-10).

Compito:
1) identifica 5 punti di tensione (luoghi dove il dramma pesa).
2) Per ogni punto, creare 2 meccanismi comici:
- contraddizione
- interpretazioni sbagliate
- sovrastamento specifico
- Dettaglio ridicolo realistico
3) Riscrivere il testo nel tono comico:
- senza prendere in giro il dolore
- con uscite basate sull'osservazione
- fine: una linea seria che ricorda il soggetto

Include:
- 12 giri alternativi (1 linea ciascuno).`,
  thumbnail: ""
},
{
  id: "crea-est-017",
  title: "Trasformazione a 'noir': trasformare qualsiasi storia in noir moderno",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Voce spenta, ironia, città e senso di colpa: riscrittura noir con atmosfera.",
  prompt: `Incollare il testo o la panoramica e dirmi:
- Città / notte
- Lama del protagonista
- Antagonista (persona o sistema)
- Oggetto chiave
- Finale (irony / punizione)

Riscrivere in noir (350-700 parole):
- Voce in 6 momenti (breve).
- No. La voce in movimento deve contraddire ciò che vedete (sottotesto).
- 10 dettagli urbani.
- Finale: ironia morale.

Allora:
- 10 linee vocali su off tipo "one-liner" tra cui scegliere.`,
  thumbnail: ""
},
{
  id: "crea-est-018",
  title: "Trasformazione nella storia dei bambini: lo stesso tema, fit e profondo",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Convertire un tema adulto in una storia simbolica dei bambini senza perdere profondità.",
  prompt: `Incollare il testo o il tema e dirmi:
- Età di destinazione (4-6, 7-9, 10-12).
- Valore centrale (amicizia, onestà, coraggio, pazienza).
- Caratteri (animale / oggetto / persona).
- Scenario (forest, città, mare, scuola).
- Finale (lezione subtle).

Scrivere una storia per bambini (600-900 parole):
- Lingua semplice ma non sciocco.
- Ripetizione ritmica (1 frase che ritorna 4 volte).
- 1 chiaro conflitto, 1 soluzione creativa.
- Moraleja inimplicita (non predica).

Include:
- 6 titoli + 10 frasi per illustrazioni (idee visive).`,
  thumbnail: ""
},
{
  id: "crea-est-019",
  title: "Trasformazione in \" saggio personale\": onestà e chiarezza (senza poesia eccessiva)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Dal saggio lirico a personale: idee chiare, scene concrete, conclusione umana.",
  prompt: `Incolla il testo di base e dimmi:
- Tesi (cosa vuoi dire).
- 2 scene reali o inventate per dimostrarlo.
- Punto volnerabile non intendi (ma dovresti).
- Tono (calore, diretto, fermo).

Riscrivere come saggio personale (800-1200 parole):
- Gancio con scena (non frase generica).
- Tesi chiara nel primo 20%.
- 2 scene complete in dettaglio.
- 3 idee spiegate con esempi.
- Conclusione: una specifica decisione o pratica.

Alla fine:
- 10 possibili titoli di prova.`,
  thumbnail: ""
},
{
  id: "crea-est-020",
  title: "Banca di risorse di stile: metafore, ritmi, chiusure e firme '",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Genera risorse riutilizzabili: metafore originali, chiusure, ritmi e linee di firma.",
  prompt: `Dammi...
- No. Tema (amore, città, perdita, identità, ambizione, paura).
- Estetica (urbano, naturale, futuristico, vintage).
- Tono (tender, scuro, ironico, epico).

Genera una banca con:
A) 25 metafore originali (non cliché) ancorate a oggetti / azioni.
B) 20 linee di chiusura (max 12 parole) in toni diversi.
C) 15 aperture (hooks) con immagine concreta.
D) 12 frasi memorabili di firma.
E) 10 risorse ritmiche (anafora, tagli, ripetizioni) con esempi.

Allora:
- Dimmi come combinare 2 risorse senza saturare il testo.`,
  thumbnail: ""
},

{
  id: "crea-est-021",
  title: "Trasformazione per «limitazione»: riscrive con regole estreme",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrittura con restrizioni (vocabolario, lunghezza, struttura) per la vera creatività.",
  prompt: `Incolla una scena o un testo (200-600 parole) e dimmi quale restrizione vuoi:
Scegli 2-3:
1) Massimo 8 parole per frase.
2) Nessun avverbio.
3) appena presente.
4) Nessun verbo "be".
5) 5 parole obbligatorie.
6) Finale in una sola frase.

Riscrivere in conformità alle restrizioni.
Allora:
- No. Scrive una seconda versione "libero" che mantiene la forza raggiunta.
- Spiega cosa ti ha costretto a scoprire la limitazione (5 proiettili).`,
  thumbnail: ""
},
{
  id: "crea-est-022",
  title: "Trasformazione in ' scena teatrale': prosa al dialogo con le acitazioni",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Converte la narrazione in teatro: sottotesto, acitazioni, ritmo scenico.",
  prompt: `Incollare il testo (200-600 parole) e dirmi:
- Personaggi (2-4 massimo)
- Luogo
- conflitto visibile e conflitto reale
- Sottotesto
- Finale

Diventa una scena teatrale (6-10 pagine):
- Dialogo con sottotesto.
- Raccordi brevi e precisi.
- 2 cambi di potenza tra i caratteri.
- Finale: gesto o frase che si chiude con eco.

Include:
- Note di indirizzo (ritmo, interruzioni, tono per carattere).`,
  thumbnail: ""
},
{
  id: "crea-est-023",
  title: "Trasformazione a 'script': prosa a scene visive",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Passare un testo narrativo allo script (formato film) senza perdere emozione.",
  prompt: `Incollare il testo (300-900 parole) e dirmi:
- Durata obiettivo (5-10 min)
- Località disponibili (max 3)
- Personaggi disponibili (max 4)
- No. Quale emozione deve padroneggiare

Converti in script:
- 10-18 scene al massimo.
- Azioni visive (non spiegate).
- Dialogo minimo, con sottotesto.
- Finale: immagine memorabile.

Alla fine:
- Lista di 8 aerei iconici per dirigere il pezzo.`,
  thumbnail: ""
},
{
  id: "crea-est-024",
  title: "Trasformazione a 'chat message': una storia in Whats App / DM",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Racconta una storia completa solo con messaggi: ritmo, silenzi e sottotesto digitale.",
  prompt: `Dammi...
- Chi chiacchiera e relazioni.
- Conflitto.
- Segreto.
- Finale (riconciliazione, rottura, turno).
- Stile: realistico (sì / no).

Scrivi la storia solo in formato chat:
- 80-140 messaggi.
- No. Esso comprende silenzi (... / "visto" / "scrittura...").
- Due credibili malintesi.
- Finale: un ultimo messaggio che rimane risonante.

Allora:
- 5 versioni alternative dell'ultimo messaggio.`,
  thumbnail: ""
},
{
  id: "crea-est-025",
  title: "Trasformazione a 'daily': stessa storia in 3 voci",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Egli riscrive come un diario intimo in tre giorni differenti che mostrano l'evoluzione.",
  prompt: `Colpisci la tua storia o scena e raccontami:
- 3 date (o intervalli) per i biglietti.
- No. Che cosa cambia in ogni data.
- No. Che verità appare alla fine.

Scrivere 3 voci giornaliere:
- Ingresso 1: negazione / confusione (250-400 parole)
- Ingresso 2: confronto / rottura (250-450 parole)
- Entrata 3: sintesi / decisione (250-450 parole)

Include:
- 1 frase ripetuta nelle 3 voci che cambiano significato.`,
  thumbnail: ""
},

{
  id: "crea-est-026",
  title: "Trasformazione 'pubblicità letteraria': converte il testo in annuncio micropoetico",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Crea brevi pezzi di tipo ad, ma con qualità letteraria e sottotesto.",
  prompt: `Incolla il tuo testo o dimmi il tuo tema immaginario / prodotto e:
- Real beneficio (non gonfiato promessa)
- Pubblico
- Tono (poetico / noir / umorismo)

Genera:
A) 10 microcopie poetiche (1-2 linee)
B) 5 testi di 60-90 parole (voce in uscita)
C) 3 180-240 parole testi (mini storia con chiusura)

Regole:
- Cliché zero.
- Immagini concrete.
- Finale con frase memorabile.`,
  thumbnail: ""
},
{
  id: "crea-est-027",
  title: "Trasformazione 'durezza': rende il testo più grezzo e realistico",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivi per aumentare il realismo (senza cadere nella volgarità), con dettagli precisi.",
  prompt: `Incollare il testo (200-700 parole) e dirmi:
- Livello di durezza target (1-10)
- No. Quali limiti non attraversare
- No. Quale emozione deve rimanere

Riscrivi:
- No. Sostituisce astratti con scene.
- Aggiungere 8 dettagli fisici (mani, luce, rumore, odore).
- No. Elimina il sentimentalismo e le spiegazioni.
- Mantenere l'umanità: comprende 2 momenti di tenerezza.

Alla fine:
- Lista di 15 'raw details' alternativa per le scene future.`,
  thumbnail: ""
},
{
  id: "crea-est-028",
  title: "Trasformazione 'tenderness': ammorbidire senza infantilizing",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Passa un testo difficile a un tenero che mantiene la verità e la dignità.",
  prompt: `Incolla il tuo messaggio e dimmi:
- No. Che parte fa male
- No. Cosa vuoi proteggere
- Tono di destinazione (tender, sereno, caldo, sperante)
- Parole proibite (cliché)

Riscrivi:
- Cambiare l'aggressività per la cura.
- Tenere il conflitto, ma con compassione.
- Aggiungi 6 dettagli di cura (piccoli gesti).
- Finale: piccola (realistica) promessa.

Allora:
- 10 frasi alternative per la chiusura.`,
  thumbnail: ""
},
{
  id: "crea-est-029",
  title: "Trasformazione 'alta letteratura': eleva la prosa a livello stilistico premium",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Sollevare sintassi, immagini e precisione senza renderlo pretenzioso.",
  prompt: `Incollare il testo (200-700 parole) e dirmi:
- Tono di destinazione (elegante, intimo, scuro, luminoso)
- Livello di complessità (medio / alto)
- 5 parole che ti piace e vuoi includere

Riscrivi in "alta letteratura":
- Preciso lessico, non strano.
- Metafore originali (minimo 4).
- Rhythm: alterna frasi brevi e lunghe.
- Evita la morale.
- Finale: una frase impeccabile (max 14 parole).

Alla fine:
- 8 decisioni di stile che hai preso e perché.`,
  thumbnail: ""
},
{
  id: "crea-est-030",
  title: "Trasformazione 'voce contemporanea': modernizza senza perdere profondità",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Aggiorna la registrazione contemporanea (senza slang economico), con chiarezza e puntura.",
  prompt: `Incolla il tuo messaggio e dimmi:
- Audience e piattaforma (blog, IG, newsletter, script).
- No. Cosa vuoi che il lettore senta.
- 5 parole vietate.

Riscrivere in una voce contemporanea:
- Clarity e punch.
- Immagini concrete.
- 2 linee "hit" (molto brevi).
- Finale: una linea che vi invita a rileggere.

Include:
- 6 titoli alternativi.`,
  thumbnail: ""
},

{
  id: "crea-est-031",
  title: "'Bilingual creative' trasformazione: Spagnolo con elegante \"code-switch\"",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrittura con frasi in inglese molto misurate per stile, non per il riempimento.",
  prompt: `Incollare il testo (200-600 parole) e dirmi:
- livello "Code-switch" (basso / medio)
- Quali parole / frasi in inglese NON vuoi (cringe)
- Tono (cool, intimo, professionale, lirico)

Riscrivi:
- Tenere lo spagnolo dell'85-90%.
- Inserisci 6-10 frasi brevi in inglese (max 6 parole ciascuna), con intenzione.
- L'inglese può fornire sfumature (non traduzione letterale).
- Finale: chiusura in spagnolo, blunt.

Allora:
- Lista di 20 utili brevi frasi in inglese (senza cliché).`,
  thumbnail: ""
},
{
  id: "crea-est-032",
  title: "Trasformazione per 'dizione': cambia la registrazione (cult, colloquial, street, formale)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Modificare il record di lingua per regolare carattere / tempo / ambiente.",
  prompt: `Incolla il tuo messaggio e dimmi:
- Chi parla (carattere)
- Contesto (dove e con chi)
- No. Cosa vuoi ottenere?
- Livello consentito di volgarità

Riscrivere in 4 record:
(1) Formale / professionale
2) Colloquial vicino
3) strada moderata / argot (senza caricatura)
4) Culto / letterario (senza pedali)

Per ogni record:
- 8 cambiamenti di dizione (parole / frasi) e perché.
- 1 linea finale alternativa.`,
  thumbnail: ""
},
{
  id: "crea-est-033",
  title: "Trasformazione per 'scala': micro (tweet) vs macro (chapter)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Diventa la stessa idea in tweet potente e poi in capitolo lungo.",
  prompt: `Dammi...
- Idea centrale (1 frase)
- Articolo
- Tono

Creare 3 versioni:
A) Tweet / X: 240-280 caratteri (con l'immagine concreta, non-moralina).
B) Microcuento: 120-180 parole con twist.
C) Capitolo: 1200-1800 parole con 2 scene e sottotesto.

Tenere lo stesso nucleo a 3.
Alla fine:
- Spiegare quali cambiamenti di tensione / ritmo per scala (6 proiettili).`,
  thumbnail: ""
},
{
  id: "crea-est-034",
  title: "Trasformazione nell'elenco letterario: inventario con anima",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Passa il tuo testo all'inventario poetico (cose che tengo, cose che perdo) con torsione.",
  prompt: `Incolla il tuo messaggio e dimmi:
- Articolo
- simbolo centrale
- Rivolta finale (cosa si rivela)

Converti in "elenco letterario":
- 18-30 articoli.
- 4 rotture del modello (linee off-list).
- Ogni elemento deve essere concreto ed emotivo allo stesso tempo.
- Finale: oggetto finale per reinterpretare tutto.

Allora:
- 10 elementi alternativi per il cambiamento.`,
  thumbnail: ""
},
{
  id: "crea-est-035",
  title: "Trasformazione 'una parola': riscrive per fare una parola protagonista",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Una parola guida il testo: ripetizione ritmica e variazione semantica.",
  prompt: `Incolla il testo e scegli un palabra di spicco (ad esempio "luce", "chiave", "noise", "ice").
Dimmi:
- No. Quante volte vuoi che mi presenti (6-10).
- Tono.

Riscrivi:
- La parola deve apparire 6-10 volte.
- Ogni volta cambia significato per contesto (non ripetizione vuota).
- 2 apparizioni devono essere metaforiche, 2 verbatim, 2 ibridi.
- Finale: ultima apparizione con giro.

Alla fine:
- 6 parole alternative che funzionerebbero.`,
  thumbnail: ""
},

{
  id: "crea-est-036",
  title: "Trasformazione 'dialogo': trasformare la narrazione in una scena di conversazione",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere un frammento narrativo come dialogo con il sottotesto e le azioni.",
  prompt: `Incolla un frammento narrativo (200-600 parole) e dimmi:
- 2-3 caratteri massimi
- Luogo
- Un vero conflitto (nascosto)
- Sottotesto
- Finale (che cambia)

Egli riscrive come una scena:
- Formattare lo script o il teatro (scegliere).
- Dialogo con interruzioni, silenzi e azioni.
- 2 cambiamenti tattici per carattere.
- Finale: frase innocente con peso emotivo.

Allora:
- Lista di 10 "azioni di sottotesto" per questo conflitto.`,
  thumbnail: ""
},
{
  id: "crea-est-037",
  title: "Trasformazione 'camera': riscrive come se la fotocamera dicesse",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Passare il testo in lingua audiovisiva: piani, azioni, atmosfera.",
  prompt: `Incollare il testo (200-700 parole) e dirmi:
- Genere (dramma / thriller / romanticismo / terrore)
- Posizione principale
- Emozione dominante

Riscrivere come "camera":
- No. Descrive nel presente ciò che è visto e sentito.
- Inserire 12-20 aerei (segnati come PLANO 1, PLANO 2...).
- Riduce le spiegazioni interne; mostra per azioni.
- Finale: memorabile aereo finale.

Include:
- 8 idee audio/ambiente per rafforzare l'emozione.`,
  thumbnail: ""
},
{
  id: "crea-est-038",
  title: "Trasformazione 'suspended': convertire qualsiasi scena in tensione",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere per aumentare la tensione con informazioni parziali, ritmo e minaccia latente.",
  prompt: `Incolla la tua scena (200-700 parole) e dimmi:
- No. Quale potenziale minaccia esiste (anche se emotiva).
- No. Quali informazioni il lettore non dovrebbe ancora sapere.
- No. Che dettaglio dell'ambiente diventerà un indizio.

Riscrivere in chiave di sospensione:
- Tagliare le informazioni dirette del 50%.
- Aggiungere 3 piccoli brani (di proprietà).
- Rhythm: brevi frasi a volte di tensione.
- Finale: micro cliffhanger.

Allora:
- Elenco di 10 risorse di tensione (applicabili) con esempio.`,
  thumbnail: ""
},
{
  id: "crea-est-039",
  title: "Trasformazione 'luce e ombra': stesso testo in luce contro scuro",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Due riscritture opposte in atmosfera mantenendo la storia.",
  prompt: `Incollare il testo (200-600 parole) e dirmi:
- No. Cosa dovrebbe rimanere lo stesso (core)
- No. Cosa vuoi che cambi (atmosfera)

Fare 2 versioni:
A) Versione leggera: speranza, chiarezza, aria (senza zucchero)
B) Versione scura: peso, notte, tensione (senza melodramma)

Per ciascuno:
- 10 decisioni atmosferiche (lexicon, dettagli, ritmo)
- No. Una chiusura alternativa (1 linea)

Alla fine:
- Dimmi quale funziona meglio e perché.`,
  thumbnail: ""
},
{
  id: "crea-est-040",
  title: "Verifica stile: rilevare mullets, modelli e migliorare la vostra voce",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Analisi e riscrittura per consolidare la propria voce (non generica).",
  prompt: `Colpisce 2-4 i vostri testi (totale 400-1200 parole).

Compito:
1) Rileva i modelli:
- Mullets
- modi ripetuti per iniziare frasi
- aggettivi comuni
- strutture metaforiche
- ritmo (lunghezza della frase)
2) Definire la tua voce attuale in 8 funzioni.
3) Proporre una "guida di stile personale" (12 regole) per suonare più come voi.
4) Riscrivere 1 testo utilizzando la guida (300-600 parole).
5) Crea un glossario personale:
- 20 parole che ti rappresentano
- 20 parole da evitare

Alla fine:
- Un piano di 7 giorni per formare quella voce (azioni concrete).`,
  thumbnail: ""
},

{
  id: "crea-est-041",
  title: "Trasformazione 'stesso fatto, diversa emozione': gioia, nostalgia, rabbia, calma",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Mantenere lo stesso evento, cambiare solo l'emozione attraverso i dettagli e il ritmo.",
  prompt: `Dammi un semplice fatto (1-2 frasi) e:
- Luogo
- Carattere
- 5 oggetti della scena

Scrivi 4 versioni (200-350 parole ciascuna) dove il fatto è identico:
1) Gioia contenuta
2) Morbida nostalgia
3) Elegante rabbia
4) calma malinconica

Regole:
- No. Non cambiare il fatto.
- Cambiare il mondo: dettagli, ritmo, metafore, attenzione.

Alla fine:
- Spiegare cosa è cambiato per causare emozione (8 proiettili).`,
  thumbnail: ""
},
{
  id: "crea-est-042",
  title: "Trasformazione 'obiezione voce': narrazione da un oggetto (stile letterario)",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Egli riscrive come se un oggetto narra la storia, con personalità e consistenza.",
  prompt: `Incollare il testo o la scena e dirmi:
- No. L'oggetto narrativo
- Titolare
- Segreto che l'oggetto sa
- Finale (salva / goccia)

Riscrittura (500-900 parole):
- Voce dell'oggetto coerente.
- 2 flashback e 1 scena presente.
- Dettagli sensoriali reali (tessuto, polvere, peso).
- Finale: decisione oggetto.

Allora:
- 12 frasi "segnatura" dell'oggetto (one-liner).`,
  thumbnail: ""
},
{
  id: "crea-est-043",
  title: "Trasformazione 'divulgazione tardiva': nascondere l'importante alla fine",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivi in modo che la verità chiave sarà rivelata alla fine (preso e meritato).",
  prompt: `Incolla la tua storia / scena e dimmi:
- No. Che ultima verità vuoi rivelare.
- 3 tracce che possono apparire prima.
- 3 cose che non dovrebbero essere rivelate.
- No. L'estremità desiderata (shock, tenerezza, ironia).

Riscrittura (500-900 parole):
- Cucire le 3 tracce naturalmente.
- No. Dona spiegazioni alternative (senza mentire sfacciatamente).
- Continua a girare.
- Finale: rivela la verità con un'immagine (nessun discorso).

Alla fine:
- Elenco: traccia → linea dove → payoff appare.`,
  thumbnail: ""
},
{
  id: "crea-est-044",
  title: "Trasformazione 'stile epistolare': trasformare la scena in carte",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere come scambio di lettere: sottotesto, omissioni e tempo.",
  prompt: `Colpisci la tua scena / storia e raccontami:
- Chi scrive
A chi
- In quale periodo (giorni, anni)
- No. Cosa c'è nascosto

Scrivi 4 lettere:
- Lettera 1: bella attesa / bugia (200-350 parole)
- Lettera 2: attrito (200-350)
- Lettera 3: distanza / assenza (200-350)
- Lettera 4: verità (200-350)

Regole:
- Ogni carta deve avere un oggetto menzionato che cambia il suo significato.
- Finale: una frase che chiude tutta la corrispondenza.

Include:
- 8 frasi di chiusura alternative.`,
  thumbnail: ""
},
{
  id: "crea-est-045",
  title: "Trasformazione 'stile giornalistico': trasformare la finzione in cronaca",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere una storia come una cronaca / nota: dati, scene, testimonianza, senza perdere emozione.",
  prompt: `Incolla la tua storia e raccontami:
- Luogo e data (fico o reale)
- No. Che cosa "fatto" è segnalato
- 2 testimoni
- 1 dati duri (numero) inventati ma plausibili

Scrivere una cronaca (800-1200 parole):
- Piombo forte (primo comma)
- Scene specifiche intervallate da contesti
- 2 testimonianze con voce diversa
- Chiusura: breve, riflessione non morale

Allora:
- 10 possibili titoli.`,
  thumbnail: ""
},

{
  id: "crea-est-046",
  title: "'delicato vs diretto' trasformazione: due versioni di onestà",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrive una confessione in due dischi: delicati (metafori) e diretti (senza metafora).",
  prompt: `Incolla il tuo testo / confessione (150-400 parole) e dimmi:
- No. A chi si rivolge
- No. Cosa hai paura di perdere?
- No. Che verità dire

Creare 2 versioni (250-450 parole ciascuna):
A) Delicato: metafore, suggestione, sottotesto
B) Diretto: frasi chiare, senza ornamenti, verità alla parte anteriore

Allora:
- No. Indica 8 frasi in cui hai cambiato forma ma non sfondo (comparativo).`,
  thumbnail: ""
},
{
  id: "crea-est-047",
  title: "Trasformazione 'rituale': restituire un'esperienza nella cerimonia letteraria",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Convertire un evento quotidiano in rituale simbolico con ripetizione e gesto finale.",
  prompt: `Dammi...
- Evento giornaliero (fare il caffè, lavare i vestiti, camminare).
- Emozione.
- 5 oggetti del rito.
- Finale (che viene rilasciato o abbracciato).

Scrivere un testo (600-900 parole):
- Brevi sezioni con ripetizione (un coro che ritorna 5 volte).
- L'evento diventa cerimonia.
- Finale: gesto minimo con un significato enorme.

Include:
- 12 linee di mantra che potrebbero funzionare come coro.`,
  thumbnail: ""
},
{
  id: "crea-est-048",
  title: "Trasformazione 'anti-me': rimuovere 'I' senza perdere privacy",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere un testo intimo senza usare 'I', creando la vicinanza per i dettagli.",
  prompt: `Incollare il testo (200-600 parole).

Riscrivere con le regole:
- Niente uso di "io", "io", "mia", "mine".
- Tenere la vostra privacy con azioni, sensazioni e ambiente.
- 10 dettagli minimi specifici.
- Finale: una frase che sembra una confessione senza "io".

Allora:
- Riscrivi con il permesso "me", ma mantenendo lo stile pulito.`,
  thumbnail: ""
},
{
  id: "crea-est-049",
  title: "Trasformazione 'strati': prima lettura semplice, seconda lettura profonda",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Riscrivere per doppio strato: superficie giornaliera + sottotesto scuro o tenero.",
  prompt: `Incolla il tuo messaggio e dimmi:
- Livello 1 (come sembra)
- Livello 2 (che cosa è veramente)
- Simbolo che collega entrambi

Riscrittura (500-900 parole):
- Layer 1 deve lavorare da solo.
- Layer 2 dovrebbe essere compresa con tracce (4-7 tracce).
- Finale: una linea che rivela lo strato 2 senza spiegarlo.

Include:
- Elenco delle tracce e dove le metti.`,
  thumbnail: ""
},
{
  id: "crea-est-050",
  title: "Kit di trasformazione finale: 1 storia in 5 formati pronti a pubblicare",
  area: "Scrittura creativa",
  category: "Trasformazione e stile",
  summary:
  "Diventa una storia in: storia, poesia, sceneggiatura, cattura, thread (multiuso).",
  prompt: `Incolla la tua storia di base (300-800 parole) e raccontami:
- Piattaforma di destinazione (IG, TikTok, blog, newsletter, libro).
- Tono.
- Un messaggio centrale.

Genera 5 formati:
1) Breve conteggio (900-1300 parole) con 2 scene e finale memorabile.
2) Poem (28-42 versi) con 5 sensi e girare.
3) Sceneggiatura (4-6 pagine) con sottotesto.
4) Caption IG (180-240 parole) + 5 ganci di apertura.
5) X / Twitter thread (8-12 tweets) con ritmo e chiusura.

Alla fine:
- Elenco di controllo della coerenza (ciò che è mantenuto in tutto).`,
  thumbnail: ""
}];