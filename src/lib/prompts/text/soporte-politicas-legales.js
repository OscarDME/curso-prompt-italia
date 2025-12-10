// src/lib/prompts/text/soporte-politicas-legales.js

export const textPromptsSoportePoliticasLegales = [
{
  id: "sop-pol-001",
  title: "Politica di rimborso (digitale): chiara, giusta e facile da implementare (con esempi)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Esso definisce una politica di rimborso per prodotto digitale con regole, eccezioni e esempi reali.",
  prompt: `Business: [tipo di business]
Prodotto digitale: [corso / modelli / SaaS / abbonamento]
Paese/mercato principale: []
Canali di vendita: [web / Strip / Hotmart / ecc.]
Condizioni attuali (se presenti): []

Creare una politica di rimborso completa (elenco web e Termini) con:
1) Definizioni: acquisto, accesso, consegna, consumo, test, rinnovo.
2) Ammissibilità: cosa si qualifica e cosa non (per categoria).
3) Limiti di tempo: finestra di rimborso per tipo di prodotto (corso, SaaS, adesione).
4) Prove: cosa dobbiamo elaborare (evitare l'attrito).
5) Eccezioni: frode, abuso, chargeback, conti multipli.
6) Processo: come richiedere, tempi di risposta, metodo di ritorno.
7) Esempi (minimo 8) "se si passa X → applicare Y."
8) Astratto in 6 "versione semplice" proiettili per il supporto.
9) Controllo agente interno (10 passi) per decidere.
10) Modelli di risposta: approvato / negato / grigio caso.`,
  thumbnail: ""
},
{
  id: "sop-pol-002",
  title: "Politica di cancellazione e rinnovo (abbonamenti): anti-confusione e anti-ricarica",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire la cancellazione, ristrutturazioni, prorazioni e ciò che accade per accedere.",
  prompt: `Prodotto: [SaaS / membership]
Ciclo: [mese / annuale]
Test: [sì / no]
Prorated: [sì / no]
Paese: []

Esso definisce una politica globale che comprende:
1) Come funziona il rinnovo automatico (lingua semplice).
2) Come annullare (passi per piattaforma) e ciò che l'utente conferma.
3) Che cosa succede per accedere (immediato vs fine del ciclo).
4) Rimborso in ristrutturazione: regole chiare per caso.
5) Cambio di piano: aggiornamento / download, quando applicato, ordinazione.
6) Scompenso non corretto: reattribuzioni, sospensioni, notifiche.
7) Prevenzione della confusione: 10 frasi "chiare" per UX / checkout.
8) Mini FAQ (12 domande) per i clienti.
9) Macros di supporto (approvazione / negazione / spiegazione) con tono umano.`,
  thumbnail: ""
},
{
  id: "sop-pol-003",
  title: "Politica comunitaria/adesione (conduzione, sanzioni, ricorso)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Regole di condotta: ciò che è permesso, ciò che non è, livelli di punizione e processo di appello.",
  prompt: `Piattaforma: [Discord / forum / comunità privata]
Tipo di udito: []
Rischi: [spam / molestie / truffe / NSFW]
Moderazione: [attrezzatura / strumenti]

Disegna un AUP completo con:
1) Principi (3-5) di coesistenza.
2) condotta compromessa (elenco granulare per categoria).
3) Contenuto fornito e responsabilità dell'utente.
4) Livelli di azione: avvertimento → muto → divieto temporaneo → divieto permanente.
5) Processo di reporting: come segnalare, quali informazioni includere, tempi.
6) Processo di ricorso: termini, criteri, decisione finale.
7) Privacy: cosa è condiviso e cosa non nei casi.
8) Macros per moderatori (10) per avvertire / chiudere / banear con rispetto.
9) Pagina "breve versione" in 8 pallottole per l'imbarco.`,
  thumbnail: ""
},
{
  id: "sop-pol-004",
  title: "Informativa sulla privacy (riepilogo chiaro) + testi per il consenso e i cookie",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Crea un riassunto comprensibile della privacy e dei testi di consenso per banner e moduli.",
  prompt: `Tipo di attività: []
Dati raccolti: [email, nome, pagamenti, analisi, ecc.]
Strumenti: [GA, Meta Pixel, Stripe, CRM]
Regioni: [UE / Stati Uniti / MX / LatAm]

Genera:
1) "Riepilogo della privacy" in lingua semplice (max 350 parole).
2) Tabella delle categorie di dati:
- quello che raccogliamo
- per cosa?
- base giuridica (se applicabile)
- ritenzione
3) Testi consenti:
- checkbox newsletter
- Termini di checkbox
- consenso marketing
4) Cookie banner copia (3 versioni: breve / medio / lungo).
5) FAQ privacy (10).
6) Supporto macro per applicazioni: accesso, correzione, cancellato (DSAR).`,
  thumbnail: ""
},
{
  id: "sop-pol-005",
  title: "Politica di garanzia e restituzione (prodotto fisico): limiti di tempo, stato, logistica e eccezioni",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire i ritorni fisici con criteri di stato, imballaggio, spedizioni e rimborsi.",
  prompt: `Prodotto fisico: []
Paese di spedizione: []
Scadenza per il ritorno: []
Chi paga la spedizione di ritorno: [cliente / società / dipende]
Condizioni di stato: [nuovo / nessun uso / ecc.]

Esso definisce la politica con:
1) Che cosa può essere restituito e perché (defetti, cambiamento di opinione, dimensione, ecc.).
2) Windows per tipo di ritorno.
3) Stato e imballaggio del prodotto (criteri oggettivi).
4) processo RMA: passi, tag, indirizzo, monitoraggio.
(5) Ispezione e risoluzione: rimborso / cambio / credito.
6) Eccezioni (igiene, personalizzata, perimetrale).
(7) Esempi: 10 casi e decisioni comuni.
8) Supporto Macros: chiedere prove, approvare, negare, "grande caso".`,
  thumbnail: ""
},

{
  id: "sop-pol-006",
  title: "Termini e condizioni (sommario operativo) per corsi digitali",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Include licenze, accesso, proprietà intellettuale, limiti e condotta studentesca.",
  prompt: `[]
Accesso: [vita / 12 mesi]
Materiale monouso: [sì / no]
Comunità inclusa: [sì / no]
Paese: []

Crea un riepilogo operativo di T & C con:
1) Licenza d'uso (personale / non trasferibile) e limiti.
2) Proibizioni: condivisione delle credenziali, rivendita, scraping.
3) Accesso: ciò che include, ciò che non include, modifiche dei contenuti.
(4) Proprietà intellettuale: marchi, materiali, registrazioni.
5) Condotto: coesistenza comunitaria, sanzioni.
6) Pagamenti e rimborsi: come è regolato (senza contraddizioni).
7) Disclaimer (risultati non garantiti) in lingua chiara.
8) Mini FAQ (10) e supporto macro (8).`,
  thumbnail: ""
},
{
  id: "sop-pol-007",
  title: "Limitazione della clausola di responsabilità (spiegata per gli esseri umani) + versione legale",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Due versioni: linguaggio semplice per web e versione formale per T & C.",
  prompt: `Affari: []
Rischi: [finanziario / salute / tecnologia / consulenza]
Giurisdizione: []

Progetto:
1) Versione semplice (120-180 parole) spiegando:
- Abbiamo coperto.
- Non copriamo.
- limiti ragionevoli
2) Versione formale (T & C) più completa.
3) 6 esempi di interpretazione (casi) per sostenere si capisce.
4) 8 frasi proibite a sostegno che potrebbero "mettere senso di colpa" + alternative sicure.`,
  thumbnail: ""
},
{
  id: "sop-pol-008",
  title: "Politica antifrode e anti-abuso: rimborso, conti multipli, chargeback, abuso",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire segni, soglie, azioni e comunicazione con il cliente non caricato.",
  prompt: `Uscita: []
Segni noti di abuso: []
Strumenti: [Stripe Radar, logs, ecc.]

Crea:
1) Definizioni: frode vs abuso vs errore.
2) Segni e soglie (elenco di 20) con gravità.
3) Azioni per gravità:
- richiesta di verifica
- accesso limitato
- Suspend
- negare il rimborso
4) Modelli di comunicazione:
- domanda di verifica (non addebitata)
- sospensione temporanea
- decisione finale
5) Controllo interno degli agenti (12).
6) Registrazione interna (campi / tag) e escalation legale.`,
  thumbnail: ""
},
{
  id: "sop-pol-009",
  title: "Guida legale per il supporto: come scusarsi e come NON (evitare ammissioni)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Bottiglie sicure, struttura di scuse e linee rosse per agenti.",
  prompt: `Tipo di attività: []
Rischi: [basso / alto]
Canali: [chat / email]

Creare una guida interna:
1) Principi di comunicazione sicura (7).
2) Mi scusi in 5 passi (nessuna responsabilità legale consentita).
3) 25 frasi sicure (per situazione).
4) 20 frasi pericolose + sostituzione raccomandata.
5) Quando scalare al legale (matrice delle decisioni).
6) Modello di nota interna quando c'è rischio legale.`,
  thumbnail: ""
},
{
  id: "sop-pol-010",
  title: "Politica dei cambi di prezzo: comunicazione, nonni, comunicazioni e eccezioni",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire come i cambiamenti di prezzo sono annunciati e quali diritti ha il cliente.",
  prompt: `Prodotto: [SaaS / membership]
Frequenza dei cambiamenti: []
Nonno: [sì / no / per segmenti]
Avviso precedente: [giorni]
Paese: []

Essa definisce una politica con:
1) Principio: perché cambiano i prezzi (lingua umana).
2) Avvertenza: canali, tempi, conferma.
3) Che cosa succede ai piani esistenti (migrazione / nonno).
4) Opzioni del cliente: scaricare / cancellare / rinnovare annualmente prima.
5) Casi speciali: promozioni, coupon, impresa.
6) FAQ (12).
7) Macros de support (10) per obiezioni dure.`,
  thumbnail: ""
},

{
  id: "sop-pol-011",
  title: "Politica di proprietà intellettuale: licenza, usi consentiti e vietati (digitali)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Evitare la rivendita e perdite: licenza personale, limiti, sanzioni e prove.",
  prompt: `Tipo di contenuto: [corso / modelli / suggerimenti / video]
Rischi: [pirateria / rivendita]
Accesso: []

Progetto:
(1) Licenza (personale, non trasferibile) con esempi.
2) Uso consentito (5-8) e vietato (10-15).
(3) Misure contro la non conformità:
- Avvertenze.
- revoca
- azioni legali (se applicabili)
4) Processo di relazione di filtrazione.
5) Supporto macro:
- avvertimento
- chiusura per non conformità
- domanda di ritiro`,
  thumbnail: ""
},
{
  id: "sop-pol-012",
  title: "Informativa sulla privacy (NDA light) per la consulenza / servizi",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Semplice modello NDA e spiegazione per i clienti non legali.",
  prompt: `Servizio: [consulente / agenzia / sviluppo]
Informazioni sensibili: []
Durata: []
Giurisdizione: []

Crea:
1) luce NDA (sommario contrattuale) con:
- definizioni
- obblighi
- eccezioni
- durata
- ritorno / cancellazione
2) Versione semplice per spiegare al cliente (120-180 parole).
3) Controllo interno prima della condivisione dei documenti.
4) E-mail modello per inviare NDA e firma ordine.`,
  thumbnail: ""
},
{
  id: "sop-pol-013",
  title: "Politica e conservazione dei dati: quanto salviamo, perché e come cancelliamo",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire la ritenzione per categorie e il processo interno di cancellazione.",
  prompt: `Dati: [account, pagamenti, biglietti, analisi]
Strumenti: [CRM, Helpdesk, Stripe]
Regione: []

Genera:
1. Matrice di conservazione per tipo di dati:
- durata
- ragione
- sistema dove vive
2) Processo interno di cancellazione / anonimo:
- passi
- responsabile
- verifica
3) Comunicazione all'utente:
- modello "di conferma di cancellazione"
4) FAQ facile (10) per il supporto.`,
  thumbnail: ""
},
{
  id: "sop-pol-014",
  title: "Politica giovanile: accesso, consenso, restrizione e sostegno",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definisce regole chiare per i minori (registrazione, shopping, comunità).",
  prompt: `Tipo di prodotto: []
Mercato: []
Età minima desiderata: []

Progetto:
1) Regole di accesso (età minima e verifica se applicabile).
2) consenso genitoriale (come e quando).
3) Comunità / restrizioni di contenuto.
4) Processo di supporto se si rilevano minori:
- conto di pausa
- richiesta conferma
- rimborso se applicabile
5) Supporto Macros (8) con un tono rispettoso.`,
  thumbnail: ""
},
{
  id: "sop-pol-015",
  title: "Cookie e politica di tracciamento: versione legale + versione umana + preferenze",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Creare testi per banner cookie, centro di preferenza e supporto.",
  prompt: `Strumenti: [GA, Meta, Hotjar, ecc.]
Paesi: [EU / LatAm]
Cookies: [necessario / analitico / marketing]

Genera:
1) spiegazione umana (200-300 parole).
(2) Sezione giuridica più completa per la politica.
3) Testi per:
- banner (accettare / rifiutare / personalizzare)
- centro di preferenze (descrizioni per categoria)
4) Risposte di sostegno (6) a dubbi frequenti.`,
  thumbnail: ""
},

{
  id: "sop-pol-016",
  title: "Modelli DSAR: accesso, portabilità, correzione e cancellazione dei dati (passo per passo)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Procedura per richieste di privacy: identità, limiti di tempo, esecuzione e conferma.",
  prompt: `Regione: []
Helpdesk / CRM: []
Tempo di destinazione: []

Crea:
1) Processo interno DSAR:
- verifica dell'identità (metodi consentiti)
- ricerca di sistema (checklist)
- estrazione / portabilità
- correzione
- cancellato / anonimo
2) Modelli utente:
- conferma del ricevimento
- richiesta di verifica
- consegna dei dati
- conferma della cancellazione
3) Matrice di eccezioni (quando non tutti possono essere eliminati) in lingua semplice.`,
  thumbnail: ""
},
{
  id: "sop-pol-017",
  title: "Politica dei contenuti generati dall'utente (UGC): licenze, moderazione e rimozione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire la licenza UGC, i diritti utente e come moderare / rimuovere i contenuti.",
  prompt: `Piattaforma: [comunità / app]
Tipo UGC: [post, commenti, file]
Moderazione: []

Progetto:
1) Diritti dell'utente (proprietà) vs licenza di piattaforma (uso).
2) Contenuto fornito (categorie).
3) Processo di moderazione e rimozione:
- relazioni
- tempi
- appello
(4) Modelli:
- avviso di rimozione
- avviso
- conferma del ricorso`,
  thumbnail: ""
},
{
  id: "sop-pol-018",
  title: "Politica di garanzia dei risultati (scarico): nessun fumo, chiaro e giusto",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Creare disclaimer onesti per corsi / consulenza senza suonare aggressivo.",
  prompt: `Offerta: [corso / consulenza]
Promessi di marketing attuali: []
Rischio: [alto / basso]

Genera:
1) Scarico "umano" (120-180 parole) che:
- non promette risultati
- spiega le variabili
- sia empatico.
2) Versione formale per T & C
3) 8 esempi di "cosa diciamo" nel marketing vs "cosa non diciamo".
4) Supporto Macro per i clienti che richiedono il risultato / rimborso per le aspettative.`,
  thumbnail: ""
},
{
  id: "sop-pol-019",
  title: "Politica di prestito / credenziali condivise: rilevamento, misure e comunicazione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire l'uso personale e come agire in collaborazione senza combattere con il cliente.",
  prompt: `Prodotto: [corso / SaaS]
Regola: [1 utente / X dispositivi]
Segni: [PI, sessioni, ecc.]

Crea:
1) Regola chiara (versione utente).
(2) Regola formale (T & C).
3) Processo di esecuzione:
- avvertimento
- limitazione
- sospensione
4) Modelli di supporto:
- primo avviso
- secondo avviso
- azione finale
5) Opzioni del cliente (aggiornamento, piano di squadra, ecc.).`,
  thumbnail: ""
},
{
  id: "sop-pol-020",
  title: "Politica di promozione e coupon: condizioni, scadenza, combinazioni e controversie",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Evitare guerre coupon: definire regole e risposte per il supporto.",
  prompt: `Promessi tipici: []
regole desiderate: [non-combinabile, 1 per conto, ecc.]

Progetto:
1) Condizioni di utilizzo di coupon / promozioni.
2) Assegnazione e disponibilità.
3) Errori comuni e come risolvere:
- coupon non si applica
- coupon vinto
- coupon già utilizzato
- prezzo cambiato
4) Supporto macro (10) per ogni caso con alternative.`,
  thumbnail: ""
},

{
  id: "sop-pol-021",
  title: "Politica di conformità: non-pagamenti, sospensioni, reattivi e riattivazione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire il ciclo di raccolta fallito e la sospensione senza sorprendere l'utente.",
  prompt: `Prodotto: [SaaS / membership]
[]
Sospensione: [giorno X]
Notifiche: [email / in-app]

Genera:
1) Politica: programma (giorno 0, 1, 3, 7...).
2) Testi di notifica per fase (4-6 messaggi).
3) Che cosa succede ai dati / accesso durante la sospensione.
(4) Processo di riattivazione.
5) Macros de support y objeres (10).`,
  thumbnail: ""
},
{
  id: "sop-pol-022",
  title: "Politica di sostegno (SLA): priorità P1-P4, tempi e canali",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire la portata, le priorità e i tempi di sostegno per evitare aspettative irrealistiche.",
  prompt: `Canali: [email / chat / WhatsApp]
[]
Attrezzature: []
Clienti VIP: [Si]

Progetto:
1) Ambito: che copre il supporto e ciò che non lo fa.
2) Priorità P1-P4 con esempi chiari.
3) SLA per priorità e per piano.
(4) Processo di scala.
5) Politica di emergenza e di manutenzione.
6) Riepilogo pubblico (8 proiettili) + guida interna per gli agenti.`,
  thumbnail: ""
},
{
  id: "sop-pol-023",
  title: "Politica di accessibilità: impegni, sostegno e miglioramenti (versione umana)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Impegno accessibile: come chiedere aiuto, come affrontare le domande e le scadenze.",
  prompt: `Prodotto: [web / app]
[]
Risorse: [equipment / limited]

Crea:
(1) Dichiarazione di accessibilità (umano) con impegni realistici.
2) Canale per segnalare problemi + quali informazioni chiedere.
3) Processo interno: valutazione → correzione → comunicazione.
4) FAQ (8) e supporto macro (6).`,
  thumbnail: ""
},
{
  id: "sop-pol-024",
  title: "Politica marittima internazionale: dogane, tasse, tempi e responsabilità",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Evita i conflitti: definisce le responsabilità doganali e come informare il cliente.",
  prompt: `Paesi di destinazione: []
Corriere: []
Incoterms (se applicabile): []

Progetto:
1) Tempo e variazioni stimate realistiche.
2) Dogane e tasse: chi paga e come viene segnalato.
3) Che cosa succede se il pacchetto viene mantenuto o restituito.
4) Processo di richiesta del corriere.
5) Macros de support (10) per i casi tipici.`,
  thumbnail: ""
},
{
  id: "sop-pol-025",
  title: "Politica antispam e comunicazioni: frequenza, opt-out e preferenze",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Testo per newsletter / marketing: opt-out, preferenze e gestione dei reclami.",
  prompt: `Canali: [email / WhatsApp / SMS]
Tipo di messaggi: [marketing / operativo]
Impostazioni: [sì / no]

Crea:
(1) Politica delle comunicazioni (umane) con:
- quello che abbiamo mandato
- frequenza
- come scaricare
2) Testo per email footer.
3) Supporto macro (8) per:
- "Non scrivermi".
- "Sono andata via e vado avanti."
- "Non mi sono mai iscritto".
4) Processo di soppressione interna (elenco di controllo).`,
  thumbnail: ""
},

{
  id: "sop-pol-026",
  title: "Modelli di supporto legale: approvato / negato / grigio caso (tono umano + sicuro)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Macro pack per casi con rischio legale: chiarezza senza ammissione.",
  prompt: `Oggetto: [rimborso / chargeback / violazione / privacy]
[]

Crea un pacchetto con:
1) modello "approvato" (2 versioni).
2) modello "negato" con alternative (2 versioni).
3) "grande caso: ordine info" modello (2 versioni).
4) 12 frasi sicure e 12 frasi pericolose da evitare.
5. sezione "Nota interna" per gli agenti: cosa registrare e come.`,
  thumbnail: ""
},
{
  id: "sop-pol-027",
  title: "Politica di disputa e risoluzione: mediazione, arbitrato (se applicabile) e contatto",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Come gestire i conflitti: arrampicata, contatto formale e passi ordinari.",
  prompt: `Giurisdizione: []
Canale legale: [email]
Tipo di attività: []

Progetto:
1) Processo formale di rivendicazione (steps).
2) Limiti di tempo per la risposta.
3) Quali informazioni sono richieste.
4) Come è documentato internamente.
5) Sommario per il sostegno (cosa dire e cosa non dire).
6) Modelli per:
- ricevimento
- richiesta di informazioni
- proposta di risoluzione`,
  thumbnail: ""
},
{
  id: "sop-pol-028",
  title: "Politica di prova e di prova: ciò che include, limiti, conversione e rimborso",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire prove libere senza sorprese: limiti e conversione trasparente.",
  prompt: `Prova: [7 / 14 / 30 giorni]
Richiesta carta: [sì / no]
Limiti: [funzioni / uso]
Conversione: [auto / manuale]

Progetto:
1) Politica di prova (umano + chiaro).
2) Checkout e messaggi e-mail:
- inizio di prova
- promemoria prima della conversione
- conferma della conversione
3) Rimborso relativo alla prova.
4) FAQ (10) e supporto macro (8).`,
  thumbnail: ""
},
{
  id: "sop-pol-029",
  title: "Politica di cambio servizio: manutenzione, funzionalità e deprecazione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Come comunicare i cambiamenti: avvisi, alternative e supporto senza promettere roadmap.",
  prompt: `Uscita: []
Variazioni tipiche: []
Canali di avvertimento: [email / in-app / stato]

Crea:
1) Politica dei cambiamenti con:
- manutenzione programmata
- modifiche delle caratteristiche
- smaltimento / deprecazioni
2) Avvertenze di modello (3):
- annuncio
- promemoria
- vicino
3) FAQ (8) e macro (8) per obiezioni.`,
  thumbnail: ""
},
{
  id: "sop-pol-030",
  title: "Politica di utilizzo dei contenuti IA e generati: responsabilità e limiti (per i suggerimenti / corsi IA)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire le responsabilità per le uscite IA, i diritti e le precauzioni.",
  prompt: `Prodotto: [Prompti / corso IA / SaaS]
Casi di utilizzo sensibili: [salute / finanza / legale]
Giurisdizione: []

Progetto:
1) Scarico su uscite (non consulenza professionale).
2) Responsabilità dell'utente: verifica, conformità, copyright.
3) Proibizioni: uso illegale, soppiantamento, ecc.
(4) Guida alla buona pratica (10).
5) FAQ (10) e supporto macro (8).`,
  thumbnail: ""
},

{
  id: "sop-pol-031",
  title: "Politica di rimozione degli account: accesso, dati, fatturazione e effetti successivi",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Chiudere bene: ciò che viene cancellato, ciò che è conservato e perché (retenzione).",
  prompt: `Uscita: []
Regione: []
Sistemi: [CRM / helpdesk / Stripe]

Crea:
(1) Politica di eliminazione:
- da cancellare
- che è anonimo
- ciò che è conservato e per quanto (ragione)
2) Processo utente (steps).
3) Modelli di supporto:
- conferma ricevuta
- richiesta di verifica
- conferma finale
4) FAQ (8).`,
  thumbnail: ""
},
{
  id: "sop-pol-032",
  title: "Politica di backup e recupero: limiti, tempi e aspettative (SaaS)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire se ci sono i backup, quanto tempo, e quali recuperi possono essere fatti.",
  prompt: `Prodotto SaaS: []
Backup: [sì / no]
Retention backups: []
Restauro: [sì / no / costo]

Progetto:
1) Politica di backup (chiaro, senza promettere l'impossibile).
2) Che cosa può essere recuperato e cosa no.
3) Tempi e processi stimati.
4) Supporto (6) per applicazioni di ripristino.
5) Nota interna: quando approvare il ripristino e cosa registrare.`,
  thumbnail: ""
},
{
  id: "sop-pol-033",
  title: "Politica di sostegno all'integrazione di terzi: limiti e responsabilità",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire ciò che si sta in Zapier / Meta / Google / ecc e dove la vostra responsabilità termina.",
  prompt: `Integrazioni: [list]
Supporto che si dà: []
Sostenere che non date: []

Crea:
1) Politica di integrazione:
- portata (cosa è)
- fuori dalla portata (che non è)
2) Controllo diagnostico prima dell'arrampicata.
3) Supporto macro:
- "Sembra il terzo".
- "Ho bisogno di queste catture".
- "qui è il mondo."
4) FAQ (10).`,
  thumbnail: ""
},
{
  id: "sop-pol-034",
  title: "Politica attuale dell'evento e del workshop: cancellazione, assistenza e rimborso",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Regole chiare per gli eventi: cambi di nome, no-show, forza maggiore.",
  prompt: `Evento: []
Data:
Capacità: []
Rimborso:

Progetto:
1) Cancellazione da parte del cliente (finestre e percentuali se applicabile).
2) Cancellazione da parte dell'organizzatore (forza maggiore).
(3) Trasferimento di ingresso ad un'altra persona.
4) Nessun spettacolo e ritardi.
5) Data / luogo modifiche.
6) Macros de support (10) per casi reali.`,
  thumbnail: ""
},
{
  id: "sop-pol-035",
  title: "Politica di affiliazione: termini, pagamenti, frode e cessazione (sommario operativo)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Regole di struttura per i membri: attribuzione, pagamenti, rendimenti e abuso.",
  prompt: `Programma di partecipazione: []
Commissione []
Finestra di allocazione: []
Pagamento minimo: []
[]

Crea:
1) Termini operativi:
- attribuzione
- pagamenti
- restituzioni / addebiti
- frode e autoacquisto
- terminazione
2) FAQ affiliata (12).
3) Supporto Macros (10) per controversie di commissione.`,
  thumbnail: ""
},

{
  id: "sop-pol-036",
  title: "Politica di supporto per contenuti sensibili: salute / finanza / legale (limitazioni e scaling)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Limiti di copertura: non dare consigli professionali; guide di arrampicata e modelli.",
  prompt: `Tema sensibile: [salute / finanza / legale]
Prodotto / corso: []
Mercati: []

Crea:
(1) Politica delle limitazioni (umane).
2) Messaggi di supporto per:
- richiesta di consulenza professionale
- insistenza del cliente
3) Quando salire o rifiutare.
4) Risorse alternative suggerite (non specifiche).
5) Nota interna: frasi sicure e proibite.`,
  thumbnail: ""
},
{
  id: "sop-pol-037",
  title: "Politica dei contenuti e del copyright: DMCA / takedowns (processo e modelli)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Processo di diritto d'autore: ricezione, verifica, azione e appello.",
  prompt: `Piattaforma: [web / community]
Canale legale: [email]
Paese: []

Genera:
1) processo di rimozione:
- che il reclamo dovrebbe includere
- tempi
- azioni
(2) Modelli:
- ricevimento
- richiesta di informazioni mancanti
- conferma del recesso
- avviso all'utente interessato
3) Processo di notificazione (se applicabile) a livello generale.
4) Elenco di controllo interno.`,
  thumbnail: ""
},
{
  id: "sop-pol-038",
  title: "Politica di ritorno per \"prodotto non rinnovato\": criteri, ricerca e risoluzione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire quando si ripaga, quando si ritorna e come si indaga il corriere.",
  prompt: `Corriere: []
Stato: [consegnato / in attesa]
Test di consegna: [sì / no]
Zona di rischio: [sì / no]

Progetto:
1) Criteri di indagine (limiti di tempo, prove).
2) Cosa chiedere al cliente (minimo).
3) Processo con corriere (passi).
4) Risoluzione dello scenario:
- imbarco
- rimborso
- Attendere con aggiornamento
5) Supporto Macros (10).`,
  thumbnail: ""
},
{
  id: "sop-pol-039",
  title: "Politica di rimborso degli errori del cliente: acquisti duplicati, piano sbagliato, sbagliato",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Regole per i casi umani: acquisto errato e come risolvere senza aprire abuso.",
  prompt: `Uscita: []
Casi comuni: [piano complicato / sbagliato]
finestra "grace": [ore / giorni]

Crea:
1) politica "grazia" (se applicabile) con limiti.
2) Criteri di approvazione:
- tempo di acquisto
- uso / consumo
- storia
3) Alternative: cambiamento di piano, credito, supporto.
4) Supporto (caso approvato / negato / grigio).
5) Controllo interno anti-abuso.`,
  thumbnail: ""
},
{
  id: "sop-pol-040",
  title: "Politica di rimborso dei corsi: progressi raggiunti, moduli visti, download e eccezioni",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Progetta una politica equa basata sul consumo reale senza essere aggressivo.",
  prompt: `[]
Piattaforma []
I progressi possono essere misurati: [Si]
Materiale monouso: [sì / no]

Progetto:
(1) Criteri di consumo:
-% visto
- download
- tempo di acquisto
(2) Eccezioni ragionevoli.
3) Processo di applicazione.
4) Macros de support (12).
5) Pagina "semplice riassunto" per il checkout.`,
  thumbnail: ""
},

{
  id: "sop-pol-041",
  title: "Pacchetto clausola di controllo: termini, rimborsi, abbonamento, licenza (breve copia)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Testi brevi per il checkout che riducono le dispute e la confusione.",
  prompt: `Uscita: []
Modello: [1 pagamento / abbonamento]
Rimborso: [sì / no / condizioni]
Licenza: [personale / non trasferibile]

Genera brevi copie per:
1) (1-2 linee).
2) casella di rimborso (1-2 linee) chiaro.
3) Scatola di rinnovo automatico (se applicabile) (1-2 linee).
4) Scatola di licenza / uso (1-2 linee).
5) Nota anti-ritorno (umano, non minaccioso).
6) 10 varianti per elemento (per A / B).`,
  thumbnail: ""
},
{
  id: "sop-pol-042",
  title: "Matrice di scalazione giuridica interna: quali casi dovrebbero andare a legale e come documentarli",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Guida per gli agenti: soglie di rischio, checklist e modelli interni.",
  prompt: `Tipo di attività: []
Rischi:

Crea:
1) Matrice di scala (tabella logica) con:
- tipo di caso
- gravità
- azione immediata
- Chi decide?
2) Elenco di controllo della documentazione (15 campi).
(3) modello di nota interna "rischio legale".
4) Bottiglie di sostegno sicure durante l'indagine (10).`,
  thumbnail: ""
},
{
  id: "sop-pol-043",
  title: "Politica di registrazione e consenso delle chiamate: testi per regione e canale",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Include script di avviso, alternative e come registrare il consenso.",
  prompt: `Canali: [call / zoom]
Regione: []
Scopo: [qualità / sicurezza]

Genera:
1) Registrare lo script di avviso (3 toni).
2) Cosa fare se il cliente non accetta:
- alternativa (non record / email)
3) Come registrare il consenso internamente (campi).
(4) Testo della politica pubblica (umano).
5) FAQ (8) per i clienti.`,
  thumbnail: ""
},
{
  id: "sop-pol-044",
  title: "Politica di accesso condiviso nei piani di squadra: ruoli, limiti e responsabilità",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire ruoli, amministratori, responsabilità dell'utente e sicurezza.",
  prompt: `Prodotto: [SaaS]
Squadra di piano: [sì / no]
Roles: [admin / membro / visualizzatore]

Progetto:
1) Definizione di ruoli e autorizzazioni.
2) responsabilità dell'amministratore per l'accesso.
3) Limiti di dispositivo / sessione.
4) Alta / basso processo utente.
5) Supporto Macros (10) per ruoli e conflitti di accesso.`,
  thumbnail: ""
},
{
  id: "sop-pol-045",
  title: "Politica di uso equo nei piani illimitati: limiti ragionevoli e l'applicazione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Protegge l'infrastruttura indecepita: definisce \"illimitata\" con un uso equo.",
  prompt: `"Unlimited 'plan: []
Risorse critiche: [API / download / query]
Segni di abuso: []

Crea:
1) Definizione di uso equo (umano) e formale.
2) Esempi: 10 casi sì e 10 casi no.
3) Processo di applicazione valutato.
4) Supporto non caricato (8).
5) Alternativa: pianificare impresa / aggiornamento.`,
  thumbnail: ""
},

{
  id: "sop-pol-046",
  title: "Politica di restituzione dei danni ai trasporti: prove, limiti di tempo e risoluzione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire quali foto per ordinare, tempi e decisioni (rimborso / rimborso).",
  prompt: `Prodotto fisico: []
Corriere: []
Finestra per segnalare: []

Progetto:
1) Termine ultimo per segnalare danni (e perché).
(2) Evidenza minima:
- foto del pacchetto
- etichette
- prodotto
3) Processo:
- revisione
- risoluzione
- logistica
4) Supporto (10).
(5) Controllo interno antifrode.`,
  thumbnail: ""
},
{
  id: "sop-pol-047",
  title: "Politica di cambiamento di gestione dopo l'acquisto: criteri e limiti",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Evita le perdite: quando puoi cambiare direzione e quali controlli fare.",
  prompt: `Tipo: [fisico]
Stato richiesto: [preparazione / inviato]
Rischio di frode: [alto / basso]

Crea:
1) Politica: quando sì e quando la direzione non è cambiata.
(2) Verifica dell'identità (metodi consentiti).
3) Procedura interna.
4) Supporto (8) per:
- approvato
- negato
- caso grigio`,
  thumbnail: ""
},
{
  id: "sop-pol-048",
  title: "Acquisti regalo: accesso, trasferimenti, rimborsi e controversie",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Regole per l'acquisto di regalo senza caos: chi è il titolare, come trasferire e sostenere.",
  prompt: `Prodotto: [digitale / fisico]
Regalo: [si / no]
Trasferibile: [sì / no]

Progetto:
1) Chi è il titolare dell'acquisto e dell'accesso.
2) Come il regalo viene consegnato e attivato.
3) Rimborso: chi può ordinarlo e quando.
4) Disturbi comuni (8) e risoluzione.
5) Supporto Macros (10).`,
  thumbnail: ""
},
{
  id: "sop-pol-049",
  title: "Politica di comunicazione delle modifiche legali / politiche: comunicazioni, accettazione e registrazione",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Definire come si segnalano gli aggiornamenti dei termini e come l'accettazione è registrata.",
  prompt: `Uscita: []
Canali di avvertimento: [email / in-app]
Accettazione: [clickwrap / sfogliare]

Crea:
1) Politica di aggiornamento:
- quando notificato
- quando entreranno in vigore
2. Testi:
- aggiornamento e-mail
- banner in- app
- modale di accettazione
3) Processo interno:
- versione
- registrazione di accettazione
4) FAQ (8) e supporto macro (6).`,
  thumbnail: ""
},
{
  id: "sop-pol-050",
  title: "\"Summary for support\" kit: convertire le politiche lunghe in regole convertibili (scheat foglio)",
  area: "Supporto clienti & SOP",
  category: "Politica legale",
  summary:
  "Trasforma le politiche in un manuale operativo per gli agenti con decisioni rapide e macro.",
  prompt: `Ecco la vostra politica (o sommario): []
Obiettivo: sostegno rapido e coerente

Genera:
1) Cheat foglio su 1 pagina:
- regole "se passi X → facciamo Y"
- eccezioni
- Scalazioni
2) Albero delle decisioni:
- rimborso
- cancellazioni
- abuso / frode
3) 25 supporto macro: approva / nega / grigio caso / scala.
4) Elenco delle "linee rosse" (10) e frasi sicure (10).
5) Checklist Audit: come garantire che gli attori seguano le politiche.`,
  thumbnail: ""
}];