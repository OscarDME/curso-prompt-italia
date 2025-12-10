// src/lib/prompts/text/salud-clinica-historia-clinica-triage.js

export const textPromptsSaludClinicaHistoriaClinicaTriage = [
{
  id: "saludtriage-001",
  title: "Triage iniziale (emergenza) con bandiere rosse",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Struttura una rapida intervista per rilevare la gravità, i ritardi di rete e il livello di decisione di attenzione.",
  prompt: `Agisce come medico di emergenza con un focus sulla sicurezza del paziente.

Ingressi:
- Età / sesso (se applicabile).
- Motivi di consultazione (1 frase).
- Inizio ed evoluzione (ore / giorni).
- Vitali (se presenti).
- Sfondo e droghe rilevanti.
- Allergie.
- Gravidanza (se applicabile).

Compito:
1) Riassumere il caso su 2-3 linee.
2) Triage con scala pratica (Low / Middle / High) e giustificazione.
3) Identifica le "bandiere rosse" specifiche a questo motivo di consultazione.
4) Fai 12 (non-generico) domande dirette per completare la storia focalizzata.
5) Suggerisci l'esplorazione fisica diretta (10 punti).
(6) Piano immediato per priorità:
- Misure a domicilio (se applicabili).
- Studi minimi iniziali (se applicabili).
- Raccomandazione per l'assistenza di emergenza / consultazione / follow-up.
7) Egli dà consigli di sicurezza: quali segni lo costringono ad andare al pronto soccorso oggi.
8) Include un messaggio finale empatico e chiaro per il paziente (lingua semplice).`,
  thumbnail: ""
},

{
  id: "saludtriage-002",
  title: "Anamnesis completa (formato clinico) per la prima consultazione",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Genera un modello di interrogatorio completo e adattabile per la prima volta.",
  prompt: `Agisce come medico curante primario e crea un anamnesi completo, strutturato ed efficiente.

Ingressi:
- Motivo di consultazione.
- Età / sesso (se applicabile).
- Contesto (prima volta / seguito).

Genera:
1) Elenco Ordinato delle sezioni di storia clinica:
- Stato attuale (con OPQRST + cronologia).
- Storia della famiglia.
- Personale patologica e non patologica.
- Chirurgico / trauma.
- Medicinali attuali (dos / ore) + adesione.
- Allergie e reazioni.
- Gynecoobstetric (se applicabile).
- Abitudini (tabacco / alcol / sonno / attività / dieta).
- Occupazione e rischi.
- Salute mentale (breve screening).
2) Per ogni sezione, scrivere domande specifiche (non-generi).
3) Chiudere con: elenco dei problemi, presupposti iniziali e dati mancanti critici.
4) Include come documentare i negativi rilevanti ("negate...").`,
  thumbnail: ""
},

{
  id: "saludtriage-003",
  title: "Dolore al petto: intervista condotta + rischio cardiovascolare",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Ottieni la storia diretta e stratifica il rischio con un approccio di emergenza.",
  prompt: `Agisce come medico clinico. Valuterai il DOLOR TORACIC.

Ingressi:
- Età / sesso.
- Una descrizione gratuita del dolore (testo paziente).
- Sfondo (HTA, DM, dislipidemia, fumo, ecc.).
- Vitali se esistono.

Genera:
1) 15 domande affrontate (caratteristiche, irradiazione, trigger, sollievo, durata, associata).
2) Bandiere rosse specifiche (sintomi e fattori di rischio).
3) diagnostica differenziale per gravità:
- Laterale / dipendente dal tempo (top 5).
- Moderato (top 5).
- Benign comune (top 5).
4) Raccomandazione del livello di assistenza (emergenza immediata vs consultazione) con giustificazione.
5) Cancella istruzioni per il paziente e avvisi di sicurezza.
Utilizzare la lingua chiara e professionale. Non inventare studi o diagnosi definitive.`,
  thumbnail: ""
},

{
  id: "saludtriage-004",
  title: "Dyspnoea (mancanza d'aria): storia diretta + gravità",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Struttura domande per dispnoea e definisce urgenza secondo gravità.",
  prompt: `Agisce come medico d'emergenza. Evalúa DISNEA.

Ingressi:
- Età / sesso.
- Casa (sudden / progressista).
- Contesto (ritorno / sforzo, infezione recente, asma / COPD, ecc.).
- O2 saturazione se esiste.

Genera:
1) Domande chiave (minimo 14) per differenziare le cause di cuore, polmone, metabolico e ansia.
2) Bandiere rosse che forzano l'emergenza.
3) esplorazione fisica diretta (10 risultati e che cosa significano).
4) Priorità di gestione iniziale (sicurezza) e studi suggeriti (se applicabile).
5) Spiegazione al paziente (semplice) del perché potrebbe essere urgente.`,
  thumbnail: ""
},

{
  id: "saludtriage-005",
  title: "Febbre adulta: una sindrome + approccio al rischio",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Guida alla valutazione dei segnali di febbre, origine probabile e allarme.",
  prompt: `Agisce come primo medico di contatto. Evalúa FIEBRE in adulto.

Ingressi:
- Età.
- Durata della febbre.
- sintomi di accompagnamento.
- Comorbidità / immunosoppressione
- Viaggi recenti / mostre.

Genera:
1) Intervista condotta (12- 16 domande).
2) Possibili punti focali per sistema (respiratorio, urinario, GI, pelle, CNS).
3) Segnali di allarme secondo età / comorbilità.
4) Che cosa può essere gestito a casa vs quando andare al pronto soccorso.
5) Raccomandazioni generali sicure (idratazione, controllo termico, quando evitare FANS, ecc.).`,
  thumbnail: ""
},

{
  id: "saludtriage-006",
  title: "Dolore addominale: mappa della posizione + allarmi",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valuta il dolore addominale per quadrante, evoluzione e diagnosi prioritarie.",
  prompt: `Agisce come medico clinico. Evalúa DOLOR ABDOMINALE.

Ingressi:
- Età / sesso.
- Posizione principale (quadrant / epigastrium).
- Casa, evoluzione, intensità.
- Vomito / diarrea, febbre, urinaria, ginecologica (se applicabile).

Genera:
1) 18 domande affrontate (OPQRST + associato + GI / background chirurgico).
2) Lags rossi (peritonite, sanguinamento, gravidanza ectopica, ecc.).
3) Diverso per posizione (top 5 per quadrante rilevante).
4) Piano di valutazione (esplorazione e studi suggeriti) per gravità.
5) Raccomandazione per il livello di assistenza (casa / consultazione / emergenza).`,
  thumbnail: ""
},

{
  id: "saludtriage-007",
  title: "Fascia: classificazione (primario vs secondario) + bandiere rosse",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Emicrania / differenza di mal di testa tensione di gravi cause secondarie.",
  prompt: `Agisce come medico. Evalúa CEFALEA.

Ingressi:
- Età.
- Casa (sudden vs graduale).
- Durata e schema.
- Sintomi neurologici associati.
- Sfondo (migrania, HTA, anticoagulanti).

Genera:
1) 15 domande affrontate con l'approccio SNOOP10 (bandiere rosse).
2) Criteri che richiedono un'azione di emergenza lo stesso giorno.
3) Differenze principali (primarie e secondarie) con tracce cliniche.
4) Raccomandazioni sicure iniziali e piano di follow-up.
Evitare la diagnosi definitiva; priorità di sicurezza.`,
  thumbnail: ""
},

{
  id: "saludtriage-008",
  title: "Diarrea acuta: valutazione della disidratazione e del rischio",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Intervista diretta, gravità, idratazione e quando derivare.",
  prompt: `Agisce come medico. Evalúa DIARREA AGUDA.

Ingressi:
- Età.
- Durata.
- Numero di deposizioni / giorno.
- Sangue / muco.
- Fever, dolore.
- Esposizione (travel, cibo, antibiotici).
- Comorbidità.

Genera:
1) 14 domande.
2) Valutazione della disidratazione (segni e sintomi).
3) Lags rossi (emorragia, febbre alta, immunosoppressione, ecc.).
4) Gestione iniziale sicura (oral idratation, dieta, cosa evitare).
5) Criteri chiari di urgenza o di consultazione prioritaria.`,
  thumbnail: ""
},

{
  id: "saludtriage-009",
  title: "Vomit: cause probabili + segnali di allarme",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Guida alla domanda chiave per il vomito acuto e la valutazione della gravità.",
  prompt: `Agisce come medico. Evalúa VOMITO.

Ingressi:
- Età.
- Casa e frequenza.
- Dolore addominale, febbre.
- Sangue in vomito, bile, contenuto fecaloide.
- Droghe e alcol.
- Gravidanza (se applicabile).

Genera:
1) 12-16 domande affrontate.
(2) Rete di terreni e motivi di emergenza.
3) Principali differenze (GI, neurologico, metabolico, tossico).
4) Raccomandazioni iniziali sicure (idratazione, antiemetica solo come idea, non prescrizione) e follow-up.`,
  thumbnail: ""
},

{
  id: "saludtriage-010",
  title: "Sintomi urinari (dysuria): cistite vs pyelonephritis vs STD",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Classifica la gravità e dirige il differenziale nei sintomi urinari.",
  prompt: `Agisce come medico. Evalúa DISURIA / SíNTOMAS URINARIOS.

Ingressi:
- Sesso/età.
- Sintomi: bruciore, urgenza, frequenza, dolore lombare, febbre.
- Gravidanza (se applicabile).
- Rischio sessuale.

Genera:
1) 14 domande.
2) Segni di pyelonephritis / complicazione e criteri di emergenza.
3) Diverso: cistite, STD / urerite, prostatite, litiasi.
4) Studi di base consigliati (ad esempio EGO) e piano di follow-up.`,
  thumbnail: ""
},

{
  id: "saludtriage-011",
  title: "Vertigini / vertigini: differenziale periferica vs centrale",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Storia diretta + bandiere rosse neurologiche per vertigini / vertigini.",
  prompt: `Agisce come medico. Evalúa MAREO / VÉRTIGO.

Ingressi:
- Età.
- Descrizione del sintomo (twist vs instability vs lipothymia).
- Avvio e durata episodi.
- Sintomi neurologici e uditivi.
- Fattori di rischio vascolari.

Genera:
1) 16 domande.
2) Bandiere rosse (possibile EVC) e azione raccomandata.
3) Diverso: VPPB, neurite vestibolare, emicrania vestibolare, ipotensione, aritmia.
4) Esplorazione fisica consigliata (tra cui segni di tipo nistagm e test di base).
5) Istruzione paziente e quando tornare immediatamente.`,
  thumbnail: ""
},

{
  id: "saludtriage-012",
  title: "Dolore di Lump: meccanico vs neurologico (flusso equino / lags rossi)",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valuta la lumbalgia e rileva bandiere rosse neurologiche o infettive.",
  prompt: `Agisce come medico. Evalúa DOLOR LUMBAR.

Ingressi:
- Età.
- Casa (trauma / sollevamento / spontaneo).
- Irradiazione.
- Fever, perdita di peso.
- Perturbazioni o debolezza.

Genera:
1) 15 domande.
2) Lags rossi: equine causa, frattura, infezione, malignità.
3) Classifica urgenza (routine vs urgente).
4) Un piano di gestione iniziale sicuro e raccomandazioni aziendali.
5) Segnali chiari per l'emergenza.`,
  thumbnail: ""
},

{
  id: "saludtriage-013",
  title: "Trauma minore: valutazione iniziale e necessità di immagine",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Struttura domande e esame per colpi / cadute e decide la derivazione.",
  prompt: `Agisce come medico. Evalúa TRAUMA MENOR (caduta / soffiata).

Ingressi:
- Meccanismo.
- Area interessata.
- Dolore, deformità, limitazione.
- Sintomi neurologici se testa / collo.

Genera:
1) Storia diretta per area (testa, polso, caviglia, ginocchio).
2) Lags rossi (perdita di coscienza, vomito persistente, deformità, intorpidimento).
3) Esame fisico consigliato.
4) Raccomandazione: osservazione a casa vs valutazione immediata in emergenza.
5) Istruzioni di cura e segnali di allarme.`,
  thumbnail: ""
},

{
  id: "saludtriage-014",
  title: "Rash / lesioni cutanee: differenziare allergico vs infettivo vs grave",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valutazione sicura delle eruzioni cutanee e delle bandiere rosse (anafilassi, SJS, meningococcus).",
  prompt: `Agisce come medico. Evalúa ERUPTION QUTANEA / RASH.

Ingressi:
- Età.
- Aspetto ed evoluzione.
- Distribuzione (dove è iniziata e dove è).
- Prurito / dolore.
- Fever e sintomi sistemici.
- Nuovi farmaci (ultimi 2-8 settimane).

Genera:
1) 16 domande.
2) Bandiere rosse: anafilassi, sindrome di Stevens-Johnson, meningococcal viola, grave cellulite.
3) Differenze probabili con tracce cliniche.
4) Raccomandazione di emergenza e assistenza iniziale sicura.`,
  thumbnail: ""
},

{
  id: "saludtriage-015",
  title: "Anxiety vs Professional categoria: intervista clinica sicura",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Guida a non attribuire all'ansia senza licenziare cause mediche e rilevare il rischio.",
  prompt: `Agisce come medico. Evalúa SINGOMAS compatibile con ansia (palpitazioni, oppressione, dispnea, vertigini).

Ingressi:
- Età.
- Il sintomo principale.
- Casa e contesto.
- Sfondo (cuore, tiroide, anemia, sostanze).

Genera:
1) Domande per escludere le cause organiche (cardio / polmonare / endocrino / metabolico).
2) Red lags che forzano l'emergenza.
3) Questioni di salute mentale (breve screening) con linguaggio rispettoso.
4) Piano di sicurezza e raccomandazioni di follow-up.
Non minimizzare il paziente.`,
  thumbnail: ""
},

// --- Nota: Del 16 al 40 seguimos igual de "médico profesional" y detallados. ---
{
  id: "saludtriage-016",
  title: "Ipertensione rilevata: conferma, rischio e urgenza",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valuta la lettura ad alta pressione e decide se è urgenza ipertensiva.",
  prompt: `Agisce come medico. Valuta ELEVAD ARTERIAL PRESION.

Ingressi:
- Lettura (con il tempo e la misura).
- Sintomi: mal di testa, dolore al petto, dispnoea, deficit neurologico, visione offuscata.
- Sfondo e droga.
- Gravidanza (se applicabile).

Genera:
1) Lista di controllo per confermare la corretta misurazione.
2) Domande volte a danneggiare l'organo bianco.
3) Classificazione: controllo ambulatorio vs emergenza.
4) Proteggi le raccomandazioni immediate + i segnali di follow-up e di allarme.`,
  thumbnail: ""
},

{
  id: "saludtriage-017",
  title: "Ipoglicemia / iperglicemia: sintomi, rischio e azioni",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Triage del glucosio cambia e quando andare all'emergenza.",
  prompt: `Agisce come medico. Valuta le possibili ALTERAZIONI GLUCOSA.

Ingressi:
- Diabete sì / no, trattamento.
- Lettura del glucosio (se presente).
- Sintomi (tremor, sudorazione, confusione; o poliuria / poli, vomito).
- Stato di coscienza.

Genera:
1) Domande rapide per differenziare i singhiozzi vs iperglicemia.
2) Lags rossi (chetoacidosi, stato iperosmolare, neuroglicopenia).
3) Sicurezza immediata (scenari) misure e criteri di emergenza.`,
  thumbnail: ""
},

{
  id: "saludtriage-018",
  title: "Gravidanza: dolore al primo trimestre e sanguinamento (sicurezza)",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valuta l'urgenza di sanguinamento / dolore presto per escludere ectopico.",
  prompt: `Agisce come medico. Evalúa SANGRADO e / o DOLOR in gravidanza precoce.

Ingressi:
- Settimane stimate.
- Numero di sanguinamento.
- Dolore (posizione e intensità).
- Vertigini / sincope.
- storia ectopica / IVU / interventi chirurgici.

Genera:
1) Domande rivolte (min. 14).
2) Bandiere rosse di gravidanza ectopica / shock.
3) Raccomandazione immediata (emergenza vs. consultazione) con chiara giustificazione.
4) messaggio empatico e di sicurezza.`,
  thumbnail: ""
},

{
  id: "saludtriage-019",
  title: "Bambino con febbre: triage di età e segnali di allarme",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Struttura di valutazione pediatrica di base e definizione di urgenza.",
  prompt: `Agisce come medico con un approccio pediatrico. E' un bambino.

Ingressi:
- Età esatta (mesi / anni).
- Temperatura e metodo.
- Durata.
- Comportamento (irritabile, sonno, mangiare / bere).
- Vaccini al giorno sì / no.

Genera:
1) Domande a sistema (respiratorio, GI, urinario, pelle).
2) Segnali di allarme che richiedono emergenza (elenco chiaro).
3) Guida di gestione a casa (idratazione, antipiretici come idea generale) e follow-up.`,
  thumbnail: ""
},

{
  id: "saludtriage-020",
  title: "Tosse: differenziare l'infezione mite vs polmonite vs asma / COPD",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Storia clinica diretta per la tosse e il criterio di gravità.",
  prompt: `Agisce come medico. Evalúa TOS.

Ingressi:
- Durata (acuto / subacuto / cronico).
- Fever, dispnoea, dolore pleurico.
- Aspettativa (colore / quantità), emoptosi.
- Anger/COPD.

Genera:
1) 14 domande.
2) Lags rossi (dispnoea, bassa saturazione, emoptosi, dolore toracico, confusione).
(3) Differenziali e livello di raccomandazione di cura.`,
  thumbnail: ""
},

{
  id: "saludtriage-021",
  title: "Occhio rosso: congiuntivite vs uveitis vs glaucoma acuto",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valuta l'occhio rosso e rileva le urgenze oftalmologiche.",
  prompt: `Agisce come medico. Evalúa OJO ROJO.

Ingressi:
- Dolore (sì / no), fotofobia, visione offuscata.
- Segreto.
- Uso delle lenti a contatto.
- Trauma o sostanze chimiche.

Genera:
1) 12-15 domande affrontate.
2) Bandiere rosse (ogni dolore, fotofobia, visione ridotta, contatto, chimico).
3) Differenze e raccomandazioni probabili (urgente vs consultazione).
4) Consigli di sicurezza (non automatizzare le gocce di steroidi).`,
  thumbnail: ""
},

{
  id: "saludtriage-022",
  title: "Dolore alla gola: faringite vs ascesso peri-friendly",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Diretto storia e segni di complicazione in odinofagia.",
  prompt: `Agisce come medico. Evalúa DOLOR DE GARGANTA.

Ingressi:
- Durata.
- Fever.
- Tosse / rinorrea.
- Difficolta' a ingoiare, voce spenta, trismus.
- Contatti malati.

Genera:
1) 12 domande.
2) Lags rossi (dispnea, strider, trismus, drooling, voce di patate calde).
3) Diverso e urgente.
4) Raccomandazioni per la sicurezza e il follow-up.`,
  thumbnail: ""
},

{
  id: "saludtriage-023",
  title: "Dolore all'orecchio: otite vs mastoidite (arma)",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Guida alle domande e ai criteri di complicazione in otalgia.",
  prompt: `Agisce come medico. Evalúa DOLOR DE OIDO.

Ingressi:
- Età.
- Fever.
- Segreto.
- Riduzione dell'udito.
- Dolore dietro la deviazione dell'orecchio / padiglione.

Genera:
1) 12 domande.
2) Segni di mastoidite / complicazione e urgenza.
3) Diverso e piano di cura.`,
  thumbnail: ""
},

{
  id: "saludtriage-024",
  title: "Palpitazioni: valutare aritmia vs ansia vs stimolanti",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Intervista diretta per palpitazioni e bandiere rosse.",
  prompt: `Agisce come medico. Valuta le PALPITAZIONI.

Ingressi:
- Età.
- Improvvisa / graduale inizio.
- Durata dell'episodio.
- Sintomi associati (sintopo, dolore toracico, dispnoea).
- Caffè / energia / sostanze.

Genera:
1) 14 domande.
2) Lags rossi (sintopo, dolore toracico, ipotensione, storia della famiglia morte improvvisa).
3) Raccomandazione di emergenza e studi suggeriti (ad esempio GCC) se applicabile.`,
  thumbnail: ""
},

{
  id: "saludtriage-025",
  title: "Leg oedema: differenziare l'insufficienza venosa vs CI vs TVP",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Storia diretta per l'edema e il rilevamento di trombosi di vena profonda.",
  prompt: `Agisce come medico. Valuta EDEMA sul NAS.

Ingressi:
- Unilaterale contro bilaterale.
- Dolore, calore, rossore.
- Dolore al petto.
- Sfondo (travel, cancro, chirurgia, contraccettivi).

Genera:
1) 14 domande.
2) Lags rossi (TVP / TEP, IC decompensato).
(3) Raccomandazione diversa e immediata.`,
  thumbnail: ""
},

{
  id: "saludtriage-026",
  title: "Maggio / sincronizzazione: cause benigne vs rischio cardiaco",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valutazione della sincope della struttura con approccio alla sicurezza.",
  prompt: `Agisce come medico. Evalúa SYNCOPE.

Ingressi:
- Contesto (forza, sforzo, dolore, emozione).
- Prodromi (nausea, sudore, visione tunnel).
- Trauma associato.
- Cardiac / storia della famiglia.

Genera:
1) 16 domande.
2) Rete di sincope cardiogenico.
3) Raccomandazione di emergenza e studi iniziali suggeriti.`,
  thumbnail: ""
},

{
  id: "saludtriage-027",
  title: "Perdita di peso involontario: approccio clinico e differenziale",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Una storia diretta alla perdita di peso e sintomi sistemici.",
  prompt: `Agisce come un internista. Evalúa PÉRDID DE FISH INVOLUNTARIA.

Ingressi:
- Quantità (kg) e tempo.
- Sbrigati.
- Sintomi: febbre, sudorazione notturna, diarrea, tosse, dolore.
- Sfondo e farmaci.

Genera:
1) 18 domande affrontate (endocrino, GI, infettivo, neoplastico, psichiatrico).
2) Lags rossi.
3) Piano di valutazione iniziale (suggested laboratori / studi) e follow-up.`,
  thumbnail: ""
},

{
  id: "saludtriage-028",
  title: "Insufficienza cronica: escludere l'anemia, tiroide, depressione, sonno",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Intervista strutturata per stanchezza e piano iniziale.",
  prompt: `Agisce come medico. Evalúa FATIGA.

Ingressi:
- Durata.
- Sogno (ore / qualità).
- Stress / umore.
- Sintomi associati.
- Droga.

Genera:
1) 16 domande.
2) Lags rossi (perdita di peso, febbre prolungata, sanguinamento).
3) Piano iniziale di valutazione dello stile di vita e raccomandazioni.`,
  thumbnail: ""
},

{
  id: "saludtriage-029",
  title: "Dolore articolare: infiammatorio vs meccanico + segnale di allarme",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Storia diretta all'artralgia e sospetta artrite infiammatoria.",
  prompt: `Agisce come medico. Evalúa DOLOR ARTICOLARE.

Ingressi:
- Articolazioni.
- rigidità e durata del mattino.
- Gonfiamento visibile, calore.
- Fever, lesioni cutanee.
- Sfondo autoimmune.

Genera:
1) 16 domande.
2) Diverso (OA, AR, gotta, spondiloartrite, infettiva).
3) Lags rossi (artrite settica).
4) Piano iniziale e urgenza.`,
  thumbnail: ""
},

{
  id: "saludtriage-030",
  title: "Wound / cut: valutazione dell'infezione e bisogno di sutura",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Guida per ferite: tempo, inquinamento, tetano e allarme.",
  prompt: `Agisce come medico. Evalúa HERIDA / CORTE.

Ingressi:
- E' ora della lesione.
- Profondità e posizione.
- Inquinamento (terra, animale, vetro).
- Dolore, rossore, secrezione.
- Vaccino al tetano (ultima dose).

Genera:
1) 12 domande.
2) Criteri di Sutura / emergenza.
3) Segni di infezione e assistenza iniziale sicura.
4) raccomandazioni di follow-up.`,
  thumbnail: ""
},

{
  id: "saludtriage-031",
  title: "Burning: criteri di gravità, superficie e riferimento",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Classifica le ustioni e decide di fare riferimento all'emergenza / centro specializzato.",
  prompt: `Agisce come medico. Evalúa QUEMADURA.

Ingressi:
- Causa (termico / chimico / elettrico).
- Area interessata.
- Dimensioni approssimative.
- Blisters / dolore.
- Inalazione del fumo (se applicabile).

Genera:
1) Domande cliniche chiave (min. 12).
2) Probabile (superficie / parziale / profonda) classificazione per segni.
3) Criteri di riferimento urgenti (faccia / mani / genitali, grande, chimico, elettrico, inalazione).
4) Primo soccorso sicuro e cosa non fare.`,
  thumbnail: ""
},

{
  id: "saludtriage-032",
  title: "Reazione allergica: urticaria vs anaphylaxis (piano di sicurezza)",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Semplice differenza di urticaria di anafilassi e definisce l'urgenza.",
  prompt: `Agisce come medico. Valuta la ALERGIC REACTION.

Ingressi:
- Sintomi (alveari, gonfiore, difficoltà di respirazione, russare).
- esposizione probabile (cibo, droga, morso).
- Iniziamo.

Genera:
1) 12 domande.
2) Criteri clinici per l'anafilassi (per emergenze immediate).
3) Sicurezza e consulenza di follow-up.
Non minimizzare; priorità alla vita.`,
  thumbnail: ""
},

{
  id: "saludtriage-033",
  title: "Alta infezione respiratoria: freddo vs influenza vs COVID (orientamento)",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Diretto i criteri di storia e gravità per le infezioni respiratorie.",
  prompt: `Agisce come medico. Vale un sacco di roba buona.

Ingressi:
- Giorni di evoluzione.
- Febbre, tosse, congestione, odinofagia.
- Dyspnoea.
- Comorbidità.

Genera:
1) 14 domande.
2) Lags rossi.
3) Consigli generali sicuri (assistenza domestica) e quando andare a consultazione / emergenza.
4) Punte di isolamento acustico se applicabile.`,
  thumbnail: ""
},

{
  id: "saludtriage-034",
  title: "Dolore testicolare acuto: torsione scarto (urgenza)",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Valutazione rapida per il dolore testicolare e i criteri di emergenza.",
  prompt: `Agisce come medico. Evalúa DOLOR AGUDO TESTICOLARE.

Ingressi:
- Età.
- All'inizio improvvisa e graduale.
- Nausea / vomito.
- Trauma.
Sintomi urinari.

Genera:
1) 12-15 domande affrontate.
2) Bandiere rosse di torsione testicolare e urgenza.
3) Diverso (epididimite, ernia, torsione appendice).
4) Cancella messaggio di sicurezza.`,
  thumbnail: ""
},

{
  id: "saludtriage-035",
  title: "Emorragia rettale: emorroidi contro cause gravi (triage)",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Ha diretto la storia e i segnali di allarme nella retttura.",
  prompt: `Agisce come medico. Non lo so.

Ingressi:
- Età.
- Colore del sangue (rossante e scuro).
- Quantità e frequenza.
- Dolore quando evacuazione.
- Perdita di peso/anemia.

Genera:
1) 14 domande.
2) Lags rossi (melina, anemia, ipotensione, perdita di peso, > 50 anni con cambiamento di abitudine intestinale).
3) Raccomandazione per il livello di cura e gli studi iniziali.`,
  thumbnail: ""
},

{
  id: "saludtriage-036",
  title: "Dolore pelvico nelle donne: gynaecological vs urinary vs GI",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Storia diretta al dolore pelvico e ai criteri di emergenza.",
  prompt: `Agisce come medico. Evalúa DOLOR PELVICO.

Ingressi:
- Età.
- Ultima mestruazione.
- Possibile gravidanza.
- Flusso vaginale, sanguinamento.
- Fever, sintomi urinari.

Genera:
1) 16 domande.
2) Lags rossi ( gravidanza ectopica, torsione ovarica, EPI grave).
(3) Differenziali e raccomandazione urgente.`,
  thumbnail: ""
},

{
  id: "saludtriage-037",
  title: "Hormigee / intorpidimento: differenziare la neuropatia contro EVC",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Storia diretta alla paraestesia e alle bandiere rosse neurologiche.",
  prompt: `Agisce come medico. Evalúa HORMIGUEO / ENGUEO.

Ingressi:
- Casa (sudden vs graduale).
- Distribuzione (faccia / braccio / gamba; unilaterale / bilaterale).
- debolezza associata.
- Fattori di rischio (HTA, DM).

Genera:
1) 14 domande.
2) Bandiere rosse (EVC / AIT, sindrome medulare).
3) Diverso (neuropatia periferica, compressione, ansia, deficit B12).
4) Raccomandazione di emergenza.`,
  thumbnail: ""
},

{
  id: "saludtriage-038",
  title: "Segnali vitali controllo a casa: interpretazione clinica",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Aiuta a interpretare PA, FC, temperatura e SpO2 con contesto clinico.",
  prompt: `Agisce come medico. Suona VITAL SIGNES presi in casa.

Ingressi:
- PA, FC, temperatura, SpO2 (se presente).
- Sintomi attuali.
- Età e comorbidità.
- I farmaci.

Genera:
1) Validazione delle misure corrette (passi).
2) Interpretazione per gamma e contesto.
3) Segni di emergenza contro consultazione.
4) raccomandazioni di follow-up (quando ripetere, come registrarsi).`,
  thumbnail: ""
},

{
  id: "saludtriage-039",
  title: "Preconsultazione della lista di controllo: preparare il paziente per valutare meglio",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Elenco di informazioni e documenti che un paziente deve portare per una consultazione efficace.",
  prompt: `Agisce come medico. Creare un CHECKLIST per i pazienti prima della consultazione.

Ingressi:
- Tipo di consultazione (generale / cardiologia / gastro / ecc.).
- Il motivo principale.

Genera:
1) Quali dati portare (sintomi, cronologia, trigger).
2) Elenco dei medicinali con dosi.
(3) Studi precedenti utili.
4) Domande che il paziente dovrebbe chiedere.
5) Come descrivere il dolore / sintomi (OPQRST) in 60 secondi.`,
  thumbnail: ""
},

{
  id: "saludtriage-040",
  title: "Riepilogo clinico per riferimento (interconsultazione) stile professionale",
  area: "Salute e Clinica",
  category: "Storia clinica + triage",
  summary:
  "Converti i dati sciolti in un breve riassunto clinico per fare riferimento allo specialista.",
  prompt: `Agisce come medico. Progetto di un SUMMARIO CLINICO per l'interconsultazione.

Ingressi:
- Campo di riferimento.
- Risultati chiave.
- Sfondo rilevante.
- I farmaci.
- Studi e risultati (se presenti).
- Domande cliniche da rispondere dallo specialista.

Genera:
1) Riassunto di 8-12 linee (chiare e concise).
2) Elenco di problemi / diagnosi differenziali.
3) Domande specifiche per lo specialista.
4) Priorità (routine vs preferito vs urgente) con giustificazione.`,
  thumbnail: ""
}];