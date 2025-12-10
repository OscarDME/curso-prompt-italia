// src/lib/prompts/text/salud-clinica-otros.js

export const textPromptsSaludClinicaOtros = [
{
  id: "saludotros-001",
  title: "Elenco dei file delle note cliniche SOAP (consultazione generale)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Struttura una nota SOAP completa, chiara e difensiva per il file clinico.",
  prompt: `Agisce come medico. Scrivi una nota professionale.

Ingressi:
- Motivi di consultazione (CC).
- Storia della malattia attuale (HPI) con cronologia.
- Sfondo (AP, AHF, allergie, medicinali).
- Controllo del sistema (ROS) rilevante.
- esplorazione fisica (segni vitali + risultati).
- Stampa diagnostica (Dx differenziale).
- Piano (studio, trattamento, istruzione, follow-up).

Genera:
S) Soggetto (HPI + ROS riassunto)
O) Obiettivo (vital + EF + laboratori / immagine se applicata)
A) Valutazione (Dx principale + differenziale + ragionamento)
P) Piano dettagliato del problema + istruzione + precauzioni di ritorno + follow-up
Esso comprende: lingua medica standard, concisa, senza inventare i dati mancanti ("Not reference" mark if lost).`,
  thumbnail: ""
},

{
  id: "saludotros-002",
  title: "Dx differenziale con ragionamento e bandiere rosse",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Genera differenziale per probabilità e urgenza, con quali dati chiedere.",
  prompt: `Agisce come un internista. Costruisce un differenziale.

Ingressi:
- Il sintomo principale.
- Età / sesso.
- Durata ed evoluzione.
- Segni associati / sintomi.
- Fattori di rischio e sfondo.
- Risultati dell'esame.

Genera:
1) Top 5 diagnosi probabili (con 1-2 linee di ragionamento ciascuno).
2) 3 diagnosi Non dovrei perdere (pericoloso) + perché.
3) Domande chiave mancanti (10) per sintonizzare.
4) esplorazione diretta (cosa cercare) (8 punti).
5) Studi iniziali consigliati (laboratorio / immagine) in termini generali.
6) Segnali di allarme che cambiano il comportamento.`,
  thumbnail: ""
},

{
  id: "saludotros-003",
  title: "Algoritmo di triage (telemedicina) per sintomo frequente",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Guida decisionale per guidare: auto-cura vs citazione vs emergenze.",
  prompt: `Agisce come medico di triage in telemedicina. Crea un algoritmo sicuro.

Ingressi:
- Sintomi (ad esempio mal di gola, febbre, diarrea, mal di testa).
- Gruppo (adulto / pediatrico / gravidanza / anziani).
- Fattori di rischio.
- Durata.

Genera:
1) domande di filtro iniziale (8-12).
2) Aree di decisione:
- Il pronto soccorso oggi (criteria).
- Consulenza rapida (24-72h).
- Gestione della casa (criteria).
3) Raccomandazioni self-care (5-8) senza farmaci se non specificato.
4) Segnali di allarme specifici.
5) Messaggio finale legale / etico: "questo non sostituisce la valutazione faccia a faccia".`,
  thumbnail: ""
},

{
  id: "saludotros-004",
  title: "Interpretazione clinica dei segni vitali (contestualizzati)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Aiuta a interpretare PA, FC, FR, T °, SatO2 in base al contesto e ai sintomi.",
  prompt: `Agisce come medico. Suona segni vitali nel contesto.

Ingressi:
- Età / sesso.
- Vitali (PA, FC, FR, T °, SatO2).
- Sintomi attuali.
- Sfondo (cardio / polmone / gravidanza).
- Situazione (riposo, post-esercizio, ansia, dolore).

Genera:
1) Quali risultati sono più preoccupanti rispetto al previsto (in contesto).
2) 5 possibili cause per ogni anormalità rilevante.
3) Cosa confermare / misurare di nuovo (tecnica e momento).
4) Che chiedere di differenziare le cause.
5) Quando indicare una valutazione urgente.`,
  thumbnail: ""
},

{
  id: "saludotros-005",
  title: "Piano di monitoraggio e criteri di rivalutazione",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Definire il monitoraggio ottimale: quando, con quali obiettivi e cosa cambiare se non migliora.",
  prompt: `Agisce come medico. Progettazione piano di follow-up sicuro.

Ingressi:
- Diagnosi o problema clinico (o sospetto).
- Trattamento iniziale.
- Severità (mild / moderata / grave).
- Barriera (accesso, costo, distanza).
- Obiettivi dei pazienti.

Genera:
1) Monitoraggio ideale (tempo e modalità: faccia / TV).
2) Che misurare / registrare prima del follow-up (list).
3) Criteri di miglioramento (3-5).
4) Criteri di fallimento terapeutico (3-5).
5) Cosa aggiustare se fallisce (in termini generali).
6) Segnali di allarme per la consultazione immediata.`,
  thumbnail: ""
},

{
  id: "saludotros-006",
  title: "Riepilogo clinico per riferimento a specialisti (interconsultazione)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Lettera breve, chiara e utile per lo specialista, con specifica domanda clinica.",
  prompt: `Agisce come medico. Scrivi un riassunto per l'interconsultazione.

Ingressi:
- Specialità di destinazione.
- Campo di riferimento (questione clinica).
- Riepilogo dei casi (sintomi, evoluzione).
- Risultati rilevanti.
- Studi (date e risultati).
- Prove cure e risposta.

Genera:
1) Motivo / domanda clinica in 1-2 linee.
2) Riassunto (cronologico) storia clinica.
3) Risultati chiave (bullette).
(4) allegati (elenco).
5) Trattamenti e risposte precedenti.
6) Che cosa è richiesto dello specialista (molto specifico).`,
  thumbnail: ""
},

{
  id: "saludotros-007",
  title: "Script per comunicare cattive notizie (SPIKES adattato)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Struttura ambasciata per comunicare diagnosi difficili senza perdere chiarezza.",
  prompt: `Agisce come medico. Preparare uno script con il modello SPIKES.

Ingressi:
- Diagnosi / notizie.
- Livello di sospetto del paziente (aspettato / non previsto).
- Famiglia presente (sì / no).
- Prossimo passo disponibile.

Genera:
1) S: Impostazione (come preparare l'ambiente).
2) P: Percezione (questioni per capire quello che sai).
3) I: Invito (quanto vuoi sapere ora).
4) K: Conoscenza (come mettere chiaro e in porzioni).
5) E: Empatia (frasi di valutazione).
6) S: Strategia / Riepilogo (piano intermedio e follow-up).
Include 5 frasi esatte da usare e 5 frasi da evitare.`,
  thumbnail: ""
},

{
  id: "saludotros-008",
  title: "Indicazioni preoperative / pre-procedure (controllo paziente)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Clear Checklist per prepararsi prima di una procedura e ridurre le cancellazioni.",
  prompt: `Agisce come medico. Progetto di indicazioni pre-procedure.

Ingressi:
- Procedura.
- Tipo di anestesia / sedazione (se applicabile).
- Comporbidità rilevanti.
- Medicinali attuali (anticoagulanti, DM, ecc.) se noti.

Genera:
1) Elenco di controllo 72h prima / 24h prima / giorno della procedura.
2) Ayuno (descrive in termini generali se non vi è alcuna indicazione specifica).
3) Che portare / che evitare.
4) Segni con cui si dovrebbe avvertire prima (fever, infezione, ecc.).
5) Assistenza iniziale post-procedure (generale).
Non inventare istruzioni specifiche se i dati mancano; contrassegnare "confermare con il computer".`,
  thumbnail: ""
},

{
  id: "saludotros-009",
  title: "Evoluzione giornaliera dell'ospedale (nota di ingresso)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Formato standard per l'evoluzione dei problemi con il piano giornaliero.",
  prompt: `Agisce come medico ospedaliero. Esso stabilisce una nota di progresso.

Ingressi:
- Giorno dell'ospedalizzazione.
- La diagnosi principale.
- 24 ore di eventi.
- Segni vitali / equilibrio dell'acqua.
- Labs / immagine rilevante.
- Trattamenti attivi.

Genera:
1) Soggettivo ( sintomi pazienti).
2) Obiettivo (vital, EF, laboratori, I / O).
3) Valutazione / Piano per i problemi (bolletti).
4) Disposizione e obiettivi della giornata (scarico, studi in sospeso, barriere).
5) Profilassi / sicurezza (cadute, trombosi, ulcere, ecc.).`,
  thumbnail: ""
},

{
  id: "saludotros-010",
  title: "Nota di emergenza: ABCDE + approccio alla condotta",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Struttura rapida per casi acuti: stabilizzazione, piano differenziale e immediato.",
  prompt: `Agisce come medico d'emergenza. Struttura il caso con ABCDE.

Ingressi:
- Presentazione acuta.
- Vitali.
- Risultati di esplorazione.
- Risultati rapidi disponibili.
- Interventi fatti.

Genera:
1) ABCDE (finanze + azioni).
2) Stampa diagnostica (main + differenziaal).
3) Piano immediato (misure, studi, rivalutazione).
4) Criteri di entrata vs alto (in termini generali).
5) Istruzioni per il rilascio e gli allarmi (se applicabile).`,
  thumbnail: ""
},

{
  id: "saludotros-011",
  title: "Analisi dell'interazione fisica - farmaco e condizione fisica",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Rivede possibili interazioni e propone domande / monitoraggio (senza regolazione della dose).",
  prompt: `Agisce come medico. Esso analizza le interazioni e i rischi.

Ingressi:
- Elenco dei farmaci (compreso OTC e integratori).
- Diagnostica / condizioni.
- Sintomi attuali.
- Funzione epatica/renale se nota.

Genera:
1) Interazioni potenziali (organizzate dalla gravità: alto / medio / basso).
2) Quali sintomi monitorare da interazione (elenco).
3) Quali domande mancano per valutare il rischio (8-12).
4) Raccomandazione di monitoraggio (labs / PA / ECG) in generale.
5) Messaggio di sicurezza: "non cambiare senza il medico.".`,
  thumbnail: ""
},

{
  id: "saludotros-012",
  title: "Piano di gestione dell'ansia in consultazione medica (breve)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Guida pratica per i pazienti ansiosi: piano di respirazione, rifrazione e azione.",
  prompt: `Agisce come medico. Il paziente è molto ansioso per i suoi sintomi.

Ingressi:
- Motivi di ansia (sintomo, studio, diagnosi).
- Sintomi fisici di ansia (palpitazioni, mancanza di aria, insonnia).
- Contesto (stress, duello, lavoro).
- Preferenze (terapia, abitudini, non farmaci).

Genera:
1) convalida empatica (2-3 frasi).
2) breve tecnica di respirazione (steps).
3) Differente " sintomi dell'allarme" vs " sintomi compatibili con l'ansia" (non diagnosticato se non applicato).
4) Piano 7 giorni (abita + follow-up).
5) Quando derivare / consultare l'emergenza (criteria).`,
  thumbnail: ""
},

{
  id: "saludotros-013",
  title: "Elenco di controllo della sicurezza dei pazienti (error prevention)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Lista di controllo per ridurre i rischi: allergie, identità, farmaci, ecc.",
  prompt: `Agisce come medico con un focus sulla sicurezza del paziente.

Ingressi:
- Contesto (consultazione esterna, emergenza, ospedale).
- Procedure / misure previste.
- Rischi (allergie, anticoagulanti, gravidanza, cadute).

Genera:
1) Prevenzione della lista di controllo (10-15 punti).
2) Lista di controllo per (5-8 punti).
3) Alto / laureato Checklist (8-12 punti).
4) "Frequenti errori" e come evitarli (6).
5) Messaggio di cultura di sicurezza (1 paragrafo).`,
  thumbnail: ""
},

{
  id: "saludotros-014",
  title: "Strategia di comunicazione clinica: paziente difficile / arrabbiato",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Script al conflitto in scala, mantenere i limiti e raggiungere l'accordo terapeutico.",
  prompt: `Agisce come medico. Sta parlando con un paziente sconvolto.

Ingressi:
- Motivi per la rabbia (tempo di attesa, diagnosi, costi, trattamento).
- Livello di aggressione (basso / medio / alto).
- No. Ciò che deve essere raggiunto oggi (piano, aderenza, riferimento).

Genera:
1) Bottiglie di apertura per decalculation (5).
2) Domande per identificare la reale necessità (5).
3) Limiti chiari e rispettosi (3 frasi).
4) Piano di accordo (opzioni A / B) e come presentarli.
5) Cosa documentare nel file (elenco).
6) Segnali di sicurezza per salire a supporto (se applicabile).`,
  thumbnail: ""
},

{
  id: "saludotros-015",
  title: "Istruzioni standard di rilascio per la sindrome",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Crea un temperato riutilizzabile: cura, segnali di allarme e follow-up per la sindrome clinica.",
  prompt: `Agisce come medico. Crea un modello di rilascio riutilizzabile.

Ingressi:
- Sindrome / stato (es. gastroenterite, lumbalgia, IVAS).
- Popolazione (adulto / pediatrico / gravidanza).
- Gestione indicata (generale).

Genera:
1) Che cosa è (breve spiegazione).
2) Cura domestica (8 proiettili).
3) Cosa evitare (5 proiettili).
4) Segnali di allarme (8-12).
5) Seguito consigliato (quando e con chi).
6) FAQ (5) con risposte brevi.`,
  thumbnail: ""
},

{
  id: "saludotros-016",
  title: "Guida di lettura rapida ECG / Rx / TAC (struttura di rapporto)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Modello per interpretare sistematicamente gli studi (senza trovare risultati).",
  prompt: `Agisce come medico. Genera un modello di lettura sistematica.

Ingressi:
- Tipo di studio (ECG / Rx torace / CT addome, ecc.).
- motivi clinici.
- I risultati riportati (se esiste già un rapporto).
- Sintomi e contesto.

Genera:
1) Un metodo sistematico step-by-step (checklist).
2) Risultati chiave alla ricerca secondo il movente (lista).
3) Come correlare con la clinica (questioni).
4) Quali risultati richiedono un'azione immediata (bandiere rosse).
5) Come documentare la conclusione e il prossimo passo.`,
  thumbnail: ""
},

{
  id: "saludotros-017",
  title: "Piano di cura dei pazienti cronici (piano di assistenza annuale)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Costruire un piano annuale: obiettivi, controlli, istruzione, prevenzione e monitoraggio.",
  prompt: `Agisce come medico primario. Progetta un piano di assistenza annuale.

Ingressi:
- Stato cronico (DM2, HTA, COPD, asma, ecc.).
- Età e comorbidità.
- Risorse dei pazienti (tempo, accesso, supporto).
- Gli obiettivi del paziente.

Genera:
1) Obiettivi SMART (3-5).
2) Controlli e monitoraggio (cosa e quando, generale).
3) Piano di stile di vita per dominio (cibo, attività, sonno, stress).
4) segni di discompensazione e piano d'azione.
5) Programma di monitoraggio (3-4 pietre miliari).
6) Come coinvolgere famiglia / caregiver.`,
  thumbnail: ""
},

{
  id: "saludotros-018",
  title: "Controllo della documentazione clinica (qualità e rischio legale)",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Controllare una nota per rilevare lacune, ambiguità e migliorare la difesa clinica.",
  prompt: `Agisce come revisore clinico. Sta valutando una nota medica.

Ingressi:
- Testo della nota.
- Contesto (consultazione / emergenza / ospedale).
- Obiettivo (migliorare chiarezza, fatturazione, rischi).

Genera:
1) 10 miglioramenti concreti (mancanti, mancanti, da chiarire).
2) Rischi medici-legali per omissioni (lista).
3) Consigli di redazione per: HPI, EF, ragionamento, piano.
4) Elenco di controllo finale per le note future.`,
  thumbnail: ""
},

{
  id: "saludotros-019",
  title: "Script \"spiega perché non chiedere uno studio inutile\"",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Risponde quando il paziente non richiede alcuna indicazione di risonanza / antibiotici / laboratori.",
  prompt: `Agisce come medico. Il paziente richiede uno studio senza indicazioni chiare.

Ingressi:
- Studio richiesto.
- Sintesi / diagnosi attuale.
- Paziente paura (cosa pensi di avere).
- I risultati che riducono la probabilità di gravità.

Genera:
1) Breve spiegazione (benefit vs falso positivo / danno / costo).
2) Che cosa se facciamo (piano alterato) e perché è più utile ora.
3) Segni che giustificano lo studio (criteri clinici).
4) Piano di monitoraggio a tempo.
5) Chiusura empatica per mantenere la fiducia.`,
  thumbnail: ""
},

{
  id: "saludotros-020",
  title: "Modello di sessione clinica: caso + discussione + perle",
  area: "Salute e Clinica",
  category: "Altri",
  summary:
  "Struttura un caso da presentare in visita pass o sessione accademica.",
  prompt: `Agisce come medico docente. Struttura di presentazione dei casi.

Ingressi:
- Caso (età, sesso, movente, HPI, EF, laboratori / immagine).
- Dx finale o sospettato.
- Punti di apprendimento.

Genera:
1) Presentazione in 60-90 secondi (pass style).
2) Problema rappresentativo (1 frase).
3) Dx sistema differenziale.
4) ragione clinica (perché Dx A > B).
(5) Gestione e monitoraggio.
6) 5 perle cliniche + 3 errori comuni.`,
  thumbnail: ""
}];