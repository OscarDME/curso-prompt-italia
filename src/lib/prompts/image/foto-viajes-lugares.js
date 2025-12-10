// src/lib/prompts/image/foto-viajes-lugares.js

export const imagePromptsFotoViajesLugares = [
  // =========================
  // CATEGORY: Città / urbano
  // =========================
  {
    id: "img-viaje-001",
    title: "Città al tramonto (strada iconica, luce dorata, look cinematografico)",
    area: "Fotografia Pro",
    category: "Città / urbano",
    summary:
      "Foto di viaggio urbana realistica in golden hour con profondità, persone discrete ed estetica cinematografica.",
    prompt: `Genera una fotografia REALISTICA di viaggio in città al tramonto.

DATI:
- Luogo: strada urbana iconica generica (senza marchi né insegne leggibili)
- Elementi: architettura interessante, lampioni, traffico discreto
- Persone: alcune persone sullo sfondo (sfocate), naturali
- Stile: cinematic travel, colori naturali (non esagerare la saturazione)

ILLUMINAZIONE:
- Golden hour (luce dorata laterale), ombre morbide
- Riflessi realistici su finestre e pavimentazione

FOTOCAMERA:
- 35mm, f/2.2, ISO 200
- Fuoco sul punto di interesse, sfondo con bokeh morbido

COMPOSIZIONE:
- Linee guida (la strada) verso il fondo, senso di profondità
- Leggero spazio negativo per uso grafico (ma NON includere testo)

RESTRIZIONI:
- Niente testo/watermark
- Evitare cartelli o marchi leggibili`,
    thumbnail: "/images/foto-pro/viaje1.webp",
  },
  {
    id: "img-viaje-002",
    title: "Strada notturna con neon discreto (pioggia leggera, riflessi, realistica)",
    area: "Fotografia Pro",
    category: "Città / urbano",
    summary:
      "Scena urbana notturna con suolo bagnato e bokeh di luci, neon discreto senza eccessi.",
    prompt: `Genera una foto REALISTICA di città notturna con estetica cinematografica.

DATI:
- Luogo: strada urbana generica, moderna
- Atmosfera: suolo leggermente bagnato (riflessi), pioggia molto lieve opzionale
- Luci: neon discreto magenta/ciano + lampioni caldi
- Persone: opzionale, poche e sfocate

ILLUMINAZIONE:
- Contrasto medio-alto, mantenere dettaglio nelle ombre
- Riflessi realistici sulla pavimentazione

FOTOCAMERA:
- 35mm, f/1.8, ISO 1600
- Bokeh di luci sullo sfondo, fuoco su un punto medio

COMPOSIZIONE:
- Prospettiva di strada con profondità, look da fotogramma di film

RESTRIZIONI:
- Niente testo/loghi leggibili
- Evitare eccesso di glow artificiale`,
    thumbnail: "/images/foto-pro/viaje2.webp",
  },
  {
    id: "img-viaje-003",
    title: "Caffè in strada europea (mattina, luce morbida, travel editoriale)",
    area: "Fotografia Pro",
    category: "Città / urbano",
    summary:
      "Vibe editoriale: terrazza di un caffè in una bella via, luce mattutina morbida e realismo.",
    prompt: `Genera una foto REALISTICA editoriale di viaggio in una strada con terrazza di caffè.

DATI:
- Scena: tavolini all’aperto, sedie, strada in pietra o pavimentazione elegante
- Elementi: piante, finestre, dettagli architettonici (senza insegne leggibili)
- Persone: 1–2 persone sfocate opzionali, atmosfera rilassata
- Stile: travel editoriale, pulito e luminoso

ILLUMINAZIONE:
- Luce morbida del mattino, ombre molto leggere
- Colori naturali, toni caldi neutri

FOTOCAMERA:
- 50mm, f/2.2, ISO 200
- Fuoco su tavolo/elemento principale, sfondo bokeh

COMPOSIZIONE:
- Regola dei terzi, sensazione accogliente

RESTRIZIONI:
- Niente testo/loghi leggibili
- Evitare volti strani sullo sfondo`,
    thumbnail: "/images/foto-pro/viaje3.webp",
  },
  {
    id: "img-viaje-004",
    title: "Vista da belvedere urbano (skyline, tramonto, foschia morbida)",
    area: "Fotografia Pro",
    category: "Città / urbano",
    summary:
      "Skyline realistico da un belvedere con leggera foschia e luce del tramonto, look premium.",
    prompt: `Genera una foto REALISTICA dello skyline urbano da un belvedere.

DATI:
- Luogo: vista panoramica della città (edifici generici, senza marchi)
- Atmosfera: foschia/haze morbida realistica (non esagerata)
- Elementi: ringhiera o dettaglio del belvedere discreto in primo piano

ILLUMINAZIONE:
- Tramonto, luce calda morbida con gradiente nel cielo
- Ombre morbide, dettaglio sugli edifici

FOTOCAMERA:
- 70mm, f/4, ISO 200
- Alta nitidezza, lieve compressione tele

COMPOSIZIONE:
- Orizzonte dritto, skyline nel terzo superiore
- Spazio negativo nel cielo (senza testo)

RESTRIZIONI:
- Niente testo/watermark
- Evitare edifici deformati`,
    thumbnail: "/images/foto-pro/viaje4.webp",
  },

  // =========================
  // CATEGORY: Natura / paesaggi
  // =========================
  {
    id: "img-viaje-005",
    title: "Montagne all’alba (nebbia leggera, epico ma realistico)",
    area: "Fotografia Pro",
    category: "Natura / paesaggi",
    summary:
      "Paesaggio montano all’alba con nebbia discreta e colori naturali, stile travel premium.",
    prompt: `Genera una foto REALISTICA di montagne all’alba.

DATI:
- Scena: catena montuosa con cime, valle e nebbia leggera a strati (discreta)
- Elementi: vegetazione naturale, nessun elemento fantastico
- Stile: travel premium, realistico, senza HDR esagerato

ILLUMINAZIONE:
- Alba: luce morbida dorata/rosata, ombre lunghe e delicate
- Gradiente naturale nel cielo

FOTOCAMERA:
- 24–35mm, f/5.6, ISO 100–200
- Nitidezza generale, grande profondità

COMPOSIZIONE:
- Strati di profondità (primo piano/medio/sfondo), sensazione epica

RESTRIZIONI:
- Niente testo/watermark
- Evitare montagne “dipinte” irreali`,
    thumbnail: "/images/foto-pro/viaje5.webp",
  },
  {
    id: "img-viaje-006",
    title: "Spiaggia tropicale (acqua turchese realistica, palme, luce brillante)",
    area: "Fotografia Pro",
    category: "Natura / paesaggi",
    summary:
      "Spiaggia luminosa con acqua turchese realistica, palme ed estetica estiva premium.",
    prompt: `Genera una foto REALISTICA di una spiaggia tropicale.

DATI:
- Scena: spiaggia con sabbia chiara, palme, mare turchese realistico
- Elementi: onde morbide, schiuma naturale, cielo sereno
- Persone: opzionale, molto piccole e sfocate in lontananza

ILLUMINAZIONE:
- Luce brillante di mezzogiorno o mattina, ombre morbide
- Colori naturali (non saturazione eccessiva)

FOTOCAMERA:
- 24–28mm, f/5, ISO 100
- Ampia nitidezza, orizzonte dritto

COMPOSIZIONE:
- Orizzonte nel terzo superiore, palma da un lato per incorniciare

RESTRIZIONI:
- Niente testo/watermark
- Evitare acqua “neon” irreale`,
    thumbnail: "/images/foto-pro/viaje6.webp",
  },
  {
    id: "img-viaje-007",
    title: "Bosco autunnale (sentiero, luce morbida, colori caldi naturali)",
    area: "Fotografia Pro",
    category: "Natura / paesaggi",
    summary:
      "Bosco autunnale con sentiero e toni caldi naturali, stile cartolina realistica.",
    prompt: `Genera una foto REALISTICA di un bosco in autunno con un sentiero.

DATI:
- Scena: sentiero tra alberi con foglie autunnali, suolo con foglie secche
- Elementi: nebbia leggera opzionale, raggi di luce molto sottili opzionali
- Stile: travel naturale, realistico, senza filtri forti

ILLUMINAZIONE:
- Luce morbida (tardo pomeriggio/cielo coperto), ombre delicate
- Colori caldi naturali (giallo/arancio/rosso) senza esagerare

FOTOCAMERA:
- 35mm, f/3.5, ISO 200
- Fuoco sul sentiero, sfondo con profondità

COMPOSIZIONE:
- Sentiero come linea guida verso il centro

RESTRIZIONI:
- Niente testo/watermark
- Evitare pattern ripetuti artificiali`,
    thumbnail: "/images/foto-pro/viaje7.webp",
  },
  {
    id: "img-viaje-008",
    title: "Cascata nella giungla (leggera lunga esposizione, realistica, verde profondo)",
    area: "Fotografia Pro",
    category: "Natura / paesaggi",
    summary:
      "Cascata realistica con acqua morbida tipo lunga esposizione e verde profondo naturale.",
    prompt: `Genera una foto REALISTICA di una cascata in ambiente naturale.

DATI:
- Scena: cascata media con rocce e vegetazione, acqua limpida realistica
- Stile: travel natura, pulito, senza fantasia
- Acqua: effetto morbido tipo lunga esposizione (leggero, non “cotone” esagerato)

ILLUMINAZIONE:
- Luce diffusa (foresta), ombre morbide, contrasto moderato
- Verde profondo realistico

FOTOCAMERA:
- 24–35mm, f/8, ISO 100 (simulare lunga esposizione)
- Nitidezza su rocce e vegetazione

COMPOSIZIONE:
- Cascata centrata, rocce in primo piano per profondità

RESTRIZIONI:
- Niente testo/watermark
- Evitare acqua irreale o vegetazione duplicata`,
    thumbnail: "/images/foto-pro/viaje8.webp",
  },
  {
    id: "img-viaje-009",
    title: "Deserto con dune (golden hour, ombre lunghe, minimal)",
    area: "Fotografia Pro",
    category: "Natura / paesaggi",
    summary:
      "Dune minimaliste in golden hour con ombre lunghe, estetica calma e premium.",
    prompt: `Genera una foto REALISTICA di deserto con dune.

DATI:
- Scena: dune ondulate minimaliste, senza elementi moderni
- Elementi: impronte sottili opzionali, orizzonte pulito
- Stile: minimal travel, premium, naturale

ILLUMINAZIONE:
- Golden hour, ombre lunghe e sottili, toni caldi morbidi
- Contrasto moderato per evidenziare la texture della sabbia

FOTOCAMERA:
- 50–70mm, f/5.6, ISO 100
- Leggera compressione per le forme delle dune

COMPOSIZIONE:
- Linee curve delle dune protagoniste, molto spazio negativo

RESTRIZIONI:
- Niente testo/watermark
- Evitare sabbia “plastica” o pattern ripetuti`,
    thumbnail: "/images/foto-pro/viaje9.webp",
  },

  // =========================
  // CATEGORY: Architettura / monumenti (generico, senza marchi)
  // =========================
  {
    id: "img-viaje-010",
    title: "Cattedrale/Tempio (interno, luce da vetrate, realistico)",
    area: "Fotografia Pro",
    category: "Architettura / monumenti",
    summary:
      "Interno solenne con luce che entra dalle vetrate e atmosfera realistica, senza elementi leggibili.",
    prompt: `Genera una foto REALISTICA dell’interno di una cattedrale/tempio (architettura).

DATI:
- Scena: interno con archi alti, vetrate, panche, dettagli ornamentali
- Persone: opzionale, poche e piccole, sfocate per dare scala
- Stile: travel editoriale, realistico

ILLUMINAZIONE:
- Luce che entra dalle vetrate (raggi morbidi), polvere nell’aria molto sottile opzionale
- Ombre morbide, mantenere dettaglio

FOTOCAMERA:
- 24mm, f/4.5, ISO 800
- Grandangolo moderato, linee verticali dritte (senza distorsione)

COMPOSIZIONE:
- Simmetria centrale, navata verso l’altare (senza simboli leggibili)

RESTRIZIONI:
- Niente testo/watermark
- Evitare deformazioni di colonne/archi`,
    thumbnail: "/images/foto-pro/viaje10.webp",
  },
  {
    id: "img-viaje-011",
    title: "Ponte iconico generico (alba, nebbia lieve, look cartolina)",
    area: "Fotografia Pro",
    category: "Architettura / monumenti",
    summary:
      "Grande ponte all’alba con leggera foschia e acqua, estetica cartolina realistica senza marchi.",
    prompt: `Genera una foto REALISTICA di un grande ponte iconico generico (non identificabile).

DATI:
- Scena: ponte su fiume o baia, nebbia morbida opzionale
- Elementi: acqua con riflessi, skyline lontano sfocato
- Stile: travel postcard premium

ILLUMINAZIONE:
- Alba, luce morbida, toni freddi-caldi equilibrati
- Riflessi realistici, contrasto moderato

FOTOCAMERA:
- 35–50mm, f/5.6, ISO 200
- Ampia nitidezza, linee dritte

COMPOSIZIONE:
- Ponte in diagonale o secondo regola dei terzi, orizzonte dritto

RESTRIZIONI:
- Niente testo/watermark
- Evitare segnali o loghi leggibili`,
    thumbnail: "/images/foto-pro/viaje11.webp",
  },
  {
    id: "img-viaje-012",
    title: "Quartiere colorato (facciate, via stretta, luce morbida, realistico)",
    area: "Fotografia Pro",
    category: "Architettura / monumenti",
    summary:
      "Strada con facciate colorate e vibe travel, colori naturali e senza cartelli leggibili.",
    prompt: `Genera una foto REALISTICA di un quartiere con facciate colorate.

DATI:
- Scena: strada stretta con facciate dipinte, balconi, piante
- Elementi: ciottoli, porte, finestre (senza insegne leggibili)
- Persone: opzionale, poche e sfocate

ILLUMINAZIONE:
- Luce morbida (tardo pomeriggio/cielo coperto), colori naturali
- Ombre leggere, look editoriale

FOTOCAMERA:
- 35mm, f/2.8, ISO 250
- Fuoco sulle facciate, profondità della strada

COMPOSIZIONE:
- Linee guida della via, sensazione di esplorazione

RESTRIZIONI:
- Niente testo/watermark
- Evitare pattern ripetuti artificiali`,
    thumbnail: "/images/foto-pro/viaje12.webp",
  },

  // =========================
  // CATEGORY: Interni / hotel / Airbnb
  // =========================
  {
    id: "img-viaje-013",
    title: "Camera d’hotel minimal (luce da finestra, letto impeccabile, realistica)",
    area: "Fotografia Pro",
    category: "Interni / hotel / Airbnb",
    summary:
      "Interno hotel/Airbnb minimal con luce naturale ed estetica pulita stile travel influencer.",
    prompt: `Genera una foto REALISTICA di un interno hotel/Airbnb minimal.

DATI:
- Scena: camera luminosa, letto impeccabile, comodini, lampade
- Decor: minimal caldo (legno, bianco, beige), senza marchi
- Finestra: luce naturale in ingresso, tende morbide

ILLUMINAZIONE:
- Luce da finestra morbida, ombre delicate
- Colori neutri naturali, senza HDR esagerato

FOTOCAMERA:
- 24mm, f/4, ISO 250
- Grandangolo moderato, linee dritte (senza distorsione)

COMPOSIZIONE:
- Simmetria parziale, sensazione di calma

RESTRIZIONI:
- Niente testo/watermark
- Evitare oggetti deformati o ripetuti`,
    thumbnail: "/images/foto-pro/viaje13.webp",
  },
  {
    id: "img-viaje-014",
    title: "Colazione a letto (travel cozy, luce morbida, editoriale realistica)",
    area: "Fotografia Pro",
    category: "Interni / hotel / Airbnb",
    summary:
      "Colazione a letto stile travel cozy per social, luce morbida e cibo realistico.",
    prompt: `Genera una foto REALISTICA editoriale di colazione a letto (travel cozy).

DATI:
- Scena: vassoio con colazione (caffè, frutta, pane), stoviglie senza marchi
- Letto: lenzuola bianche naturalmente stropicciate, estetica cozy
- Sfondo: camera elegante sfocata, luce da finestra

ILLUMINAZIONE:
- Luce naturale morbida, toni caldi neutri
- Texture reali su cibo e tessuti

FOTOCAMERA:
- 50mm, f/2.5, ISO 400
- Fuoco sul vassoio, sfondo bokeh

COMPOSIZIONE:
- Vassoio centrato, mani opzionali ma con anatomia corretta

RESTRIZIONI:
- Niente testo/watermark
- Evitare cibo “plastico”`,
    thumbnail: "/images/foto-pro/viaje14.webp",
  },
  {
    id: "img-viaje-015",
    title: "Vista dal balcone (tazza in primo piano, città/mare sfocato)",
    area: "Fotografia Pro",
    category: "Interni / hotel / Airbnb",
    summary:
      "POV travel dal balcone con tazza in primo piano e vista sfocata sullo sfondo.",
    prompt: `Genera una foto REALISTICA tipo POV da un balcone d’hotel.

DATI:
- Primo piano: mano che tiene una tazza (senza logo), fuoco nitido
- Sfondo: vista su città o mare, sfocata con bokeh morbido
- Elementi: ringhiera del balcone, piante opzionali, estetica travel

ILLUMINAZIONE:
- Luce del mattino o golden hour morbida
- Colori naturali, sensazione rilassata

FOTOCAMERA:
- 50mm, f/2.0, ISO 200
- Fuoco su tazza e mano, bokeh forte dietro

COMPOSIZIONE:
- Tazza nel terzo, vista come contesto epico

RESTRIZIONI CRITICHE:
- Mano anatomicamente corretta
- Niente testo/watermark`,
    thumbnail: "/images/foto-pro/viaje15.webp",
  },

  // =========================
  // CATEGORY: Strada / lifestyle travel
  // =========================
  {
    id: "img-viaje-016",
    title: "Viaggiatore con valigia in strada (look editoriale, profondità, realistico)",
    area: "Fotografia Pro",
    category: "Strada / lifestyle travel",
    summary:
      "Lifestyle travel: persona con valigia che cammina in città, look editoriale realistico.",
    prompt: `Genera una foto REALISTICA lifestyle di viaggio con una persona e una valigia.

DATI:
- Persona: [persona], [età], outfit travel casual premium (senza loghi)
- Accessori: valigia o zaino generico (senza marchi)
- Scena: bella strada urbana, sfondo sfocato
- Azione: camminando o guardando una mappa/telefono (senza testo leggibile)

ILLUMINAZIONE:
- Luce morbida (mattina o pomeriggio), ombre leggere
- Colori naturali, estetica editoriale

FOTOCAMERA:
- 35mm, f/2.2, ISO 250
- Fuoco sulla persona, sfondo con bokeh moderato

COMPOSIZIONE:
- Spazio nella direzione di camminata, linee guida

RESTRIZIONI:
- Niente testo/watermark
- Evitare loghi su valigie/abbigliamento`,
    thumbnail: "/images/foto-pro/viaje16.webp",
  },
  {
    id: "img-viaje-017",
    title: "POV passaporto e boarding generici (niente testo leggibile, travel aesthetic)",
    area: "Fotografia Pro",
    category: "Strada / lifestyle travel",
    summary:
      "Travel aesthetic: passaporto e boarding generici, senza testo leggibile, stile editoriale.",
    prompt: `Genera una foto REALISTICA stile travel aesthetic tipo POV.

DATI:
- Primo piano: mano che tiene un passaporto generico + boarding generico (senza testo leggibile)
- Sfondo: aeroporto sfocato o vetrata con aerei (senza marchi)
- Props: caffè o valigia sfocati opzionali

ILLUMINAZIONE:
- Luce bianca morbida tipo aeroporto
- Colori reali, look pulito

FOTOCAMERA:
- 50mm, f/2.0, ISO 500
- Fuoco su mano e documenti, sfondo bokeh

COMPOSIZIONE:
- Documenti centrati, estetica social media

RESTRIZIONI CRITICHE:
- Mano anatomicamente corretta
- Niente testo leggibile, niente loghi/watermark`,
    thumbnail: "/images/foto-pro/viaje17.webp",
  },
  {
    id: "img-viaje-018",
    title: "Sentiero e zaino (schiena del viaggiatore, natura, realistico)",
    area: "Fotografia Pro",
    category: "Strada / lifestyle travel",
    summary:
      "Viaggiatore visto di spalle su un sentiero naturale con zaino, vibe avventura realistica.",
    prompt: `Genera una foto REALISTICA di viaggio avventura su un sentiero.

DATI:
- Persona: [persona], [età], di spalle, zaino generico senza logo
- Scena: sentiero nella natura (bosco/montagna), profondità
- Azione: camminando, postura credibile

ILLUMINAZIONE:
- Luce morbida del mattino o pomeriggio, ombre delicate
- Colori naturali, atmosfera avventura

FOTOCAMERA:
- 35mm, f/2.8, ISO 400
- Fuoco sulla persona, sfondo con dettaglio moderato

COMPOSIZIONE:
- Persona nel terzo inferiore, sentiero come linea guida

RESTRIZIONI:
- Niente testo/watermark
- Evitare zaini con marchio leggibile`,
    thumbnail: "/images/foto-pro/viaje18.webp",
  },
  {
    id: "img-viaje-019",
    title: "Belvedere con persona (silhouette morbida, paesaggio epico, realistico)",
    area: "Fotografia Pro",
    category: "Strada / lifestyle travel",
    summary:
      "Persona al belvedere che contempla il paesaggio, silhouette morbida ed estetica epica ma realistica.",
    prompt: `Genera una foto REALISTICA di un/una viaggiatore/trice a un belvedere con paesaggio.

DATI:
- Persona: [persona], [età], di spalle o di profilo, postura contemplativa
- Scena: belvedere con panorama ampio (montagne/mare/valle)
- Stile: epic travel, realistico, senza fantasia

ILLUMINAZIONE:
- Alba o tramonto, controluce morbido (silhouette con dettaglio)
- Foschia leggera opzionale

FOTOCAMERA:
- 24–35mm, f/5.0, ISO 200
- Grande profondità, nitidezza generale

COMPOSIZIONE:
- Persona piccola per scala, paesaggio protagonista

RESTRIZIONI:
- Niente testo/watermark
- Evitare cielo iper saturo`,
    thumbnail: "/images/foto-pro/viaje19.webp",
  },
  {
    id: "img-viaje-020",
    title: "Mercato locale (colori naturali, gente sfocata, travel documentario)",
    area: "Fotografia Pro",
    category: "Strada / lifestyle travel",
    summary:
      "Travel documentario: mercato locale con texture, colori reali e persone sfocate.",
    prompt: `Genera una foto REALISTICA stile travel documentario in un mercato locale.

DATI:
- Scena: bancarelle di frutta/spezie/pane, colori vivaci ma naturali
- Persone: diverse persone, sfocate o di spalle (senza volti strani)
- Dettagli: texture reali, luce ambiente del mercato

ILLUMINAZIONE:
- Luce naturale filtrata o luce interna morbida
- Contrasto medio, mantenere dettaglio

FOTOCAMERA:
- 35mm, f/2.2, ISO 800
- Fuoco su una bancarella principale, sfondo con bokeh moderato

COMPOSIZIONE:
- Strati di profondità, sensazione di “essere lì”

RESTRIZIONI:
- Niente testo/watermark
- Evitare insegne o marchi leggibili`,
    thumbnail: "/images/foto-pro/viaje20.webp",
  },
];
