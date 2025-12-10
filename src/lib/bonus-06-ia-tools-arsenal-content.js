// src/lib/bonus-06-ia-tools-arsenal-content.js

export const bonus06IAToolsArsenal = {
  title: "Arsenale con +600 strumenti di IA",
  heroText:
    "Una base curata di strumenti di IA per creare, modificare, automatizzare e scalare il tuo business digitale senza aumentare i costi inutilmente.",

  sections: [
    {
      id: "como-funciona",
      title: "1. Come usare questo arsenale senza sentirti sopraffatto",
      body: [
        `Questo bonus è pensato come una **base di consultazione rapida**, non come qualcosa da memorizzare. L’idea è che quando ti chiedi “esiste uno strumento di IA per questo?”, vieni qui.`,
        `Invece di provare a usare 50 strumenti insieme, ti consiglio questo approccio:`,
      ],
      bullets: [
        {
          label: "Parti dal tuo collo di bottiglia",
          description:
            "Cosa ti mangia più tempo oggi? Scrivere, montare video, progettare, organizzare task, rispondere ai messaggi? Parti da quell’area.",
        },
        {
          label: "Scegli 1–3 strumenti alla volta",
          description:
            "Non ti servono 20 app per i video o 10 per il design. Testane poche, decidi e tieni quelle che si incastrano nel tuo flusso.",
        },
        {
          label: "Collega tutto al tuo Banco Segreto",
          description:
            "Usa i prompt per generare idee, script e testi, poi passa tutto a questi strumenti per produrre il risultato finale.",
        },
      ],
      highlight:
        "Regola pratica: se uno strumento non si guadagna un posto nel tuo flusso in 1–2 settimane, lo lasci andare. L’obiettivo è semplificare, non complicare.",
    },
    {
      id: "categorias",
      title: "2. Categorie principali dell’arsenale",
      body: [
        `Invece di una lista caotica, abbiamo organizzato gli strumenti in grandi categorie così trovi subito ciò che ti serve.`,
        `Ecco alcune delle categorie che vedrai dentro l’arsenale:`,
      ],
      bullets: [
        {
          label: "Video",
          description:
            "Editing, sottotitoli automatici, montaggio rapido, trasformazione testo→video, avatar, ecc.",
        },
        {
          label: "Immagini e design",
          description:
            "Generazione immagini, copertine, thumbnail, loghi, banner, creatività per ads, ecc.",
        },
        {
          label: "Web e funnel",
          description:
            "Costruttori di pagine, landing, funnel e siti con l’aiuto dell’IA.",
        },
        {
          label: "Automazione",
          description:
            "Strumenti per collegare app, attivare azioni automatiche ed evitare compiti ripetitivi.",
        },
        {
          label: "Scrittura e copy",
          description:
            "Redazione, riscrittura, correzione, generazione di copy, email, script, ecc.",
        },
        {
          label: "Produttività e organizzazione",
          description:
            "Notion con IA, assistenti per task, organizzatori di idee, riassunti di documenti.",
        },
      ],
      highlight:
        "Questo bonus non serve a provare app “tanto per”, ma a trovare il pezzo giusto per ogni parte del tuo sistema con l’IA.",
    },
    {
      id: "como-leer-fichas",
      title: "3. Come leggere ogni scheda strumento",
      body: [
        `Ogni strumento nell’arsenale segue una struttura standard per farti risparmiare tempo e non farti ricercare tutto da zero:`,
      ],
      bullets: [
        {
          label: "Nome",
          description: "Come si chiama lo strumento sul mercato.",
        },
        {
          label: "Categoria",
          description:
            "Area principale in cui porta valore (video, immagini, automazione, ecc.).",
        },
        {
          label: "Descrizione",
          description:
            "Cosa fa e per che tipo di utente o caso d’uso è particolarmente utile.",
        },
        {
          label: "Come abbinarlo al tuo Banco Segreto",
          description:
            "Esempi concreti su come usare i tuoi prompt e contenuti dentro quello strumento.",
        },
      ],
      highlight:
        "Pensalo come un catalogo curato: leggi veloce, decidi se ti serve e passi all’azione senza finire nel buco nero del provare app a caso.",
    },
  ],

  // 🔧 Strumenti di esempio (poi potrai estendere questa lista fino a +600)
  tools: [
    {
      id: "gamma",
      name: "Gamma",
      category: "Presentazioni e documenti",
      description:
        "Creatore di presentazioni e documenti visivi con IA. Trasforma testo in deck ed e-book con un design professionale.",
      howToUseWithBank:
        "Usa i prompt per e-book e presentazioni (Bonus #04) per generare la struttura in ChatGPT e poi incolla titoli e bullet in Gamma, così costruisce automaticamente il design.",
    },
    {
      id: "canva",
      name: "Canva",
      category: "Immagini e design",
      description:
        "Strumento di design visivo facile da usare, ideale per copertine, caroselli, annunci e materiali grafici per i social.",
      howToUseWithBank:
        "Prima genera copy, titoli e strutture dei caroselli con il tuo Banco Segreto. Poi portali nei template di Canva e aggiusta solo font, colori ed elementi visivi.",
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Video",
      description:
        "Editor video semplice con funzioni IA per sottotitoli, tagli automatici ed effetti rapidi, ideale per Reels e TikTok.",
      howToUseWithBank:
        "Usa i prompt di script video per creare copioni per Reels. Registra o genera il video e poi montalo in CapCut aggiungendo sottotitoli automatici e tagli a ritmo.",
    },
    {
      id: "descript",
      name: "Descript",
      category: "Video e audio",
      description:
        "Editor di audio e video basato su trascrizione. Ti permette di montare i video come se stessi modificando un documento di testo.",
      howToUseWithBank:
        "Trascrivi un video lungo in Descript, poi incolla la trascrizione in ChatGPT e usa prompt di riassunto e repurposing per ricavare clip, shorts e script derivati.",
    },
    {
      id: "figma",
      name: "Figma + plugin IA",
      category: "Design",
      description:
        "Strumento di design collaborativo con plugin IA per generare layout, copy e componenti rapidamente.",
      howToUseWithBank:
        "Disegna wireframe in Figma e usa i tuoi prompt di UX/copy per riempire i testi delle sezioni. Poi rifinisci a mano solo ciò che richiede il tuo tocco personale.",
    },
    {
      id: "framer",
      name: "Framer",
      category: "Web e funnel",
      description:
        "Costruttore di siti web e landing con IA. Permette di creare pagine moderne partendo da descrizioni testuali.",
      howToUseWithBank:
        "Crea la struttura della pagina (sezioni, blocchi e testi) con prompt per pagine di vendita. Poi incolla quella struttura in Framer per generare il design base del sito.",
    },
    {
      id: "make",
      name: "Make (ex Integromat)",
      category: "Automazione",
      description:
        "Piattaforma visuale per creare automazioni tra più applicazioni con grande flessibilità.",
      howToUseWithBank:
        "Progetta il tuo flusso ideale con ChatGPT: quali app si connettono, quali dati passano e quali trigger servono. Poi configura quel flusso in Make seguendo lo schema generato dall’IA.",
    },
    {
      id: "zapier",
      name: "Zapier",
      category: "Automazione",
      description:
        "Strumento di automazione che collega app popolari per attivare azioni in base a eventi specifici.",
      howToUseWithBank:
        "Usa prompt di progettazione automazioni per descrivere il tuo processo ideale (es. quando qualcuno si iscrive, aggiungi alla lista + invia email). Poi traduci quel flusso in zaps concreti in Zapier.",
    },
    {
      id: "notion-ai",
      name: "Notion + IA",
      category: "Produttività",
      description:
        "Spazio per note, database e organizzazione con funzioni IA integrate per riassumere, riscrivere e generare contenuti.",
      howToUseWithBank:
        "Crea un sistema di documenti per i tuoi migliori prompt, risultati e template. Usa prompt di sintesi e organizzazione per trasformare note caotiche in sistemi chiari dentro Notion.",
    },
    {
      id: "scribehow",
      name: "Scribe",
      category: "Documentazione",
      description:
        "Strumento per documentare processi automaticamente mentre li esegui, generando guide passo-passo.",
      howToUseWithBank:
        "Registra il processo una volta in Scribe e poi porta quella guida in ChatGPT per migliorare il testo, aumentare la chiarezza e convertirla in SOP o mini manuali interni.",
    },
    {
      id: "mubert",
      name: "Mubert",
      category: "Audio e musica",
      description:
        "Generatore di musica con IA per sottofondi di video, podcast o contenuti social.",
      howToUseWithBank:
        "Definisci in ChatGPT l’atmosfera sonora che vuoi (energico, calmo, cinematografico) e traduci queste indicazioni in parametri per generare tracce in Mubert.",
    },
    {
      id: "tldv",
      name: "tl;dv",
      category: "Riunioni e riassunti",
      description:
        "Strumento per registrare riunioni, generare trascrizioni e riassunti automatici.",
      howToUseWithBank:
        "Dopo una riunione, esporta la trascrizione e usala con i tuoi prompt di sintesi, estrazione di insight e generazione di azioni concrete.",
    },
  ],
};
