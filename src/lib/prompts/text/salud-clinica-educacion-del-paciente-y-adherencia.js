// src/lib/prompts/text/salud-clinica-educacion-del-paciente-y-adherencia.js

export const textPromptsSaludClinicaEducacionYAdherencia = [
{
  id: "saluded-001",
  title: "Spiegazione della diagnosi in lingua semplice (non infantilizzata)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Traduci una diagnosi a un messaggio chiaro, empatico e fattibile per il paziente.",
  prompt: `Agisce come medico e educatore clinico. Spiega chiaramente la diagnosi.

Ingressi:
- Diagnosi o sospetto clinico.
- Età e livello di comprensione (basico / medio / alto).
- Contesto del paziente (lavoro, famiglia, ansia, barriere).
- No. Ciò che riguarda il paziente (la paura principale).

Genera:
1) Spiegazione in 5-7 frasi: che cosa è, perché è, cosa aspettarsi.
2) La cosa più importante che non è (per rassicurare senza promettere).
3) Segnali di allarme (3-6) di cui si deve andare al pronto soccorso.
4) Che cosa si può fare a casa oggi (5 azioni concrete).
5) Come si misura il miglioramento (2-4 indicatori).
6) Una chiusura empatica (1-2 frasi).`,
  thumbnail: ""
},

{
  id: "saluded-002",
  title: "Piano di trattamento della lista di controllo (alta aderenza)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Convertire un piano clinico in una lista di passi quotidiani / settimanali facili da seguire.",
  prompt: `Agisce come medico. Trasformare il piano in una lista di controllo pratica.

Ingressi:
- Diagnosi.
- Raccomandazioni (igiene, dieta, attività, controllo).
- Prodotti medicinali (se applicabili, senza dose se non fornita).
- Durata del piano (giorni / settimane).

Genera:
1) Checklist giornaliero (mattina / pomeriggio / notte).
2) Controllo settimanale (controlli, registrazione, abitudini).
3) "Se X passa, fai Y" (5 regole semplici).
4) Errori comuni da evitare (5).
5) Promemoria di monitoraggio (quando e perché).`,
  thumbnail: ""
},

{
  id: "saluded-003",
  title: "Messaggi in stile WhatsApp per migliorare l'adesione (7 giorni)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Crea messaggi brevi, motivanti e clinicamente corretti per il follow-up.",
  prompt: `Agisce come medico. Creare una sequenza di messaggi di tipo WhatsApp per adesione.

Ingressi:
- Diagnosi / obiettivo (ad esempio controllo PA, glucosio, dolore).
- 3 abitudini chiave o compiti.
- Tono (calore / diretto / motivazionale).
- Barriera principale (forgetting, mancanza di tempo, paura, effetti collaterali).

Genera:
1) 7 messaggi (giorno 1 al giorno 7) di massimo 240 caratteri.
2) 2 messaggi "se il piano è stato saltato" (senza colpa).
3) 2 messaggi per rafforzare i segnali di allarme e quando consultare.
4) Un messaggio finale per pianificare il follow-up.`,
  thumbnail: ""
},

{
  id: "saluded-004",
  title: "Guida automonitorica (PA, glucosio, sintomi) con modello",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Istruzioni chiare per la registrazione di misurazioni / sintomi e la rilevazione di modifiche rilevanti.",
  prompt: `Agisce come medico. Progetta una guida automobilistica.

Ingressi:
- No. Ciò che viene monitorato (PA / glucosio / peso / sintomi).
- Frequenza desiderata.
- Attrezzatura disponibile (baumanometro, glucometro, app, notebook).
- Obiettivo clinico (controllo, monitoraggio, regolazione).

Genera:
1) Istruzioni passo per la misurazione / registrazione (tecnica).
2) Tabella in testo (campi: data, ora, valore, note, sintomi).
3) Come interpretare le tendenze (cosa significa andare su / giù).
4) Soglie di orientamento per il contatto con il medico contro le emergenze (senza dare numeri se non forniti; utilizzare "molto alto / molto basso" e sintomi guida).
5) Raccomandazione per rivedere il registro (ogni X giorni) e cosa inviare.`,
  thumbnail: ""
},

{
  id: "saluded-005",
  title: "Effetti collaterali: spiegazione + quando preoccuparsi",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Aiuta a gestire le paure sui farmaci e distinguere gli effetti attesi vs pericolosi.",
  prompt: `Agisce come medico. Educa gli effetti collaterali di un trattamento.

Ingressi:
- Medicinale o di classe (se non noto, descrivere "trattamento per X").
- Motivo d'uso.
- Durata stimata.
- Condizioni del paziente ( gravidanza, rene, fegato, allergie).

Genera:
1) Effetti comuni (elenco, con descrizione semplice).
2) Cosa fare se appaiono (azioni sicure).
3) Rari ma gravi effetti (lista) e cosa fare.
4) Segni di allergia / anafilassi (lingua semplice).
5) Telaio per migliorare l'aderenza senza minimizzare i rischi.`,
  thumbnail: ""
},

{
  id: "saluded-006",
  title: "Consenso informato semplificato (procedure / studio)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Spiegare ciò che sarà fatto, benefici, rischi e alternative in lingua accessibile.",
  prompt: `Agisce come medico. consenso semplificato per il paziente.

Ingressi:
- Procedura / studio.
- Obiettivo.
- Alternative.
- Grandi rischi.
- Preparazione necessaria.

Genera:
1) Che cosa è e che cosa è per (5 frasi).
2) Prestazioni (3-5 proiettili).
3) Rischi / complicazioni (3-7 proiettili) in lingua semplice.
(4) Alternative ragionevoli (elenco).
5) Pre-preparazione e after-care (checklist).
6) Domande frequenti (5) con risposte brevi.`,
  thumbnail: ""
},

{
  id: "saluded-007",
  title: "Breve intervista motivazionale (5 minuti) per cambio di abitudine",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Lo script clinico per aumentare la motivazione e l'impegno non specificato.",
  prompt: `Agisce come medico utilizzando un'intervista motivazionale a breve termine (MI).

Ingressi:
- Abitazione al cambiamento (tabacco, sedentario, dieta, alcol, sonno).
- Livello di smaltimento (0-10).
- Le barriere principali.
- Il beneficio desiderato del paziente.

Genera:
1) 6 domande stile aperto MI.
2) 6 dichiarazioni enfatiche (riflessione e convalida).
3) "importanza" e "fiducia" tecnica (2 domande ciascuna).
4) Chiusura con impegno minimamente fattibile (1 azione in 24h + 1 in 7 giorni).
5) Piano di ricaduta (se X passa, farò Y).`,
  thumbnail: ""
},

{
  id: "saluded-008",
  title: "In attesa di formazione in camera: scheda informativa 1 pagina",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Crea un breve foglio per stampare e consegnare al paziente.",
  prompt: `Agisce come medico. Crea un foglio informativo di 1 pagina.

Ingressi:
- Argomento (malattia comune o sintomo).
- Pubblico (adulti / pediatrico / anziani).
- Livello di lettura (basico/medio).
- Miti comuni del soggetto.

Genera:
1) Titolo + sommario in 2-3 righe.
2) Che cosa è / perché accade (sezione corta).
3) Che aiuto (5-8 proiettili).
4) Cosa evitare (5 proiettili).
5) Quando consultare immediatamente (segnali di allarme).
6) Miti e realtà (3-5).
7) Nota finale: "questo non sostituisce la consultazione medica".`,
  thumbnail: ""
},

{
  id: "saluded-009",
  title: "Piano di prevenzione: controlli del profilo e vaccini (generale)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Organizza età / prevenzione dei rischi senza fornire raccomandazioni locali specifiche.",
  prompt: `Agisce come medico. Crea un piano preventivo completo.

Ingressi:
- Età e sesso.
- Fattori di rischio (tabacco, DM, HTA, obesità)
- Storia della famiglia rilevante.
- Paese/ambiente (se applicabile).

Genera:
1) Elenco dei controlli raccomandati (generale, non sostituiti da guide locali).
2) Frequenza di orientamento (annuale / ogni 2-3 anni / a rischio).
3) Vaccini da rivedere (nessun programma esatto se il paese non è specificato).
4) abitudini protettive (5).
5. "Cosa portare alla consultazione" (lista).`,
  thumbnail: ""
},

{
  id: "saluded-010",
  title: "Spiegare un risultato di laboratorio in una lingua chiara",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Traduci i risultati a: cosa significa, cosa può influenzare e i prossimi passi.",
  prompt: `Agisce come medico. Spiega un risultato di laboratorio.

Ingressi:
- Nome di studio.
- Valore paziente.
- Campo di riferimento.
- Sintomi e comorbi.

Genera:
1) Che cosa misura e perché conta (3-5 frasi).
(2) Interpretazione del valore (in termini generali).
3) Cause comuni di alterazione (elenco).
4) Cosa ripetere / confermare e quando (guida).
5) Quali cambiamenti di stile di vita potrebbero aiutare (se applicato).
6) Segni per i quali è necessario consultare prima.`,
  thumbnail: ""
},

{
  id: "saluded-011",
  title: "Script per spiegare antibiotici: quando sì / quando no",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Messaggio chiaro per evitare antibiotici inutili e mantenere la soddisfazione del paziente.",
  prompt: `Agisce come medico. Il paziente chiede antibiotici.

Ingressi:
- Motivi di consultazione (cold, tosse, gola, sinusite, ecc.).
- Durata dei sintomi.
- Sì, niente febbre.
- Fattori di rischio.

Genera:
1) Breve spiegazione del perché non aiuta sempre.
2) Che cosa aiuta (gestione sintomatica) con 5 raccomandazioni generali.
3) Quando è riconsiderato (braccio / segni di peggioramento).
4) Piano di monitoraggio (in quanti giorni rivalutare).
5) Cornice di chiusura per mantenere la fiducia.`,
  thumbnail: ""
},

{
  id: "saluded-012",
  title: "Decisioni condivise",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Opzioni di struttura A / B / C con pro / contro per decidere con il paziente.",
  prompt: `Agisce come medico. Usa una decisione condivisa.

Ingressi:
- Problemi clinici.
- Opzioni disponibili (A / B / C).
- Preferenze dei pazienti (tempo, costo, invasione).
- Aversioni o paure.

Genera:
1) Tabella mentale A / B / C (senza tabella): per ogni opzione: vantaggi, rischi, sforzo, tempo, costo approssimativo (se dato).
2) Domande per esplorare i valori dei pazienti (5).
3) Raccomandazione finale condizionale: "Se si valuta X, opzione Y."
4) Prossimo passo e piano di rivalutazione.`,
  thumbnail: ""
},

{
  id: "saluded-013",
  title: "Educazione del segnale di allarme: 'quando tornare' scheda",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Crea una breve, memorabile e specifica lista di segni per i quali consultare.",
  prompt: `Agisce come medico. Crea la scheda "ritorno precauzioni".

Ingressi:
- Diagnosi / sintomo.
- Trattamento indicato.
- Rischi dei pazienti (età, gravidanza, comorbidità).

Genera:
1) 6-10 segnali di allarme specifici.
2) Cosa fare con ciascuno (emergenza / chiamata / consultazione).
3) Che cosa è normale si sente durante il recupero (3-5 punti).
4) Tempo previsto per il miglioramento (orientamento).`,
  thumbnail: ""
},

{
  id: "saluded-014",
  title: "Piano di adesione per l'assunzione di farmaci (non dimenticati)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Strategie pratiche: promemoria, ancoraggi, passatempo, routine e gestione di olvidi.",
  prompt: `Agisce come medico. Progetta un piano di adesione del farmaco.

Ingressi:
- Numero di medicine.
- Circa ore.
- Problema (protetto, effetti, costi, complessità).
- La routine quotidiana dei pazienti.

Genera:
1) Strategia di ancoraggio (medicazione legata alle abitudini esistenti).
2) Sistema di Minder (app / allarme / cantiere navale).
3) Cosa fare se si perde una dose (indicazione generale: vedi etichetta / medico; non dare istruzioni specifiche se non appropriato).
4) Piano di effetti collaterali lievi (quando segnalare).
5) Mini-check settimanale per riordinare / fornire.`,
  thumbnail: ""
},

{
  id: "saluded-015",
  title: "Famiglia / educazione carer (paziente dipendente)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Cura, monitoraggio, comunicazione e guida di scaling per i caregiver.",
  prompt: `Agisce come medico. Educa un custode.

Ingressi:
- Diagnosi.
- Livello di dipendenza.
- Rischi (cadute, confusione, disidratazione).
- Rutina del custode.

Genera:
1) Cosa osservare ogni giorno (controllare).
2) Segnali di allarme (elenco).
3) Come sostenere l'adesione (medici, datazione, idratazione, attività).
4) Comunicazione con il team sanitario: cosa segnalare e come.
5) Self-care del caregiver (3 consigli).`,
  thumbnail: ""
},

{
  id: "saluded-016",
  title: "Script per spiegare 'perché ci riferiamo a specialista '",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Messaggio per ridurre l'ansia e aumentare la collaborazione con l'interconsultazione.",
  prompt: `Agisce come medico. Spiegare un riferimento allo specialista.

Ingressi:
- Campo di riferimento.
- Studi.
- No. Quello che vuoi escludere / confermare.
- La preoccupazione principale del paziente.

Genera:
1) Spiegazione in 4-6 frasi: perché, ciò che porta, ciò che è previsto.
2) Quali informazioni portare (lista).
3) Che cosa potrebbe accadere nella consultazione (passi tipici).
4) Segni con cui si deve venire prima dell'appuntamento.`,
  thumbnail: ""
},

{
  id: "saluded-017",
  title: "Istruzione di stile di vita: un piano realistico in 2 settimane",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Micro abitudini e obiettivi misurabili per avviare cambiamenti senza saturazione del paziente.",
  prompt: `Agisce come medico. Crea un piano di abitudine di 14 giorni.

Ingressi:
- Obiettivo (peso, PA, glucosio, colesterolo, sonno, stress).
- Livello attuale (sedentario, moderato, attivo).
- Restrizioni (tempo, bilancio, infortuni).
- Impostazioni (cibo, orari).

Genera:
1) 3 abitudini micro (massimo 10 min ciascuna).
2) Obiettivi a settimana (settimana 1 e 2).
3) Come misurare il progresso (2 metriche).
4) Possibili ostacoli e "sì" piano (5).
5) Messaggio motivazionale clinico (senza promesse).`,
  thumbnail: ""
},

{
  id: "saluded-018",
  title: "Istruzione del dolore: aspettative e recupero (senza promessa)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Spiega perché fa male, che è normale, cosa evitare e come andare avanti.",
  prompt: `Agisce come medico. Educare paziente con dolore.

Ingressi:
- Tipo di dolore (muscolo, articolazione, neuropatico).
- Tempo di evoluzione.
- Attività che peggiorano.
- La paura principale (ad esempio "mi farò più male").

Genera:
1) spiegazione del dolore (semplice, 5-7 frasi).
2) Che cosa è normale vs preoccupante (2 elenchi).
3) Piano di attività progressiva (3 livelli).
4) Segni per la rivalutazione.
5) Frase per ridurre la paura del movimento.`,
  thumbnail: ""
},

{
  id: "saluded-019",
  title: "Istruzione per pazienti con più comorbidità (sommario unico)",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Integra diverse condizioni in un unico piano chiaro per evitare confusione.",
  prompt: `Agisce come medico. Il paziente ha diverse condizioni.

Ingressi:
- Elenco di diagnosi.
- Medicina di base.
- No. L'obiettivo principale del paziente.
- I sintomi che ti disturbano di piu'.

Genera:
1) Riassunto di "cosa prendersi cura di prima" (priorità 1-3).
2) Piano integrato (abita + controlli + farmaci).
3) Segni di interazione o conflitto tra piani (ad esempio dieta vs rene) in lingua semplice.
4) Successivo follow-up: cosa rivedere e quando.`,
  thumbnail: ""
},

{
  id: "saluded-020",
  title: "Post-consultazione Lettera (Dopo la visita sommario) pronta a copiare",
  area: "Salute e Clinica",
  category: "Istruzione e aderenza dei pazienti",
  summary:
  "Riepilogo finale pronto a inviare il paziente con piano, allarmi e follow-up.",
  prompt: `Agisce come medico. Scrivi il sommario post-consultazione.

Ingressi:
- Diagnosi / sospetto.
- Risultati rilevanti.
- Piano (misure, cure, studi).
- Seguite.

Genera:
1) Riepilogo del discorso (3-5 righe).
2) Piano d'azione (proiettili chiari).
3) Segnali di allarme (bullette).
4) Data successiva: quando e cosa portare.
5) Nota finale empatica e professionale.`,
  thumbnail: ""
}];