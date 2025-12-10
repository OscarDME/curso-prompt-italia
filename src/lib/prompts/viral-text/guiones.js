// src/lib/prompts/viral-text/guiones.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Schermo";
const CATEGORY = "Storia";

export const viralTextPromptsGuiones = [
{
  id: "viral-guion-storytime-001",
  title: "Storytime express (15s) con giro",
  summary: "La storia in 3 atti con una rapida estrazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Agisce come un breve scrittore. Scrivere una sceneggiatura di 15 secondi per _ PH0 _ _ _.
Struttura obbligatoria:
Atto 1 (0-2s): gancio di shock (1 frase).
Atto 2 (3-10): conflitto con 2 dettagli specifici.
Atto 3 (11-15): turn + apprendimento + morbido CTA.
Include il testo sullo schermo (3 blocchi) e la voce fuori (separare).`
},
{
  id: "viral-guion-storytime-002",
  title: "Storytime 30s con lezione pratica",
  summary: "Storia personale + lezione praticabile.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare uno script storytime di 30s per _ _ PH0 _ over _ _ PH1 _ _ _.
Regole:
- 3 atti chiari.
- 1 dettaglio visivo per azione (per B-roll).
- 1 frase "anchor" memorabile.
Chiudi con CTA: "Se vuoi il modello, commenta _ PH2 _ _".`
},
{
  id: "viral-guion-storytime-003",
  title: "L'errore che mi è quasi costato tutto",
  summary: "Tempo di storia con tensione e risoluzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive una storia di 25-35s su "l'errore che quasi mi costa tutto" in _ PH0 _ _.
Include:
- Atto 1: situazione e promessa (2s).
- Atto 2: tempo esatto di errore (con numero o dati).
- Atto 3: come l'ho aggiustato in 3 passi.
Formato:
VOZ:
TEXT:
B-ROLL:`
},
{
  id: "viral-guion-storytime-004",
  title: "Pensavo che avessi visto cos'era",
  summary: "Contrasti mentali per la ritenzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare un 20-30s storytime script su _ _ PH0 _ _ con la struttura:
"Pensavo..." contro "In realtà..."
Atto 1: aspettativa ingenua.
Atto 2: shock con la realtà (1 esempio concreto).
Atto 3: nuovo modo per farlo + CTA.
Include 5 opzioni di prima scelta.`
},
{
  id: "viral-guion-storytime-005",
  title: "0 a risultato in 7 giorni",
  summary: "Mini-challenge tipo storia.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere uno script storytime di 30-45 circa una sfida di 7 giorni per raggiungere _ PH0 _ _.
Atto 1: Perché ho iniziato (pain).
Atto 2: il difficile (giorno 2-3) + regolazione chiave.
Atto 3: risultato + test (metrico) + CTA.
Aggiungere 3 metriche possibili secondo nicchia.`
},
{
  id: "viral-guion-storytime-006",
  title: "Il messaggio che ha cambiato tutto",
  summary: "Storia basata su DM / chiamata / e-mail.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 25-35s: "Il messaggio che ha cambiato tutto" in _ PH0 _.
Atto 1: ricevo il messaggio (campione 1).
Atto 2: che cosa stava facendo sbagliato (2 dettagli).
Atto 3: che cosa ho fatto da quel giorno (3 azioni).
CTA finale: "Vuoi che te lo passi?" commenta _ PH1 _ _. ".`
},
{
  id: "viral-guion-storytime-007",
  title: "Ho quasi smesso (e questo mi ha salvato)",
  summary: "Tensione emotiva + soluzione concreta.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive una storia di 30 anni: "Ho quasi smesso e questo mi ha salvato" over _ _ PH0 _ _.
Include:
- 1 frase vulnerabile (non-dramatica).
- Una decisione inaspettata.
- 1 apprendimento in linea.
- CTA: "Tienilo buono.".`
},
{
  id: "viral-guion-storytime-008",
  title: "Il giorno in cui ho capito il gioco",
  summary: "Tempo di chiarezza + riquadro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare uno script storytime 20-30s: "Il giorno in cui ho capito il gioco" in _ PH0 _ _.
Atto 1: frustrazione (1 esempio).
Atto 2: scoperta (dati o regole).
Atto 3: Cambio di messa a fuoco (2 passi) + CTA.`
},
{
  id: "viral-guion-storytime-009",
  title: "Prima / Dopo con mini-storia",
  summary: "Storytime supportato in contrasto visivo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere uno script storytime 30-40s con "Prima / Dopo" per _ PH0 _ _.
Esso comprende in ogni atto:
- Testo sullo schermo (max 7 parole).
- B-roll suggerito.
- VO con frasi brevi.
Chiudi con commento CTA.`
},
{
  id: "viral-guion-storytime-010",
  title: "La decisione scomoda",
  summary: "Storia di una scelta controintuitiva.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 25-35s su "la decisione scomoda" per migliorare _ PH0 _ _.
Atto 1: La situazione (2s).
Atto 2: la decisione (cosa ho smesso di fare) + paura.
Atto 3: risultato (metrico o effetto) + consiglio.
Tenere il tono costante e calma.`
},

{
  id: "viral-guion-storytime-011",
  title: "Il cliente che mi ha insegnato questo",
  summary: "Tempo di storia con l'apprendimento trasferibile.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive una storia di 30-45s: "Un cliente mi ha insegnato questo" su _ PH0 _ _ _.
Atto 1: contesto e attesa.
Atto 2: conflitto (che è andato storto) con 2 dettagli.
Atto 3: regola che ora applichi + veloce esempio.
CTA: "Se vuoi più casi, seguimi.".`
},
{
  id: "viral-guion-storytime-012",
  title: "Quando l'ho fatto \"perfetto\" e ha fallito",
  summary: "Storia antiperfezionista.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare uno script di 25-35s storytime: "Ho fatto perfetto e fallito" in _ PH0 _ _.
Include:
- che era "perfetto" (3 elementi).
- perché ha fallito (1 vera causa).
- quello che ho fatto diverso dopo (2 modifiche).
CTA: "È successo a te?" commenta sì'. ".`
},
{
  id: "viral-guion-storytime-013",
  title: "Il consiglio che ho ignorato (ed era oro)",
  summary: "Storia con pentimento utile.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storytime 30s: "Ho ignorato questo consiglio ed era oro" su _ PH0 _ _.
Struttura:
Atto 1: dammi il consiglio (una frase letterale).
Atto 2: Ignoro e passo X (conseguenza).
Atto 3: Faccio domanda e cambio Y (benefit) + CTA.`
},
{
  id: "viral-guion-storytime-014",
  title: "Mi vergognavo, ma l'ho fatto",
  summary: "Vulnerabilità + azione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive una storia 25-35: "Mi vergognavo, ma l'ho fatto" per _ _ PH0 _ _ _.
Atto 1: Mi vergognavo (concreto).
Atto 2: quello che ho fatto uguale (azione esatta).
Atto 3: quello che ho vinto + consiglio in 1 linea.
CTA: "Tienilo buono.".`
},
{
  id: "viral-guion-storytime-015",
  title: "Il punto di rottura",
  summary: "Il momento esatto in cui tutto cambia.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 30-40s: "my break point" over _ PH0 _.
Include:
- 1 data o periodo ("3 mesi fa...")
- 1 scena specifica (dove era)
- 1 decisione
- 1 risultato
Chiudi con CTA: "Vuoi la lista? commenti _ PH1 _.`
},
{
  id: "viral-guion-storytime-016",
  title: "Il ridicolo dettaglio che era la chiave",
  summary: "Incredibile microdetail che chiude loop.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea una storia di 20-30s in cui il "particolare ridicolo" è ciò che detrae _ _ PH0 _.
Atto 1: frustrazione.
Atto 2: Provo grandi cose (2 esempi).
Atto 3: il piccolo dettaglio (1 cosa) + risultato.
Comprende 3 idee di "particolare ridicolo" di nicchia.`
},
{
  id: "viral-guion-storytime-017",
  title: "Cosa farei diverso se ripetessi",
  summary: "Storia + elenco rapido all'interno del atto 3.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 30s: "Se lo ripeto, lo farei diversamente" in _ PH0 _ _.
Atto 1: quello che ho provato.
Atto 2: cosa è andato storto.
Atto 3: 3 modifiche (listed) + CTA.
Formato: VOZ / TEXT / B-ROLL.`
},
{
  id: "viral-guion-storytime-018",
  title: "Il malinteso che mi ha fermato",
  summary: "Errore concettuale che si sblocca.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storytime 25-35s: "Il malinteso che mi ha tenuto indietro" su _ PH0 _ _ _.
Atto 1: Credo sbagliato (una frase).
Atto 2: prova che era falso (esempio minimo).
Atto 3: nuova credenza + 2 passi pratici.
CTA: "Vuoi la parte 2?"`
},
{
  id: "viral-guion-storytime-019",
  title: "La conversazione scomoda",
  summary: "Storia basata sulla vera conversazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive una storia di 30-40s su "conversazione difficile" in _ PH0 _ _ _.
Include un mini-dialogo (2 linee) nella legge 2.
Atto 3: quello che ho imparato e come lo applico oggi.
Tienilo rispettoso e reale.`
},
{
  id: "viral-guion-storytime-020",
  title: "Mi sbagliavo su un nemico",
  summary: "Il tipo di rimbalzo non era quello.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 25-35s: "Mi sbagliavo sul nemico" over _ PH0 _.
Atto 1: Ho incolpato _ _ PH1 _.
Atto 2: è successo qualcosa che ha mostrato la verità.
Atto 3: il vero nemico _ _ PH2 _ + come lo attacchi (2 passi).
"Salva".`
},

{
  id: "viral-guion-storytime-021",
  title: "Quando ho detto 'sì' troppo veloce",
  summary: "Una storia di decisione impulsiva.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare una storia 30s: "Ho detto sì troppo veloce" in _ PH0 _ _.
Atto 1: opportunità.
Atto 2: problema che ha causato (2 dettagli).
Atto 3: regola che ora seguo + esempio.
CTA: "E' successo?"`
},
{
  id: "viral-guion-storytime-022",
  title: "Il miglior consiglio è venuto da un errore",
  summary: "Imparare dal fallimento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 20-30s: "Il mio miglior consiglio è venuto da un errore" su _ PH0 _ _.
Include 1 errore, 1 conseguenza e 1 regola attuabile.
Chiudere con CTA: "Dite 'template' se lo volete.".`
},
{
  id: "viral-guion-storytime-023",
  title: "Il momento in cui mi sono sentito dispiaciuto per gli altri",
  summary: "Storia con umorismo morbido + lezione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 25-35s con un umore morbido: "Mi dispiace per qualcun altro" over _ _ PH0 _ _.
Atto 1: scena.
Atto 2: quello che ho imparato (senza umiliare nessuno).
Atto 3: Come evitarlo (2 consigli).
CTA: "Condividilo con il tuo amico".`
},
{
  id: "viral-guion-storytime-024",
  title: "Il 'sintomo' che mi ha avvertito",
  summary: "Una storia d'allarme.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare un storytime 30-40s: "Questo sintomo mi ha avvertito" per _ PH0 _ _.
Atto 1: il sintomo (concreto).
Atto 2: Ho ignorato e superato X.
Atto 3: Ho sentito e cambiato e (2 azioni).
"Salva".`
},
{
  id: "viral-guion-storytime-025",
  title: "La regola che mi ha dato pace",
  summary: "Rapporto di semplificazione (framework).",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive una storia di 25-35 circa "la regola che mi ha dato la pace" in _ PH0 _ _ _.
Atto 1: caos.
Atto 2: Io scopro la regola (nome).
Atto 3: come applicarlo in 3 passi.
CTA: "Vuoi la regola scritta?" commenta _ PH1 _ _ _. ".`
},
{
  id: "viral-guion-storytime-026",
  title: "E' cambiato tutto quando ho smesso..",
  summary: "Storia del rapimento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 20-30s con inizio:
"Tutto è cambiato quando mi sono fermato..."
Completo di qualcosa di comune in _ PH0 _ _ _.
La legge 3 deve includere un risultato misurabile.`
},
{
  id: "viral-guion-storytime-027",
  title: "La prova che mi ha chiuso la bocca",
  summary: "Incredibile (credibile) prova.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea una storia 30s: "Il test che ha chiuso la mia bocca" over _ PH0 _ _ _.
Atto 1: Ho dubitato.
Atto 2: appare il test (dati / risultato).
Atto 3: Ho cambiato (2 passaggi) + CTA.
Non usare figure impossibili.`
},
{
  id: "viral-guion-storytime-028",
  title: "Avevo paura di pubblicarlo",
  summary: "Pressione + pubblicazione + ricompensa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 25-35s: "Ho avuto paura di pubblicare questo" per _ PH0 _.
Atto 1: Paura (concreto).
Atto 2: uguale pubblico + reazione iniziale.
Atto 3: apprendimento + consulenza pratica.
CTA: "Stai tirando su il morale?"`
},
{
  id: "viral-guion-storytime-029",
  title: "Il tempo che ho quasi rovinato dall'ego",
  summary: "Confessione morale controllata.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 30-40s: "Ho quasi rovinato dall'ego" in _ PH0 _ _.
Atto 2: descrive 1 decisione per ego.
Atto 3: quello che ho fatto per correggere e quello che avrei fatto oggi.
"Salva".`
},
{
  id: "viral-guion-storytime-030",
  title: "L'hack era una bugia",
  summary: "Si scoraggia una scorciatoia.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare una storia 25-35s: "L'hack era una bugia" su _ PH0 _ _.
Atto 1: mi vendono l'hack.
Atto 2: Provo a fallire (perché).
Atto 3: vera alternativa (2 passaggi) + CTA.`
},

{
  id: "viral-guion-storytime-031",
  title: "La cosa che mi ha dato un guinzaglio (e era la chiave)",
  summary: "Tempo di storia della resistenza interna.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 20-30s: "Sono stato sporgente e chiave" over _ _ PH0 _ _.
Atto 1: evitare.
Atto 2: conseguenza.
Atto 3: lo faccio semplice con 1 sistema + risultato.
CTA: "Vuoi il sistema?"`
},
{
  id: "viral-guion-storytime-032",
  title: "Il cambiamento di mentalità con esempio",
  summary: "Mindset senza fumo, con un caso specifico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive uno storytime 30s circa un cambiamento di mentalità in _ PH0 _ _.
Mandatory:
- 1 esempio realistico (prima / dopo).
- 2 frasi brevi per il testo dello schermo.
- CTA di stoccaggio.`
},
{
  id: "viral-guion-storytime-033",
  title: "Il tempo che mi hanno detto \"no\"",
  summary: "Reiezione + apprendimento venabile.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 30-40s: "Mi è stato detto no" in _ PH0 _ _.
Atto 1: proposta.
Atto 2: rifiuto (mettere 1 frase letterale).
Atto 3: regolazione ho fatto (2 modifiche) + risultato.
CTA: "Vuoi il modello?"`
},
{
  id: "viral-guion-storytime-034",
  title: "Quello che non ho capito finché non ho perso",
  summary: "Piccola perdita + lezione forte.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 25-35s: "Non l'ho ottenuto fino a quando non ho perso" over _ _ PH0 _ _.
Atto 2: perdita (tempo / denaro / opportunità) senza eccesso di stato.
Atto 3: regola + azione immediata.
CTA: azioni / guardie.`
},
{
  id: "viral-guion-storytime-035",
  title: "La decisione migliore era di dire NO",
  summary: "Tempo di storia dei limiti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare un storytime 30s: "La mia migliore decisione era di dire NO" su _ PH0 _ _.
Atto 2: quello che ho detto non esattamente (una frase).
Atto 3: quello che ho fatto invece di quel + risultato.
Chiudere con CTA: "Se è difficile dire di no, dire 'io'".`
},
{
  id: "viral-guion-storytime-036",
  title: "Il dettaglio di 2 secondi che innesca la ritenzione",
  summary: "Storia della piccola regolazione che cambia metriche.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 25-35s su un'impostazione di 2 secondi che migliora _ PH0 _.
Atto 1: il mio video non ha tenuto indietro.
Atto 2: Rilevo il fallimento con 1 traccia.
Atto 3: cambiamento esatto + risultato misurabile + CTA.`
},
{
  id: "viral-guion-storytime-037",
  title: "Il problema era la mia offerta (non il mio contenuto)",
  summary: "Rimborso da offrire.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 30-40: "Il problema era la mia offerta" in _ PH0 _.
Atto 1: ha fatto il contenuto quotidiano.
Atto 2: Non ho venduto (perché).
Atto 3: cambiamento di offerta (2 passaggi) + primo risultato.
CTA: "Vuoi rivedere la tua offerta?" commenta _ PH1 _ _. ".`
},
{
  id: "viral-guion-storytime-038",
  title: "Quel giorno ero arrabbiato (e era buono)",
  summary: "Emozione + apprendimento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea una storia 25-35s: "Quel giorno ero arrabbiata" su _ PH0 _ _ _ _ _ _
Atto 2: descrive il trigger (concreto).
Atto 3: trasformo la rabbia in azione (3 passi brevi).
CTA: salva.`
},
{
  id: "viral-guion-storytime-039",
  title: "Stavo sbagliando",
  summary: "Storia sulla copia senza comprensione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 20-30s: "Sono stato miscopiante" in _ PH0 _ _.
Atto 1: Ho copiato altri.
Atto 2: non lavorare per X.
Atto 3: come ho adattato (2 regole) + CTA.
Include un esempio di "adattamento".`
},
{
  id: "viral-guion-storytime-040",
  title: "Quando ho smesso di cercare 'mi piace' '",
  summary: "Storia del cambiamento metrico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storytime 30s: "Ho smesso di cercare likes" per _ PH0 _ _.
Atto 1: ossessione di simili.
Atto 2: Ho scoperto che importava _ PH1 _ _ _ _.
Atto 3: Ho cambiato 2 cose + risultato.
CTA: "Vuoi la mia lista di controllo?"`
},

{
  id: "viral-guion-storytime-041",
  title: "La regola d'oro con cui ero inculcato",
  summary: "Mentore Storytime / esperienza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive una storia 25-35: "Sono stato inculcato con questa regola" su _ PH0 _ _ _.
Atto 1: chi mi ha detto (nessun vero nome).
Atto 2: Quando l'ho ignorato e ho sbagliato.
Atto 3: come lo applico + esempio.
CTA: salvato.`
},
{
  id: "viral-guion-storytime-042",
  title: "La notte che ho fatto il cambiamento",
  summary: "Scena di film + risultato.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea una storia di 30-40 anni con una scena notturna ("quella notte...").
Atto 1: ambiente + problema.
Atto 2: decisione specifica.
Atto 3: risultato e lezione in 1 linea.
Discussioni del Parlamento europeo.`
},
{
  id: "viral-guion-storytime-043",
  title: "Che cosa mi fa piangere oggi",
  summary: "Autocritica leggera + apprendimento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 25-35s: "Che cosa mi dà cringe oggi" circa i miei errori in _ PH0 _ _.
Atto 2: 2 errori specifici.
Atto 3: cosa farebbe diverso (3 proiettili) + CTA.
Tono: divertente, non pesante.`
},
{
  id: "viral-guion-storytime-044",
  title: "Il cambiamento che ho fatto in 24 ore",
  summary: "Mini tempo di archiviazione cambio veloce.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare un storytime 20-30s: "In 24 ore ho cambiato questo" over _ PH0 _ _.
Atto 1: situazione.
Atto 2: cambiamento esatto.
Atto 3: risultato realistico + CTA.
Include 3 varianti di CTA.`
},
{
  id: "viral-guion-storytime-045",
  title: "Mi hanno detto che era impossibile",
  summary: "Conflitto esterno + prove.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 30-40: "Mi è stato detto che era impossibile" in _ PH0 _ _.
Atto 2: chi l'ha detto (tipo di persona) e perché.
Atto 3: quello che ho fatto (2 azioni) + prova (metrica).
CTA: "Se vuoi fare un passo dopo passo, commenta _ _ PH1 _ _".`
},
{
  id: "viral-guion-storytime-046",
  title: "Il mini trucco che mi dà vantaggio",
  summary: "Breve storia intorno a un micro-sistema.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 20-30s: "Questo mini trucco mi dà vantaggio" over _ PH0 _ _.
Atto 1: Ero frustrato.
Atto 2: Ho scoperto il mini trucco.
Atto 3: come viene applicato in 2 passi + CTA.
Esso include un esempio realistico.`
},
{
  id: "viral-guion-storytime-047",
  title: "Quello che nessuno ha visto",
  summary: "Backstage + divulgazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea una storia 25-35s: "Quello che nessuno ha visto dietro" in _ PH0 _ _ _ _
Atto 1: risultato visibile.
Atto 2: cosa è successo veramente dietro (2 dettagli).
Atto 3: consulenza pratica + CTA.
Suggerisci 3 colpi B-roll.`
},
{
  id: "viral-guion-storytime-048",
  title: "La prima volta che ho provato",
  summary: "Prima prova + errore + miglioramento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Storytime 30s: "La prima volta che ho provato" su _ PH0 _ _ _.
Atto 1: prima prova.
Atto 2: errore divertente / reale.
Atto 3: quello che ho imparato + 2 consigli.
CTA: "Vuoi la parte 2?"`
},
{
  id: "viral-guion-storytime-049",
  title: "Il punto in cui sono quasi partito",
  summary: "Crisi + azione + uscita.",
  area: AREA,
  category: CATEGORY,
  prompt: `Script storage 30-45s: "Quasi abbandonato" in _ PH0 _ _.
Atto 1: Inizio illuminato.
Atto 2: punto di rottura (concreto).
Atto 3: piccolo cambiamento che ha salvato tutto + risultato.
CTA: "Se sei lì, questo è un bene per te.".`
},
{
  id: "viral-guion-storytime-050",
  title: "La fine non mi aspettavo",
  summary: "Tempo di storia con forte svolta finale.",
  area: AREA,
  category: CATEGORY,
  prompt: `Creare una storia 25-35 over _ _ PH0 _ _ con "fine inaspettato".
Regole:
- Atto 1: promessa.
- Atto 2: conflitto reale.
- Atto 3: turno + lezione + CTA.
Include testo sullo schermo per azione (max 6 parole).`
}];