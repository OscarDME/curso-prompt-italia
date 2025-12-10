// src/lib/prompts/image/foto-gastronomia.js

export const imagePromptsFotoGastronomia = [
  // =========================
  // CATEGORY: Piatti (ristorante / editoriale)
  // =========================
  {
    id: "img-food-001",
    title: "Piatto gourmet al ristorante (luce calda, profondità ridotta, realistico)",
    area: "Fotografia Pro",
    category: "Piatti (ristorante / editoriale)",
    summary:
      "Foto editoriale da ristorante: piatto gourmet con luce calda e sfondo bokeh premium.",
    prompt: `Genera una fotografia REALISTICA di gastronomia in stile ristorante (editoriale).

DATI:
- Piatto: [descrivi piatto gourmet] (presentazione curata, porzioni realistiche)
- Stoviglie: piatto in ceramica premium (senza loghi)
- Sfondo: ristorante elegante sfocato (bokeh di luci calde)

ILLUMINAZIONE:
- Luce calda morbida laterale (tipo lampada/atmosfera da ristorante)
- Luci controllate su salse/oli, texture realistica

FOTOCAMERA:
- 50mm o 85mm, f/2.0, ISO 400
- Fuoco sul punto principale del piatto (proteina o garnish)

COMPOSIZIONE:
- Angolo 3/4 (45°), piatto centrato
- Estetica da rivista, colori naturali

RESTRIZIONI:
- Niente testo/watermark
- Evitare cibo “di plastica” o irreale`,
    thumbnail: "/images/foto-pro/food1.webp",
  },
  {
    id: "img-food-002",
    title: "Piatto minimalista fine dining (sfondo scuro, low-key elegante)",
    area: "Fotografia Pro",
    category: "Piatti (ristorante / editoriale)",
    summary:
      "Fine dining low-key: sfondo scuro, piatto minimal e luci controllate in stile campagna.",
    prompt: `Genera una foto REALISTICA fine dining low-key (elegante).

DATI:
- Piatto: minimalista (pochi elementi), impiattamento artistico
- Stoviglie: nere o grigio antracite (senza loghi)
- Sfondo: scuro e sfocato, atmosfera sofisticata

ILLUMINAZIONE:
- Key light laterale morbida, ombre con dettaglio
- Riflessi controllati, contrasto medio-alto

FOTOCAMERA:
- 85mm, f/2.2, ISO 500
- Fuoco nitido sull’elemento principale

COMPOSIZIONE:
- Angolo 45° o molto basso (hero), fuoco selettivo
- Estetica premium da campagna

RESTRIZIONI:
- Niente testo/loghi
- Evitare ombre “chiuse” senza dettaglio (voglio dettaglio)`,
    thumbnail: "/images/foto-pro/food2.webp",
  },
  {
    id: "img-food-003",
    title: "Pasta cremosa su tavolo in legno (luce naturale, stile casa premium)",
    area: "Fotografia Pro",
    category: "Piatti (ristorante / editoriale)",
    summary:
      "Foto realistica di pasta su tavolo in legno, luce naturale da finestra, vibe domestica premium.",
    prompt: `Genera una foto REALISTICA di un piatto di pasta cremosa su un tavolo.

DATI:
- Piatto: pasta cremosa con topping realistici (formaggio, erbe, pepe)
- Props: forchetta, tovagliolo in tessuto, bicchiere (senza marchi)
- Superficie: tavolo in legno caldo
- Sfondo: cucina o sala da pranzo sfocata

ILLUMINAZIONE:
- Luce naturale laterale da finestra
- Texture visibili (pasta, salsa), vapore leggero opzionale

FOTOCAMERA:
- 50mm, f/2.2, ISO 250
- Fuoco al centro del piatto

COMPOSIZIONE:
- Angolo 45°, composizione accogliente

RESTRIZIONI:
- Niente testo/watermark
- Evitare ingredienti irreali o deformati`,
    thumbnail: "/images/foto-pro/food3.webp",
  },
  {
    id: "img-food-004",
    title: "Hamburger succoso stile pubblicità (macro dettaglio, realistico)",
    area: "Fotografia Pro",
    category: "Piatti (ristorante / editoriale)",
    summary:
      "Hamburger stile campagna: macro su texture, ingredienti realistici e luce controllata.",
    prompt: `Genera una foto REALISTICA in stile pubblicità di un hamburger.

DATI:
- Cibo: hamburger grande ma realistico (pane, carne, formaggio, verdure)
- Dettagli: texture del pane e della carne, lucentezza sottile sulla salsa
- Sfondo: sfocato, scuro o neutro, stile campagna

ILLUMINAZIONE:
- Luce laterale morbida + riempimento minimo
- Alto dettaglio, senza look “finto”

FOTOCAMERA:
- 85mm, f/2.8, ISO 200
- Fuoco al centro (carne/formaggio), bokeh sullo sfondo

COMPOSIZIONE:
- Inquadratura frontale leggermente bassa (hero)
- Estetica pubblicitaria premium

RESTRIZIONI:
- Niente testo/loghi
- Evitare ingredienti sospesi o forme impossibili`,
    thumbnail: "/images/foto-pro/food4.webp",
  },
  {
    id: "img-food-005",
    title: "Dessert al cioccolato (bokeh caldo, stile caffetteria premium)",
    area: "Fotografia Pro",
    category: "Piatti (ristorante / editoriale)",
    summary:
      "Dessert al cioccolato con luce calda e sfondo da caffetteria sfocato, estetica premium.",
    prompt: `Genera una foto REALISTICA di un dessert al cioccolato in stile caffetteria premium.

DATI:
- Dessert: [brownie/torta/mousse] con dettagli (cacao, frutti rossi)
- Stoviglie: piattino in ceramica, senza loghi
- Sfondo: caffetteria calda sfocata con bokeh

ILLUMINAZIONE:
- Luce calda morbida (ambiente caffetteria) + riflessi controllati
- Texture reale del cioccolato, lucentezza sottile

FOTOCAMERA:
- 50mm, f/2, ISO 400
- Fuoco sul dessert, sfondo bokeh

COMPOSIZIONE:
- Angolo 45°, props sottili: tazza di caffè sfocata opzionale

RESTRIZIONI:
- Niente testo/watermark
- Evitare cioccolato “di plastica”`,
    thumbnail: "/images/foto-pro/food5.webp",
  },

  // =========================
  // CATEGORY: Dall’alto / flat lay
  // =========================
  {
    id: "img-food-006",
    title: "Flat lay colazione sana (dall’alto, luce naturale, minimal)",
    area: "Fotografia Pro",
    category: "Dall’alto / flat lay",
    summary:
      "Flat lay minimal: colazione sana con luce naturale e composizione pulita per i social.",
    prompt: `Genera una foto REALISTICA dall’alto (flat lay) di una colazione sana.

DATI:
- Elementi: bowl di frutta + yogurt, caffè/tè, pane tostato, frutta secca
- Superficie: tavolo chiaro o legno, estetica minimal
- Props: posate e tovagliolo in tessuto, senza marchi

ILLUMINAZIONE:
- Luce naturale morbida da un lato, ombre sottili

FOTOCAMERA:
- Dall’alto 90°, nitidezza uniforme
- Equivalente 35mm, f/4, ISO 200

COMPOSIZIONE:
- Ordine pulito, spazio negativo per uso grafico (ma NON inserire testo)

RESTRIZIONI:
- Niente testo/watermark
- Evitare oggetti duplicati o deformati`,
    thumbnail: "/images/foto-pro/food6.webp",
  },
  {
    id: "img-food-007",
    title: "Flat lay pizza artigianale (dall’alto, texture reale, invitante)",
    area: "Fotografia Pro",
    category: "Dall’alto / flat lay",
    summary:
      "Pizza artigianale dall’alto con texture reale di formaggio e impasto, look appetitoso per annunci.",
    prompt: `Genera una foto REALISTICA dall’alto di una pizza artigianale.

DATI:
- Pizza: impasto artigianale, formaggio fuso realistico, topping coerenti
- Props: tagliere in legno, rotella/tagliapizza, tovagliolo
- Sfondo: tavolo rustico pulito, senza marchi

ILLUMINAZIONE:
- Luce naturale morbida, evidenziare la texture del formaggio
- Ombre leggere

FOTOCAMERA:
- Dall’alto 90°, 35mm, f/4, ISO 200
- Nitidezza uniforme

COMPOSIZIONE:
- Pizza centrata con props intorno

RESTRIZIONI:
- Niente testo/loghi
- Evitare formaggio “di plastica” o topping sospesi`,
    thumbnail: "/images/foto-pro/food7.webp",
  },
  {
    id: "img-food-008",
    title: "Flat lay caffè e dolce (estetica cozy, toni caldi)",
    area: "Fotografia Pro",
    category: "Dall’alto / flat lay",
    summary:
      "Flat lay cozy di caffè e dolce con toni caldi e composizione instagrammabile.",
    prompt: `Genera una foto REALISTICA flat lay (dall’alto) di caffè + dolce.

DATI:
- Elementi: tazza di caffè (latte) + piccolo dessert + cucchiaino + tovagliolo
- Superficie: tavolo in legno caldo
- Stile: cozy, minimal, senza marchi né loghi

ILLUMINAZIONE:
- Luce calda morbida (pomeriggio), ombre delicate

FOTOCAMERA:
- Dall’alto 90°, f/3.5, ISO 250
- Nitidezza chiara, senza blur eccessivo

COMPOSIZIONE:
- Disporre gli elementi in diagonale, con spazio negativo

RESTRIZIONI:
- Niente testo/watermark
- Evitare schiuma del caffè irreale`,
    thumbnail: "/images/foto-pro/food8.webp",
  },
  {
    id: "img-food-009",
    title: "Flat lay ingredienti per cucinare (mise en place, pulito e realistico)",
    area: "Fotografia Pro",
    category: "Dall’alto / flat lay",
    summary:
      "Mise en place dall’alto: ingredienti ordinati per ricetta, stile pulito e didattico.",
    prompt: `Genera una foto REALISTICA dall’alto di mise en place (ingredienti pronti da cucinare).

DATI:
- Ingredienti: [verdure, spezie, olio, sale, pasta/riso], tutto realistico
- Contenitori: piccole ciotole in ceramica, tagliere
- Superficie: piano chiaro o cemento morbido, estetica moderna

ILLUMINAZIONE:
- Luce naturale morbida, ombre sottili

FOTOCAMERA:
- Dall’alto 90°, 35mm, f/4, ISO 200
- Nitidezza uniforme

COMPOSIZIONE:
- Ordine impeccabile, ogni ingrediente visibile, look didattico premium

RESTRIZIONI:
- Niente testo/loghi
- Evitare ingredienti deformati o ripetuti`,
    thumbnail: "/images/foto-pro/food9.webp",
  },
  {
    id: "img-food-010",
    title: "Flat lay sushi premium (minimal, piatti neri, stile editoriale)",
    area: "Fotografia Pro",
    category: "Dall’alto / flat lay",
    summary:
      "Sushi dall’alto premium con stoviglie nere, composizione minimal e look editoriale.",
    prompt: `Genera una foto REALISTICA dall’alto di sushi premium.

DATI:
- Sushi: nigiri e maki con texture realistica, pesce realistico
- Stoviglie: nere o ardesia, senza loghi
- Props: bacchette, salsa di soia in ciotolina, zenzero (senza eccessi)

ILLUMINAZIONE:
- Luce morbida con contrasto moderato per evidenziare la texture del pesce
- Riflessi controllati

FOTOCAMERA:
- Dall’alto 90°, 50mm, f/4, ISO 250
- Nitidezza uniforme

COMPOSIZIONE:
- Minimal, molto spazio negativo

RESTRIZIONI:
- Niente testo/watermark
- Evitare pesce “di plastica” o ripetizione di pezzi`,
    thumbnail: "/images/foto-pro/food10.webp",
  },

  // =========================
  // CATEGORY: Bevande
  // =========================
  {
    id: "img-food-011",
    title: "Latte art in caffetteria (macro morbido, bokeh caldo, realistico)",
    area: "Fotografia Pro",
    category: "Bevande",
    summary:
      "Latte art realistico con bokeh caldo da caffetteria, stile premium e naturale.",
    prompt: `Genera una foto REALISTICA di una bevanda da caffetteria (latte art).

DATI:
- Bevanda: latte in tazza di ceramica senza loghi, latte art chiaro e realistico
- Scena: tavolo da caffetteria, sfondo con bokeh caldo
- Props: cucchiaino, tovagliolo in tessuto, opzionale: croissant sfocato

ILLUMINAZIONE:
- Luce calda morbida, riflessi controllati sulla tazza
- Texture realistica della schiuma

FOTOCAMERA:
- 85mm, f/2, ISO 400
- Fuoco sul latte art, bokeh forte sullo sfondo

COMPOSIZIONE:
- Angolo 45°, tazza protagonista

RESTRIZIONI:
- Niente testo/watermark
- Evitare latte art “perfetto ma irreale”`,
    thumbnail: "/images/foto-pro/food11.webp",
  },
  {
    id: "img-food-012",
    title: "Smoothie salutare (colori naturali, sfondo chiaro, stile wellness)",
    area: "Fotografia Pro",
    category: "Bevande",
    summary:
      "Smoothie stile wellness con sfondo chiaro e luce naturale, look pulito per i social.",
    prompt: `Genera una foto REALISTICA di smoothie salutare in stile wellness.

DATI:
- Bevanda: smoothie in bicchiere trasparente senza marchi, colore naturale (frutta vera)
- Props: frutta intorno (banana, berries), cannuccia semplice
- Sfondo: chiaro (bianco/crema), minimal

ILLUMINAZIONE:
- Luce naturale morbida, ombre minime
- Colori reali, senza saturazione eccessiva

FOTOCAMERA:
- 50mm, f/2.8, ISO 200
- Fuoco sul bicchiere, sfondo leggermente sfocato

COMPOSIZIONE:
- Bicchiere centrato con props sottili

RESTRIZIONI:
- Niente testo/loghi
- Evitare liquidi con texture “gelatina” irreale`,
    thumbnail: "/images/foto-pro/food12.webp",
  },
  {
    id: "img-food-013",
    title: "Cocktail notturno (bar elegante, luci bokeh, realistico)",
    area: "Fotografia Pro",
    category: "Bevande",
    summary:
      "Cocktail in un bar elegante con bokeh notturno, estetica premium e riflessi controllati.",
    prompt: `Genera una foto REALISTICA di un cocktail in un bar elegante.

DATI:
- Bevanda: cocktail in coppa (senza marchi), garnish realistico (agrumi/erbe)
- Scena: bar di lusso, sfondo scuro con luci calde sfocate
- Superficie: bancone lucido con riflessi sottili

ILLUMINAZIONE:
- Luce calda laterale, contrasto medio-alto
- Riflessi realistici sul vetro (senza bruciature)

FOTOCAMERA:
- 85mm, f/1.8, ISO 1000
- Fuoco sul bicchiere, bokeh forte sullo sfondo

COMPOSIZIONE:
- Angolo 45°, coppa protagonista

RESTRIZIONI:
- Niente testo/watermark
- Evitare ghiaccio o garnish impossibili`,
    thumbnail: "/images/foto-pro/food13.webp",
  },
  {
    id: "img-food-014",
    title: "Tè con vapore leggero (cozy, luce morbida, stile casa)",
    area: "Fotografia Pro",
    category: "Bevande",
    summary:
      "Tazza di tè con vapore leggero, estetica cozy e realistica per contenuti calm.",
    prompt: `Genera una foto REALISTICA di una tazza di tè caldo con vapore leggero.

DATI:
- Bevanda: tè in tazza senza loghi
- Props: libro sfocato, coperta o tovagliolo, stile cozy
- Sfondo: interno domestico caldo, sfocato

ILLUMINAZIONE:
- Luce calda morbida (pomeriggio), ombre delicate
- Vapore MOLTO leggero e realistico

FOTOCAMERA:
- 50mm, f/2, ISO 400
- Fuoco sulla tazza, bokeh sullo sfondo

COMPOSIZIONE:
- Angolo 45°, atmosfera accogliente

RESTRIZIONI:
- Niente testo/loghi
- Evitare vapore esagerato o finto`,
    thumbnail: "/images/foto-pro/food14.webp",
  },
  {
    id: "img-food-015",
    title: "Acqua aromatizzata (look fresco, luce brillante, stile estivo)",
    area: "Fotografia Pro",
    category: "Bevande",
    summary:
      "Bevanda fresca estiva con frutta, luce brillante ed estetica pulita.",
    prompt: `Genera una foto REALISTICA di acqua aromatizzata in stile estivo.

DATI:
- Bevanda: caraffa o bicchiere con acqua + fette di agrumi + menta (realistico)
- Condensa: goccioline sottili sul vetro
- Sfondo: chiaro, minimal, vibe fresca

ILLUMINAZIONE:
- Luce naturale brillante, ombre morbide
- Colori freschi, contrasto moderato

FOTOCAMERA:
- 50mm, f/2.8, ISO 100–200
- Fuoco sul bicchiere, sfondo morbido

COMPOSIZIONE:
- Bicchiere centrato, props minimi

RESTRIZIONI:
- Niente testo/watermark
- Evitare ghiaccio irreale o frutta deformata`,
    thumbnail: "/images/foto-pro/food15.webp",
  },

  // =========================
  // CATEGORY: Cucina / processo (mani in scena)
  // =========================
  {
    id: "img-food-016",
    title: "Mani che preparano un’insalata (processo reale, luce naturale, senza deformazioni)",
    area: "Fotografia Pro",
    category: "Cucina / processo (mani in scena)",
    summary:
      "Foto di processo: mani che preparano un’insalata sul tagliere, look autentico e didattico.",
    prompt: `Genera una foto REALISTICA di processo in cucina con mani in scena.

DATI:
- Azione: mani che tagliano verdure per insalata su un tagliere
- Ingredienti: pomodori, cetriolo, foglie verdi, olio, sale (realistici)
- Utensili: coltello e ciotola, senza marchi
- Sfondo: cucina sfocata

ILLUMINAZIONE:
- Luce naturale da finestra, morbida
- Texture reali, colori naturali

FOTOCAMERA:
- 35mm, f/2.8, ISO 250
- Fuoco su mani e ingredienti

COMPOSIZIONE:
- Angolo 45° o semi top-down
- Estetica autentica, non “perfetta da studio”

RESTRIZIONI CRITICHE:
- Mani anatomicamente perfette (5 dita, nessuna deformazione)
- Niente testo/loghi/watermark`,
    thumbnail: "/images/foto-pro/food16.webp",
  },
  {
    id: "img-food-017",
    title: "Versando salsa sul piatto (azione congelata, dettaglio reale)",
    area: "Fotografia Pro",
    category: "Cucina / processo (mani in scena)",
    summary:
      "Azione culinaria: salsa che cade sul piatto, congelata, con texture realistica.",
    prompt: `Genera una foto REALISTICA di azione culinaria (pour shot).

DATI:
- Azione: mano che versa salsa su un piatto (caduta della salsa congelata)
- Piatto: pietanza [descrivi] pronta da servire
- Sfondo: cucina o tavolo sfocato, senza marchi

ILLUMINAZIONE:
- Luce laterale morbida per evidenziare la lucentezza della salsa
- Riflessi controllati, texture reale

FOTOCAMERA:
- 85mm, f/2.8, ISO 400
- Tempi rapidi (azione congelata), fuoco sulla zona della salsa e sul piatto

COMPOSIZIONE:
- Angolo 45°, piatto protagonista
- Estetica tipo pubblicità food

RESTRIZIONI:
- Mani perfette (senza dita extra)
- Niente testo/loghi`,
    thumbnail: "/images/foto-pro/food17.webp",
  },
  {
    id: "img-food-018",
    title: "Spolverando zucchero/cacao (macro dessert, particelle realistiche)",
    area: "Fotografia Pro",
    category: "Cucina / processo (mani in scena)",
    summary:
      "Macro mentre si spolvera cacao/zucchero sul dessert, dettaglio realistico e look premium.",
    prompt: `Genera una foto REALISTICA macro di processo mentre si spolvera.

DATI:
- Azione: mano che spolvera cacao o zucchero su un dessert
- Dessert: [torta/brownie/cappuccino], texture reale
- Sfondo: sfocato, toni caldi e premium

ILLUMINAZIONE:
- Luce laterale morbida, particelle visibili e realistiche
- Non esagerare con le particelle

FOTOCAMERA:
- Macro o 85mm, f/2.8, ISO 400
- Fuoco sulla caduta della polvere e sulla superficie del dessert

COMPOSIZIONE:
- Inquadratura ravvicinata, look pubblicitario

RESTRIZIONI:
- Mano anatomicamente corretta
- Niente testo/watermark`,
    thumbnail: "/images/foto-pro/food18.webp",
  },
  {
    id: "img-food-019",
    title: "Cucinando in padella (vapore leggero, processo realistico)",
    area: "Fotografia Pro",
    category: "Cucina / processo (mani in scena)",
    summary:
      "Foto di processo in padella: salto/rosolatura con vapore leggero, luce naturale e realismo.",
    prompt: `Genera una foto REALISTICA di processo mentre si cucina in padella.

DATI:
- Azione: salto in padella (verdure o proteina), spatola visibile
- Vapore: leggero, realistico
- Cucina: moderna, pulita, sfocata
- Ingredienti coerenti, senza deformazioni

ILLUMINAZIONE:
- Luce naturale morbida o luce calda da cucina
- Riflessi controllati sull’olio, texture reale

FOTOCAMERA:
- 35mm, f/2.8, ISO 500
- Fuoco su padella e cibo, sfondo bokeh

COMPOSIZIONE:
- Angolo 45° ravvicinato, dinamica da cucina reale

RESTRIZIONI:
- Niente loghi/testo
- Evitare fumo eccessivo o cibo irreale`,
    thumbnail: "/images/foto-pro/food19.webp",
  },
  {
    id: "img-food-020",
    title: "Servendo il piatto a tavola (mano che appoggia il piatto, stile casa premium)",
    area: "Fotografia Pro",
    category: "Cucina / processo (mani in scena)",
    summary:
      "Momento del servizio: mano che appoggia il piatto sul tavolo, vibe domestica premium e autentica.",
    prompt: `Genera una foto REALISTICA di un piatto servito a tavola.

DATI:
- Azione: mano che appoggia un piatto finito sul tavolo
- Piatto: [descrivi], presentazione realistica
- Tavolo: legno o tovaglia neutra, props minimi (bicchiere, posate)
- Sfondo: sala da pranzo/cucina sfocata

ILLUMINAZIONE:
- Luce naturale morbida, toni caldi
- Texture reale su cibo e stoviglie

FOTOCAMERA:
- 50mm, f/2.5, ISO 300
- Fuoco su piatto e mano, bokeh morbido sullo sfondo

COMPOSIZIONE:
- Angolo 45°, sensazione accogliente

RESTRIZIONI CRITICHE:
- Mano perfetta (5 dita, articolazioni realistiche)
- Niente testo/watermark`,
    thumbnail: "/images/foto-pro/food20.webp",
  },
];
