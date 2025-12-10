// src/lib/prompts/text/soporte-tecnico-scripts.js

export const textPromptsSoporteTecnicoScripts = [
{
  id: "sop-tech-001",
  title: "Scrittura di diagnosi tecnica universale (web / app): 12 domande + albero di decisione",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script completo per diagnosticare gli incidenti tecnici senza perdere tempo: domande, rami e azione successiva.",
  prompt: `Prodotto: [web / app]
Tipo di incidenza segnalata: [nessun carico / errore / non effettuare il login / ecc.]
Livello utente: [basic / medium / avanzato]
Canale: [chat / email / Whatsapp]
Dati disponibili: [capture / URL / errore di codice]

Creare uno script agente con:
1) Apertura ambasciata (2 varianti) + sommario dei problemi (parafrasi).
2) 12 domande diagnostiche (in ordine ottimale) con:
- quello che stiamo cercando di confermare
- come ordinarlo in linguaggio non tecnico
- quale risposta prevista
3) Albero di decisione (min. 18 rami) "se X → allora Y", che copre:
- browser / dispositivo
- rete / VPN
- estensioni / adblock
- cache / cookie
- Permissioni / ruoli
- riunione / 2FA
4) "Quick fixes" (8) con istruzioni passo dopo passo.
5) Segni di bug reali (8) + quando salire a L2 / ingegneria.
6) Elenco dei dati per scaling (15 campi) + modello di handoff interno.
7) Messaggio di chiusura con prevenzione (3 varianti).`,
  thumbnail: ""
},
{
  id: "sop-tech-002",
  title: "Script: 'Don't let me log in' (password, 2FA, magic link, SSO) con soluzioni sceniche",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script completo per problemi di login con filiali password, 2FA, link, SSO e blocchi.",
  prompt: `Metodo di accesso: [email / pass-124; magic link-124; Google-124; SSO]
Piattaforma: [web / app]
Regione / paese: []
Messaggio di errore (se presente): []

Scrivere uno script di supporto per il login con:
1) Apertura + verifica dell'identità (senza chiedere password).
2) Diagnosi del blocco:
A) E-mail sbagliato / account non esiste
B) Password sbagliata / reset non arriva
C) 2FA (codice non arriva, app, decinchronization)
D) link magico scaduto / non arrivato
E) SSO (dominio, autorizzazioni, SCIM se applicabile)
F) Conto bloccato / troppi tentativi
3) Per ogni blocco:
- passi chiari (5-10)
- cosa dovrebbe vedere l'utente
- soluzione alternativa se fallisci
4) Modelli pronti:
- acquisizione ordini (senza PII)
- spiega perché non chiediamo la password
- conferma della risoluzione
5) Criteri di scala (10) + dati minimi (15).`,
  thumbnail: ""
},
{
  id: "sop-tech-003",
  title: "Script: errore di pagamento / mancato pagamento (3DS, banca, fondi, frode, fattura) + messaggi di accesso",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per risolvere pagamenti rapidi falliti con rami per causa e copia pronto per il cliente.",
  prompt: `Sentiero: [Stripe / PayPal / altri]
Modello: [iscrizione / una volta]
Errori visti: [se c'è, incolla]
Paese del cliente: []

Crea uno script di pagamento fallito con:
1) Domande minime (6) per diagnosticare senza attrito.
2) Albero di decisione (min. 16 rami) per motivi:
- fondi
- limite bancario
- 3DS / OTP non completato
- carta non supportata
- AVS / CVC
- blocco antifrode
- VPN / posizione
- dati fiscali
3) Per ogni ramo:
- spiegazione umana (non colpevole)
- passi concreti
- alternativa (altre carte, trasferimento, link manuale)
4) Modelli di risposta (10) per fase.
5) Come gestire "Sono stato addebitato due volte" (passo per passo).
6) Quando salire e che login per ordinare (senza esporre dati sensibili).`,
  thumbnail: ""
},
{
  id: "sop-tech-004",
  title: "Script: 'La pagina non carica / rimane vuota' (web) - cache, estensioni, DNS, stato, HAR",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Scrittura specifica per pagine di carico vuote o infinite con passaggi in ordine ottimale.",
  prompt: `URL interessato: []
Browser: [Chrome / Safari / ecc.]
Dispositivo: []
Colpisce diversi utenti? [sì / no / non so]

Creare uno script con:
1) Controllo rapido: pagina di stato / incidenti / manutenzione (cosa dire).
2) Passi in ordine (12-18):
- Modalità di riconoscimento
- disabilitare le estensioni / adblock
- cache pulita / cookie dal sito
- cambiare browser
- modificare la rete
- disabilitare VPN / proxy
- controllare DNS / colore (se applicabile) spiegato semplice
3) Quali informazioni chiedere in ogni fase (senza vertigini).
4) Se persiste: come raccogliere prove:
- console (errore di copia)
- file HAR (come esportarlo)
- Cattura di timestamp
5) Criteri di scala + modello di biglietto tecnico interno.`,
  thumbnail: ""
},
{
  id: "sop-tech-005",
  title: "Script: 'Non ricevo e-mail' (reset, fatture, notifiche): spam, filtri, domini aziendali",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per risolvere il problema della liberabilità: controlla Gmail / Outlook e sali su IT.",
  prompt: `Tipo di e-mail: [reset / login / fattura]
Fornitore: [Gmail / Outlook / corporate]
Dominio del cliente: [se applicabile]

Creare uno script con:
1) Elenco di controllo in 8 passaggi (ordinato per probabilità).
2) Passi per fornitore:
- Gmail: promozioni / spam / filtri / ricerca
- Outlook: spazzatura / regole / mittenti bloccati
3) Whitelisting: cosa aggiungere e come (passi).
4) Caso aziendale:
- come chiedere aiuto all'IT del cliente (templato)
- quali dati chiedere (non complicati)
5) Segnala che l'email è stata inviata vs no (cosa rivedere internamente).
6) Risposta (8) + chiusura preventiva.`,
  thumbnail: ""
},

{
  id: "sop-tech-006",
  title: "Script: 'File uploading fails' (formati, dimensioni, autorizzazioni, rete) + soluzioni con alternative",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Carica script di errore con rami per dimensione, formato, autorizzazioni, rete e browser.",
  prompt: `Tipo di file: [immagine / video / pdf]
Dimensioni: []
Messaggio errore: []
Piattaforma: [web / app]

Creare uno script con:
1) Diagnosi minima (7 domande).
2) Albero di decisione (14 rami) da:
- formato non supportato
- dimensioni superate
- raro nome file / caratteri
- rete instabile
- autorizzazioni / fotocamera / archiviazione (mobile)
- vecchio browser
3) Soluzioni passo-passo (10), tra cui:
- compressione raccomandata (senza strumenti specifici se non si desidera)
- formato di conversione
- caricare da un altro browser / app
4) Prove per scaling (log / console) + modello di report interno.`,
  thumbnail: ""
},
{
  id: "sop-tech-007",
  title: "Script: 'Ha raddoppiato una carica sconosciuta / carica' (billing): verifica, calma e risoluzione",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Maniglia doppia collezione o carica non riconosciuta con protocollo chiaro e tono calmo.",
  prompt: `Sentiero: []
Piano / prodotto: []
Data dell'ufficio: []
Quantità: []
E-mail del cliente: []

Creare uno script con:
1) Apertura calmante + validazione emotiva.
(2) Verifica dell'identità sicura (senza dati sensibili).
3) Diagnosi dello scenario:
- autorizzazione in sospeso contro oneri effettivi
- rinnovo + acquisto aggiuntivo
- tasse
- più account
4) Passi della lista di controllo interna.
(5) Risoluzione:
- spiegazione
- rimborso (se applicabile)
- evitare le accuse future (cancellazione)
6) Modelli (10) e quando scalare a rischio / frode.`,
  thumbnail: ""
},
{
  id: "sop-tech-008",
  title: "Script: 'Nuovo aggiornamento ha rotto qualcosa' + come guidare l'utente nelle modifiche UX",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Post-release report script: confermare impatto, sfondo e comunicazione chiara.",
  prompt: `Cambiamento segnalato: []
Traduzione:
Caratteristica: []
C'e' una soluzione? [Si]

Creare uno script con:
1) Come confermare se è bug vs cambiamento intenzionale (questioni).
2) Come spiegare i cambiamenti UX senza un suono difensivo.
3) 8 frasi utili per guidare "dove è ora".
4) Allenamenti temporanei (se applicabile) + come comunicarli.
(5) Modelli:
- bug acuse
- aggiornamento senza notizie
- risoluzione / chiusura
6) Dati tecnici minimi (Checklist 15).`,
  thumbnail: ""
},
{
  id: "sop-tech-009",
  title: "Script: 'Slow going / performance' (web / app): metriche, rete, dispositivo, ottimizzazione e scaling",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Protocollo per le prestazioni: domande corrette, vincite rapide e come misurare il miglioramento.",
  prompt: `Piattaforma: [web / app]
Che cosa si sente lento: [carico / azione X / ricerca / esportazione]
Regione: []
Dispositivo: []

Creare uno script con:
1) Definire "slow" con metriche semplici (tempo approssimativo).
2) Diagnosi del livello:
- rete
- browser / app
- dispositivo
- account / dati (volume)
3) Vince rapidamente (10) con ordine raccomandato.
4) Come chiedere prove utili senza essere pesanti:
- breve video con timer
- Console cattura (se web)
5) Criteri di scaling (8) + dati minimi (15).`,
  thumbnail: ""
},
{
  id: "sop-tech-010",
  title: "Script: 'Non posso esportare / importare' (CSV / JSON): formati, codifica, limiti e errori comuni",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Esportazione / importazione script: convalida modello, codifica, separatori e limiti.",
  prompt: `Operazione: [export / import]
Formato: [CSV / JSON]
Errore: []
Dimensioni: [rows / MB]
Piattaforma []

Creare uno script con:
1) Lista di controllo convalida (10) prima di incolpare il sistema.
2) Problemi tipici:
- separatore coma / punto e coma
- codifica UTF-8
- colonne obbligatori assenti
- tipi di campo (data / numero)
- limiti
3) soluzioni spiegate passo dopo passo (12).
4) Supporto (8) + dati da scalare se non riesce.`,
  thumbnail: ""
},

{
  id: "sop-tech-011",
  title: "Script: autorizzazioni / ruoli - 'Non vedo X / non posso fare Y' (diagnosi e risoluzione)",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per problemi di autorizzazioni con passaggi chiari e messaggi per gli amministratori.",
  prompt: `Sistema di rotazione: [admin / membro / ecc]
Azione bloccata: []
[]

Creare uno script con:
1) Confermare il ruolo attuale (come ordinare la cattura o il percorso).
2) 10 segni che è permesso problema vs bug.
3) Passi per:
- chiedere all'amministratore di cambiare ruolo
- verificare l'accesso allo spazio di lavoro giusto
- aggiornare le autorizzazioni (login / login)
(4) Modelli:
- messaggio all'utente
- messaggio per l'utente di inviare all'amministratore
5) Criteri di scala (se corretti e persistenti) + dati minimi.`,
  thumbnail: ""
},
{
  id: "sop-tech-012",
  title: "Script: sessione / dispositivi - 'mi porta fuori / chiude sessione / loop di login '",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per loop di login, cookie, sessioni multiple, SSO e blocchi.",
  prompt: `Piattaforma: [web / app]
Frequenza: [sempre / a volte]
Sfogliatore: []
VPN: [si / no]

Creare uno script con:
1) Controllo rapido (8).
2) Soluzioni (12), tra cui:
- cookie di dominio pulito
- disabilitare il blocco dei cookie di terze parti (spiegato)
- orologio del dispositivo di controllo (2FA / SSO)
- chiudere sessioni aperte (se presenti)
3) Prove: cattura, console, SAR.
4) Supporto (8) + scaling.`,
  thumbnail: ""
},
{
  id: "sop-tech-013",
  title: "Script: le notifiche non arrivano (push / in-app / email): configurazione, autorizzazioni e test",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per le notifiche: impostazioni, autorizzazioni, do-not-disturb e test controllati.",
  prompt: `Tipo: [push / in-app / email]
Dispositivo: [iOS / Android / Web]
Evento da segnalare: []

Creare uno script con:
1) Confermare la configurazione all'interno del prodotto (steps).
2) Per la spinta:
- permessi del sistema operativo
- notizie silenziose
- risparmio batteria
3) Per e-mail:
- consegna di base
4) Per in-app:
- filtri / segmentazione
5) Test controllato: come generare un evento di prova.
6) Modelli (8) e lista di controllo scalazione (15).`,
  thumbnail: ""
},
{
  id: "sop-tech-014",
  title: "Script: bug intermittenti - come giocare, isolare le variabili e documentare bene",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Sceneggiatura per casi rari: isolare le condizioni, raccogliere prove ed evitare loop di domanda.",
  prompt: `[]
Frequenza: [1 / 10, 1 / giorno]
Contesto sospetto: [network / data / caratteristica]

Creare uno script con:
1) Domande per isolare le variabili (12) da:
- tempo
- volume dati
- browser
- caratteristiche lags
2) Come ordinare "passi per giocare" senza frustrare (testo esatto).
3) Come richiedere prove minime (video 20s, cattura).
4) Modello di ingegneria interna con campi ed esempio.
5) Messaggi di aggiornamento (non notizie) (3 variazioni).`,
  thumbnail: ""
},
{
  id: "sop-tech-015",
  title: "Script: integrazione con terze parti (Zapier / Meta / Google) + limiti di supporto non danneggiati",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script di integrazione: convalidare autorizzazioni, token, limiti di tasso e determinare la responsabilità.",
  prompt: `Integrazione: []
Azione:
Errore: []
Tokens / API chiavi: [sì / no]

Creare uno script con:
1) Collegare Checklist (10).
(2) La diagnosi dei casi:
- token scaduto
- Permessi insufficienti
- limiti di tasso
- modifiche al terzo
- webhooks caduti
3) Soluzioni passo-passo (12) + lavoro.
(4) Modelli:
- richiesta di cattura di terzi
- spiega i limiti di supporto
- guida al supporto di terzi (messaggio pronto)
5) Dati minimi per scalare internamente.`,
  thumbnail: ""
},

{
  id: "sop-tech-016",
  title: "Script: problema mobile (iOS / Android) - autorizzazioni, app cache, reinstallazione, versioni",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Specifico script mobile con passi del sistema operativo e la lista di controllo della compatibilità.",
  prompt: `OS: [iOS / Android]
Versione OS: []
Versione dell'app: []
[]

Creare uno script con:
1) Domande minime (8).
2) soluzioni OS:
- permessi (camera, microfono, stoccaggio)
- app / riavvio
- cache pulita (Android) / reinstallare (iOS)
- App di aggiornamento e OS
3) Compatibilità minima (come spiegarlo).
4) Prove da chiedere: registrazione dello schermo, passi.
5) Scala: dati minimi (modello di dispositivo, costruzione, ecc.).`,
  thumbnail: ""
},
{
  id: "sop-tech-017",
  title: "Script: 'Non posso cambiare la mia email / dati di fatturazione' (verificazione + passi)",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Procedura sicura per modifiche sensibili senza rischi di apertura del conto.",
  prompt: `Richiesta cambiamento: [email / nome fiscale / IVA / carta]
Rischio:
Verifica: [metodo]

Creare uno script con:
1) verifica dell'identità (senza richiedere dati pericolosi).
2) Passi guidati all'interno del prodotto (se presenti).
3) Se l'utente non ha accesso alla vecchia e-mail (scenarios).
(4) Modelli:
- richiesta di verifica
- conferma cambiamento
- negare per mancanza di prove (con alternativa)
5) Escalation interno della ricerca e della sicurezza se si sospetta.`,
  thumbnail: ""
},
{
  id: "sop-tech-018",
  title: "Script: 'Il mio account è stato compromesso' - protocollo di sicurezza (containment, recupero, prevenzione)",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Manuale di sicurezza per il supporto: passi immediati, comunicazione sicura e arrampicata.",
  prompt: `Segnali di segnalazione: [modifiche non autorizzate / login straniero]
Accesso utente: [sì / no]
2FA: [si / no]

Creare uno script con:
1) Messaggio iniziale (suggerimento + urgente) + quello che faremo.
2) Contenimento immediato:
- reset password
- attivare 2FA
- sessioni ravvicinate
- controlla l'email dell'account
(3) Prove minime da raccogliere.
4) Quando bloccare temporaneamente e salire.
(5) Modelli:
- istruzioni all'utente
- aggiornamento durante le indagini
- chiusura con prevenzione
6) Elenco di "non fare" (10) per gli agenti (privacy / legale).`,
  thumbnail: ""
},
{
  id: "sop-tech-019",
  title: "Script: 'Ottengo un errore 500 / 502 / 503' - come comunicare, dove guardare e cosa ordinare",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script di errore lato server: comunicazione, workaround, raccolta e scaling.",
  prompt: `Errore: [500 / 502 / 503]
Frequenza: []
Percorso / caratteristica: []
Regione: []

Creare uno script con:
1) Messaggio umano: riconosciamo + chiediamo 2 dati.
2) Verificare la pagina di stato / incidente e come dirlo.
3) Operazioni (5) assicurazione.
4) Dati minimi per lo scaling:
- timestamp
- richiesta
- conteggio
- passi
- ambiente
5) Modelli per:
- incidente in corso
- senza incidenti, ma indagamo
- risolto`,
  thumbnail: ""
},
{
  id: "sop-tech-020",
  title: "Script: 'Non funziona nella mia azienda' (firewall, proxy, domini bloccati) + modello per IT",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per ambienti aziendali: proxy, whitelist, porte e comunicazione con IT.",
  prompt: `Azienda: []
Simbolo: [no load / no login]
Rete: [corporate]
Disponibile: [sì / no]

Creare uno script con:
1) Tipici segni di blocco aziendale.
2) Passi per confermare:
- utilizzare hotspot mobile
- provare da casa
3) Elenco dei requisiti generici per la whitelist:
- domini
- porti
- endpoints (se applicabile, lasciare i segnaposto)
4) E-mail modello per l'IT aziendale (chiaro, conciso, tecnico-friendly).
5) Come rintracciare senza frustrare l'utente.`,
  thumbnail: ""
},

{
  id: "sop-tech-021",
  title: "Script: ' Funziona per altri, per me no' - isolare account vs ambiente vs dati",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per isolare se si tratta di un tema account, dati specifici o ambiente utente.",
  prompt: `[]
Colpisce solo quell'utente? [Si]
Dati utente: [plan / role]

Creare uno script con:
1) Messaggio iniziale + ipotesi (non da biasimare).
2) Passi per isolare:
- prova un altro account
- provare un'altra rete
- provare un altro browser
- caratteristiche bandiere / ruoli
3) Se assomiglia a dati: cosa ordinare (ID, esempio minimo).
4) Modelli di aggiornamento e arrampicata.`,
  thumbnail: ""
},
{
  id: "sop-tech-022",
  title: "Script: 'La mia esportazione richiede troppo tempo' (coda, limiti, lavori) + come impostare le aspettative",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per processi asincroni: code, dimensioni, progresso e alternative.",
  prompt: `Processo: [export / import / render]
[]
Tempo previsto: []
Piano: []

Creare uno script con:
1) Come spiegare "queues" in lingua semplice.
2) Domande da valutare (6).
(3) Alternative:
- esportazione parziale
- filtri
- dividere il file
(4) Modelli:
- conferma che sta correndo
- aggiornamento senza notizie
- risoluzione
5) Criteri per l'arrampicata (lavoro bloccato, timeout) + dati minimi.`,
  thumbnail: ""
},
{
  id: "sop-tech-023",
  title: "Script: 'No change' (autosave) - autorizzazioni, cache, conflitti e limiti",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per salvare problemi: conflitti, autosave, autorizzazioni e errori silenziosi.",
  prompt: `Visualizzazione / funzione: []
Succede sempre?: []
Dispositivo: []

Creare uno script con:
1) Controlli di base (8) in ordine.
(2) Diagnosi:
- Permissioni / ruolo
- sessione scaduta
- conflitto di ciglia
- limiti di campo
- errore di rete
3) Soluzioni (12) con istruzioni.
4) Prove di scala:
- log console
- richiesta
- breve video
5) Supporto (8).`,
  thumbnail: ""
},
{
  id: "sop-tech-024",
  title: "Script: 'Webhooks non arriva' - verifica, reattempts, firma e risoluzione dei problemi",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script avanzato per integrazioni webhooks: endpoint, loghi, firme, reattempts ed errori.",
  prompt: `Traduzione:
Fine: [URL]
Firma / segreto: [sì / no]
Contatti: [sì / no]

Creare uno script con:
1) Elenco di verifica (10).
2) Diagnosi del fallimento:
- endpoint down.
- 4xxx / 5xx
- timeout
- firma non valida
- limitazione del tasso
3) Reattempts: come spiegarli e come provare.
4) Che login chiedere e come (senza esporre segreti).
5) Modelli per:
- chiedere prove tecniche
- spiega i limiti di supporto
- chiudere quando risolto`,
  thumbnail: ""
},
{
  id: "sop-tech-025",
  title: "Script: 'La app crashea' - passi di riproduzione, versione, crash logs e workaround",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Sceneggiatura per crash mobili / desktop: giocare, raccogliere prove e dare alternative.",
  prompt: `Piattaforma: [iOS / Android / Desktop]
Versione dell'app: []
Passo che si schianta: []
Frequenza: []

Creare uno script con:
1) Domande da giocare (10).
2) azioni immediate (aggiornamento, riavvio, riavvio).
3) Procedimento (5) realistico.
(4) Prove:
- dispositivo modello
- OS
- video
- log di crash (se applicabile, descrivere come)
5) Supporto (8) + escalation all'ingegneria.`,
  thumbnail: ""
},

{
  id: "sop-tech-026",
  title: "Script: 'Non posso scaricare / aprire contenuti' (PDF / video / corso) - DRM, browser, estensioni",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per problemi di contenuto digitale: riproduzione, download, blocchi, autorizzazioni e alternative.",
  prompt: `Tipo di contenuto: [PDF / video / streaming]
Piattaforma []
Sfogliatore: []
Errore: []

Creare uno script con:
1) diagnosi rapida (8).
2) Soluzioni per tipo:
- PDF: visualizzatore, autorizzazioni, blocchi
- Video: autoplay, DRM, browser, estensioni
3) Alternative: un altro browser, app, download diretto (se presente).
4) Prove di ordine (capture, console).
5) Macros (8) con tono calmo.`,
  thumbnail: ""
},
{
  id: "sop-tech-027",
  title: "Script: 'sync error' (dati incoerenti) - stati, aggiornamento, conflitti",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per i dati che non corrispondono: aggiornamento, cache, lavori, replica e verifica.",
  prompt: `Dati interessati: []
Dove differisce: [web vs app]
Frequenza: []

Creare uno script con:
1) Come descrivere il problema e confermare con esempi.
2) Controlli:
- Forte forte.
- login / login
- Aspetta.
- verifica filtri
3) Soluzioni (10) e come verificare la consistenza.
4) Quando è bug: segni (8).
5) Dati minimi per lo scaling (ID, timstamps).`,
  thumbnail: ""
},
{
  id: "sop-tech-028",
  title: "Script: 'Problem with 2FA' - codici di backup, orologio del dispositivo, applicazione di autenticazione",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Protocollo per 2FA: codici non validi, perdita del dispositivo e recupero sicuro.",
  prompt: `2FA: [TOTP / SMS / email]
L'utente ha perso l'accesso: [si / no]
Codici di backup: [sì / no]

Creare uno script con:
1) Diagnosi dello scenario (min. 8):
- orologio deconcronizzato
- app migrata
- codici utilizzati
- Gli SMS non stanno arrivando.
2) Passi per risolvere senza compromettere la sicurezza.
3) processo di recupero (se non è disponibile l'accesso):
- verifica dell'identità
- timeline
4) Modelli di supporto (10) + registrazione interna richiesta.`,
  thumbnail: ""
},
{
  id: "sop-tech-029",
  title: "Script: 'CORS / bloccato dal browser' (web avanzato) - spiegare semplici + dati per l'ingegneria",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per rari errori tecnici sul web: spiegare senza tecnicità e scala con le prove.",
  prompt: `Errore di console: [paste]
Azione:
Ambiente: [prod / staging]
Sfogliatore: []

Creare uno script con:
1) Messaggio al client (umano) spiegando che è una serratura del browser.
2) Controllo rapido:
- restrizioni societarie
- estensioni
- cookie / blocchi
(3) Richiesta di prove:
- Console di cattura
- HAR
- richiesta
4) Modello interno per dev con:
- passi
- atteso / corrente
- tronchi
- ambiente`,
  thumbnail: ""
},
{
  id: "sop-tech-030",
  title: "Script: 'Error 429 / limit rate' - spiegano limiti, soluzioni e aggiornamenti",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per limitare i tassi: cause, finestre, backoff e alternative.",
  prompt: `Azione che spara 429: []
Piano utente: []
Limiti attuali: [se li avete]

Creare uno script con:
1) Semplice spiegazione dei limiti di tasso.
2) Diagnosi: scoppio vs uso costante.
3) Soluzioni:
- finestra di attesa
- ridurre la frequenza
- richieste batch
- caching
(4) Modelli:
- spiegazione + passi
- consiglia l'aggiornamento (senza pressione)
5) Dati minimi da scalare se il limite sembra sbagliato.`,
  thumbnail: ""
},

{
  id: "sop-tech-031",
  title: "Script: 'Non posso collegare il mio dominio / DNS' - spiegazione per la lista di controllo non tecnico + per i record",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per collegare il dominio: A / CNAME / TXT, diffusione, TTL e verifica.",
  prompt: `Fornitore DNS: [GoDaddy / Cloudflare / ecc.]
Record previsto: [A / CNAME / TXT]
Errore: []

Creare uno script con:
1) Semplice spiegazione del DNS e diffusione (senza gergo).
(2) Elenco di verifica (12):
- corretta registrazione
- ospite
- TTL
- conflitto
3) Passi per tipo di registrazione (A / CNAME / TXT) con esempi di valori (placeholders).
4) Come controllare con strumenti (non nominare strumenti specifici se non si desidera).
5) Modelli per ordinare la cattura del pannello DNS (senza dati sensibili).
6) Quando salire e quali dati inviare all'ingegneria.`,
  thumbnail: ""
},
{
  id: "sop-tech-032",
  title: "Script: 'La mia API chiave non funziona' - autorizzazioni, ambiti, revoca e rotazione sicura",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "API key problem script: conferma gli ambiti, rigenera e buone pratiche.",
  prompt: `API: []
Errore: [401 / 403 / altro]
Uso: [server / client]
Regione: []

Creare uno script con:
1) Diagnosi del codice:
- 401 (auth)
- 403 (permessi)
- 404 (Estratto)
2) Lista di controllo:
- chiave corretta
- teste
- ambiti / ruoli
- ambiente prod vs test
(3) rotazione sicura:
- generare nuovo, revocare vecchio
- evitare di condividere i biglietti
4) Supporto (8) + dati minimi per lo scaling.`,
  thumbnail: ""
},
{
  id: "sop-tech-033",
  title: "Script: 'Camera / micro problemi' (web / zoom-like) - OS / browser autorizzazioni e test",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per fotocamera / micro autorizzazioni con passaggi per browser e OS.",
  prompt: `Piattaforma: [web]
Sfogliatore: []
[]
Dispositivo: []

Creare uno script con:
1) Controllo rapido (8).
2) Passi per abilitare le autorizzazioni in:
- Cromo
- Safari.
- Edge.
3) Tipici conflitti:
- un'altra applicazione utilizzando micro
- cuffie Bluetooth
- blocco aziendale
4) Test audio / video controllato.
5) Supporto (8) + arrampicata.`,
  thumbnail: ""
},
{
  id: "sop-tech-034",
  title: "Script: 'Il mio contenuto non appare / è disordinato' - cache, filtri, indicizzazione e autorizzazioni",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per i dati mancanti: filtri, indicizzazione, lavori e autorizzazioni.",
  prompt: `Contenuto: []
Dove dovrebbe apparire: []
Filtro utilizzato: []
Tempo dalla creazione: []

Creare uno script con:
1) Confermare filtri / ordine (passi).
2) Verificare autorizzazioni / ruolo / spazio di lavoro.
3) Indicazione attendere: come spiegarlo.
4) Soluzioni (10):
- Forte.
- cache pulita
- Retry
5) Segnali di bug (8) + dati per lo scaling (ID / timstamps).`,
  thumbnail: ""
},
{
  id: "sop-tech-035",
  title: "Script: 'Errore quando si invia il modulo' - validazioni, captcha, cookie, estensioni",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Lo script di default durante l'invio di moduli, comprese le validazioni invisibili e captcha.",
  prompt: `Modulo: [contatto / checkout / registrazione]
Errore: []
Sfogliatore: []
Adblock: [sì / no]

Creare uno script con:
1) diagnosi rapida (8).
2) Soluzioni:
- campi obbligatori completi
- disabilitare adblock
- consentire i cookie
- prova incognito
- riprovare in un'altra rete
3) Prove:
- cattura errori
- console
- timestamp
4) Modelli (8) + scaling.`,
  thumbnail: ""
},

{
  id: "sop-tech-036",
  title: "Script: 'Problem with links' (espire / non aprire) - monitoraggio, sicurezza, readdresses",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per link rotti o scaduti: cause, rigenerazione e alternative.",
  prompt: `Tipo link: [link magico / download / invito]
Messaggio: [espirato / invalido]
Email provider: []

Creare uno script con:
1) Cause tipiche (8) e come spiegarle.
2) Passi:
- chiedere di generare nuovi
- copia / incolla nel browser
- aperto in incognito
3) Caso: cliente aziendale con filtri anti-phishing.
4) Modelli (8) e criteri di arrampicata.`,
  thumbnail: ""
},
{
  id: "sop-tech-037",
  title: "Script: 'Problem con ristrutturazioni' - conferma stato, pagamenti, prorazioni e accesso",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per il rinnovo che non si applica o non è corretto accesso: fatturazione + stati di abbonamento.",
  prompt: `Piano: []
Data rinnovata: []
Stato di accesso: [attivo / inattivo]
Sentiero: []

Creare uno script con:
1) Domande diagnostiche (8).
(2) Check-list interno:
- stato di abbonamento
- ultimo pagamento
- invocare lo stato
- accettazione
(3) Risoluzioni:
- riprova
- riattivare
- regolare l'accesso
4) Modelli (10) + scalazione se dati inconsistenti.`,
  thumbnail: ""
},
{
  id: "sop-tech-038",
  title: "Script: 'I appaiono contenuti bloccati' - convalidare piano, cache, sincronizzazione, licenze",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Sbagliato incontri script: piano / ruolo, cache, licenze e stati.",
  prompt: `Contenuto: []
Piano utente: []
Sezione: []
Cambia se rinfresca?: [Si]

Creare uno script con:
1) Confermare il piano e le autorizzazioni (passi).
2) Controlli:
- login / login
- rinfrescare duro
- cancellare la cache dal sito
(3) Controllo interno:
- bracci di diritto
- data di scadenza
4) Risoluzione:
- sincronizzare l'accesso
- licenza di riassegnazione
5) Modelli (8) + criteri di arrampicata.`,
  thumbnail: ""
},
{
  id: "sop-tech-039",
  title: "Script: 'Timezone problem / date' (calendars, maturities) - orologio, regione, DST",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Data bug script: orologio del dispositivo, fuso orario, DST e formati.",
  prompt: `Caratteristica: [calendar / maturità]
Paese: []
Tempo sbagliato: []
Dispositivo: []

Creare uno script con:
1) Controllare orologio del dispositivo e fuso orario.
2) Impostazioni dell'account di revisione (se presenti).
3) Spiegare DST semplicemente.
4) Soluzioni (8) e verifica.
5) Dati minimi da scalare se persiste.`,
  thumbnail: ""
},
{
  id: "sop-tech-040",
  title: "Script: 'Bug in production' - come contenere, comunicare, raccogliere prove e chiudere il loop",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Playbook per veri bug: contenimento, aggiornamenti, coordinamento e comunicazione finale.",
  prompt: `[]
[P1-P4]
[sì / no]

Crea playbook con:
1) Messaggio iniziale al cliente (3 varianti per gravità).
(2) Contenuto:
- nel mondo
- azione limite
- funzione di pausa
3) Evidenza minima (check 15).
4) Aggiornamenti:
- Quanto?
- cosa dire senza promessa ETA
(5) Vicino:
- conferma con il cliente
- sintesi di ciò che è successo (alto livello)
- prevenzione / consulenza`,
  thumbnail: ""
},

{
  id: "sop-tech-041",
  title: "Script: 'Error 403 / Forbidden' - autorizzazioni, WAF, regione, cookie e autenticazione",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per 403: differenziare le autorizzazioni vs blocco di sicurezza e risolvere rapidamente.",
  prompt: `Via: []
Sfogliatore: []
VPN: [si / no]
Regione: []

Creare uno script con:
1) Diagnosi per ipotesi (permissioni contro serratura).
2) Controlli (10):
- login / login
- biscotti
- VPN
- altra rete
3) Se sembra WAF / blocco:
- ordinare IP pubblico (se applicabile) con spiegazione umana
- timestamp
(4) Modelli (8) + sicurezza / sotto.`,
  thumbnail: ""
},
{
  id: "sop-tech-042",
  title: "Script: 'Error 404' - link errato vs risorse cancellate vs autorizzazioni",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per 404: convalida URL, corretta navigazione, autorizzazioni e risorse cancellate.",
  prompt: `URL: []
[]
Azione:

Creare uno script con:
1) Controllare l'URL e se è obsoleto (passi).
2) Confermare se il ricorso è stato cancellato o spostato.
3) Permessi / ruoli: come confermarlo.
4) Soluzioni (8) + alternativa (ricerca dall'app).
5) Modelli (6) per rispondere rapidamente.`,
  thumbnail: ""
},
{
  id: "sop-tech-043",
  title: "Script: 'Cache problem' - aggiornamento duro, assistenti, dati del sito puliti",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Sceneggiatura per comportamento raro da parte di operatori di cache / servizi con passi sicuri.",
  prompt: `Simbolo: [old IU / modifiche non appaiono]
Browser: [Chrome / Safari]
Piattaforma: [web]

Creare uno script con:
1) Semplice spiegazione della cache.
2) Passi:
- rinfresco duro
- cache pulita / cookie dal sito
- pulito "dati del sito"
- disabilitare il lavoratore di servizio (se applicabile) spiegato amichevole
3) Come verificare che sia stato aggiornato.
4) Modelli (6) e scalazione se persiste.`,
  thumbnail: ""
},
{
  id: "sop-tech-044",
  title: "Script: 'Il mio invito a workspace non funziona' - scadenza, e-mail, autorizzazioni e inoltro",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script guest: scadenza, account duplicati, domini aziendali e corretto invio.",
  prompt: `Invito: [workspace / team]
Email degli ospiti: []
Scade: [sì / no]
Fornitore: []

Creare uno script con:
1) diagnosi:
- email corretta vs. alias
- conto preesistente
- invito scaduto
2) Passi per andare avanti correttamente.
3) Caso aziendale (filtri IT).
4) Modelli (8) per amministratore e per ospite.`,
  thumbnail: ""
},
{
  id: "sop-tech-045",
  title: "Script: 'Non posso ripristinare la password' - consegnabilità, gettoni scaduti, sicurezza",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Password reset script: nessuna e-mail, token non valido, blocchi e flusso sicuro.",
  prompt: `Email utente: []
Fornitore: []
Ricevete altre email?: [Si]
Token: [espirato / invalido]

Creare uno script con:
1) Checklist deliverability (8).
2) Resend reset: migliori pratiche.
3) Token scaduto: spiegazione e soluzione.
(4) Verifica dell'impegno sospetta.
5) Modelli (10) e scalazione alla sicurezza, se applicabile.`,
  thumbnail: ""
},

{
  id: "sop-tech-046",
  title: "Script: 'Non posso usare la funzione X' - convalidare bandiere, rollout, piano e regione",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Script per caratteristiche non disponibili: rollout graduale, lags, piani e regioni.",
  prompt: `Caratteristica: []
Piano: []
Regione: []
Traduzione:

Creare uno script con:
1) Confermare il piano / ruolo.
2) Confermare la regione e rollout:
- come spiegarlo senza frustrarsi
3) Workaround / alternative temporanee.
(4) Modelli:
- "non ancora disponibile"
- "già abilitato, prova questo."
5) Dati minimi per verificare i ritardi interni.`,
  thumbnail: ""
},
{
  id: "sop-tech-047",
  title: "Script: 'Errore quando si collega Google / Meta' (OAuth) - ambiti, blocchi popup, cookie",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "OAuth bug script: popup, cookie, ambiti, account multipli e autorizzazioni.",
  prompt: `OAuth fornitore: [Google / Meta]
Sfogliatore: []
Errore: []

Creare uno script con:
1) Controllo rapido:
- consentire popups
- cookies terza parte
- disabilitare adblock
(2) Bar:
- Permissioni negate
- Conto sbagliato.
- sono cambiati gli ambiti.
3) Passi per scollegare e riconnettersi in modo sicuro.
4) Prove di scalare se il fornitore fallisce.
5) Modelli (8).`,
  thumbnail: ""
},
{
  id: "sop-tech-048",
  title: "Script: 'Non posso generare / scaricare fattura' - dati fiscali, stati e documenti",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Scrittura di fattura: dati fiscali, IVA / IVA, dichiarazioni di pagamento e download.",
  prompt: `Sentiero: []
Paese: []
Tipo di documento: [ricezione / fattura]
Problema: [non appare / non scaricare]

Creare uno script con:
1) Verificare lo stato di pagamento (pay / pendente / recast).
(2) Verificare i dati fiscali (campi obbligatori).
3) Passi per scaricare.
4) Casi speciali: tassa applicata, azienda, IVA.
5) Modelli (10) + scaling se il documento non viene generato.`,
  thumbnail: ""
},
{
  id: "sop-tech-049",
  title: "Script: 'Mi blocca l'antivirus / adblock' - come guidare senza incolpare + alternative",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "User security lock script: spiegare, chiedere prove e dare un modo alternativo.",
  prompt: `Uscita: []
Blocco: [adblock / antivirus / corporate]
Simbolo: [nessun carico / pulsante non risponde]

Creare uno script con:
1) Segnali di blocco (6).
2) Come chiedere loro di provare senza un blocco ( messaggi umani).
3) Alternativa: browser pulito / nuovo / profilo incognito.
4) Cosa chiedere come prova (estensione cattura, elenco).
5) Modelli (8) e quando salire.`,
  thumbnail: ""
},
{
  id: "sop-tech-050",
  title: "Script: ottima chiusura tecnica - conferma soluzione, causa documento e previene la ricorrenza",
  area: "Supporto clienti & SOP",
  category: "Supporto tecnico (Script)",
  summary:
  "Scrittura di chiusura per biglietti tecnici: verifica, causa probabile, prevenzione e risorse.",
  prompt: `Livello utente: []
Incidenza: []
Soluzione applicata: []

Crea uno script di chiusura con:
1) Conferma del successo (questioni e assegni).
2) Riepilogo della causa (in umana) senza colpa.
3. Prevenzione:
- 5 raccomandazioni specifiche
- link a documenti suggeriti (inventare il titolo se non esiste)
4) Registrazione interna:
- tags
- categoria
- causa radice probabilmente
5) 5 varianti di chiusura tono:
- neutro
- Vicino.
- premio
- molto breve (chat)
- dettagliati (email).`,
  thumbnail: ""
}];