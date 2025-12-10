// src/lib/course-intro.js

export const courseIntro = {
  id: "inicio",
  title: "Benvenuto nella Banca Segreta di Prompt",
  subtitle:
    "Prima di iniziare, guarda come è organizzato tutto per sfruttarlo al massimo.",
  heroText: `Grazie per aver scelto Banca Segreta di Prompt. 
Qui hai il centro di comando di tutto il tuo arsenale di IA: prompt, assistenti, strumenti e training.

In questa sezione ti spiego come funziona la piattaforma, cosa troverai in ogni modulo e come usare ogni parte passo dopo passo.`,

  // Sezioni principali di spiegazione
  sections: [
    {
      id: "acceso-y-codigo",
      title: "1. Accesso e codice di acquisto",
      body: [
        `Il tuo accesso a questa piattaforma è collegato al corso che hai acquistato su Hotmart.`,
        `All’interno del prodotto che hai ricevuto via e-mail (su Hotmart) trovi il tuo **codice di accesso**. È lo stesso codice che usi per entrare in quest’area membri.`,
        `Finché mantieni questo codice, potrai rientrare quando vuoi dalla pagina di login. Se perdi l’e-mail, controlla spam/promozioni oppure contatta l’assistenza.`,
      ],
    },
    {
      id: "ruta-principal",
      title: "2. Come è organizzata la piattaforma",
      body: [
        `Quando entri nell’area membri, vedrai una schermata principale con un **hero** e due righe di card in stile “Netflix”.`,
        `La prima riga si chiama **“Percorso principale — Banca Segreta di Prompt”**. 
Qui trovi ciò che userai ogni giorno:`,
      ],
      bullets: [
        {
          label: "Inizio",
          description:
            "Questa sezione (dove ti trovi ora): una guida rapida su come funziona tutto il corso e la piattaforma.",
        },
        {
          label: "Prompt di testo",
          description:
            "Libreria di prompt per copy, script, post, e-mail, ads, script di vendita e molto altro.",
        },
        {
          label: "Prompt di immagini",
          description:
            "Prompt pronti per generare immagini, copertine, annunci e foto professionali con l’IA.",
        },
        {
          label: "Prompt di video",
          description:
            "Prompt progettati per creare video virali, annunci e contenuti brevi usando l’IA.",
        },
        {
          label: "Strumenti di IA",
          description:
            "Raccomandazioni e guide di strumenti che ti aiutano a creare siti, montare video e automatizzare attività.",
        },
        {
          label: "Assistenti GPT",
          description:
            "Accesso a oltre 30 assistenti specializzati (copywriter, social media, programmatore, consulente e altro).",
        },
        {
          label: "Training",
          description:
            "Lezioni e contenuti aggiuntivi per approfondire IA, ChatGPT e strategie di business.",
        },
      ],
      image: "/intro/ecosistema-ia.png", // 👈 inserisci qui l’immagine che hai generato
    },
    {
      id: "bonos",
      title: "3. Bonus ed extra",
      body: [
        `La seconda riga è dedicata ai **bonus esclusivi** inclusi con il tuo accesso.`,
        `Per ora vedrai le card dei bonus più scure e con un messaggio “Disponibile tra 48 ore”. È intenzionale: i bonus si sbloccano automaticamente poco dopo l’acquisto.`,
        `In questa sezione avrai accesso a:`,
      ],
      bullets: [
        {
          label: "Bonus #01 — Community VIP su WhatsApp",
          description:
            "Gruppo privato con membri attivi, networking e supporto quotidiano per accelerare i tuoi risultati.",
        },
        {
          label: "+30 assistenti virtuali IA",
          description:
            "Assistenti già addestrati per aiutarti come copywriter, social media, programmatore, consulente e altro.",
        },
        {
          label: "Manuale di caroselli virali",
          description:
            "Guida pratica in stile fumetto per creare caroselli che generano tantissimo engagement.",
        },
        {
          label: "Generatore di e-book e presentazioni",
          description:
            "Sistema per creare e-book, presentazioni e materiali ricchi in pochi minuti.",
        },
        {
          label: "Training ChatGPT: da zero ad avanzato",
          description:
            "Un training completo per padroneggiare ChatGPT da zero fino a un livello avanzato.",
        },
        {
          label: "Arsenale con +600 strumenti di IA",
          description:
            "Elenco curato di strumenti (molti gratuiti) per creare, automatizzare e scalare il tuo business.",
        },
        {
          label: "Crea il tuo avatar parlante IA",
          description:
            "Metodo per creare un avatar che registra video al posto tuo, con voce e volto generati dall’IA.",
        },
        {
          label: "Il Mega Prompt Milionario",
          description:
            "Il prompt strategico che riassume un ecosistema di business con più fonti di reddito.",
        },
      ],
      highlight: `Quando i bonus saranno attivi, ti basterà tornare all’inizio del corso e potrai cliccare su ogni card come nel percorso principale.`,
    },
    {
      id: "biblioteca-prompts",
      title: "4. Come usare la libreria di prompt",
      body: [
        `I moduli **Prompt di testo**, **Prompt di immagini** e **Prompt di video** condividono la stessa logica d’uso.`,
        `Quando entri in una di queste sezioni, vedrai una **libreria di card** con:`,
      ],
      bullets: [
        {
          label: "Titolo del prompt",
          description:
            "Ti indica rapidamente a cosa serve quel prompt (esempio: “Programma di apprendimento personalizzato”).",
        },
        {
          label: "Categoria",
          description:
            "Raggruppa i prompt per tipo di utilizzo: educazione, marketing, annunci, prodotti, ecc.",
        },
        {
          label: "Riepilogo",
          description:
            "Una breve descrizione di cosa fa quel prompt e quando dovresti usarlo.",
        },
      ],
      image: "/intro/panel-control-creador.png",
      extra: [
        `Sopra la libreria avrai:`,
        `• **Filtro per categoria:** puoi attivare una categoria per vedere solo i prompt di quel tipo.`,
        `• **Ricerca per titolo:** scrivi una parola chiave del titolo per filtrare la lista (ideale quando sai già cosa stai cercando).`,
      ],
    },
    {
      id: "ver-y-copiar-prompts",
      title: "5. Vedere e copiare un prompt",
      body: [
        `Cliccando sul pulsante **“Vedi prompt”** dentro una card, si apre il contenuto completo del prompt.`,
        `Da lì puoi:`,
      ],
      bullets: [
        {
          label: "Leggere il prompt completo",
          description:
            "Lo vedrai formattato in un box di testo, pronto da selezionare o adattare.",
        },
        {
          label: "Copiare con un solo clic",
          description:
            "Premi il pulsante **“Copia”** e il prompt verrà copiato automaticamente negli appunti per incollarlo in ChatGPT o in un’altra IA.",
        },
      ],
      image: "/intro/flujo-trabajo-automatizado.png",
      highlight:
        "Il flusso ideale è: filtrare / cercare → aprire uno o più prompt → copiare → incollare nella tua IA preferita → adattare al tuo contesto.",
    },
    {
      id: "herramientas-y-asistentes",
      title: "6. Strumenti di IA e Assistenti GPT",
      body: [
        `In questi moduli non troverai solo prompt, ma anche **spiegazioni e consigli pratici**.`,
        `• In **Strumenti di IA** vedrai spiegazioni degli strumenti consigliati, possibili utilizzi e suggerimenti per integrarli nel tuo business o progetto.`,
        `• In **Assistenti GPT** troverai la logica d’uso degli assistenti: come accedervi, cosa fa ognuno ed esempi di comandi per partire velocemente.`,
        `Tutto seguirà la stessa filosofia del corso: spiegazioni chiare, approccio pratico e sempre con prompt pronti all’uso.`,
      ],
    },
    {
      id: "entrenamientos",
      title: "7. Training senza complicarti la vita",
      body: [
        `Nel modulo **Training** troverai contenuti in formato testo (e, quando serve, link a video) in cui approfondiamo temi chiave come:`,
      ],
      bullets: [
        {
          label: "Uso strategico di ChatGPT",
          description:
            "Come passare dal chiedere cose singole a costruire sistemi completi con l’IA.",
        },
        {
          label: "Applicazione a business e personal brand",
          description:
            "Idee concrete per usare i tuoi prompt nella tua nicchia e non lasciarli solo in teoria.",
        },
        {
          label: "Casi pratici",
          description:
            "Esempi reali e template che puoi copiare/adattare al tuo contesto.",
        },
      ],
      highlight:
        "Non serve vedere tutto in una volta. Puoi usare i training come supporto quando senti di voler salire di livello.",
    },
    {
      id: "consejos-uso",
      title: "8. Consigli per sfruttarlo al massimo",
      body: [
        `Per evitare che questo arsenale resti “morto” nel tuo account, ti consiglio:`,
      ],
      bullets: [
        {
          label: "Parti da un obiettivo concreto",
          description:
            "Per esempio: “pianificare i contenuti del prossimo mese” o “tirare fuori 3 idee di annunci per questo prodotto”.",
        },
        {
          label: "Segna i tuoi prompt preferiti",
          description:
            "Tieni un documento o una nota dove salvi i prompt che usi di più, per ritrovarli velocemente.",
        },
        {
          label: "Adatta il linguaggio al tuo stile",
          description:
            "I prompt sono template. Personalizza tono, esempi e contesto perché suonino come te.",
        },
        {
          label: "Non aver paura di iterare",
          description:
            "Se un risultato non ti convince, modifica il prompt, aggiungi più contesto o combina due prompt in uno.",
        },
      ],
    },
    {
      id: "soporte",
      title: "9. Supporto e aiuto",
      body: [
        `Se in qualsiasi momento hai dubbi sull’accesso, sul codice, sull’uso della piattaforma o su un modulo specifico:`,
        `• Controlla prima questa sezione **Inizio** per vedere se la risposta è già qui.  
• Se hai ancora dubbi, usa il canale di supporto indicato nel corso o nel tuo accesso (per esempio la Community VIP su WhatsApp quando sarà attiva).`,
        `Ricorda: l’idea è che questa Banca Segreta di Prompt sia uno strumento che usi costantemente, non un altro corso che finisce a prendere polvere nella tua casella e-mail.`,
      ],
    },
  ],
};
