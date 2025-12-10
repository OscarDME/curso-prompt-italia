// src/lib/bonus-04-ebooks-presentaciones-content.js

export const bonus04EbooksPresentaciones = {
  id: "bonus-04",

  // HERO
  title: "Generatore di e-book e presentazioni",
  subtitle:
    "Impara a creare materiali ricchi con Gamma + IA in modo semplice, veloce e pratico.",
  heroText: `In questa guida trovi un metodo passo-passo per usare **Gamma** e creare e-book e presentazioni senza impazzire.

Ti servono solo:
- Le tue idee (anche grezze).
- I prompt del corso (per trasformare idee in struttura e testo).
- E Gamma, per dare un design professionale in pochi minuti.`,

  // GAMMA
  gammaUrl: "https://gamma.app/it",
  gammaButtonLabel: "Apri Gamma",
  gammaButtonSecondaryLabel: "gamma.app/it",

  // UI / COPYS EXTRA DELLA PAGINA
  backToCourseLabel: "Torna all’inizio del corso",

  // “videoBlock” ora è un blocco di contesto (senza video)
  videoBlock: {
    title: "Cosa saprai fare dopo questo manuale",
    bullets: [
      "Creare presentazioni ed e-book pronti all’uso in meno tempo, senza partire da un documento vuoto.",
      "Impostare una struttura chiara (indice, sezioni, flusso) prima di pensare al design.",
      "Usare Gamma per impaginare in modo visivo anche se non sei designer.",
      "Riutilizzare i tuoi prompt per generare rapidamente nuove versioni, slide, capitoli e materiali extra.",
      "Trasformare una singola idea in più asset: presentazione, e-book, lead magnet e contenuti social.",
    ],
  },

  // SUPER MANUALE (testo lungo in sezioni)
  sections: [
    {
      id: "panoramica",
      title: "1) Come pensare Gamma: non è “solo slide”, è un generatore di documenti visivi",
      body: [
        `Gamma è perfetto quando vuoi passare da **idea → struttura → output visivo** senza perdere ore in impaginazione.`,
        `Il suo punto forte non è “fare grafica”: è aiutarti a creare un documento ordinato (slide o pagine) con layout già coerenti.`,
        `Se arrivi in Gamma con una struttura chiara, in 15–30 minuti puoi uscire con un materiale “presentabile” e rifinire solo i dettagli.`,
      ],
      highlight:
        "Regola d’oro: prima struttura e messaggio, poi estetica. Gamma accelera il secondo. I prompt del corso accelerano il primo.",
    },

    {
      id: "casi-uso",
      title: "2) Cosa creare con Gamma (e quando usarlo)",
      body: [
        `Ecco i casi d’uso più pratici, con l’obiettivo giusto per ognuno:`,
      ],
      bullets: [
        {
          label: "E-book / mini guida",
          description:
            "Quando vuoi consegnare valore in formato scaricabile (lead magnet, bonus, manuale, onboarding).",
        },
        {
          label: "Presentazione di vendita",
          description:
            "Quando devi spiegare offerta, processo e casi studio (call di vendita, invio a potenziali clienti, webinar).",
        },
        {
          label: "Slide per corso / lezione",
          description:
            "Quando vuoi insegnare con ordine: definizioni, esempi, esercizi, riepilogo.",
        },
        {
          label: "Proposta / pitch",
          description:
            "Quando devi presentare un progetto a un cliente: obiettivi, strategia, piano, deliverable, tempistiche.",
        },
        {
          label: "Documenti interni",
          description:
            "Procedure, checklist, SOP, brief creativi, linee guida di brand.",
        },
      ],
      extra: [
        `Suggerimento: se il contenuto è “lineare” (capitoli, testo, esempi), pensa e-book. Se il contenuto è “a punti” (bullet, concetti, passaggi), pensa presentazione.`,
      ],
    },

    {
      id: "workflow",
      title: "3) Il workflow semplice in 5 passaggi (ripetibile ogni volta)",
      body: [
        `Questo è il flusso che ti consiglio di usare SEMPRE:`,
      ],
      bullets: [
        {
          label: "Passo 1 — Definisci l’obiettivo",
          description:
            "Cosa deve ottenere chi lo legge? (capire, comprare, applicare, iscriversi, contattarti). Scrivilo in una frase.",
        },
        {
          label: "Passo 2 — Crea l’indice con l’IA",
          description:
            "Usa un prompt per generare una scaletta: 5–10 sezioni massimo. Gamma lavora meglio con struttura chiara.",
        },
        {
          label: "Passo 3 — Scrivi la prima bozza (testo grezzo)",
          description:
            "Non serve perfetto. Serve completo. Poi rifinisci tono, esempi e CTA.",
        },
        {
          label: "Passo 4 — Porta tutto in Gamma",
          description:
            "Incolla la struttura e lascia che Gamma generi pagine/slide con layout coerente.",
        },
        {
          label: "Passo 5 — Rifinitura rapida",
          description:
            "Riduci testo, aumenta chiarezza, inserisci esempi, CTA e coerenza visiva (font, colori, stile).",
        },
      ],
      highlight:
        "Se ti blocchi: torna all’indice. Il 90% dei documenti “confusi” nasce da una struttura debole, non da un design brutto.",
    },

    {
      id: "preparazione",
      title: "4) Preparazione: cosa scrivere prima di aprire Gamma",
      body: [
        `Prima di entrare in Gamma, prepara queste 6 righe. Ti evitano caos e revisioni infinite:`,
      ],
      bullets: [
        {
          label: "Titolo",
          description:
            "Chiaro, specifico, orientato al risultato (es: “Guida rapida per X in 7 giorni”).",
        },
        {
          label: "Sottotitolo",
          description:
            "Per chi è e cosa promette (senza esagerare).",
        },
        {
          label: "Pubblico",
          description:
            "A chi stai parlando (principiante, intermedio, professionista).",
        },
        {
          label: "Obiettivo del lettore",
          description:
            "Cosa deve saper fare alla fine.",
        },
        {
          label: "Indice",
          description:
            "5–10 sezioni con titoli brevi.",
        },
        {
          label: "CTA finale",
          description:
            "Qual è il prossimo passo? (contattarti, iscriversi, scaricare, guardare, comprare).",
        },
      ],
      extra: [
        `Mini trucco: se il tuo indice non sta in 10 righe, probabilmente stai mettendo troppa roba in un unico materiale.`,
      ],
    },

    {
      id: "prompts",
      title: "5) Prompt pronti per creare e-book e presentazioni (copia e incolla)",
      body: [
        `Usa questi prompt come base. Sostituisci le parti tra parentesi quadre e incolla l’output in Gamma.`,
        `**Prompt A — Indice per e-book (lead magnet)**`,
        `Agisci come un instructional designer e copywriter. Devo creare un mini e-book/guida (8–12 pagine) sul tema: [TEMA].

Pubblico: [CHI È].  
Obiettivo: alla fine il lettore deve saper fare: [RISULTATO].  
Tono: [PROFESSIONALE / AMICHEVOLE / DIRETTO].  

Dammi:
1) Un titolo + sottotitolo.  
2) Un indice con 7–10 sezioni in ordine logico.  
3) Per ogni sezione: 3 bullet con i punti chiave.  
4) Una CTA finale coerente (1–2 opzioni).`,
        `**Prompt B — Scaletta per presentazione (10–15 slide)**`,
        `Agisci come un consulente e presentatore. Devo creare una presentazione di 10–15 slide su: [TEMA].

Obiettivo della presentazione: [VENDERE / EDUCARE / CONVINCERE / ONBOARDING].  
Pubblico: [CHI È].  
Contesto: [dove verrà usata: call, webinar, invio, ecc.].  

Dammi:
- Titolo e promessa iniziale.  
- Outline slide-per-slide con: titolo slide + 2–4 bullet massimo.  
- 2 idee di “slide di prova” (numeri, esempi, mini case study).  
- Slide finale con CTA chiara.`,
        `**Prompt C — Trasformare testo lungo in slide**`,
        `Ti incollo un testo lungo. Converti il contenuto in una presentazione di massimo 12 slide.

Regole:
- Ogni slide: titolo breve + 2–4 bullet.  
- Taglia ripetizioni, mantieni solo l’essenziale.  
- Aggiungi 2 slide di esempi pratici.  
- Chiudi con una CTA.

Testo:
[INCOLLA QUI]`,
        `**Prompt D — Rifinitura tono (anti-genericità)**`,
        `Questo è un contenuto (e-book o slide). Voglio che suoni come me.

Stile:
- Tono: [diretto / caldo / premium / ironico].  
- Livello tecnicismo: [basso/medio/alto].  
- Parole che uso spesso: [lista].  
- Cose da evitare: [lista].  
- Pubblico: [chi è].  

Riscrivi mantenendo struttura e chiarezza, ma rendilo più umano, concreto e specifico.  
Contenuto:
[INCOLLA QUI]`,
      ],
      highlight:
        "Se vuoi velocità estrema: fai prima Indice → poi Slide-per-slide → poi entra in Gamma. Non iniziare in Gamma “a sentimento”.",
    },

    {
      id: "gamma-passo-passo",
      title: "6) Gamma passo-passo: come creare un documento da zero",
      body: [
        `Ecco il percorso più semplice, valido sia per presentazioni che per e-book:`,
      ],
      bullets: [
        {
          label: "1) Crea un nuovo progetto",
          description:
            "Scegli il tipo di output (presentazione o documento). Se sei indeciso: per e-book scegli documento; per webinar/call scegli presentazione.",
        },
        {
          label: "2) Incolla la struttura",
          description:
            "Incolla l’outline slide-per-slide o l’indice con sezioni. Gamma renderà layout e gerarchie.",
        },
        {
          label: "3) Genera la prima versione",
          description:
            "Accetta la prima bozza. Non fermarti a perfezionare subito. L’obiettivo è avere un “draft completo”.",
        },
        {
          label: "4) Sistema gerarchie e densità",
          description:
            "Riduci testo dove è troppo, aggiungi esempi dove manca. Una slide = un’idea.",
        },
        {
          label: "5) Coerenza visiva",
          description:
            "Scegli uno stile e mantienilo: stesso tono, stessa lunghezza titoli, stessi pattern di slide (es. spiegazione → esempio → riepilogo).",
        },
      ],
      extra: [
        `Regola slide: se una slide ha più di 5 bullet o più di 2–3 frasi lunghe, spezzala.`,
        `Regola e-book: se una sezione è troppo “aria”, aggiungi un esempio concreto o una mini checklist.`,
      ],
    },

    {
      id: "design",
      title: "7) Design veloce senza essere designer (il minimo che fa la differenza)",
      body: [
        `Non serve essere designer. Ti serve evitare 4 errori classici e applicare 4 scelte semplici:`,
      ],
      bullets: [
        {
          label: "Testo troppo lungo",
          description:
            "Taglia del 30–50%. Il contenuto vive meglio se respira.",
        },
        {
          label: "Troppe idee per pagina",
          description:
            "Una pagina/slide = una sola idea principale. Il resto è supporto.",
        },
        {
          label: "Titoli vaghi",
          description:
            "Titoli specifici battono titoli creativi. Il titolo deve dire cosa imparo/ottengo.",
        },
        {
          label: "Mancanza di esempi",
          description:
            "Ogni 2–3 sezioni metti un esempio reale o un caso pratico.",
        },
      ],
      highlight:
        "La presentazione perfetta non è quella “bella”: è quella che si capisce in 3 secondi per slide.",
    },

    {
      id: "strutture-pronte",
      title: "8) Template rapidi: 3 strutture che puoi riutilizzare sempre",
      body: [
        `Quando non sai da dove partire, usa uno di questi schemi:`,
      ],
      bullets: [
        {
          label: "Template 1 — Metodo in 5 passi",
          description:
            "Problema → Perché succede → I 5 passi → Esempio → Errori comuni → CTA.",
        },
        {
          label: "Template 2 — Prima/Dopo",
          description:
            "Situazione iniziale → Sintomi → Errore tipico → Nuova prospettiva → Processo → Risultato → CTA.",
        },
        {
          label: "Template 3 — Checklist operativa",
          description:
            "Obiettivo → Checklist per fare X → Checklist per evitare Y → Esempio compilato → CTA.",
        },
      ],
      extra: [
        `Consiglio: salva questi template in una nota e chiedi all’IA di riempirli ogni volta con il tuo tema.`,
      ],
    },

    {
      id: "cta",
      title: "9) CTA e conversione: come chiudere senza essere “spam”",
      body: [
        `Una CTA elegante è semplicemente il “prossimo passo logico” dopo il valore che hai dato.`,
        `Esempi di CTA che funzionano bene in e-book e presentazioni:`,
      ],
      bullets: [
        {
          label: "CTA soft",
          description:
            "“Se vuoi, scrivimi ‘X’ e ti mando un esempio”, “Salva questo e applicalo oggi”.",
        },
        {
          label: "CTA di continuità",
          description:
            "“Vuoi la parte 2? Ecco il link/risorsa”, “Scarica la checklist completa”.",
        },
        {
          label: "CTA commerciale pulita",
          description:
            "“Se vuoi che lo facciamo insieme, questo è il mio programma…”, con 1 riga su a chi è adatto.",
        },
      ],
      highlight:
        "Una CTA forte non è aggressiva: è chiara. Dì a chi è utile e qual è il passo successivo.",
    },

    {
      id: "repurposing",
      title: "10) Riciclo intelligente: da 1 output a 10 contenuti",
      body: [
        `Con Gamma puoi creare un asset “madre” e poi riciclare:`,
      ],
      bullets: [
        {
          label: "Da e-book a contenuti social",
          description:
            "Ogni capitolo = 1 carosello + 1 reel + 1 post LinkedIn + 3 story.",
        },
        {
          label: "Da presentazione a lead magnet",
          description:
            "Trasforma le slide in pagine e aggiungi checklist + esercizi finali.",
        },
        {
          label: "Da lezione a mini corso",
          description:
            "Ogni sezione = una lezione breve + esercizio + riepilogo.",
        },
      ],
      extra: [
        `Prompt rapido: “Riassumi ogni sezione in 3 idee di contenuto, con hook + formato + CTA”.`,
      ],
    },

    {
      id: "piano-7-giorni",
      title: "11) Piano di implementazione in 7 giorni",
      body: [
        `Se vuoi risultati veri (non teoria), usa questo piano:`,
        `• Giorno 1: Scegli un tema + pubblico + obiettivo (1 riga ciascuno).  
• Giorno 2: Crea l’indice con il Prompt A o B.  
• Giorno 3: Genera la bozza completa (testo grezzo) e rifinisci 1 giro.  
• Giorno 4: Porta tutto in Gamma e genera il documento.  
• Giorno 5: Taglia testo, aggiungi esempi e inserisci CTA.  
• Giorno 6: Esporta e invialo (o pubblicalo).  
• Giorno 7: Analizza feedback e crea una versione 2.0 migliorata.`,
      ],
      highlight:
        "La versione 1 serve per uscire. La versione 2 serve per performare. Non invertire l’ordine.",
    },
  ],
};
