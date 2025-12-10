// src/lib/prompts/text/marketing-segmentacion.js

export const textPromptsMarketingSegmentacion = [
{
  id: "mseg-001",
  title: "Segmentazione Completa (PCI) - definisce segmenti per problema, non per demografia",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti attuabili basati su Jobs-To-Be-Done, dolore, intento e contesto di utilizzo.",
  prompt: `Contesto (riempito):
- Prodotto / servizio:
- Prezzo / biglietto:
- Mercato / paese:
- Canale principale (ads / organico / email / WhatsApp):
- Chi compra oggi (cosa sai):
- Principali casi di utilizzo:
- Competitori / alternative:
- Oggetti tipici:
- Tempo di decisione:
- No. Cosa significa 'successo' per il cliente:

Compito:
1) Definire 6-10 segmenti in base a:
- Problemi principali (Job-To-Be-Dit)
- Contesto (quando fa più male)
- Emergenza (alto / medio / basso)
- Capacità (moneta / tempo / attrezzature)
2) Per ogni segmento scrive:
- nome del segmento (chiaro e memorabile)
- "term of the moment" (ad esempio "When _ _ _ _ _ _ passs, I need _ _ _ _ _ _ _ _)
- trigger di acquisto
- 3 messaggi chiave
- offerta / CTA ideale (call, check out, demo, magnete di piombo)
- segni "no fit"
3) Prioritizza segmenti (top 3) utilizzando una matrice:
- TAM accessibile, facile da acquistare, margine / LTV, emergenza
4) Chiudere con un piano di prova di 2 settimane:
- come convalidare ogni segmento (ad, contenuto, sondaggio, chiamate).`,
  thumbnail: ""
},
{
  id: "mseg-002",
  title: "Segmentazione latente (freddo / caldo / caldo) - regole chiare e trigger",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Definisce segmenti per volontà e automatizza quali contenuti / offerta ogni riceve.",
  prompt: `Riempimento:
- Canali (email / Whatsapp / annunci / sito):
- Eventi tracciabili (prenotazione prezzi, click CTA, risposta, ecc):
- Offerta:
- Vendite (B2B / B2C) e ciclo:

Compito:
1) Definire 3 livelli:
- Freddo: definizione + criterio
- Tibio: definizione + criterio
- Caldo: definizione + criterio
2) Definire un punteggio semplice (0-100) con punti per evento.
3) Definire 8 trigger e quale azione licenziano:
- Sequenza A / B / C
- cambiamento del messaggio
- offerta (soft / hard)
4) Definire "caps" per evitare la saturazione.
5) Consegnare un tavolo con:
Livello - 124; Criteri - 124; Messaggio principale - 124; CTA - 124; Contenuto consigliato - 124; Frequenza`,
  thumbnail: ""
},
{
  id: "mseg-003",
  title: "Segmentazione per fase dell'imbuto - consapevolezza → considerazione → conversione",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti per livello di coscienza e adatta la narrazione per ciascuno.",
  prompt: `Riempimento:
- Prodotto:
- Problema che risolve:
- Meccanismo / soluzione:
- Obiezioni:
- Canali:

Compito:
1) Definire 4 livelli di coscienza:
- Non cosciente.
- Consapevole del problema
- Consapevole della soluzione
- Consapevole del prodotto
2) Per ogni livello:
- obiettivo di comunicazione
- 5 angoli di messaggio
- 3 tipi di contenuto ideale
- CTA appropriato
3) Fornisce esempi (copia) di:
- Due ganci.
- 1 email / messaggio
- 1 annuncio breve
per livello.`,
  thumbnail: ""
},
{
  id: "mseg-004",
  title: "Segmentazione di 'Job-To-Be-done' - mappa lavori, dolore, guadagno e offerte",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Si rompe il mercato in posti di lavoro e allinea messaggi + offerta per ogni lavoro.",
  prompt: `Riempimento:
- Prodotto:
- Principali usi:
- Risultati che cercano:
- Alternativa:

Compito:
1) Identificare 8 lavori specifici-To-Be-Done (JTBD).
2) Per ogni lavoro:
- situazione di detonazione
- risultato desiderato
- dolore principale
- attuale alternativa
- perché fallisce
- messaggio principale
- offerta ideale (magnete di carico / ingresso / primo)
3) Prioritizza 3 JTBD per il potenziale e la facilità di acquisizione.`,
  thumbnail: ""
},
{
  id: "mseg-005",
  title: "\"capacità 'segmentation (tempo / denaro / attrezzature) - adattare la promessa e il formato",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti in base alle risorse reali dei clienti e regola la promessa, il pacing e il supporto.",
  prompt: `Riempimento:
- Offerta:
- Formato (corso, servizio, SaaS):
- Supporto disponibile:
- Prezzo:

Compito:
1) Definire 5 livelli di capacità:
- Tempo (alto / basso)
- Denaro (alto / basso)
- Attrezzatura (singolo / piccolo / azienda)
2) Croce e creare 4-6 segmenti finali.
3) Per ogni segmento:
- che non devi promettere
- la promessa realistica (come suona)
- formato consigliato (DIY, DFY, DWY)
- CTA ideale
4) Finire con "come rilevare la capacità" (domanda di forma / DM).`,
  thumbnail: ""
},

{
  id: "mseg-006",
  title: "Segmentazione per settore (B2B) - messaggi verticali e verticali",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Costruisce 6 verticali con dolore, KPis ed esempi per adattare atterraggio / annunci.",
  prompt: `Riempimento:
- Servizio B2B:
- KPI per migliorare:
- Industrie di destinazione (se avete):
- Casi o esperienza precedente:

Compito:
1) Propon verticale rilevante 6.
2) Per ogni verticale:
- dolore # 1 e # 2
- KPI principale
- tipica obiezione
- esempio di caso d'uso
- copia di 1 titolo + 3 proiettili
- CTA raccomandata
3) Raccomanda 2 verticale per iniziare e perché.`,
  thumbnail: ""
},
{
  id: "mseg-007",
  title: "Segmentazione per ruolo (B2B) - decidere vs utente vs campione interno",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Adapts messaggi e beni secondo il ruolo: CFO / CEO / marketing manager / ops, ecc.",
  prompt: `Riempimento:
- Prodotto / servizio:
- Ruoli coinvolti:
- Processo di acquisto:
- Rischi ricevuti:

Compito:
1) Definire 3 ruoli tipici:
- Decisione economica
- utente principale
- Campione interno
2) Per ogni ruolo:
- cosa ti importa (priorità)
- obiezioni
- metriche di successo
- prova che ti serve
- messaggio principale e CTA
3) Creare 1 e-mail e 1 breve annuncio per ruolo.`,
  thumbnail: ""
},
{
  id: "mseg-008",
  title: "Segmentazione del comportamento (RFM) - Recency, Frequenza, Valore",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti RFM pronti per e-mail / WhatsApp: riattivazione, upsell, VIP e altro ancora.",
  prompt: `Riempimento:
- Tipo di attività (ecom / servizi):
- Acquisto / riacquisto finestra:
- Dati disponibili (date, # acquisti, spese):
- Prodotti / categorie:

Compito:
1) Definire le soglie RFM (alto / medio / basso) per il vostro caso.
2) Creare 8 segmenti:
- VIP (alto valore, alta frequenza)
- Nuovo (recente, bassa frequenza)
- A rischio (non recente)
- Morire
- Cacciatori di Tender, ecc.
3) Per ogni segmento:
- target (retain, upsell, winback)
- 3 messaggi / angoli
- offerta consigliata
- frequenza sicura
4) Creare un calendario di 4 settimane (che segmento ottiene cosa).`,
  thumbnail: ""
},
{
  id: "mseg-009",
  title: "Engagement Segmentation (email) - attivo / caldo / inattivo con piano di igiene",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Definire le regole per la segmentazione da impegno e migliorare la consegna senza perdere le vendite.",
  prompt: `Riempimento:
- ESP (Klaviyo / Mailchimp / ecc.):
- Frequenza di spedizione:
- Baseline di aperture / clic:
- Obiettivo (vendite / nutrimento):

Compito:
1) Definire segmenti:
- Super asset
- Attività
- Torte
- Inattivo 30 / 60 / 90
2) Definire regole esatte (ad esempio "ha aperto ≥ 2 dello scorso 10").
3) Per ogni segmento:
- tipo di contenuto
- frequenza
- CTA
4) Definire un piano di riattivazione (7 giorni) e un piano di pulizia (quando e come).`,
  thumbnail: ""
},
{
  id: "mseg-010",
  title: "Segmentazione per fonte di acquisizione - adattare la promessa secondo 'come sono arrivati '",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Convertire fonti (ads, organico, riferimento, webinar) in segmenti con diverse narrazioni.",
  prompt: `Riempimento:
- Fonti: (Meta ads, Google, TikTok, organico, affiliato, ecc.)
- magneti di piombo per fonte:
- Offerta:
- Obiezioni:

Compito:
1) Definire 6 segmenti per fonte.
2) Per ogni fonte:
- aspettativa con cui arrivano
- cosa imparare prima
- messaggio di benvenuto ideale
- CTA appropriato
3) Creare 1 messaggio a bordo per fonte (pronta copia).`,
  thumbnail: ""
},

{
  id: "mseg-011",
  title: "Segmentazione per 'problema specifico' - 12 micro segmenti con copia diversa",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Genera micro segmenti da problemi specifici e crea messaggi e risorse per ciascuno.",
  prompt: `Riempimento:
- Offerta:
- Problemi generali:
- Problemi sotto-noti (se avete):

Compito:
1) Genera 12 micro segmenti per sotto-problema (molto specifico).
2) Per ogni microsegmento:
- nome
- sintomo tipico
- probabile causa radice
- soluzione (idea)
- risorsa ponte (magnete di carico)
- CTA finale
3) Scrivere 2 ganci e 1 titolo da microsegment.`,
  thumbnail: ""
},
{
  id: "mseg-012",
  title: "Trigger Segmentation (momenti) - 'quando X passa, acquistare più velocemente '",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Trovare detonanti situazioni e creare messaggi specifici per trigger.",
  prompt: `Riempimento:
- Offerta:
- Momenti noti (ad esempio lancio, crisi, noleggio, andare al mercato):
- Canale:

Compito:
1) Elenco 10 trigger di acquisto (situazioni).
2) Per ogni trigger:
- emozione dominante
- urgenza
- promessa più rilevante
- tipica obiezione
- CTA ideale
3) Scrivere 1 annuncio corto e 1 DM per trigger.`,
  thumbnail: ""
},
{
  id: "mseg-013",
  title: "Segmentazione per livello di esperienza - principiante vs intermedio vs avanzato",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Adapts lingua, esempi e offerta secondo l'esperienza del cliente.",
  prompt: `Riempimento:
- Offerta:
- Oggetto:
- Errori comuni:
- Canale:

Compito:
1) Definire 3 livelli (beginner / intermedio / avanzato) con criteri chiari.
2) Per ogni livello:
- cosa ne pensi oggi (beliefs)
- cosa devono imparare
- cosa evitare (che li frustra)
- messaggio principale e CTA
3) Scrivere:
- 1 email
- 1 annuncio
- 1 video gancio
per ogni livello.`,
  thumbnail: ""
},
{
  id: "mseg-014",
  title: "Settimazione di bilancio - \"prezzo sensibile\" senza distruggere il margine",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmenta la sensibilità dei prezzi e definisce i passi e le offerte di copia appropriate.",
  prompt: `Riempimento:
- Prezzo attuale:
- Segreti biglietti alternativi:
- Premium alternative:
- Canale:

Compito:
1) Definire 3 segmenti:
- Sensibile al prezzo
- Valore / ROI
- Premium (status / security)
2) Per ogni segmento:
- lingua raccomandata
- prova che pesa di più
- formato di offerta (bundle, piano, garanzia, test)
- CTA
3) Scrive 2 versioni di pitch per segmento (breve e lunga).`,
  thumbnail: ""
},
{
  id: "mseg-015",
  title: "Segmentazione per obiezione dominante - 8 segmenti secondo il motivo per cui NON acquistano",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti per obiezione e assegna nutrimento / annunci specifici per ciascuno.",
  prompt: `Riempimento:
- Offerta:
- Elenco delle obiezioni effettive (minimo 8):
- Canali:

Compito:
1) Trasformare ogni obiezione in un segmento (ad esempio, "non ho tempo").
2) Per ogni segmento:
- quello che devi vedere / capire
- messaggio principale (add)
- risorsa ideale del ponte
- CTA finale
3) Scrivi 1 annuncio e 1 e-mail per l'obiezione.`,
  thumbnail: ""
},

{
  id: "mseg-016",
  title: "Segmentazione per categoria di prodotto (eCommerce) - collezioni e fasci per volontà",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti per volontà di acquisto (uso) e assegna collezioni / pacchetti.",
  prompt: `Riempimento:
- Catalogo (categorie):
- AOV:
- prodotti top:
- Stabilità:

Compito:
1) Definire 8 intenzioni di acquisto (ad esempio regalo, uso quotidiano, premio, urgente).
2) Per ogni intenzione:
- raccolta raccomandata (prodotti)
- pacchetto consigliato
- copia di 1 titolo + 5 proiettili
- CTA
3) Definire il flusso post-click: atterraggio / raccolta e upsell.`,
  thumbnail: ""
},
{
  id: "mseg-017",
  title: "Segmentazione per ciclo di vita - nuova → attivata → ricorrente → a rischio",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Definire le fasi del ciclo di vita e ciò che ciascuno dovrebbe ricevere per migliorare LTV.",
  prompt: `Riempimento:
- Tipica finestra di riacquisto:
- Prodotto:
- Canali post-acquisto:

Compito:
1) Definire 6 fasi del ciclo di vita con criteri numerici.
2) Per ogni fase:
- target (attivazione, mantenimento, upsell, winback)
- 3 messaggi chiave
- offerta consigliata
3) Creare una tabella di automazione per fase.`,
  thumbnail: ""
},
{
  id: "mseg-018",
  title: "Segmentazione per \"meccanismo di soluzione\" - persone che credono in approcci diversi",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmented da credenze: automazione vs creatività vs disciplina vs strumenti.",
  prompt: `Riempimento:
- Problema:
- La vostra soluzione / metodo:
- "Schools" del mercato (se presente):
- Canale:

Compito:
1) Definire 4-6 segmenti per fede / meccanismo.
2) Per ogni segmento:
- lingua e metafore
- quali prove li convince
- che un'obiezione li trattiene
- CTA ideale
3) Scrivere 3 ganci per segmento.`,
  thumbnail: ""
},
{
  id: "mseg-019",
  title: "Segmentazione da dati minimi - 5 forme magiche / domande DM",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Progetta 5 domande che permettono di segmentare quasi tutto senza attrito.",
  prompt: `Riempimento:
- Offerta:
- Canale da chiedere (forma / DM / WhatsApp):
- 3 possibili risultati del cliente:
- Restrizioni:

Compito:
1) Finale 5 domande (max) e serie di risposte (opzioni) a segmento:
- capacità
- urgenza
- dolore
- esperienza
- bilancio
2) mappare ogni risposta a un segmento (label).
3) Scrivere il messaggio / grazie schermo diverso per ogni segmento (5 variazioni).`,
  thumbnail: ""
},
{
  id: "mseg-020",
  title: "Segmentazione linguistica - rileva 'parole' che ratto il segmento",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Identificare i modelli di parola per segmento e regolare la copia per risuonare.",
  prompt: `Riempimento:
- Nicho:
- Offerta:
- 20 vere frasi dei clienti (se non avete, inventate esempi realistici):
- Canale:

Compito:
1) raggruppare le frasi in 4-6 cluster (segmenti).
2) Per ogni cluster:
- parole che si ripetono
- emozione dominante
- priorità
- copia raccomandata (headline + 3 proiettili + CTA)
3) Crea un glossario di "parole proibite" per segmento (che rifiutano).`,
  thumbnail: ""
},

{
  id: "mseg-021",
  title: "Segmentazione per 'livello di dolore' - lieve, moderata, critica ( messaggi diversi)",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Si differenzia il dolore e l'urgenza di non vendere o infra-vendure.",
  prompt: `Riempimento:
- Problema:
- Offerta:
- Segni di dolore:

Compito:
1) Definire 3 livelli di dolore con criteri osservabili.
2) Per ogni livello:
- messaggio (che dire)
- tono (per evitare)
- CTA (passo appropriato)
3) Scrivere 2 annunci brevi per livello.`,
  thumbnail: ""
},
{
  id: "mseg-022",
  title: "Segmentazione per 'momento commerciale' - prelancio, lancio, scaling, crisi",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmentati per fase di business e regola offerta, promessa e test.",
  prompt: `Riempimento:
- Nicho:
- Offerta:
- Stadi tipici dei vostri clienti:
- Canale:

Compito:
1) Definire 5 fasi del business del cliente.
2) Per ogni fase:
- obiettivo del cliente
- paura principale
- chiave metrica
- messaggio e CTA
3) crea una presa di mini-landing per fase (sezioni e proiettili).`,
  thumbnail: ""
},
{
  id: "mseg-023",
  title: "Segmentazione del canale preferito - 'solo WhatsApp', 'solo e-mail', 'solo chiamato '",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmenta per preferenza di comunicazione e adatta il nutrimento al canale.",
  prompt: `Riempimento:
- Offerta:
- Canali disponibili:
- Beni per canale:

Compito:
1) Definire 4 segmenti per preferenza canale.
2) Per ogni segmento:
- frequenza ideale
- Copia stile
- CTA appropriato
3) Creare 1 messaggio di bordo e 1 offerta per segmento.`,
  thumbnail: ""
},
{
  id: "mseg-024",
  title: "Segmentazione della sensibilità al rischio - 'Voglio la certezza' vs' Mi piace sperimentare '",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "È segmentato dalla tolleranza al rischio e adatta test, garanzie e struttura di fornitura.",
  prompt: `Riempimento:
- Offerta:
- Rischi ricevuti:
- Garanzie / prove:
- Canale:

Compito:
1) Definire 3 segmenti:
- basso rischio (necessità)
- rischio medio
- alto rischio (esperimentazione)
2) Per ogni segmento:
- prova che funziona più
- parole da usare / evitare
- CTA
3) Scrivere 2 versioni di pitch per segmento.`,
  thumbnail: ""
},
{
  id: "mseg-025",
  title: "Segmentazione da 'quello che hanno già provato' - fai da te, agenzia, corsi, strumenti",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "È segmentato da tentativi precedenti e crea messaggi che rispettano la tua storia senza giudicare.",
  prompt: `Riempimento:
- Offerta:
- Alternative che hanno già dimostrato:
- Perché ha fallito:
- Canale:

Compito:
1) Creare 5 segmenti per tentativo precedente.
2) Per ogni segmento:
- convalida (empatia)
- Dimmi (cosa manca)
- perché il tuo metodo si adatta
- CTA ideale
3) Scrivi 1 e-mail e 1 DM per segmento.`,
  thumbnail: ""
},

{
  id: "mseg-026",
  title: "Segmentazione \"risultato desiderato\" - velocità, qualità, stabilità, crescita",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmentati dall'obiettivo finale del cliente e assegna promessa, prova e offerta.",
  prompt: `Riempimento:
- Offerta:
- 4 risultati tipici desiderati:
- Canale:

Compito:
1) Definire 4-6 segmenti per risultato (ad esempio "Voglio risultati rapidi").
2) Per ogni segmento:
- promessa realistica
- rischi / limitazioni
- prova ideale
- CTA
3) Genera 3 ganci e 1 titolo per segmento.`,
  thumbnail: ""
},
{
  id: "mseg-027",
  title: "Segmentazione della maturità del sistema - senza sistema vs con sistema vs ottimizzazione",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmenta secondo il processo del cliente e il livello di sistema e adatta la soluzione.",
  prompt: `Riempimento:
- Nicho:
- Offerta:
- No. Ciò che la vostra soluzione richiede (dati, processi, ecc.):

Compito:
1) Definire 3 livelli di maturità:
- caotico (nessun sistema)
- stabile (qualche sistema)
- ottimizzazione (sistema solido)
2) Per ogni livello:
- quello che ti serve prima
- non devi venderli ancora
- benefici a cui interessano la maggior parte
- CTA appropriato
3) Creare un questionario di 8 elementi per classificare qualcuno.`,
  thumbnail: ""
},
{
  id: "mseg-028",
  title: "Segmentazione per geografia e cultura - adattare esempi, riferimenti e promesse",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmentati per paese / città / cultura e regola copia senza stereotipi economici.",
  prompt: `Riempimento:
- Paesi di destinazione / mercati:
- Offerta:
- Differenze culturali note:
- Canali:

Compito:
1) Definire 4 segmenti geografici ragionevoli (o culturali).
2) Per ogni segmento:
- riferimenti ed esempi riassuntivi
- tono (formale / informale)
- obiezioni tipiche
- CTA e offerta adattata
3) Scrivere 1 annuncio e 1 e-mail per segmento (lingua locale).`,
  thumbnail: ""
},
{
  id: "mseg-029",
  title: "Segmentazione per comportamento web - percorsi di pagina e contenuti consumati",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti in base alla navigazione: lettori di blog, visitatori dei prezzi, starter di checkout, ecc.",
  prompt: `Riempimento:
- Pagine chiave (home, prezzi, casi, checkout):
- Eventi tracciabili:
- Offerta:
- Canale di attivazione (email / annunci):

Compito:
1) Definire 8 segmenti basati su percorsi:
- prezzi visitati 2 + volte
- leggere 3 articoli dello stesso cluster
- ha iniziato il checkout ma non ha comprato
- casi riveduti, ecc.
2) Per ogni segmento:
- ipotesi di intenzioni
- messaggio principale
- risorsa ponte
- CTA
3) Progetta una sequenza di 4 messaggi per il segmento "pricing visitatori".`,
  thumbnail: ""
},
{
  id: "mseg-030",
  title: "Segmentation by input product - map 'entry' → 'core' → 'premium '",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmentati secondo quale prodotto hanno acquistato / scaricato e crea percorsi di valore (lato).",
  prompt: `Riempimento:
- Offerta di ingresso:
- Offerta principale:
- Offerta Premium:
- Tipica finestra di aggiornamento:
- Canale:

Compito:
1) Definire 5 segmenti per punto di entrata.
2) Per ogni segmento:
- che cosa dovrebbero raggiungere prima che si alzino a livello
- contenuti nutrienti (3 idee)
- il momento giusto di upsell
- messaggio da upsell (copia)
3) Creare una mappa di viaggio per livello.`,
  thumbnail: ""
},

{
  id: "mseg-031",
  title: "Segmentazione per annunci (Meta / TikTok) - struttura ad set per segmento e creativo",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Trasformare i segmenti in set di annunci e definire ciò che dovrebbe avere creativo e KPI.",
  prompt: `Riempimento:
- Offerta:
- segmenti candidati:
- Budget:
- Target KPI:
- Creativi disponibili:

Compito:
1) Struttura della campagna di scopo:
- prospezione (segmenti)
- remarketing (segmenti)
2) Per ogni segmento:
- angoli creativi (3)
- formati consigliati (UGC, demo, test)
- principale metrica e soglia
3) Definire ad impostare ipotesi e piano di prova 14 giorni.`,
  thumbnail: ""
},
{
  id: "mseg-032",
  title: "Segmentazione per contenuto organico - pilastri per segmento e serie ripetibili",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Definire serie di contenuti per segmento per catturare la domanda qualificata.",
  prompt: `Riempimento:
- Piattaforma:
- Offerta:
- Segmenti:
- Frequenza:

Compito:
1) Scegliere 3 segmenti priorità.
2) Per ogni segmento:
- 4 pilastri di contenuto
- 3 serie (ad esempio "errori", "casi", "come farlo")
- 10 titoli specifici
3) Definire CECs per segmento (DM parola chiave, link, commento).`,
  thumbnail: ""
},
{
  id: "mseg-033",
  title: "Segmentazione per livello di emergenza - 'Ho bisogno già' vs' un giorno '",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "L'urgenza separata cambia copia, offerta e follow-up. Crea regole e testi per ciascuno.",
  prompt: `Riempimento:
- Offerta:
- Segnali di emergenza:
- Canale:

Compito:
1) Definire 3 livelli di urgenza con criteri osservabili.
2) Per ogni livello:
- messaggio principale
- frequenza di follow-up
- CTA
3) Scrivere 3 messaggi di follow-up per emergenza.`,
  thumbnail: ""
},
{
  id: "mseg-034",
  title: "Segmentazione per 'livello di fiducia' - scettici vs credenti vs fan",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea segmenti per fiducia nella categoria e regola la prova: dati, casi, garanzia, demo.",
  prompt: `Riempimento:
- Offerta:
- Categoria (cosa vendono):
- Prove disponibili:
- Canale:

Compito:
1) Definire 3 segmenti: scettico, neutro, credente.
2) Per ciascuno:
- che prova pesa più
- quale lingua usare / evitare
- CTA
3) Scrivere un breve annuncio e una breve e-mail per segmento.`,
  thumbnail: ""
},
{
  id: "mseg-035",
  title: "Segmentazione da 'barri principali' - conoscenza, esecuzione, disciplina, strumenti",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Definire segmenti dalla barriera dominante e ri- inquadrare la vostra offerta per risolverlo.",
  prompt: `Riempimento:
- Offerta:
- Barriere tipiche:
- Canale:

Compito:
1) Definire 4 segmenti per barriera.
2) Per ogni segmento:
- diagnosi (come sembra)
- soluzione (come affrontarlo)
- messaggio principale
- CTA
3) Scrivere 5 ganci per segmento.`,
  thumbnail: ""
},

{
  id: "mseg-036",
  title: "Segmentazione avanzata (B2B) - account target (ABM lite) con ipotesi in considerazione",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Light ABM plan: definisce account, ipotesi di dolore, messaggi e sequenze personalizzate.",
  prompt: `Riempimento:
- Servizio B2B:
- Lista di 10-30 account target (nomi):
- ruolo obiettivo:
- KPI:
- Canali (email, LinkedIn):

Compito:
1) Per ogni account (o tipo di account), scrivere ipotesi:
- 2 probabilmente dolore
- 1 evento di attivazione (ritiro, finanziamento, espansione)
- 1 proposta di valore frase
2) Creare 3 sequenze:
- email fredda 4 passi
- LinkedIn DM 4 passi
- follow-up 2 step
3) Definire come misurare il successo (risposte, riunioni, pipeline).`,
  thumbnail: ""
},
{
  id: "mseg-037",
  title: "Tipo di segmentazione 'persone' - 5 acquirenti persone utili (senza riempimento) con copia",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea 5 persone con linguaggio reale, motivatori, obiezioni e messaggi.",
  prompt: `Riempimento:
- Offerta:
- Nicho:
- Tipi di clienti attuali (se presenti):

Compito:
1) Creare 5 persone acquirenti con:
- nome di avatar
- contesto e obiettivo
- dolore principale
- obiezioni
- che li convince
- frasi testuali (come parlano)
2) Per ogni persona:
- 1 titolo
- 3 proiettili
- 1 CTA
3) Finire con una mappa di "contenuto per persona" (5 idee ciascuno).`,
  thumbnail: ""
},
{
  id: "mseg-038",
  title: "Segmentazione da 'livello di supporto richiesto' - self-service vs con guida vs DFY",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmentati da bisogno di supporto e regola l'esperienza, l'imbarco e la promessa.",
  prompt: `Riempimento:
- Offerta:
- Capacità di supporto (ore / settimana):
- Tipi di supporto (chat, chiamate, comunità):
- Canale:

Compito:
1) Definire 3 segmenti come supporto richiesto.
2) Per ogni segmento:
- rischi se li vendi il piano sbagliato
- promessa realistica
- ideale a bordo
- CTA
3) Scrivere una copia di priming (3 piani) allineati a questi segmenti.`,
  thumbnail: ""
},
{
  id: "mseg-039",
  title: "Segmentazione per fase di adozione (innovatori → maggioranza anticipata) - lingua e test",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Adatti copia secondo l'adozione: gli innovatori vogliono novità; la maggioranza vuole certezza.",
  prompt: `Riempimento:
- Offerta:
- Categoria:
- Prove:
- Canale:

Compito:
1) Definire 4 segmenti di adozione.
2) Per ogni segmento:
- Cosa ti importa?
- che prova hanno bisogno
- copia (headline + proiettili + CTA)
3) Raccomanda quale segmento a concentrarsi su secondo il biglietto e il marchio.`,
  thumbnail: ""
},
{
  id: "mseg-040",
  title: "Segmentazione per dispositivo / esperienza - movil-first vs desktop, attrito e CECs",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmenta per comportamento e attrito secondo il dispositivo e regola imbuto e messaggi.",
  prompt: `Riempimento:
- Canali:
-% mobile vs desktop (se avete):
- Offerta:
- Attriti attuali:

Compito:
1) Definire 2-3 segmenti per dispositivo / esperienza:
- scorrimento rapido
- lettura profonda
2) Per ogni segmento:
- asset ideale (breve video, checklist, longform)
- CTA ideale
- modifiche di pagina consigliate
3) Creare 2 annunci e 2 versioni della copia eroe cast per segmento.`,
  thumbnail: ""
},

{
  id: "mseg-041",
  title: "Segmentazione per WhatsApp / DM - etichette minime e albero conversazione",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Definire etichette minime e flusso di conversazione a segmento in tempo reale.",
  prompt: `Riempimento:
- Offerta:
- 3 domande di valutazione:
- Canale (WhatsApp / IG DM):
- CAT:

Compito:
1) Definire 8 etichette minime (max) a segmento:
- intenzione
- bilancio
- urgenza
- esperienza
2) Progetta un albero di conversazione con percorsi A / B / C.
3) Scrivere i messaggi esatti per:
- chiedere
- rispondere
- segmento di cambiamento
4) Chiudi con un tabellone giornaliero per il canale.`,
  thumbnail: ""
},
{
  id: "mseg-042",
  title: "Segmentazione da 'main frizione' - credibilità, chiarezza, complessità, logistica",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmenta il tipo di attrito e crea messaggi / beni per risolverlo.",
  prompt: `Riempimento:
- Offerta:
- Attriti tipici:
- Canali:

Compito:
1) Definire 4 segmenti per attrito.
2) Per ogni segmento:
- asset ideale (caso, FAQ, demo, garanzia, comparativo)
- copia di 1 messaggio e 1 titolo
- CTA
3) Piano 14 giorni per ridurre l'attrito per priorità.`,
  thumbnail: ""
},
{
  id: "mseg-043",
  title: "Segmentazione per 'tipo di decisione' - impulsivo vs consultivo vs comitato",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Definire segmenti in base a come decidono: veloce, ricerca o approvazione multipla.",
  prompt: `Riempimento:
- Offerta:
Biglietto:
- Chi decide:
- Canale:

Compito:
1) Definire 3 segmenti per tipo di decisione.
2) Per ciascuno:
- best asset (VSL, PDF, demo, call)
- messaggi e prove
- CTA
3) Creare 1 sequenza corta per segmento (3 messaggi).`,
  thumbnail: ""
},
{
  id: "mseg-044",
  title: "Segmentazione per remarketing - finestre di frequenza previste e consigliate",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Si segmenta remarketing per volontà (VC / ATC / IC) e definisce messaggi e limiti.",
  prompt: `Riempimento:
- Pagine / eventi:
- Windows (1-3, 4-7, 8-14, 15-30):
- Offerta:
- Creativo:

Compito:
1) Definire segmenti di remarketing per evento e finestra.
2) Per ogni segmento:
- obiettivo
- messaggio principale
- creativo raccomandato
- KPI (CTR / CVR / CPA)
- frequenza massima
3) Definisce regole di stanchezza e rotazione settimanale.`,
  thumbnail: ""
},
{
  id: "mseg-045",
  title: "Segmentazione per \"oggetto del desiderio\" - futura identità (status, libertà, controllo, semplicità)",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "È segmentato da motivazione emotiva e identità per migliorare la risonanza della copia.",
  prompt: `Riempimento:
- Offerta:
- Emozioni / motivazioni pubbliche:
- Canali:

Compito:
1) Definire 5 motivazioni (status, libertà, sicurezza, semplicità, appartenenza).
2) Per ogni motivazione:
- messaggio principale
- prova ideale
- CTA
3) Scrivere 3 ganci e 1 paragrafo di vendita per motivazione.`,
  thumbnail: ""
},

{
  id: "mseg-046",
  title: "Segmentazione di atterraggio e personalizzazione - blocchi dinamici per segmento",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Disegna un atterraggio con blocchi intercambiabili secondo segmento (verticale, dolore, ruolo).",
  prompt: `Riempimento:
- Offerta:
- Segmenti (3-5):
- Blocchi disponibili (Hero, case, proiettili, FAQ):
- Strumento (se presente):

Compito:
1) Definire 3-5 segmenti che meritano la personalizzazione.
2) Per ogni segmento scrive:
- Eroe (headline + sub)
- 5 proiettili
- 3 FAQ
- 1 test sociale ideale
3) Definire regole di routing (come si rileva il segmento: UTM, forma, quiz).
4) Chiudere con la lista di controllo della consistenza (message-CTA).`,
  thumbnail: ""
},
{
  id: "mseg-047",
  title: "Segmentazione con quiz - design quiz per classificare e consigliare il percorso",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea un quiz completo con domande, punteggio, segmenti finali e raccomandazioni per segmento.",
  prompt: `Riempimento:
- Offerta:
- 3-5 segmenti finali desiderati:
- Variabile a misura (urgenza, esperienza, bilancio, ecc.):

Compito:
1) Disegna un quiz di 8-12 domande (con opzioni).
2) Definire la cicatrice (punti) e le regole per assegnare segmento.
3) Per ogni segmento:
- risultato (testo lungo)
- 3 raccomandazioni
- CTA
4) Scrivi copia dalla pagina quiz (Hero + Bullets) e l'e-mail dei risultati.`,
  thumbnail: ""
},
{
  id: "mseg-048",
  title: "Segmentazione coorte - confrontare il comportamento alla settimana / mese di acquisizione",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Segmentati da coorte temporaneo per rilevare i cambiamenti di qualità e ottimizzare le fonti.",
  prompt: `Riempimento:
- Periodo di analisi:
- Fonti:
- Disponibile:
- Offerta:

Compito:
1) Definire coorte a settimana (o mese).
2) Per ogni coorte, definire KPis per confrontare:
- CVR
- CAC
- LTV
- tasso di risposta
3) Prove ipotesi se una coorte produce differenti:
- cambiamento del messaggio
- cambio canale
- cambio offerta
4) Definire le azioni raccomandate (che testare) da coorte.`,
  thumbnail: ""
},
{
  id: "mseg-049",
  title: "Segmentazione finale pronta per l'esecuzione - 12 segmenti con messaggi, CCE e attività",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Fornire un pacchetto di segmenti eseguibile con la copia pronta e il piano di attivazione.",
  prompt: `Riempimento:
- Offerta:
- Nicho:
- Canali:
- Attività disponibili:
- Restrizioni:

Compito:
Crea 12 segmenti attuabili e per ciascuno scrive:
- nome
- criterio esatto (come viene identificato)
- messaggio principale (1 frase)
- 2 angoli aggiuntivi
- offerta / CTA ideale
- asset raccomandato (magnete di carico, demo, caso, lista di controllo)
- primo messaggio (copia pronto)
Chiudere con priorità (top 3) e pianificare 14 giorni (test).`,
  thumbnail: ""
},
{
  id: "mseg-050",
  title: "Sistema di segmentazione (SOP) - etichette, regole, fonti, audit e manutenzione",
  area: "Marketing e vendita",
  category: "Segmentazione",
  summary:
  "Crea un SOP completo per mantenere la segmentazione sana e utilizzabile dal team.",
  prompt: `Riempimento:
- Strumenti (CRM / Email / WhatsApp):
- Canali:
- Offerta:
- Attrezzatura (roli):

Compito:
Scrivere un SOP che include:
1) Principi: che cosa è un segmento valido (attivo, misurabile, utile).
2) Tassonomia di etichette (max 30) e convenzioni di nomi.
3) Regole di allocazione (per fonte, comportamento, manuale).
4) Controllo settimanale: cosa rivedere e come rilevare etichette spazzatura.
5) Manutenzione mensile: pulizia, fusione, ritiro segmento.
6) Lista di controllo (UTM, eventi, moduli, consenso).
Formato: voci + proiettili + esempi di etichette.`,
  thumbnail: ""
}];