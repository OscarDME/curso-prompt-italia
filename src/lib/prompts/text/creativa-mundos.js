// src/lib/prompts/text/creativa-mundos.js

export const textPromptsCreativaMundos = [
{
  id: "crea-mundos-001",
  title: "La Bibbia del mondo (versione completa, coerente e giocabile)",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Costruisce una bibbia del mondo intero: storia, geografia, politica, economia, cultura, conflitti e segreti.",
  prompt: `Agisce come showrunner + world designer + editor di continuità. Creerò un mondo originale e mi serve un BIBLE COMPLETE.

Prima chiedetemi solo questo (in proiettili):
1) Genere (fantasia / sci-fi / realistico / debole).
2) Tono (bright / dark / satirical / epic).
3) Tempo / tecnologia (medievale, industriale, futuristico, ecc.).
4) Tema centrale (ad esempio libertà contro controllo, fede contro scienza).
5) Un'immagine mentale (una frase).

Poi dà una Bibbia mondiale con questo schema, con dettagli concreti e senza contraddizioni:

A) LOG-LINE DEL MONDO (2-3 frasi) + promessa narrativa.
B) MAPA MENTAL (senza disegno): 6 regioni, ciascuna con: clima, bioma, risorsa chiave, minaccia, estetica.
C)
D) PODER SYSTEM: 3 forze (stato / chiesa / società / clan) + come tengono + quello che temono di perdere.
E) Economia e vita: valuta, commercio, lavoro tipico, fame / abbondanza, che è considerato "lusso".
F) CULTURA: 5 dogane, 5 tabù, 5 proverbi, 5 partiti / rituali (con origine).
G) TECHNOLOGY / MAGIA: regole chiare, costi, limitazioni, trappole narrative per evitare, "malpratica".
(H) CONFLICT ATTUALE: 3 guerre fredde, 2 guerre aperte, 1 crisi ecologica / sociale.
I) 10 LOCAZIONI ICONICHE (ciascuno: descrizione sensoriale + perché conta + tocco nascosto).
J) 10 PERSONE POTENZIALI (rolo, desiderio, contraddizione, segreto del mondo che rivela).
K) 12 BANCHE DI STORIA (corte brevi scalabili) + 3 "misteri lunghi".
L) CONTINUITÀ: elenco di 10 regole per non rompere la coerenza.

Stile: cinematografico ma chiaro, con nomi memorabili (non-generici).`,
  thumbnail: ""
},
{
  id: "crea-mundos-002",
  title: "Mappa narrativa: 7 regioni con il proprio conflitto",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna regioni che generano storie: risorse, tensioni, confini, migrazioni e pericoli.",
  prompt: `Agisce come un cartografo narrativo. Crea una "mappa" descritta nel testo con 7 regioni collegate.

Dammi l'output in questo formato:

1) Nome della REGIONE
- Bioma / clima:
- Estetica (colori, architettura, atmosfera):
- Risorse / ricchezza:
- pericolo naturale:
- Il pericolo umano:
- Rare leggi o costumi:
- No. Cosa si desidera esportare / importare:
- conflitto interno (1):
- Conflitto con il vicino (1):
- Iconic place (1):
- Rumor / leggenda (1) che è falso per metà:
- Regola locale di sopravvivenza (1 frase):

Collegamenti globali:
- 3 percorsi commerciali (con pedaggi / mafie / mostri / scioperi).
- 2 percorsi clandestini (che li controllano e perché).
- 1 confine impossibile (perché quasi nessuno lo attraversa).
- 1 zona di disputa (e se qualcuno lo controlla).

Extra:
- 10 nomi di insediamenti.
- 10 cognomi tipici per regione (2 per regione, + 1 extra).

Non usare cliché fantasia generici; inventare dettagli concreti che sparano scene.`,
  thumbnail: ""
},
{
  id: "crea-mundos-003",
  title: "Sistema magico / tecnologico con regole e costi duri",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un sistema con regole, limiti, costi, professioni e conseguenze sociali.",
  prompt: `Agisce come progettista di sistema (hard magic / hard sci-fi). Costruisce un sistema di potenza (magico o tecnologia) con regole rigorose.

Include:
1) PreMass (1 paragrafo): da dove viene, perché esiste.
(2) 7 regole inviolabili (definite come leggi).
3) 7 costi / pedaggi (fisico, mentale, sociale, legale).
4) 5 limiti "duri" (cose che non possono essere fatte).
5) 6 errori comuni (rookie error) e ciò che causano.
6) 8 applicazioni pratiche (medicina, guerra, agricoltura, trasporti, arte, sorveglianza, ecc.).
7) 5 professioni derivate (trade) + sindacati.
(8) 4 reati tipici relativi al sistema + punizione.
9) 3 dibattiti etici reali nella società (posizioni A e B).
10) 5 frasi popolari / insulti / gergo nato del sistema.
11) "Come sembra" sul palco: 10 dettagli sensoriali (suono, odore, texture, luce).

Infine:
- 3 modi in cui il protagonista potrebbe infrangere una regola... e il prezzo esatto.
- 3 modi per rendere il potere strisciare senza rompere coerenza (evoluzione controllata).`,
  thumbnail: ""
},
{
  id: "crea-mundos-004",
  title: "Dominante religione + eresia + miracoli dubbi",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna una religione vivente: teologia, rituali, potere politico, eresia e miracoli ambigui.",
  prompt: `Agisce come antropologo + scrittore. Disegna una religione dominante del mondo (e le sue fratture) con un'ambiguità interessante.

Struttura:
A) Mito Fondamentale (3 versioni contraddittorie: ufficiali, popolari, proibite).
B) Deità / principio: ciò che esige, ciò che promette, ciò che vieta.
C) Rituale settimanale: passi esatti, simboli, oggetti, musica, vestito.
D) 5 santi / eroi / figure: perché sono esempio e che cosa si nascondono.
E) Clero e gerarchia: range, privilegi, corruzione tipica.
F) Economia della fede: decima, reliquie, pellegrinaggio, affari collaterali.
G) 6 tabù + ragione "spirituale" e ragione "politica".
H) 4 eresia: ciò che credono, perché attirano, come li perseguono.
I) Miracoli: 6 famosi "miracoli" con prove parziali (reali o propaganda?).
J) Un cigno attuale: cosa gli ha sparato, chi vince se vince.

Vicino:
- 10 brevi preghiere / preghiere (una per: guerra, parto, lutto, viaggio, menzogna).
- 10 dettagli di impostazione per scene in templi / rituali.`,
  thumbnail: ""
},
{
  id: "crea-mundos-005",
  title: "Impero, ribellione e provincia: dinamiche politiche realistiche",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un conflitto centrale-periferico con l'economia, la propaganda, la paura, le tangenti e la cultura.",
  prompt: `Agisce come uno stratega politico + storico. Disegna un impero (centro) e 3 province (periferia) sull'orlo della ribellione.

Include:
1) L'Impero: ideologia ufficiale, propaganda (3 slogan), istituzioni (5), debolezza strutturale (1), paranoia (1).
2) Province (3): per ciascuna:
- No. Che cosa produce / che cosa prende
- No. Cosa odia del centro
- No. Che invidia del centro
- No. Cosa vende nel mercato nero
- Figura carismatica locale (1) e la sua contraddizione
- "nobile" ragione di ribellione + vero movente "ugly"
3) Innesco della crisi: evento specifico (data, luogo, vittime, colpevoli ufficiali).
4) Risposta centrale: 3 misure (una intelligente, una crudele, una stupida).
5) Rebel risposta: 3 tattiche (una popolare, una terrificante, un simbolico).

Finale:
- 10 possibili scene (in piazze, confini, tribunali, taverne, stazioni, ecc.)
- 5 segreti che cambiano il senso morale del conflitto.`,
  thumbnail: ""
},
{
  id: "crea-mundos-006",
  title: "Ecologia del mondo: bioma, catene alimentari e mostri credibili",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Fai sentire il mondo reale: clima, risorse, fauna, predatori e conseguenze ecologiche.",
  prompt: `Agisce come biologo/ecologo della finzione. Disegna l'ecologia di un mondo: non solo creature, ma sistemi.

Consegna:
A) Clima globale: 3 correnti, 2 zone di tempesta, 1 anomalia.
B) 4 biomi principali: in ciascuno:
- Piante dominanti (3) e raro (1)
- Fauna tipica (3) e un predatore apex (1)
- Adattazioni (camouflage, veleno, simbiosi, ecc.)
- Rischio umano (malattia, fame, perdita di raccolto)
C) 2 catene alimentari complete (dal produttore all'apice) e cosa succede se un collegamento è rotto.
D) 3 "mostri" plausibili: origine evolutiva, dieta, territorio, segni di presenza, come evitarlo.
E) Interazione con gli esseri umani: caccia, addomesticamento, fattorie, parassiti, commercio.

Bonus:
- 10 microdettagli sensoriali che fanno sentire la bioma nelle scene.
- 5 miti locali basati su interpretazioni ecologiche.`,
  thumbnail: ""
},
{
  id: "crea-mundos-007",
  title: "Città iconica: urbanismo, quartieri, crimine e costumi",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna una città vivente con quartieri, tensioni, servizi, odori, suoni e segreti.",
  prompt: `Agisce come un urbanista + romanziere. Disegna una città principale del mondo che si sente come esso.

Include:
1) Nome + soprannome + perché il soprannome è stato vinto.
2) Geografia: fiume / collina / costa / sottosuolo + come tutto le condizioni.
3) 8 quartieri: per ciascuno (1 paragrafo) con:
- No. Cosa vedi / sentire / odore
- Chi vive lì
- No. Che cosa è acquistato / venduto
- Tipico pericolo
- No. Un luogo iconico nel quartiere
4) Infrastrutture: acqua, spazzatura, illuminazione, trasporto, sorveglianza.
5) Potere: chi comanda veramente (non il sindaco), e come compra lealtà.
6) Crimine: 3 mercati neri + 3 truffe comuni + 1 banda con raro codice morale.
7) Cultura: street food (5), insulto locale (3), gesto di rispetto (1), tabù urbano (2).
8) "Crisi orologio": 6 eventi sconfitti che potrebbero esplodere in 30 giorni.

Vicino:
- 10 scenari idee pronte per capitoli / episodi.
- 5 segreti sepolti in città (letterale o metaforico).`,
  thumbnail: ""
},
{
  id: "crea-mundos-008",
  title: "Regole di viaggio e logistica: distanze, rischi e risorse",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea regole di viaggio realistiche che definiscono avventure: tempi, clima, pedaggi, autorizzazioni e percorsi.",
  prompt: `Agisce come designer di avventure realistiche. Definire le regole di viaggio e logistica del mondo per il viaggio ad avere peso.

Include:
A) Unità: come misurano la distanza / il tempo localmente (e le equivalenze).
B) Trasporti (6 tipi): costo, velocità, capacità, rischi, che lo controlla.
C) Documenti: 5 autorizzazioni / passa / visti e come sono falsificati.
D) pedaggio e corruzione: 5 punti di recupero, quanto costa, cosa succede se non si paga.
E) Clima stagionale: 4 stazioni e come influisce sulle rotte / mercati / malattie.
(F) Pericolo: 10 pericoli stradali (umano / naturale / sistemico) e come guardano prima che cadano in loro.
G) Regole di alimentazione: razioni, acqua, medicina, strumento essenziale (elenco esatto).

Finale:
- 3 percorsi "sicuri" che non sono realmente sicuri (trappola).
- 3 percorsi "impossibili" che possono essere con la giusta conoscenza.`,
  thumbnail: ""
},
{
  id: "crea-mundos-009",
  title: "Lingua, nomi ed etimologie per la coerenza culturale",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea modelli linguistici: fonetica, suffisso, nomi e termini chiave senza suono casuale.",
  prompt: `Agisce come un linguista di finzione. Crea un sistema semplice per nomi e termini mondiali che mantiene la coerenza culturale.

Dammi...
1) 2 culture principali / lingue (A e B) e loro "suono" (telefonie preferenziali, ritmo, lettere comuni).
2) 12 regole di nomi:
- Come si formano i propri nomi
- Cognome (lavoratori, commercio, luogo, ecc.)
- Titoli e onori
- Taboos quando si nomina
(3) Liste:
- 30 nomi di persona culturale A (15 F / 15 M o neutro)
- 30 persona nomi cultura B
- 20 cognomi A, 20 cognomi B
- 20 nomi A, 20 nomi B
4) 30 parole chiave del mondo (valuta, accuse, insulti, cibo, fiere, religione), con significato e nota di utilizzo.

Regola: evita "la fantasia casuale". Tutto deve sembrare provenire dalla stessa radice culturale.`,
  thumbnail: ""
},
{
  id: "crea-mundos-010",
  title: "Storia in strati: mito, conto ufficiale e verità sepolta",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Strutturare la storia del mondo con strati contraddittori per mistero e rivelazioni.",
  prompt: `Sei uno storico narrativo. Costruisce la storia del mondo in tre strati: mito, versione ufficiale e verità sepolta.

Consegna:
A) Il MITO (storia di fuoco, 500-800 parole): simbolico ed esagerato.
B) LA VERSIONE UFFICIALE (cronologia scolastica): 10 punti con linguaggio istituzionale.
C) TRUTH ENTERRADA: 10 punti che contraddicono o torgono il funzionario, con prove (lettere, rovine, fossili, registrazioni).

Allora:
- 7 "pezzi di prove" (oggetti / documenti) che potrebbero apparire nella trama.
- 5 persone / istituzioni che beneficiano di nasconderlo.
- 3 modi graduali per rivelare la verità senza informazioni (scenari).`,
  thumbnail: ""
},

// ---- 40 más, variados pero misma category "Mundos" ----

{
  id: "crea-mundos-011",
  title: "Mondo post-disastro: cosa si è rotto e cosa è nato dopo",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna un mondo dopo un crollo: risorse, gerarchie, nuovi miti e tecnologie sopravvissute.",
  prompt: `Agisce come un designer del mondo post-disastro (non-generico). Crea una catastrofe e le sue conseguenze realistiche.

Include:
1) La catastrofe: ciò che era EXACTALY, durata, segni primitivi ignorati.
2) Tre fasi (0-6 mesi / 1-5 anni / 20 + anni): come la vita quotidiana e il cambiamento di potenza.
3) Risorse critiche (5): chi li controlla, come vengono rubati, come sono protetti.
4) Tecnologia: ciò che è stato perso, ciò che è stato conservato, ciò che è stato "imitato".
5) Nuova cultura: 5 superstizioni nate da trauma + 3 nuovi partiti.
6) Nuove classi sociali: 4 gruppi, il loro status, il loro risentimento.
7) La "nuova mappa": 6 aree (sicure, tossiche, sacre, sacche, ecc.).
8) conflitto attuale: l'attuale grande dilemma morale.

Vicino: 12 semi di storia e 1 grande segreto sulla catastrofe.`,
  thumbnail: ""
},
{
  id: "crea-mundos-012",
  title: "Mondo utopico che nasconde un fallimento strutturale",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un'utopia convincente e l'inevitabile difetto che lo rompe dall'interno.",
  prompt: `Progetta un'utopia CREdibile (non caricatura) e poi rivela il suo fallimento strutturale.

Struttura:
A) "Perché funziona": 7 meccanismi (economia, educazione, salute, giustizia, energia, alloggio, cultura).
B) Vita quotidiana: un giorno nella vita di 3 persone di classi diverse.
C) Come i conflitti vengono risolti senza violenza (procedure reali).
D) Che sacrifici fanno (cosa non ti dicono): 6 costi invisibili.
E) Fallimento strutturale: 1 contraddizione inevitabile (con esempi).
F) Il primo sintomo: una scena specifica dove qualcosa è rotto.
G) Gruppi: 3 sostenitori del sistema e 3 avversari (ciascuno con argomenti forti).

Finale: 10 conflitti pronti per i piani senza renderlo "evil ovvio".`,
  thumbnail: ""
},
{
  id: "crea-mundos-013",
  title: "Mondo di isole e pirateria: economia, rotte e codici",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un arcipelago: rotte, monsoni, porti, contrabbando e politica marittima.",
  prompt: `Crea un mondo di arcipelago con pirateria e commercio. Voglio una logistica realistica e la cultura marina.

Include:
1) 9 isole principali: nome, biome, risorsa, porto, pericolo.
2) Stazioni di navigazione: venti / monsone e finestre di viaggio.
3) 4 potenze navali: obiettivi, flotte, propaganda, debolezza.
4) Pirateria: 3 tipi (idealisti, mafie, corsari legali) + codici diversi.
5) Economia: che cosa muove il mondo (sale, tè, polvere da sparo, corallo, dati, ecc), come è pagato, che cosa è proibito.
6) Legge del mare: 8 regole (recupero, bottino, tradimento, rifugio).
7) Religione / superstizione dei marinai: 10 rituali prima di partire.

Vicino:
- 10 conflitti portuali
- 5 false mappe del tesoro (e perché imbrogliano).`,
  thumbnail: ""
},
{
  id: "crea-mundos-014",
  title: "Mondo cyberpunk: aziende, quartieri e tecnologia sociale",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Costruisce un cyberpunk con economia, sorveglianza, propaganda e sottoculture reali.",
  prompt: `Disegna un mondo Cyberpunk con un approccio sociale (non solo neon). Deve sentirsi come un sistema.

Include:
1) 5 società: prodotto reale, monopolio, tattica di controllo, scandalo sepolto.
2) 6 strati della città: dall'attico al sottosuolo / aree senza legge (come va su / giù).
3) Tecnologia quotidiana: 10 cose che le persone usano ogni giorno + 5 fallimenti comuni.
4) Sorveglianza: chi guarda chi, che cosa può essere comprato per "scomparire".
5) Sottoculture: 6 tribù urbane con estetica + regole + conflitto interno.
6) Economia di sopravvivenza: 8 posti di lavoro grigi (semi-legali) e come ti sfruttano.
7) Lingua: 20 termini gergo (con definizione e contesto).

Chiudi: 12 ganci di storia e 1 rivoluzione che potrebbe essere il marketing.`,
  thumbnail: ""
},
{
  id: "crea-mundos-015",
  title: "Mondo desertico: acqua, onore, caravan e citadi--oasi",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un mondo in cui l'acqua è il centro del potere: leggi, mercati, viaggi e rituali.",
  prompt: `Disegna un mondo dominato dai deserti dove l'acqua definisce politica, religione e sopravvivenza.

Include:
A) Geografia: 5 tipi di deserto (sale, roccia, dune, cenere, vetro) e i suoi pericoli.
B) Acqua: 6 fonti (oasi, aquiferi, ghiaccio, condensatori, ecc.) + che controllano ciascuno.
C) leggi dell'acqua: 10 regole (legge, punizione, eredità, ospitalità, guerra).
D) Caravans: percorsi, escort, animali / veicoli, cartelli, banditi.
E) Cittadini -oasis (3): quartieri, economia, corruzione, festival principale.
F) Cultura: 8 rituali legati all'acqua + 5 proverbi.

Vicino:
- 10 potenti scene di stress idrico
- 5 false oasi "mappa" (e perché esistono).`,
  thumbnail: ""
},
{
  id: "crea-mundos-016",
  title: "Continente congelato: risorse, isolamento e miti di ghiaccio",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Sviluppa un mondo polare: sopravvivenza, commercio, fauna, malattia e culto freddo.",
  prompt: `Disegna un continente congelato dove vivere è una scelta politica.

Include:
1) Temperature e stagioni: 4 periodi dell'anno + quali cambiamenti (luce, viaggio, caccia).
2) Risorse: 6 risorse (minerali, alghe, calore geotermico, pelli, dati, ecc.) e il loro conflitto.
3) Settlements: 6 tipi (domini, grotte, navi congelate, ecc.) con vantaggi e guasti.
4) Malattie e rischi: 8 (fisico e psicologico).
5) Cultura: 8 rituali freddi + 5 tabù + 3 canzoni popolari (tema).
6) "Ice Myth": 3 versioni dello stesso mito che divideva le persone.

Vicino:
- 10 ganci di storia
- 1 segreto nascosto sotto il ghiaccio che riscrive la storia.`,
  thumbnail: ""
},
{
  id: "crea-mundos-017",
  title: "Economia mondiale: prezzi, monopoli e crisi",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Definisce come i soldi si muovono e perché c'è crisi: commercio, valuta, banche e contrabbando.",
  prompt: `Agisce come economista narrativo. Crea un'economia globale facile da capire ma profonda.

Include:
A) Valuta (s): 2 monete ufficiali + 1 alternativa (baratto / crypto / voucher) e perché esiste.
B) 8 beni essenziali e la loro supply chain (che produce, che trasporta, chi addebita).
C) 3 monopoli: come sono nati, come schiacciano la concorrenza, qual è il loro tallone d'Achille.
D) Tasse / pedaggi: 5 modi per raccogliere e come le persone evadono ciascuno.
E) Mercato nero: 6 prodotti e 4 percorsi.
F) Crisi attuale: causa reale, causa ufficiale, capro espiatorio, vincitori nascosti.
G) "Prezzi approssimativi": elenco di 20 cose al giorno (cibo, alloggio, trasporto, tangenti) da scalare.

Si chiude con 12 scene in cui l'economia genera conflitti drammatici (non mostre).`,
  thumbnail: ""
},
{
  id: "crea-mundos-018",
  title: "Mondo verticale: città torre e classi per altezza",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna un mondo in cui l'altezza è stato: infrastrutture, clima, lavoro e ribellione.",
  prompt: `Disegna una civiltà mondiale / verticale (torre, rischi, megstrutture) dove l'altezza definisce la classe sociale.

Include:
1) La struttura: come è stato costruito, chi lo mantiene, cosa succede se fallisce.
2) Capo (7 livelli): nome, aria / clima, sicurezza, cibo, lavoro, tempo libero, pericolo.
3) Trasporto verticale: 5 metodi + costi + sabotaggio frequente.
4) Leggi per altezza: 8 regole assurde ma funzionali.
5) Cultura: 5 simboli di stato e 5 insulti secondo l'altezza.
6) Conflitto: 3 forme di resistenza (artistica, tecnica, violenta) + 1 infiltrazione.

Vicino: 10 posizioni e 10 scene che possono verificarsi solo in verticalità.`,
  thumbnail: ""
},
{
  id: "crea-mundos-019",
  title: "Mondo sotterraneo: geologia, luce, cibo e psicologia",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un mondo sotterraneo: risorse, funghi, religioni oscure e minacce.",
  prompt: `Disegna una civiltà interrata completa e coerente.

Include:
A) Geologia: 4 strati (profondità) con materiali e rischi.
B) Luce: 5 fonti (bioluminescenza, cristalli, reattori, ecc.) + la loro funzione sociale (che controlla la luce).
C) Alimentazione: 6 fonti (fungi, insetti, pesci ciechi, cultura, ecc.) e la loro economia.
D) Cultura delle tenebre: 6 rituali + 5 metafore comuni + 3 paure imparate collettivamente.
E) Minacce: 8 (freschi, gas, creature, guerre di tunnel).
F) Cartografia: come sono orientati senza cielo (tecnica, strumenti, errori comuni).

Vicino:
- 10 siti iconici della metropolitana
- 1 verità su "la superficie" che nessuno accetta.`,
  thumbnail: ""
},
{
  id: "crea-mundos-020",
  title: "Mondo galleggiante: isole nel cielo e fisica interna",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna un mondo di isole galleggianti: energia, risorse, viaggi aerei e conflitti di altitudine.",
  prompt: `Crea un mondo di isole galleggianti con regole interne chiare (fisica / magia / tecnologia).

Include:
1) Perché galleggiano: spiegazione e 5 conseguenze per la società / architettura.
2) Altitudini: 4 aree del cielo con clima / pericoli diversi.
3) Viaggi: 6 metodi (dirigibili, alianti, portali "correnti", ecc.) con limitazioni reali.
4) Risorse: ciò che manca sopra (legno, metallo, cibo, acqua, carburante) e come lo risolvono.
5) Politica: 4 città - isola (valori, alleanze, ricatto).
6) Pirateria aerea: 3 stili, 3 armi, 3 tattiche.
7) Cultura: 10 superstizioni sul "bottom".

Vicino: 12 ganci di storia e 1 imminente catastrofe dell'aria.`,
  thumbnail: ""
},
{
  id: "crea-mundos-021",
  title: "Mondo dei confini viventi: muri, zone di quarantena e voci",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea confini con la vita: quartieri, controlli, rifugiati, contrabbando e propaganda.",
  prompt: `Disegna un mondo in cui i confini sono molto importanti (parete, quarantena, area maledetta, confine legale).

Include:
A) Perché il confine esiste: vera minaccia vs minaccia narrata.
(B) Infrastrutture di frontiera: torri, dogane, sensori, pattuglie, tangenti.
C) Popolazioni di confine: 5 profili (migranti, mercanti, soldati, banditi, guaritori).
D) Contraente: 6 merci, 4 rotte, 3 tecniche di occultamento.
E) Propaganda: 6 messaggi dal lato A e 6 dal lato B, entrambi "sono a destra" parzialmente.
F) Incident trigger: una morte / infezione / attacco che cambia politica.

Finale: 10 scene di confine con tensione + 5 segreti che investono in colpa.`,
  thumbnail: ""
},
{
  id: "crea-mundos-022",
  title: "Mondo con calendario e astronomia (parti, maree, profezie)",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna un calendario proprio e come influisce sulla religione, l'agricoltura, la politica e le profezie.",
  prompt: `Disegna l'astronomia e il calendario del mondo per influenzare la vita reale.

Include:
1) Cielo: numero di lune / suole, costellazioni chiave, anomalia astronomica.
2) Calendario: mesi / stagioni / vacanze, come contano anni, che lo standardizza.
3) Impatto:
- Agricoltura e colture
- Navigazione
- Religione e rituali
- Economy (tasse date, fiere)
- Politica (giurori, elezioni)
4) 8 partiti: nome, origine, rituale, cibo, pericolo (c'è sempre uno).
5) 3 profezie astronomiche: 1 vero, 1 falso utile, 1 frainteso.

Chiudi: 10 dettagli per descrivere il cielo in scene senza ripetere.`,
  thumbnail: ""
},
{
  id: "crea-mundos-023",
  title: "Architettura del mondo: materiali, clima e estetica coerente",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea stili architettonici per regione e classe sociale, con funzione e simbolismo.",
  prompt: `Agisce come architetto / arte concettuale. Disegna l'architettura del mondo basata su clima, risorse e potere.

Consegna:
A) 5 materiali dominanti (pietra, fango, bambù, biocemento, ecc.) e perché.
B) 4 stili regionali: ciascuno con:
- Silhouette / forma generale
- Soluzione climatica (vento / pioggia / calore / freddo)
- Decorazione simbolica (che comunica)
- Interno: distribuzione tipica e privacy
C) Differenze di classe sociale: soffitto, finestre, porte, illuminazione, sicurezza.
D) Edifici chiave: tempio, mercato, corte, scuola, obitorio, prigione, ospedale (come sono e cosa sentono).
E) 10 dettagli "cinemagrafici" da descrivere senza piani tecnici.

Chiudi: 10 posizioni pronte per scene + 5 segreti nascosti nel design.`,
  thumbnail: ""
},
{
  id: "crea-mundos-024",
  title: "Mondo basato su materiale raro (sale, ambra, ossidiana, corallo...)",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un mondo in cui un materiale cambia tutto: economia, religione, guerra e arte.",
  prompt: `Scegliere un materiale raro come l'asse del mondo (o chiedermi quale) e costruire il mondo intorno.

Include:
1) Materiale: proprietà reali / romanze e perché è prezioso.
2) Estrazione: dove sei, che lavora, rischia e incidenti tipici.
3) Economia: prezzi, monopoli, contrabbando, falsificazioni.
4) Religione: cosa significa simbolicamente, rituali e reliquie.
5) Guerra: 3 armi / difese / tecnologie basate sul materiale.
6) Art: 6 usi culturali (fashion, architettura, musica, tatuaggi, ecc.).
7) Conseguenza ecologica: ciò che viene distrutto per estrarlo.

Vicino con:
- 10 ganci di storia
- 5 "comune bugie" sul materiale e perché sono d'accordo.`,
  thumbnail: ""
},
{
  id: "crea-mundos-025",
  title: "Mondo con strane leggi (ma funzionali) e la loro origine",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Genera leggi memorabili che nascono da traumi storici, tecnologia o un mostro.",
  prompt: `Crea 20 strane leggi del mondo che sono funzionali (non casuali). Per ogni legge:

- La legge (testo semplice)
- Origine (evento storico / minaccia / tecnologia)
- Chi l'ha imposto e perché
- No. Come viene usato per abusare del potere
- Come la gente comune lo evada o "lo faccia per bugia"
- Una scena in cui viene applicata (microscene di 3-4 linee)

Inoltre:
- 5 "leggi non scritte" (norme sociali più forti della legge).
- 3 riforme in discussione che potrebbero innescare una rivoluzione.`,
  thumbnail: ""
},
{
  id: "crea-mundos-026",
  title: "Mondo con genocidio / trauma storico (trattato con rispetto)",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Sviluppa un trauma collettivo con memoria, riparazione, negazionismo e effetti generazionali.",
  prompt: `Disegna un evento storico traumatico del mondo (guerra, spostamento, catastrofe) con attenzione e rispetto umano. Evita morbo.

Include:
1) Prima: come era la vita (3 cartoni animati giornalieri).
2) L'evento: quello che è successo, che è stato colpito, quello che è stato perso.
3) Dopo:
- Dislocazione e diaspora
- Cambiamenti linguistici / nomi / rituali
- Economia e terra
4) Memoria: 3 modi per ricordare (monumenti, canzoni, storie) e 2 modi per cancellare (censura, propaganda).
5) conflitto attuale: riparazione contro vendetta contro oblio (posizioni con argomenti forti).
6) 6 possibili scene che mostrano trauma senza spiegarlo.

Chiudi: 5 oggetti simbolici (relitto, carta, indumento, ricetta, mappa) che conservano la storia.`,
  thumbnail: ""
},
{
  id: "crea-mundos-027",
  title: "Mondo con IA / Oracle: verità, previsione e libero arbitrio",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Esplora un sistema oracolare (IA o magia) che predice e riordina la società, con conseguenze etiche.",
  prompt: `Crea un mondo in cui c'è un ORACLE (IA, algoritmo, magia, rete di profeti) che prevede comportamenti / eventi.

Include:
A) Cosa prevede, con quale precisione e cosa non può prevedere.
B) Chi controlla l'accesso (prezzo, permessi, caste).
C) Istituzioni create intorno a: 5 (preventiva, assicurazione, matrimonio, occupazione, polizia).
D) Effetti sociali: 8 cambiamenti nella datazione, affari, crimine, fede, arte, educazione.
E) Mercato nero delle previsioni: 5 prodotti (rubricati, falsificati, ecc.).
F) Paradojas: 6 (autocomplimento, sabotaggio, "rumore").
G) Conflitto: 3 movimenti anti-oracolo, 3 movimenti pro- oracolo.

Chiudi: 10 ganci di storia e 1 oracolo segreto (perché si mente a volte).`,
  thumbnail: ""
},
{
  id: "crea-mundos-028",
  title: "Mondo con memoria come valuta: mercato, crimine e amore",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna un mondo in cui la memoria viene scambiata: chi paga, chi perde identità e chi manipola.",
  prompt: `Disegna un mondo in cui i ricordi possono essere estratti, memorizzati e scambiati.

Include:
1) Tecnologia / magia: come vengono estratti, formati, degradazione, rischi.
2) Economia: chi acquista souvenir (5 profili) e perché; prezzi approssimativi.
(3) Legge: 8 crimini di memoria (frauda, estorsione, "impianto", ecc.) e punizione.
4) Cultura: 6 rituali e 6 tabù (è considerato infedeltà vendere certi ricordi?).
5) Politica: 3 Usa lo Stato (sorveglianza, propaganda, giustizia) e 2 resistenza.
6) Vita quotidiana: 3 scene di persone ordinarie che usano ricordi (tenderness, horror, commedia).
7) Il grande dilemma: cosa è "io" senza i miei ricordi?

Chiusura: 12 possibili cornici e 5 oggetti / file che nascondono verità.`,
  thumbnail: ""
},
{
  id: "crea-mundos-029",
  title: "Mondo con stagioni estreme: la società adattata al ciclo",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea stazioni che cambiano tutto: migrazione, governo, guerre e riti per stagione.",
  prompt: `Disegna un mondo con stazioni EXTREMAS (ad esempio, notte di 6 mesi, piogge di 3 mesi, vento assassino, ecc.).

Include:
A) Il ciclo annuale: 4 fasi con durata esatta e effetti fisici.
B) Adattamenti umani: architettura, abbigliamento, dieta, energia, trasporto.
C) Governo stagionale: come le leggi / le tasse / l'esercito cambiano secondo la fase.
D) Migrazione: chi si muove, percorsi, conflitti a passo.
E) Religione: 6 rituali per "convincere" la stazione.
(F) Crimine: 6 crimini tipici per fase (a causa della carenza / opportunità).
G) Guerra: perché è combattuta in una fase e negoziata in un'altra.

Chiusura: 10 scene per fase e 3 segreti sull'origine del ciclo.`,
  thumbnail: ""
},
{
  id: "crea-mundos-030",
  title: "Mondo con brutale amministrazione: burocrazia come cattivo",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna un sistema burocratico oppressivo: forme, permessi, code, punizione e resistenza.",
  prompt: `Disegna un mondo in cui la burocrazia è il vero mostro (senza caricatura). Voglio procedure, documenti e conseguenze.

Include:
1) L'istituzione centrale: nome, missione ufficiale, missione reale.
2) 10 documenti obbligatori / formati (con nomi e scopo).
3) 8 punti di attrito: code, guarnizioni, ispezioni, quote, lingue, ecc.
(4) Corruzione: 6 tangenti con "fee" e 4 truffe di funzionari.
(5) Punizione: 6 misure (amministrative → criminali).
6) Resistenza: 4 tattiche (hacking, sabotaggio, arte, infiltrazione) e rischi.
7) Vita quotidiana: una scena di 500 parole di qualcuno che cerca di risolvere qualcosa di semplice.

Vicino: 10 conflitti perfetti per le storie.`,
  thumbnail: ""
},
{
  id: "crea-mundos-031",
  title: "Mondo con sport / rituale centrale che sostiene la società",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un gioco / sport / rituale come spina dorsale politico, economico e culturale.",
  prompt: `Crea un mondo in cui una società competitiva di strutture sportive o rituali.

Include:
A) Il gioco: regole chiare, obiettivo, durata, ruoli, attrezzature, arbitri.
B) Origine storica: perché è iniziata e come è diventata sacra / industriale.
C) Economia: biglietti, scommesse, accademie, sponsor, corruzione.
D) Politica: come viene usato per pacificare, reclutare, distrarre o legittimare il potere.
E) Cultura: 10 canzoni / canzoni, 10 insulti, 5 gesti fan, 3 superstizioni.
F) Shadow: 6 scandali tipici (doping, arrangiamenti, ricatto).
G) Storia: 10 ganci (giocatore, allenatore, fanatico, giornalista, polizia).

Chiudi: 1 fine della stagione epica e 1 verità oscura che nessuno vuole vedere.`,
  thumbnail: ""
},
{
  id: "crea-mundos-032",
  title: "Mondo con \"zone proibite\" e scienza / mito intorno",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna aree proibite con regole graduali, segni, guardiani e segreti.",
  prompt: `Disegna 3 aree vietate del mondo (proibite dalla legge, dalla paura o dalla fisica) e costruisce il suo mito.

Per ogni area:
- Nome
- No. Perché è vietato (versione ufficiale vs versione reale)
- Segnali di avvicinamento (3)
- Guardiani / difese (umane e non umane)
- No. Quale risorsa / tentazione è dentro
- 3 storie "di qualcuno che è entrato" (una vera, una bugia esagerata, utile)
- Come potrebbero entrare i protagonisti (2 possibili metodi)
- No. Ciò che cambia la persona che lascia (costo esatto)

Vicino: 10 scene di esplorazione senza info-dump e 1 segreto condiviso tra le 3 aree.`,
  thumbnail: ""
},
{
  id: "crea-mundos-033",
  title: "Mondo con classi / razze / specie: integrazione senza cliché",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Definisce popoli / specie con cultura, economia e conflitto evitando stereotipi vuoti.",
  prompt: `Crea 4 popoli / specie / classi sociali del mondo evitando cliché. Voglio la complessità umana.

Per ogni gruppo:
1) Nome + autonome + quello che chiamano gli altri (e perché).
(2) Organizzazione sociale (famiglia, lavoro, proprietà).
3) Economia: ciò che producono, ciò che importa, ciò che monopolizzano.
4) Cultura: 5 valori, 5 usanze giornaliere, 5 tabù.
5) Lingua: 5 espressioni linguistiche.
6) conflitto interno: 2 fazioni e il loro dibattito.
7) conflitto esterno: 2 tensioni con altri gruppi + un evento recente.
8) "cosa ammirevole" e "cosa terribile" del gruppo (entrambi i reali).

Vicino:
- 8 condizioni di vita (amore, mercato, scuola, ospedale, corte)
- 5 errori tipici quando li rappresentano (e come evitarli).`,
  thumbnail: ""
},
{
  id: "crea-mundos-034",
  title: "Noir World: morale grigia, istituzioni urbane e segreti",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Costruisce un mondo noir: corruzione, ricatto, stampa, polizia e crimine con strati.",
  prompt: `Disegna un mondo di noir (urbano o futuristico) dove il potere ha sempre un prezzo.

Include:
1) Istituzioni (6): polizia, stampa, giustizia, unione, chiesa / club, società.
2) Per ogni istituzione: ciò che vende, ciò che nasconde e ciò che teme.
3) crimine organizzato: 3 famiglie / bande con stili diversi.
4) Corruzione: 8 "legant ways" per comprare le persone.
5) Un caso famoso irrisolto: cronologia, sospetti, prove contraddittorie.
6) Ambimentazione: 20 dettagli sensoriali ricorrenti (uva, fumo, neon, odore, musica).
7) La regola morale del mondo: 5 dilemmi dove tutti perdono qualcosa.

Chiusura: 12 ganci noir e 1 possibile finale acida.`,
  thumbnail: ""
},
{
  id: "crea-mundos-035",
  title: "Mondo rurale profondo: tradizione, modernità e conflitto silenzioso",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un mondo rurale con tensioni reali: terra, eredità, voce, religione e migrazione.",
  prompt: `Disegna una regione rurale profonda (non idealizzata) con tensione tra tradizione e cambiamento.

Include:
(a) Territorio: geografia, clima, colture / bestiame, rischi.
B) Comunità: 8 ruoli chiave (framoglie, insegnante, sacerdote, ceco, ecc.) e i loro segreti.
C) Economia: reddito reale, debito, dipendenza, mercato nero.
D) Rumore e reputazione: 10 pettegolezzi e quale parte è vera.
E) Conflitto: un progetto esterno che minaccia tutto (dam, mine, base, strada).
F) Cultura: 6 rituali, 6 frasi tipiche, 3 canzoni / leggende.

Vicino:
- 10 scene di città
- 5 giri dove "semplice" era complesso.`,
  thumbnail: ""
},
{
  id: "crea-mundos-036",
  title: "Mondo oceano: città subacquee e pressione politica",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna la civiltà sotto il mare: pressione, energia, cibo, psicologia e confini acquatici.",
  prompt: `Disegna un mondo oceanico con insediamenti subacquei e conflitti di pressione / ossigeno.

Include:
1) Tecnologia / biologia per vivere di seguito: 6 strumenti chiave e 6 guasti fatali.
2) Energia: 4 fonti (geotermia, maree, bio, ecc.) + che li controlla.
3) Cibo: 6 fonti e la loro economia.
4) Politica: 4 città subacquee con rivalità.
5) Sicurezza: pirateria subacquea, sabotaggio, terrorismo delle porte.
6) Cultura: 10 superstizioni marine profonde, 5 tabù, 5 gesti.
7) Fauna: 6 creature credibili e come influiscono sulle rotte.

Chiusura: 10 ganci e 1 catastrofe a catena.`,
  thumbnail: ""
},
{
  id: "crea-mundos-037",
  title: "Mondo con arte come potere: censura, scuole e mercato",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un mondo in cui l'arte (musica, pittura, scrittura) ha potere letterale o politico.",
  prompt: `Disegna un mondo in cui l'arte ha potere (letterale o sociale) ed è quindi controllata.

Include:
A) Che cosa le arti importa (3) e come "lavorano" (potere, influenza, controllo).
(B) Istituzioni: 3 accademie / scuole e 2 agenzie di censura.
C) Mercato dell'arte: 6 prodotti, 4 truffe, 3 collezionisti pericolosi.
D) Metropolitana: 4 movimenti artistici clandestini e il loro manifesto.
E) Conflict: un artista scomparso con un lavoro che cambia il mondo.
F) Cultura: 10 frasi, 10 abitudini, 5 rituali intorno all'arte.

Chiudi: 12 ganci trama e 1 capolavoro che è un'arma.`,
  thumbnail: ""
},
{
  id: "crea-mundos-038",
  title: "Mondo con diverse medicine: guarigione, permessi ed etica",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Definisce come le persone guariscono: ospedali, guaritori, costi, limitazioni e conflitti etici.",
  prompt: `Disegna il sistema di salute / guarigione del mondo (realistico e drammatico).

Include:
1) Come si cura: 3 metodi (scientifico, tradizionale, magico / tecnologico) e i loro limiti.
2) Professioni: 6 ruoli medici e le loro rivalità.
3) Accesso: chi può pagare, chi non può, e ciò che esiste per i poveri (e la loro trappola).
4) Malattie del mondo: 8 (ciascuno con sintomo distintivo e stigma sociale).
5) Etica: 5 dilemmi (triage, esperimenti, eugenetica, permessi, aborto, ecc.) secondo il vostro mondo.
6) Mercato nero: 6 prodotti / servizi e 3 reti di traffico.

Chiudi: 10 scene cliniche intense e 1 segreto di una cura che non vogliono rilasciare.`,
  thumbnail: ""
},
{
  id: "crea-mundos-039",
  title: "Mondo con particolare giustizia: tribunali, prove e punizioni",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un sistema legale che genera storie: giudizi, corruzione, prove e punizioni simboliche.",
  prompt: `Disegna il sistema giudiziario del mondo (procedure specifiche).

Include:
A) Filosofia giuridica: punizione vs riparazione vs utilità.
B) Procedura: dal reclamo alla sentenza (passi).
C) Prove: 8 tipi accettati (testimoni, reliquie, dati, giuramento, magia, ecc.) e come sono falsificati.
D) Castelli: 10 (da mite a estremo) con impatto sociale.
E) Corruzione: 6 guasti del sistema e che beneficiano.
F) Casi famosi: 3 casi che hanno diviso il paese e cambiato le leggi.

Chiudi: 10 semi di storie legali e 5 "lagoons" sfruttabili dai protagonisti.`,
  thumbnail: ""
},
{
  id: "crea-mundos-040",
  title: "Mondo di confine tecnologico: realistica colonia spaziale",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea una colonia con limiti fisici: ossigeno, radiazione, politica delle risorse e psicologia.",
  prompt: `Disegna una colonia spaziale realistica (su pianeta / luna / stazione). Voglio limiti fisici che generano dramma.

Include:
1) Posizione: gravità, radiazione, clima / polvere, rischi.
2) Infrastrutture di vita: aria, acqua, cibo, energia, riciclaggio (come funziona e dove fallisce).
3) Politica: chi è responsabile (azienda, stato, cooperativa) e perché.
4) Economia: salari, debiti, crediti, contrabbando.
5) Psicologia: 8 problemi comuni (isolazione, claustrofobia, paranoia, duello).
6) Cultura: 6 rituali a "feel umano" + 6 tabù.
7) Conflitto: 1 guasto catena + 3 lati con piani opposti.

Vicino: 12 ganci e 1 segreto del perché la colonia è stata realmente fondata.`,
  thumbnail: ""
},
{
  id: "crea-mundos-041",
  title: "Mondo con mostro istituzionale: un'agenzia segreta",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un'agenzia (o culto / ordine) che controlla le informazioni e opera con regole interne.",
  prompt: `Disegna un'agenzia segreta del mondo (governo / corporazione / ordine religioso) con coerenza.

Include:
A) missione ufficiale contro missione reale.
(B) Struttura: 7 intervalli e 3 dipartimenti (operazioni, analisi, pulizia, ecc.).
C) Regole interne: 12 regole (e 4 punizioni interne).
D) Reclutamento: profili, prove, ricatto, giuramento.
E) Strumenti: 8 risorse (tecnologia / magia) e i loro limiti.
F) Enemies: 3 tipi (esterno, interno, ideologico).
G) Scandalus: un fallimento storico che cercano di cancellare.

Chiudi: 10 pezzi e 5 "documenti filtrati" che cambiano tutto.`,
  thumbnail: ""
},
{
  id: "crea-mundos-042",
  title: "Mondo con diversa infanzia / adolescenza (educazione e rito di passaggio)",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Progetta l'educazione, la scuola e i riti di passaggio che riflettono i valori e i pericoli del mondo.",
  prompt: `Disegna come i bambini e gli adolescenti crescono in questo mondo (educazione, lavoro, riti, paura).

Include:
1) Fasi: 4 stadi di età e ciò che è previsto in ciascuno.
2) Istruzione: chi insegna, ciò che è veramente insegnato, ciò che è censurato.
3) rito di passaggio centrale: ciò che è fatto, rischi, premio, possibile trauma.
4) Lavoro precoce: 6 scambi giovanili e sfruttamento tipico.
5) Punizione e disciplina: 6 metodi e loro giustificazione culturale.
6) Ribella: 4 sottoculture giovanili e perché nascono.

Vicino: 10 scene di allenamento e 1 tradizione che inizia a rompere.`,
  thumbnail: ""
},
{
  id: "crea-mundos-043",
  title: "Mondo con cibo come identità: piatti, scarsità ed etichette",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea gastronomia con storia: ingredienti, rituali, stato, fame e commercio.",
  prompt: `Disegna la gastronomia del mondo ad essere un vero motore culturale.

Include:
A) 12 ingredienti di base (da diverse regioni) e come si ottengono.
B) 12 piatti iconici (4 strada, 4 casa, 4 élite):
- Ingredienti
- Preparazione (sommario)
- No. Quando si mangia
- No. Cosa simboleggia
C) Pericolo e fame: 3 periodi storici di crisi alimentare e ciò che è cambiato.
D) Tag: 10 regole di tabella che rinunciano alla classe sociale.
E) Commercio: 6 vie di spezia / cibo e conflitti.

Vicino: 10 scene dove il cibo è tensione (non riempitivo).`,
  thumbnail: ""
},
{
  id: "crea-mundos-044",
  title: "Mondo con moda e simboli: abbigliamento per clima, classe e religione",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Abito di design coerente con risorse e codici: uniforme, accessori, tabù e segnali.",
  prompt: `Disegna la moda / vestito del mondo con coerenza materiale e simbolica.

Include:
1) Materiali tessili (6) e che possono utilizzare ciascuno.
2) 4 stili regionali: tavolozza, silhouette, parti chiave, accessori.
3) Differenze della classe sociale: ciò che può essere portato e ciò che è proibito.
4) Uniforme: 5 istituzioni con uniformi (polizia, clero, scuola, esercito, gilda) e il loro messaggio.
5) Simboli: 10 segni in abbigliamento (colori, nodi, ricami) e quello che comunicano.
6) Taboos: 6 errori di abbigliamento che possono causare violenza.

Chiudi: 10 brevi descrizioni pronte a inserire personaggi sul palco.`,
  thumbnail: ""
},
{
  id: "crea-mundos-045",
  title: "Mondo con voci: rete di informazioni, stampa e pettegolezzi",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea l'ecosistema dell'informazione: stampa, propaganda, messaggeri, perdite e paranoia.",
  prompt: `Disegna come le informazioni circolano nel mondo (rumor, pressa, messaggeri, reti, magia, ecc.).

Include:
A) 6 canali informativi: velocità, costo, affidabilità, che controlla.
(B) 5 forme di censura e 5 forme di evitamento.
(C) Propaganda: 8 tecniche specifiche ed esempi di messaggi.
D) Chisme: 12 tipi di voci locali (e chi lo fa).
E) Filtri: 4 tipi (documenti, testimoni, arte, dati) e il loro impatto.
F) "Truth" crisi: 1 evento dove nessuno sa cosa credere.

Chiudi: 10 scene con tensione dell'informazione e 5 segreti che si tengono solo per disinformazione.`,
  thumbnail: ""
},
{
  id: "crea-mundos-046",
  title: "Mondo con schiavitù / servitù: economia, resistenza e dilemmi",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Esplora la servitù con la complessità (senza morbo): strutture, complicità e resistenza.",
  prompt: `Disegna un sistema di schiavitù / schiavitù / colonato nel mondo con un approccio critico e umano (senza romanticismo).

Include:
1) Modulo di sistema: legale, debiti, caste, guerra, contratti.
2) Economia: chi beneficia, quali industrie dipendono, cosa succederebbe se cade.
3) Vita quotidiana: 3 scene (lavoro, riposo, punizione) trattate con rispetto.
4) Complicità: 5 gruppi che lo sostengono e le sue razionalizzazioni.
5) Resistenza: 6 forme (fuga, sabotaggio, sindacati, arte, religione, spionaggio).
6) Momento storico: tentativo di abolire il fallimento e le sue conseguenze.
7) Conflittuale attuale: riforma contro rivoluzione contro "improvements cosmetici".

Chiudi: 10 ganci narrativi focalizzati sull'agenzia e sulla dignità.`,
  thumbnail: ""
},
{
  id: "crea-mundos-047",
  title: "Mondo con mostri come una risorsa (dominalità ed etica)",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Disegna una società che utilizza le creature come risorsa: trasporto, energia, medicina, guerra e moralità.",
  prompt: `Disegna un mondo in cui creature / mostri sono una risorsa economica (domesticato o cacciato).

Include:
A) 6 creature: aspetto, dieta, comportamento, pericolo, uso umano.
(B) Industria: aziende agricole, cacciatori, veterinari, traffico illegale.
(C) Etica: 3 dibattiti (diritti, sofferenze, rischi ecologici).
D) Sicurezza: 6 incidenti e protocolli tipici.
E) Cultura: 6 proverbi, 4 festival, 3 sport a base di creature.
F) Conflitto: una creatura "chiave" sta scomparendo e nessuno ammette il perché.

Vicino: 10 scene e 1 devastante segreto ecologico.`,
  thumbnail: ""
},
{
  id: "crea-mundos-048",
  title: "Mondo con portali: geopolitica, economica e migrazione",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Definire portali con regole: chi li controlla, come cambiano il commercio, la guerra e la cultura.",
  prompt: `Disegna un mondo con portali / teletrasporto, ma con regole e conseguenze realistiche.

Include:
1) Porti: come funzionano, costi, restrizioni, manutenzione.
2) Rete: quanti ci sono, dove sono, chi li gestisce.
3) Economia: quali merci diventano a buon mercato / costoso, quali industrie crollano, ciò che è nato nuovo.
4) Guerra: 4 strategie militari con portali e 3 contromisure.
5) Migrazione: chi si muove, chi viene catturato, xenofobia.
(6) Crimine: 6 reati specifici (combattimento, rapimento, ecc.).
7) Cultura: 5 costumi nati per vivere "vicino a un portale".

Chiudi: 10 ganci e 1 "portale falso" usato come arma psicologica.`,
  thumbnail: ""
},
{
  id: "crea-mundos-049",
  title: "Mondo con mostro metafisico: una regola dell'universo rotto",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Crea un mondo in cui una legge naturale fallisce: tempo, morte, lingua, ombre o ricordi.",
  prompt: `Scegliere una LEGA UNIVERSE che è rotta in questo mondo (tempo, morte, gravità, lingua, ombra, identità, ecc.) e progettare conseguenze coerenti.

Include:
A) La rottura: come si manifesta e da quando.
B) 10 effetti sulla vita quotidiana.
(C) 6 nuove professioni che esistono a causa della rottura.
(D) 6 nuovi crimini.
E) Religione e filosofia: 3 interpretazioni e loro culti.
(F) Governo: 3 misure di controllo (efficace, brutale, assurda).
G) Scienza / magia: tenta di risolverlo e perché falliscono.

Chiudi: 12 ganci e 1 verità: la legge infranta è stata causata da qualcuno / qualcosa.`,
  thumbnail: ""
},
{
  id: "crea-mundos-050",
  title: "Lista di controllo finale: coerenza mondiale + 20 domande letali",
  area: "Scrittura creativa",
  category: "Mondo",
  summary:
  "Audit il vostro mondo: domande che rilevano lacune, cliché, incongruenze e opportunità drammatiche.",
  prompt: `Agisce come editore di costruzione del mondo e mi rende un AUDIT. Ti darò una breve descrizione del mio mondo (o inventerò uno se non ti do).

Il vostro compito:
1) Fai 20 domande letali di coerenza (economia, viaggi, energia, classe, genere, guerra, salute, informazioni, clima, religione, ecc.).
2) Punta a 10 punti dove ci sono spesso cliché o incongruenze e come evitarli.
3) Prop 8 "restrizioni" che rendono il mondo più interessante (regole che limitano e creano storie).
4) Prop 12 conflitti inevitabili che sorgono solo da come il mondo funziona.
5) Prop 10 "repetibile" dettagli sensoriali (leitmotifs) per far sentire il mondo vivo.
6) Chiudi con un mini-sommario: "l'unica cosa" al mondo in 3 frasi.

Tono: diretto, utile, senza ornamenti vuoti. Fa male (costruttivamente).`,
  thumbnail: ""
}];