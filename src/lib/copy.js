// lib/copy.js

export const heroCopy = {
  tag: "Pack di +13.500 prompt",
  titlePrefix: "Copia e incolla ",
  titleHighlight: "+13.500 prompt",
  titleSuffix:
    " per generare contenuti, video e immagini con l'IA in pochi secondi.",
  description:
    "Risparmia ore di lavoro, pubblica contenuti in pochi minuti e aumenta i tuoi guadagni con l'intelligenza artificiale, anche se stai iniziando da zero.",
  ctaLabel: "VOGLIO GARANTIRMI L'ACCESSO",
  ctaSubtext: "Offerta disponibile per un periodo limitato",
};

export const videosSectionCopy = {
  titlePrefix: "La fine del ",
  titleHighlight: "blocco creativo",
  subtitle: "Guarda cosa puoi creare",
  videos: [
    {
      src: "/videos/influencer-clone.mp4",
      label: "Influencer IA o il tuo clone",
    },
    {
      src: "/videos/product-promo.mp4",
      label: "Crea video presentando prodotti",
    },
    {
      src: "/videos/viral-kid-interview.mp4",
      label: "Crea video virali come questo",
    },
    {
      src: "/videos/animal-veo3.mp4",
      label: "+200 prompt video VEO 3",
    },
  ],
};

export const photoCarouselCopy = {
  title: "Sessione fotografica professionale con l'IA",
  images: [
    {
      src: "/photos/photo-1.webp",
      alt: "Donna su una moto nera in un viale con alberi autunnali",
    },
    {
      src: "/photos/photo-2.webp",
      alt: "Donna con un vestito rosso che posa davanti a una sportiva rossa",
    },
    {
      src: "/photos/photo-3.webp",
      alt: "Modella che posa in un ambiente urbano al tramonto",
    },
    {
      src: "/photos/photo-4.webp",
      alt: "Modella accanto a un'auto sportiva su una strada",
    },
    {
      src: "/photos/photo-5.webp",
      alt: "Ritratto stilizzato con sfondo sfocato",
    },
    {
      src: "/photos/photo-6.webp",
      alt: "Modella con giacca di pelle in città",
    },
    {
      src: "/photos/photo-7.webp",
      alt: "Foto di moda con luci al neon",
    },
    {
      src: "/photos/photo-8.webp",
      alt: "Sessione fotografica con auto di lusso",
    },
  ],
};

export const workflowComparisonCopy = {
  titlePrefix: "Da ore di lavoro a ",
  titleHighlight: "minuti di creatività",
  subtitle:
    "Confronta il flusso di lavoro di un creator di contenuti, con e senza la Banca Segreta di Prompt.",
  rows: [
    {
      title: "Pianificare i contenuti del mese",
      without: {
        label: "SENZA Banca Segreta di Prompt",
        description:
          "Ricerca manuale, brainstorming e organizzazione del calendario.",
        timeLabel: "Tempo medio: 4–5 ore",
      },
      with: {
        label: "CON Banca Segreta di Prompt",
        description:
          "Usare 1 prompt per generare un calendario completo dei contenuti.",
        timeLabel: "Tempo medio: 5 minuti",
      },
    },
    {
      title: "Creare uno script video virale",
      without: {
        label: "SENZA Banca Segreta di Prompt",
        description:
          "Scrittura manuale dello script, stesura e molte revisioni.",
        timeLabel: "Tempo medio: 2 ore",
      },
      with: {
        label: "CON Banca Segreta di Prompt",
        description:
          "Adattare uno script validato generato da 1 prompt.",
        timeLabel: "Tempo medio: 10 minuti",
      },
    },
    {
      title: "Scrivere copy per annunci",
      without: {
        label: "SENZA Banca Segreta di Prompt",
        description:
          "Brainstorming, scrittura di varianti e revisione manuale.",
        timeLabel: "Tempo medio: 1,5 ore",
      },
      with: {
        label: "CON Banca Segreta di Prompt",
        description:
          "Generare 5 varianti ad alta conversione con 1 prompt.",
        timeLabel: "Tempo medio: 3 minuti",
      },
    },
    {
      title: "Creare un carosello",
      without: {
        label: "SENZA Banca Segreta di Prompt",
        description:
          "Definire il tema e scrivere il testo di ogni slide manualmente.",
        timeLabel: "Tempo medio: 1 ora",
      },
      with: {
        label: "CON Banca Segreta di Prompt",
        description:
          "Ricevere testo e struttura completa con 1 prompt.",
        timeLabel: "Tempo medio: 5 minuti",
      },
    },
  ],
  resultTitlePrefix: "Il risultato? ",
  resultTitleHighlight: "Ti riprendi la tua settimana.",
  resultBody:
    "Meno tempo dedicato a compiti operativi e ripetitivi significa più tempo libero per concentrarti sulla strategia del tuo business, seguire meglio i tuoi clienti o semplicemente goderti di più la tua vita personale.",
};

export const audienceSectionCopy = {
  titlePrefix: "La Banca Segreta di Prompt è ",
  titleHighlight: "per te...",
  cards: [
    {
      emoji: "🚀",
      title: "Imprenditori e business",
      description: "Automatizza le attività e scala i tuoi risultati.",
    },
    {
      emoji: "📣",
      title: "Professionisti del marketing",
      description: "Crea campagne ad alto impatto rapidamente.",
    },
    {
      emoji: "✍️",
      title: "Creator di contenuti",
      description: "Produci contenuti su scala senza perdere qualità.",
    },
    {
      emoji: "💡",
      title: "Studenti e curiosi di IA",
      description: "Impara e padroneggia l'intelligenza artificiale.",
    },
  ],
  bottomTextPrefix:
    "...per chi vuole dominare l'intelligenza artificiale per automatizzare attività, creare contenuti su scala e ottenere più risultati, ",
  bottomTextHighlight: "senza bisogno di essere uno specialista.",
};

// src/lib/copy.js (o dove hai bonusesSectionCopy)

export const bonusesSectionCopy = {
  title: "Bonus esclusivi",
  subtitle:
    "Assicurando il tuo accesso oggi, non ricevi solo prompt: ti porti a casa un arsenale completo per dominare l'IA.",
  items: [
    // Bonus #01 lo saltiamo per ora
    {
      id: "02",
      label: "Bonus #02",
      title: "+30 assistenti virtuali di IA",
      description:
        "Accedi a bot specialisti pronti all'uso. Hai il tuo copywriter, social media, programmatore e consulente business disponibili 24/7 nella tua IA.",
      valueUSD: "USD $56",
      imageSrc: "/bonuses/bonus-2.webp",
      imageAlt: "Illustrazione con diversi assistenti virtuali di IA",
      href: "/curso/asistentes-gpts", // 👈 NUOVO: percorso reale
      locked: false, // 👈 NON È PIÙ BLOCCATO
    },
    {
      id: "03",
      label: "Bonus #03",
      title: "Manuale di caroselli virali",
      description:
        "Scopri il segreto dei caroselli in stile fumetto che generano tanto engagement. Una guida pratica di storytelling con IA per far crescere il tuo profilo.",
      valueUSD: "USD $18",
      imageSrc: "/bonuses/bonus-3.webp",
      imageAlt: "Esempi di caroselli virali in formato fumetto",
      href: "/curso/manual-carruseles-virales", // 👈 nuovo percorso del bonus
      locked: true,
    },
    {
      id: "04",
      label: "Bonus #04",
      title: "Generatore di e-book e presentazioni",
      description:
        "Crea la struttura completa di materiali di valore in pochi minuti. Ideale per lanciare il tuo e-book, preparare presentazioni di vendita o contenuti educativi con impatto professionale.",
      valueUSD: "USD $28",
      imageSrc: "/bonuses/bonus-4.webp",
      imageAlt: "Presentazione e materiale professionale generati con l'IA",
      href: "/curso/generador-ebooks-presentaciones", // 👈 nuovo percorso
      locked: true,
    },
    {
      id: "05",
      label: "Bonus #05",
      title: "Training ChatGPT: da zero ad avanzato",
      description:
        "Padroneggia lo strumento di IA più potente al mondo. Un training completo che ti insegna dai comandi base fino alle strategie avanzate per sfruttarlo al massimo.",
      valueUSD: "USD $47",
      imageSrc: "/bonuses/bonus-5.webp",
      imageAlt: "Corso online su ChatGPT e strumenti di IA",
      href: "/curso/entrenamiento-chatgpt", // 👈 nuovo percorso del bonus
      locked: true,
    },
    {
      id: "06",
      label: "Bonus #06",
      title: "Arsenale con +600 strumenti di IA",
      description:
        "Accedi a una lista curata di strumenti (molti gratuiti) per creare siti, montare video e automatizzare il tuo business. Un vero arsenale per innovare senza aumentare i costi.",
      valueUSD: "USD $37",
      imageSrc: "/bonuses/bonus-6.webp",
      imageAlt: "Pannello con diversi strumenti e app di IA",
      href: "/curso/arsenal-herramientas-ia", // 👈 nuovo percorso
      locked: true,
    },
    {
      id: "07",
      label: "Bonus #07",
      title: "Crea il tuo avatar parlante con IA",
      description:
        "Impara a creare un avatar parlante con IA che registra video completi al posto tuo. Usa strumenti e prompt pronti per generare voce, volto e movimenti realistici.",
      valueUSD: "USD $94",
      imageSrc: "/bonuses/bonus-7.webp",
      imageAlt: "Avatar di IA che registra davanti a un computer",
      href: "/curso/avatar-hablante-ia", // 👈 nuovo percorso
      locked: true,
    },
    {
      id: "08",
      label: "Bonus #08",
      title: "Il Mega Prompt Milionario",
      description:
        "Ti mostro il prompt strategico che ho usato per costruire un ecosistema di business con più fonti di reddito. È il mio “cervello” imprenditoriale tradotto in un comando di IA.",
      valueUSD: "Incalculable",
      imageSrc: "/bonuses/bonus-8.webp",
      imageAlt:
        "Imprenditore che lavora accanto a un robot con grafici finanziari",
      href: "/curso/mega-prompt-millonario", // 👈 nuovo percorso
      locked: true,
    },
  ],
};

export const recapSectionCopy = {
  totalTitlePrefix: "Il valore totale di tutti i bonus è di ",
  totalTitleAmount: "USD $317+",
  totalTitleSuffix:
    " (senza contare il valore strategico del Bonus #08).",
  subtitle:
    "...ma entrando oggi ti porti a casa tutto questo pacchetto di bonus incluso con il tuo accesso.",

  boxTitle: "Ricapitolando cosa riceverai:",
  leftItems: [
    "+13.500 prompt professionali per ChatGPT",
    "Bonus 1: Community VIP su WhatsApp",
    "Bonus 3: Manuale di caroselli virali",
    "Bonus 5: Training avanzato di ChatGPT",
    "Bonus 7: Crea il tuo avatar parlante con IA",
  ],
  rightItems: [
    "Aggiornamenti gratuiti e a vita del prodotto",
    "Bonus 2: +30 assistenti virtuali di IA",
    "Bonus 4: Generatore di e-book e presentazioni",
    "Bonus 6: Arsenale con +600 strumenti di IA",
    "Bonus 8: Il Mega Prompt Milionario",
  ],

  flashLabel:
    "⚡ OFFERTA FLASH: Ultimi posti prima dell'aumento di prezzo.",
  guaranteeLabel: "Assicura il tuo accesso ora per soli:",
  offerPrice: "USD $6,99",
  ctaLabel: "VOGLIO GARANTIRMI L'ACCESSO ORA",
  ctaSubtext: "Pagamento unico, accesso immediato.",
};

export const guaranteeSectionCopy = {
  title: "Massimo risultato e rischio zero",
  description:
    "Se per qualsiasi motivo non ti piace il contenuto, non ti trovi bene o semplicemente cambi idea, ti basta inviarci una e-mail e ti rimborsiamo il 100% dei tuoi soldi.",
  highlight: "Senza domande. Senza complicazioni.",
  badgeAlt: "Sigillo di garanzia di 7 giorni",
};

export const creatorSectionCopy = {
  titlePrefix: "Creatore della ",
  titleHighlight: "Banca Segreta di Prompt",
  name: "Diego Álvarez",
  role: "fondatore del progetto Banca Segreta di Prompt.",
  paragraph1:
    "Negli ultimi anni ho aiutato migliaia di persone in America Latina a risparmiare tempo, creare business digitali e moltiplicare i loro risultati usando l'intelligenza artificiale.",
  paragraph2:
    "La mia missione è semplice: democratizzare l'uso dell'IA in America Latina e mostrare che chiunque può usare questa tecnologia per trasformare la propria vita, dal principiante assoluto al professionista avanzato.",
  paragraph3:
    "Questo arsenale è il risultato di anni di pratica, validazione e organizzazione. Non è teoria: sono prompt testati, raffinati e approvati da un'intera community.",
  imageAlt: "Foto di Diego Álvarez, creatore della Banca Segreta di Prompt",
};

export const faqSectionCopy = {
  title: "Domande frequenti",
  items: [
    {
      question: "Cosa sono questi 13.500 prompt?",
      answer:
        "Sono comandi pronti e testati che puoi usare in ChatGPT o in altre IA per creare contenuti, idee, testi, post, script e molto altro in modo rapido e pratico. Sono organizzati per categorie come marketing, social media, vendite, produttività, immagine, video e vita personale, così risparmi tempo, elimini il blocco creativo e fai crescere i tuoi risultati con l'intelligenza artificiale.",
    },
    {
      question: "Come riceverò i prompt?",
      answer:
        "Dopo la conferma dell'acquisto, riceverai accesso immediato via e-mail e potrai scaricarli o accedervi online nella nostra piattaforma esclusiva.",
    },
    {
      question: "Con quali versioni di ChatGPT funziona?",
      answer:
        "Funziona con tutte le versioni di ChatGPT, anche quelle gratuite. Inoltre è compatibile con altre intelligenze artificiali basate su testo, come Google Gemini, Deepseek e altre.",
    },
    {
      question:
        "Sono un libero professionista. Ci saranno prompt per la mia area?",
      answer:
        "Sì. I prompt sono stati creati per coprire diverse aree e molti di essi si possono adattare facilmente alla tua realtà. E se non trovi qualcosa di molto specifico per la tua area, non preoccuparti: includiamo un modulo speciale che ti insegna a creare prompt da zero usando un generatore intelligente. Così impari a personalizzare l'IA per la tua professione e a sfruttare al massimo tutto il suo potenziale.",
    },
    {
      question:
        "Come funzionano i 30 assistenti IA che mi stai consegnando?",
      answer:
        "Questi assistenti sono una nuova funzionalità di ChatGPT, in cui abbiamo addestrato l'intelligenza artificiale con informazioni specifiche di un settore o di un'area. Questo permette a ogni assistente di comportarsi come un vero specialista, rispondendo con maggiore precisione, rapidità ed efficienza. In pratica è come avere 30 collaboratori virtuali pronti a svolgere attività per te, 24/7, con meno errori e senza pause.",
    },
    {
      question:
        "Potrò generare video con il nuovo strumento di Google, VEO 3?",
      answer:
        "Sì. Attualmente esiste una promozione per studenti che offre fino a 12 mesi gratuiti dello strumento. Inoltre, anche se quella promozione termina, ti mostriamo altri modi per generare video con quella qualità in modo gratuito. Tutto il passo-passo è dentro l'Arsenale di IA.",
    },
    {
      question: "Riceverò aggiornamenti futuri?",
      answer:
        "Sì. Acquistando ora, ti assicuri accesso gratuito e a vita a tutti gli aggiornamenti che rilasceremo.",
    },
    {
      question:
        "Mi serve esperienza con l'intelligenza artificiale o ChatGPT per usarlo?",
      answer:
        "No. I prompt sono stati creati per qualunque livello di utente, con istruzioni semplici e facili da applicare, anche se è la prima volta che usi l'IA.",
    },
    {
      question: "E se il corso non mi piace?",
      answer:
        "Nessun problema: puoi provare i contenuti per 7 giorni. Se per qualsiasi motivo senti che non fa per te, ti basta richiedere il rimborso e ti restituiamo il 100% del tuo investimento, senza domande e senza burocrazia.",
    },
  ],
};

export const footerCopy = {
  brand: "BANCA SEGRETA DI PROMPT",
};
