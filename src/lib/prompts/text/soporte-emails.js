// src/lib/prompts/text/soporte-emails.js

export const textPromptsSoporteEmails = [
{
  id: "sop-email-001",
  title: "First Response Email (Universal): conferma, calma e richiede il minimo (non ritorno)",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "E-mail di riduzione del tempo iniziale: empatia + sommario + 1 CTA + dati minimi.",
  prompt: `Contesto biglietti: [Paste il messaggio del cliente]
Prodotto / servizio: []
Tono: [chiudi / neutrale / premium]
Obiettivo: [solvere / diagnosticare / scala]
Dati di cui ho bisogno:

Scrivimi un'email di prima risposta con:
1) Soggetto (5 opzioni): chiaro, umano, non robot sonoro.
2) Apertura empatica (esausta) + conferma della ricevuta.
3) Riepilogo del problema in 1-2 frasi (parafrasando per convalidare).
4) 1 singolo CTA (molto chiaro) per ottenere ciò che manca:
- se avete bisogno di dati → ordinarli in proiettili con esempi
- se ho bisogno di fare passi → max. 5 passi, numerati
5) "Cosa faremo" (2-3 proiettili) per costruire fiducia.
6) Chiudi: disponibilità + tempo di tracciamento (senza date esatte promettenti) + firma.
Include 2 versioni extra:
- versione breve (± = 90 parole)
- versione super premium (calda e più dettagliata).`,
  thumbnail: ""
},
{
  id: "sop-email-002",
  title: "Richiesta dati tecnici e-mail (unintimidated): cattura, step, ambiente, timstamps",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Fai delle prove tecniche non frustrate: domande precise, checklist ed esempi.",
  prompt: `Incidenza: []
Piattaforma: [web / app]
Livello utente: [basic / medium / avanzato]
Quello che ha già provato:

Scrivere una e-mail per richiedere dati tecnici con:
(1) Oggetto (4 opzioni).
2) Breve spiegazione del perché chiediamo questi dati (umano e calmo).
3) Elenco di controllo nei proiettili (8-12) con esempi:
- passi per giocare
- atteso vs ottenuto
- browser / OS / dispositivo
- cattura o breve video
- timestamp e fuso orario
- URL esatto / schermo
4) Istruzioni opzionali (facile) per:
- aperto incognito
- disabilitare le estensioni
- rinfresco duro
5) CTA unico alla fine: "rispondeteci con X".
Include la versione ultra-breve per i clienti fastidiosi.`,
  thumbnail: ""
},
{
  id: "sop-email-003",
  title: "Unanswered follow-up email (Giorno 2 / Giorno 5 / Ultimo tentativo): istruito ed efficace",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Sequenza di follow-up per riattivare i biglietti senza suonare passivo-aggressivo.",
  prompt: `Contesto: [Riepilogo del cliente]
Cosa manca dal cliente: [data / step]
[]

Crea 3 email:
1) Di seguito Giorno 2: breve, amichevole, 1 CTA.
2) Segui-up Giorno 5: offre alternative (call, cattura, altro canale).
3) Ultimo tentativo: avviso chiusura automatica + come riaprire.
Per ogni email include:
- 3 opzioni del soggetto
- testo completo
- 1 linea opzionale "se hai fretta, rispondi solo con _ _ _ _".`,
  thumbnail: ""
},
{
  id: "sop-email-004",
  title: "E-mail di chiusura di successo: conferma + sommario soluzione + prevenzione + risorse",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Chiusura che lascia buona impressione: conferma, spiega, previene e guida.",
  prompt: `[]
Soluzione applicata: []
causa probabile: []
Risorse: [link / titoli]

Scrivi un'email di chiusura con:
(1) Oggetto (4 opzioni).
2) Confermare che dovrebbe già essere risolto + come verificare (2-3 assegni).
3) Riepilogo della soluzione in 3 proiettili (non tecnici).
(4) Prevenzione: 5 raccomandazioni specifiche per evitare che accada di nuovo.
5) Risorse: 3 link suggeriti (per mettere titoli anche se non esistono ancora).
6) Chiudere caldo + invito a rispondere se riapparire.
Include una versione breve (± = 120 parole).`,
  thumbnail: ""
},
{
  id: "sop-email-005",
  title: "Email per i clienti fastidiosi: unscale, convalidare, proporre piano e riconquistare la fiducia",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Risposta ad alta tensione: empatia, limiti sani, piano chiaro e passo successivo.",
  prompt: `Messaggio del cliente (paste): []
Real contesto: [quello che è successo]
Cosa potete offrire: [soluzione / alternativa]
Cosa non potete offrire: [limiti / policy]

Scrivi un'email che:
1) Ne vale la pena senza ammettere la colpa indebita.
2) Sommarizzare il problema in 1-2 frasi.
3) Proporre un piano a 3 fasi (che cosa fa il cliente / che facciamo / quando aggiorniamo).
4) Offrire 2 alternative (ad esempio: workaround vs climbing).
5) Tenere limiti rispetto (se applicabili).
6) Finire con un singolo CTA.
Include 2 varianti: una "molto neutrale" e una "più vicina".`,
  thumbnail: ""
},

{
  id: "sop-email-006",
  title: "Email di rimborso approvata: conferma, tempo, voucher e spese successive",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Messaggio chiaro per il rimborso: che cosa è rimborsato, quando riflessa e che cosa succede per accedere.",
  prompt: `Prodotto / piano: []
Quantità: []
Metodo di pagamento: []
Politica: []
Accesso: [è mantenuto / tagliare]

Scrivere una email di rimborso approvata con:
(1) Oggetto (4 opzioni).
2) Conferma del rimborso + importo e riferimento (placeholders).
3) Tempo stimato (senza una promessa esatta) e perché dipende dalla banca.
4) Che cosa circa l'accesso futuro / ristrutturazioni.
5) Istruzioni se non riflesse (controlla 6).
6) Clever amichevole + CTA per dubbio.`,
  thumbnail: ""
},
{
  id: "sop-email-007",
  title: "Rimborso email respinta (con alternativa): solida, empatica e senza conflitti",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Rimborso negativo con spiegazione umana + alternative per aiutare il cliente.",
  prompt: `Motivo di rifiuto: []
Politica attuata: []
Alternative che puoi offrire: [credito / cambiamento piano / estensione]

Scrivi un'email con:
(1) Oggetto (4 opzioni).
2) Breve e umana spiegazione del perché (senza sana legalistica).
3) Data di riepilogo della politica (non lunga copia / pasta).
4) 2-3 alternative specifiche (con passi).
5) Single CTA scegliere alternativa.
Include la versione "molto breve" per evitare il dibattito.`,
  thumbnail: ""
},
{
  id: "sop-email-008",
  title: "Confermato email di cancellazione: cosa cambia, fino a quando, e come riattivare più tardi",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Conferma di cancellazione che evita i biglietti: accesso, rinnovo, dati e riattivazione.",
  prompt: `Piano: []
Data di fine accesso: []
Motivi: [opzionale]
Ritenzione dell'offerta? [Si]

Scrivi un'email con:
(1) Oggetto (4 opzioni).
2) Conferma della cancellazione.
3) Accesso: fino a quando e che cosa è tenuto (dati, storia).
4) Come riattivare (passi).
5) (opzionale) Non invasiva offerta di ritenzione: 2 alternative.
6) Chiusura con cordicella.`,
  thumbnail: ""
},
{
  id: "sop-email-009",
  title: "Email incidente (status): indagine / identificazione / monitoraggio / risoluzione (4 modelli)",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Pacchetto di e-mail per stato di incidente: chiarezza, calma, sfondo e aggiornamenti successivi.",
  prompt: `Incidente: []
Impatto: [chi è interessato]
[se c'è]
Canale: [email]

Crea 4 email:
1) Investigazione
2) Identificazione
3) Monitoraggio
(4) Risolto

Ogni email dovrebbe includere:
- 3 casi
- sintesi dell'impatto
- Cosa stiamo facendo?
- lavoro (se applicabile)
- quando daremo il prossimo aggiornamento (non esatto)
- Chiusura empatica.`,
  thumbnail: ""
},
{
  id: "sop-email-010",
  title: "Email: 'abbiamo bisogno della tua autorizzazione' (permissioni / admin): chiedere l'azione per amministrare senza attrito",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Chiedi all'utente di coinvolgere l'amministratore con un messaggio molto elencato da inoltrare.",
  prompt: `Azione amministrativa richiesta: [Modificare il ruolo / attivare la funzione]
Contesto []
[]

Scrivere una email all'utente con:
(1) Oggetto (3 opzioni).
2) Breve spiegazione: perché richiede admin.
3) Passi utente (2-3).
4) Un "Messaggio per inviare al tuo amministratore" blocco con:
- contesto
- passi esatti sul prodotto (placeholders)
- confermare alla fine
5) Chiusura singola + CTA.`,
  thumbnail: ""
},

{
  id: "sop-email-011",
  title: "\"Soluzione passi\" e-mail (massima chiarezza): istruzioni numerate + 'cosa si dovrebbe vedere '",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Email con i passi che il cliente segue: passi brevi, risultato atteso e piano B.",
  prompt: `[]
Soluzione proposta: []
Piattaforma: [web / app]
Livello utente: []

Scrivi un'email con:
(1) Caso (4).
2) 6-10 passi numerati, ciascuno con:
- azione esatta
- quello che dovresti vedere
- se non appare, cosa fare (piano B)
3) Una sezione "se funziona" (come confermarla).
4) Una sezione "se non funziona" (quali dati per inviarci).
5) Chiudere con un CTA unico.`,
  thumbnail: ""
},
{
  id: "sop-email-012",
  title: "E-mail per 'caso duplicato' o 'già c'è biglietto': ordini, riduce il rumore e mantiene buon tono",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Messaggio per unificare i biglietti senza infuriare, con spiegazione e passo successivo.",
  prompt: `Il biglietto principale: [ID]
Biglietto doppio: [ID]
Stato: []

Scrivi un'email con:
(1) Caso (3).
2) Spiegazione del perché unifichiamo (velocità / chiarezza).
3) Indica su quale biglietto faremo aggiornamenti.
4) Richiedi la conferma di 1 cosa (se manca).
5) Molto vicino.`,
  thumbnail: ""
},
{
  id: "sop-email-013",
  title: "'Soluzione temporanea / soluzione di lavoro' e-mail: spiega limiti, durata e prossimo aggiornamento",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Messaggi per allenamenti: onesti, azionabili e con chiare aspettative.",
  prompt: `[]
[]
Limitazioni di allenamento: []
Prossimo aggiornamento: []

Scrivi un'email con:
(1) Caso (4).
2) Che cosa succede (alto livello).
3) Passo dopo passo (5-8 gradini).
4) Che cosa il lavoro non farà (limiti).
5) Che cosa stiamo facendo per la correzione.
6) Single CTA: confermare se funziona o inviarci X info.`,
  thumbnail: ""
},
{
  id: "sop-email-014",
  title: "Email da scaling a engineering (internal): impeccabile, riproducibile e con dati completi",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Piano interno per arrampicata: gradini esatti, attesi / attuali, ambiente e prove.",
  prompt: `Bug / incidenza: []
[P1-P4]
Account / Org ID: []
URLs: []
[]
Prove: [catches / logs / HR]

Scrivere un'email interna all'ingegneria con:
1) Oggetto con formato standard: [Sev] [Area] breve riassunto.
2) contesto clienti (senza PII).
3) Passi da giocare (numero).
4) previsto contro corrente.
5) Ambito: quanti utenti, da quando, regioni.
(6) Le prove allegate.
7) Ipotesi (opzionale) + priorità raccomandata.
8) Domande specifiche (max 3) da sbloccare.
Include una versione breve per Slack.`,
  thumbnail: ""
},
{
  id: "sop-email-015",
  title: "E-mail di verifica dell'identità (cambiamenti sensibili): sicuro, chiaro e non frizione",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Richiesta di verifica per modifiche sensibili senza chiedere dati pericolosi.",
  prompt: `Modifica richiesta: [email / proprietario / 2FA]
Rischio:
Metodi permessi: [ultima scheda 4? NO / dati sicuri sì]
Politiche: []

Scrivi un'email con:
(1) Caso (3).
2) Spiegazione umana del perché verifichiamo.
3) Elenco di 2-3 metodi di verifica consentiti (con esempi).
4) Quello che non chiediamo mai (1-2 linee).
5) Single CTA: rispondere con X.
6) Chiudere la calma e professionale.`,
  thumbnail: ""
},

{
  id: "sop-email-016",
  title: "Email per corporate IT: whitelisting / porte / domini + quale prova abbiamo bisogno",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Messaggi tecnici per IT quando c'è firewall / proxy che blocca il prodotto.",
  prompt: `Azienda: []
[]
Domini richiesti: [placeholders]
Porti: [placeholders]
Punti finali: [placeholders]

Scrivere un'email per IT con:
(1) Caso (3).
2) Riassunto del problema e come confermarlo (test del punto).
3) Requisiti di rete (domini / porte / endpoints) in formato copia / incolla.
4) Quali registri o test ordiniamo (senza strumenti specifici se non si desidera).
5) Contatto e chiusura.
Inoltre, creare una versione "da inviare" al cliente non tecnico.`,
  thumbnail: ""
},
{
  id: "sop-email-017",
  title: "'Change of plan' email (upgrade / download): valutazione spiegata con semplice esempio",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Chiarificazione degli effetti di valutazione e aggiornamento / download per evitare confusione.",
  prompt: `Progetti: []
Prorated: [sì / no]
Caso: [aggiornamento / download]
Data:

Scrivi un'email con:
(1) Caso (3).
2) Che cosa accadrà (in proiettili).
3) Esempio numerico semplice (con segnaposto).
4) Quali cambiamenti nelle caratteristiche / limiti e quando.
5) FAQ mini (5).
6) CTA per confermare se si desidera procedere.`,
  thumbnail: ""
},
{
  id: "sop-email-018",
  title: "'fattura / IVA / IVA' email: spiegazioni chiare + come aggiornare i dati fiscali",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Risponde alle domande fiscali in modo chiaro, senza suonare un avvocato, e guida l'utente ad aggiornare i dati.",
  prompt: `Paese: []
Documento: [fattura / ricevuta]
Doubt: []

Scrivi un'email con:
(1) Caso (3).
2) Risposta chiara al dubbio.
3) Passi per aggiornare i dati fiscali (5-8).
4) Cosa aspettarsi dopo (tempo, rigenerazione).
5) Quali dati abbiamo bisogno se non è possibile (list).
6) Vicino con CTA unico.`,
  thumbnail: ""
},
{
  id: "sop-email-019",
  title: "'capture / video ordine' email (senza PII): come richiedere prove con privacy",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Chiedere le catture utili senza compromettere i dati: istruzioni e cosa nascondere.",
  prompt: `Incidenza: []
Cosa dobbiamo vedere: [schermo / errori]
Livello utente: []

Scrivi un'email con:
(1) Caso (3).
2) Breve spiegazione: "Questo ci aiuta a risolvere più velocemente".
(3) Istruzioni:
- come catturare
- come registrare video 20s
- quali dati nascondere (email, pagamenti, ecc.)
4) Elenco di controllo (6) di cosa dovrebbe includere le prove.
5) Single CTA: rispondere racchiudendo X.`,
  thumbnail: ""
},
{
  id: "sop-email-020",
  title: "Post-mortem (utente) email: cosa è successo, come lo risolviamo e quali cambiamenti per il futuro",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Comunicazione post-incidente: trasparenza senza tecnicità e azioni concrete.",
  prompt: `Incidente: []
[]
Durata: []
Causa (alto livello): []
Azioni preventive: []

Scrivi un'email con:
(1) Caso (4).
2) Sommario (3 proiettili).
3) Che cosa è successo (alto livello) senza un gergo.
4) Che cosa abbiamo fatto per risolvere.
5) Che cosa faremo per evitare che accada (5 azioni).
6) Se l'utente deve fare qualcosa, elencarlo (max 3 passi).
7) Chiusura empatica + canale per dubbio.`,
  thumbnail: ""
},

{
  id: "sop-email-021",
  title: "Email per recuperare la fiducia dopo l'errore del computer: apologia responsabile + piano + compensazione (se applicabile)",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Le scuse professionali che non suonano corporate: accettare, spiegare, riparare, prevenire.",
  prompt: `Che cosa è andato storto: []
Impatto del cliente: []
Cosa faremo: []
Compensazione (se applicabile): []

Scrivi un'email con:
(1) Caso (3).
2) Apologia responsabile (indoramatizzata).
3) Che cosa è successo (alto livello) + riconoscimento di impatto.
4) Piano in 3 fasi (azione immediata, soluzione, prevenzione).
5) Compensazione semplice spiegata (se applicabile).
6) CTA singolo + chiusura umana.`,
  thumbnail: ""
},
{
  id: "sop-email-022",
  title: "Email per 'applied policy' (senza suono legale): spiega le regole con empathy + alternative",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Spiegare politiche (rimborso, uso, abuso) con tono umano e opzioni utili.",
  prompt: `Politica: []
Cassa clienti: []
Alternative: [credito / pausa / cambiamento piano]

Scrivi un'email con:
(1) Caso (3).
2) Convalida + sommario caso.
3) Semplice spiegazione della politica e perché esiste.
4) Come si applica al caso (senza suono accusatorio).
5) 2-3 alternative con passi.
6) Single CTA.`,
  thumbnail: ""
},
{
  id: "sop-email-023",
  title: "E-mail di \"conferma dei requisiti\" prima di andare avanti (ridotte sorprese): autorizzazioni, piano, ambiente",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Verificare i requisiti (piano / ruolo / compatibilità) prima di provare una soluzione complessa.",
  prompt: `Azione obiettivo: []
Requisiti: [pian / ruolo / browser]
[]

Scrivi un'email con:
(1) Caso (3).
2) Spiegare che per rendere veloce abbiamo bisogno di confermare i requisiti.
3) Lista di controllo (8-12) con:
- piano
- ruolo
- browser / OS
- configurazione
4) Se non soddisfa il requisito: alternative (3).
5) Single CTA: rispondere con la lista completa.`,
  thumbnail: ""
},
{
  id: "sop-email-024",
  title: "'Indirizzi di amministrazione' e-mail: passi esatti + lista di conferma",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Testo perfetto per il cliente di inviare all'amministratore senza perdere contesto.",
  prompt: `Azione admin: []
Percorso sul prodotto: []
Cosa confermare: []

Creare un'email all'utente con:
(1) Caso (2).
2) Blocco segnalabile all'amministratore tra cui:
- contesto breve
- passi esatti (numerati)
- confermare alla fine
- cattura che sarebbe utile (opzionale)
3) Chiusura a suola e CTA.`,
  thumbnail: ""
},
{
  id: "sop-email-025",
  title: "Email ' messaggio finale' per chiusura automatica: porta amichevole, utile e aperta",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Chiudere il biglietto senza risentimento: cosa è stato provato, come riaprire e le risorse.",
  prompt: `Riepilogo dei casi: []
Cosa mancava dal cliente: []
Risorse: []

Scrivi un'email con:
(1) Caso (3).
2) Indicare che chiuderemo il biglietto per ora (tono morbido).
3) Riepilogo del tentativo (3 proiettili).
4) Come riaprire: "rispondere a questa e-mail con X."
(5) Risorse consigliate (3).
6) Chiudere caldo.`,
  thumbnail: ""
},

{
  id: "sop-email-026",
  title: "Email 'bug confirm' (senza promessa ETA): riconoscimento + background + aggiornamenti successivi",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Conferma bug senza date promettenti: cosa faremo e come ti terremo informati.",
  prompt: `[]
[]
[sì / no]
Priorità: []

Scrivi un'email con:
(1) Caso (3).
2) Confermare che è un bug + breve scuse.
3) Operazione (se presente) con passaggi chiari.
4) Quali dati continuiamo a indagare (2-3 punti).
5) Come daremo aggiornamenti (senza ore esatte).
6) CTA singolo: confermare se lavori di lavoro / inviare prove.`,
  thumbnail: ""
},
{
  id: "sop-email-027",
  title: "Email per 'bug non riproducibile' (senza incolpare): chiedere dettagli corretti e mantenere la fiducia",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Quando non riproduci il bug: come chiedere prove senza frustrare.",
  prompt: `[]
Cosa hai provato: []
[]

Scrivi un'email con:
(1) Caso (3).
2) Spiegare che vogliamo replicarlo per risolverlo definitivamente.
3) Basta chiedere il necessario (checklist 8-10) con esempi.
4) Offre 2 alternative rapide:
- video 20
- chiamata breve
5) CTA singolo e chiusura umana.`,
  thumbnail: ""
},
{
  id: "sop-email-028",
  title: "Email 'pay walkway' (Stripe / PayPal): come spiegare i guasti senza incolpare la banca o il cliente",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Modello per pagamenti falliti con tono neutro, passi concreti e alternative.",
  prompt: `Errore: []
Pagamento: [iscrizione / una volta]
Paese: []

Scrivi un'email con:
(1) Caso (3).
2) Spiegazione neutrale delle cause comuni (4 proiettili).
3) Passi per risolvere (6-8).
4) Alternativa: un'altra carta / metodo / collegamento.
5) Single CTA: confermare se si potrebbe completare e quale errore si vede se non.`,
  thumbnail: ""
},
{
  id: "sop-email-029",
  title: "E-mail 'ambiente non supportato' (browser / OS): dire con tocco + opzioni reali",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Comunicare incompatibilità senza suono arrogante: offre strade e verifiche.",
  prompt: `Ambiente attuale: []
Ambiente di supporto: []
[]

Scrivi un'email con:
(1) Caso (3).
2) Spiega la compatibilità in modo amichevole.
3) 2 opzioni specifiche per continuare oggi.
4) Passi per aggiornare / modificare (breve).
5) Single CTA: confermare se è possibile con opzione A o B.`,
  thumbnail: ""
},
{
  id: "sop-email-030",
  title: "E-mail 'problema intermittente': isolare variabili con poche domande + piano di monitoraggio",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Per errori casuali: chiedere un contesto utile e proporre un piano senza esaurire il cliente.",
  prompt: `[]
Frequenza: []
Contesto sospetto: [network / data]

Scrivi un'email con:
(1) Caso (3).
2) 6 domande ad alto valore (non più).
3) Richiesta facoltativa di prove (video 20s).
4) Piano di follow-up: cosa proveremo e come avvertiremo.
5) Single CTA.`,
  thumbnail: ""
},

{
  id: "sop-email-031",
  title: "Email per 'accesso al contenuto / corso': spiegare blocco, convalidare l'acquisto e recuperare l'accesso",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Caso modello per \"bought ma non visto\": convalida e-mail, stato di pagamento e soluzione.",
  prompt: `Prodotto acquistato: []
Email utilizzata per l'acquisto: []
Piattaforma []
Stato: [bloccato / non mostrato]

Scrivi un'email con:
(1) Caso (3).
2) Acquisizione valida in 3 dati (senza PII sensibile).
3) Passi per accedere correttamente (6-8).
4) Se hai usato e-mail sbagliata: come risolvere.
5) Single CTA: rispondere con i 3 dati per individuare l'acquisto.`,
  thumbnail: ""
},
{
  id: "sop-email-032",
  title: "E-mail 'richiesta di eccezione' (grande caso): come chiedere l'approvazione interna e rispondere al cliente",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Due e-mail: una interna per chiedere l'eccezione e una al cliente mentre è recensito.",
  prompt: `[]
Politica: []
Perché è grigio: []
Che eccezione è richiesta: []

Crea:
(A) E-mail interna al supervisore:
- soggetto
- sintesi
- prove
- raccomandazione
- rischio
- risposta richiesta

(B) E-mail del cliente:
- soggetto
- No. Grazie.
- Stiamo indagando.
- cosa ci serve se manca qualcosa
- prossimo aggiornamento (non esatto)`,
  thumbnail: ""
},
{
  id: "sop-email-033",
  title: "E-mail 'richiesta di conferma finale': checklist a 3 punti per chiudere in sicurezza",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Prima della chiusura: confermare con il cliente in 3 controlli ed evitare la riapertura.",
  prompt: `Soluzione applicata: []
Caratteristica: []
[]

Scrivi un'email con:
(1) Caso (2-3).
2) 3 assegni da confermare (in bollettini).
3) Se qualcosa fallisce: 1 CTA per rispondere con le prove minime.
4) Molto vicino.`,
  thumbnail: ""
},
{
  id: "sop-email-034",
  title: "Email 'migrazione / cambiamento importante': istruzione chiara + prima / dopo + 'che fare oggi '",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Comunicare grandi cambiamenti con guida pratica e trasmissione tranquilla.",
  prompt: `[]
[]
Data:
Azioni necessarie: []

Scrivi un'email con:
(1) Caso (4).
2) Riepilogo esecutivo (3 proiettili).
3) Prima vs dopo (6 proiettili).
4) Che cosa l'utente dovrebbe fare oggi (max 5 passi).
5) E se non fa nulla (onesta).
6) FAQ mini (6).
7) Vicino con CTA unico.`,
  thumbnail: ""
},
{
  id: "sop-email-035",
  title: "Email 'renewal / next collection': preventivo, chiaro, riduce le controversie",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Avviso di ristrutturazione: data, importo, come annullare / modificare, ed evitare reclami.",
  prompt: `Piano: []
Quantità: []
Data:
Come annullare: [route / step]

Scrivi un'email con:
(1) Caso (4).
2) Informazioni chiave (data, importo, metodo) in proiettili.
3) Come aggiornare il pagamento (steps 4-6).
4) Come annullare o modificare il piano (passi).
5) FAQ mini (5).
6) Molto vicino.`,
  thumbnail: ""
},

{
  id: "sop-email-036",
  title: "Email 'review request / feedback' (dopo la risoluzione): breve, umano e utile per migliorare",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Ordine feedback indisturbato: 2 domande utili e risposta rapida opzione.",
  prompt: `Caso risolto: []
[]

Scrivi un'email con:
(1) Caso (3).
2) Riconoscimento + conferma che è stato risolto.
3) 2 domande ultra semplici:
- Hai trovato la soluzione?
- No. Cosa potremmo fare di meglio?
4) CTA: rispondere con un numero opzionale (1-5) e 1 linea.
Include una versione super breve.`,
  thumbnail: ""
},
{
  id: "sop-email-037",
  title: "Email 'VIP / premium client': tono ultra-cura + accelerazione + proprietà",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Risposta Premium: proprietà totale, passi chiari e follow-up proattivo (senza promessa).",
  prompt: `Cliente: [VIP]
[]
Priorità: []

Scrivi un'email con:
(1) Caso (3).
2) Apertura Premium (calda, corta).
3) Proprietà: "Mi prendo cura di me stesso".
4) Piano in 3 passi + quello che mi serve (se applicabile).
5) impegno di follow-up (senza tempi esatti promettenti).
6) Elegante chiusura + firma.`,
  thumbnail: ""
},
{
  id: "sop-email-038",
  title: "Email 'utente confuso con la piattaforma': guida di navigazione + risorse + proposta per il prossimo passo",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Aiuta l'utente a trovarsi: 3 percorsi tipici, consigli e CTA unico.",
  prompt: `Uscita: []
Cosa cerca l'utente: []
Livello:

Scrivi un'email con:
(1) Caso (3).
2) Spiega in 2 linee "come navigare".
3) 3 percorsi tipici (A / B / C) con gradini.
4) 5 consigli per evitare errori comuni.
(5) Risorse consigliate (3).
6) Single CTA: dicci quale percorso vuoi seguire.`,
  thumbnail: ""
},
{
  id: "sop-email-039",
  title: "Email 'Applicazione legale / abbonamento annullato per abuso': fermo, professionale e con limiti chiari",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Modello per situazioni sensibili: limiti, riferimento politico e canale corretto.",
  prompt: `Stato: [abuso / frode / richiesta legale]
Politica: []
Cosa puoi dire:

Scrivi un'email con:
(1) Caso (3).
2) Una risposta ferma e rispettosa.
3) Breve riferimento ai termini / policy (senza copiare testo lungo).
4) Quali passi l'utente può prendere (se applicabile).
5) Chiudere che impedisce l'arrampicata.
Include una versione super breve.`,
  thumbnail: ""
},
{
  id: "sop-email-040",
  title: "Email 'integration reconnection' (OAuth / webhooks): passaggi chiari + verifica + cosa inviare se non si riesce",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Guida per riconnettere le integrazioni con la verifica e la richiesta di prova minima.",
  prompt: `Integrazione: []
[]
Piattaforma []

Scrivi un'email con:
(1) Caso (3).
2) Passi per scollegare e riconnettere (8-12) con "che cosa vedrete".
3) Passo di controllo: come testare in 1 minuto.
4) Se fallisci: 6 dati da inviare (capture, errore, timestamp, account).
5) Single CTA.`,
  thumbnail: ""
},

{
  id: "sop-email-041",
  title: "Email 'data update confirm' (profilo / fatturazione): sommario + cosa recensire",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Conferma le modifiche dei dati: cosa è stato aggiornato e come verificare (riduce i biglietti).",
  prompt: `[]
Data precedente: [opzionale]
Nuovi dati: []
Cosa verificare: []

Scrivi un'email con:
(1) Caso (3).
2) Conferma del cambiamento.
3) 3 controlli di verifica.
4) Cosa fare se si vede qualcosa di strano (unità CTA).
5) Chiusura breve e gentile.`,
  thumbnail: ""
},
{
  id: "sop-email-042",
  title: "Email 'risposta alla carica' (ricarica): tono serio + passi + prove",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Template per gestire i chargeback: raccogliere dati, spiegare il processo e cercare la risoluzione.",
  prompt: `Sentiero: []
Posizione: []
Motivo di disputa: []
Stato: [aperto]

Scrivi un'email con:
(1) Caso (3).
2) Una breve spiegazione del processo e perché è necessario risolverlo direttamente.
3) Quali dati abbiamo bisogno (controlla 8) per indagare.
4) Opzioni di risoluzione (secondo la politica).
5) Singola CTA e tono molto professionale.`,
  thumbnail: ""
},
{
  id: "sop-email-043",
  title: "Email 'soluzione in 2 opzioni': A / B per il cliente scegliere senza confusione",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Offre due modi chiari (lavoro contro correzione) e riduce il tempo di decisione.",
  prompt: `[]
Opzione A: [veloce]
Opzione B: [più completo]
[]

Scrivi un'email con:
(1) Caso (3).
2) Breve sintesi del problema.
3) Opzione A:
- passi (3-6)
- Pro / contro
4) Opzione B:
- passi (3-6)
- Pro / contro
5) Single CTA: "risponde A o B" + 1 dati se necessario.`,
  thumbnail: ""
},
{
  id: "sop-email-044",
  title: "Email 'documentazione personalizzata': spiega un processo al cliente con mini-guida creata per il tuo caso",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Mini-doc all'interno dell'e-mail: guida a passi adattati al caso reale del cliente.",
  prompt: `Il cliente vuole ottenere: []
Contesto (roli / piano): []
Restrizioni:

Scrivere una e-mail di mini-documentazione con:
(1) Caso (3).
2. "Obiettivo" e "Esito atteso".
3) Requisiti precedenti.
4) Passi (10-14) con:
- azione
- risultato atteso
- errore tipico e soluzione
5) Checklist verifica finale.
6) Single CTA per confermare il successo o dire quale passo è rimasto.`,
  thumbnail: ""
},
{
  id: "sop-email-045",
  title: "Email 'onboarding template' post-acquisto: accesso, primi passi, risorse e supporto",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Benvenuto email dopo l'acquisto: accesso, avvio rapido e dove chiedere aiuto.",
  prompt: `Uscita: []
Accesso: [route]
Risorse: [link o titoli]
[]

Scrivi un'email con:
(1) Oggetto (5 opzioni).
2) Benvenuto + ciò che include.
3) Come accedere (steps 4-6).
4) Quickstart (3 azioni per la prima vittoria).
5) Risorse (3) + comunità (se presente).
6) Supporto: come chiedere aiuto (cosa includere).
7) Chiudere caldo.`,
  thumbnail: ""
},

{
  id: "sop-email-046",
  title: "Email 'respond to feature request': convalidare, chiarire e convertire in insight attuabili",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Risponde alle richieste di funzionalità senza promettere: domande utili e follow-up.",
  prompt: `Richiesta del cliente: []
Stato della roadmap: [non noto / no / forse]
[]

Scrivi un'email con:
(1) Caso (3).
(2) Validazione e apprezzamento.
3) 5 domande per comprendere il caso di utilizzo (valore massimo).
4) Che cosa possiamo suggerire oggi (in giro) se si applica.
5) Che cosa faremo con feedback (senza promessa).
6) Single CTA: rispondere a tutte le 5 domande.`,
  thumbnail: ""
},
{
  id: "sop-email-047",
  title: "Email 'SLA Response' (quando ci vuole tempo): trasparenza + passi successivi + calma",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Quando non c'è una soluzione immediata: come comunicare con la trasparenza senza irritare.",
  prompt: `[]
Motivo di ritardo: [dipende da terze parti / ha bisogno di ingegneria]
[sì / no]
[]

Scrivi un'email con:
(1) Caso (3).
2) Riconoscere l'urgenza del cliente.
3) Spiegare perché ci vorrà di più (senza tecnicità).
4) Cosa faremo nel frattempo (3 proiettili).
5) Operazione (se presente).
6) Single CTA: confermare se la soluzione di lavoro aiuta / inviare dati mancanti.`,
  thumbnail: ""
},
{
  id: "sop-email-048",
  title: "E-mail 'conferma parziale di ritorno' o regolazione: ripartizione chiara e come si riflette",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Per rimborsi parziali / modifiche: ripartizione chiara, ragione e passi da verificare.",
  prompt: `Importo totale: []
Importo rettificato: []
Motivo: [valutazione / sconto / regolazione]
Sentiero: []

Scrivi un'email con:
(1) Caso (3).
(2) Breve spiegazione dell'adeguamento.
3) Ripartizione in pallottole (placeholders).
4) Come si rifletterà (tempo e dove guardare).
5) Single CTA: rispondere se non si vede dopo X giorni lavorativi (senza una promessa esatta).`,
  thumbnail: ""
},
{
  id: "sop-email-049",
  title: "Email 'fraud prevention message' (non carica): verifica aggiuntiva e passo successivo",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Quando il sistema segna un rischio: chiedere una verifica extra senza accusare o allarmare.",
  prompt: `Segno di rischio: []
Ciò che richiede: [verificazione]
Tono: [molto professionale]

Scrivi un'email con:
(1) Caso (3).
2) Spiegazione neutrale: "per la sicurezza".
3) Che cosa abbiamo bisogno (2-3 metodi consentiti) con esempi.
4) Quello che non chiediamo mai.
5) CTA singolo + chiusura tranquilla.`,
  thumbnail: ""
},
{
  id: "sop-email-050",
  title: "E-mail interna \"recap\" per attrezzature (handoff): sommario caso, stato, rischi e azione successiva",
  area: "Supporto clienti & SOP",
  category: "E-mail",
  summary:
  "Interno perfetto Handoff: contesto, stato, prove, rischi e azione successiva.",
  prompt: `[]
Cliente: [senza PII]
Stato: []
Blocchi: []
Prove: []
Prossima azione: []

Scrivere una email interna con:
1) Emissione standard.
2) Riepilogo dei casi (3 proiettili).
3) Timeline (3-6 eventi con timstamps).
4) Che cosa è stato testato e risultati.
5) Rischi / impatto.
6) Prossima azione chiara + proprietario raccomandato.
Include una versione breve per Slack.`,
  thumbnail: ""
}];