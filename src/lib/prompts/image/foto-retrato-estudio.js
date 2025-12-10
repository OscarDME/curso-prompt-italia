// src/lib/prompts/image/foto-retrato-estudio.js

export const imagePromptsFotoRetratoEstudio = [
  // =========================
  // CATEGORY: Ritratto in studio (realistico)
  // =========================
  {
    id: "img-foto-retrato-est-001",
    title: "Ritratto premium in studio (softbox + sfondo grigio morbido)",
    area: "Fotografia Pro",
    category: "Ritratto in studio (realistico)",
    summary:
      "Ritratto realistico da studio con illuminazione morbida (softbox) e look pulito e professionale.",
    prompt: `Genera un ritratto fotografico REALISTICO in stile studio.

DATI:
- Soggetto: [uomo/donna/persona] di [età approssimativa], [etnia/tratti], [colore degli occhi], [acconciatura], [barba/trucco opzionale]
- Abbigliamento: [es: blazer nero + t-shirt bianca / camicia bianca / abito elegante]
- Espressione: [sicura/serena/gentile]
- Sfondo: grigio neutro morbido, senza texture marcata

FOTOCAMERA / LUCE:
- Fotocamera full-frame, lente 85mm, f/1.8, ISO 100, 1/160s
- Illuminazione: softbox grande a 45° a destra + riflettore morbido a sinistra
- Ombra morbida, pelle naturale con dettaglio, senza effetto plastico

COMPOSIZIONE:
- Inquadratura: piano medio-corto (petto a testa), soggetto centrato
- Fuoco nitido sugli occhi, bokeh morbido
- Color grading: clean, toni naturali, contrasto moderato

RESTRIZIONI:
- Niente testo, niente watermark, niente deformazioni
- Evitare mani extra, denti strani, occhi asimmetrici, pelle artificiale`,
    thumbnail: "/images/foto-pro/estudio1.webp",
  },
  {
    id: "img-foto-retrato-est-002",
    title: "Ritratto high-key luminoso (sfondo bianco, pelle naturale)",
    area: "Fotografia Pro",
    category: "Ritratto in studio (realistico)",
    summary:
      "Ritratto high-key con sfondo bianco puro, luce avvolgente ed estetica fresca da rivista.",
    prompt: `Genera un ritratto REALISTICO high-key per fotografia in studio.

DATI:
- Soggetto: [donna/uomo/persona], [età], [tratti], [acconciatura]
- Abbigliamento: [camicia bianca / t-shirt chiara / look minimal]
- Mood: fresco, pulito, editoriale

ILLUMINAZIONE:
- Sfondo bianco puro con luce uniforme
- Luce principale: softbox frontale grande + riempimento morbido (senza ombre dure)
- Dettaglio della pelle realistico, texture naturale

FOTOCAMERA:
- Lente 50mm o 85mm, f/2.2, ISO 100, alta nitidezza, ampia gamma dinamica

COMPOSIZIONE:
- Inquadratura: primo piano (viso) o mezzo busto
- Sfondo totalmente pulito, senza elementi

RESTRIZIONI:
- Niente testo/loghi
- Evitare lucentezza eccessiva sulla pelle, non sovraesporre il volto
- Proporzioni facciali realistiche, sguardo naturale`,
    thumbnail: "/images/foto-pro/estudio2.webp",
  },
  {
    id: "img-foto-retrato-est-003",
    title: "Ritratto low-key drammatico (sfondo nero, Rembrandt morbido)",
    area: "Fotografia Pro",
    category: "Ritratto in studio (realistico)",
    summary:
      "Ritratto low-key drammatico con illuminazione Rembrandt morbida, ideale per brand premium.",
    prompt: `Genera un ritratto REALISTICO low-key in stile premium.

DATI:
- Soggetto: [persona], [età], [tratti], [acconciatura], [barba/trucco]
- Abbigliamento: nero/scuro (es: dolcevita nero o blazer scuro)
- Sfondo: nero profondo senza texture

ILLUMINAZIONE:
- Stile Rembrandt: luce principale laterale a 45° + leggera luce di separazione (rim light) sottile
- Ombre definite ma morbide, alto contrasto controllato
- Mantenere dettaglio nelle ombre (non “chiuderle”)

FOTOCAMERA:
- Lente 85mm, f/2, ISO 200, 1/160s
- Fuoco sugli occhi, alta nitidezza, grana molto sottile (opzionale)

COMPOSIZIONE:
- Primo piano o piano medio-corto
- Look cinematografico, elegante

RESTRIZIONI:
- Niente testo, niente watermark
- Evitare occhi artificialmente brillanti o tratti deformati`,
    thumbnail: "/images/foto-pro/estudio3.webp",
  },
  {
    id: "img-foto-retrato-est-004",
    title: "Ritratto editoriale con sfondo beige caldo (pelle realistica)",
    area: "Fotografia Pro",
    category: "Ritratto in studio (realistico)",
    summary:
      "Ritratto editoriale morbido con palette calda (beige), ideale per lifestyle/beauty.",
    prompt: `Genera un ritratto REALISTICO in stile editoriale.

DATI:
- Soggetto: [donna/uomo/persona], [età], [tratti], [acconciatura]
- Abbigliamento: toni crema/beige, minimal ed elegante
- Sfondo: beige caldo uniforme

ILLUMINAZIONE:
- Luce morbida tipo finestra (soft daylight) + riempimento sottile
- Ombre leggere, pelle naturale senza eccessiva levigatura

FOTOCAMERA:
- Lente 85mm, f/2.5, ISO 100
- Color grading: caldo, morbido, contrasto medio

COMPOSIZIONE:
- Inquadratura: busto o primo piano, sguardo verso camera
- Finitura da rivista, nitida ma naturale

RESTRIZIONI:
- Niente testo, niente artefatti, niente mani extra`,
    thumbnail: "/images/foto-pro/estudio4.webp",
  },
  {
    id: "img-foto-retrato-est-005",
    title: "Ritratto con luce di separazione (rim light) per staccare dallo sfondo",
    area: "Fotografia Pro",
    category: "Ritratto in studio (realistico)",
    summary:
      "Ritratto pro con rim light per dare profondità, stile studio branding.",
    prompt: `Genera un ritratto REALISTICO in studio con rim light.

DATI:
- Soggetto: [persona], [età], [tratti]
- Abbigliamento: [abbigliamento scuro o neutro]
- Sfondo: grigio scuro o blu notte molto sottile

LUCI:
- Luce principale: softbox frontale-laterale morbido
- Rim light (luce di separazione) dietro, delineando spalle e capelli (sottile, non esagerata)
- Riempimento minimo per mantenere dimensionalità

FOTOCAMERA:
- 85mm, f/2.2, ISO 125, 1/160s
- Pelle con texture reale, occhi naturali

COMPOSIZIONE:
- Piano medio-corto, soggetto leggermente decentrato (regola dei terzi)

RESTRIZIONI:
- Niente testo/loghi
- Evitare aloni artificiali, rim light realistica`,
    thumbnail: "/images/foto-pro/estudio5.webp",
  },

  // =========================
  // CATEGORY: Ritratto corporate / LinkedIn
  // =========================
  {
    id: "img-foto-retrato-est-006",
    title: "Headshot corporate LinkedIn (sfondo blu-grigio, sorriso leggero)",
    area: "Fotografia Pro",
    category: "Ritratto corporate / LinkedIn",
    summary:
      "Foto professionale stile LinkedIn: illuminazione pulita, sfondo corporate ed espressione affidabile.",
    prompt: `Genera un headshot REALISTICO in stile LinkedIn.

DATI:
- Soggetto: [uomo/donna/persona], [età], [tratti], [acconciatura], [barba opzionale]
- Abbigliamento: [blazer + camicia] o [camicia formale], colori sobri
- Espressione: sorriso leggero, affidabile, professionale
- Sfondo: blu-grigio morbido (sfumatura sottile), pulito

ILLUMINAZIONE:
- Tre punti morbidi: key light frontale, fill light morbida, hair light molto sottile
- Nessun riflesso forte su fronte o naso

FOTOCAMERA:
- Lente 85mm, f/2.8, ISO 100, look nitido

COMPOSIZIONE:
- Inquadratura: spalle a testa, centrata, spazio superiore adeguato
- Fuoco perfetto sugli occhi

RESTRIZIONI:
- Niente testo, niente loghi, niente filtri esagerati
- Proporzioni facciali naturali`,
    thumbnail: "/images/foto-pro/estudio6.webp",
  },
  {
    id: "img-foto-retrato-est-007",
    title: "Ritratto corporate in ufficio (bokeh morbido, luce naturale)",
    area: "Fotografia Pro",
    category: "Ritratto corporate / LinkedIn",
    summary:
      "Ritratto professionale in ambiente ufficio con sfondo sfocato e luce naturale.",
    prompt: `Genera un ritratto REALISTICO in un ambiente corporate moderno.

DATI:
- Soggetto: [persona], [età], look professionale
- Outfit: [blazer, camicia, business casual]
- Sfondo: ufficio moderno con vetrate e scrivanie, sfocato (bokeh)
- Mood: fiducia, leadership

ILLUMINAZIONE:
- Luce naturale da finestra + riempimento morbido
- Toni neutri, incarnati realistici

FOTOCAMERA:
- 50mm o 85mm, f/2, ISO 200
- Profondità di campo ridotta, bokeh morbido

COMPOSIZIONE:
- Piano medio (vita/petto a testa), regola dei terzi
- Fuoco sugli occhi

RESTRIZIONI:
- Niente testo, niente watermark
- Non deformare mani/viso`,
    thumbnail: "/images/foto-pro/estudio7.webp",
  },
  {
    id: "img-foto-retrato-est-008",
    title: "Foto di team corporate (3 persone, studio pulito)",
    area: "Fotografia Pro",
    category: "Ritratto corporate / LinkedIn",
    summary:
      "Immagine tipo “team professionale” per web: 3 persone, look coerente, studio neutro.",
    prompt: `Genera una foto REALISTICA di team corporate (3 persone).

DATI:
- Persone: 3 (genere/età vari), aspetto professionale
- Abbigliamento: business casual coordinato (blu, grigi, bianchi)
- Sfondo: grigio chiaro o bianco morbido, stile studio
- Espressione: cordiale, professionale

ILLUMINAZIONE:
- Softbox grandi, luce uniforme, ombre morbide
- Color grading corporate clean

FOTOCAMERA:
- Lente 35mm o 50mm, f/4 per mantenere tutti a fuoco
- ISO 100, alta nitidezza

COMPOSIZIONE:
- Persone allineate con profondità minima, postura naturale
- Spazio negativo sufficiente per banner web

RESTRIZIONI:
- Niente testo né loghi
- Proporzioni corporee realistiche (mani corrette)`,
    thumbnail: "/images/foto-pro/estudio8.webp",
  },
  {
    id: "img-foto-retrato-est-009",
    title: "Ritratto CEO premium (sfondo scuro, look da leadership)",
    area: "Fotografia Pro",
    category: "Ritratto corporate / LinkedIn",
    summary:
      "Ritratto stile CEO/Founder, estetica premium e autorevolezza visiva.",
    prompt: `Genera un ritratto REALISTICO in stile CEO premium.

DATI:
- Soggetto: [persona], [età], look da dirigente
- Abbigliamento: blazer premium, camicia impeccabile, accessori minimi
- Espressione: seria ma vicina (autorevolezza calma)
- Sfondo: scuro elegante (grigio carbone/blu notte) con texture molto sottile

ILLUMINAZIONE:
- Key light morbida laterale + fill minimo
- Rim light molto sottile per separare dallo sfondo
- Contrasto professionale, senza ombre dure

FOTOCAMERA:
- 85mm, f/2.2, ISO 125, alta nitidezza

COMPOSIZIONE:
- Piano medio-corto, postura dritta, spalle leggermente ruotate

RESTRIZIONI:
- Niente testo/watermark
- Evitare pelle “di plastica” o tratti esagerati`,
    thumbnail: "/images/foto-pro/estudio9.webp",
  },
  {
    id: "img-foto-retrato-est-010",
    title: "Ritratto per profilo professionale (sfondo pastello morbido, friendly)",
    area: "Fotografia Pro",
    category: "Ritratto corporate / LinkedIn",
    summary:
      "Foto professionale amichevole per coach/consulente: sfondo pastello e stile vicino.",
    prompt: `Genera un ritratto REALISTICO professionale e accogliente.

DATI:
- Soggetto: [persona], [età], sorriso naturale
- Abbigliamento: smart casual (colori chiari)
- Sfondo: pastello morbido (es: verde menta / azzurro cielo / beige), uniforme

ILLUMINAZIONE:
- Luce morbida frontale (softbox) + riempimento leggero
- Pelle naturale, aspetto fresco

FOTOCAMERA:
- 50mm o 85mm, f/2.8, ISO 100
- Color grading: luminoso, leggermente caldo

COMPOSIZIONE:
- Inquadratura: spalle a testa, centrata
- Look “coach/consulente affidabile”

RESTRIZIONI:
- Niente testo/loghi
- Evitare sorriso artificiale, occhi strani`,
    thumbnail: "/images/foto-pro/estudio10.webp",
  },

  // =========================
  // CATEGORY: Headshot premium
  // =========================
  {
    id: "img-foto-retrato-est-011",
    title: "Headshot iperrealistico con sfondo scuro (dettaglio nitido negli occhi)",
    area: "Fotografia Pro",
    category: "Headshot premium",
    summary:
      "Primo piano iperrealistico, fuoco chirurgico sugli occhi, estetica premium per il web.",
    prompt: `Genera un HEADSHOT iperrealistico (primo piano) con qualità premium.

DATI:
- Soggetto: [persona], [età], [tratti], [acconciatura]
- Espressione: calma e sicura
- Sfondo: scuro morbido, minimalista

ILLUMINAZIONE:
- Softbox frontale morbida + riempimento sottile
- Catchlight realistico negli occhi (piccolo, non esagerato)
- Texture reale della pelle (pori sottili), senza levigatura artificiale

FOTOCAMERA:
- Lente 85mm, f/2, ISO 100
- Alta nitidezza sugli occhi, micro-contrasto naturale

COMPOSIZIONE:
- Solo volto e parte del collo, leggero spazio superiore

RESTRIZIONI:
- Niente testo/watermark
- Evitare occhi disallineati, pupille strane, denti deformi`,
    thumbnail: "/images/foto-pro/estudio11.webp",
  },
  {
    id: "img-foto-retrato-est-012",
    title: "Headshot con sfondo a colore pieno (branding coerente)",
    area: "Fotografia Pro",
    category: "Headshot premium",
    summary:
      "Headshot con sfondo pieno per identità di marca (ideale per team e profili).",
    prompt: `Genera un headshot REALISTICO per un branding coerente.

DATI:
- Soggetto: [persona], [età], [tratti]
- Abbigliamento: [camicia tinta unita / polo / blazer], senza pattern forti
- Sfondo: colore pieno esatto: [#HEX o colore], uniforme e pulito

ILLUMINAZIONE:
- Luce morbida e uniforme, senza ombre dure
- Bilanciamento del bianco neutro (o leggermente caldo)

FOTOCAMERA:
- 85mm, f/2.8, ISO 100
- Bordi puliti, ritaglio professionale

COMPOSIZIONE:
- Spalle a testa, centrato

RESTRIZIONI:
- Niente testo/loghi
- Mantenere il colore di sfondo fedele, senza sfumature`,
    thumbnail: "/images/foto-pro/estudio12.webp",
  },
  {
    id: "img-foto-retrato-est-013",
    title: "Headshot stile rivista (sfondo chiaro + contrasto morbido)",
    area: "Fotografia Pro",
    category: "Headshot premium",
    summary:
      "Look editoriale da rivista: pulito, elegante, pelle naturale, senza eccesso di ritocco.",
    prompt: `Genera un headshot REALISTICO in stile editoriale da rivista (non caricatura).

DATI:
- Soggetto: [persona], [età], [tratti]
- Outfit: minimal, elegante
- Sfondo: chiaro (grigio molto chiaro o crema)

LUCI:
- Soft daylight, ombre morbide
- Dettaglio reale sulla pelle, senza blur

FOTOCAMERA:
- 50mm o 85mm, f/2.5, ISO 100
- Color grading: editoriale clean, contrasto morbido, neri non “schiacciati”

COMPOSIZIONE:
- Primo piano, sguardo in camera, gesto naturale

RESTRIZIONI:
- Niente testo, niente watermark
- Evitare ritocco plastico`,
    thumbnail: "/images/foto-pro/estudio13.webp",
  },
  {
    id: "img-foto-retrato-est-014",
    title: "Headshot con look cinematografico (film grain sottile)",
    area: "Fotografia Pro",
    category: "Headshot premium",
    summary:
      "Headshot con estetica cinematografica morbida e grana tipo pellicola (discreta).",
    prompt: `Genera un headshot REALISTICO con estetica cinematografica.

DATI:
- Soggetto: [persona], [età], [tratti]
- Outfit: scuro/neutro
- Sfondo: grigio scuro o blu notte

ILLUMINAZIONE:
- Key light laterale morbida + fill minimo
- Ombre con dettaglio, contrasto medio-alto

FOTOCAMERA:
- 85mm, f/2, ISO 200
- Aggiungere film grain MOLTO sottile (non rumore forte)
- Color grading: teal/orange leggero o cine neutro

COMPOSIZIONE:
- Primo piano, fuoco sugli occhi

RESTRIZIONI:
- Niente testo/loghi
- Evitare aloni, grana esagerata, distorsione facciale`,
    thumbnail: "/images/foto-pro/estudio14.webp",
  },
  {
    id: "img-foto-retrato-est-015",
    title: "Headshot con occhiali (riflessi controllati, look intellettuale)",
    area: "Fotografia Pro",
    category: "Headshot premium",
    summary:
      "Ritratto con occhiali senza riflessi fastidiosi, ideale per profili professionali.",
    prompt: `Genera un headshot REALISTICO di una persona con occhiali.

DATI:
- Soggetto: [persona], [età], [tratti]
- Occhiali: stile [metallo sottile / acetato], aspetto premium
- Sfondo: neutro (grigio/beige)

ILLUMINAZIONE:
- Luce morbida frontale + leggera luce laterale
- Controllo riflessi: lenti senza bagliori forti, occhi visibili

FOTOCAMERA:
- 85mm, f/2.8, ISO 100
- Alta nitidezza, dettaglio naturale

COMPOSIZIONE:
- Inquadratura spalle a testa, centrata

RESTRIZIONI:
- Niente testo
- Evitare lenti deformate, riflessi che coprono gli occhi`,
    thumbnail: "/images/foto-pro/estudio15.webp",
  },

  // =========================
  // CATEGORY: Beauty / skincare (close-up)
  // =========================
  {
    id: "img-foto-retrato-est-016",
    title: "Beauty close-up skincare (pelle naturale + luce frontale morbida)",
    area: "Fotografia Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Close-up beauty con texture reale della pelle, illuminazione morbida ed estetica skincare.",
    prompt: `Genera una foto REALISTICA beauty close-up (skincare editoriale).

DATI:
- Soggetto: [donna/persona], [età], pelle sana, trucco minimo
- Sfondo: bianco/crema morbido
- Mood: pulito, fresco, cura personale

ILLUMINAZIONE:
- Luce frontale morbida (softbox) con ombre minime
- Pelle con texture reale (pori sottili), luminosità naturale controllata

FOTOCAMERA:
- Macro morbida o 85mm, f/3.2, ISO 100
- Fuoco su occhi e guance, alta nitidezza senza esagerare

COMPOSIZIONE:
- Primissimo piano, volto dominante
- Senza accessori distraenti

RESTRIZIONI:
- Niente testo, nessun prodotto con marchi reali visibili
- Evitare pelle “di plastica” o ultra-levigata`,
    thumbnail: "/images/foto-pro/estudio16.webp",
  },
  {
    id: "img-foto-retrato-est-017",
    title: "Beauty editoriale con luce laterale (volume sugli zigomi)",
    area: "Fotografia Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Ritratto beauty con volume morbido e ombre controllate per un look editoriale premium.",
    prompt: `Genera un beauty close-up REALISTICO con estetica editoriale premium.

DATI:
- Soggetto: [persona], [età], trucco sottile (pelle, sopracciglia, labbra naturali)
- Sfondo: grigio chiaro o beige
- Espressione: serena, elegante

ILLUMINAZIONE:
- Key light laterale morbida (45°) per definire gli zigomi
- Fill light leggero per evitare ombre dure
- Catchlight naturale negli occhi

FOTOCAMERA:
- 85mm, f/2.8, ISO 100
- Color grading: caldo morbido, contrasto medio

COMPOSIZIONE:
- Primo piano, fuoco nitido su occhi e pelle

RESTRIZIONI:
- Niente testo/loghi
- Evitare occhi strani, labbra deformate, denti extra`,
    thumbnail: "/images/foto-pro/estudio17.webp",
  },
  {
    id: "img-foto-retrato-est-018",
    title: "Beauty con capelli al vento (senza blur artificiale, realistico)",
    area: "Fotografia Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Look beauty dinamico con movimento dei capelli, mantenendo nitidezza e realismo.",
    prompt: `Genera una foto REALISTICA beauty con capelli in movimento.

DATI:
- Soggetto: [persona], [età], capelli [lunghi/medi], espressione naturale
- Sfondo: neutro (grigio chiaro/crema)
- Mood: fresco e moderno

ILLUMINAZIONE:
- Luce frontale morbida con leggera componente laterale
- Mantenere dettaglio dei capelli (niente blur “di plastica”)

FOTOCAMERA:
- 85mm, f/2.8, ISO 200, tempo di scatto sufficiente per congelare il movimento
- Nitidezza su volto e occhi

COMPOSIZIONE:
- Primo piano o busto, vento sottile nei capelli
- Pelle realistica, senza eccesso di ritocco

RESTRIZIONI:
- Niente testo
- Evitare capelli fusi in modo strano con lo sfondo`,
    thumbnail: "/images/foto-pro/estudio18.webp",
  },
  {
    id: "img-foto-retrato-est-019",
    title: "Beauty minimal con mani vicino al viso (mani realistiche)",
    area: "Fotografia Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Close-up beauty con posa elegante delle mani, curando anatomia realistica.",
    prompt: `Genera un beauty close-up REALISTICO con mani vicino al viso.

DATI:
- Soggetto: [persona], [età], trucco minimal
- Posa: mani vicino al viso (posa beauty elegante), dita rilassate
- Sfondo: crema/beige morbido

ILLUMINAZIONE:
- Softbox frontale morbido + riempimento leggero
- Dettaglio sulla pelle, unghie pulite e realistiche

FOTOCAMERA:
- 85mm, f/3.2, ISO 100
- Fuoco: occhi + volto, mani leggermente meno nitide (naturale)

COMPOSIZIONE:
- Primo piano, mani che incorniciano il volto

RESTRIZIONI IMPORTANTI:
- Anatomia corretta: 5 dita per mano, proporzioni reali
- Niente dita extra, niente mani deformi, niente testo`,
    thumbnail: "/images/foto-pro/estudio19.webp",
  },
  {
    id: "img-foto-retrato-est-020",
    title: "Beauty premium con sfondo nero (alto contrasto, pelle curata)",
    area: "Fotografia Pro",
    category: "Beauty / skincare (close-up)",
    summary:
      "Close-up beauty elegante con sfondo nero, contrasto premium e dettaglio della texture.",
    prompt: `Genera un beauty close-up REALISTICO premium su sfondo nero.

DATI:
- Soggetto: [persona], [età], trucco elegante (occhi/labbra sottili)
- Sfondo: nero profondo
- Mood: lusso, alta estetica

ILLUMINAZIONE:
- Key light laterale morbida + fill minimo
- Rim light molto sottile per separare i capelli dallo sfondo
- Mantenere dettaglio della pelle senza “plastificare”

FOTOCAMERA:
- 85mm, f/2.5, ISO 200
- Color grading: lusso (contrasto controllato, toni pelle realistici)

COMPOSIZIONE:
- Primo piano, sguardo in camera o leggero 3/4

RESTRIZIONI:
- Niente testo/loghi
- Evitare riflessi aggressivi, tratti deformati`,
    thumbnail: "/images/foto-pro/estudio20.webp",
  },
];
