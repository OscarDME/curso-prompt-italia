// src/lib/ia-tools-content.js

export const iaToolsContent = {
  id: "ia-tools",
  title: "Strumenti di IA consigliati",
  heroText:
    "In questa sezione troverai una guida pratica agli strumenti di intelligenza artificiale per scrivere, progettare, creare video e automatizzare processi. L’idea non è usarli tutti, ma capire quali si adattano al tuo momento e al tuo tipo di progetto.",

  // 🧠 Sezioni esplicative generali
  sections: [
    {
      id: "mentalidad",
      title: "1. Prima di scegliere uno strumento",
      body: [
        "Lo strumento è secondario. Ciò che conta davvero è il sistema che costruisci attorno: avere chiaro il tuo obiettivo, il tipo di contenuto che vuoi creare e il flusso di lavoro che ripeterai ogni settimana.",
        "Pensa agli strumenti di IA come a collaboratori: ognuno fa molto bene una parte specifica del processo (idee, scrittura, design, editing, automazione…). Il tuo lavoro è orchestrare tutto.",
      ],
      bullets: [
        {
          label: "Inizia semplice",
          description:
            "Non provare a padroneggiare 20 app insieme. Scegline 1 per il testo, 1 per le immagini e, se necessario, 1 per i video.",
        },
        {
          label: "Prima il flusso, poi lo strumento",
          description:
            "Definisci cosa vuoi ottenere (esempio: pianificare i contenuti del mese) e poi scegli quale strumento si adatta meglio a ogni fase.",
        },
        {
          label: "Evita la paralisi da analisi",
          description:
            "Ogni settimana escono centinaia di nuovi strumenti. Il tuo vantaggio non è conoscerli tutti, ma usare bene pochi strumenti.",
        },
      ],
    },

    {
      id: "texto",
      title: "2. Strumenti per testo e scrittura",
      body: [
        "La base di tutti i contenuti testuali sarà un modello linguistico (come ChatGPT o altre IA simili). I prompt di questo corso sono pensati proprio per sfruttarli al massimo.",
        "Puoi usare questi strumenti per scrivere script, post, newsletter, pagine di vendita, e-mail di follow-up, idee di contenuto e molto altro.",
      ],
      bullets: [
        {
          label: "ChatGPT o modelli simili",
          description:
            "Il tuo centro principale per applicare i +13.500 prompt. Qui scrivi, correggi, riassumi, riscrivi e generi nuove idee.",
        },
        {
          label: "Editor di testo con IA integrata",
          description:
            "Piattaforme come Notion, Google Docs o editor con IA integrata ti aiutano a rifinire stile e grammatica senza uscire dal tuo spazio di lavoro.",
        },
        {
          label: "Estensioni del browser",
          description:
            "Ti permettono di usare l’IA direttamente in moduli, social o gestori email per rispondere più velocemente e con migliore qualità.",
        },
      ],
      highlight:
        "Consiglio: centralizza i migliori output in un unico documento master. Lì puoi incollare i prompt che usi di più e le risposte che hanno funzionato meglio.",
    },

    {
      id: "imagen",
      title: "3. Strumenti per immagini e creatività",
      body: [
        "Con i prompt immagine della Banco Secreto puoi generare foto, illustrazioni, copertine, miniature e creatività per annunci.",
        "Anche se ogni piattaforma di immagini ha nomi e pulsanti diversi, la logica è sempre la stessa: prompt chiaro + stile visivo definito + piccoli aggiustamenti.",
      ],
      bullets: [
        {
          label: "Generatori di immagini con IA",
          description:
            "Usa i tuoi prompt per creare foto prodotto, ritratti professionali, scene cinematografiche, sfondi per caroselli e altro.",
        },
        {
          label: "Editing e ritocco leggero",
          description:
            "Una volta generata l’immagine, puoi ritoccarla in editor di base (luminosità, contrasto, ritaglio) per adattarla a ogni social.",
        },
        {
          label: "Librerie personali di asset",
          description:
            "Salva in cartelle le immagini più solide (copertine, sfondi, texture) per riutilizzarle nei contenuti futuri.",
        },
      ],
    },

    {
      id: "video",
      title: "4. Strumenti per video brevi con IA",
      body: [
        "I prompt video sono pensati per generare clip brevi da usare in annunci, reels, shorts o come B-roll con la tua voce sopra.",
        "La chiave è combinare tre cose: una buona idea (prompt), uno stile visivo coerente con il tuo brand e un montaggio veloce per adattarlo a ogni piattaforma.",
      ],
      bullets: [
        {
          label: "Generatori di video con IA",
          description:
            "Ideali per clip corte: B-roll di lavoro, scene tecnologiche, sfondi dinamici o visual concettuali.",
        },
        {
          label: "Editor video semplici",
          description:
            "Strumenti di editing base ti permettono di tagliare, aggiungere sottotitoli, musica e call to action sul materiale generato con IA.",
        },
        {
          label: "Template riutilizzabili",
          description:
            "Crea 2–3 template video base (intro, consiglio rapido, annuncio) e riutilizzali cambiando solo testo e clip generate.",
        },
      ],
    },

    {
      id: "automatizacion",
      title: "5. Automazione e produttività con IA",
      body: [
        "Oltre ad aiutarti a creare contenuti, l’IA può anche ridurre il carico operativo della tua giornata.",
        "Dal rispondere alle email ricorrenti al preparare bozze di report, molti processi ripetitivi possono essere automatizzati o almeno semplificati.",
      ],
      bullets: [
        {
          label: "Flussi semi-automatizzati",
          description:
            "Per esempio: usi un modulo per raccogliere info e poi un prompt specifico genera lo script, il copy e l’email di consegna.",
        },
        {
          label: "Integrazioni con altre app",
          description:
            "Gli strumenti di automazione possono collegare la tua IA a fogli di calcolo, CRM, task manager o moduli.",
        },
        {
          label: "Template di processo",
          description:
            "Documenta i passaggi dei flussi che ripeti più spesso (esempio: lancio di un nuovo post) per poterli delegare o automatizzare in futuro.",
        },
      ],
      highlight:
        "Inizia automatizzando micro-attività: risposte frequenti, riassunti di meeting, pulizia delle informazioni… poi scala verso flussi più complessi.",
    },

    {
      id: "no-code",
      title: "6. Strumenti no-code e spazi di lavoro",
      body: [
        "Il tuo Banco Secreto di Prompt funziona ancora meglio quando lo combini con un buon sistema di organizzazione.",
        "Gli strumenti no-code e i sistemi di note ti permettono di costruire la tua “centrale di comando” senza saper programmare.",
      ],
      bullets: [
        {
          label: "Sistemi di note e organizzazione",
          description:
            "Usa documenti, database o wiki per salvare i prompt preferiti, i risultati che hanno funzionato e esempi reali d’uso.",
        },
        {
          label: "Dashboard personali",
          description:
            "Puoi creare pannelli semplici per vedere calendario contenuti, campagne attive e metriche chiave in un unico posto.",
        },
        {
          label: "Moduli interni",
          description:
            "Un semplice modulo interno può alimentare i tuoi prompt: l’utente risponde a 3–5 domande e l’IA genera il risultato finale.",
        },
      ],
    },

    {
      id: "como-elegir",
      title: "7. Come scegliere lo strumento giusto per te",
      body: [
        "Non esiste lo strumento perfetto: esiste quello che si adatta meglio al tuo contesto attuale. Per decidere da dove partire, puoi usare questo piccolo filtro mentale:",
      ],
      bullets: [
        {
          label: "Budget e tempo",
          description:
            "Se il budget è basso, dai priorità a strumenti gratuiti o con piani base. Se hai poco tempo, cerca ciò che semplifica più passaggi, anche se è a pagamento.",
        },
        {
          label: "Tipo di contenuto principale",
          description:
            "Se vivi di scrittura, dai priorità all’IA testuale. Se vendi prodotti visivi, dai priorità a immagini e video. Se gestisci molti clienti, dai priorità all’automazione.",
        },
        {
          label: "Curva di apprendimento",
          description:
            "È meglio padroneggiare qualcosa di semplice in 7 giorni che provare a usare qualcosa di complesso per mesi senza integrarlo davvero nella routine.",
        },
      ],
      highlight:
        "Regola pratica: se uno strumento non ti fa risparmiare tempo né migliorare i risultati in 2–3 settimane di uso costante, probabilmente non è quello giusto per te in questo momento.",
    },

    {
      id: "siguientes-pasos",
      title: "8. Prossimi passi dentro il corso",
      body: [
        "Ora che hai una visione chiara degli strumenti di IA e di come si inseriscono nel tuo sistema, il passo successivo è passare all’azione.",
        "Ti consiglio questo ordine:",
      ],
      bullets: [
        {
          label: "1) Definisci il tuo flusso principale",
          description:
            "Per esempio: piano contenuti settimanale, lancio di un prodotto, creazione di un lead magnet, ecc.",
        },
        {
          label: "2) Scegli 1–3 strumenti",
          description:
            "Uno per il testo, uno per le immagini e, se serve, uno per i video. Niente di più.",
        },
        {
          label: "3) Usa i prompt del Banco Secreto",
          description:
            "Vai al modulo corrispondente (testo, immagini o video) e scegli i prompt che meglio si adattano al tuo obiettivo.",
        },
      ],
      highlight:
        "Più usi questo arsenale in situazioni reali (clienti, progetti personali, lanci), più valore ne tirerai fuori. Torna a questa sezione ogni volta che vuoi rivedere o rinnovare il tuo stack di strumenti.",
    },
  ],

  // 🔹 Lista di strumenti da mostrare in card
  tools: [
    // --- TESTO / SCRITTURA ---
    {
      id: "chatgpt",
      name: "ChatGPT",
      category: "Testo e scrittura",
      description:
        "La tua base principale per applicare i +13.500 prompt. Ideale per scrivere, riscrivere, riassumere e generare idee di contenuto.",
      howToUseWithBank:
        "Copia un prompt dal modulo testo, incollalo in ChatGPT, aggiungi il contesto del tuo business e salva le risposte che funzionano meglio.",
      thumbnail: "/ia/Chat-GPT-logo.webp",
    },
    {
      id: "claude",
      name: "Claude",
      category: "Testo e scrittura",
      description:
        "Modello molto valido per testi lunghi, documentazione e lavoro con file estesi.",
      howToUseWithBank:
        "Usa i prompt di ricerca, strutturazione contenuti e creazione di manuali per generare documentazione chiara e facile da capire.",
      thumbnail: "/ia/Claude.webp",
    },
    {
      id: "gemini",
      name: "Gemini",
      category: "Testo e scrittura",
      description:
        "IA di Google utile per attività collegate all’ecosistema Google (Docs, Sheets, Slides).",
      howToUseWithBank:
        "Combina prompt di pianificazione con fogli di calcolo, dashboard e report creati direttamente nell’ecosistema Google.",
      thumbnail: "/ia/Gemini.jpeg",
    },
    {
      id: "notion-ai",
      name: "Notion AI",
      category: "Testo e scrittura",
      description:
        "Ideale per scrivere e organizzare contenuti nel tuo workspace: wiki, database e documenti.",
      howToUseWithBank:
        "Crea un database con i tuoi prompt preferiti e usa Notion AI per rifinire testi, riassunti e documentazione interna.",
      thumbnail: "/ia/Notion.png",
    },
    {
      id: "perplexity",
      name: "Perplexity",
      category: "Ricerca",
      description:
        "Assistente di ricerca con IA e ricerca web, perfetto per ottenere contesto e riferimenti rapidi.",
      howToUseWithBank:
        "Prima ricerca un tema con Perplexity e poi usa i prompt per script, post e newsletter per trasformare le info in contenuti.",
      thumbnail: "/ia/Perplexity.png",
    },

    // --- IMMAGINE / DESIGN ---
    {
      id: "dalle",
      name: "DALL·E",
      category: "Immagine e design",
      description:
        "Generatore di immagini integrato nello stesso ambiente di ChatGPT. Ideale per copertine, miniature e creatività rapide.",
      howToUseWithBank:
        "Copia un prompt dal modulo immagini, incollalo in DALL·E e fai piccoli aggiustamenti (angolazione, luce, colori) secondo le tue esigenze.",
      thumbnail: "/ia/Dalle.jpeg",
    },
    {
      id: "midjourney",
      name: "Midjourney",
      category: "Immagine e design",
      description:
        "Eccellente per stili artistici, scene cinematografiche e visual molto dettagliati.",
      howToUseWithBank:
        "Adatta i prompt immagini del corso al formato di Midjourney (comandi, parametri) per creare pacchetti visivi coerenti.",
      thumbnail: "/ia/Midjourney.jpg",
    },
    {
      id: "leonardo",
      name: "Leonardo AI",
      category: "Immagine e design",
      description:
        "Buon equilibrio tra qualità e facilità d’uso per creatività pubblicitarie e risorse visuali.",
      howToUseWithBank:
        "Usa i prompt per annunci, mockup di prodotto e sfondi social, generando lotti di immagini in un’unica sessione.",
      thumbnail: "/ia/Leonardo.jpeg",
    },
    {
      id: "canva",
      name: "Canva con IA",
      category: "Immagine e design",
      description:
        "Perfetto per comporre i materiali finali: caroselli, miniature, presentazioni e annunci.",
      howToUseWithBank:
        "Genera le immagini base con i tuoi prompt e poi assemblale in Canva con testi, loghi ed elementi di brand.",
      thumbnail: "/ia/Canva.jpeg",
    },

    // --- VIDEO ---
    {
      id: "runway",
      name: "Runway",
      category: "Video",
      description:
        "Generatore video con IA eccellente per B-roll, scene astratte e sfondi dinamici.",
      howToUseWithBank:
        "Prendi i prompt del modulo video (B-roll, scene tech, sfondi) e adattali ai campi di Runway.",
      thumbnail: "/ia/runway.png",
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Video",
      description:
        "Editor video semplice con template, sottotitoli automatici e strumenti rapidi per i social.",
      howToUseWithBank:
        "Combina clip generate con IA e tue riprese, aggiungendo sottotitoli, musica e CTA usando la struttura di script del Banco.",
      thumbnail: "/ia/capcut.jpg",
    },
    {
      id: "descript",
      name: "Descript",
      category: "Video",
      description:
        "Ideale per montare video e audio partendo dal testo trascritto, molto utile per podcaster e creator educativi.",
      howToUseWithBank:
        "Usa i prompt per script e struttura lezioni, registra il contenuto e montalo in Descript correggendo direttamente dal testo.",
      thumbnail: "/ia/descript.jpg",
    },

    // --- AUTOMAZIONE / SISTEMI ---
    {
      id: "zapier",
      name: "Zapier",
      category: "Automazione",
      description:
        "Collega le tue app preferite e avvia azioni automatiche senza programmare.",
      howToUseWithBank:
        "Combina moduli + prompt: quando qualcuno invia dati, Zapier li passa alla tua IA con un prompt specifico e genera il risultato finale.",
      thumbnail: "/ia/zapier.png",
    },
    {
      id: "make",
      name: "Make (Integromat)",
      category: "Automazione",
      description:
        "Piattaforma visuale per creare flussi complessi che mescolano IA, database e più app.",
      howToUseWithBank:
        "Usa i prompt su workflow e sistemi per progettare scenari che automatizzano parti del tuo servizio o business.",
      thumbnail: "/ia/make.png",
    },

    // --- ORGANIZZAZIONE / PRESENTAZIONI ---
    {
      id: "notion",
      name: "Notion",
      category: "Organizzazione",
      description:
        "La tua ‘centrale di comando’ per salvare prompt, risultati, idee e documentazione dei progetti.",
      howToUseWithBank:
        "Crea un database con colonne per: categoria, obiettivo, prompt, risultati top e note. Così il tuo Banco diventa 100% personalizzabile.",
      thumbnail: "/ia/notion.webp",
    },
    {
      id: "gamma",
      name: "Gamma",
      category: "Presentazioni",
      description:
        "Strumento per creare presentazioni e documenti visuali generati con IA.",
      howToUseWithBank:
        "Prendi i prompt per script, lezioni e contenuti educativi e trasformali in slide e presentazioni pronte da consegnare.",
      thumbnail: "/ia/gamma.png",
    },
  ],
};
