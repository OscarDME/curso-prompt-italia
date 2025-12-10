// src/lib/prompts/text/soporte-guiones-atencion.js

export const textPromptsSoporteGuionesAtencion = [
{
  id: "sop-atn-001",
  title: "Master guide (multicanal): saluti → diagnosi → soluzione → chiusura",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Script completo per chat / e-mail / chiamata con albero diagnostico, piani A / B / C e checklist agente.",
  prompt: `Canale: [chat / email / chiamata / WhatsApp]
Lingua: []
Tono di marca: [close / neutral / premium]
Prodotto / servizio: []
Situazione: [descrive il problema]
Restrizioni (polizia / SLA): []

Crea un MASTER GUION pronto a copiare / incollare con:
1) Saluto iniziale (3 versioni: standard, empatico, ultra breve).
2) Conferma dell'identità (se applicabile) senza attrito (2 varianti).
3) Diagnosi con albero della domanda:
- 10 domande in ordine, da minore a maggiore sforzo per il cliente
- che segno cerchi in ogni risposta
- quando fermare le domande e passare alla soluzione
4) Parafrasazione e convalida:
- 4 formule per mostrare comprensione senza assumere senso di colpa
5) Soluzione passo-passo:
- Piano A (più probabile) con passi numerati (e cosa dovrebbe vedere il cliente)
- Pianifica B se fallisci (perché puoi fallire / come correggere)
- Pianificare C (scaling) con i dati da raccogliere
(6) Vicino:
- sintesi 2 linee
- azione del cliente e azione del team
- conferma finale (questione semplice)
7) Seguito:
- 2 messaggi se non risposto (24h / 72h)
8) Elenco di controllo interno (12 punti) per il QA e documentazione dei casi.`,
  thumbnail: ""
},
{
  id: "sop-atn-002",
  title: "Decking script: fastidioso cliente (empatia → controllo → soluzione) con limiti",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Decelerazione reale: frasi esatte, limiti, protocolli di insulto e chiusura degli accordi.",
  prompt: `Contesto di rabbia: [recupero / ritardo / bug / scarsa attenzione / attesa]
Canale: [chat / call / email]
Cosa posso offrire: []
Cosa non posso offrire: []
Politiche pertinenti: []

Creare uno script con:
1) Apertura ambasciata (6 varianti per intensità).
2. "Prendi il controllo" senza affrontare:
- 8 frasi per ordinare la conversazione e andare avanti
3) Diagnosi minima:
- 6 domande brevi, una per messaggio
- come dare priorità (urgenza vs impatto)
4) Proposta di soluzione con opzione A / B:
- A: veloce (in giro)
- B: completa (soluzione finale)
- come presentare opzioni per il cliente scegliere
5) Come dire NO:
- 10 modi per negare una richiesta senza suono rigido
- alternative specifiche per ogni NO
6) Se ci sono insulti / minacce:
- protocollo in 4 passi
- frasi di avvertimento e chiusura
(7) Vicino:
- conferma esplicita dell'accordo + successivo aggiornamento`,
  thumbnail: ""
},
{
  id: "sop-atn-003",
  title: "Scritto di rimborso: idoneo / non idoneo / caso grigio (con alternative e obiezioni)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Modelli solidi per approvare o negare i rimborsi non-conflitti, con alternative e risposte alle obiezioni.",
  prompt: `Prodotto / servizio: []
Politica di rimborso (sommario): []
Motivo del cliente: []
Traduzione:

Set 3 indents:
A) ELIGIBLE:
- conferma
- passi e tempi
- prova e chiusura

B) NON ELIGIBILE:
- spiega la politica nel linguaggio umano
- 4 alternative (credito, cambiamento, supporto, pausa, aggiornamento, ecc.)
- 10 frasi "proibite" e come sostituirle

C) CASE GRIS:
- chiedere ulteriori prove senza incolpare
- mantenere buona volontà
- decidere e giustificare con trasparenza

Include:
- 12 obiezioni tipiche (prezzo / tempo / fiducia) e risposte
- lista di controllo della documentazione interna (10 campi).`,
  thumbnail: ""
},
{
  id: "sop-atn-004",
  title: "Lo script di cancellazione con la ritenzione etica (rileva il vero motivo → offrono la regolazione → confermare)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Ridurre churn non manipolato: diagnosi, alternative utili e cancellazione pulita se si insiste.",
  prompt: `Uscita: []
Piano clienti: []
Motivo probabile: [prezzo / non uso / bug / mancanza di valore / supporto]
Leve consentite: [pausa / download / sconto / onboarding]
Traduzione:

Creare uno script con:
1) Apertura + validazione (3 opzioni).
2) Diagnosi rapida (7 domande) per trovare la vera causa.
3) Motive matrix → offrono:
- per ogni ragione, 2 alternative ragionevoli e come presentarle
4) Se accetti un'alternativa:
- passi esatti + conferma scritta
5) Se insistete sulla cancellazione:
- chiara conferma + che cosa mantiene / perde + data efficace
- elegante addio e porta aperta
(6) Winback:
- 2 messaggi (giorno 7 e giorno 21) adattati al movente.`,
  thumbnail: ""
},
{
  id: "sop-atn-005",
  title: "Oonboarding script express (7-10 min): perso cliente → guida → mini vittoria → passo successivo",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Converte la confusione in progresso immediato con diagnosi morbida, passi concreti e verifica.",
  prompt: `Prodotto / caratteristica: []
Livello del cliente: [portatore / intermedio]
Obiettivo del cliente: []
Canale: [chat / call]

Crea:
1) Diagnosi senza vergogna (6 domande).
2) Itinerario guidato in 8-12 gradini:
- cosa fare
- cosa dovrei vedere sullo schermo
- errori e correzioni comuni
3) Mini-attività di conferma (1 semplice azione).
(4) Chiudi:
- sintesi
- "next better step" (priority 1)
- 2 risorse suggerite (se non disponibili, creare titoli + proiettili).`,
  thumbnail: ""
},

{
  id: "sop-atn-006",
  title: "Delays / script logistico: monitoraggio, incidenti, inoltro e compensazione (se applicabile)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Modello di ritardo: empatia + fatti + opzioni + impegno + follow-up.",
  prompt: `Tipo di operazione: [ecommerce / servizi]
Stato: []
Politica di compensazione: []
Traduzione:

Creare uno script:
1) Apertura ambasciata (4 versioni).
2) Richiesta di dati minimi in 1 messaggio.
3) Spiegazione dello stato:
- versione breve
- versione dettagliata ma semplice
4) Opzioni:
- attendere con aggiornamento programmato
- imbarco
- rimborso parziale / totale (se applicabile)
5. Impegno:
- cosa faremo e quando (non più promessa)
6) Seguito:
- 3 macro se ancora nessun aggiornamento
- 2 macro "appare consegnato ma non l'ho capito"
7) Registrazione interna:
- tag + campi obbligatori.`,
  thumbnail: ""
},
{
  id: "sop-atn-007",
  title: "Macro di chat (30) per casi frequenti: chiarezza + tono umano + singolo CTA",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Crea macro ready-to-copy / incolla per accelerare il supporto senza suono robotico.",
  prompt: `Prodotto / servizio: []
Tono: [chiudi / neutrale / premium]
Casi comuni (se avete):

Genera 30 macro (1-3 linee) con:
- macro (breve)
- TESTO
- CTA (cosa mi serve dal cliente)
Gruppo di:
(1) Informazioni generali (6)
2) Account / accesso (8)
(3) Codici (6)
4) Bug (6)
(5) Spedizione / logistica (4)

Include:
- 1 variante alternativa per macro (più diretta)
- elenco di 12 frasi per evitare + sostituzione raccomandata.`,
  thumbnail: ""
},
{
  id: "sop-atn-008",
  title: "Livello 2: dati minimi, aspettative, aggiornamenti e chiusura",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Scala senza perdere fiducia: raccoglie prove, definisce SLA e mantiene il controllo.",
  prompt: `Tipo di caso: [bug / raccolta / sicurezza / legale]
SLA ideale: []
Traduzione:

Crea:
1) Messaggio del cliente per l'arrampicata (3 versioni).
2) Elenco delle prove (12-16 articoli) + modello per il cliente per rispondere facilmente.
3) Come parlare di tempi:
- quando c'è ETA
- quando c'è NO ETA (linee + aggiornamento successivo)
4) Aggiornamenti:
- 3 messaggi proattivi (con e senza notizie)
(5) Risoluzione:
- messaggio finale con causa (alto livello), soluzione, prevenzione, verifica
6) Registrazione interna:
- modello di biglietto (campi e tag).`,
  thumbnail: ""
},
{
  id: "sop-atn-009",
  title: "Upsell / cross-sell script da supporto (etico): solo se si migliora la soluzione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Rileva segnali corretti, offerte come opzione e non gestisce obiezioni di pressione.",
  prompt: `Uscita: []
Piani / upsells: []
Problema del cliente: []
Traduzione:

Creare uno script:
1) Prima risolvere il problema di base ( frase del ponte).
2) Segni per proporre l'aggiornamento (7 segni).
3) Offerta etica:
- 6 frasi da presentare come "opzione"
- 3 esempi di copia per ragione (limite / velocità / funzione)
(4) Obiezioni e risposte:
- "Non voglio più pagare".
- "Era solo un dubbio".
- "Ci penso"
(5) Vicino:
- confermare che la soluzione di base era pronta
- semplice confronto (bullet A vs B).`,
  thumbnail: ""
},
{
  id: "sop-atn-010",
  title: "Supporto call script: controllo del tempo, frasi di transizione e modello di nota",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Chiama la struttura per risolvere rapidamente e documentare perfetto.",
  prompt: `Tipo: [tecnica / fatturazione / onboarding]
Durata obiettivo: [10-15 min]
Uscita: []

Design:
1) Apertura (30-60): saluto + obiettivo + conferma.
2) Diagnosi (3-5 min): domande in ordine + perché si fa.
3) Risoluzione (5-7 min): passi + cosa dire mentre il cliente corre.
4) Chiudere (1-2 min): recep + passi successivi + conferma di soddisfazione.
5) Pianificare B se non risolto in chiamata: arrampicata + volte + tracciamento.
6) Modello di nota:
- campi obbligatori
- tags
- sintesi 3 linee.`,
  thumbnail: ""
},

// ---- A partir de aquí: 40 prompts más (hasta llegar a 50). ----

{
  id: "sop-atn-011",
  title: "Script per \"Sono stato caricato doppio\": verifica, spiegazione semplice e risoluzione (3 scenari)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Doppia raccolta: ritenzione bancaria vs duplicato effettivo vs cicli di abbonamento.",
  prompt: `Sentiero: [Stripe / PayPal / ecc.]
Tipo: [iscrizione / acquisto]
Dati: [mail, data, ID]

Creare uno script:
1) Validazione + tranquillità (3 versioni).
2) Richiesta di dati minimi (1 messaggio).
3) Diagnosi dello scenario:
- ritenzione bancaria
- duplicato effettivo
- ciclo / confusione piano
4) Risoluzione per fase (passi + tempi).
5) Chiudere con le prove:
- conferma scritta
- messaggio di follow-up a 48h.`,
  thumbnail: ""
},
{
  id: "sop-atn-012",
  title: "Script per \"Non posso accedere\": recupero, 2FA, verifica e prevenzione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Accedi senza dramma: passi per piattaforma e sicurezza senza chiedere dati sensibili.",
  prompt: `Sistema: [email + pass / SSO / magic link / 2FA]
Piattaforma: [web / app]
Errore: [testo]

Crea:
1) diagnosi rapida (8 domande).
2) Soluzione passo-passo (Plan A / B / C):
- reset
- link magico
- cache / incognito
- app (iOS / Android)
(3) Sicurezza:
- come verificare l'identità senza chiedere password
- cosa fare se c'è un sospetto di impegno
(4) Prevenzione (6 consigli).
5) Scala: elenco dei dati tecnici.`,
  thumbnail: ""
},
{
  id: "sop-atn-013",
  title: "Script for \"not working\" (vaga): convertiti in repro step + prove (senza frustrazione)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Ordina il caos: passi riproducibili, previsti vs ottenuti, ambiente e test rapidi.",
  prompt: `Il cliente dice: "Non funziona".
Caratteristica: []
Traduzione:

Creare uno script:
1) Validazione (3 opzioni).
2) Richiedere passaggi di rimpro con il modello:
- Passo 1 / 2 / 3
- Mi aspettavo / ottenuto
- Cattura / video (se possibile)
3) Ambiente: dispositivo, browser, versione, connessione.
4) Test rapidi (6) e come spiegarli.
5) Se è bug: workaround + piano di arrampicata + aggiornamento.
6) Chiudi: sommario + passo successivo + conferma.`,
  thumbnail: ""
},
{
  id: "sop-atn-014",
  title: "Script client VIP: priorità, lingua premium, follow-up proattivo (non più promessa)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Esperienza VIP: 3 domande massime, controllo totale e aggiornamenti proattivi.",
  prompt: `Livello VIP: []
[]
[]
Traduzione:

Crea uno script premium:
1) Apertura con riconoscimento (non sovrastata).
2) diagnosi ultra efficiente (3 domande).
(3) Soluzione:
- passi o passi (con controllo)
4) Aggiornamenti proattivi:
- messaggio a 2h e 24h (anche se non ci sono notizie)
(5) Vicino:
- conferma + porta aperta
6) Nota interna: lista di controllo VIP + record di conto sanitario.`,
  thumbnail: ""
},
{
  id: "sop-atn-015",
  title: "Efficace script di scuse (nessuna colpa legale consentita): impatto → azione → prevenzione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Come scusarsi bene senza entrare nei guai: frasi sicure e frasi proibite.",
  prompt: `Stato: []
Rischio legale: [basso / medio / alto]
Compensazione consentita: []

Crea:
1) Struttura di scuse a 5 fasi (Script testuale).
2) 15 frasi sicure + 10 frasi da evitare (con sostituzione).
3) 5 brevi scuse per la chat.
4) 2 lunghe scuse per e-mail (2 toni).
5) Guida per agente: quando scalare a legale + come documentare.`,
  thumbnail: ""
},
{
  id: "sop-atn-016",
  title: "Script proattivo incidente: avviso iniziale + FAQ + aggiornamenti + messaggio di chiusura",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Comunicazioni incidenti: chiaro, umano, utile, con cadenza di lavoro e aggiornamento.",
  prompt: `Incidente: []
[]
[]
[]
Canali: [email / banner / stato / chat]

Progetto:
1) Avviso iniziale (120-180 parole).
2) Versione breve (max 240 caratteri).
3) FAQ (10 domande e risposte).
4) Aggiornamento # 1 (avanzata) + Aggiornamento # 2 (angolo senza ETA) + Aggiornamento # 3 (solto).
5) Messaggio successivo:
- quello che è successo (alto livello)
- quello che è stato fatto
- che cosa sarà fatto per evitare
- come segnalare se persiste.`,
  thumbnail: ""
},
{
  id: "sop-atn-017",
  title: "Schermo di consegna interno (trasferimento inter-team) + messaggio cliente",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Evitare ping-pong: modelli per il cliente e per la ricezione di attrezzature con prove e tag.",
  prompt: `Apparecchiature di ricezione: [billing / tecnico / legale]
[]
Traduzione:

Crea:
A) Messaggio al cliente (3 versioni) spiegando handoff + aspettative.
(B) Spegnimento interno:
- sintesi 5 linee
- passi già provati
- prove allegate
- ipotesi
- priorità e ragione
- domande aperte (3)
C) Lista di controllo anti ping-pong (10 articoli) + tag consigliati.`,
  thumbnail: ""
},
{
  id: "sop-atn-018",
  title: "Script per \"Sono stato disattento\": recupero di servizio e ritenzione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Recupera la fiducia: scuse, reframe, soluzione e follow-up.",
  prompt: `[]
Traduzione:
Compensazione consentita: []

Crea:
1) Apertura indefensiva (3 varianti).
2) Domande morbide (6) per capire e registrare.
(3) Riparazione:
- azione immediata
- opzione di compensazione (se applicabile)
4) Un impegno di miglioramento (senza promesse vuote).
5) Chiudere + follow-up 24-48h.
6) Nota interna: VoC + scala al supervisore.`,
  thumbnail: ""
},
{
  id: "sop-atn-019",
  title: "Script per spiegare le politiche senza robot sonoro: ragione umana + alternative",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Spiega regole con empatia e opzioni, e gestisce le obiezioni tipiche.",
  prompt: `Politica: [rimborso / garanzia / limiti di tempo / uso accettabile]
[]
Traduzione:

Crea:
1) Breve spiegazione (2-3 frasi) + versione dettagliata (1 paragrafo).
2) "Perché esiste" nel linguaggio umano.
3) 4 alternative specifiche se la politica non consente la richiesta.
4) Risposte alle obiezioni:
- E' ingiusto.
- "Un'altra azienda".
- "Nessuno me l'ha detto".
- "Voglio il supervisore".
5) Chiusura: sommario + passo successivo.`,
  thumbnail: ""
},
{
  id: "sop-atn-020",
  title: "Elenco di controllo di chiusura perfetto: ridurre il contatto e prevenire i biglietti futuri",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Contatto ravvicinato: sommario, prevenzione, risorsa e conferma.",
  prompt: `Caso risolto: []
Traduzione:

Creare 10 modelli di chiusura:
- 4 per chat (1-2 linee)
- 4 per e-mail (1 paragrafo)
- 2 per chiamata (spoken script)
Ogni chiusura deve includere:
1) Che cosa è stato risolto (sommario)
2) Fase preventiva (se succede di nuovo...)
3) Appello / FAQ o suggerimento
4) Domanda finale di conferma

Include anche:
- 6 risposte se il cliente risponde "rimane lo stesso".`,
  thumbnail: ""
},

// 30 prompts restantes (21–50)
{
  id: "sop-atn-021",
  title: "Scrittura di fatturazione: fattura, IVA, dati fiscali e voucher inoltro",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Valuta i dubbi fiscali senza attrito: modello + dati minimi + passaggi chiari.",
  prompt: `Paese: []
Tipo di cliente: [B2B / B2C]
Applicazione: [fattura / IVA / dati fiscali / cambio di ragione aziendale]
Traduzione:

Creare uno script:
1) Apertura + conferma della domanda.
2) Dati minimi da richiedere (in un unico elenco) + ragione per ogni dato.
3) Procedura di risoluzione su richiesta:
- buono invio
- emissione / correzione della fattura
- modifica dei dati fiscali
4) Times e "next update".
5) Chiudere + elenco di controllo interno per registrare.`,
  thumbnail: ""
},
{
  id: "sop-atn-022",
  title: "Scrittura di contrasto / disputa: contenimento, prove, processo e comunicazione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Esegue controversie inconfrontabili: spiega processo, raccoglie prove e riduce il rischio.",
  prompt: `Sentiero: []
Disturbo: [aperto / chiuso]
Motivo: [fraud / non riconosciuto / servizio non ricevuto]
Traduzione:

Crea:
1) Apertura attenta (non caricata).
2) Spiegazione del processo (semplice) + tempi.
3) Prove di richiesta (controlla) e come richiederlo.
4) Opzioni:
- soluzione amichevole (rimborso parziale / soluzione)
- continuare la controversia (se applicabile)
(5) Vicino:
- conferma scritta
- seguito programmato.`,
  thumbnail: ""
},
{
  id: "sop-atn-023",
  title: "Script di sicurezza: sospettato account compromesso (blocco, verifica, recupero)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Protocollo testuale per incidenti di sicurezza senza richiedere dati sensibili.",
  prompt: `Segni: [avviamento anticipato / modifiche non autorizzate / 2FA]
Traduzione:

Creare uno script:
1) Apertura di sicurezza (calm + controllo).
2) azione immediata (passo per passo) per proteggere:
- reset
- sessioni ravvicinate
- attivare 2FA
3) Verifica identità (metodi consentiti) senza chiedere password.
4) Se ci sono danni:
- quali dati da rivedere
- come invertire
(5) Vicino:
- sommario + lista di controllo preventivo + follow-up.`,
  thumbnail: ""
},
{
  id: "sop-atn-024",
  title: "Sceneggiatura per abuso a sostegno: insulti, molestie e linguaggio inappropriato (limiti + chiusura)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Limiti stringenti e rispettosi: avvertimento, registrazione e chiusura sicura.",
  prompt: `Politica dei comportamenti: [Riepilogo dei patti]
Traduzione:

Crea:
1) messaggio soft limit (3 versioni).
2) Avvertenza formale (3 versioni).
3) Chiusura di conversazione (2 versioni).
(4) Protocollo interno:
- per registrarsi
- quando salire
- quando bloccare
(5) Proibito (10) e bottiglie alternative.`,

  thumbnail: ""
},
{
  id: "sop-atn-025",
  title: "Sceneggiatura per il supporto tecnico: ordine non riempito log / catch + report template",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Raccogliere prove tecniche con metodo semplice e lingua.",
  prompt: `Piattaforma: [web / app]
Tipo di prova: [cattura / video / log]
Traduzione:

Crea:
1) Come chiedere prove (3 toni: amichevole / diretto / premium).
2) istruzioni passo per:
- cattura
- breve video
- copia / incolla errore
3) Modello di segnalazione:
- passi per giocare
- atteso vs ottenuto
- ambiente
- frequenza
(4) Chiudi:
- conferma
- i prossimi passi + piano di aggiornamento.`,
  thumbnail: ""
},
{
  id: "sop-atn-026",
  title: "Script WhatsApp: micro- messaggi, conferme tra passaggi e follow-up",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Supporto per le cose App senza pareti di testo: blocchi brevi, conferme e macro.",
  prompt: `Uscita: []
[]
[]

Crea:
1) Script in 8-12 messaggi brevi (con interruzioni).
2) Conferma tra i passi (frasi esatte).
3) 3 messaggi se il cliente richiede tempo per rispondere.
4) 12 macro WhatsApp per casi tipici.
5) Chiudere con sommario e prevenzione.`,
  thumbnail: ""
},
{
  id: "sop-atn-027",
  title: "Supporto e-mail script: chiara struttura + singole versioni CTA + tono",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "E-mail che anticipano i casi: sommario, revisionato, passi e CTA unico.",
  prompt: `[]
Tono: [close / corporate]
Emergenza: []

Crea:
(1) 8 casi.
2) modello di posta elettronica:
- sintesi del problema
- quello che abbiamo fatto / controllato
- passi consigliati
- CTA unico (cosa mi serve)
- vicino
3) versione "urgente" e versione "sensibile".
4) Lista di controllo prima di inviare (10 articoli).`,
  thumbnail: ""
},
{
  id: "sop-atn-028",
  title: "Script per rispondere a recensioni negative (pubbliche) + ponte canale privato",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Eleganti risposte pubbliche senza discutere o chiedere dati sensibili.",
  prompt: `Recensione (paste): []
Piattaforma: [Google / Trustpilot / App Store]
Informativa sulla privacy: []

Crea:
1) Risposta pubblica (80-120 parole).
2) 3 varianti secondo tono (aggressivo / deluso / sarcastico).
3) Seguito del messaggio privato:
- richiedere dati minimi
- proporre soluzione
4) "Non dire": 10 frasi e perché.`,

  thumbnail: ""
},
{
  id: "sop-atn-029",
  title: "Script per comunicare tempi (SLA) senza promesse: intervalli, aggiornamenti e gestione della pressione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Come parlare di tempi senza sbagliare: frasi, struttura e follow-up proattivo.",
  prompt: `[]
[]
Traduzione:

Crea:
1) 15 frasi per comunicare i tempi: certezza / gamma / incertezza.
2) Struttura "tempo + aggiornamento successivo" (templati).
3) Risposte di pressione:
- "Ho bisogno ora."
- "Mi stanno ignorando".
- "Questo è inaccettabile".
4) 3 messaggi proattivi se ritardati.
5) Nota interna: quando salire per SLA.`,
  thumbnail: ""
},
{
  id: "sop-atn-030",
  title: "Script per richiedere informazioni senza attrito: 1 domanda compatta + opzioni",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Raccogli dati senza scambiare 20 messaggi: richiesta compatta e amichevole.",
  prompt: `[]
Dati richiesti: [mail, ordine, cattura, ecc.]
Traduzione:

Pensa:
1) 8 versioni di "questione completa" per ordinare diversi dati contemporaneamente.
2) Variante per clienti veloci (ultra short).
3) Variante per i clienti sensibili (ultra empathic).
4) Come convalidare i dati ricevuti senza far sentire il cliente colpevole.
5) Chiudendo confermando: "Con questo posso andare avanti.".`,
  thumbnail: ""
},

{
  id: "sop-atn-031",
  title: "Script di supporto 'Multitheme': il cliente porta 5 problemi (prioritizza e risolve da blocchi)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Ordina più problemi senza perdere il controllo o stancarsi del cliente.",
  prompt: `Elenco dei problemi: [clapping]
Traduzione:

Creare uno script:
1) Validazione (non brusca).
2) Proposta di un impatto / emergenza / ordine unità (3 metodi).
3) Risoluzione del blocco:
- confermare alla fine di ogni blocco
4) Che cosa è risolto oggi contro ciò che è scalato (con spiegazione).
5) Chiudere con la lista di controllo finale + i prossimi passi.`,
  thumbnail: ""
},
{
  id: "sop-atn-032",
  title: "Script per l'incertezza: 'Non so ancora' con trasparenza, azione e follow-up",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Frasi per non inventare: cosa sappiamo, cosa verifichiamo, passi successivi, aggiornamenti.",
  prompt: `[]
Che cosa non è chiaro: []
Traduzione:

Crea:
1) 12 frasi per dire "lo conferma ancora" con fiducia.
2) modello di risposta:
- quello che sappiamo.
- quello che abbiamo indagato.
- il prossimo passo
- quando aggiorniamo
3) 3 aggiornamenti (con e senza notizie).
4) 12 frasi per evitare + sostituzione.`,
  thumbnail: ""
},
{
  id: "sop-atn-033",
  title: "Script per \"Voglio un supervisore\": contenimento, prima soluzione e scalazione durante l'applicazione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Arrampicata sbloccata: criteri, alternative e consegna perfetta.",
  prompt: `[]
Politiche: []
Traduzione:

Crea:
1) Validazione + intento (3 varianti).
2) Frasi per cercare di risolvere prima (5).
3) Criteri di scala (sì / no) e come spiegarlo.
4) Se si scala: messaggio cliente + modello interno.
5) Se non si scala: come dire no con alternative.
6) Chiudere con accordo e follow-up.`,
  thumbnail: ""
},
{
  id: "sop-atn-034",
  title: "Guida per la raccolta non consegnata: pagamento ok ma non ricevuto (digitale / fisico) con prevenzione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Soluzione rapida: verifica, consegna manuale, monitoraggio e consigli preventivi.",
  prompt: `Tipo di consegna: [email / download / spedizione]
Pagamento: []
Traduzione:

Crea:
1) Apertura calma (3).
2) Verifica minima (dati).
3) La diagnosi dei casi (5) e la soluzione causa.
4) Consegna a mano / spedizione (passi).
(5) Prevenzione (6 consigli).
6) Chiusura: conferma + 24h di follow-up.`,
  thumbnail: ""
},
{
  id: "sop-atn-035",
  title: "Script per bug intermittenti: frequenza, condizioni, sfondo e monitoraggio",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Casi difficili: intermittente. Struttura per le condizioni di mappatura e di lavoro.",
  prompt: `[]
Frequenza: [a volte / sempre]
Piattaforma []

Crea:
1) Domande alle condizioni della mappa (10).
2) Come ordinare "quando sì / quando no" (templato).
3) Riflessioni (3-5) il più possibile.
4) Escalation con prove:
- tronchi / catture
- passi e condizioni
5) Seguito:
- come segnalare i progressi
- come chiedere la conferma che era stabile.`,
  thumbnail: ""
},
{
  id: "sop-atn-036",
  title: "Script per il supporto senza accesso: il cliente non può condividere schermo o catturare",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Diagnosi per domande di alto segno e guide descrittive passo dopo passo.",
  prompt: `Limitazione: nessuna cattura e nessuna condivisione dello schermo
Uscita: []
Canale: [chat / call]

Crea:
1) "sì / no" strategia diagnostica (12 domande ad alto segno).
2) Descrizione istruzioni:
- come guidare dai menu senza screenshot
- come confermare che è sulla schermata destra
Piano A / B / C
4) Chiudere: sommario + passo successivo + follow-up.`,
  thumbnail: ""
},
{
  id: "sop-atn-037",
  title: "Script per \"Ho cambiato il prezzo\": scambio comunicazione, nonno e alternative",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Sensibilità del prezzo della maniglia: empatia + regole + scelta giusta.",
  prompt: `Modifica: [rise / nuovo prezzo]
Politica: [grand / sconto / nessuno]
Traduzione:

Crea:
1) Apertura ambasciata (3).
2) Spiegazione chiara del cambiamento (senza corporativismo).
3) Opzioni:
- mantenere il piano (se applicabile)
- download
- pausa
- sconto temporaneo (se consentito)
4) Obiezioni e risposte (10).
5) Chiusura: conferma dell'accordo.`,
  thumbnail: ""
},
{
  id: "sop-atn-038",
  title: "Lo script di prevenzione Churn: rilevare \"segni di drop-out\" nei biglietti e agire",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Converti i biglietti in ritenzione: segnali, domande, intervento e follow-up.",
  prompt: `Uscita: []
Segni osservati: [frustrazione / nessun valore / nessun uso]
Traduzione:

Crea:
1) Elenco di 12 segnali churn nel testo del cliente.
2) 6 domande per rilevare la causa principale.
3) Intervento dei casi:
- a bordo
- regolazione del piano
- soluzione tecnica
- istruzione / risorse
4) modello di follow-up 7 giorni.
5) Nota interna: VoC + vassoio "rischio".`,
  thumbnail: ""
},
{
  id: "sop-atn-039",
  title: "Script di supporto B2B: stakeholder, gravità, SLA, impatto e roadmap di soluzione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Impresa di supporto: gravità, impatto, comunicazione esecutiva e aggiornamenti.",
  prompt: `B2B client: [industria]
Verità: [P1 / P2 / P3]
Impatto: [utenti interessati]
Canale: [email / call]

Crea:
1) messaggio iniziale (esecutivo) con:
- sintesi
- impatto
- azione immediata
- prossimo aggiornamento
2) Diagnosi con i dati chiave (elenco).
3) Piano di soluzione: ora / successivo / successivo.
4) Aggiornamenti programmati (3).
5) Chiusura: RCA ad alto livello + prevenzione + conferma.`,
  thumbnail: ""
},
{
  id: "sop-atn-040",
  title: "Scrittura di educazione del cliente: spiegare 'perché' senza tecniche",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Spiega cause non annullate: analogie, esempi e checklist preventivo.",
  prompt: `[]
Audizione: [non tecnico / misto / tecnico]
Traduzione:

Crea:
1) Semplice spiegazione (2-3 frasi).
2) Spiegazione con analogia (1).
3) spiegazione tecnica (1 paragrafo) facoltativa.
4) Che cosa il cliente può fare per evitarlo (checklist 8-12).
5) Chiusura: conferma + appello aggiuntivo.`,
  thumbnail: ""
},

{
  id: "sop-atn-041",
  title: "Sceneggiatura per applicazioni out-of-reach: dire no + offrire alternativa utile (senza attrito)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Come negare ciò che non si può fare senza perdere il cliente.",
  prompt: `Applicazione fuori portata: []
Motivo: [policy / limitazione tecnica]
Possibili alternative: []

Crea:
1) 8 modi per dire NO con rispetto.
2) 6 alternative utili (anche 'come raggiungerlo').
3) 6 risposte alle obiezioni del cliente.
4) Chiusura: sommario + passo successivo.`,
  thumbnail: ""
},
{
  id: "sop-atn-042",
  title: "Script per i biglietti ripetuti (stesso cliente): riconoscere la storia e rompere il ciclo",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Quando si ritorna per la stessa cosa: riconoscere, indagare radice, soluzione finale e follow-up.",
  prompt: `Storia: [descrive]
Problema ricorrente: []
Traduzione:

Crea:
1) Apertura riconoscendo la storia (senza colpa).
2) Domande a causa di radice (10).
(3) Azioni:
- soluzione rapida (rotonda)
- soluzione finale (cambiamenti / regolazioni)
4) Seguito:
- check-in a 48h
- check-in a 7 giorni
5) Nota interna: "recorrente" + etichetta VoC.`,
  thumbnail: ""
},
{
  id: "sop-atn-043",
  title: "Scrittura di supporto di alta stagione: code lunghe, ansia e senza priorità di caos",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Si occupa di volume: aspettative, macro, priorità e chiusure efficienti.",
  prompt: `Alta stagione: [Venerdì nero / lancio / ecc.]
[]
Traduzione:

Crea:
1) Messaggio iniziale di alta domanda (3 versioni).
2) Modello di priorità:
- urgenza vs impatto
- criteri
3) 15 macro "alto volume" (dati di richiesta, conferma, scala, chiudi).
4) Come evitare promettenti:
- 12 sostituzioni di frasi pericolose
5) Chiusura efficiente con prevenzione.`,
  thumbnail: ""
},
{
  id: "sop-atn-044",
  title: "Script per 'cliente confuso': semplificare, dividere in passaggi e confermare la comprensione",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Converti la confusione in chiarezza usando il blocco, le conferme e i mini-check.",
  prompt: `Oggetto: []
Traduzione:

Crea:
1) 6 frasi per semplificare senza condescending sonoro.
2) Bloccare le istruzioni (max 2 passi per messaggio) + conferma.
3) Mini-checks:
- 5 domande brevi per verificare la comprensione
4) Piano delle risorse:
- 2 risorse (guida / FAQ) con struttura.
5) Chiudendo confermando "è pronto?".`,
  thumbnail: ""
},
{
  id: "sop-atn-045",
  title: "Script per il supporto con prove contraddittorie: il cliente dice A, sistema dice B",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Gestisce discrepanze non caricate: validazione, verifica e risoluzione.",
  prompt: `Divulgazione: []
Traduzione:

Crea:
1) Apertura di un corpo (3).
2) Processo di verifica:
- 6 passi
- dati da richiedere
3) Possibili spiegazioni (5) in lingua semplice.
4) Risoluzione dello scenario.
5) Chiudere con conferma e seguire.`,
  thumbnail: ""
},
{
  id: "sop-atn-046",
  title: "Community support script / Discord: risposta pubblica + follow-up privato",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Supporto pubblico: aiuto senza dati, e ponte a DM / biglietto.",
  prompt: `Piattaforma: [Discord / Community]
[]

Crea:
1) (breve) che:
- valida
- contributo 1-2 passi
- chiedere di passare al DM / biglietto dati
2) Messaggio privato per raccogliere dati (templato).
3) Chiusura pubblica quando risolta (senza dettagli sensibili).`,
  thumbnail: ""
},
{
  id: "sop-atn-047",
  title: "Script per il supporto della richiesta di funzionalità: non bug, richiesta (empatia + gestione)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Si occupa di richieste: riconoscere, chiarire, registrare e aspettative senza promettere roadmap.",
  prompt: `Applicazione: []
Uscita: []
Traduzione:

Crea:
1) Validazione + grazie (3).
2) Domande da chiarire (6):
- caso di utilizzo
- impatto
- frequenza
3) Come registrare internamente (tag + formato).
4) Come comunicare le aspettative senza promettere:
- 10 frasi sicure
5) Alternative attuali (rotonde) e risorse.
6) Chiusura: conferma che è stato registrato.`,
  thumbnail: ""
},
{
  id: "sop-atn-048",
  title: "Script di errore del cliente (misconfig): corretto senza colpa e insegnare preventiva",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Quando si tratta di errore di configurazione dell'utente: tocco, guida e prevenzione.",
  prompt: `[]
Traduzione:

Crea:
1) Frasi per sottolineare la causa senza senso di colpa (8).
2) Passi per correggere (A / B / C).
3. Prevenzione:
- lista di controllo di configurazione (10)
(4) Chiudi:
- conferma che funziona
- "Se succede di nuovo, controlla prima X".`,
  thumbnail: ""
},
{
  id: "sop-atn-049",
  title: "Scrittura di supporto per la barriera linguistica: semplice, strutturato, conferme",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Comunicazione semplice: brevi frasi, passaggi chiari e conferme per evitare malintesi.",
  prompt: `Lingua del cliente: []
Livello: [basso / medio]
Traduzione:

Creare uno script:
1) Ultra semplice (10) bottiglie per:
- validare
- richiesta dei dati
- fare passi
2) Istruzioni "un passo per messaggio".
(3) Conferma:
- 8 domande di conferma (sì / no)
(4) Chiudi:
- sommario suggerito e risorsa visiva (se applicabile).`,
  thumbnail: ""
},
{
  id: "sop-atn-050",
  title: "Script universale per chiudere i biglietti con metriche: CSAT, motivo, tag e apprendimento (VoC)",
  area: "Supporto clienti & SOP",
  category: "Script di attenzione",
  summary:
  "Enclosure che alimenta un miglioramento continuo: CSAT, etichettatura e sintesi interna.",
  prompt: `[]
Traduzione:
Tags: []

Crea:
1) Messaggio finale al cliente che richiede CSAT (3 varianti) senza pressione.
2) Domanda di feedback opzionale (1 linea) per approfondimenti.
3) modello di chiusura interno:
- sommario (3 linee)
- causa radice
- risoluzione
- tempo totale
- tags (motivo / submotivo)
- possibilità di prodotto (se applicabile)
4) Elenco di 12 tag consigliati per questo tipo di file.
5) Buone pratiche per evitare "chiusura precoce".`,
  thumbnail: ""
}];