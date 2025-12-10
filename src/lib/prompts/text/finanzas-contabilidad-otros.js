// src/lib/prompts/text/finanzas-contabilidad-otros.js

export const textPromptsFinanzasContabilidadOtros = [
{
  id: "finoth-001",
  title: "Diagnosi finanziaria 360 ° (piccola impresa) in 30 minuti",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Recensione rapida per sapere cosa risolvere prima: contanti, margini, spese e debiti.",
  prompt: `Agire come CFO per piccole imprese.

Ingressi:
- Reddito medio mensile (ultimo 3 mesi).
- Costi fissi e variabili.
- Debito (importo, tassa, pagamento mensile).
- Il saldo corrente.
- Obiettivo (stabilità / crescita / risparmio).

Genera:
1) Diagnosi a 4 blocchi: liquidità, redditività, leva, efficienza.
2) 10 domande chiave per rilevare perdite.
3) Elenco delle "azioni ad alto impatto" per 7 giorni.
4) Piano di 30 giorni con priorità.
5) Metrico da monitorare settimanalmente.`,
  thumbnail: ""
},

{
  id: "finoth-002",
  title: "Controllo degli abbonamenti e delle spese di formica (detezione + pulizia)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Trovare ed eliminare i costi invisibili e creare un sistema per impedirne il ritorno.",
  prompt: `Agisce come analista delle spese.

Ingressi:
- Banche / carte che uso.
- Abbonamenti noti (lista).
- Frequenza degli acquisti online.
- Se condivido con qualcuno (sì / no).

Genera:
1) Metodo passo per passo per l'udizione di costi di 90 giorni.
2) Tabella di classificazione: essenziale / utile / estensibile.
3) script di cancellazione (email / messaggio) e checklist di conferma.
4) Regola mensile di manutenzione (10 min).
(5) Risparmio potenziale stimato con intervalli (basso / medio / alto).`,
  thumbnail: ""
},

{
  id: "finoth-003",
  title: "Politica dei prezzi: come aumentare i prezzi senza uccidere le conversioni",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Definire la struttura, ancoraggi e passi per aumentare il margine in modo sicuro.",
  prompt: `Agisce come una strategia di prezzi con un focus finanziario.

Ingressi:
- Prodotto / servizio.
- Prezzo attuale.
- Costi (tempo, strumenti, ingressi).
- Concorso (capo / uguale / faccia).
- Obiettivo (più margine / più volume / premio).

Genera:
1) 3 strategie di aumento (diretto, phased, per bundle).
2) Tabella dello scenario: prezzo vs volume vs utilità (con esempi).
3) Come creare ancoraggi (piano base / pro / premium).
4) Messaggi per comunicare il cambiamento (senza ulteriore giustificazione).
5) Elenco di controllo dei segnali per invertire o regolare.`,
  thumbnail: ""
},

{
  id: "finoth-004",
  title: "Flusso di cassa per 12 settimane",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Modello settimanale per evitare di esaurire i soldi anche se si vende bene.",
  prompt: `Agisce come un controllore del flusso di cassa.

Ingressi:
- Bilancia iniziale.
- Risultato previsto per settimana (o media).
- Costi fissi (date e importi).
- Costi variabili stimati.
- Eventi: lanci / stagioni / grandi pagamenti.

Genera:
1) modello di cashflow 12 settimane (colonne e formule nel testo).
2) Come stimare il reddito conservatore vs realistico.
3) regola "Minimum floor of box" e cosa fare se lo incrocio.
4) Piano di contingenza (azioni in 48 ore).
5) rituale settimanale di 15 min da aggiornare.`,
  thumbnail: ""
},

{
  id: "finoth-005",
  title: "Piano anti-stress: ordini finanza personale + business (mixed)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Sistema ibrido quando tutto è mescolato e avete bisogno di controllo rapido.",
  prompt: `Agisce come organizzatore finanziario.

Ingressi:
- Reddito personale e commerciale (se applicabile).
- Debiti personali e commerciali.
- Risparmio attuale.
- Tipo di caos (composizione totale / qualcosa ordinato).
- Strumenti (banca, Excel, applicazioni).

Genera:
1) piano di 14 giorni per separare e ordinare (passo per passo).
2) Regole di pagamento: chi paga cosa (personale vs business).
3) Sistema di buste / cubi (5 secchi) con percentuali.
4) Elenco di controllo della manutenzione settimanale.
5) Indicatori di realizzazione (chiaro e misurabile).`,
  thumbnail: ""
},

{
  id: "finoth-006",
  title: "Strategia di riduzione del debito (snowball vs valanga)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Scegli il metodo giusto e l'arma un piano di pagamento realistico.",
  prompt: `Agisce come consulente finanziario (educativo).

Ingressi:
- Elenco dei debiti: saldo, tasso, pagamento minimo.
- Risultato mensile disponibile per il debito.
- Livello di rischio / stress (basso / medio / alto).
- No. Se mi aspetto reddito extra (sì / no).

Genera:
1) Palla di neve comparata vs valanga e che scegliere secondo il mio caso.
2) Tabella dei pagamenti di debito suggeriti (ordine consigliato).
(3) Data prevista di insediamento per fase (con intervalli).
4) 5 tattiche per rilasciare il flusso (senza aumentare il debito).
5) Script per negoziare / richiedere miglioramenti (tono professionale).`,
  thumbnail: ""
},

{
  id: "finoth-007",
  title: "Guida alla definizione della retribuzione del proprietario senza affogare il business",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Determinare quanto pagare in modo stabile anche se le vendite sono variabili.",
  prompt: `Agisce come CFO per il solopreneur.

Ingressi:
- Ultimo reddito 3 mesi.
- Costi fissi.
- Le prenotazioni attuali.
- Obiettivo mensile personale.
- Variabilità del reddito.

Genera:
1) Metodo per il calcolo "spendio base" + "valore variabile".
2) Soglie di sicurezza (quando il pagamento non è aumentato).
3) Esempio numerico con 3 scenari.
4) Regola di distribuzione: reinvestment vs proprietario vs prenotazione.
(5) Controllo mensile di regolazione.`,
  thumbnail: ""
},

{
  id: "finoth-008",
  title: "Economia unità: costo di servizio e margine reale per prodotto",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Calcola il margine reale considerando commissioni, rimborsi, supporto e tempo.",
  prompt: `Agisce come analista finanziario.

Ingressi:
- Prezzo di vendita.
- Costi diretti (input, strumenti, ore).
- Comitati (strada, mercato).
- Rimborso (%).
- Supporto medio per cliente.

Genera:
1) Formula di margine reale (nel testo) e come calcolarlo.
2) Tipico tavolo di costo "nascosto".
3) 3 leve per migliorare il margine senza aumento del prezzo.
4) Segni per il pausing di un prodotto senza scopo di lucro.
5) Breve relazione dell'economia unitaria (templato).`,
  thumbnail: ""
},

{
  id: "finoth-009",
  title: "Bilancio base zero (ZBB) per il business digitale",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Reindirizza il tuo budget da zero e assegna ogni peso / dollaro con intento.",
  prompt: `Agisce come pianificatore finanziario.

Ingressi:
- Risultato mensile previsto.
- Elenco delle spese correnti.
- Priorità: crescita / stabilità / profitto.
- Canali di acquisizione.
- Strumenti essenziali.

Genera:
1) Semplice processo ZBB spiegato.
2) categorie suggerite e limiti iniziali.
3) Regola per "spese pagate da soli" vs "misure".
4) Biweekly recensione: come regolare senza rompere il piano.
5) Modello pronto per la copia su fogli.`,
  thumbnail: ""
},

{
  id: "finoth-010",
  title: "Materiale di vendita del modello / commissioni di affiliazione (senza perdite)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Disegna commissioni che incoraggiano senza distruggere il vostro margine.",
  prompt: `Agisce come CFO e progettista di incentivi.

Ingressi:
- Prodotto e prezzo.
- Margine lordo stimato.
- Rimborso medio.
- Tipo di venditore (affiliato / più vicino / partner).
- Obiettivo (volume / qualità / LTV).

Genera:
1) 3 schemi di commissioni (flat, step, per qualità).
2) regole antifrode e anti-ricarica.
3) Esempi numerici con margine finale.
4) Contratto / condizioni operative (punti chiave, non legali).
5) KPI per monitorare che il piano funziona.`,
  thumbnail: ""
},

{
  id: "finoth-011",
  title: "Grande piano commerciale (capex) senza svalutazione",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Decidere quando acquistare grandi attrezzature / strumenti e come finanziarlo sano.",
  prompt: `Agisce come controllore.

Ingressi:
- Acquisto desiderato (importo).
- Benefici previsti (risparmio / reddito).
- Scatola corrente.
- I debiti esistenti.
- Emergenza (bassa / media / alta).

Genera:
1) Quadro decisionale: comprare vs aspettare vs noleggio vs finanza.
2) regola "Maximum% cash" per acquisto.
3) piano di risparmio per comprare (settimanale / mensile).
4) Valutazione del ROI semplice (ad esempio).
5) Elenco di controllo prima di eseguire.`,
  thumbnail: ""
},

{
  id: "finoth-012",
  title: "Sistema di obiettivi finanziari (OKRs) per piccole imprese",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Convertire gli obiettivi in numeri: reddito, margine, contanti, CAC e ritenzione.",
  prompt: `Comportati come CFO.

Ingressi:
- Obiettivo annuale (proventi o utilità).
- Canali di vendita.
- Prodotto (s).
- Tecniche attuali (se ho).
- Attrezzatura (solo io / attrezzatura).

Genera:
1) 3-5 obiettivi finanziari (O) e 3-4 KR per obiettivo.
2) Tasso di monitoraggio settimanale / mensile.
3) Pensione con metriche e soglie (verde / giallo / rosso).
4) Azioni se un KR va in rosso.
5) Esempio completo con numeri fittizi.`,
  thumbnail: ""
},

{
  id: "finoth-013",
  title: "Rapporto per investitore / partner (semplice e convincente)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Relazione mensile struttura per i partner non brutti con contabilità.",
  prompt: `Agisce come analista del rapporto.

Ingressi:
- Reddito mensile.
- Grandi costi.
- Eventi: lanci, campagne, cambiamenti.
- Metrica (clienti, churn, biglietti, ecc.).
- I prossimi passi.

Genera:
1) Rapporto formato di 1-2 pagine.
2) chiave KPis secondo modello (servizi, SaaS, infoproduct).
3) "Narrativo" del mese: cosa è successo e perché.
4) Rischi e mitigazione (top 5).
5) Piano per il prossimo mese (priorità).`,
  thumbnail: ""
},

{
  id: "finoth-014",
  title: "Prezzo minimo conveniente: calcolo e regole per non accettare i cattivi clienti",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Definire il piano di prezzo per costo, tempo e margine di destinazione.",
  prompt: `Agisce come analista di performance.

Ingressi:
- Costo stimato all'ora (o stipendio desiderato).
- Ore per progetto / servizio.
- Costi fissi mensili.
- Capacità mensile (progetti).
- Punto di riferimento.

Genera:
1) Formula per un prezzo minimo conveniente.
2) Esempio con 3 scenari (basso, medio, premio).
3) Politica di sconto (quando sì / quando no).
(4) Regole per lo scopo strisciante (finanziario).
5) Elenco di controllo prima dell'elenco.`,
  thumbnail: ""
},

{
  id: "finoth-015",
  title: "Sistema degli allegati e degli allegati: controllo dei costi per progetto (costo del lavoro)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Registra ore e costi per progetto per scoprire quali quelli ti lasciano soldi.",
  prompt: `Agisce come un responsabile del progetto.

Ingressi:
- Tipo di progetti.
- Durata media.
- Costi diretti (tool, freelance).
- Se pago fisso o orariamente.
- Problemi attuali (incerto margine, ritardi).

Genera:
1) Costo del lavoro (campi e organizzazione).
2) Processo settimanale per catturare ore / costi.
3) Indicatori: margine per progetto, deviazioni, ore reali vs stimato.
4) Come regolare i prezzi basati sui dati.
5) Rapporto post-mortem per progetto (checklist).`,
  thumbnail: ""
},

{
  id: "finoth-016",
  title: "Rimborso finanziario Politica: Come minimizzare l'impatto dei contanti",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Strategia operativa per ridurre i rimborsi e proteggere il flusso senza cattiva reputazione.",
  prompt: `Agisce come CFO con un focus sull'esperienza del cliente.

Ingressi:
- Tasso attuale di rimborso (se lo so).
- Motivi comuni.
- Tipo di offerta (corso, SaaS, servizio).
- Finestra di garanzia.
- Canali di vendita.

Genera:
1) Misure preventive (prima dell'acquisto): chiarezza, aspettative, filtri.
2) Misure post-acquisto: onboarding, supporto, vincite rapide.
3) Opzioni di risoluzione: credito, pausa, aggiornamento, supporto extra.
4) Come fornire rimborsi in denaro (conservazione).
5) KPI e avvisi per rilevare i problemi iniziali.`,
  thumbnail: ""
},

{
  id: "finoth-017",
  title: "Pianifica di costruire un fondo di emergenza aziendale (3 livelli)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Crea riserve per tenere i mesi liberi senza tagliarlo folle.",
  prompt: `Agisce come consulente finanziario.

Ingressi:
- Costi fissi mensili.
- Variabilità del reddito.
- Scatola corrente.
- Tasso di crescita.
- Principali rischi (ad, fornitore, piattaforma).

Genera:
1) 3 livelli di fondo (1 mese, 3 mesi, 6 mesi) e obiettivo per livello.
2) strategia di contributo settimanale / mensile.
3) Regole d'uso (quando usato e come sostituire).
4) Dove salvarlo (opzioni generali) e perché.
5) Piano di 90 giorni per avviarlo.`,
  thumbnail: ""
},

{
  id: "finoth-018",
  title: "Piano di miglioramento del margine: 12 leve con impatto stimato",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Lista condivisa per aumentare l'utilità senza solo fare affidamento sulla vendita di più.",
  prompt: `Agisce come consulente economico.

Ingressi:
- Prodotto / servizio e prezzo.
- Costi principali.
- Canale di acquisizione.
- Struttura dell'attrezzatura.
- Problema: margine basso / alto CAC / molti rimborsi.

Genera:
1) 12 leve (prezzo, fasci, costi, churn, upsell, ecc.).
2) Per ogni leva: difficoltà (basso / medio / alto) e impatto (basso / medio / alto).
3) Piano di attuazione in 4 settimane (priorità).
4) Metrico per misurare se ha funzionato.
5) Rischi e come mitigarli.`,
  thumbnail: ""
},

{
  id: "finoth-019",
  title: "Dashboard finanziario in Nozione / Fogli: progettazione di schede minime",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Una semplice tavola con KPis essenziale per vedere la salute aziendale ogni giorno.",
  prompt: `Agisce come analista finanziario della BI.

Ingressi:
- Modello aziendale (servizio, infoproduct, SaaS, e-commerce).
- Fonti di dati (Strip / PayPal / Bank / Shopify).
- KPis già misurino (se c'è).
- Frequenza di revisione.

Genera:
1) KPis core (5-8) secondo modello.
2) Struttura del bordo (sezioni, viste, filtri).
3) Campi e definizioni per evitare confusione.
4) Rituals: recensione giornaliera / settimana / mese.
5) versione "minimum viable" (un foglio) e versione "pro" (pensione completa).`,
  thumbnail: ""
},

{
  id: "finoth-020",
  title: "Come preparare una 'chiusura mensile' come azienda (anche se solo tu)",
  area: "Finanza e contabilità",
  category: "Altri",
  summary:
  "Routine standard per chiudere il mese: conciliazione, relazione, decisioni.",
  prompt: `Agisce come controllore aziendale.

Ingressi:
- Numero di conti / carte.
- Nessuna fonte di reddito.
- Volume di transazione.
- No. Se ho inventario / dipendenti.

Genera:
1) Chiusura mensile passo dopo passo (ordine esatto).
2) Tempo stimato per blocco e come ridurlo.
3) Elenco di controllo di consegna (reporti e prove).
4) Questioni di gestione: decisioni che devo prendere con la chiusura.
5) modello "Closing report" con conclusioni e compiti.`,
  thumbnail: ""
}];