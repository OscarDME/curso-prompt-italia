// src/lib/prompts/text/salud-clinica-triage-y-anamnesis.js

export const textPromptsSaludClinicaTriageYAnamnesis = [
{
  id: "saludtri-001",
  title: "Prova rapida: per classificare l'urgenza in 60 secondi (non diagnosticato)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Struttura domande chiave per stimare la gravità, priorità e decidere l'arrampicata.",
  prompt: `Agisce come medico facendo triage iniziale (non diagnosi definitiva).

Ingressi:
- Motivo di consultazione.
- Età.
- Comporbidità rilevanti.
- Contesto (pregnanza, immunosoppressione, anticoagulanti).

Genera:
1) 8-12 domande chiuse essenziali (sì / no o opzione multipla).
2) 6-10 domande aperte per contesto (inizio, evoluzione, gravità).
3) Elenco prioritario di "bandiere rosse" specifica a questo motivo.
4) Classificazione di guida di emergenza a 4 livelli:
- Emergenza (ora)
- Urgente (oggi)
- Priorità (24-72h)
- Monitoraggio programmabile
5) Prossimo passo raccomandazione (consultazione, emergenza, sorveglianza) con una frase di ragione.`,
  thumbnail: ""
},

{
  id: "saludtri-002",
  title: "Anamnesis tipo completo HPI (Storia del problema attuale)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Trasforma un sintomo in una storia medica ben strutturata e completa.",
  prompt: `Agisce come medico. Struttura della storia del problema attuale (HPI).

Ingressi:
- Il sintomo principale.
- Il nativo del paziente (testo libero).
- Vitali se esistono.

Genera:
1) HPI in formato OLDCARTS o equivalente (start, posizione, durata, carattere, aggravante, attenuante, irradiazione, tempo, gravità).
2) Sintomi associati positivi e negativi rilevanti (in elenco).
3) Impatto funzionale (sleep, lavoro, attività).
4) Percezione del paziente: paure, aspettative, obiettivo della visita.
5) 5 domande da "lo strato negativo" per approfondire come trovato.`,
  thumbnail: ""
},

{
  id: "saludtri-003",
  title: "Sistema Anamnesis (Review of Systems) focalizzato",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Generare ROS breve ma completo, adattato alla ragione di consultazione.",
  prompt: `Agisce come medico. Genera una recensione focalizzata dei sistemi.

Ingressi:
- Motivo di consultazione.
- Età e sesso.
- Sfondo chiave.

Genera:
1) ROS da sistemi (generale, respiratoria, CV, GI, GU, neuro, MSK, pelle, endocrino, psichiatrico) con 2-4 domande per sistema.
2) Marco che sono "deve chiedere" contro "bello chiedere".
3) Segni che cambiano la priorità (bandiere di rete) per ogni sistema rilevante.`,
  thumbnail: ""
},

{
  id: "saludtri-004",
  title: "Modello di prova per dolore al petto (sicurezza prima)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Domande critiche e bandiere rosse per il dolore al petto senza panico.",
  prompt: `Agisce come medico di triage. Dolore al petto.

Ingressi:
- Età.
- Descrizione del dolore.
- Fattori di rischio (tabacco, HTA, DM, dislipidemia).

Genera:
1) Domande critiche (12-18) che non possono essere omesse.
2) Elenco chiaro di bandiere rosse (10) e perché importa.
3) Diverso "da escludere prima" contro "frequente e meno grave" (lista).
4) Raccomandazione di guida di emergenza (ora / oggi / 24-72h / programmabile).
5) Messaggio per il paziente (3-5 frasi) per spiegare perché è derivato o no.`,
  thumbnail: ""
},

{
  id: "saludtri-005",
  title: "Triage per mancanza di aria / dispnea",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Algoritmo di domande e scaling per dispnoea tra cui asma, infezione e rischio trombotico.",
  prompt: `Agisce come medico in triage: dispnoea.

Ingressi:
- Età e comorbidità.
- Avvio (sudden / graduale).
- Sintomi associati (febbre, dolore toracico, tosse, respiro).
- Saturazione se esiste.

Genera:
1) Domande essenziali (15).
2) Lista di controllo ad alto rischio (PTE, polmonite, insufficienza cardiaca, anafilassi).
3) Segni che richiedono un'emergenza immediata (elenco).
4) Quali dati chiedere se c'è accesso (SatO2, FC, FR, temperatura).
5) Prossimo passo suggerito e giustificazione (1-2 frasi).`,
  thumbnail: ""
},

{
  id: "saludtri-006",
  title: "Modello di prova per dolore addominale",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Struttura domande per quadrante, sintomi associati e rischio chirurgico.",
  prompt: `Agisce come medico. Triage per dolore addominale.

Ingressi:
- Posizione del dolore.
- Età / sesso.
- Gravidanza possibile sì / no.
- Chirurgia precedente.

Genera:
1) Domande di caratterizzazione (12).
2) Sintomi associati critici (persistente vomito, sanguinamento, febbre, ittero, rigidità).
3) Bandiere rosse chirurgiche (lista).
4) Differenze di posizione (TAURING / REGION in breve elenco).
5) urgenza di orientamento e passo successivo.`,
  thumbnail: ""
},

{
  id: "saludtri-007",
  title: "Modello di prova per mal di testa (emergenze fuoriuscita)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Rileva i segnali di allarme (SNOOP10) e guida le domande chiave.",
  prompt: `Agisce come medico. Triage di mal di testa.

Ingressi:
- Avvio (sudden / graduale).
- Intensita'.
- Sintomi neurologici sì / no.
- Sfondo (migrania, HTA, anticoagulanti).

Genera:
1) 12-16 domande critiche.
2) Elenco degli allarmi (emicrania infantile nella vita, focalità, febbre, rigidità, post-trauma, immunosoppressione, gravidanza, ecc.).
3) Differenze comuni se non ci sono allarmi (micrania, tensione, sinusiti) non diagnosticati.
4) Raccomandazione di emergenza e breve spiegazione per il paziente.`,
  thumbnail: ""
},

{
  id: "saludtri-008",
  title: "Triage pediatrico: febbre nel bambino (approccio sicuro)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Guidare domande rosse e bandiere per età e stato generale senza generare allarme eccessivo.",
  prompt: `Agisce come medico. Triage pediatrico per febbre.

Ingressi:
- Età del bambino.
- Giorni fa.
- Temperatura massima.
- Vaccini completi sì / no.
- Sintomi (respiratorio, GI, rash).

Genera:
1) Domande essenziali (15) focalizzate sull'idratazione, l'allarme, la respirazione.
2) Elenco delle bandiere rosse (sonolenza marcata, rigidità, difficoltà respiratorie, petechiae, rifiuto totale del fluido).
3) Raccomandazione di guida di emergenza (ora / oggi / osservazione) con giustificazione.
4) Elenco dei dati che i genitori possono registrare (assunzione, pannolini, temperatura, comportamento).`,
  thumbnail: ""
},

{
  id: "saludtri-009",
  title: "Triage ginecologico: sanguinamento uterino anormale",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Domande chiave per gravità, gravidanza, anemia e urgenza.",
  prompt: `Agisce come medico. Triage da sanguinamento uterino anormale.

Ingressi:
- Età.
- Data dell'ultima mestruazione.
- Possibile gravidanza sì / no.
- Numero di sanguinamento (asciugamani / ora).
- Dolore sì / no.

Genera:
1) Domande essenziali (15) per quantificare sanguinamento e rischio.
2) Bandiere rosse (instabilità, sincope, gravidanza ectopica, grandi coaguli, dolore grave).
3) Raccomandazione di emergenza e passo successivo.
4) Quali informazioni portare alla consultazione (registrazione, medicine, test precedenti).`,
  thumbnail: ""
},

{
  id: "saludtri-010",
  title: "Triage salute mentale: attacco di panico contro emergenze",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Domande per differenziare l'ansia da cause mediche e valutare il rischio.",
  prompt: `Agisce come medico. Triage a ansia / crisi di panico.

Ingressi:
- Sintomi (palpitazioni, dispnoea, oppressione).
- Inizia e attiva.
- Sfondo medico.
- Uso di sostanze / caffeina.

Genera:
1) Domande per escludere cause mediche urgenti (dolore toracico, sincope, focale, febbre, ecc.).
2) Domande di sicurezza (rischio di auto-armo, sostegno sociale).
3) Segni di emergenza immediata.
4) Piano di contenimento iniziale (non farmacologico) e follow-up raccomandato.`,
  thumbnail: ""
},

{
  id: "saludtri-011",
  title: "Triage per l'infezione urinaria vs pyelonephritis",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Rileva i dati di alta infezione e reindirizza a cure urgenti durante l'applicazione.",
  prompt: `Agisce come medico. Triage urinario.

Ingressi:
- Sintomi (disuria, urgenza, frequenza).
- Sì, niente febbre.
- Dolore laterale / lombare sì / no.
- Gravidanza sì / no.

Genera:
1) Domande essenziali (12).
2) Lista di controllo delle infezioni elevata / complicata.
3) Raccomandazione di emergenza (oggi vs. programmabile) giustamente.
4) Dati utili: EGO / urocoltura se richiesto, segnali di idratazione e allarme.`,
  thumbnail: ""
},

{
  id: "saludtri-012",
  title: "Anamnesis di farmaci e allergie (evitare errori)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Raccogliere elenco di farmaci, dosi, adesione, reazioni e integratori.",
  prompt: `Agisce come medico. Licita i farmaci e le allergie completamente.

Ingressi:
- Elenco paziente parziale (se presente).
- Motivo di consultazione.

Genera:
1) Domande per ottenere: nome, dose, orario, movente, che lo ha indicato, aderenza.
2) Domande su OTC, integratori, erbe, "remedies".
3) Allergie: tipo di reazione, gravità, data, reale sospetto contro intolleranza.
4) Rete di interazioni in base alla ragione di consultazione (elenco generico).`,
  thumbnail: ""
},

{
  id: "saludtri-013",
  title: "Breve storia clinica per la telemedicina (efficienza massima)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Formato breve per la consultazione remota: dati chiave, allarmi e piano di arrampicata.",
  prompt: `Agisce come medico in telemedicina. Devi essere efficiente.

Ingressi:
- Motivo di consultazione.
- Età / sesso.
- Comorbidità.
- Accesso ai segni vitali, sì / no.

Genera:
1) 10 domande essenziali (ordinate).
2) 5 domande facoltative secondo la risposta.
3) "Se si dice X → domanda Y" (decisione semplice albero nel testo).
4) Chiudere: sommario + quando emergenze + quando il follow-up.`,
  thumbnail: ""
},

{
  id: "saludtri-014",
  title: "Anamnesis del dolore: scala del paziente, limitazione e obiettivi",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Struttura dolore in dimensioni cliniche e obiettivi funzionali misurabili.",
  prompt: `Agisce come medico. E' una storia completa di dolore.

Ingressi:
- Zona e tipo di dolore.
- Tempo di evoluzione.
- Trattamenti precedenti.

Genera:
1) Domande per: intensità (0-10), qualità, irradiazione, periodicità, trigger.
2) Impatto funzionale (quale cosa ha smesso di fare).
3) Obiettivo del paziente (che cosa sarebbe "migliorare" per lui).
4) Bandiere rosse di dolore (neurologica, febbre, peso, trauma).`,
  thumbnail: ""
},

{
  id: "saludtri-015",
  title: "Triage respiratorio: tosse (acute vs cronica) + bandiere rosse",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Classifica tosse per durata e rileva segnali di allarme in modo strutturato.",
  prompt: `Agisce come medico. Triage per tosse.

Ingressi:
- Lunghezza della tosse.
- Sì, niente febbre.
- Dolore al petto sì / no.
- Aspettativa (colore / sangue).
- Contatti / malattie recenti.

Genera:
1) Domande chiave (15) separate in: acuto (± 3 settimane) vs subacuto / cronico.
2) Lags rossi (emotosi, perdita di peso, dispnoea, bassa saturazione, dolore pleurico).
3) Raccomandazione di emergenza e passo successivo.`,
  thumbnail: ""
},

{
  id: "saludtri-016",
  title: "Triage dermatologica: rash / rash (espulsioni fuori strada)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Domande per identificare l'allergia grave, l'infezione grave e la necessità di attenzione immediata.",
  prompt: `Agisce come medico. Triage by rash.

Ingressi:
- Casa e distribuzione.
- Prurito / dolore.
- Sì, niente febbre.
- Nuovo sì / no medicine.
- Difficoltà respiratoria sì / no.

Genera:
1) Domande essenziali (15).
2) Elenco delle emergenze: anafilassi, sospetti di Stevens-Johnson (lesioni mucose), petechiae con febbre, ampia cellulite.
3) classificazione di orientamento e passo successivo.`,
  thumbnail: ""
},

{
  id: "saludtri-017",
  title: "Triage muscoloscheletrico: lesioni acute (spraina / trauma)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Valuta il meccanismo, la disabilità funzionale, neurovascolare e la necessità di RX.",
  prompt: `Agisce come medico. Triage da lesioni acute.

Ingressi:
- Area ferita.
- Meccanismo (torsione, colpo, caduta).
- Capacità di sostenere o muoversi.
- Gonfiore/deformità.

Genera:
1) Domande essenziali (12).
2) Controllo neurovascolare (sensibilità, colore, temperatura, impulso distale).
3) Segni di emergenza e quando indicare l'immagine.
4) Raccomandazione generale di gestione iniziale (RICE / misure) senza dose.`,
  thumbnail: ""
},

{
  id: "saludtri-018",
  title: "Famiglia e anamnesi sociali focalizzate sul rischio",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Famiglia utile e struttura di sfondo sociale senza renderlo eterno.",
  prompt: `Agisce come medico. Raccoglie familiari / background sociale rilevanti.

Ingressi:
- Motivo di consultazione.
- Età.
- Diagnostica attuale.

Genera:
1) Questioni familiari "alto impatto" (cardio, diabete, tumori chiave, trombosi).
2) Sociale: tabacco, alcol, sostanze, occupazione, sonno, attività, dieta.
3) Indicatori di rischio e come il piano cambia (elenco breve).`,
  thumbnail: ""
},

{
  id: "saludtri-019",
  title: "Triage per vertigini / sincope (suscita cause gravi)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Differenza vertigine, presyncopo e cuore / cause neurologiche con domande dirette.",
  prompt: `Agisce come medico. Triage per vertigini / sincope.

Ingressi:
- Tipo (torno dell'ambiente, instabilità, svenimento).
- Scatenamento (posizione, sforzo).
- Durata.
- Droga.

Genera:
1) Questioni critiche (16).
2) Bandiere rosse (dolore di petto, palpitazioni, focalità, trauma, gravidanza).
3) Raccomandazione di emergenza e passo successivo.`,
  thumbnail: ""
},

{
  id: "saludtri-020",
  title: "Triage per mal di gola (evitare antibiotici inutili)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Raccogliere dati di tipo Centor e fori di rete di ascesso / peritonsilar.",
  prompt: `Agisce come medico. Triage per odinofagia / faringite.

Ingressi:
- Giorni di evoluzione.
- Sì, niente febbre.
- Lo sei.
- Exused / amygdals sì / no.
- Dei gangli dolorosi sì / no.

Genera:
1) Domande essenziali (12).
2) Segnali di allarme (voce off, trismus, deviazione uvula, difficoltà a deglutire la saliva).
3) classificazione dell'orientamento e se richiede la valutazione oggi.`,
  thumbnail: ""
},

{
  id: "saludtri-021",
  title: "Anamnesis dei sintomi cronici (convertire il caos nella struttura)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Organizza più sintomi e modelli online per avanzare nella diagnosi differenziale.",
  prompt: `Agisce come medico. Il paziente ha molti sintomi cronici.

Ingressi:
- Elenco dei sintomi.
- Tempo totale di evoluzione.
- Studi precedenti.

Genera:
1) Time line (primo sintomo → modifiche).
2) raggruppamento di sistema.
3) 10 domande per trovare modello (relazione con cibo, ciclo, sonno, stress, esercizio).
4) 5 bandiere rosse e 5 dati rassicuranti.
5) Prossimo passo per chiarire (non prescritta).`,
  thumbnail: ""
},

{
  id: "saludtri-022",
  title: "Triaggio di ferite: taglio / ustione / morso",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Valuta la profondità, sanguinamento, infezione, e la necessità di vaccino / tetano (senza indicare lo schema esatto).",
  prompt: `Agisce come medico. Triage delle ferite.

Ingressi:
- Tipo (taglio / bruciore / morso).
- E' ora dell'evento.
- Profondità / area.
- Dolore, rossore, pus, febbre.
- Stato di vaccinazione del tetano (se noto).

Genera:
1) Domande essenziali (14).
2) Segni di emergenza (emorragia inflessibile, perdita di sensibilità, ustione estesa, morso profondo in mano / faccia, segni sistemici).
3) Gestione iniziale sicura (pulizia, copertura, sollevamento) senza raccomandazioni pericolose.
4) Quando rivalutare e cosa guardare.`,
  thumbnail: ""
},

{
  id: "saludtri-023",
  title: "Triage cardiometabolico: elevata pressione rilevata a casa",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Distinguere l'urgenza ipertensiva dalla lettura isolata, e quali dati raccogliere.",
  prompt: `Agisce come medico. Triage ad alta pressione a casa.

Ingressi:
- Lettura (PA e ora).
- Sintomi (headache, visione offuscata, dolore toracico, dispnoea).
- Trattamento antipertensivo attuale.

Genera:
1) Domande sulla tecnica di misura (posizione, riposo, bracciale).
2) Sintomi di danni acuti (gri rossi).
3) Raccomandazione di emergenza vs follow-up.
4) Protocollo di registrazione PA per 3-7 giorni (in testo).`,
  thumbnail: ""
},

{
  id: "saludtri-024",
  title: "Anamnesis delle abitudini (cibo / attività) senza giudizio",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Raccoglie abitudini in modo gentile e utile per il piano clinico.",
  prompt: `Agisce come medico. Chiede abitudini non coniugate.

Ingressi:
- Diagnosi o bersaglio (peso, lipidi, glucosio, HTA).
- Preferenze alimentari culturali.
- Tempo disponibile.

Genera:
1) Domande per capire il modello reale (24h richiamo + fine settimana).
2) Questioni di attività fisica (tipo, frequenza, barriere).
3) Sogno e stress (2-3 domande ciascuno).
4) Astratto in 6 proiettili: "ciò che già fai bene" + "opportunità".`,
  thumbnail: ""
},

{
  id: "saludtri-025",
  title: "Triage per diarrea / vomito: idratazione e rischio",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Rileva disidratazione, sangue, febbre alta e attenzione urgente.",
  prompt: `Agisce come medico. Triage per la gastroenterite.

Ingressi:
- Giorni di sintomi.
- Numero di evacuazioni / vomito.
- Sangue nelle feci sì / no.
- Sì, niente febbre.
- Capacità di ingerire liquidi.

Genera:
1) Domande essenziali (14).
2) Segni di grave disidratazione.
3) Segnali di allarme (sangue, dolore localizzato grave, febbre persistente, immunosoppressione).
4) Raccomandazione per l'urgenza e i prossimi passi.`,
  thumbnail: ""
},

{
  id: "saludtri-026",
  title: "Anamnesi orientata alla trazione / PTE (rischio) senza allarme",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Domande chiave su immobilizzazione, chirurgia, contraccettivi e sintomi associati.",
  prompt: `Agisce come medico. Anamnesi a rischio trobotico.

Ingressi:
- sintomo principale (dispnoea, dolore al petto, gamba gonfia).
- Età.
- Situazioni recenti (travel, chirurgia, consegna, immobilizzazione).

Genera:
1) Domande sul rischio (12).
2) Sintomi associati critici.
3) Elenco dei segni per l'emergenza immediata.
4) Come spiegare al paziente perché si chiede questo (3 frasi).`,
  thumbnail: ""
},

{
  id: "saludtri-027",
  title: "Triage per il dolore oculare / visione offuscata",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Valuta i sintomi visivi che possono essere urgenti (glaucoma, distacco, cheratite).",
  prompt: `Agisce come medico. Triage degli occhi.

Ingressi:
- Dolore agli occhi sì / no.
- Perdita visiva improvvisa sì / no.
- Fotofobia sì / no.
- Segreto sì / no.
- Uso di sì / no lenti a contatto.

Genera:
1) Domande essenziali (12).
2) Bandiere rosse per emergenze (perdita sudden, halos, dolore grave, trauma, contatto + dolore).
3) Raccomandazione per l'azione (emergenza / ophthalm oggi / follow-up).`,
  thumbnail: ""
},

{
  id: "saludtri-028",
  title: "Triage allergico: urticaria vs anaphylaxis",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Identificare l'impegno respiratorio / circolatorio e decidere l'urgenza immediata.",
  prompt: `Agisce come medico. Triage di reazione allergica.

Ingressi:
- Sintomi (alveari, gonfiore, difficoltà respiratoria).
- esposizione probabile (cibo, medicina, morso).
- E' ora dell'esposizione.

Genera:
1) Domande essenziali (12).
2) Criteri di possibile anafilassi (semplice).
3) Segni di immediata urgenza e cosa fare.
4) Se non anafilassi: cosa monitorare e seguire.`,
  thumbnail: ""
},

{
  id: "saludtri-029",
  title: "Triage endocrino: ipoglicemia / iperglicemia a casa",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Guidare domande sicure per sintomi estremi e valori senza trattamento specifico.",
  prompt: `Agisce come medico. Triage di glucosio a casa.

Ingressi:
- Letture di glucosio (s) e tempo.
- Sintomi (tremor, sudorazione, confusione, sete, vomito).
- Trattamento attuale (insulina / ipoglicaemica).

Genera:
1) Domande essenziali (12).
2) Segni di urgenza (disturbo mentale, vomito persistente, respirazione anormale, grave disidratazione).
3) Raccomandazione per l'azione (emergenza oggi vs contatto con medico vs sorveglianza) con la ragione.`,
  thumbnail: ""
},

{
  id: "saludtri-030",
  title: "Anamnesis per dolori articolari: infiammatorio vs meccanico",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Domande per definire rigidità mattutina, articolazioni colpite e sintomi sistemici.",
  prompt: `Agisce come medico. Storia del dolore alle articolazioni.

Ingressi:
- Articolazioni.
- Durata.
- rigidità e durata del mattino.
- Gonfiore / calore sì / no.

Genera:
1) 12 domande chiave per modello infiammatorio vs meccanico.
2) Sintomi sistemici per cercare (fever, perdita di peso, rash).
3) Bandiere rosse (monartrite acuta, febbre + giunto, disabilità totale).
4) Prossimo passo raccomandato (valutazione, studi) senza prescrizione.`,
  thumbnail: ""
},

{
  id: "saludtri-031",
  title: "Triage neurologico: debolezza improvvisa / intorpidimento",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Rileva possibili eventi neurologici acuti e attiva immediata urgenza.",
  prompt: `Agisce come medico. Triage neurologico per debolezza / intorpidimento.

Ingressi:
- Casa (ora esatta).
- Aree interessate.
- Disturbo visivo sì / no.
- Severe mal di testa sì / no.

Genera:
1) Questioni critiche (12) focalizzate sull'EVC e sulle emergenze.
2) Segni per emergenze immediate (chiare).
3) Messaggio al paziente spiegando perché è urgente (3 frasi).`,
  thumbnail: ""
},

{
  id: "saludtri-032",
  title: "Triage ostetrico: dolore addominale in gravidanza",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Valuta il sanguinamento, i movimenti fetali, le contrazioni e le urgenze.",
  prompt: `Agisce come medico. Triage in gravidanza.

Ingressi:
- Settimane di gestazione.
- Dolore e posizione.
- Bleeding sì / no.
- Sì, niente febbre.
- Movimenti fetali (se applicabili).

Genera:
1) Domande essenziali (14).
2) Bandiere rosse (emorragia inondante, dolore grave, febbre, movimento diminuito, perdita di liquido).
3) Raccomandazione immediata (emergenza oggi contro valutazione prioritaria).`,
  thumbnail: ""
},

{
  id: "saludtri-033",
  title: "Anamnesis veloce per la consultazione di follow-up (controllo)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Elenco di controllo per visite di controllo: adesione, effetti, obiettivi e regolazioni.",
  prompt: `Agisce come medico. Consultazione successiva.

Ingressi:
- Diagnosi nel controllo.
- Trattamento attuale.
- Obiettivo (ad esempio PA, A1c, sintomi).

Genera:
1) 10 domande chiave per adesione, effetti, cambiamenti.
2) "Che cosa è migliorato" contro "che cosa è peggiorato" (2 liste).
3) Segnali di allarme tra query.
4) Prossimo passo e piano di follow-up (generale).`,
  thumbnail: ""
},

{
  id: "saludtri-034",
  title: "Triage in adulti anziani: cadute e rischi",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Valuta trauma, anticoagulanti, sincope e deterioramento funzionale.",
  prompt: `Agisce come medico. Triage per caduta in adulto maggiore.

Ingressi:
- Età.
- Come è andata la caduta.
- No. Ha colpito la testa sì / no.
- Sì, niente anticoagulanti.
- Perdita di coscienza sì / no.

Genera:
1) Domande essenziali (14).
2) Lag rossi per emergenze (intenso mal di testa, vomito, somnolenza, dolore grave, deformità).
3) Orientamento causa valutazione (meccanica vs sincope) con domande guida.
4) Prossimo passo consigliato.`,
  thumbnail: ""
},

{
  id: "saludtri-035",
  title: "Triage per il dolore dell'orecchio / otite vs urgenze",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Struttura domande di gravità, febbre, secrezione, mastoidite sospetti.",
  prompt: `Agisce come medico. Triage per il dolore alle orecchie.

Ingressi:
- Età.
- Sì, niente febbre.
- Segreto sì / no.
- Dolore quando si sposta il padiglione sì / no.

Genera:
1) Domande essenziali (12).
2) Segni di allarme (ogni dolore + febbre alta, infiammazione dietro l'orecchio, vertigine grave, paralisi facciale).
3) Raccomandazione di emergenza e passo successivo.`,
  thumbnail: ""
},

{
  id: "saludtri-036",
  title: "Anamnesis delle infezioni ricorrenti (guarda il modello)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Trasforma episodi ripetuti in ipotesi: esposizione, comorbidità, immunità.",
  prompt: `Agisce come medico. Infezioni ricorrenti.

Ingressi:
- Tipo di infezioni (respiratorio, urinario, pelle).
- Frequenza e date approssimative.
- Trattamenti precedenti.

Genera:
1) Time line episodio (struttura).
2) 12 domande per i fattori di predisposizione (diabete, fumo, igiene, anatomia, sessualità, lavoro).
3) Segni per una valutazione più approfondita (immunodeficienza, perdita di peso, febbre prolungata).
4) Prossimo passo generale.`,
  thumbnail: ""
},

{
  id: "saludtri-037",
  title: "Triage per il dolore dentale / infezione odontogenica",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Identificare l'ascesso, la cellulite facciale e il fidanzamento delle vie aeree.",
  prompt: `Agisce come medico. Triage dentale.

Ingressi:
- Dolore dentale.
- Facial gonfiore sì / no.
- Sì, niente febbre.
- Difficoltà che ti apre la bocca o ingoia sì / no.

Genera:
1) Domande essenziali (12).
2) Bandiere rosse (trismus, dispnoea, febbre alta, gonfiore rapido, coinvolgimento degli occhi).
3) Raccomandazione: emergenza contro dentista oggi.
4) Messaggio al paziente che spiega la priorità.`,
  thumbnail: ""
},

{
  id: "saludtri-038",
  title: "Triage per il dolore pelvico (donna): Eliminare l'emergenza",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Valuta la gravidanza ectopica, torsione ovarica, EPI con domande chiave.",
  prompt: `Agisce come medico. Prova per il dolore pelvico.

Ingressi:
- Età.
- Ultimo appuntamento.
- Gravidanza possibile sì / no.
- Sì, niente febbre.
- Flusso vaginale anormale sì / no.

Genera:
1) Domande essenziali (15).
2) Lags rossi (ogni dolore improvviso, sincope, sanguinamento, febbre alta, gravidanza).
3) Raccomandazione di emergenza e passo successivo.`,
  thumbnail: ""
},

{
  id: "saludtri-039",
  title: "Triage per il dolore testicolare (urgenza dipendente dal tempo)",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Rileva la torsione testicolare e privilegia la derivazione immediata.",
  prompt: `Agisce come medico. Triage di dolore testicolare.

Ingressi:
- Casa (ora esatta).
- Dolore improvviso / graduale.
- Nausea / vomito sì / no.
- Trauma sì / no.
- Sì / nessuna febbre / disuria.

Genera:
1) Questioni critiche (12).
2) Segni di torsione (sudden, intenso, nausea, elevazione testicolare) in linguaggio semplice.
3) Raccomandazioni chiare di urgenza immediata se attuate (senza ambiguità).
4) Messaggio al paziente spiegando perché il tempo conta.`,
  thumbnail: ""
},

{
  id: "saludtri-040",
  title: "Riepilogo di prova pronto per incollare nella nota clinica",
  area: "Salute e Clinica",
  category: "Triage e anamnesi",
  summary:
  "Convertire le risposte dei pazienti in un breve e utile riassunto clinico.",
  prompt: `Agisce come medico. Riprendi triage in formato clinico.

Ingressi:
- Motivo di consultazione.
- Risposte a domande chiave.
- Vitali, se ci sono.

Genera:
1) Astratto in 6-10 linee, clinico, senza aggettivi.
(2) positivo e negativo rilevante.
3) Valutazione del rischio (basso / moderato / alto) con una frase.
4) Piano immediato consigliato (non prescritta).`,
  thumbnail: ""
}];