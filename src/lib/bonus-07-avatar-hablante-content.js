// src/lib/bonus-07-avatar-hablante-content.js

export const bonus07AvatarHablante = {
  id: "bonus-07",
  title: "Crea il tuo avatar parlante con l’IA",
  subtitle:
    "Impara a creare un avatar parlante con l’IA che registra video completi al posto tuo.",
  heroText: `In questo bonus vedrai un flusso completo per creare il tuo “clone digitale” che registra video:

1) Definire il tuo avatar (o un personaggio).  
2) Creare script con il tuo Banco Segreto di Prompt.  
3) Generare voce e video con strumenti di IA.  
4) Costruire un sistema ripetibile per produrre video in serie (batch).`,

  sections: [
    {
      id: "panoramica",
      title: "1. Cos’è un avatar parlante con IA e cosa puoi farci",
      body: [
        `Un avatar parlante è un video in cui appare un volto (realistico, illustrato o in stile “corporate”) che parla con sincronizzazione labiale, senza che tu debba registrarti ogni volta.`,
        `La parte interessante non è solo l’“effetto wow”, ma ciò che ti permette di fare nella tua attività o nel tuo personal brand:`,
      ],
      bullets: [
        {
          label: "Contenuti in modalità semi-automatica",
          description:
            "Puoi pubblicare video che spiegano concetti, prodotti o processi senza accendere la camera ogni giorno.",
        },
        {
          label: "A/B test rapidi",
          description:
            "Provi script diversi, hook e messaggi senza coordinare riprese lunghe o un team.",
        },
        {
          label: "Formazione standardizzata",
          description:
            "Crei moduli formativi in cui lo stesso avatar ripete la stessa lezione mille volte senza stancarsi.",
        },
      ],
      highlight:
        "Pensa al tuo avatar come a una “versione scalabile” di te: dice ciò che diresti tu, ma è disponibile 24/7.",
    },

    {
      id: "principi",
      title: "2. Prima il sistema, poi gli strumenti (la regola d’oro)",
      body: [
        `Gli strumenti cambiano continuamente, ma un buon sistema resta valido per anni.`,
        `Il tuo obiettivo non è “fare un video carino”, ma costruire un flusso ripetibile: idea → script → voce → video → rifinitura → pubblicazione.`,
        `Se domani esce uno strumento migliore, cambierai solo un pezzo (la generazione video o la voce), senza rifare tutto da zero.`,
      ],
      highlight:
        "Prima il sistema, poi lo strumento. Se cambia lo strumento, il processo resta.",
    },

    {
      id: "workflow-completo",
      title: "3. Flusso completo: dall’idea al video (ripetibile ogni settimana)",
      body: [
        `Ecco la mappa completa del flusso che userai sempre:`,
        `1) Definisci l’obiettivo del video (cosa vuoi che succeda dopo).  
2) Scrivi lo script con il tuo Banco Segreto di Prompt.  
3) Definisci stile e voce dell’avatar (coerenza!).  
4) Genera il video dell’avatar con lo strumento scelto.  
5) Rifinisci (sottotitoli, tagli, formati per social).  
6) Pubblica e salva i “migliori prompt + migliori output” nella tua libreria.`,
        `Questo bonus si concentra su **flusso e prompt**. Le piattaforme possono cambiare, ma la logica no.`,
      ],
      highlight:
        "Se riesci a ripetere questo flusso in 60–90 minuti a settimana, hai un sistema di contenuti che si autoalimenta.",
    },

    {
      id: "definire-avatar",
      title: "4. Definire stile e ruolo del tuo avatar (coerenza prima di tutto)",
      body: [
        `Il tuo avatar può essere letteralmente “te stesso” (con il tuo volto) oppure un personaggio coerente con la tua marca.`,
        `La qualità percepita dipende molto più dalla coerenza (ruolo, tono, messaggio) che dalla grafica perfetta.`,
        `Rispondi a queste domande e salvale in un documento:`,
      ],
      bullets: [
        {
          label: "Chi è l’avatar?",
          description:
            "È la tua versione professionale? Più casual? Un mentore? Un personaggio del brand? Un “esperto” del tuo team?",
        },
        {
          label: "Che tipo di video farà?",
          description:
            "Spiegazioni? Mini-lezioni? Promozioni soft? Onboarding? FAQ? Tutorial passo-passo?",
        },
        {
          label: "Che tono userà?",
          description:
            "Serio, amichevole, ironico, tecnico… deve combaciare con la tua voce di marca.",
        },
      ],
      highlight:
        "Più è chiaro “chi è” l’avatar, più sarà facile mantenere coerenza su 50 video senza impazzire.",
    },

    {
      id: "gemini-scrittura",
      title: "5. Scrivere script con Gemini (e il tuo Banco Segreto) senza pagina bianca",
      body: [
        `Qui entra in gioco Gemini: lo userai come “scrittore + editor” per produrre script chiari, brevi e registrabili.`,
        `Regola pratica: uno script per avatar parlante deve essere **testo da leggere ad alta voce**, non un articolo.`,
        `Usa moduli di prompt di testo/video per:  
- generare idee  
- trasformare idee in script  
- adattare uno script a formati diversi  
- revisionare tono, chiarezza e ritmo`,
        `Sotto trovi prompt pronti (copiali e personalizzali).`,
        ``,
        `**PROMPT A — Generare 20 idee di video per avatar (30–60s)**  
Agisci come strategist di contenuti video.  
Ho un avatar parlante che usa la mia voce di marca.

Nicho: [descrivi].  
Cliente ideale: [descrivi].  
Obiettivo: [lead / educazione / vendita / posizionamento].  
Piattaforme: [Reels/TikTok/Shorts/LinkedIn].  
Tono: [amichevole/professionale/diretto].  

Genera 20 idee di video (30–60s). Per ogni idea dammi:  
1) Hook (prima frase)  
2) Struttura in 3 punti  
3) Esempio concreto o mini-storia  
4) CTA finale (una sola)`,
        ``,
        `**PROMPT B — Scrivere uno script “pronto da registrare” (45–60s)**  
Basandoti su questa idea:  
[incolla idea]

Scrivi uno script per 45–60s in italiano, testo da leggere ad alta voce.  
Vincoli:  
- Frasi corte.  
- Niente gergo inutile.  
- Ritmo veloce.  
- 1 solo concetto principale.  
Struttura:  
1) Hook (max 8s)  
2) 3 punti rapidi (frasi semplici)  
3) Chiusura con CTA.`,
        ``,
        `**PROMPT C — “Editor severo” (migliora chiarezza e ritmo)**  
Agisci come un editor severo di video brevi.  
Ecco lo script:  
[incolla script]

1) Evidenzia cosa è confuso o troppo lungo (in 5 bullet).  
2) Riscrivi lo script con frasi più corte e più ritmo.  
3) Proponi 3 hook alternativi con angoli diversi (errore / promessa / controintuitivo).`,
        ``,
        `**PROMPT D — Adattare lo stesso script a 3 formati**  
Ecco lo script:  
[incolla script]

Dammi:  
1) Versione 15s (super compressa)  
2) Versione 60s (standard)  
3) Versione 90s (più narrativa)  
Mantieni lo stesso messaggio, cambia solo ritmo e livello di dettaglio.`,
      ],
      highlight:
        "Chiave: l’avatar non inventa cosa dire. Tu progetti i messaggi con Gemini + prompt; l’avatar li interpreta visivamente.",
    },

    {
      id: "voce",
      title: "6. Voce: come scegliere e mantenere una voce coerente",
      body: [
        `Hai due strade principali:`,
        `1) Voce tua (se vuoi massimo riconoscimento personale).  
2) Voce sintetica coerente con la marca (se vuoi scalare e standardizzare).`,
        `Qualunque strumento tu usi, l’obiettivo è: **voce leggibile, naturale, stabile**.`,
        `Checklist di qualità (semplice ma potente):  
- Velocità: non troppo lenta (no “robot”), non troppo veloce (no “ansia”).  
- Intonazione: deve suonare “umana” e credibile.  
- Dizionario: attenzione a nomi propri, inglesismi, acronimi.  
- Coerenza: la stessa voce per una serie di contenuti.`,
        `Consiglio pratico: crea 2 preset (uno “educativo” e uno “promozionale soft”) e riusali sempre.`,
      ],
      highlight:
        "Inizia semplice: prima script buoni, poi una voce “buona abbastanza”. La perfezione viene dopo.",
    },

    {
      id: "flow-video",
      title: "7. Generare il video con Flow (pipeline semplice e ripetibile)",
      body: [
        `Qui useremo “Flow” come concetto di pipeline: una sequenza chiara di passaggi per trasformare script → video finale.`,
        `Obiettivo: non perdere tempo a “smanettare” ogni volta. Tu vuoi una checklist che ripeti.`,
        ``,
        `**FLOW BASE (versione minima)**  
1) Input: script finale (da Gemini)  
2) Voce: genera audio (se separi la fase voce)  
3) Avatar: genera video con sincronizzazione labiale  
4) Export: MP4  
5) Rifinitura: sottotitoli + formato verticale  
6) Pubblicazione: titolo + descrizione + CTA`,
        ``,
        `**Cosa ottimizzare nel tempo**  
- Background coerente (semplice, pulito)  
- Inquadratura sempre uguale  
- Durata standard (es. 45–60s)  
- CTA standard (1 frase)  
- Template di sottotitoli`,
        ``,
        `Il tuo vantaggio è nella ripetizione: un Flow stabile ti permette di produrre in batch senza pensare.`,
      ],
      highlight:
        "Prima testa con video corti (30–60s). Quando hai uno stile che ti piace, passi a contenuti più lunghi.",
    },

    {
      id: "montaggio",
      title: "8. Rifinitura: sottotitoli, formati e distribuzione (il 20% che migliora l’80%)",
      body: [
        `Dopo aver generato il video dell’avatar, pochi accorgimenti aumentano tantissimo la qualità percepita:`,
        `• Sottotitoli: automatici + correzioni veloci (nomi e parole chiave).  
• Formato: verticale per Reels/TikTok/Shorts; quadrato per alcuni feed; orizzontale per YouTube lungo.  
• Brand: logo piccolo, colori coerenti, font leggibile.  
• Hook testuale: una riga in alto all’inizio (opzionale).`,
        `Puoi usare Gemini anche qui:  
- per titoli e caption  
- per 3 varianti di descrizione  
- per trasformare lo stesso video in un post scritto`,
      ],
      highlight:
        "Il tuo avatar è una parte del sistema: lo stesso messaggio può diventare anche carosello, email e post LinkedIn.",
    },

    {
      id: "sistema-settimanale",
      title: "9. Sistema settimanale (batch): come produrre 5–10 video in 1–2 ore",
      body: [
        `Se vuoi risultati veri, non fare “un video ogni tanto”. Fai batch.`,
        `Ecco un sistema semplice (e realistico):`,
        `1) 20 minuti — Ideazione con Gemini (20 idee → scegli le migliori 5).  
2) 40 minuti — Script: scrivi 5 script da 45–60s.  
3) 20–40 minuti — Produzione: genera voce + avatar in batch (o solo avatar se la voce è integrata).  
4) 20 minuti — Sottotitoli + export + denominazione file.  
5) 10 minuti — Caption + CTA + programmazione.`,
        `Crea una cartella standard:  
/AVATAR  
  /SCRIPT  
  /AUDIO  
  /VIDEO_RAW  
  /VIDEO_FINAL  
  /CAPTION`,
        `Dopo 2–3 settimane avrai uno storico e potrai capire cosa funziona meglio (hook, durata, CTA).`,
      ],
      highlight:
        "La magia non è un video perfetto. È un flusso che ripeti quasi in automatico.",
    },

    {
      id: "errori",
      title: "10. Errori comuni (e come evitarli)",
      body: [
        `1) Script troppo lungo → soluzione: taglia del 30% e usa frasi corte.`,
        `2) Troppi concetti in un video → soluzione: 1 idea per video.`,
        `3) Voce incoerente tra video → soluzione: preset fissi.`,
        `4) Hook debole → soluzione: genera 10 hook e scegli 1.`,
        `5) Aspettare la perfezione → soluzione: pubblica 10 video “buoni” prima di ottimizzare.`,
        `6) Non salvare prompt/output → soluzione: libreria di prompt + esempi funzionanti.`,
      ],
      highlight:
        "Obiettivo: velocità + coerenza. L’ottimizzazione arriva dopo i primi 10–20 video.",
    },
  ],
};
