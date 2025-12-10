// src/lib/prompts/text/marketing-objetivos.js

export const textPromptsMarketingObjetivos = [
{
  id: "mobj-001",
  title: "Definire l'obiettivo principale della campagna (con gerarchia: business → marketing → canale)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Fare un'idea di campagna un obiettivo chiaro, misurabile e business-allineed.",
  prompt: `Contesto (riempito):
- Prodotto / servizio:
- Biglietto medio e margine (se applicabile):
- Modello (ecom, infoproduct, SaaS, servizi):
- Mercato / paese:
- Periodo di campionamento (date):
- Limitazioni principali (budget, tempo, attrezzature):
- Canali disponibili (Meta / Google / TikTok / Email / Cosa App / Organic / Partners):
- Dati attuali (se avete): traffico, cavi, CVR, CAC, LTV, ROAS, MQL → SQL, tasso di chiusura

Compito:
1) Proposizione 3 possibili obiettivi aziendali (ad esempio reddito, ritenzione, attivazione, espansione) e scegliere il più ragionevole in base al contesto.
2) Tradurre tale obiettivo (business) a:
- obiettivo di marketing (ad es. domanda, cavi, pipeline, attivazione)
- target per canale (che ogni canale dovrebbe raggiungere)
3) Definire KPI primario, 2 KPI secondari e 3 indicatori operativi (indicatori leader).
4) Definire un obiettivo finale SMART (una frase) + versione "per l'apparecchiatura" (simpler) + versione "per direzione" (più executive).
5) Include presupposti e condizioni per raggiungere questo obiettivo (non promettente).
6) Finire con una lista di controllo di convalida: "se il vostro obiettivo non incontra X, regolare.".`,
  thumbnail: ""
},
{
  id: "mobj-002",
  title: "Albero target (albero del canale) - da reddito a metriche attuabili",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Si costruisce un albero che collega ricavi → conversioni → volumi → attività.",
  prompt: `Riempimento:
- Obiettivo di reddito (importo):
- Prezzo medio / biglietto:
- Tasso di conversione (se presente) o stima:
- Piombo → Vendita (se applicabile):
- Traffico attuale:
- Periodo:

Compito:
1) Creare un obiettivo Albero calcolando:
- # vendite necessarie
# Leads need
- # visite necessarie
- # stampe stimate / clic (se ci sono annunci)
2) Identifica 3 punti di leva: quale variabile muoverebbe il risultato più.
3) Scopo 2 scenari:
- conservatore
- aggressivo.
4) Per ogni scenario: obiettivi numerici a settimana e per canale (se applicabile).
5) Chiudere con "che misurare ogni giorno / ogni settimana" (sezione successiva).`,
  thumbnail: ""
},
{
  id: "mobj-003",
  title: "Obiettivi per fase del progetto (Consapevolezza → Considerazione → Conversione → Conservazione)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivi e KPis per fase imbuto con metriche coerenti.",
  prompt: `Contesto:
- Prodotto:
- Beareness attuale (basso / medio / alto):
- Tipo di acquisto (impulso / considerato):
- Ciclo di vendita (giorni):
- Canali:

Compito:
1) Definire 1 obiettivo per ogni fase:
- La consapevolezza
- Considerazione
- Conversione
- Retenzione / Referral
2) Per ogni fase:
- KPI primario
- 2 KPI secondari
- 3 tattiche consigliate
- segni di fallimento
3) raccomanda dove concentrarsi sulle prossime 4 settimane e perché (a seconda del contesto).
4) Include un "scatola" settimanale con 6-10 metriche massime.`,
  thumbnail: ""
},
{
  id: "mobj-004",
  title: "Marketing OKRs (O + 3-5 KRs) per 30 giorni / 90 giorni",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Creare OKR realistici con KR misurabili, pietre miliari e suggerito responsabile.",
  prompt: `Riempimento:
- Obiettivo della società:
- Prodotto:
- Attrezzatura ( ruoli disponibili):
- Restrizioni:
- Canali:
- Baseline attuale (se presente):

Compito:
1) Obiettivo 2 possibili obiettivi (O); scegliere il meglio.
2) Creare risultati misurabili 3-5 chiave (KRs).
3) scartare ogni KR in:
- iniziative (3-6)
- proprietario consigliato (role)
- milleston settimanali
4) Definire "anti-metrico" (vanity) che NON useremo.
5) Aggiungi un piano di revisione settimanale (che cosa è deciso quando un KR va rosso).`,
  thumbnail: ""
},
{
  id: "mobj-005",
  title: "Obiettivo di lancio (prelancio → lancio → post) con metrica per fase",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Struttura dell'obiettivo per fasi di lancio, evitando confusione metrica.",
  prompt: `Riempimento:
- Offerta / lancio:
- Date:
- udienze:
- Canali:
- Obiettivo di reddito o di vendita:
- Assets (email list, community, partner):

Compito:
1) Definire gli obiettivi per fase:
- Pre (generare aspettativa e porta)
- Avvio (conversione)
- Post (retention, upsell, recensioni)
2) Per ogni fase:
- KPI primario
- indicatori principali ogni giorno
- Benchmarks / soglie (che cosa sarebbe "buono")
3) Proporre una scheda di controllo (12 metriche max) per fase.
4) Include il piano di contingenza se:
- basso CTR
- CVR basso
- cavi economici ma di bassa qualità
- alto attrito di checkout.`,
  thumbnail: ""
},
{
  id: "mobj-006",
  title: "Definire il contenuto (organico) obiettivo allineato alle vendite (senza metriche di vanità)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Converte gli obiettivi dei contenuti in passi misurabili, orientati alla domanda e orientati alla conversione.",
  prompt: `Riempimento:
- Nicho:
- Offerta:
- Canale (IG / TikTok / YT / LinkedIn):
- Frequenza:
- Obiettivo commerciale (vendita / lead):
- Beni (magnete di carico, atterraggio, parola chiave DM):

Compito:
1) Definire 3 obiettivi di contenuto (ad esempio, consapevolezza qualificata, conduce DM, visite di sbarco).
2) Scegliere un obiettivo principale per 30 giorni.
(3) Definire:
- KPI primario
- 2 KPI secondari
- 5 metriche operative (ad esempio salvate, completate, DM, click)
4) Creare un piano di misura settimanale + criteri per pivottare.
5) Scopo 3 "esperimenti" (A / B) per imparare rapidamente.`,
  thumbnail: ""
},
{
  id: "mobj-007",
  title: "Obiettivo di prestazione (ads) - ROAS / CAC con regole di decisione",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi per le campagne pagate, comprese le regole chiare per lo scaling / pausing.",
  prompt: `Riempimento:
- Prodotto:
- Biglietto e margine:
- CCS massima tollerabile:
- Target ROAS (se applicabile):
- Budget:
- Periodo:
- Canali di annunci:

Compito:
1) Definire l'obiettivo primario (ROAS o CAC) e giustificare per margine.
(2) Definire:
- KPI primario
- KPI secondario (CPA, CVR, AOV, ecc.)
- indicatori principali (CTR, CPC, ATC, ecc.)
3. Creare "regole di decisione":
- quando fermarsi
- quando ad iterare
- quando salire
4) Include target settimanale e giornaliero (con intervalli).
5) Finire con una lista di controllo di configurazione per garantire la corretta misurazione.`,
  thumbnail: ""
},
{
  id: "mobj-008",
  title: "Obiettivi per WhatsApp / DM (conversazioni → chiusure) con imbuto dei messaggi",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Obiettivi misurabili in vendita per conversazione: risposta, valutazione, chiusura.",
  prompt: `Riempimento:
- Offerta:
- Canale (WhatsApp / IG DM):
- Volume attuale di chat al giorno:
- Tempo di risposta:
- Tasso di chiusura attuale (se presente):
- Oggetti tipici:

Compito:
1) Definire l'obiettivo principale per 30 giorni (vendita o chiusure).
2) Costruire l'imbuto:
- Avvio delle chat
- Rispose Chats
- chat qualificate
- offerta inviata
- vicino
3) Metta gli obiettivi per fase (per giorno / settimana).
4) Definire 5 KPI operativi (tempo di risposta, follow-up, ecc.).
5) Progetta un tabellone giornaliero e rituale (15 min) per spostare il numero.`,
  thumbnail: ""
},
{
  id: "mobj-009",
  title: "Obiettivo di marketing e-mail - reddito di spedizione e elenco salute",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi e-mail che bilanciano il reddito e la consegna.",
  prompt: `Riempimento:
- Tipo di lista:
- Dimensioni:
- Frequenza delle spedizioni:
- Offerta:
- Vendite correnti via e-mail (se presenti):
- Segmenti:

Compito:
1) Definisce l'obiettivo principale (proventi / mese o reddito / spedizione).
2) Definire gli obiettivi sanitari dell'elenco:
- reclami spam
- rimbalzi
- inattivo
3) Definire KPis:
- primario (revenue / email)
- secondario (CTR, tasso di risposta, conversione)
4) Crea 30 giorni di pianificazione con:
- tipi di campagne (promo, valore, nutrimento)
- obiettivi settimanali
5) Include regole igieniche: quando pulire, reinnescare, segmentare.`,
  thumbnail: ""
},
{
  id: "mobj-010",
  title: "Obiettivo di conservazione (acquisto post) - ridurre i ritorni e aumentare la riacquisto",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivi post-acquisto con ritenzione / riacquisto metriche ed esperienza.",
  prompt: `Riempimento:
- Prodotto:
- finestra di riacquisto (giorni):
- Problemi post-acquisto (uso, onboarding, aspettative):
- Canali post-acquisto (email, WhatsApp, community):
-% restituisce (se possibile):

Compito:
1) Definire l'obiettivo principale (riacquisto, ritenzione o riduzione dei rendimenti).
2) Seleziona 3 KPI:
- tasso di riacquisto
- NPS / CSAT
- ritorni / biglietti
3) Definire 4 iniziative di ritenzione (a bordo, consigli, contenuti, supporto).
4) Crea obiettivi a settimana e segnali di avvertimento.
5) Esso comprende una "mappa del momento" (giorno 0, 1, 3, 7, 14, 30).`,
  thumbnail: ""
},

{
  id: "mobj-011",
  title: "Obiettivi per prodotto (portfolio) - priorità cosa spingere secondo l'impatto",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi di SKU / offerta: focus, KPI, canale e argomenti.",
  prompt: `Riempimento:
- Elenco dei prodotti / offerte (con prezzo e margine):
- Inventario (se applicabile):
- Trazione corrente per prodotto:
- Stagione:
- Capacità operativa (supporto / consegna):

Compito:
1) classifica i prodotti in:
- Eroe (principio)
- Profit (margin)
- Entrata (acquisizione)
- Niche (segmento)
2) Definire l'obiettivo per categoria (vendita, lead, consapevolezza, ritenzione).
3) KPI per prodotto + canale consigliato.
4) Propon 2 ipotesi per prodotto da testare entro 30 giorni.
5) Chiudere con un programma di priorità settimanale.`,
  thumbnail: ""
},
{
  id: "mobj-012",
  title: "Obiettivi di crescita - 10 test con criteri di ipotesi e successo",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Diventa \"devi provare le cose\" in test misurabili con criteri chiari.",
  prompt: `Riempimento:
- Canale principale:
- Metrico da migliorare (CTR, CVR, CAC, AOV, MQL → SQL):
- Baseline:
- Restrizioni:

Compito:
1) Genera 10 esperimenti prioritari (impatto vs sforzo).
2) Per ogni esperimento:
- ipotesi (se facciamo X, allora Y)
- metrico primario
- criterio di successo (sentire)
- durata minima
- rischi
3) Definisce un obiettivo di apprendimento macro (ciò che dobbiamo sapere in 30 giorni).
4) Proporre l'ordine di esecuzione settimanale (4 settimane).`,
  thumbnail: ""
},
{
  id: "mobj-013",
  title: "Rebrand / obiettivo di riposizionamento - consapevolezza qualificata + messaggio convalidato",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivi realistici per il riposizionamento: segnale di mercato e convalida dei messaggi.",
  prompt: `Riempimento:
- Marchio attuale:
- Nuovo posizionamento:
- PCI:
- 3 crediti da convalidare:
- Canali:

Compito:
1) Definire l'obiettivo principale (convalida messaggio, non solo raggiungere).
2. Definire 3 segnali di convalida:
- risposte qualificate
- demo / diagnosi
- conversione in atterraggio
3) Definire KPis e obiettivi a settimana (4-6 settimane).
4) Progettare 5 test di messaggio (ad, messaggi, e-mail, webinar).
5) Include un piano "apprendimento": come decidere il messaggio finale.`,
  thumbnail: ""
},
{
  id: "mobj-014",
  title: "Obiettivi per l'eCommerce - AOV, CVR, CAC con \"levers\" e priorità",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definisce obiettivi specifici per l'eCommerce con leve per fase.",
  prompt: `Riempimento:
- AOV:
- CVR:
- CAC:
- Margen:
- Categoria prodotto:
- Principali fonti di traffico:

Compito:
1) Definire l'obiettivo principale (uno): su AOV / su CVR / giù CAC.
2) Elenco 5 leve per questo scopo (ad esempio fasci, soglia di spedizione, PDP, fiducia).
3) Definire le metriche principali (ATC, avviare il controllo, ecc.).
4) Definire obiettivi settimanali e criteri di successo.
5) Creare un "piano di 2 settimane" con vincite rapide e "piano di 6 settimane" con cambiamenti importanti.`,
  thumbnail: ""
},
{
  id: "mobj-015",
  title: "Obiettivi per SaaS - attivazione, ritenzione, espansione (con metriche North Star)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi North Star e stage per SaaS senza perdere fuoco.",
  prompt: `Riempimento:
- SaaS:
- PCI:
- Evento di attivazione (Aha moment):
- Ciclo di vendita:
- Chiesa:
- ARPA / LTV:

Compito:
1) Definire North Star Metric (NSM) ragionevole e perché.
2) Definire 3 obiettivi:
- acquisizione / pipeline
- attivazione
- ritenzione / espansione
3) KPis per target + target 30 / 90 giorni (linee).
4) 10 iniziative ordinate per spostare NSM.
5) Consiglio di amministrazione e di revisione settimanale.`,
  thumbnail: ""
},

{
  id: "mobj-016",
  title: "Obiettivo per la campagna di remarketing - recuperare l'intenzione senza bruciare il pubblico",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi di remarketing: frequenza, CPA, segmentazione e limiti.",
  prompt: `Riempimento:
- Prodotto:
- Interessi (visitori, ATC, IC, piombo):
- finestra di retargeting:
- Offerta:
- Budget:

Compito:
1) Definire obiettivo (ritiro CPA / CAC o CVR).
2) Definire la frequenza massima e segni di stanchezza.
3) Definire il KPI primario e secondario.
4) Obiettivi per segmento (ATC vs IC vs ViewContent).
5) Regole di pausing / creatività rotante.`,
  thumbnail: ""
},
{
  id: "mobj-017",
  title: "Obiettivo comunitario (Discord / Telegram) - impegno che genera vendite",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Obiettivi comunitari connessi all'attività: attivazione, rinvio, sostegno.",
  prompt: `Riempimento:
- Comunità:
- Offerta:
- Dimensioni:
- Attività attuale:
- Obiettivi aziendali:

Compito:
1) Definire l'obiettivo principale (ad esempio piombo / mese da comunità, ritenzione, supporto).
2) I KPI comunitari che contano (non-vanity): partecipazione attiva, sostegno tra i membri, rinvio.
3) Definire 4 rituali settimanali (AMAs, sfide, workshop).
4) Obiettivi alla settimana (30 giorni) e come misurare.
5) Piano antispam e segmentazione.`,
  thumbnail: ""
},
{
  id: "mobj-018",
  title: "Obiettivi del canale (matrix) - ciò che IG vs Email vs Ads vs SEO dovrebbe raggiungere",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Crea una matrice target di canale e impedisce a tutti di misurare lo stesso.",
  prompt: `Riempimento:
- Canali attivi:
- Offerta:
- Progetto:
- Risorse disponibili:

Compito:
1) Creare una matrice dove ogni canale ha:
- ruolo (consapevolezza, cattura, nutrimento, conversione, ritenzione)
- KPI primario
- 2 KPI secondari
- 2 tattiche chiave
2) Definire come gli utenti sono passati tra i canali (handoff).
3) Definire obiettivi mensili per canale + obiettivi settimanali.
4) Chiudere con 5 errori comuni quando si definiscono obiettivi per canale.`,
  thumbnail: ""
},
{
  id: "mobj-019",
  title: "Obiettivi di lancio coorte (obiettivi basati su coorte) - settimana per settimana",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Dividere gli obiettivi per coorte settimanali per diagnosticare rapidamente dove l'imbuto è rotto.",
  prompt: `Riempimento:
- Periodo completo (settimane):
- Reddito obiettivo / vendite:
- Conversione stimata:
- Canali:

Compito:
1) Dividere la campagna in coorte a settimana con:
- obiettivo principale
- obiettivo di vendita
- obiettivo di ricavi
2) Definire KPI da coorte:
- CAC
- CVR
- velocità di presentazione (se webinar)
3) Definire il trigger: se cohort week 1 < 80% obiettivo, che cosa si regola nella settimana 2.
4) Include il segnapunti e il modello di report settimanale.`,
  thumbnail: ""
},
{
  id: "mobj-020",
  title: "Agenzia / obiettivi freelance - obiettivi che il cliente capisce e segni",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Esso formula obiettivi chiari per i clienti: consegnabili, KPis, presupposti e limiti.",
  prompt: `Riempimento:
- Cliente:
- Servizio contratto:
- KPI desiderato:
- Budget:
- Restrizioni:
- Timeline:

Compito:
1) Obiettivo principale del giro 1 + 3 obiettivi secondari.
2) Definire ciò che dipende da voi vs il cliente.
3) Definire le metriche che non si garantisce (e perché).
4) Definire la cadenza di report e il formato.
5) Egli scrive una sezione "criterio del successo" e "criterio del non successo" (onore).`,
  thumbnail: ""
},

{
  id: "mobj-021",
  title: "Obiettivi per la campagna di sensibilizzazione (top del progetto) - qualificare, non solo raggiungere",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivi di consapevolezza con segnali di qualità e continuità.",
  prompt: `Riempimento:
- Prodotto:
- PCI:
- Messaggio:
- Canali:
- Budget:

Compito:
1) Definire l'obiettivo principale (consapevolezza qualificata).
2) KPis: raggiungere, VTR / ritenzione, visite di qualità, impegno con intenti.
3) Definire le soglie di qualità (ad esempio il video completato, clic qualificati).
4) Definire "nessun passo" obbligatorio (in ritardo rispetto alla considerazione).
5) Creare un piano di misura settimanale + rotazione creativa.`,
  thumbnail: ""
},
{
  id: "mobj-022",
  title: "Obiettivi di considerazione (mezzo fondo) - trasformare l'attenzione in intenzione",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Obiettivi del mezzo imbuto: cavi, contenuti del ponte, demo, carrelli, ecc.",
  prompt: `Riempimento:
- Offerta:
- Magnete di piombo / VSL / webinar:
- Ascolto:
- Canali:

Compito:
1) Definire l'obiettivo primario di considerazione (il piombo qualificato / demo / ATC).
2) Definire KPis: CPL / CPQL, atterraggio CVR, show-up (se webinars), tasso di risposta.
3) Definire il ponte (3) + contenuto consegnabile (controllo, calcolatore, guida).
4) Obiettivi settimanali e regole per ottimizzare.`,
  thumbnail: ""
},
{
  id: "mobj-023",
  title: "Obiettivi di conversione (imbuto inferiore) - chiudere senza sconti stupidi",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definisce obiettivi imbuti inferiori con attenzione alla qualità di conversione e al margine.",
  prompt: `Riempimento:
- Offerta:
- Prezzo e margine:
- Punto di attrito (checkout, fiducia, spedizione):
- Obiezioni:
- Canali:

Compito:
1) Definire l'obiettivo primario (CVR, CAC, entrate).
2) Definire 3 leve di conversione (fiducia, offerta, attrito).
3) Definire gli obiettivi alla settimana e gli indicatori principali (controllare gli inizi, tentativi di pagamento).
4) Creare regole: quando usare l'incentivo, quando no.
5) Finire con la lista di controllo CRO.`,
  thumbnail: ""
},
{
  id: "mobj-024",
  title: "Obiettivi di segmentazione - obiettivi per segmento (nuovo vs ricorrente, freddo vs caldo)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivi per segmento per evitare la media fuorviante.",
  prompt: `Riempimento:
- Segmenti disponibili:
- Offerta:
- Metrico per segmento (se presente):
- Canali:

Compito:
1) Propon 4 segmenti chiave (freddo, caldo, caldo, cliente).
2) Definire obiettivo primario per segmento + KPI.
3) Definire messaggio e canale per segmento (breve).
4) Obiettivi settimanali per segmento.
5) Come segnalare senza confusione (suggested table).`,
  thumbnail: ""
},
{
  id: "mobj-025",
  title: "Obiettivo di posizionamento dei prezzi (premium vs accessibile) - coerenza metrica",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Alinea si rivolge secondo il posizionamento dei prezzi: il premio richiede altri segnali.",
  prompt: `Riempimento:
- Prezzo:
- Concorrenza:
- PCI:
- Ciclo di acquisto:
- Test sociale:

Compito:
1) Definire se il posizionamento dovrebbe essere premium o accessibile (arghe).
2) Definisce obiettivi e KPis coerente con tale posizionamento.
3) Definire segnali di qualità (ad esempio chiamate riservate, risposte, richieste demo).
4) Si ottiene 30 giorni e 90 giorni con ipotesi.`,
  thumbnail: ""
},

{
  id: "mobj-026",
  title: "Obiettivi per il nuovo canale (TikTok / YouTube / LinkedIn) - obiettivi di apprendimento realistici",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi di entrata del canale: coerenza, apprendimento, segnali di richiesta.",
  prompt: `Riempimento:
- Nuovo canale:
- Offerta:
- Risorse (tempo / edizione):
- KPI desiderato finale:
- Esperienza precedente:

Compito:
1) Definire obiettivo di apprendimento di 30 giorni (non solo risultati).
(2) Stabilimenti:
- uscita (n ° pezzi)
- segno (retenzione, click, DM)
- uscita (caldo / vendita)
3) Definire "criteria per continuare" e "criteria per fermare / perno".
4) Progetta 8 esperimenti di contenuti a settimana.`,
  thumbnail: ""
},
{
  id: "mobj-027",
  title: "Obiettivi della campagna di influenza / affiliazione - allineamento e misura",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi e KPis per le collaborazioni: portata, traffico, vendite attribuibili.",
  prompt: `Riempimento:
- Prodotto:
- Tipo di influenza:
- Modello (pagamento fisso / affiliato):
- Codice / UTM:
- Finestra:

Compito:
1) Definire l'obiettivo principale (vendita / CPA / piombo gen).
2) Definire KPis: ER, clic, atterraggio CVR, vendite, AOV.
3) Definisce criteri di successo per l'influenza (minimo).
4) Definire il piano dei contenuti (3 pezzi) e le regole di tracciamento.
5) Definire come iterare se l'influenza porta il traffico ma non le vendite.`,
  thumbnail: ""
},
{
  id: "mobj-028",
  title: "Obiettivi per la campagna di riattivazione (clienti inattivi / piste fredde)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi di riattivazione: tasso di risposta, conversione, win-back.",
  prompt: `Riempimento:
- Segmento di riattivare:
- Tempo di inattività:
- Offerta:
- Canali (email / whatsapp):
- Storia:

Compito:
1) Definisce l'obiettivo principale (risultato di rimborso o riattivazione di interessi).
2) Definire KPis: tasso di risposta, CTR, conversione, unsub.
3) Definire 3 messaggi / angoli e come misurare che uno vince.
4) Obiettivi settimanali e regole di pulizia elenco.`,
  thumbnail: ""
},
{
  id: "mobj-029",
  title: "Obiettivi per l'evento facciale (vendita + porta + contenuto) con metriche di fase",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi degli eventi: record, assistenza, lead, chiusure, contenuti.",
  prompt: `Riempimento:
- Evento:
- Capacità:
- Prezzo (se applicabile):
- Obiettivo aziendale:
- Canali:

Compito:
1) Definisce gli obiettivi:
- registrazioni
- assistenza
- leader qualificati
- vendita / chiusure
- parti di contenuto generate
2) KPI per target + obiettivi a settimana.
3) Piano di monitoraggio post-evento (7-14 giorni) con obiettivi di chiusura.`,
  thumbnail: ""
},
{
  id: "mobj-030",
  title: "Obiettivi di PR / stampa - domanda e segni di reputazione (non solo menzione)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi PR connessi al business: traffico qualificato, fiducia, conduce.",
  prompt: `Riempimento:
- Mark:
- Messaggio:
- Audience:
- Significato obiettivo:
- Attività di conversione (terraggio, magnete di piombo):

Compito:
1) Definisce l'obiettivo principale di PR (reputazione + domanda).
2) Definire KPis: visite di marca, ricerche, lead, menzioni di qualità.
3) Definire meta per periodo e come attribuire (UTM, picchi).
4) Piano "Attivazione" dopo ogni menzione.`,
  thumbnail: ""
},

{
  id: "mobj-031",
  title: "Decomporre l'obiettivo in attività (piano di lavoro) - da Deadline a oggi",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Backward piano per garantire l'attuazione: pietre miliari, dipendenze, proprietari.",
  prompt: `Riempimento:
- Obiettivo finale (SMART):
- Scadenza:
- Attività mancanti (terraggi, creativi, email):
- Attrezzature / ruoli:

Compito:
1) Creare un piano di workback a settimana (o giorni se < 14 giorni sono mancanti).
(2) Include:
- consegnabile
- proprietario (role)
- unità
- termine interno
3) Definire "percorso critico" (che se ritardato, rompe tutto).
4) Definire rituali di controllo (3 incontri massimi).`,
  thumbnail: ""
},
{
  id: "mobj-032",
  title: "Obiettivi con restrizioni (budget / tempo / squadra) - definisce cosa sacrificare coscientemente",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Regolare gli obiettivi a restrizioni reali: gamma / tempo / triangolo di qualità.",
  prompt: `Riempimento:
- Obiettivo:
- Budget:
- Tempo:
- Attrezzatura:
- Canali:

Compito:
1) Valuta la fattibilità e il marchio:
- il più possibile
- il rischioso.
- l'impossibile.
2) Propon versione ricalibrata del bersaglio (realistico) + il suo KPI.
3) Definire ciò che sacrificate:
- portata
- velocità
- qualità
4) Propon 3 leve per recuperare le prestazioni senza aumentare le risorse.`,
  thumbnail: ""
},
{
  id: "mobj-033",
  title: "Obiettivi per mercato (locale vs internazionale) - regolare KPI e messaggio",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definisce gli obiettivi quando si cambia paese / lingua: benchmark e segnali di prodotto -market fit.",
  prompt: `Riempimento:
- Paese attuale:
- Nuovo paese:
- Canali:
- Offerta:
- Test sociale disponibile:

Compito:
1) Definire il target di entrata di mercato (30 / 90 giorni).
2) convalida KPis: CTR, CPC, CVR, risposte, demo.
3) Definire 3 ipotesi culturali (messaggio) da testare.
4) Obiettivi alla settimana e piano di apprendimento.`,
  thumbnail: ""
},
{
  id: "mobj-034",
  title: "Nuovi obiettivi di prodotto vs prodotto maturo - quali cambiamenti e cosa misurare",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Alinea si rivolge secondo la fase: scoperta vs ottimizzazione.",
  prompt: `Riempimento:
- Prodotto:
- Stage (nuovo / maturo):
- Dati attuali:
- Canali:

Compito:
1) Se nuovo: definisce obiettivi di apprendimento + domanda iniziale.
2) Se matura: definisce gli obiettivi di efficienza (CAC / ROAS / CVR).
3) Definire la scheda minima per ogni caso.
4) Definire "Gates" per passare dalla nuova fase → ottimizzazione.`,
  thumbnail: ""
},
{
  id: "mobj-035",
  title: "Ordini / obiettivi di promozione - aumentare il margine senza uccidere la conversione",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi quando si cambia prezzo: margine, CVR, churn, percezione.",
  prompt: `Riempimento:
- Prezzo attuale:
- Nuovo prezzo:
- Motivo del cambiamento:
- Margen:
- Concorrenza:

Compito:
1) Definire l'obiettivo principale (margin / conversione / ritenzione).
2) Definire il KPis e le soglie di allarme.
3) Obiettivo 3 ancoraggio / offrire esperimenti per supportare CVR.
4) Piano di comunicazione (email, atterraggio, script) con obiettivi di canale.`,
  thumbnail: ""
},

{
  id: "mobj-036",
  title: "Obiettivo di qualità di piombo - passare da 'molti porta' a 'lead che acquistano '",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi di qualità: MQL → SQL, showup, close rate, pipeline.",
  prompt: `Riempimento:
- Prodotto / servizio:
- Fonti di piombo:
- Problema: cestino di piombo contro poche chiusure
- Baseline: MQL → SQL, presentarsi, tariffa ravvicinata (se presente)

Compito:
1) Definire l'obiettivo principale come "qualità", non volume.
2) Definire KPis:
- CPQL
- Tasso SQL
- Chiudi il becco.
- CAC
3) Definire 5 modifiche per migliorare la qualità (messaggio, forma, valutazione, nutrimento).
4) Obiettivi settimanali e come misurare il miglioramento reale.`,
  thumbnail: ""
},
{
  id: "mobj-037",
  title: "Obiettivi per la prenotazione delle chiamate (B2B / B2C biglietto alto) - dai clic agli incontri",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Obiettivi di incontro: show-up, tasso impostato, tasso di chiusura e valore della pipeline.",
  prompt: `Riempimento:
- Offerta:
- Prezzo:
- Fondo Calendly:
- Tasso di presentazione:
- Tasso di chiusura:
- Budget:

Compito:
1) Definire l'obiettivo di riunione (numero) e la pipeline ($).
2) Definire imbuto: click → conduce → prenotato → mostrato → chiuso.
3) Obiettivi per fase + regole se si lascia il programma.
4) Creare segnapunti giornalieri e settimanali.
5) Definire 3 leve di miglioramento (remine, valutazione, offerta chiamata).`,
  thumbnail: ""
},
{
  id: "mobj-038",
  title: "Obiettivi per SEO (90 giorni) - obiettivi di contenuto, classifica e lead",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivi SEO realistici: output, qualità, graduatorie proxy e lead.",
  prompt: `Riempimento:
- Nicho:
- Offerta:
- Stato SEO attuale:
- Risorse (scrittori):
- Priorità:

Compito:
1) Definire gli obiettivi 30 / 60 / 90 giorni (uscita e risultati).
2) KPis: pubblicazioni, indicizzazione, posizioni (top 10), click, lead.
3) Definire 3 cluster e obiettivi per cluster.
4) Piano di misurazione mensile e decisioni.`,
  thumbnail: ""
},
{
  id: "mobj-039",
  title: "Obiettivi per i partenariati - rendimenti condivisi e attribuibili",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definisce gli obiettivi per le alleanze: pipeline, conversazioni, entrate e attività.",
  prompt: `Riempimento:
- Partner ideale:
- Ascolto:
- Formato (webinar, bundle, riferimento):
- Finestra:
- Offerta:

Compito:
1) Definire l'obiettivo principale (lead, pipeline, entrate).
2) KPI primario + secondario (incontro, CTR, CVR).
3) Definire attività minima per partner (n ° spedizioni, post, ecc.).
4) Definire le regole di relazione e di continuità (seguire / tagliare).`,
  thumbnail: ""
},
{
  id: "mobj-040",
  title: "Obiettivi con 'North Star' per il marketing personale (marchio personale) - segnali che importa",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Impostare NSM per marca personale: domanda in arrivo, DM qualificati, chiamate.",
  prompt: `Riempimento:
- Offerta:
- Piattaforma:
- Tempo disponibile:
- Baseline:
- Audience:

Compito:
1) Definire NSM ideale (ad esempio chiamate riservate / mese, DM qualificati / settimana).
2) Definire 3 obiettivi sotto (contenuto, cattura di piombo, coltura).
3) Definire il tabellone settimanale.
4) Definire "caduta": quello che fai ogni giorno / settimana e quali risultati ti aspetti.`,
  thumbnail: ""
},

{
  id: "mobj-041",
  title: "Skereboard (12 metriche massime) - cruscotto esecutivo per la campagna",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Progetta un semplice tabellone che il team usa davvero per decidere.",
  prompt: `Riempimento:
- Campagna:
- Canali:
- KPI primario:
- Progetto:

Compito:
1) Selezionare 12 metriche o meno e aggiungerle:
- Acquisizione della salute
- Salute latente
- Salute della conversione
- Salute di conservazione
2) Definire la frequenza di revisione per ogni metrica (daily / settimanale).
3) Definire le soglie (verde / giallo / rosso).
4) Definire le azioni associate al rosso (cosa fare, non solo guardare).`,
  thumbnail: ""
},
{
  id: "mobj-042",
  title: "Obiettivi per la creatività (ads) - che cosa dovrebbe spostare ogni tipo di creativo",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivo da angolo creativo: gancio, prova, offerta, obiezione.",
  prompt: `Riempimento:
- Prodotto:
- Usato angoli creativi:
- Problemi attuali (basso CTR, basso CVR, ecc):
- Canali:

Compito:
1) Definire 5 tipi di creatività e il loro obiettivo:
- Uncino / consapevolezza
- Test sociale
- Demo
- Gestione degli oggetti
- Offerta
2) KPI per tipo (CTR, tasso di attesa, CVR).
3) Definire obiettivi e criteri di successo per tipo.
4) Definire il piano di rotazione settimanale (quanti nuovi per tipo).`,
  thumbnail: ""
},
{
  id: "mobj-043",
  title: "Obiettivi quando \"tutto fallisce\" - diagnosi rapida (che obiettivo dovrebbe priorità oggi)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Quadro per decidere l'obiettivo della settimana quando ci sono caos e dati misti.",
  prompt: `Riempimento:
- Sintomi (CTR, CPC, piombo, CVR, vendite):
- Canali:
- Offerta:
- Modifiche recenti:

Compito:
1) Diagnostica in cui parte del fondo è il fallimento (in alto / metà / in basso / soddisfare).
2) Definire un unico obiettivo per 7 giorni (priorità assoluta).
3) Definire 3 azioni ad alto impatto per quella settimana.
4) definire ciò che NON faremo (smettere di fare).
5) Definire come si saprà in 72 ore se si va meglio o peggio.`,
  thumbnail: ""
},
{
  id: "mobj-044",
  title: "Obiettivi di qualità creativa - coerenza, chiarezza, credibilità (per contenuti e annunci)",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definisce obiettivi che migliorano la qualità del messaggio (non solo KPI per l'acquisto).",
  prompt: `Riempimento:
- Mark:
- Offerta:
- Problemi attuali (confusione, diffidenza, messaggi sparsi):

Compito:
1) Definire 3 obiettivi di qualità:
- chiarezza di fornitura
- credibilità / prova
- consistenza narrativa
2) Definisce indicatori di qualità (interni ed esterni).
3) Definire la lista di controllo dell'audit di parte (10 punti).
4) Definire 30 giorni piano per aumentare la qualità con consegna settimanale.`,
  thumbnail: ""
},
{
  id: "mobj-045",
  title: "Upsell / crosssell targets - aumentare LTV senza aumentare CAC",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi per aumentare LTV: tasso di upsell, tasso di prendere, AOV, margine.",
  prompt: `Riempimento:
- Prodotto principale:
- Upsell / crosssell disponibile:
- AOV attuale:
- Acquisto post finestra:
- Canali:

Compito:
1) Definire l'obiettivo principale (tasso di frequenza LTV / AOV).
2) Definire KPis e obiettivi a settimana.
3. Definire 3 punti di inserimento:
- check out
- post-acquisto
- email / Whatsapp
4) Definire 5 pacchetti presupposti / offerte da testare.`,
  thumbnail: ""
},

{
  id: "mobj-046",
  title: "Obiettivo di velocità (tempo di lancio) - lancio in 7 giorni senza rompere la qualità",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire l'obiettivo di uscita rapida: minimi consegnabili, rischi accettabili e controllo.",
  prompt: `Riempimento:
- Offerta:
- Data di destinazione:
- Attività minime:
- Attrezzatura:
- Rischi:

Compito:
1) Definire il lancio MVP (che cosa se o dovrebbe esistere).
2) Definisce l'obiettivo principale (mercato e misura).
3) Definire le metriche di convalida minima in 72 ore.
4) Elenco di "non deve spedire".
5) Piano di lavoro giorno per giorno.`,
  thumbnail: ""
},
{
  id: "mobj-047",
  title: "Obiettivi di prezzo per segmento - stessa offerta, obiettivi diversi per cliente",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire gli obiettivi per segmento per i prezzi: premium vs volume vs input.",
  prompt: `Riempimento:
- Segmenti:
- Disposizione da pagare:
- Offerta:
- Canali:

Compito:
1) Definire l'obiettivo per segmento (margin vs volume vs acquisizione).
2) KPis per segmento.
3) Messaggio per segmento (1-2 frasi).
4) Piano di misura e quando separare campagne / sbarchi.`,
  thumbnail: ""
},
{
  id: "mobj-048",
  title: "Obiettivi di riduzione dell'attrito - checkout / atterraggio / prenotazione della chiamata",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire l'obiettivo incentrato sull'attrito: tasso di azionamento e passi dell'imbuto.",
  prompt: `Riempimento:
- Punto di frizione (forma, check out, calendario):
- Il passo attuale in cui le persone cadono:
- Baseline:
- Strumenti:

Compito:
1) Definisce l'obiettivo principale (ridurre l'abbandono X%).
2) Definire metrica per conversione passo.
3) Definire 10 ipotesi di attrito + correzioni.
4) Piano di prova (2 settimane) con un criterio di successo.`,
  thumbnail: ""
},
{
  id: "mobj-049",
  title: "Obiettivi con attribuzione imperfetta - come misurare quando non c'è tracciamento perfetto",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "Definire obiettivi e misure quando ci sono iOS, social dark, vendite di WhatsApp, ecc.",
  prompt: `Riempimento:
- Canali:
- Vendite di DM / Cosa App:
- Problemi di monitoraggio:
- KPI è possibile misurare:

Compito:
1) Definire il proxy obiettivo principale e metrico (leading).
2) Definire "autoriportato attribuzione" sistema (check-out / domande DM).
3) Definire la scheda ibrida: dati diretti + proxy.
4) Definire le regole di decisione di scalare senza essere sicuro al 100%.`,
  thumbnail: ""
},
{
  id: "mobj-050",
  title: "Obiettivo finale + contratto di misura - documento semplice per allineare tutte le attrezzature",
  area: "Marketing e vendita",
  category: "Obiettivi",
  summary:
  "\"Contratto oggettivo\" modello: che misura, come e che cosa significa successo.",
  prompt: `Riempimento:
- Campagna:
- Obiettivo iniziale:
- KPis:
- Canali:
- Assunzioni:
- Responsabile:

Compito:
Scrivere un breve documento (1 pagina) che include:
1) Obiettivo SMART (1 frase).
2) KPis (primario / secondario) con definizioni esatte.
3) Assunzioni e dipendenze (cosa dovrebbe accadere).
4) Soglia (verde / giallo / rosso) di KPI.
5) Il tasso di reporting e chi decide.
6) Ciò che non misuramo e perché.
7) Elenco dei rischi e mitigazione.
Devi essere pronto a copiare su Notion / Docs.`,
  thumbnail: ""
}];