// src/lib/prompts/text/salud-clinica-explicacion-al-paciente.js

export const textPromptsSaludClinicaExplicacionAlPaciente = [
{
  id: "saludexp-001",
  title: "Spiegazione della diagnosi probabile (non stabilita) in lingua semplice",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Traduce i risultati clinici in una chiara spiegazione, senza allarmatismo e senza promettenti diagnosi definitive.",
  prompt: `Agisce come medico e spiega al paziente cosa potrebbe succedere, usando un linguaggio semplice.

Ingressi:
- Il sintomo principale.
- Durata ed evoluzione.
- Risultati rilevanti (se presenti).
- No. Ciò che riguarda il paziente (la paura principale).

Genera:
1) Spiegazione in 6-10 frasi (livello secondario).
2) Differenza tra: "molto probabile" vs "cosa dovremmo escludere".
3) Quali dati mancano e perché importano.
4) Prossimo passo (osservazione, consultazione, studi) con chiara ragione.
5) Chiusura empatica + 3 frasi che riducono l'ansia senza minimizzare.`,
  thumbnail: ""
},

{
  id: "saludexp-002",
  title: "Fornire risultati di laboratorio: come interpretarli senza confusione",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Spiega risultati comuni con il contesto, evitando tecniche e allarmi inutili.",
  prompt: `Agisce come medico. Spiega i risultati del laboratorio al paziente.

Ingressi:
- Elenco dei risultati con intervalli (ad esempio glucosio, HbA1c, colesterolo, TSH, emogramma).
- Sintomi pazienti (se presenti).
- Sfondo rilevante.

Genera:
1) Riepilogo generale (1 paragrafo).
2) Tabella in testo (non markdown) con: test → quali misure → se è alto / basso → significato comune.
3) Quali cose possono alterare il risultato (frequenti errori).
4) Quali azioni sono raccomandate (abita / follow-up / studio ripetitivo).
5) Segni per i quali sarebbe urgente consultare.`,
  thumbnail: ""
},

{
  id: "saludexp-003",
  title: "Spiegazione di un piano di trattamento passo-passo (adesione)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Convertire le indicazioni cliniche in un piano d'azione giornaliero per migliorare l'aderenza.",
  prompt: `Agisce come medico. Spiega un piano di trattamento con cui il paziente deve rispettare.

Ingressi:
- Diagnosi o problema (ad esempio gastrite, ipertensione, asma).
- Prodotti medicinali indicati (nome / dose / tempo) se applicabile.
- Cambiamenti di stile di vita raccomandati.
- Restrizioni dei pazienti (lavoro, ore, budget).

Genera:
1) Breve spiegazione dell'obiettivo del trattamento (2-3 frasi).
2) Giro giornaliero in pallottole (mattina / pomeriggio / notte).
3) "Tricks" di adesione (reminenti, associazione alle abitudini).
4) Effetti previsti vs effetti collaterali comuni (senza allarme).
5) Cosa fare se si perde una dose (generale, senza dare istruzioni pericolose).
6) Quando tornare e quali segni ti fanno consultare prima.`,
  thumbnail: ""
},

{
  id: "saludexp-004",
  title: "Spiegare il rischio e la prognosi (non scartata) utilizzando semplici analogie",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Comunica il rischio in modo comprensibile con esempi quotidiani e approccio di controllo.",
  prompt: `Agisce come medico. Devi spiegare il rischio / probabilità al paziente.

Ingressi:
- Problemi di salute.
- Fattori di rischio presenti.
- Dubitate o temete il paziente.

Genera:
1) Semplice spiegazione linguistica senza percentuali complicate.
2) Un'appropriata analogia quotidiana (non-fidanzata).
3) Che cosa il paziente può controllare (3-5 azioni).
4) Quello che non si può controllare (per rilasciare il senso di colpa).
5) Piano di monitoraggio e perché il monitoraggio riduce i rischi.`,
  thumbnail: ""
},

{
  id: "saludexp-005",
  title: "Spiegazione di 'bandiere rosse' e quando andare all'emergenza",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Elenco chiaro e prioritario di segnali di allarme con istruzioni attuabili.",
  prompt: `Agisce come medico. Spiegare al paziente cosa significa urgenza.

Ingressi:
- Sintomi o diagnosi probabile.
- Età e comorbidità.
- Contesto (vivo da solo, accesso al trasporto, ecc.).

Genera:
1) 6-10 bandiere rosse (in ordine di gravità).
2) Cosa fare esattamente prima di ciascuno (ad esempio "andare all'emergenza oggi").
3) Che fare NON (errore comune).
4) "Non è per spaventarti, è per prendersi cura di te.".`,
  thumbnail: ""
},

{
  id: "saludexp-006",
  title: "Spiegare perché gli antibiotici non sono necessari (resistenza)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Risponde all'aspettativa del paziente con empatia e educazione chiara.",
  prompt: `Agisce come medico. Il paziente richiede antibiotico ma non è indicato.

Ingressi:
- sintomo principale (ad esempio bronchite acuta, faringite virale).
- Tempo di evoluzione.
- No. Ciò che il paziente si aspetta ("Voglio qualcosa di forte").

Genera:
1) convalida empatica (1-2 frasi).
2) Breve spiegazione virus vs batteri (semplice).
3) Rischi reali di antibiotici inutili (3 punti).
4) Aiuta (piano sintomatico generale e self-care).
5) Segni che indicano la rivalutazione o possibile antibiotico.`,
  thumbnail: ""
},

{
  id: "saludexp-007",
  title: "Spiegare uno studio di immagine (RX / US / TAC / RM) senza tecnicitÃ",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Descrivi cosa stai cercando con lo studio, la preparazione e cosa aspettarti dal risultato.",
  prompt: `Agisce come medico. Spiega uno studio di immagine paziente.

Ingressi:
- Studio richiesto (RX / US / TAC / RM).
- Motivo e sospetto clinico.
- Le preoccupazioni dei pazienti (radiazione, claustrofobia, costo).

Genera:
1) Che cosa lo studio è e quali informazioni dà (in semplice).
2) Perché è stato ordinato (obiettivo clinico).
3) Cosa aspettarsi il giorno dello studio (passaggi, durata).
4) Rischi rilevanti / precauzioni (senza allarme).
5) Che cosa significa "normale" contro "trovare" e i prossimi passi.`,
  thumbnail: ""
},

{
  id: "saludexp-008",
  title: "Spiegare una diagnosi cronica (HTA / DM) con approccio motivazionale",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Comunica la diagnosi cronica e il piano di controllo senza difetto, evidenziando i guadagni rapidi.",
  prompt: `Agisce come medico con un approccio motivazionale intervista.

Ingressi:
- Diagnosi (HTA / DM / dislipidemia).
- Valori recenti (PA, HbA1c, LDL).
- Barriere del paziente (tempo, cibo, esercizio, stress).

Genera:
1) Che cosa significa la diagnosi in 1 paragrafo.
2) Perché è importante controllarlo (prestazioni specifiche).
3) 3 piccoli cambiamenti (micro abitudini) che hanno un impatto in 2 settimane.
4) Piano di monitoraggio semplice (che misurare e quando).
5) Unguilty messaggio + auto-efficacia.`,
  thumbnail: ""
},

{
  id: "saludexp-009",
  title: "Spiegare il dolore: differenza tra danno e sensibilità (educazione)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Aiutare i pazienti con dolore persistente a comprendere il dolore non catastrofico.",
  prompt: `Agisce come medico. Spiega il dolore senza spaventare il paziente.

Ingressi:
- Zona del dolore.
- Tempo di evoluzione.
- No. Quali studi precedenti sono stati normali (se applicabili).
- Pazienti paure (ad esempio "io sarò invalido").

Genera:
1) Semplice spiegazione: dolore) sempre danno (non invalidato).
2) Quali fattori lo amplificano (sleep, stress, inattività).
3) Quali azioni di solito ridurre il dolore (movimento laureato, calore, abitudini).
4) Segni che indicherebbero allarme e rivalutazione.`,
  thumbnail: ""
},

{
  id: "saludexp-010",
  title: "Spiega 'follow-up' e perché non mi è 'ignorato '",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Riduce la frustrazione quando il piano è di osservare e rivalutare.",
  prompt: `Agisce come medico. Spiega perché il piano è follow-up / osservazione.

Ingressi:
- Simbolo.
- Riassicurare i risultati.
- Tempo di osservazione consigliato.
- No. Cosa frustra il paziente?

Genera:
1) 5-7 frasi chiare.
2) Quali cose possono cambiare nel tempo che rendono la diagnosi più chiara.
3) Che cosa il paziente deve registrare (semplice ogni giorno).
4) Quando tornare prima del tempo (bandiere rosse).`,
  thumbnail: ""
},

{
  id: "saludexp-011",
  title: "Spiegare gli effetti collaterali comuni vs pericoloso (senza panico)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Comunica la sicurezza della droga: ciò che è previsto e ciò che non è.",
  prompt: `Agisce come medico. Spiega gli effetti collaterali di un trattamento.

Ingressi:
- Prodotto medicinale (nome e per cosa viene utilizzato).
- Forza e programma.
- contesto paziente (allergie, gravidanza, età).

Genera:
1) Effetti comuni (3-6) e come gestirli in generale.
2) Effetti rari ma pericolosi (2-4) e cosa fare se si verificano.
3) Suggerimenti per meglio tollerarlo (con cibo, idratazione, ore).
4) Segni di sospensione e consultazione (con una chiara formulazione).`,
  thumbnail: ""
},

{
  id: "saludexp-012",
  title: "Spiegare perché è richiesta una consulenza specialistica (interconsultazione)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Essa giustifica la derivazione senza far sentire il paziente \"serioso\" o abbandonato.",
  prompt: `Agisce come medico. Spiegare un riferimento allo specialista.

Ingressi:
- Motivo di interconsultazione.
- No. Ciò che è stato provato finora.
- No. Che dubbio clinico.

Genera:
1) Spiegazione in 1 paragrafo: obiettivo della consultazione.
2) Quali domande prenderà lo specialista (2-4).
3) Che cosa il paziente dovrebbe indossare (studi, elenco dei sintomi).
4) Cosa può accadere dopo (possibili passi) senza promettere.`,
  thumbnail: ""
},

{
  id: "saludexp-013",
  title: "Spiegare una diagnosi \"funzionale\" (ad esempio colon irritabile) con legittimità",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Esso impedisce al paziente di sentire che 'tutto è nella sua testa'.",
  prompt: `Agisce come medico. Spiega una diagnosi funzionale (ad esempio colon irritabile, dispepsia funzionale).

Ingressi:
- Sintomi principali.
- Studi normali (se presenti).
- trigger identificati (stress, cibo, ecc.).

Genera:
1) Spiegazione che valorizza i sintomi come reale.
2) Ciò che significa che gli studi sono normali (buona prognosi).
3) Quali meccanismi possono contribuire (motilità, sensibilità, asse interno-cervello) in linguaggio semplice.
4) Piano di gestione dei livelli: abitudini, dieta, supporto, follow-up.
5) Bandiere rosse da rivalutare.`,
  thumbnail: ""
},

{
  id: "saludexp-014",
  title: "Spiegare un'infezione comune e il suo corso previsto (linea temporale)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Dà una linea temporale realistica per i sintomi e il recupero, evitando ricorsi ansiosi.",
  prompt: `Agisce come medico. Spiega il corso previsto di un'infezione comune.

Ingressi:
- Tipo (respiratorio, GI, urinario, pelle).
- Il giorno attuale dell'evoluzione.
- Sintomi preferiti.

Genera:
1) Timeline giorno per giorno (o per gamma) del previsto.
2) Quali sintomi possono persistere senza pericolo (ad esempio 2-3 settimane).
3) Quali segni indicano complicazione.
4) Assistenza generale sicura.`,
  thumbnail: ""
},

{
  id: "saludexp-015",
  title: "Spiegare il dolore toracico non cardiaco (se è probabile) senza invalidare",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Guida l'ansia e spiega cause frequenti quando non ci sono segni di allarme.",
  prompt: `Agisce come medico. Spiega dolore al petto probabilmente non dolore al cuore, mantenendo la sicurezza.

Ingressi:
- Caratteristiche del dolore.
- Riassicurare i risultati (se presenti).
- La preoccupazione del paziente.

Genera:
1) Che cosa lo fa NON assomigliare a un'emergenza cardiaca (non garantita).
2) cause comuni (musculo-scheletrale, reflusso, ansia) con indizi.
3) Self-care e follow-up piano.
4) Bandiere rosse chiare.`,
  thumbnail: ""
},

// --- completamos hasta 40 ---
{
  id: "saludexp-016",
  title: "Spiegare il risultato 'incidentale' in un'immagine (rilevamento casuale)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Spiega i risultati incidentali comuni e come è deciso se richiedono il follow-up.",
  prompt: `Agisce come medico. Spiega un risultato accidentale.

Ingressi:
- Contatto (relazione del testo).
- Studio (TAC / RM / USA).
- Sintomi pazienti (se presenti).

Genera:
1) Che cosa significa "incidentale" (semplice).
2) Quanto è comune (senza inventare statistiche; qualitativamente parlando).
(3) Quali criteri di solito definiscono il follow-up vs no.
4) Prossimo passo consigliato (monitoraggio, ripetizione, specialista).`,
  thumbnail: ""
},

{
  id: "saludexp-017",
  title: "Spiegare perché un sintomo può essere disidratazione",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Collega i sintomi (dizziness, tachicardia, stanchezza) con idratazione in modo pratico.",
  prompt: `Agisce come medico. Spiega la disidratazione e il suo rapporto con i sintomi.

Ingressi:
- I sintomi.
- Approssimativo apporto di liquidi.
- Perdita (diarrea, vomito, esercizio fisico, calore).
- Vitali se esistono.

Genera:
1) Semplice spiegazione del meccanismo.
2) Come confermare a casa (segni / indicatori).
3) Piano pratico per l'idratazione generale e quando consultare.`,
  thumbnail: ""
},

{
  id: "saludexp-018",
  title: "Spiegare gastrite / reflusso e cambiamenti dietetici realistici",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Breve istruzione + elenco delle impostazioni alimentari ad alto impatto.",
  prompt: `Agisce come medico. Spiega reflusso / gastrite in lingua semplice.

Ingressi:
- Sintomi (bruciore, rigurgito, dolore epigastrico).
- Ore di cibo.
- Caffè / alcol / consumo piccante.
- I farmaci attuali.

Genera:
1) Spiegazione del reflusso / gastrite (semplice).
2) 8 aggiustamenti dietetici realistici (prioritizza i 3 più scioccanti).
3) abitudini posturali (schedule, elevazione dell'intestazione).
4) Bandiere rosse (perdita di peso, vomito con sangue, anemia, disfagia).`,
  thumbnail: ""
},

{
  id: "saludexp-019",
  title: "Spiegare l'asma: che cosa è, che cosa spara e che cosa significa controllo",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Definizione chiara di asma, trigger e piano di controllo generale.",
  prompt: `Agisce come medico. Spiega l'asma per un paziente.

Ingressi:
- Sintomi (respirazione, tosse notturna, dispnoea).
- Sospettato senza sedia a rotelle.
- I farmaci attuali se esiste.

Genera:
1) Che cosa accade nelle vie aeree (semplice).
2) Differenza tra "rilievo" e "controllo" (non prescritta).
3) tiratori comuni e come ridurli.
4) Piano d'azione generale: cosa monitorare e quando consultare urgentemente.`,
  thumbnail: ""
},

{
  id: "saludexp-020",
  title: "Spiegare COPD: corso, obiettivi e self-care",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Comunicazione chiara nei pazienti non-colpenti o ex-fumatori.",
  prompt: `Agisce come medico. Spiega la polizia.

Ingressi:
- Sintomi e limitazioni.
- Storia del fumo.
- Esacerbazioni recenti.

Genera:
1) Semplice spiegazione di ciò che la polizia è.
2) Quali obiettivi sono realistici (migliorare la tolleranza, ridurre la crisi).
3) Azioni prioritarie (lasciando tabacco, vaccini, attività).
4) Segni di esacerbazione e urgenza.`,
  thumbnail: ""
},

{
  id: "saludexp-021",
  title: "Spiegare l'anemia: perché dà sintomi e cosa indagare",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Tradurre l'anemia a sintomi quotidiani e piano di valutazione generale.",
  prompt: `Agisce come medico. Spiega anemia al paziente.

Ingressi:
- Hb / ematocrito (se presente).
- Sintomi (fede, palidità, dispnoea).
- Menstruazione / sanguinamento / dieta.

Genera:
1) Che cosa è l'anemia (semplice).
2) Perché provoca sintomi.
3) Cause comuni per gruppo (perdita, mancanza di ferro, cronico) non diagnosticate.
4) Prossimi passi tipici (studies e follow-up).
5) Bandiere rosse (sincastro, dolore al petto, sanguinamento attivo).`,
  thumbnail: ""
},

{
  id: "saludexp-022",
  title: "Spiegare la tiroide (TSH / T4) e sintomi tipici",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Chiarire ciò che hico / ipertiroidismo significa senza tecnicità.",
  prompt: `Agisce come medico. Spiega la funzione e i risultati della tiroide.

Ingressi:
- TSH, T4 (se presente).
- Sintomi (peso, umore, palpitazioni, freddo / calore).
- Medicina e sfondo.

Genera:
1) Che cosa fa la tiroide (semplice).
2) Che alto / basso TSH significa intuitivamente.
3) Rapporto con sintomi.
4) Cosa succede dopo (confermare, ripetere, trattamento / follow-up).`,
  thumbnail: ""
},

{
  id: "saludexp-023",
  title: "Spiegare il dolore lombare: perché il movimento aiuta",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Riduce la paura del movimento e promuove il recupero sicuro.",
  prompt: `Agisce come medico. Spiega la lumbalgia meccanica e la gestione generale.

Ingressi:
- Casa (carico / posizione).
- Irradiazione sì / no.
- Lags rossi assenti / presenti.

Genera:
1) Semplice spiegazione del dolore meccanico.
2) Perché il riposo assoluto peggiora (semplice).
3) Che tipo di movimento di solito aiuta (generale).
4) Bandiere rosse neurologiche per l'emergenza.`,
  thumbnail: ""
},

{
  id: "saludexp-024",
  title: "Spiegare il colesterolo e il rischio cardiovascolare (non incolpare)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Communica LDL / HDL / trigliceridi e azioni ad alto impatto.",
  prompt: `Agisce come medico. Spiega il profilo lipidico al paziente.

Ingressi:
- LDL, HDL, TG.
- Storia della famiglia e fattori di rischio.
- Le abitudini attuali.

Genera:
1) Semplice spiegazione di ogni componente.
2) Che cosa significa "rischio" e perché conta a lungo termine.
3) 5 azioni ad alto impatto (cibo / attività / sonno).
4) Monitoraggio consigliato e motivazione.`,
  thumbnail: ""
},

{
  id: "saludexp-025",
  title: "Spiegare perché un sintomo può essere da stress (non invalidato)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Integra la mente-corpo in modo rispettoso e convalida i sintomi reali.",
  prompt: `Agisce come medico. Spiega rapporto di stress - sintomi senza dire "è psicologico".

Ingressi:
- Sintomi fisici.
- contesto di stress.
- Studi normali (se applicabili).

Genera:
1) Validazione: "il tuo sintomo è reale".
2) Spiegazione dell'asse dello stress-corpo (semplice).
3) Piano di gestione: abitudini + monitoraggio + quando rivalutare.
4) 3 tecniche pratiche di regolazione (respirazione, pausa, sonno).`,
  thumbnail: ""
},

{
  id: "saludexp-026",
  title: "Spiegare un ECG 'normale' e cosa NON esclude",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Evitare falsità o falso allarme: comunica limiti di studio.",
  prompt: `Agisce come medico. Spiegare un ECG normale.

Ingressi:
- Il motivo per cui ha preso ECG.
- Sintomi attuali.
- Fattori di rischio.

Genera:
1) Che cosa guarda l'ECG?
2) Che cosa significa essere normali.
3) Che cosa NON esclude (presumibilmente spiegato).
4) Ciò che segue (osservazione, studi aggiuntivi o follow-up) dai sintomi.`,
  thumbnail: ""
},

{
  id: "saludexp-027",
  title: "Spiegare perché fa più male di notte (infiammazione vs meccanica)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Aiuta a interpretare i modelli di dolore senza autodiagnosi.",
  prompt: `Agisce come medico. Spiega i modelli di dolore giorno / notte.

Ingressi:
- Zona.
- Modello (notte, mattina, con movimento).
- Stirness e durata.
- Sintomi sistemici.

Genera:
1) Semplice spiegazione di schemi tipici (meccanici vs infiammatori) non diagnosticati.
2) Quali dati aiuterebbe a chiarire.
3) Quando è allarme (febbre, perdita di peso, deficit).`,
  thumbnail: ""
},

{
  id: "saludexp-028",
  title: "Spiegare la vaccinazione: benefici, effetti comuni e miti",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Una comunicazione calma e sicura per i dubbi sui vaccini.",
  prompt: `Agisce come medico. Spiega un vaccino raccomandato per il paziente.

Ingressi:
- Vaccino (influenza, COVID, tetanus, pneumococcus, HPV, ecc.).
- Età e comorbidità.
- Dubiti del paziente.

Genera:
1) Principali vantaggi (2-4).
2) Effetti collaterali comuni (cosa aspettarsi).
3) Rari segni da consultare.
4) Risposta a 3 miti frequenti con linguaggio rispettoso.`,
  thumbnail: ""
},

{
  id: "saludexp-029",
  title: "Spiegare l'igiene del sonno per l'insonnia (piano pratico)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Dà raccomandazioni attuabili senza moralina o perfezionismo.",
  prompt: `Agisce come medico. Spiega l'igiene del sonno.

Ingressi:
- Tempo normale per dormire / svegliarsi.
- Caffeina / consumo di alcol.
- Siestas sì / no.
- Stress.

Genera:
1) 8 regole pratiche (priorità 3 prima).
2) Pre-sleep di 30 minuti (passo per passo).
3) Che fare se non si dorme in 20- 30 min.
4) Quando valutare le cause mediche (apnea, depressione, tiroide).`,
  thumbnail: ""
},

{
  id: "saludexp-030",
  title: "Spiegare mal di testa: emicrania contro tensione (istruzione)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Aiuta il paziente a riconoscere i modelli e i trigger.",
  prompt: `Agisce come medico. Spiega l'emicrania contro il mal di testa.

Ingressi:
- Caratteristiche del dolore.
- Sintomi associati (nausea, fotofobia).
- Frequenza / mese.
- Uso di analgesici.

Genera:
1) Semplice spiegazione di entrambi i tipi.
2) tiratori comuni e come identificarli.
3) Importanza di evitare l'uso eccessivo di analgesici (spiegato facilmente).
4) Bandiere rosse per l'emergenza.`,
  thumbnail: ""
},

{
  id: "saludexp-031",
  title: "Spiegare il dolore addominale funzionale contro gli allarmi GI",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Chiarire perché a volte non c'è \"infortunio\" visibile e come è gestito.",
  prompt: `Agisce come medico. Spiega il dolore addominale ricorrente senza allarmi.

Ingressi:
- Lo schema del dolore.
- Rapporto ai pasti / stress / evacuazione.
- Studi precedenti.

Genera:
1) Semplice spiegazione (validating).
2) Strategie pratiche: dieta, fibra, idratazione, routine.
3) Che vedere (per giorno dei sintomi).
4) Allarmi GI (emorragia, febbre, perdita di peso, anemia, notte).`,
  thumbnail: ""
},

{
  id: "saludexp-032",
  title: "Spiegare l'infezione urinaria: sintomi, cura e prevenzione",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Libera formazione per cistite e allarmi semplici.",
  prompt: `Agisce come medico. Spiega l'infezione urinaria (cistite) al paziente.

Ingressi:
- I sintomi.
- Precedente sì / nessun episodio.
- Gravidanza sì / no.
- Fever / dolore lombare sì / no.

Genera:
1) Che cosa succede e perché brucia (semplice).
2) Che aiuto (idratazione, misurazioni).
3) Prevenzione (abita).
4) Segni che suggeriscono l'infezione "up" (pielonephritis) e l'urgenza.`,
  thumbnail: ""
},

{
  id: "saludexp-033",
  title: "Spiegare il risultato di HbA1c e obiettivi realistici",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Rendere HbA1c un concetto facile (media) e definire i prossimi passi.",
  prompt: `Agisce come medico. HbA1c spiega.

Ingressi:
- HbA1c.
- glucosio capillare (se presente).
- Trattamento attuale.
- Difficoltà del paziente.

Genera:
1) Che cosa HbA1c è (media di 2-3 mesi).
2) Che cosa significa il valore attuale (qualitativo).
3) 3 azioni con impatto (meals, movimento, sonno).
4) Semplice piano di monitoraggio e misurazione.`,
  thumbnail: ""
},

{
  id: "saludexp-034",
  title: "Spiegare perché l'esercizio fa parte del trattamento (senza ingrasso)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Esso motiva con benefici immediati e piano minimo fattibile.",
  prompt: `Agisce come medico. Spiega l'attività fisica come trattamento.

Ingressi:
- Diagnosi (HTA, DM, ansia, dolore lombare, ecc.).
- Stato attuale (sedentario, infortuni).
- Barrieri (tempo, dolore, vergogna).

Genera:
1) A breve termine (7-14 giorni) e benefici a lungo termine.
2) Piano minimo praticabile (10-15 min / giorno) con progressione settimanale.
3) Come rendere sicuro (riscaldamento, segni di arresto).
4) messaggio motivazionale realistico.`,
  thumbnail: ""
},

{
  id: "saludexp-035",
  title: "Spiegare sovrappeso / obesità come condizione medica (senza stigma)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Approccio compassionevole: biologia, ambiente, abitudini e obiettivi sostenibili.",
  prompt: `Agisce come medico. Parla di peso senza stigmatizzazione.

Ingressi:
- BMI o peso / dimensione (se applicabile).
- Comorbidità.
- L'obiettivo del paziente.

Genera:
1) Unguilty spiegazione: perché il corpo regola il peso.
2) Obiettivi realistici (salute > estetica).
3) 5 azioni sostenibili in ordine all'impatto.
4) Monitoraggio e segni di disturbo alimentare da considerare il supporto.`,
  thumbnail: ""
},

{
  id: "saludexp-036",
  title: "Spiegare dolore mestruale (dismenorrea) e quando preoccuparsi",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Differenza di dolore comune di endometriosi / segnali di allarme.",
  prompt: `Agisce come medico. Spiega dolore mestruale.

Ingressi:
- Intensità ed evoluzione.
- No. Se interferisce con le attività.
- sanguinamento intensivo sì / no.
- Dolore tra periodi o quando hanno relazioni (se applicabile).

Genera:
1) Semplice spiegazione della dismenorrea.
2) Misure generali di soccorso e abitudini.
3) Segni che suggeriscono la valutazione (endometriosi, anemia, ecc.).
4) Piano di monitoraggio.`,
  thumbnail: ""
},

{
  id: "saludexp-037",
  title: "Spiegare perché la fisioterapia è raccomandata",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Aumenta l'adesione: spiega lo scopo, le aspettative e i tempi.",
  prompt: `Agisce come medico. Spiega l'indicazione della fisioterapia.

Ingressi:
- Diagnosi (lumbalgia, spalla, ginocchio, sperone).
- Dolore attuale.
- Tempo di evoluzione.

Genera:
1) Che cosa fa la fisioterapia e perché funziona.
2) Cosa aspettarsi in 2 settimane vs 6 settimane.
3) Importanza di esercizi domestici (non da biasimare).
4) Segnali da rivalutare se peggiora.`,
  thumbnail: ""
},

{
  id: "saludexp-038",
  title: "Spiegare un piano di prevenzione (controllare) per età e rischio",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Semplice lista di controllo della prevenzione (vaccine, screening) adattata al contesto.",
  prompt: `Agisce come medico. Spiega piano di prevenzione / screening.

Ingressi:
- Età / sesso.
- Sfondo familiare.
- Abitudini (tabacco, alcol).
- Comorbidità.

Genera:
1) 5-10 azioni preventive prioritarie.
2) Perché ogni materia (1 frase c / u).
3) Frequenza di sorveglianza (annuale, ogni 3-5 anni, ecc.).
4) Un messaggio motivazionale focalizzato sulla longevità e sulla qualità della vita.`,
  thumbnail: ""
},

{
  id: "saludexp-039",
  title: "Spiegare perché sale / zucchero è raccomandato (meccanismo semplice)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Collega il consumo con sintomi / valori e propone sostituzioni realistiche.",
  prompt: `Agisce come medico. Spiega la riduzione del sale e/o dello zucchero.

Ingressi:
- Diagnosi (HTA, prediabeti, eedema, ecc.).
- Le abitudini attuali.
- barriere culturali e di bilancio.

Genera:
1) Semplice spiegazione del meccanismo (perché colpisce il corpo).
2) 7 sostituzioni realistiche (alimento reale, supermercato).
3) 'Regola di 3': 3 modifiche che danno l'80% del risultato.
4) follow-up: cosa misurare e quando.`,
  thumbnail: ""
},

{
  id: "saludexp-040",
  title: "Messaggio post-consultazione: sommario + passi successivi (WhatsApp / email)",
  area: "Salute e Clinica",
  category: "Spiegazione al paziente",
  summary:
  "Breve sintesi per inviare il paziente: piano, follow-up e allarmi.",
  prompt: `Agisce come medico. Scrivi un messaggio post-consultazione per il paziente.

Ingressi:
- Il problema principale.
- Piano concordato (abita / studi / medicina generale).
- Data di aggiornamento consigliata.
- Bandiere rosse.

Genera:
1) breve messaggio (max 1200 caratteri) con tono caldo e chiaro.
2) Elenco dei passi successivi (max 5 proiettili).
3) Segnali di allarme (max 5 proiettili).
4) Chiusura empatica.`,
  thumbnail: ""
}];