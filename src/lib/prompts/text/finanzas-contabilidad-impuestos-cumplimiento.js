// src/lib/prompts/text/finanzas-contabilidad-impuestos-cumplimiento.js

export const textPromptsFinanzasContabilidadImpuestosCumplimiento = [
{
  id: "fintax-001",
  title: "Checklist fiscale annuale per freelance / aziende (senza errori comuni)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Organizza gli obblighi, il calendario e la documentazione per operare in ordine.",
  prompt: `Agisce come contabile organizzativo. Non dare consigli fiscali specifici per paese; concentrarsi sulla struttura e le migliori pratiche.

Ingressi:
- Paese/stato (se applicabile).
- Tipo di attività: dipendente / freelance / business.
- Frequenza del reddito (mese / variabile).
- In caso di emissione di fatture / ricevute (sì / no).
- Strumento corrente (Excel / app / nessuno).

Genera:
1) Controllo annuale per trimestre / mese (da rivedere e quando).
2) Elenco dei documenti da salvare (reddito, spese, banche).
3) routine settimanale / mensile per mantenere tutto aggiornato.
4) Top 10 errori comuni e come evitarli.
5) modello "Tax folder" con struttura e nomi.`,
  thumbnail: ""
},

{
  id: "fintax-002",
  title: "Sistema di riserva fiscale (tasse secchi) con regole automatiche",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Definire quanto separare per ogni carica ed evitare sorprese alla fine del periodo.",
  prompt: `Agisce come consulente finanziario / contabile.

Ingressi:
- reddito mensile medio.
- Variabilità del reddito (basso / medio / alto).
- Percentuale stimata delle tasse (se lo so; se non, una gamma conservatrice).
- Costi aziendali (ca.
- No. Se sono un dipendente / freelance / società.

Genera:
1) sistema "Cube": tasse, funzionamento, risparmio, reinvestimento.
2) Regole di trasferimento (a pagamento) in% ed esempi.
3) Soglia: quando alzare o abbassare la prenotazione%.
4) Lista di controllo mensile per conciliare e regolare.
5) Protocollo di emergenza se ho già speso la mia prenotazione.`,
  thumbnail: ""
},

{
  id: "fintax-003",
  title: "Classificazione dei costi deducibili vs non deducibili (pratica)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Crea un sistema di categorie per registrare le spese in modo pulito.",
  prompt: `Agisce come contabile (approccio generale, non legale).

Ingressi:
- Tipo di attività / attività.
- Tipi di spese frequenti (elenco).
- Metodo di pagamento (carta / contanti / misto).
- Se tengo la prova (sì / no).

Genera:
1) Tabella delle categorie suggerite (20-30) ed esempi per categoria.
2) Regole per prove / supporto (cosa salvare e come).
3) Tag per contrassegnare "controlla con contatore" se c'è dubbio.
4) Modello di registrazione (campi e formato).
5) Flusso settimanale: cattura → convalidare il file → riconciliare.`,
  thumbnail: ""
},

{
  id: "fintax-004",
  title: "Orari degli obblighi e dei pagamenti (mensile / settimanale) pronti a copiare",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Trasforma i tuoi obblighi in un calendario operativo non dimenticato.",
  prompt: `Agisce come contabile.

Ingressi:
- Tipo di contribuente (dipendente/azienda).
- Frequenza delle dichiarazioni (mese / trimestrale / annuale).
- Date chiave conosciute (se li ho).
- Processi attuali (caotico / medio / ordinato).

Genera:
1) Calendario annuale con blocchi di lavoro (preparazione, revisione, pagamento, file).
2) Elenco dei promemoria automatici (cosa e quando).
(3) Elenco di controllo per periodo (mese / trimestrale / annuale).
4) Segni di avvertimento: quando chiedere supporto professionale.
5) modello "chiusura" mensile di 60 minuti.`,
  thumbnail: ""
},

{
  id: "fintax-005",
  title: "Piano di conformità per e-commerce / vendita online (ordine di documenti)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Organizza reddito da passerelle, commissioni, rimborsi e rapporti.",
  prompt: `Agisce come contabile per le vendite online.

Ingressi:
- Piattaforma di vendita e pagamento.
- Volume mensile di vendite.
- Rimborso / cancellazioni (basso / medio / alto).
- Moneta e paesi dove vendo.
- Se ho inventario (sì / no).

Genera:
(1) Flusso per registrare vendite lorde, commissioni, netti e rimborsi.
2) Categorie contabili consigliate (reddito, commissioni, chargeback, spedizioni, ecc.).
3) Controllo mensile di riconciliazione tra banca e piattaforma.
4) Documenti da scaricare / salvare (e periodicità).
5) Modello di report mensile per il contatore.`,
  thumbnail: ""
},

{
  id: "fintax-006",
  title: "Organizzazione di fatture / ricevute: nomenclatura, cartelle e controllo",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Sistema semplice in modo da non perdere mai un voucher.",
  prompt: `Agisce come uno specialista del controllo documentario.

Ingressi:
- Importo stimato di voucher al mese.
- No. Se lavoro con carta, digitale o entrambi.
- Strumenti: Drive / OneDrive / Dropbox / locale.
- Se ho attrezzatura (PC / mobile).

Genera:
1) Struttura della cartella all'anno / mese / tipo.
(2) Nome Convegno (data _ fornitore _ importo _ categoria).
3) Flusso di cattura da mobile (steps).
4) Controllo settimanale "zero orecchini".
5) Regola di conservazione dei documenti (in termini generali) e backup.`,
  thumbnail: ""
},

{
  id: "fintax-007",
  title: "Protocolli contro ammende: controllo del termine + doppia verifica",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Riduce il rischio di ricarica con processi e validazioni.",
  prompt: `Agisce come agente di conformità (livello pratico).

Ingressi:
- Tipo di obblighi (tassi, sicurezza sociale, licenze, ecc.).
- Storia: Sono gia' stato multato? (sì / no e perché).
- Attrezzatura: solo io / con contatore / con amministratore.
- Frequenza dei pagamenti.

Genera:
1) Sistema di controllo del tempo (3 strati di promemoria).
2) Lista di controllo prima di inviare / pagare (10 punti).
3) Controllo delle prove: cosa mantenere come "prove".
4) Protocollo di correzione se rilevo un errore più tardi.
5) "Board" settimanale per vedere lo stato in 1 minuto.`,
  thumbnail: ""
},

{
  id: "fintax-008",
  title: "Script per parlare con un contabile: domande chiave e consegnabili",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Assicuratevi che vi diano chiarezza, non solo 'tutto giusto': cosa chiedere e come.",
  prompt: `Agisce come consulente per assumere / coordinare la contabilità.

Ingressi:
- Tipo di attività (dipendente/azienda).
- Complessità: bassa / media / alta.
- Dolore principale (alte imposte, disturbi, multe, ecc.).
- Strumenti attuali.

Genera:
1) Lista di 20 domande da porre al contabile (con intento).
2) Consegna mensile minima: quali rapporti chiedere.
3) Elenco di controllo di ciò che dovrei consegnare (e come).
4) Indicatori per valutare se il contabile sta facendo buon lavoro.
5) Email / modello di messaggio per avviare la conversazione.`,
  thumbnail: ""
},

{
  id: "fintax-009",
  title: "Rapporto mensile per le tasse: riassunto esecutivo per una rapida revisione",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Un formato di 1 pagina per vedere reddito, spese, base e riserve.",
  prompt: `Agisce come contabile e produttore di report.

Ingressi:
- Reddito mensile (grossa e netta se applicabile).
- Spese mensili (per categoria).
- Riserve fiscali (importo /%).
- Debiti / obblighi in sospeso.
- Gli obiettivi del prossimo mese.

Genera:
1) Modello di report mensile 1 pagina (sezioni e campi).
2) Definizioni semplici di ogni campo in modo da non confondermi.
(3) Controllo di conciliazione (banca vs registrazione).
4) 5 domande di revisione (per rilevare errori).
5) Piano d'azione del mese prossimo secondo i risultati.`,
  thumbnail: ""
},

{
  id: "fintax-010",
  title: "Conciliazione bancaria per la conformità: metodo veloce (senza piangere)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Procedi a banca quadrata con i record ed evitare incongruenze.",
  prompt: `Agisce come assistente contabile.

Ingressi:
- Numero di conti bancari.
- Volume mensile delle transazioni.
- Se uso efficace (sì / no).
- Registrazione corrente (Excel / app / nessuno).

Genera:
1) Metodo passo per passo per conciliare (settimanale e mensile).
2) categorie comuni "differenze" e come risolverle.
3) Elenco di controllo per rilevare i pagamenti duplicati, abbonamenti dimenticati, commissioni.
4) "log di differenze" modello con colonne.
5) Regole per lasciare prove e audit interno.`,
  thumbnail: ""
},

{
  id: "fintax-011",
  title: "Piano di conformità per il reddito internazionale (struttura e rischi)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Organizza cariche multivaluta e documentazione da operare in ordine.",
  prompt: `Agisce come consulente di controllo finanziario (senza fornire consulenza legale).

Ingressi:
- Paese di residenza.
- Paesi in cui raccolgo/vendo.
- Monete.
- Piattaforme di pagamento.
- Se ricevo trasferimenti o carte.

Genera:
(1) Sistema di registrazione del reddito per paese / valuta.
2) Regole per il tasso di cambio (come documentarlo).
3) Elenco di controllo documentale per ogni raccolta (voucher, report, banca).
4) Segnali di rischio dove devo consultare il professionista locale.
5) Rapporto mensile consigliato per il riepilogo internazionale.`,
  thumbnail: ""
},

{
  id: "fintax-012",
  title: "Pianifica di separare la finanza personale contro il business (conformità pulita)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Evitare di mescolare denaro e semplificare la contabilità con regole e conti.",
  prompt: `Agite come un contabile.

Ingressi:
- Se già mischio la finanza (sì / no).
- Numero di conti correnti.
- Costi misti (Internet, cella, trasporto).
- reddito d'affari.
- Dolore: disturbo / tassa / controllo.

Genera:
(1) Struttura consigliata del conto (minimo realizzabile).
(2) Regole per pagamenti misti e rimborso.
3) Elenco di controllo settimanale per mantenere la separazione.
4) Cosa documentare per giustificare i movimenti.
5) Piano di migrazione in 14 giorni per ordinare senza interrompere l'attività.`,
  thumbnail: ""
},

{
  id: "fintax-013",
  title: "Controllo del libro paga di base (se ho 1-5 dipendenti) + conformità",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Organizza pagamenti interni, registri e report senza errori di processo.",
  prompt: `Agisce come responsabile contabile per microimprese (senza consulenza legale).

Ingressi:
- Numero di dipendenti.
- Frequenza di pagamento (settimanale / settimanale / mensile).
- Tipo di approvvigionamento (se applicabile).
- Benefici / obbligazioni (se applicabili).
- Strumento attuale.

Genera:
1) Checklist per periodo di pagamento (prima / durante / dopo).
2) Campi minimi da registrare per dipendente (staff).
3) Processo per buoni e documenti.
4) avvisi: segni di non conformità o disordine.
5) Rapporto mensile interno del libro paga (1 pagina).`,
  thumbnail: ""
},

{
  id: "fintax-014",
  title: "Interna verifica express: i miei numeri sono puliti?",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Controllare la consistenza e rilevare le lacune prima che sia un problema.",
  prompt: `Agisce come revisore interno (livello base).

Ingressi:
- Mese da controllare.
- Reddito registrato.
- Spese registrate.
- Estratti bancari (importo totale).
- Se guido bene.

Genera:
1) Checklist Audit (20 punti) per rilevare incongruenze.
2) Semplice evidenza: somma, rapporti, riconciliazione.
3) "Lista dei risultati" con gravità (alto / medio / basso).
4) Piano di correzione prioritario.
5) Cosa automatizzare in modo che non accada di nuovo.`,
  thumbnail: ""
},

{
  id: "fintax-015",
  title: "Piano di controllo dei contanti (cash) per non perdere traccia",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Registrazione minima e prova di denaro senza caos.",
  prompt: `Agisce come un contabile pratico.

Ingressi:
-% del reddito in denaro.
-% delle spese di cassa.
- Frequenza dei depositi alla banca.
- Se tengo i biglietti (sì / no).

Genera:
1) Cash book (templato) con campi e regole.
(2) Protocollo di registrazione in contanti giornaliero / settimanale.
3) Regole di deposito: quando, come, e come documentare.
4) Segnali di volo e forme di controllo.
5) Giro mensile per piazza di cassa vs banca.`,
  thumbnail: ""
},

{
  id: "fintax-016",
  title: "Processo per la gestione dei rimborsi e dei rendimenti (conformità contabile)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Evitare l'impigliamento registrando correttamente i ritorni e contracargos.",
  prompt: `Agisce come un commercialista digitale.

Ingressi:
- Piattaforma di recupero (s).
- Frequenza del rimborso (basso / medio / alto).
- Motivi comuni.
- Politica di rimborso.

Genera:
1) Flusso di processo: richiesta → approvazione → ritorno → record → prova.
2) Categorie contabili per rimborsi / riscossioni.
3) Elenco delle prove (catch, post, folio).
4) Rapporto mensile dei rimborsi (campi e metriche).
5) Regole per prevenire frodi e abusi (operativi).`,
  thumbnail: ""
},

{
  id: "fintax-017",
  title: "Piano di controllo dell'inventario di base (se vendo prodotto fisico)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Sistema minimo per registrare ingressi / uscite ed evitare perdite.",
  prompt: `Agisce come controller di inventario (basic).

Ingressi:
- Tipo di prodotti.
- No di COD approssimativi.
- Canale di vendita.
- Frequenza degli acquisti al fornitore.
- Problemi principali (mancanza, eccesso, perdita).

Genera:
1) modello di inventario (campi minimi).
2) Input / processo di uscita (passo per passo).
3) Conteggio ciclico (ogni settimana / mese) e come farlo in fretta.
4) metalli chiave (rotazione, rottura, diradamento).
(5) Elenco di controllo mensile per inventori.`,
  thumbnail: ""
},

{
  id: "fintax-018",
  title: "Documentazione SOP: spesa a file (stile aziendale)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Trasforma il caos in una procedura standard ripetibile.",
  prompt: `Agisce come specialista nelle SOP contabili.

Ingressi:
- Chi fa il processo (me / assistente).
- Strumenti (Drive / OneDrive / Nozione / Fogli).
- Tipi di spese comuni.
- Frequenza dello shopping.

Genera:
1) SOP completo: obiettivo, raggiungere, responsabile, passi, qualità.
2) Elenco di controllo di qualità (che ogni record dovrebbe avere).
3) Modelli: registro delle spese, registro delle differenze, tracciatore degli obblighi.
4) Politica di backup e controllo della versione.
5) Indicatori di processo (tempo,% voucher completi, ecc.).`,
  thumbnail: ""
},

{
  id: "fintax-019",
  title: "Pianificare per preparare una dichiarazione / revisione con contatore (pacchetto pronto)",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Armare un pacchetto ordinato per il contatore per lavorare velocemente e a buon mercato.",
  prompt: `Agisce come coordinatore contabile.

Ingressi:
- Periodo da dichiarare (mese / trimestre / anno).
- Volume di transazione.
- No. Se c'è un reddito internazionale.
- No. Se ci sono dipendenti.
- Strumenti.

Genera:
1) Elenco accurato dei file da consegnare (in ordine).
2) Formato per l'intero pacchetto.
3) Riepilogo esecutivo per il contatore (1 pagina) con i numeri chiave.
4) Elenco di controllo finale prima di inviare (errori fisici).
5) Email / messaggio di consegna con istruzioni chiare.`,
  thumbnail: ""
},

{
  id: "fintax-020",
  title: "Consiglio di conformità mensile: stato, prove e orecchini",
  area: "Finanza e contabilità",
  category: "Tasse e conformità",
  summary:
  "Semplice Dashboard per sapere se sei 'a 100' ogni mese.",
  prompt: `Agisce come analista delle operazioni finanziarie.

Ingressi:
- Obblighi (lista).
- Fonti dati (banche, piattaforme, fatture).
- Attrezzatura (solo io / con contatore / con amministratore).
- Frequenza di revisione.

Genera:
1) Struttura del consiglio con sezioni (obbligazioni, documenti, conciliazione, prenotazioni).
2) Campi per compito: responsabile, data, stato, prova di collegamento, note.
3) Aggiornamento (settimanale) con la lista di controllo.
4) Seme (verde / giallo / rosso) e regole per ogni colore.
5) versione "minimum viable" in 10 minuti e versione "pro" in 60 minuti.`,
  thumbnail: ""
}];