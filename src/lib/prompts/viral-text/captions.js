// src/lib/prompts/viral-text/captions.js
// Área y categoría ÚNICAS para TODO este archivo:
const AREA = "Capacità";
const CATEGORY = "Headline + front line";

export const viralTextPromptsCaptions = [
{
  id: "viral-caption-titulares-001",
  title: "20 titoli con beneficio + curiosità",
  summary: "Corti supporti per aprire loop sulla prima linea.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 titoli (max 9 parole) per un post su _ PH0 _ indirizzato a _ _ PH1 _ _ _
Regole:
- No. Devono promettere un beneficio concreto.
- No. Devono includere un micro "curiosity gap".
- Non esagerato ("garantito", "milioni", ecc.).
Consegna in lista numerata.`
},
{
  id: "viral-caption-titulares-002",
  title: "Titolo con 'quello che nessuno ti dice'",
  summary: "Variazioni della stessa idea senza ripetizione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 25 titoli per _ _ PH0 _ _ utilizzando l'idea "Quello che nessuno ti dice..."
Ogni titolare deve essere unico e specifico (cita un vero dettaglio).
Massimo 10 parole.`
},
{
  id: "viral-caption-titulares-003",
  title: "Prima linea stile conversazione",
  summary: "Apre che suonano come DM e gancio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 30 prime righe per catturare che sembrano una vera conversazione.
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.
Regole:
- Inizia con "Ehi", o "lo giuro", o "Guarda", (distribuito).
- 6-12 parole.
- No. Dovresti invitarlo a leggere ulteriormente.`
},
{
  id: "viral-caption-titulares-004",
  title: "Headline con numeri realistici",
  summary: "Numeri per la credibilità senza fumo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 25 titoli con numeri realistici per _ PH0 _ _ _.
Esempi di numeri consentiti: 3, 5, 7, 10, 30, 60, 90.
Evita "100x", "milionario", "in 1 giorno".
Massimo 11 parole.`
},
{
  id: "viral-caption-titulares-005",
  title: "Supporti anti-mito",
  summary: "Demystify senza aggressione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 titoli che spezzano un mito comune in _ PH0 _ _.
Struttura: "Mio: _ _ PH1 _. Reality: _ PH2 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ____
Continua _ _ PH3 _ _ _ _ _ PH4 _ breve (max 6 parole ciascuna).`
},
{
  id: "viral-caption-titulares-006",
  title: "Prima linea con la confessione",
  summary: "Confessione breve che apre loop.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 25 prime righe di cattura di tipo confessionale per _ PH0 _ _.
Regole:
- No. Devi iniziare con "consento che..." "Ho capito che..." o "Prima di me..."
- 8-14 parole.
- No. Essi devono implicare l'apprendimento per il lettore.`
},
{
  id: "viral-caption-titulares-007",
  title: "Tipo di lista di controllo supporti",
  summary: "Lista ganci per salvare.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 titoli di tipo checklist per _ PH0 _ _ _.
Possibile personale:
- "Se X ti passa, fai Y"
- "Prima di fare X, controlla questo."
- "Se vuoi X, non dimenticarlo."
Massimo 12 parole.`
},
{
  id: "viral-caption-titulares-008",
  title: "Intestazione con \"sei sabotaggio\"",
  summary: "Dolore + soluzione implicita.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 25 titoli per _ _ PH0 _ _ su self-sabotage in _ _ PH1 _ _ _
Comincia con "Ti stai sabotando quando..."
Chiudere con una chiara conseguenza.
Massimo 12 parole.`
},
{
  id: "viral-caption-titulares-009",
  title: "\"prima / dopo 'contrasto titolari",
  summary: "Contrasto visivo per alta ritenzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 titoli con la struttura "Prima / Dopo" per _ PH0 _ _.
Esempio: "Prima: X. Dopo: Y."
Che X è un dolore e un risultato realistico.
Massimo 14 parole totali.`
},
{
  id: "viral-caption-titulares-010",
  title: "Prima riga con domanda scomoda",
  summary: "Domanda diretta che richiede una risposta mentale.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 30 prime righe sotto forma di una domanda "incomfortabile ma utile" per _ PH0 _ _ on _ _ _ PH1 _.
Regole:
- 8-12 parole.
- Evita di giudicare o insultare.
- No. Devi mirare a comportamenti specifici.`
},

{
  id: "viral-caption-titulares-011",
  title: "Intestazione 'fare questo invece '",
  summary: "Confronto diretto per chiarezza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 titoli per _ _ PH0 _ _ con il modello:
"Invece di _ PH1 _, do _ PH2 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _________________________________
_ PH3 _ _ e _ _ PH4 _ deve essere azioni concrete.
Massimo 11 parole.`
},
{
  id: "viral-caption-titulares-012",
  title: "Prima linea con mini-storia",
  summary: "Micro storia per aprire loop in una frase.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 20 prime righe che sembrano l'inizio di una vera storia.
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.
Regole:
- No. Include 1 dettaglio specifico (luogo, tempo, numero).
- Massimo 14 parole.
- No. Deve finire con "e lì ho capito qualcosa".`
},
{
  id: "viral-caption-titulares-013",
  title: "Portatori con una promessa di personale",
  summary: "Serbatoio per commento / DM.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 titoli che promettono un modello senza suono per la vendita dura.
Include "templato" o "guida" o "checklist".
Discussioni del Parlamento europeo
Massimo 12 parole.`
},
{
  id: "viral-caption-titulares-014",
  title: "Titolo con 'se ho iniziato oggi '",
  summary: "Le aperture di tipo mentore che generano fiducia.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 20 titoli che iniziano con:
"Se ho iniziato oggi a _ PH0 _..."
Deve finire con azione concreta.
Massimo 13 parole.`
},
{
  id: "viral-caption-titulares-015",
  title: "Prima linea 'Ti risparmio tempo'",
  summary: "Promessa di risparmio di tempo realistico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 25 prime righe per catturare con una promessa di risparmiare tempo.
Modelli:
- "Ti salvero' X ore con questo..."
- "Questo evita errori X..."
Utilizzare numeri realistici. Discussioni del Parlamento europeo.`
},
{
  id: "viral-caption-titulares-016",
  title: "Titolo con 'la parte che ignori '",
  summary: "Concentrati sull'invisibile / importante.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 titoli per _ _ PH0 _ su "la parte che ignori".
Deve includere un oggetto chiaro: "la vostra offerta", "il vostro primo secondo", "il vostro CTA," ecc.
Massimo 12 parole.`
},
{
  id: "viral-caption-titulares-017",
  title: "Prima linea con sfida",
  summary: "Sfida diretta per commento / impegno.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 prime linee che sono una sfida per _ _ PH0 _ over _ _ _ PH1 _ _ _ _ _
Regole:
- Inizia con "Challenge:"
- Una frase.
- No. Finisce con "ti alleni"`
},
{
  id: "viral-caption-titulares-018",
  title: "Smettere di fare questo '",
  summary: "Morbido divieto di attirare l'attenzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 30 titoli che iniziano con:
"Smettila di fare questo a PH0"
Quindi aggiungere un breve perché (max 6 parole).
Non usare l'aggressione.`
},
{
  id: "viral-caption-titulares-019",
  title: "Prima fila con \"non sei sola\" '",
  summary: "Empathy per mantenere il pubblico non sicuro.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 prime linee empatiche per _ _ PH0 _ over _ _ PH1 _ _ _.
Regole:
- No. Devono includere "non sei solo" o "si capita a tutti noi" (variato).
- No. Devono promettere una soluzione nel post / video.
- Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-020",
  title: "Supporti di tipo di errore comune",
  summary: "Una cassaforte classica.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 25 titoli di stile "Common Errors" per _ PH0 _ _.
Esempi:
- "3 errori comuni che ti costano X"
- "Gli errori che ti tengono in X"
Utilizzare numeri realistici e linguaggio chiaro.`
},

{
  id: "viral-caption-titulares-021",
  title: "Prima linea con 'questo cambia il gioco '",
  summary: "Potenti aperture senza fumo.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 25 prime righe con "questo cambia il gioco".
Regole:
- No. Devono menzionare "questo" (azione concreta).
- Niente promesse assolute.
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.`
},
{
  id: "viral-caption-titulares-022",
  title: "Headline con semplice analogia",
  summary: "Breve metafore per spiegare idee difficili.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 titoli con semplici analogie per _ PH0 _ _.
Esempio: "La vostra offerta è come un menu: se confondete, non comprate".
Massimo 16 parole.`
},
{
  id: "viral-caption-titulares-023",
  title: "Stile di prima linea 'Lo spiego facile'",
  summary: "Prometti chiarezza immediata.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 30 prime linee di stile:
"Lo spiego facilmente..."
È necessario entrare _ _ PH0 _ e promettere una spiegazione in 3 passi.
Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-024",
  title: "Intestazione con 'Ho provato in modo da non",
  summary: "Autorità per esperienza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 titoli con:
"L'ho provato cosi' non avresti..."
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.
Esso comprende conseguenze realistiche e apprendimento implicito.`
},
{
  id: "viral-caption-titulares-025",
  title: "Prima fila con una figura che fa male",
  summary: "Figura realista che spara attenzione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 20 prime righe che includono un numero "che fa male" (realistico) oltre _ PH0 _ _.
Ej: "Ho perso 3 ore per non farlo..."
Non usare figure assurde. Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-026",
  title: "Titolo per 'salvarlo'",
  summary: "Risparmio di approccio fin dall'inizio.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 titoli che rendono le persone vogliono salvare il post / video.
Devi insinuare:
- assegno
- passi
- modello
Oggetto: _ _ PH0 _. Massimo 12 parole.`
},
{
  id: "viral-caption-titulares-027",
  title: "Prima linea con micro-promessa",
  summary: "Micro promessa chiara in 1 frase.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 30 prime linee con breve promessa per _ PH0 _ _ _.
Template: "Oggi stai prendendo _ _ PH1 _ _ in _ _ PH2 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _______________________________
_ PH3 _ realista (30s, 2min, 5min).
Discussioni del Parlamento europeo.`
},
{
  id: "viral-caption-titulares-028",
  title: "Intestazione con 'se fai X, passare Y'",
  summary: "Causa- facile da capire effetto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 25 cause titolo - effetto:
"Se lo fai _ _ PH0 _, pass _ _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _________________________________
Per _ PH2 _ _ _ _ PH3 _ e _ _ PH4 _ _ deve essere concreto.
Massimo 13 parole.`
},
{
  id: "viral-caption-titulares-029",
  title: "Prima fila con 'Ti dirò qualcosa'",
  summary: "Apertura di confessione / segreto.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 30 prime linee che iniziano con:
"Ti dirò una cosa:"
Discussioni del Parlamento europeo
Che il seguente sia specifico e utile (non vago).`
},
{
  id: "viral-caption-titulares-030",
  title: "Titolo con 'not X, is Y'",
  summary: "Raccogliere potente per tapparelle.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 titoli con:
"Non e' vero.
Discussioni del Parlamento europeo Ascoltare: _ _ PH3 _.
_ PH4 _ deve essere una credenza comune; _ PH5 _ deve essere la vera causa.`
},

{
  id: "viral-caption-titulares-031",
  title: "Prima linea per contenuti educativi",
  summary: "Insegnamento aperture senza essere noioso.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 25 prime linee di educazione per _ PH0 _ _.
Regole:
- No. Devono promettere "in 3 punti".
- No. Essi devono includere un beneficio pratico.
- Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-032",
  title: "Titolo con 'cosa farei a casa tua '",
  summary: "Menzogne e vicinanza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 titoli che iniziano con:
"A casa tua, lo farei..."
Discussioni del Parlamento europeo
Deve finire con azione concreta. Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-033",
  title: "Prima riga con avviso",
  summary: "Avvertenze utili, non allarmi.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 prime linee di tipo di avvertimento per _ PH0 _ _.
Modelli:
- "Eye with this..."
- "Non cadere in questo..."
- "Prima che tu faccia X, guarda questo..."
Massimo 12 parole.`
},
{
  id: "viral-caption-titulares-034",
  title: "Porta parole chiave commento",
  summary: "Progettato per sparare commenti.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 titoli che finiscono con:
"Tell _ PH0 _ e lo passerò".
Discussioni del Parlamento europeo Ascolto:
Assicurarsi che ciò che accade è prezioso (templato / guida / elenco).`
},
{
  id: "viral-caption-titulares-035",
  title: "Prima linea con mini-callenge",
  summary: "Aperture che vi invitano a provare qualcosa oggi.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 prime linee con mini-challenge per _ PH0 _ _ over _ _ PH1 _ _ _ _
Deve includere "oggi" e un'azione di meno di 5 minuti.
Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-036",
  title: "Titolo con 'questo ti costa '",
  summary: "Dolore economico / tempo realistico.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 25 titoli con:
"Questo ti costa _ PH0 _..."
Discussioni del Parlamento europeo
Utilizzare figure realistiche o espressioni ("ore", "clienti", "energia").
Massimo 13 parole.`
},
{
  id: "viral-caption-titulares-037",
  title: "Prima linea per vendere senza vendere",
  summary: "Apertura con valore + curiosità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrive 25 prime righe per _ _ PH0 _ dove non suona in vendita.
È necessario offrire una vera punta e aprire un loop.
Discussioni del Parlamento europeo Ascolto:.`
},
{
  id: "viral-caption-titulares-038",
  title: "Intestazione con 'la verità è... '",
  summary: "Breve verità + dettaglio sorprendente.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 30 titoli che iniziano con:
"La verità è..."
Discussioni del Parlamento europeo
Esso comprende un dettaglio specifico (metrico, esempio, regola, frase).
Massimo 12 parole.`
},
{
  id: "viral-caption-titulares-039",
  title: "Prima linea tipo 'nessuno parla di questo '",
  summary: "Omissione + curiosità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 20 prime righe con:
"Nessuno parla di questo..."
Discussioni del Parlamento europeo
È necessario sottolineare qualcosa di reale e utile (processo, passo, errore, dettaglio).
Massimo 13 parole.`
},
{
  id: "viral-caption-titulares-040",
  title: "Intestazione con '3 segni che... '",
  summary: "Segni = curabile + commento.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 titoli con:
"3 segni che..."
Discussioni del Parlamento europeo Ascolto: _ _ PH1 _.
I "segni" sono concreti, non astratti.
Massimo 13 parole.`
},

{
  id: "viral-caption-titulares-041",
  title: "Prima linea con la frase esatta",
  summary: "Frose pronto a copiare.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 prime righe che includono una frase esatta tra le citazioni per _ PH0 _ _.
La frase dovrebbe essere "copy-paste" e utile per _ PH1 _ _.
Massimo 16 parole.`
},
{
  id: "viral-caption-titulares-042",
  title: "Titolo con 'questo non è normale '",
  summary: "Sorpresa moderata.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 20 titoli che iniziano con:
"Questo non è normale"
Discussioni del Parlamento europeo
Completo di un fatto realistico o di un fatto che sorprende (senza sovrastamento).
Massimo 13 parole.`
},
{
  id: "viral-caption-titulares-043",
  title: "Prima riga: 'Tu stai diventando complicato '",
  summary: "Semplificazione + promessa.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 25 prime righe con:
"Sei complicato..."
Discussioni del Parlamento europeo
Deve finire con una semplice soluzione ("fa questo invece").`
},
{
  id: "viral-caption-titulares-044",
  title: "Titolo con 'questa è la differenza'",
  summary: "Confronto che dà chiarezza.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivi 25 titoli con:
"Questa è la differenza tra _ PH0 _ e _ _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _____
Discussioni del Parlamento europeo
_ PH3 _ _ e _ _ PH4 _ _ deve essere concetti di nicchia e utile.`
},
{
  id: "viral-caption-titulares-045",
  title: "Prima riga: 'Non hai più bisogno di '",
  summary: "Contro l'informazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 prime linee con:
"Non hai più bisogno di più _ _ PH0 _, you need _ PH1 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _______________________________
Discussioni del Parlamento europeo Ascoltare: _ _ PH3 _.
_ PH4 _ _ e _ _ PH5 _ _ deve essere specifico.`
},
{
  id: "viral-caption-titulares-046",
  title: "Titolo con 'se lo sapessi'",
  summary: "Lacuna di curiosità forte.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 titoli con:
"Se tu lo sapessi...
Completo di una traccia specifica (non vago).
Massimo 13 parole.`
},
{
  id: "viral-caption-titulares-047",
  title: "Prima linea per 'Part 2'",
  summary: "Aperture che lasciano spazio alla serie.",
  area: AREA,
  category: CATEGORY,
  prompt: `Scrivere 20 prime righe pensato per finire in "Parte 2".
Discussioni del Parlamento europeo
Regole:
- No. Egli suggerisce che c'è un passo che le persone omettono sempre.
- No. Non rivelare tutto.
Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-048",
  title: "Titolo con 'quello che nessuno ti ha avvertito '",
  summary: "Avvertenza realistica + utilità.",
  area: AREA,
  category: CATEGORY,
  prompt: `Dammi 20 titoli con:
"Quello che nessuno ti ha avvertito di _ PH0 _"
Include un dettaglio specifico (costo, attrito, errore).
Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-049",
  title: "Prima linea con urgenza morbida",
  summary: "Nessuna emergenza di manipolazione.",
  area: AREA,
  category: CATEGORY,
  prompt: `Crea 20 prime linee con urgenza morbida per _ PH0 _ _ _.
Usa frasi come:
- "Prima..."
- "Se lo fai questa settimana..."
- "Se sei bloccato..."
Massimo 14 parole.`
},
{
  id: "viral-caption-titulares-050",
  title: "Titolo con \"fare questo oggi\"",
  summary: "Azione immediata e semplice.",
  area: AREA,
  category: CATEGORY,
  prompt: `Genera 25 titoli che includono "oggi" e un'azione concreta (± 5 min) per _ PH0 _ _.
Deve sembrare pratico e realistico.
Massimo 12 parole.`
}];