// src/lib/prompts/text/abogado-legal-contratos.js

export const textPromptsAbogadoLegalContratos = [
{
  id: "legalcontratos-001",
  title: "Master Checklist per scrivere contratto (qualsiasi servizio / prodotto)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Crea una lista completa di clausole, allegati e dati per scrivere un contratto solido.",
  prompt: `Agisce come avvocato aziendale / contrattuale. Ho bisogno di una lista di controllo per scrivere un contratto.

Ingressi:
- Tipo di contratto (servizi, SaaS, consulenza, vendita, licenza, ecc.).
- Giurisdizione / paese (se applicabile).
- Parti (società / individuo) e ruoli.
- Campo di servizio / consegna.
- Prezzo, forma di pagamento, tasse.
- Durata, ristrutturazione, cessazione.
- Principali rischi aziendali (ricarica, IP, dati, ritardi).
- Livello di formalità (semplice / impresa).

Genera:
1) Dati da raccogliere prima di scrivere (20 +).
2) Indice del contratto consigliato (sezioni).
3) Clausole essenziali (spiega lo scopo + rischi se omesso).
4) Clausole opzionali per fase (per proiettili).
5) Allegati tipici (SOW, SLA, DPA, NDA, ecc.) e quando usarli.
(6) Lags comuni / ambiguità e come evitarli.
7) Elenco delle "decisioni commerciali" (che negoziare sì o sì).

Consegna in spagnolo, stile pratico. Non inventare leggi specifiche; il marchio "dipende dalla giurisdizione".`,
  thumbnail: ""
},

{
  id: "legalcontratos-002",
  title: "Contratto di servizio (progetto completo)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Genera una bozza completa con clausole standard pronte a copiare e adattare.",
  prompt: `Agisce come avvocato. Esso stabilisce un contratto per la fornitura di servizi.

Ingressi:
- Parti (nome legale, indirizzo, RFC / ID se applicabile).
- Servizio esatto e consegna.
- Date, pietre miliari, recensioni.
- Tasse (importo, valuta, tasse) e forma di pagamento.
- Politica di scambio (scoppia) e extra.
Confidenzialità (sì / no).
- Proprietà intellettuale (che rimane cosa).
- Responsabilità / limitazione (livello desiderato).
- Giurisdizione e legge applicabile (se noto).

Genera:
Documento con: definizioni, oggetto, portata, obblighi, pagamenti, modifiche, proprietà intellettuale, riservatezza, protezione dei dati (se applicabile), garanzie e reclami, limitazione di responsabilità, cessazione, forza maggiore, notifiche, assegnazione, integrità, firme.

Include i campi dove mancano i dati. Mantenere il tono legale professionale (senza redigere articoli legali).`,
  thumbnail: ""
},

{
  id: "legalcontratos-003",
  title: "Controllo dei contratti: rischi, pregiudizi e punti da negoziare",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Esso esamina un contratto incollato e rileva rischi, clausole abusive e miglioramenti concreti.",
  prompt: `Agisce come avvocato. Faro' un contratto e voglio un audit.

Ingressi:
- Testo del contratto.
- Il mio ruolo (fornitore / cliente).
- No. Ciò che mi riguarda (pagamento, IP, dati, risoluzione, responsabilità).
- Giurisdizione (se conosciuto).

Genera:
1) Riepilogo esecutivo in 5 proiettili.
2) Rischi critici (top 10) con alta / media / bassa gravità e perché.
(3) Regolamento da rinegoziare con proposte alternative di redazione.
4) Ambiguità e lacune (mancanza).
5) Domande chiave per la controparte.
Non dare una consulenza legale definitiva; focalizzarsi sulle migliori pratiche e rischi.`,
  thumbnail: ""
},

{
  id: "legalcontratos-004",
  title: "Proprietà intellettuale (IP): 6 varianti pronte a copiare",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Genera 6 opzioni di clausola IP (assegnazione, licenze, ibrido, ecc.).",
  prompt: `Agisce come avvocato. Ho bisogno di clausole di proprietà intellettuale pronte a copiare.

Ingressi:
- Tipo di lavoro (software, design, contenuto, corso, consulenza).
- Chi paga (cliente) e chi crea (fornitore).
- Materiali preesistenti (sì / no).
- Se il riutilizzo è consentito (sì / no).
- No. Se ci sono sottolicenze / terzi (sì / no).

Genera 6 varianti:
A) Trasferimento totale al cliente.
(B) Esclusiva.
(C) congedo non esclusivo.
D) Ibrido (corpo di fornitura + consegna del cliente).
E) Fornitore modelli + personalizzazione.
F) Joint IP (co-owned) con regole chiare.

Per ogni variante:
- Testo della clausola.
- Pro / Contra per fornitore e cliente.
- Rischi tipici e mitigazione.`,
  thumbnail: ""
},

{
  id: "legalcontratos-005",
  title: "Clausole di pagamento + arretrati + rimborso (basso cliente / corsi)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Struttura dei termini di pagamento, non-rimborso, chargeback e controversie per i prodotti digitali.",
  prompt: `Agisce come avvocato focalizzato sui prodotti digitali. Essa stabilisce clausole di pagamento e di rimborso.

Ingressi:
- Prodotto (corso, appartenenza, modelli, SaaS).
- Prezzo e modalità (solo / abbonamento / mensile).
- Politica di rimborso (sì / no, limite di tempo).
- Rischio di chargeback (alto / medio / basso).
- Consegna (immediato, modulo, accesso temporaneo).

Genera:
1) Prezzo / pagamento / clausola fiscale (senza tasse di pagamento).
2) Mora / interesse (marcazione "secondo la legge locale").
(3) Politica di rimborso (comprese le eccezioni).
4) Procedura anti-ricarica (supporto prima della controversia).
(5) Sospensione / cessazione per il mancato pagamento.
6) Versione breve di lingua semplice per T & C.`,
  thumbnail: ""
},

{
  id: "legalcontratos-006",
  title: "Limitazioni di responsabilità: 5 livelli (lite → impresa)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Crea versioni di limitazione della responsabilità per rischio e dimensione dell'affare.",
  prompt: `Agisce come avvocato. Ho bisogno di clausole di limitazione della responsabilità.

Ingressi:
- Rol (cliente / fornitore).
- Afraid danno (dati, reputazione, perdita di profitto).
- Biglietto (basso / medio / alto).
- No. Se c'è l'assicurazione (sì / no).
- Se è B2C o B2B.

Genera 5 livelli:
(1) Morbido (esclusione indiretta).
2) moderato (cap per importo pagato in X mesi).
3) Forte (cap sotto + ampie esclusioni).
4) Impresa (cap + carve-out: frode, dolo, IP, dati).
5) prodotto digitale B2C (lingua chiara e ragionevole).

Include: testo + che protegge + rischi + consigli di trading.`,
  thumbnail: ""
},

{
  id: "legalcontratos-007",
  title: "Terminazione: cause, avvertenze, effetti e sopravvivenza",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Progetta un completamento equilibrato, con effetti, ritorno dei materiali e pagamenti in sospeso.",
  prompt: `Agisce come avvocato. Scrivere una sezione completa di completamento.

Ingressi:
- Durata (fisso/indefinito).
- Avvertenza desiderata (giorni).
- Consegna / pietre miliari (sì / no).
- Confidenzialità / IP / dati (sì / no).
- penalità di cancellazione (sì / no).

Genera:
1) Termine per convenienza (con preavviso).
(2) Termine per la non conformità (periodo minimo).
3) terminazione immediata ( cause gravi).
4) Effetti finali (pagamenti, consegnabili, accessi).
5) Clausole di sopravvivenza (confidenzialità, IP, limitazione, ecc.).`,
  thumbnail: ""
},

{
  id: "legalcontratos-008",
  title: "Contratto SaaS: struttura + clausole chiave (SLA, sicurezza, supporto)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Modello struttura e testi chiave per SaaS con un approccio comune al rischio.",
  prompt: `Agisce come avvocato SaaS. Progettare il contratto SaaS.

Ingressi:
- SaaS prodotto e funzione.
- Piani e prezzi.
- Dati trattati (personale / sensibile / no).
- Un bersaglio in tempo.
- Canali di supporto.
- Integrazione di terze parti.

Genera:
1) Indice (Contratto di Master + Allegati).
2) Licenza / uso accettabile / conti.
3) Sicurezza / backup / supporto.
4) SLA (metria, crediti, esclusioni).
5) DPA (roli, sottoprocessori, segnalazione del gap).
6) Ristrutturazione / cancellazione + esportazione di dati.
Non inventare la conformità legale; lasciare i campi [REPLACE].`,
  thumbnail: ""
},

{
  id: "legalcontratos-009",
  title: "NDA (unilaterale o mutuo) + sommario per i non avvocati",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Definisce un NDA completo con definizioni, eccezioni, durata e rimedi.",
  prompt: `Agisce come avvocato. Sta scrivendo un NDA.

Ingressi:
- Tipo (unilaterale / reciproco).
- Scopo della divulgazione.
- Durata della NDA e obbligo.
- Giurisdizione.
- Tipo di informazione (tecnica, commerciale, codice, segreti).

Genera:
- NDA completo con: definizioni, esclusioni, obblighi, ragionevole cura, non licenza, ritorno / distruzione, durata, rimedi, non sollecitazione (opzionale), legge applicabile, firme.
- Versione "Summary in 8 bullet" in lingua semplice.
Include i campi [REPLACING].`,
  thumbnail: ""
},

{
  id: "legalcontratos-010",
  title: "Non concorrenza / non applicazione (approccio ragionevole e defensibile)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Genera varianti ragionevoli (soprattutto non applicative) minimizzando il rischio di nullità.",
  prompt: `Agisce come avvocato. Ho bisogno di clausole di non concorrenza / non applicazione.

Ingressi:
- Rapporto (occupazione / appaltatore / fornitore).
- Industria / attività.
- Territorio (se applicabile).
- Data di destinazione.
- Interessi da proteggere (clienti, dipendenti, segreti).

Genera:
1) Versione consigliata: NO RICHIESTA per clienti e dipendenti.
(2) Versione morbida di non concorrenza (se applicabile) con limiti ragionevoli.
3) Rischi di esecuzione (non comprese le leggi).
4) Alternative: maggiore riservatezza, non uso, non diversione.
5) Elenco di controllo per adattarsi alla giurisdizione.`,
  thumbnail: ""
},

// --- +10 NUEVOS (hasta 20) ---

{
  id: "legalcontratos-011",
  title: "Master Service Agreement (MSA) + Dichiarazione di lavoro (SOW)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Strutturare un MSA riutilizzabile e un SOW per progetto per evitare lo scopo strisciare e contenzioso.",
  prompt: `Agisce come avvocato per i servizi B2B. Progetta uno schema MSA + SOW.

Ingressi:
- Tipo di servizio.
- Frequenza del progetto (una / ricorrente).
- Rischi (delays, dipendenze dei clienti, IP, subappaltatori).
- Modello di pagamento (per ora / fisso / pietre miliari).
- Giurisdizione (se conosciuto).

Genera:
1) Che cosa va nella MSA (condizioni generali riutilizzabili).
2) Che cosa sta succedendo nel SOW (linea, consegnabili, date, accettazione).
3) SOW modello con campi [REPLACING].
4) Cambiare le richieste e la clausola di controllo del campo.
5) Processo di accettazione / rifiuto dei consegnabili.`,
  thumbnail: ""
},

{
  id: "legalcontratos-012",
  title: "Accordo di affiliazione (commissioni, attribuzione, frode, pagamenti)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Crea termini per le affiliate con regole chiare per evitare abusi e controversie di commissione.",
  prompt: `Agisce come avvocato. Scrivere un accordo / termini per i membri.

Ingressi:
- Prodotto (corso, SaaS, fisico).
- Commissione (% o importo), cookie / attribuzione.
- Periodo di pagamento (settimanale / mensile), soglia minima.
- Reimbursement policy / chargebacks.
- Canali consentiti (ad, e-mail, coupon, brand cooking).
- Proibizioni (spam, reclami fuorvianti, incentivi).

Genera:
1) Definizioni chiave.
2) Regole di attribuzione e idoneità delle commissioni.
3) frode e condotta vietata (con esempi).
(4) Pagamenti: programma, ritenzione, modifiche di rimborso.
5) Termine ed effetto (perdita di commissioni fraudolente).
6) Set pronto per incollare in T & C.`,
  thumbnail: ""
},

{
  id: "legalcontratos-013",
  title: "Contratto di licenza (templati, richieste, attività)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Definire una licenza per l'uso per il contenuto digitale senza cedimento IP: limiti, sottolicenze, ridistribuzione.",
  prompt: `Agisce come avvocato di proprietà intellettuale. Imposta un contratto di licenza per i contenuti digitali.

Ingressi:
- Tipo di contenuto (prompti, modelli, PDF, video, immagini).
- Uso consentito (personale, commerciale, interno, rivendita).
- Durata (vita / tempo)
- Territorio (globale / locale).
- No. Se permette la sublicenza (sì / no).
- Proibizioni (redistribuzione, demolizione, condivisione account).

Genera:
(1) Licenza concessa (obiettivo esatto).
(2) Restrizioni e usi proibiti.
3) Attribuzione (se applicabile) e segni.
4) Terminazione per abuso + rimedi.
5) Testo "in lingua semplice" da mostrare nel checkout.`,
  thumbnail: ""
},

{
  id: "legalcontratos-014",
  title: "Termini e condizioni (Termini di Servizio) per web / app",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Outline + draft TOS per piattaforma di corso / SaaS con account, limiti e cancellazioni.",
  prompt: `Agisce come avvocato. Crea Termini e Condizioni (TOS) per un web / app.

Ingressi:
- Tipo (corso, appartenenza, SaaS).
Paese / giurisdizione.
- Politica di rimborso / cancellazione.
- condotta comprovata (condivisione del conto, raschiatura, rivendita).
- Contenuto utente (se presente).
- Pagamenti (Stripe, PayPal) e chargeback.
- Limitazione della responsabilità desiderata.

Genera:
1) Indice e sezioni.
2) Cancellatore completo con [REPLACING] quando i dati mancano.
(3) "uso accessibile dettagliato".
(4) Pagamenti di sezione / rimborsi / cancellazione chiara.
5) Versione breve (sommario) per la pagina di checkout.`,
  thumbnail: ""
},

{
  id: "legalcontratos-015",
  title: "Clausola di compensazione (indennità): 4 varianti",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Compensazione per IP, abuso, terzi e limiti ragionevoli con la procedura di difesa.",
  prompt: `Agisce come avvocato. Esso genera clausole di compensazione con un approccio pratico.

Ingressi:
- Rol (fornitore / cliente).
- Rischio principale: IP, dati, reclami di terzi, non conformità.
- Biglietto (basso / medio / alto).
- No. Se ci sono assicurazioni (sì / no).

Genera 4 varianti:
A) Compensazione solo per violazione IP (fornitore di compensazione).
(B) Mutua per non conformità e rivendicazioni da parte di terzi.
C) Forte per (largo) + come avvicinarlo.
D) Per B2C digitale (ragionevole + semplice).

Include:
- Testo della clausola.
- Procedura: notificazione, controllo della difesa, cooperazione, regolamento.
- Rischi e consigli di negoziazione.`,
  thumbnail: ""
},

{
  id: "legalcontratos-016",
  title: "Forza maggiore + contingenze operative (compresi IA / terzi)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Impostare la forza moderna majeure (fornitori cloud, cadute, blocchi di piattaforma) e ciò che accade ai pagamenti / scadenze.",
  prompt: `Agisce come avvocato. Esso stabilisce una clausola di forza moderna maggiore.

Ingressi:
- Tipo di servizio o prodotto.
- Dipendenze (cloud, API, passerelle, piattaforme).
- No. Se ci sono scadenze critiche.
- No. E i pagamenti durante la contingenza.

Genera:
1) Definizione di forza maggiore con esempi moderni (esclusivi).
(2) Obbligo di mitigazione e reporting.
3) Effetti: sospensione degli obblighi, estensione dei termini.
4) Terminazione se prolungata (X giorni) con effetto.
5) Regole di pagamento / tassa durante la sospensione.`,
  thumbnail: ""
},

{
  id: "legalcontratos-017",
  title: "Clausola di accettazione della consegna (QA, revisioni, criteri)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Evitare \"mai pronto\" con criteri di accettazione, rivedere le finestre e tacito accettazione.",
  prompt: `Agisce come avvocato. Ho bisogno di una sezione di accettazione delle consegne.

Ingressi:
- Tipo di consegna (design, dev, contenuto, corso).
- Numero di giri di recensioni.
- Tempo di revisione (giorni).
- No. Ciò che conta come "difetti" contro "cambio di linea".

Genera:
1) Definizioni (deliverabili, difetto, cambiamento).
2) Processo: consegna → recensione → feedback → correzione.
3) accettazione tacita se non rispondono in X giorni.
4) Limite di revisioni + costo di extra.
5) Cosa succede se il cliente non collabora (dipendenze).`,
  thumbnail: ""
},

{
  id: "legalcontratos-018",
  title: "Protezione dei dati semplificata (DPA) per i fornitori",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Creare un allegato del trattamento dei dati senza inventare la conformità: ruoli, sottoprocessori, lacune.",
  prompt: `Agisce come avvocato. Disegna un DPA semplificato (Data Processing Addendum).

Ingressi:
- Tipo di dati (personale / sensibile / no).
- Roles (responsabile / responsabile o equivalente).
- Sottoprocessori (sì / no, elenco se disponibile).
- Misure generali di sicurezza.
- Tempo di detenzione e cancellazione.

Genera:
1) Finalità e portata del trattamento.
2) ruoli e responsabilità (non comprese le leggi specifiche).
(3) Sottoprocessori: autorizzazione / notifica.
(4) Sicurezza: misure organizzative / tecniche (a livello generale).
(5) Breaches: notifica e cooperazione.
6) Conservazione, restituzione o cancellazione al termine.
Esso include [REEMPLAZING] dove i dati sono mancanti e "dipende dalla giurisdizione" nota.`,
  thumbnail: ""
},

{
  id: "legalcontratos-019",
  title: "Vendita di beni digitali (dominio, sito web, e-mail base)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Strutturare un contratto di vendita e di consegna (scrow, garanzie, non concorrenza, compresi i beni).",
  prompt: `Agisce come avvocato. Voglio una bozza per vendere un asset digitale.

Ingressi:
- Attività (dominio, web, app, account sociali, contenuti).
- No. Che cosa è incluso e che cosa non è (codice, marca, disegni, dati).
- Prezzo e metodo di pagamento (avanzata / scrow / milestones).
- Data di chiusura e consegna.
- No. Le garanzie del venditore (titolo, non violazione, non debito).
- Trasferimenti (DNS, repos, accessi, chiavi, account).
- No. Se c'è un database e un consenso del cliente (se applicabile).

Genera:
1) Elenco di controllo pre-chiusura.
(2) Progetto di contratto con gli allegati patrimoniali.
3) Procedura di trasferimento passo per passo.
(4) Garanzie e limitazioni ragionevoli.
5) Nessuna applicazione / nessuna concorrenza (opzionale e ragionevole).`,
  thumbnail: ""
},

{
  id: "legalcontratos-020",
  title: "Clausola di risoluzione di controversie (escalation, mediazione, arbitrato)",
  area: "Avvocato e legale",
  category: "Contratti",
  summary:
  "Crea un flusso di risoluzione dei conflitti per ridurre le controversie: escalation, limiti di tempo, giurisdizione / forum.",
  prompt: `Agisce come avvocato. Progetta una sezione di risoluzione delle controversie.

Ingressi:
- Rapporto B2B o B2C.
- Paese / giurisdizione (se conosciuto).
- Preferenza: tribunali contro arbitrato.
- Emergenza (misure precauzionali, IP, riservatezza).

Genera:
1) Escalation: negoziazione tra i responsabili (con limiti di tempo).
2) Mediazione (opzionale) e limiti di tempo.
(3) arbitrato o tribunali: forum / lingua / quartier generale [REEMPLAZAR].
(4) Eccezioni per misure urgenti (IP / riservatezza).
5) Regole di costi e tasse (generico, senza redigere leggi).`,
  thumbnail: ""
}];