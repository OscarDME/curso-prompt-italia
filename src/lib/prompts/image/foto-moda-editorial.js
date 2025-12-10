// src/lib/prompts/image/foto-moda-editorial.js

export const imagePromptsFotoModaEditorial = [
  // =========================
  // CATEGORY: Moda editoriale
  // =========================
  {
    id: "img-foto-moda-001",
    title: "Moda editoriale in studio (sfondo grigio, posa elegante)",
    area: "Fotografia Pro",
    category: "Moda editoriale",
    summary:
      "Foto editoriale di moda tipo rivista: studio, styling premium e luce morbida controllata.",
    prompt: `Genera una fotografia REALISTICA di moda editoriale in studio.

DATI:
- Modello/a: [donna/uomo/persona] di [età], [tratti], [acconciatura]
- Outfit: [descrivi outfit editoriale], tessuti con texture reale (seta/lana/pelle)
- Accessori: [minimi/premium], senza loghi
- Sfondo: grigio neutro uniforme, stile studio

ILLUMINAZIONE:
- Softbox grande laterale a 45° + riempimento morbido (ombre leggere)
- Pelle naturale, texture reale, senza effetto plastica
- Look editoriale pulito

FOTOCAMERA:
- Full-frame, 85mm, f/2.8, ISO 100, 1/160s
- Nitidezza sugli occhi, dettaglio sull’outfit, bokeh morbido

COMPOSIZIONE:
- Piano 3/4 (ginocchia a testa) o piano intero
- Posa elegante, postura editoriale
- Color grading: neutro + contrasto moderato (da rivista)

RESTRIZIONI:
- Niente testo/watermark
- Anatomia realistica (mani/piedi corretti)`,
    thumbnail: "/images/foto-pro/moda1.webp",
  },
  {
    id: "img-foto-moda-002",
    title: "Editorial high-fashion (sfondo bianco high-key, look premium)",
    area: "Fotografia Pro",
    category: "Moda editoriale",
    summary:
      "Editorial high-fashion high-key: illuminazione luminosa, estetica da passerella e massima pulizia.",
    prompt: `Genera una foto REALISTICA editoriale high-fashion (studio high-key).

DATI:
- Modello/a: [persona], [età], look high-fashion
- Outfit: [alta moda], silhouette definita, texture premium
- Sfondo: bianco puro, pulito

ILLUMINAZIONE:
- High-key uniforme, senza ombre dure
- Luminosità controllata, pelle naturale con texture reale

FOTOCAMERA:
- 50mm o 85mm, f/3.2, ISO 100
- Alta nitidezza su viso e outfit

COMPOSIZIONE:
- Piano intero con spazio negativo sopra
- Posa da passerella, atteggiamento deciso

RESTRIZIONI:
- Niente testo/loghi
- Non sovraesporre il viso, evitare pelle “di plastica”`,
    thumbnail: "/images/foto-pro/moda2.webp",
  },
  {
    id: "img-foto-moda-003",
    title: "Editorial minimalista (sfondo crema, luce morbida, look pulito)",
    area: "Fotografia Pro",
    category: "Moda editoriale",
    summary:
      "Moda editoriale minimal: palette crema, styling semplice, perfetta per personal brand premium.",
    prompt: `Genera una foto REALISTICA di moda editoriale minimalista.

DATI:
- Modello/a: [persona], [età], espressione serena
- Outfit: toni crema/beige, stile minimal (senza pattern)
- Sfondo: crema/caldo morbido, uniforme

ILLUMINAZIONE:
- Luce morbida tipo finestra + riempimento sottile
- Ombre delicate, pelle realistica

FOTOCAMERA:
- 85mm, f/2.5, ISO 100
- Color grading: leggermente caldo, contrasto basso/medio

COMPOSIZIONE:
- Piano 3/4 o mezzo busto, posa editoriale naturale
- Dettagli della texture del tessuto ben visibili

RESTRIZIONI:
- Niente testo/watermark
- Anatomia corretta, niente dita extra`,
    thumbnail: "/images/foto-pro/moda3.webp",
  },
  {
    id: "img-foto-moda-004",
    title: "Editorial drammatica low-key (sfondo nero, contrasto controllato)",
    area: "Fotografia Pro",
    category: "Moda editoriale",
    summary:
      "Estetica editoriale drammatica: sfondo nero, ombre con dettaglio e vibe lusso.",
    prompt: `Genera una fotografia REALISTICA di moda editoriale low-key.

DATI:
- Modello/a: [persona], [età], atteggiamento deciso
- Outfit: nero o toni scuri (pelle/lana), look di lusso
- Sfondo: nero profondo

ILLUMINAZIONE:
- Key light laterale morbida (45°) + rim light sottile su capelli/spalle
- Alto contrasto controllato, dettagli visibili sull’outfit

FOTOCAMERA:
- 85mm, f/2.2, ISO 160
- Fuoco sugli occhi, alta nitidezza

COMPOSIZIONE:
- Mezzo busto corto o piano 3/4
- Posa editoriale potente, mani naturali

RESTRIZIONI:
- Niente testo/loghi
- Evitare ombre chiuse (voglio dettaglio)`,
    thumbnail: "/images/foto-pro/moda4.webp",
  },
  {
    id: "img-foto-moda-005",
    title: "Editorial beauty-fashion (primo piano, make-up editoriale sottile)",
    area: "Fotografia Pro",
    category: "Moda editoriale",
    summary:
      "Primo piano editoriale con focus su make-up/look fashion, pelle realistica e finitura da rivista.",
    prompt: `Genera un ritratto REALISTICO editoriale beauty-fashion.

DATI:
- Modello/a: [persona], [età], make-up editoriale sottile (non eccessivo)
- Outfit: collo alto / blazer fashion minimal
- Sfondo: grigio chiaro o beige

ILLUMINAZIONE:
- Softbox frontale morbido + riempimento leggero
- Pelle con texture reale (pori sottili), senza blur

FOTOCAMERA:
- 85mm, f/2.8, ISO 100
- Fuoco chirurgico sugli occhi

COMPOSIZIONE:
- Primo piano o busto, sguardo diretto in camera
- Estetica da rivista premium

RESTRIZIONI:
- Niente testo/watermark
- Evitare labbra/occhi deformi`,
    thumbnail: "/images/foto-pro/moda5.webp",
  },

  // =========================
  // CATEGORY: Street style
  // =========================
  {
    id: "img-foto-moda-006",
    title: "Street style in città (outfit completo, bokeh urbano)",
    area: "Fotografia Pro",
    category: "Street style",
    summary:
      "Foto di outfit completo in stile street con sfondo urbano sfocato e look naturale.",
    prompt: `Genera una foto REALISTICA street style in città.

DATI:
- Modello/a: [persona], [età]
- Outfit: [descrivi look completo], stile streetwear o smart casual
- Luogo: strada urbana moderna, edifici sullo sfondo (bokeh)
- Posa: camminando o in piedi in modo naturale, non rigido/posato

ILLUMINAZIONE:
- Luce naturale (pomeriggio) morbida, ombre leggere

FOTOCAMERA:
- 35mm, f/2, ISO 200
- Fuoco sul soggetto, bokeh moderato

COMPOSIZIONE:
- Piano intero, spazio nella direzione dello sguardo/percorso
- Estetica realistica da fotografo di strada

RESTRIZIONI:
- Niente testo/loghi
- Proporzioni corporee realistiche`,
    thumbnail: "/images/foto-pro/moda6.webp",
  },
  {
    id: "img-foto-moda-007",
    title: "Street style con muro texturizzato (minimal, look premium)",
    area: "Fotografia Pro",
    category: "Street style",
    summary:
      "Street style minimal con muro di sfondo, ideale per lookbook e personal brand.",
    prompt: `Genera una foto REALISTICA street style con sfondo di muro texturizzato.

DATI:
- Modello/a: [persona], [età]
- Outfit: minimal premium (toni neutri, tessuti di qualità)
- Sfondo: muro in cemento o pietra chiara, texture sottile
- Posa: editoriale semplice (mani in tasca / braccia incrociate in modo naturale)

ILLUMINAZIONE:
- Ombra aperta (luce morbida), toni pelle realistici

FOTOCAMERA:
- 50mm, f/2.2, ISO 100
- Nitidezza su outfit e viso

COMPOSIZIONE:
- Piano 3/4 o intero, inquadratura pulita

RESTRIZIONI:
- Niente testo/watermark
- Evitare mani deformi`,
    thumbnail: "/images/foto-pro/moda7.webp",
  },
  {
    id: "img-foto-moda-008",
    title: "Street style con movimento (candid, passo congelato)",
    area: "Fotografia Pro",
    category: "Street style",
    summary:
      "Stile street candid: movimento realistico, passo congelato ed energia urbana.",
    prompt: `Genera una foto REALISTICA street candid con movimento.

DATI:
- Modello/a: [persona], [età]
- Outfit: [streetwear], layering (giacca + pantaloni + sneakers)
- Azione: camminata veloce, passo congelato, sguardo naturale
- Sfondo: città con profondità, persone/auto molto sfocate

ILLUMINAZIONE:
- Luce naturale del pomeriggio, contrasto medio

FOTOCAMERA:
- 35mm, f/2, ISO 400
- Tempo rapido per congelare il movimento (senza blur esagerato)

COMPOSIZIONE:
- Piano intero, prospettiva da strada, dinamismo

RESTRIZIONI:
- Niente testo/loghi
- Evitare piedi deformi, anatomia strana`,
    thumbnail: "/images/foto-pro/moda8.webp",
  },
  {
    id: "img-foto-moda-009",
    title: "Street style in golden hour (luce dorata sui capelli, bokeh)",
    area: "Fotografia Pro",
    category: "Street style",
    summary:
      "Street style al tramonto con luce dorata e atmosfera calda, ideale per Instagram.",
    prompt: `Genera una foto REALISTICA street style in golden hour.

DATI:
- Modello/a: [persona], [età], espressione sicura
- Outfit: toni terra, stile fashion casual
- Scena: boulevard urbano con alberi, sfondo sfocato

ILLUMINAZIONE:
- Luce dorata laterale (rim light morbida sui capelli)
- Pelle naturale, toni caldi

FOTOCAMERA:
- 50mm o 85mm, f/1.8, ISO 200
- Fuoco sugli occhi, bokeh morbido

COMPOSIZIONE:
- Piano 3/4, soggetto leggermente sui terzi
- Sensazione calda e premium

RESTRIZIONI:
- Niente testo/watermark
- Evitare saturazione eccessiva`,
    thumbnail: "/images/foto-pro/moda9.webp",
  },
  {
    id: "img-foto-moda-010",
    title: "Street style in viale con foglie autunnali (look editoriale)",
    area: "Fotografia Pro",
    category: "Street style",
    summary:
      "Street editoriale con vibe autunnale: foglie, viale e colori caldi realistici.",
    prompt: `Genera una foto REALISTICA street editoriale in autunno.

DATI:
- Modello/a: [persona], [età]
- Outfit: cappotto/trench + stivali, toni caldi
- Scena: viale con alberi autunnali e foglie a terra
- Posa: camminando o in piedi con atteggiamento editoriale

ILLUMINAZIONE:
- Luce morbida (nuvoloso o tardo pomeriggio), color grading caldo

FOTOCAMERA:
- 35mm o 50mm, f/2, ISO 250
- Sfondo con bokeh moderato

COMPOSIZIONE:
- Piano intero o 3/4, profondità della strada

RESTRIZIONI:
- Niente testo/loghi
- Evitare sfondi irreali o troppo perfetti`,
    thumbnail: "/images/foto-pro/moda10.webp",
  },

  // =========================
  // CATEGORY: Lookbook / catalogo
  // =========================
  {
    id: "img-foto-moda-011",
    title: "Lookbook pulito (serie coerente, sfondo neutro, 1 outfit)",
    area: "Fotografia Pro",
    category: "Lookbook / catalogo",
    summary:
      "Immagine tipo lookbook con massima coerenza: sfondo neutro, stessa luce, perfetta per catalogo.",
    prompt: `Genera una foto REALISTICA in stile lookbook da catalogo (coerenza totale).

DATI:
- Modello/a: [persona], [età]
- Outfit: [descrivi outfit], mostrare texture e caduta del tessuto
- Sfondo: grigio chiaro o bianco sporco, pulito

REQUISITO DI COERENZA:
- Mantenere ESATTAMENTE lo stesso set: illuminazione, sfondo, inquadratura, distanza camera
- Stile catalogo premium, senza drammatizzazione

ILLUMINAZIONE:
- Luce uniforme morbida, ombre minime

FOTOCAMERA:
- 50mm, f/4 (per nitidezza dell’outfit), ISO 100

COMPOSIZIONE:
- Piano intero, soggetto centrato, postura naturale

RESTRIZIONI:
- Niente testo/loghi
- Proporzioni corporee esatte`,
    thumbnail: "/images/foto-pro/moda11.webp",
  },
  {
    id: "img-foto-moda-012",
    title: "Lookbook con 3 pose (stesso set, variazione di postura)",
    area: "Fotografia Pro",
    category: "Lookbook / catalogo",
    summary:
      "Foto lookbook per serie: 3 variazioni di posa mantenendo la stessa inquadratura, luce e sfondo.",
    prompt: `Genera una foto REALISTICA in stile lookbook per serie (stessa scena).

DATI:
- Modello/a: [persona], [età]
- Outfit: [descrivi outfit]
- Sfondo: neutro pulito (grigio chiaro/bianco sporco)

ISTRUZIONE:
- Creare una composizione lookbook pronta da replicare
- Posa: [posa 1], [posa 2], [posa 3] (oppure genera 3 opzioni di posa naturale)

ILLUMINAZIONE:
- Morbida e uniforme, ombre minime

FOTOCAMERA:
- 50mm, f/4, ISO 100, alta nitidezza

COMPOSIZIONE:
- Piano intero, centrato, spazio per ritaglio

RESTRIZIONI:
- Niente testo/loghi
- Evitare proporzioni strane, mani deformi`,
    thumbnail: "/images/foto-pro/moda12.webp",
  },
  {
    id: "img-foto-moda-013",
    title: "Catalogo premium tipo ecommerce (sfondo chiaro, dettaglio tessuto)",
    area: "Fotografia Pro",
    category: "Lookbook / catalogo",
    summary:
      "Immagine ecommerce premium con sfondo chiaro e focus su texture/materiale del capo.",
    prompt: `Genera una foto REALISTICA da catalogo premium (ecommerce fashion).

DATI:
- Modello/a: [persona], [età]
- Outfit: [capo principale], enfatizzare texture e cuciture
- Sfondo: bianco sporco o grigio chiaro uniforme

ILLUMINAZIONE:
- Softbox frontale morbido + riempimento per eliminare ombre dure
- Pelle naturale e dettaglio tessuto nitido

FOTOCAMERA:
- 70mm o 85mm, f/5.6 (dettaglio e nitidezza), ISO 100

COMPOSIZIONE:
- Piano 3/4 o intero; capo protagonista
- Stile pulito, commerciale premium

RESTRIZIONI:
- Niente testo/loghi
- Evitare artefatti su tessuto o contorni`,
    thumbnail: "/images/foto-pro/moda13.webp",
  },
  {
    id: "img-foto-moda-014",
    title: "Lookbook outdoor elegante (muro chiaro, luce morbida, editoriale pulito)",
    area: "Fotografia Pro",
    category: "Lookbook / catalogo",
    summary:
      "Lookbook esterno pulito: muro chiaro, luce morbida ed estetica editoriale minimal.",
    prompt: `Genera una foto REALISTICA lookbook outdoor (pulito).

DATI:
- Modello/a: [persona], [età]
- Outfit: [descrivi], toni neutri, elegante
- Sfondo: muro esterno chiaro (bianco/beige), minimalista

ILLUMINAZIONE:
- Ombra aperta (luce morbida), niente ombre dure

FOTOCAMERA:
- 50mm, f/2.8, ISO 100
- Alta nitidezza, sfondo leggermente separato

COMPOSIZIONE:
- Piano intero o 3/4, soggetto centrato
- Estetica editoriale minimal

RESTRIZIONI:
- Niente testo/loghi
- Evitare deformazioni di mani/piedi`,
    thumbnail: "/images/foto-pro/moda14.webp",
  },
  {
    id: "img-foto-moda-015",
    title: "Lookbook con layering (strati, texture, stile autunno premium)",
    area: "Fotografia Pro",
    category: "Lookbook / catalogo",
    summary:
      "Lookbook autunnale con layering (strati), texture e toni caldi premium.",
    prompt: `Genera una foto REALISTICA lookbook con layering (autunno).

DATI:
- Modello/a: [persona], [età]
- Outfit: strati (cappotto + maglione + pantaloni), toni terra
- Sfondo: esterno urbano neutro o muro leggermente texturizzato

ILLUMINAZIONE:
- Luce morbida (pomeriggio/nuvoloso), color grading caldo

FOTOCAMERA:
- 50mm, f/2.8, ISO 200
- Dettagli visibili su tessuti, cuciture e texture

COMPOSIZIONE:
- Piano 3/4, posa editoriale naturale

RESTRIZIONI:
- Niente testo/loghi
- Evitare tessuti “sciolti” o artefatti`,
    thumbnail: "/images/foto-pro/moda15.webp",
  },

  // =========================
  // CATEGORY: Luci neon / notte
  // =========================
  {
    id: "img-foto-moda-016",
    title: "Moda notturna con neon (magenta/ciano, look cyber editoriale)",
    area: "Fotografia Pro",
    category: "Luci neon / notte",
    summary:
      "Editorial notturno con neon e vibe cyber, realistico e in stile campagna.",
    prompt: `Genera una foto REALISTICA di moda con luci neon (editoriale notturno).

DATI:
- Modello/a: [persona], [età], atteggiamento deciso
- Outfit: nero/cromo/pelle, stile moderno
- Scena: strada notturna con neon magenta e ciano, riflessi sul suolo

ILLUMINAZIONE:
- Neon come key light (morbida) + riempimento minimo
- Pelle realistica: regolare il neon per non renderla irreale

FOTOCAMERA:
- 35mm, f/1.8, ISO 800, look notturno nitido
- Bokeh di luci sullo sfondo

COMPOSIZIONE:
- Piano 3/4, posa editoriale
- Atmosfera cinematografica

RESTRIZIONI:
- Niente testo/loghi
- Evitare “pelle fluorescente”`,
    thumbnail: "/images/foto-pro/moda16.webp",
  },
  {
    id: "img-foto-moda-017",
    title: "Moda notturna con flash morbido (party editoriale, grana sottile)",
    area: "Fotografia Pro",
    category: "Luci neon / notte",
    summary:
      "Stile editoriale tipo party con flash morbido e atmosfera notturna realistica.",
    prompt: `Genera una foto REALISTICA di moda notturna con flash morbido (party editoriale).

DATI:
- Modello/a: [persona], [età], espressione divertita ma elegante
- Outfit: da festa (abito/giacca premium), senza loghi
- Sfondo: strada notturna o interno con luci sfocate

ILLUMINAZIONE:
- Flash morbido (bounce) + luce ambiente
- Film grain MOLTO sottile, look editoriale

FOTOCAMERA:
- 35mm, f/2.2, ISO 1000
- Nitidezza naturale, non iper-perfetta

COMPOSIZIONE:
- Mezzo busto o 3/4, gesto spontaneo editoriale

RESTRIZIONI:
- Niente testo/watermark
- Evitare flash bruciato sulla pelle`,
    thumbnail: "/images/foto-pro/moda17.webp",
  },
  {
    id: "img-foto-moda-018",
    title: "Editorial notturno elegante (lampioni caldi, bokeh, lusso)",
    area: "Fotografia Pro",
    category: "Luci neon / notte",
    summary:
      "Foto notturna elegante con lampioni caldi e vibe di lusso discreto.",
    prompt: `Genera una foto REALISTICA editoriale notturna elegante in città.

DATI:
- Modello/a: [persona], [età], atteggiamento premium
- Outfit: cappotto lungo / blazer premium (toni scuri)
- Scena: strada con lampioni caldi, bokeh di luci, sfondo sfocato

ILLUMINAZIONE:
- Luce calda dei lampioni + riempimento sottile sul viso
- Pelle realistica, toni caldi controllati

FOTOCAMERA:
- 50mm, f/1.8, ISO 800
- Bokeh morbido, fuoco sugli occhi

COMPOSIZIONE:
- Piano 3/4 o mezzo, posa editoriale tranquilla
- Estetica da campagna premium

RESTRIZIONI:
- Niente testo/loghi
- Evitare troppo rumore o sfocature strane`,
    thumbnail: "/images/foto-pro/moda18.webp",
  },
  {
    id: "img-foto-moda-019",
    title: "Moda sotto la pioggia notturna (riflessi forti, editoriale cinematografico)",
    area: "Fotografia Pro",
    category: "Luci neon / notte",
    summary:
      "Editorial notturno con pioggia e riflessi, look cinematografico realistico.",
    prompt: `Genera una foto REALISTICA editoriale notturna con pioggia e riflessi.

DATI:
- Modello/a: [persona], [età], espressione seria editoriale
- Outfit: trench/cappotto, toni scuri
- Scena: strada bagnata con riflessi intensi + luci sfocate

ILLUMINAZIONE:
- Key light morbida laterale + luci di sfondo riflesse
- Pelle naturale, gocce realistiche sottili

FOTOCAMERA:
- 35mm, f/1.8, ISO 1000
- Dettaglio sul viso, bokeh sullo sfondo

COMPOSIZIONE:
- Piano 3/4, ombrello opzionale (non protagonista)
- Atmosfera cinematografica

RESTRIZIONI:
- Niente testo/loghi
- Evitare gocce gigantesche o “finte”`,
    thumbnail: "/images/foto-pro/moda19.webp",
  },
  {
    id: "img-foto-moda-020",
    title: "Editorial notturno indoor (bar elegante, luce calda, lusso discreto)",
    area: "Fotografia Pro",
    category: "Luci neon / notte",
    summary:
      "Moda editoriale indoor tipo bar elegante con luce calda ed estetica luxury.",
    prompt: `Genera una foto REALISTICA di moda editoriale in interno notturno (bar elegante).

DATI:
- Modello/a: [persona], [età]
- Outfit: elegante premium (abito/completo), senza loghi
- Scena: bar di lusso con luci calde, sfondo sfocato

ILLUMINAZIONE:
- Luce calda ambientale + luce morbida diretta sul viso
- Contrasto medio, pelle realistica

FOTOCAMERA:
- 50mm, f/1.8, ISO 1200
- Bokeh con luci, nitidezza sugli occhi

COMPOSIZIONE:
- Mezzo busto o 3/4, posa editoriale discreta
- Estetica: lusso, sofisticazione, campagna

RESTRIZIONI:
- Niente testo/watermark
- Evitare rumore eccessivo o blur artificiale`,
    thumbnail: "/images/foto-pro/moda20.webp",
  },
];
