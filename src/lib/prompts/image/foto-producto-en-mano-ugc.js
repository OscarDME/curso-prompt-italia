// src/lib/prompts/image/foto-producto-en-mano-ugc.js

export const imagePromptsFotoProductoEnManoUGC = [
  // =========================
  // CATEGORY: Prodotto in mano (UGC)
  // =========================
  {
    id: "img-ugc-mano-001",
    title: "Prodotto in mano davanti alla camera (selfie UGC, luce naturale morbida)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (UGC)",
    summary:
      "Selfie credibile mostrando il prodotto vicino al viso, look autentico in stile UGC.",
    prompt: `Genera una foto REALISTICA in stile selfie UGC mostrando un prodotto in mano.

DATI:
- Persona: [donna/uomo/persona] di [età], espressione naturale (sorriso leggero o neutra)
- Prodotto: [descrivi prodotto generico], SENZA marchi né testo leggibile
- Posa: tenendo il prodotto vicino al viso, mano rilassata, dita visibili
- Sfondo: interno semplice (casa) o esterno morbido, sfocato

ILLUMINAZIONE:
- Luce naturale morbida (finestra o ombra aperta)
- Pelle realistica, senza filtri estremi

FOTOCAMERA:
- Simulare fotocamera frontale smartphone, nitidezza naturale, compressione realistica
- Fuoco su viso e prodotto (entrambi nitidi)

COMPOSIZIONE:
- Inquadratura: viso + spalle, prodotto a lato del viso
- Stile autentico, non pubblicitario esagerato

RESTRIZIONI CRITICHE:
- Mano anatomicamente corretta (5 dita, proporzioni reali)
- Niente testo/loghi/watermark`,
    thumbnail: "/images/foto-pro/ugc1.webp",
  },
  {
    id: "img-ugc-mano-002",
    title: "Prodotto in mano con sfondo bagno (skincare UGC, luce bianca)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (UGC)",
    summary:
      "UGC tipico skincare in bagno pulito, luce bianca morbida e look realistico.",
    prompt: `Genera una foto REALISTICA UGC in bagno (stile skincare) con prodotto in mano.

DATI:
- Persona: [persona], [età], trucco minimo
- Prodotto: flacone/erogatore/scatola skincare generica, senza marca né testo leggibile
- Scena: bagno moderno e pulito, specchio sullo sfondo (senza doppi riflessi strani)
- Posa: tenendo il prodotto verso la camera

ILLUMINAZIONE:
- Luce bianca morbida da bagno (non blu intensa), ombre minime
- Pelle naturale con texture reale

FOTOCAMERA:
- Simulare smartphone, nitidezza naturale
- Fuoco sul prodotto, viso leggermente dietro ma chiaro

COMPOSIZIONE:
- Piano medio-corto (petto a testa)
- Estetica quotidiana, autentica

RESTRIZIONI:
- Niente loghi/testo leggibile
- Mano realistica (5 dita), evitare deformazioni`,
    thumbnail: "/images/foto-pro/ugc2.webp",
  },
  {
    id: "img-ugc-mano-003",
    title: "Prodotto in mano seduto/a sul divano (lifestyle UGC, caldo)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (UGC)",
    summary:
      "Persona in salotto che mostra il prodotto in mano, vibe casalinga calda e credibile.",
    prompt: `Genera una foto REALISTICA UGC a casa, seduto/a su un divano, mostrando un prodotto in mano.

DATI:
- Persona: [persona], [età], espressione amichevole
- Prodotto: [descrivi prodotto generico], senza marchi
- Scena: salotto minimal con divano chiaro, pianta o lampada sfocate
- Posa: prodotto in mano vicino al petto o al viso

ILLUMINAZIONE:
- Luce calda morbida (pomeriggio), ombre leggere
- Colori naturali, senza filtri forti

FOTOCAMERA:
- Simulare smartphone, equivalente 28–35mm
- Fuoco sul viso, prodotto anche visivamente leggibile

COMPOSIZIONE:
- Piano medio, ambiente visibile ma sfocato

RESTRIZIONI:
- Niente testo/loghi
- Mano corretta, senza dita extra`,
    thumbnail: "/images/foto-pro/ugc3.webp",
  },
  {
    id: "img-ugc-mano-004",
    title: "Prodotto in mano all’aperto (ombra aperta, look autentico)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (UGC)",
    summary:
      "UGC all’aperto mostrando il prodotto, luce naturale uniforme e sfondo morbido sfocato.",
    prompt: `Genera una foto REALISTICA UGC all’aperto mostrando un prodotto in mano.

DATI:
- Persona: [persona], [età], espressione naturale
- Prodotto: [descrivi prodotto], generico, senza marca/etichetta leggibile
- Sfondo: parco/strada sfocati, luce naturale
- Posa: prodotto vicino alla camera, viso visibile

ILLUMINAZIONE:
- Ombra aperta (luce morbida), senza ombre dure
- Pelle realistica, colori neutri

FOTOCAMERA:
- Simulare smartphone, nitidezza naturale
- Fuoco bilanciato: prodotto e occhi

COMPOSIZIONE:
- Viso centrato, prodotto in primo piano leggermente laterale

RESTRIZIONI:
- Niente testo/loghi
- Mano anatomicamente corretta`,
    thumbnail: "/images/foto-pro/ugc4.webp",
  },
  {
    id: "img-ugc-mano-005",
    title: "Prodotto in mano con unghie curate (beauty UGC, mani perfette)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (UGC)",
    summary:
      "Focus sulla mano che regge il prodotto, unghie curate e anatomia perfetta.",
    prompt: `Genera una foto REALISTICA UGC con focus sulla mano che tiene il prodotto.

DATI:
- Mano: unghie curate (naturali o manicure semplice), pelle realistica
- Prodotto: [flacone/scatola generica], senza marca né testo leggibile
- Sfondo: sfocato (casa o esterno morbido)
- Opzionale: viso parzialmente sfocato dietro per contesto

ILLUMINAZIONE:
- Luce naturale morbida, riflessi leggeri sul prodotto
- Fuoco sulla texture della pelle e del prodotto

FOTOCAMERA:
- Macro morbida o 50mm, f/2.8, ISO 200
- Fuoco principalmente su mano e prodotto

COMPOSIZIONE:
- Prodotto centrato, mano che lo regge in modo naturale

RESTRIZIONI CRITICHE:
- 5 dita, proporzioni reali, nessuna deformazione
- Niente testo/loghi/watermark`,
    thumbnail: "/images/foto-pro/ugc5.webp",
  },

  // =========================
  // CATEGORY: Unboxing / prova (UGC)
  // =========================
  {
    id: "img-ugc-mano-006",
    title: "Unboxing UGC su tavolo (scatola aperta, mani realistiche)",
    area: "Fotografia Pro",
    category: "Unboxing / prova (UGC)",
    summary:
      "Foto stile unboxing: scatola aperta sul tavolo, mani che aprono, look reale senza marchi.",
    prompt: `Genera una foto REALISTICA in stile UGC di un unboxing su un tavolo.

DATI:
- Scena: tavolo pulito (legno chiaro o bianco)
- Prodotto: scatola generica senza marca, aperta, contenuto parzialmente visibile (senza testo leggibile)
- Mani: due mani che aprono o tengono il coperchio, anatomia perfetta
- Sfondo: interno casa, sfocato

ILLUMINAZIONE:
- Luce naturale da finestra, morbida
- Ombre leggere e realistiche

FOTOCAMERA:
- 35mm o 50mm, f/2.8, ISO 250
- Fuoco su scatola e mani

COMPOSIZIONE:
- Inquadratura dall’alto leggermente inclinata (top-down morbido)
- Estetica autentica, non super pubblicitaria

RESTRIZIONI:
- Niente loghi/testo leggibile
- Mani corrette (5 dita ciascuna), niente dita extra`,
    thumbnail: "/images/foto-pro/ugc6.webp",
  },
  {
    id: "img-ugc-mano-007",
    title: "Prodotto appena tolto dalla scatola (primo piano, texture reale)",
    area: "Fotografia Pro",
    category: "Unboxing / prova (UGC)",
    summary:
      "Primo piano del prodotto tenuto dopo un unboxing, texture reale e sfondo casa sfocato.",
    prompt: `Genera una foto REALISTICA UGC mostrando il prodotto appena tolto dalla scatola.

DATI:
- Prodotto: [gadget/flacone/scatola], generico senza marca
- Scatola: aperta sullo sfondo (sfocata), senza testo leggibile
- Mano: tiene il prodotto in modo fermo ma naturale
- Sfondo: casa minimal, sfocato

ILLUMINAZIONE:
- Luce naturale morbida, colori reali
- Riflessi controllati sul prodotto

FOTOCAMERA:
- 50mm, f/2.2, ISO 200
- Fuoco sul prodotto, mano nitida

COMPOSIZIONE:
- Prodotto centrato, scatola dietro come contesto

RESTRIZIONI:
- Niente loghi/testo leggibile
- Mano realistica senza deformazioni`,
    thumbnail: "/images/foto-pro/ugc7.webp",
  },
  {
    id: "img-ugc-mano-008",
    title: "Applicando il prodotto (skincare: crema sulla guancia, realistico)",
    area: "Fotografia Pro",
    category: "Unboxing / prova (UGC)",
    summary:
      "Foto UGC mentre si applica il prodotto (crema/siero) con pelle realistica e gesto naturale.",
    prompt: `Genera una foto REALISTICA UGC mentre si applica un prodotto skincare.

DATI:
- Persona: [persona], [età], viso pulito
- Prodotto: crema/siero generico in flacone senza marca
- Azione: applicando una piccola quantità su guancia o mano (senza eccessi)
- Sfondo: bagno o stanza, sfocato

ILLUMINAZIONE:
- Luce naturale morbida o luce bianca morbida da bagno
- Pelle realistica con texture naturale

FOTOCAMERA:
- 50mm o 85mm, f/2.8, ISO 250
- Fuoco su viso e gesto di applicazione

COMPOSIZIONE:
- Primo piano o piano medio-corto

RESTRIZIONI CRITICHE:
- Mani e dita corrette
- Niente testo/loghi, niente pelle “di plastica”`,
    thumbnail: "/images/foto-pro/ugc8.webp",
  },
  {
    id: "img-ugc-mano-009",
    title: "Provando il prodotto davanti allo specchio (UGC realistico, senza doppi riflessi strani)",
    area: "Fotografia Pro",
    category: "Unboxing / prova (UGC)",
    summary:
      "Stile UGC davanti allo specchio: prodotto visibile, riflesso naturale e ambiente reale.",
    prompt: `Genera una foto REALISTICA UGC davanti a uno specchio mentre si prova un prodotto.

DATI:
- Persona: [persona], [età]
- Prodotto: generico senza marca, tenuto vicino allo specchio
- Scena: bagno pulito, specchio principale, riflesso realistico
- Azione: mostrando il prodotto o applicandolo

ILLUMINAZIONE:
- Luce bianca morbida, naturale
- Pelle realistica, ombre minime

FOTOCAMERA:
- Simulare smartphone, nitidezza naturale
- Fuoco bilanciato su viso e prodotto

COMPOSIZIONE:
- Mirror shot credibile, senza riflessi impossibili

RESTRIZIONI:
- Evitare doppi riflessi impossibili o mani duplicate
- Niente loghi/testo leggibile`,
    thumbnail: "/images/foto-pro/ugc9.webp",
  },
  {
    id: "img-ugc-mano-010",
    title: "Prima e dopo (2 pannelli, UGC credibile, senza testo)",
    area: "Fotografia Pro",
    category: "Unboxing / prova (UGC)",
    summary:
      "Composizione tipo prima/dopo in due pannelli, credibile per UGC (senza testo nell’immagine).",
    prompt: `Genera un’immagine REALISTICA tipo prima vs dopo in 2 pannelli (affiancati), stile UGC.

DATI:
- Persona: [persona], [età]
- PANNELLO SINISTRO (PRIMA): espressione neutra, pelle/scena “normale”
- PANNELLO DESTRO (DOPO): espressione più felice, miglioramento sottile e realistico (non esagerato)
- Prodotto: generico senza marca, visibile nel pannello destro in mano

ILLUMINAZIONE:
- Coerente in entrambi i pannelli (stessa luce)
- Pelle realistica, senza filtri forti

FOTOCAMERA:
- Stile smartphone, nitidezza naturale
- Sfondo simile e sfocato

COMPOSIZIONE:
- Due pannelli puliti, senza testo né etichette nell’immagine

RESTRIZIONI:
- Niente testo/watermark
- Evitare cambiamenti irreali o esagerati`,
    thumbnail: "/images/foto-pro/ugc10.webp",
  },

  // =========================
  // CATEGORY: Sfondo pulito (ads UGC)
  // =========================
  {
    id: "img-ugc-mano-011",
    title: "Prodotto in mano con sfondo uniforme (UGC per annunci, pulito)",
    area: "Fotografia Pro",
    category: "Sfondo pulito (ads UGC)",
    summary:
      "Foto UGC pulita per ads: persona + prodotto con sfondo uniforme e luce morbida.",
    prompt: `Genera una foto REALISTICA in stile UGC per annuncio, con sfondo uniforme.

DATI:
- Persona: [persona], [età], sorriso leggero
- Prodotto: [descrivi], generico senza marca
- Sfondo: uniforme (bianco/crema/grigio chiaro), pulito
- Posa: prodotto in avanti, viso visibile

ILLUMINAZIONE:
- Luce morbida uniforme (softbox o finestra)
- Pelle naturale, senza ritocco eccessivo

FOTOCAMERA:
- 50mm, f/2.8, ISO 100
- Fuoco nitido su occhi e prodotto

COMPOSIZIONE:
- Piano medio-corto, spazio negativo per testo (ma NON includere testo)

RESTRIZIONI:
- Niente testo/loghi
- Mano realistica senza deformazioni`,
    thumbnail: "/images/foto-pro/ugc11.webp",
  },
  {
    id: "img-ugc-mano-012",
    title: "Prodotto in mano stile 'review' (gesto indicando, mani corrette)",
    area: "Fotografia Pro",
    category: "Sfondo pulito (ads UGC)",
    summary:
      "Persona che mostra il prodotto e lo indica con l’altra mano (ideale per ads), anatomia perfetta.",
    prompt: `Genera una foto REALISTICA UGC in stile review, con sfondo pulito.

DATI:
- Persona: [persona], [età], espressione entusiasta ma realistica
- Prodotto: generico senza marca, tenuto in una mano
- Gesto: con l’altra mano, indicare il prodotto (dito indice) in modo naturale
- Sfondo: uniforme (grigio chiaro o crema)

ILLUMINAZIONE:
- Morbida e uniforme, ombre minime

FOTOCAMERA:
- 50mm, f/3.2, ISO 100
- Fuoco su viso e prodotto

COMPOSIZIONE:
- Piano medio-corto, prodotto ben visibile

RESTRIZIONI CRITICHE:
- Mani corrette (5 dita), dito che indica naturale
- Niente testo/loghi/watermark`,
    thumbnail: "/images/foto-pro/ugc12.webp",
  },
  {
    id: "img-ugc-mano-013",
    title: "Prodotto in mano con espressione sorpresa (hook visivo UGC)",
    area: "Fotografia Pro",
    category: "Sfondo pulito (ads UGC)",
    summary:
      "UGC per annunci con espressione di sorpresa (hook visivo) e prodotto visibile in mano.",
    prompt: `Genera una foto REALISTICA UGC per annunci con espressione di sorpresa.

DATI:
- Persona: [persona], [età], espressione sorpresa (senza caricatura)
- Prodotto: [descrivi], generico senza marca
- Sfondo: uniforme (bianco sporco o grigio chiaro)
- Posa: prodotto vicino al viso, mano naturale

ILLUMINAZIONE:
- Luce morbida frontale, pelle realistica
- Contrasto moderato, colori naturali

FOTOCAMERA:
- 50mm, f/2.8, ISO 100
- Fuoco su occhi e prodotto

COMPOSIZIONE:
- Piano medio-corto, prodotto protagonista

RESTRIZIONI:
- Niente testo/loghi
- Evitare espressione esagerata tipo cartoon`,
    thumbnail: "/images/foto-pro/ugc13.webp",
  },
  {
    id: "img-ugc-mano-014",
    title: "Prodotto in mano con sfondo pastello (branding cute, UGC realistico)",
    area: "Fotografia Pro",
    category: "Sfondo pulito (ads UGC)",
    summary:
      "UGC con sfondo pastello per estetica friendly e branding, mantenendo il realismo.",
    prompt: `Genera una foto REALISTICA UGC con sfondo pastello (branding).

DATI:
- Persona: [persona], [età], sorriso naturale
- Prodotto: generico senza marca
- Sfondo: pastello uniforme (menta / azzurro cielo / lilla morbido)
- Outfit: colori neutri, senza pattern forti

ILLUMINAZIONE:
- Luce morbida uniforme, ombre soffici

FOTOCAMERA:
- 50mm, f/3.2, ISO 100
- Fuoco su viso e prodotto

COMPOSIZIONE:
- Piano medio-corto, spazio negativo laterale

RESTRIZIONI:
- Niente testo/loghi
- Mantenere il colore pastello pulito e uniforme`,
    thumbnail: "/images/foto-pro/ugc14.webp",
  },
  {
    id: "img-ugc-mano-015",
    title: "Prodotto in mano con angolazione 3/4 (look premium, sfondo neutro)",
    area: "Fotografia Pro",
    category: "Sfondo pulito (ads UGC)",
    summary:
      "Foto UGC più premium: soggetto a 3/4, prodotto visibile, estetica pulita e professionale.",
    prompt: `Genera una foto REALISTICA UGC premium con soggetto in angolo 3/4.

DATI:
- Persona: [persona], [età], espressione affidabile
- Prodotto: generico senza marca, tenuto all’altezza del petto
- Sfondo: neutro uniforme (grigio caldo o beige)
- Outfit: smart casual minimal

ILLUMINAZIONE:
- Softbox laterale morbido + riempimento leggero
- Pelle realistica, dettaglio naturale

FOTOCAMERA:
- 85mm, f/2.8, ISO 100
- Fuoco sugli occhi, prodotto chiaro

COMPOSIZIONE:
- Piano medio-corto, posa elegante ma naturale

RESTRIZIONI:
- Niente testo/loghi
- Evitare mani deformi`,
    thumbnail: "/images/foto-pro/ugc15.webp",
  },

  // =========================
  // CATEGORY: Prodotto in mano (solo mani / close-up)
  // =========================
  {
    id: "img-ugc-mano-016",
    title: "Close-up solo mani che tengono il prodotto (sfondo morbido, realistico)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (solo mani / close-up)",
    summary:
      "Close-up di mani che tengono il prodotto, ideale per ads e cataloghi senza mostrare il volto.",
    prompt: `Genera una foto REALISTICA close-up di mani che tengono un prodotto (senza volto).

DATI:
- Mani: tono pelle [descrivere], unghie pulite, anatomia perfetta
- Prodotto: [descrivi], generico senza marca né testo leggibile
- Sfondo: morbido sfocato (crema/grigio), minimal

ILLUMINAZIONE:
- Luce laterale morbida per far emergere la texture
- Riflessi controllati sul prodotto

FOTOCAMERA:
- Macro o 85mm, f/3.5, ISO 200
- Fuoco su mani e prodotto

COMPOSIZIONE:
- Prodotto centrato, mani simmetriche o naturali
- Estetica pulita tipo annuncio

RESTRIZIONI CRITICHE:
- 5 dita per mano, proporzioni reali
- Niente testo/loghi/watermark`,
    thumbnail: "/images/foto-pro/ugc16.webp",
  },
  {
    id: "img-ugc-mano-017",
    title: "Close-up prodotto in mano con sfondo cucina (reale, quotidiano)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (solo mani / close-up)",
    summary:
      "Prodotto in mano con sfondo quotidiano (cucina) sfocato, look autentico.",
    prompt: `Genera una foto REALISTICA close-up di prodotto in mano con sfondo quotidiano.

DATI:
- Mano: anatomia perfetta, unghie naturali
- Prodotto: [descrivi], generico senza marca
- Sfondo: cucina sfocata (legno/piastrelle morbide), ambiente reale

ILLUMINAZIONE:
- Luce naturale da finestra, morbida
- Colori reali, contrasto moderato

FOTOCAMERA:
- 50mm, f/2.2, ISO 250
- Fuoco sul prodotto, bokeh sullo sfondo

COMPOSIZIONE:
- Prodotto leggermente di lato, mano completamente visibile

RESTRIZIONI:
- Niente testo/loghi
- Evitare dita extra o prodotto deformato`,
    thumbnail: "/images/foto-pro/ugc17.webp",
  },
  {
    id: "img-ugc-mano-018",
    title: "Close-up prodotto in mano con luce drammatica morbida (UGC premium)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (solo mani / close-up)",
    summary:
      "Versione UGC premium: close-up con luce più drammatica ma morbida, look da campagna.",
    prompt: `Genera una foto REALISTICA close-up premium di prodotto in mano.

DATI:
- Mano: pelle realistica, unghie pulite, senza deformazioni
- Prodotto: [descrivi], generico senza marchi
- Sfondo: scuro morbido o neutro (grigio carbone), minimal

ILLUMINAZIONE:
- Key light laterale morbida + riempimento minimo
- Ombra con dettaglio, riflessi controllati

FOTOCAMERA:
- 85mm, f/2.8, ISO 200
- Fuoco nitido su prodotto e texture della pelle

COMPOSIZIONE:
- Inquadratura ravvicinata, prodotto protagonista

RESTRIZIONI:
- Niente testo/loghi/watermark
- 5 dita, anatomia perfetta`,
    thumbnail: "/images/foto-pro/ugc18.webp",
  },
  {
    id: "img-ugc-mano-019",
    title: "Prodotto in mano con gesto di 'approvazione' (pollice su, realistico)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (solo mani / close-up)",
    summary:
      "Mano che tiene il prodotto + pollice su (o gesto OK) per messaggio visivo di approvazione.",
    prompt: `Genera una foto REALISTICA di prodotto in mano con gesto di approvazione.

DATI:
- Mano 1: tiene un prodotto generico senza marca
- Mano 2 (opzionale) o stessa mano: gesto pollice su o gesto OK NATURALE
- Sfondo: interno sfocato (casa) o sfondo uniforme neutro

ILLUMINAZIONE:
- Luce naturale morbida, ombre soffici

FOTOCAMERA:
- 50mm, f/2.8, ISO 200
- Fuoco su mani e prodotto

COMPOSIZIONE:
- Prodotto chiaramente visibile, gesto di approvazione accanto

RESTRIZIONI CRITICHE:
- Anatomia perfetta (dita corrette, articolazioni reali)
- Niente testo/loghi/watermark`,
    thumbnail: "/images/foto-pro/ugc19.webp",
  },
  {
    id: "img-ugc-mano-020",
    title: "Prodotto in mano con sfondo scrivania (setup creator, realistico)",
    area: "Fotografia Pro",
    category: "Prodotto in mano (solo mani / close-up)",
    summary:
      "Prodotto in mano con setup da scrivania (laptop/tastiera sfocati), stile creator reale.",
    prompt: `Genera una foto REALISTICA di prodotto in mano con sfondo scrivania (setup creator).

DATI:
- Mano: tiene un prodotto generico senza marca
- Sfondo: scrivania con laptop/tastiera/agenda SFUOCATI (senza loghi, senza testo leggibile)
- Stile: produttività/creator, autentico

ILLUMINAZIONE:
- Luce morbida da finestra o lampada leggermente calda
- Colori naturali, ombre morbide

FOTOCAMERA:
- 50mm, f/2.2, ISO 320
- Fuoco sul prodotto, bokeh sullo sfondo

COMPOSIZIONE:
- Prodotto centrato, scrivania come contesto

RESTRIZIONI:
- Niente testo/loghi
- Mano realistica (5 dita), senza deformazioni`,
    thumbnail: "/images/foto-pro/ugc20.webp",
  },
];
