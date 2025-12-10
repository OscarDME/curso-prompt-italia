// src/lib/prompts/text/finanzas-contabilidad-presupuesto-planificacion.js

export const textPromptsFinanzasContabilidadPresupuestoPlanificacion = [
{
  id: "finpres-001",
  title: "Bilancio mensile 50 / 30 / 20 metriche personalizzate + controllo",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Crea un bilancio realistico e misurabile per la tua situazione con regole chiare.",
  prompt: `Agisce come consulente finanziario (approccio pratico, senza ritorni promettenti).

Ingressi:
- Entrate nette mensili.
- Debiti (tipo, tasso, pagamento minimo).
- Costi fissi (reddito, servizi, trasporti, ecc.).
- Costi variabili.
- Obiettivi (risparmio, emergenza, grande acquisto).
- Tolleranza al rischio (bassa / media / alta).

Genera:
1) Stile di bilancio mensile 50 / 30 / 20 adattato ai miei numeri (se non applicato, proporre un'altra struttura).
2) Tabella: categoria - 124; importo - 124;% - 124; limite settimanale.
3) regole di controllo (top 7) per evitare di rompere il bilancio.
4) 5 metriche chiave da rivedere ogni settimana (include soglie).
5) Piano di regolazione se c'è un mese cattivo (basso reddito 20%).`,
  thumbnail: ""
},

{
  id: "finpres-002",
  title: "Bilancio di base zero (Zero-Based Budget) passo dopo passo",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Assegnare ogni peso / dollaro a uno scopo per eliminare perdite e spendere con intenti.",
  prompt: `Agisce come allenatore finanziario.

Ingressi:
- Entrate nette mensili.
- Elenco delle spese fisse e variabili per l'ultimo mese.
- Obiettivi finanziari (3).
- Risparmio attuale.
- conto bancario (s) che uso.

Genera:
1) Bilancio base zero con categorie suggerite.
2) Accurata allocazione per: fisso, variabile, risparmio, fondo di emergenza, debito, divertimento.
3) Quante volte spostare i soldi (settimanale / quindici giorni) e come.
4) Modello di revisione settimanale (elenco di controllo).
5) 10 "nessun dolore" taglia secondo le mie spese.`,
  thumbnail: ""
},

{
  id: "finpres-003",
  title: "Pianificare per creare un fondo di emergenza (3-6 mesi) senza appendere",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Costruisce un materasso finanziario con pietre miliari, timeline e automazione.",
  prompt: `Agisce come consigliere finanziario conservatore.

Ingressi:
- Spese mensili essenziali (solo di base).
- Risparmio attuale.
- Stabilità dei redditi (stabile / variabile).
- Dipendenti (sì / no).
- Rischi (salute, auto, lavoro).

Genera:
1) Obiettivo di emergenza consigliato (3, 4.5 o 6 mesi) con giustificazione.
2) Un piano di contributo per settimana / mese per arrivare in X mesi (3 scenari).
3) Dove salvarlo (opzione sicura, liquidità) per non menzionare i segni se non necessario.
4) Regole d'uso: quando sì / quando non toccarlo.
5) Lista di controllo mensile per mantenere e riparare se lo si utilizza.`,
  thumbnail: ""
},

{
  id: "finpres-004",
  title: "Piano aggressivo per lasciare il debito (avalanche vs snowball)",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Strategia per pagare i debiti più veloci con il programma di pagamento e tagli.",
  prompt: `Agisce come un analista e finanziario.

Ingressi:
- Elenco dei debiti: saldo, tasso, pagamento minimo.
- Entrate nette mensili.
- Capacità extra per il pagamento mensile.
- Priorità personale (rapido motivazione vs risparmio di interessi).

Genera:
1) confronto valanga vs palla di neve applicato ai miei numeri.
2) Programma mensile di pagamento (primo 6 mesi dettagliati + sommario annuale).
3) Come ridistribuire i pagamenti quando un debito è sgomberato.
4) 10 idee per rilasciare flusso di cassa questo mese.
5) Regole di non ricorrenza (sistema di prevenzione).`,
  thumbnail: ""
},

{
  id: "finpres-005",
  title: "Piano settimanale di flusso di cassa (cashflow) per reddito variabile",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Organizza il tuo denaro per settimane e priorità se si carica per le vendite / commissioni.",
  prompt: `Agisce come pianificatore finanziario per freelance / imprenditori.

Ingressi:
- reddito stimato a settimana (ultimi 8 settimane).
- Spese fissate con data di pagamento.
- Costi variabili medi.
- Debiti e gol.
- Metodo di raccolta (daily / settimanale / fortnight).

Genera:
1) Sistema di "buckets" e% suggerito.
2) Programma di allocazione settimanale (che giorno per separare cosa).
3) Regola di priorità quando il denaro entra (ordine esatto).
4) Pianifica per le settimane cattive (la soglia e le azioni).
5) Controllo settimanale di chiusura (15 min).`,
  thumbnail: ""
},

{
  id: "finpres-006",
  title: "Partner / bilancio familiare (modello familiare) + accordi",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Crea un sistema condiviso senza combattimenti: contributi, obiettivi e regole.",
  prompt: `Agisce come mediatore finanziario.

Ingressi:
- Reddito netto di ogni persona.
- Spese condivise e personali.
- Obiettivi (casa, viaggio, emergenza, debiti).
- No. Stile di sospensione (risparmio / speso / misto).

Genera:
1) Modello consigliato (50 / 50, proporzionale, ibrido) con giustificazione.
2) Bilancio condiviso e personale con importi.
3) Regole: grandi acquisti, abbonamenti, emergenze, debiti.
4) Riunione finanziaria mensile (agenda + checklist).
5. "Accordo scritto" tipo 1 pagina per firmare simbolicamente.`,
  thumbnail: ""
},

{
  id: "finpres-007",
  title: "Piano d'obiettivo finanziario annuale (OKRs) con tappe mensili",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Trasforma i tuoi obiettivi in obiettivi misurabili e follow-up mensile.",
  prompt: `Agisce come consulente finanziario orientato agli obiettivi.

Ingressi:
- Obiettivi (max 5) con importo e data desiderata.
- Entrata attuale e prevista.
- Debt.
- Risparmio attuale.
- Rischi e priorità.

Genera:
1) OKR finanziari (Obiettivi + Risultati chiave) per 12 mesi.
2) Le pietre miliari mensili con importi esatti.
3) Indicatori avanzati (abita) e retro (risultati).
4) Piano di revisione trimestrale: cosa regolare e come.
5) Dashboard in testo per copiare Nozione / Fogli.`,
  thumbnail: ""
},

{
  id: "finpres-008",
  title: "Pianificare per comprare qualcosa di grande (auto / casa / attrezzature) senza svalutazione",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Definire quanto risparmiare, come finanziare e come non rompere la vostra stabilità.",
  prompt: `Agisce come consulente finanziario.

Ingressi:
- No. Che cosa si desidera acquistare e costi stimati.
- Risparmio disponibile.
- Entrate nette mensili.
- Debiti attuali.
- Emergenza (alto / medio / basso).
- Tolleranza al rischio.

Genera:
1) Importo massimo consigliato per il pagamento mensile (regola di prenotazione).
2) Piano di risparmio per 3 scenari (veloce / medio / rilassato).
3) Impatto sul bilancio mensile e cosa tagliare.
4) Elenco di controllo prima dell'acquisto (documenti, assicurazione, manutenzione).
5) Piano post-acquisto per recuperare la liquidità.`,
  thumbnail: ""
},

{
  id: "finpres-009",
  title: "Piano di riduzione dei costi (audit) con grado di impatto",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Rileva perdite di denaro e tagli in modo intelligente senza compromettere la qualità della vita.",
  prompt: `Agisce come revisore delle spese personali.

Ingressi:
- Estratto delle spese del mese scorso (elenco o categorie).
- Spese fisse (reddito, servizi, ecc.).
- Abbonamenti.
- Compri la formica.
- Obiettivo: salvare X al mese.

Genera:
1) Classificazione delle spese: essenziale / importante / spendibile.
2) Valutazione dei tagli di impatto (top 15) con risparmio stimato.
3) Piano di 30 giorni per implementare tagli (settimana).
4) Regole per evitare "bunce" (spese per ansia).
5) Alternative economiche per 10 costi comuni.`,
  thumbnail: ""
},

{
  id: "finpres-010",
  title: "Metodo di busta moderno con account digitali",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Applicare il metodo delle buste utilizzando account digitali / volte e automazioni.",
  prompt: `Agisce come allenatore finanziario.

Ingressi:
- Entrate nette mensili.
- Frequenza della collezione.
- Principali categorie di spese.
- Livello di disciplina (basso / medio / alto).

Genera:
1) Struttura di buste (10-15) con% suggerito.
2) Regole di ricarica (ogni tassa) e limiti.
3) Cosa fare se una busta esaurisce fondi (protocolli).
(4) Automazione consigliata (trasferimenti, avvisi).
5) Checklist di manutenzione settimanale di 10 minuti.`,
  thumbnail: ""
},

{
  id: "finpres-011",
  title: "Bilancio degli studenti (rent, food, transport) + hack di risparmio",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Bilancio semplice per sopravvivere e avanzare con reddito basso.",
  prompt: `Agisce come consulente finanziario per gli studenti.

Ingressi:
- Reddito mensile (scholarship, work).
- Reddito e servizi.
- Trasporti.
- Cibo.
- Debito (se applicabile).
- Obiettivo (salvare X / pagare debito / stabilizzare).

Genera:
1) Bilancio di categoria (ideale e minimo praticabile).
2) Piano alimentare settimanale con costo stimato (nessun segno).
3) 20 hack di risparmio pratico e realistico.
4) Segni di avvertimento (quando sei fuori controllo) + cosa fare.
5) Mini-piano per creare un fondo di emergenza di 1 mese.`,
  thumbnail: ""
},

{
  id: "finpres-012",
  title: "Bilancio per le piccole imprese (micro-P & L) + cash control",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Organizza reddito, costi, spese e contanti per non essere lasciato senza liquidità.",
  prompt: `Agisce come contabile / finanza per micro-business.

Ingressi:
- reddito mensile medio.
- Costi diretti (fornitori, piattaforme, commissioni).
- Costi operativi (app, stipendi, annunci).
- Imposte stimate (se applicabili).
- Obiettivo utile.

Genera:
1) MicroP & L modello: reddito, COGS, margine, spesa, utilità.
2) Bilancio mensile per articoli con consigliato%.
3) "Riserva" regola per le tasse e le contingenze.
4) Tasso di revisione: settimanale (scatola) e mensile (P & L).
5) Segnali di rischio di cassa + piano di recupero.`,
  thumbnail: ""
},

{
  id: "finpres-013",
  title: "Pianifica di aumentare i risparmi dal 0% al 15% in 60 giorni",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Una strategia graduale per aumentare i risparmi senza sentirsi soffocare.",
  prompt: `Agisce come un allenatore finanziario comportamentale.

Ingressi:
- Entrate nette mensili.
- Risparmio attuale (0-5%).
- 5 spese che pesano di piu' su di te.
- Livello di stress finanziario (1-10).
- Risparmio obiettivo.

Genera:
1) piano di 8 settimane (obiettivo di risparmio settimanale).
2) Tagliamenti progressivi con alternative.
(3) Automazione consigliata (giorno e quantità).
4) Premi e regole per mantenere la motivazione (senza sabotaggio).
5) Cosa fare se si perde una settimana (protocollo di ritorno).`,
  thumbnail: ""
},

{
  id: "finpres-014",
  title: "Piano per organizzare pagamenti e date (pagamento anticipato) + calendario",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Evitare ricarica e arretrati: calendario, promemoria e priorità.",
  prompt: `Agisce come consulente finanziario.

Ingressi:
- Elenco dei conti da pagare + date.
- Reddito e frequenza di raccolta.
- No. Se ci sono interessi / debiti di ricarica.
- Metodo attuale (caotico / medio / ordinato).

Genera:
1) Programma mensile di pagamento (struttura a settimana).
2) Strategia: pagare quando si raccolgono vs a pagare a scadenza (si raccomanda uno).
3) Sistema di promemoria e revisione settimanale.
(4) Priorità dei pagamenti (ordine con giustificazione).
5) Contingency plan se il denaro manca (cosa rinviare e come negoziare).`,
  thumbnail: ""
},

{
  id: "finpres-015",
  title: "Piano \"minimalist budget\" (3 conti) per persone occupate",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Sistema semplice e automatico con poche decisioni.",
  prompt: `Agisce come consulente finanziario. Progetta un sistema di 3 account super semplice (o 3 secchi).

Ingressi:
- Entrate nette mensili.
- Costi fissi.
- Obiettivi (risparmio / debito).
- Tipo di reddito (stabile / variabile).
- Disciplina (bassa / media / alta).

Genera:
(1) Struttura 3 conti: costi fissi / variabili / oggettivi.
2) Percentuali e importi esatti.
3) Quando trasferire (giorno del mese o per raccolta).
4) regole anti-disordine.
5) Elenco mensile (10 min) per tenerlo.`,
  thumbnail: ""
},

{
  id: "finpres-016",
  title: "Piano di bilancio di viaggio (senza debito)",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Risparmia per un viaggio con orari, costi e un piano B.",
  prompt: `Agisce come consulente finanziario.

Ingressi:
- Costo stimato del viaggio.
- Data del viaggio.
- Risparmio attuale.
- Reddito mensile.
- Livello di flessibilità (Posso tagliare molto / poco).

Genera:
1) Obiettivo mensile di risparmio e data di conformità (3 scenari).
2) Categorie del viaggio con% suggerito (momenti, alloggio, cibo, extra).
3) strategia di acquisto (cosa pagare prima e quando).
(4) Piano B se i prezzi aumentano o il reddito cade.
5) Lista di controllo finale 2 settimane prima del viaggio.`,
  thumbnail: ""
},

{
  id: "finpres-017",
  title: "Piano finanziario postcrisi (ricostruzione di 90 giorni)",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Recuperare il controllo dopo un colpo (debito, perdita di reddito, emergenza).",
  prompt: `Agisce come consulente finanziario in situazioni di crisi.

Ingressi:
- No. Che cosa è successo (perdita di reddito, emergenza medica, debito).
- Entrata attuale.
- Costi essenziali.
- Debt.
- Supporti disponibili (famiglia, assicurazione, ecc.).

Genera:
1) Bilancio di sopravvivenza (minimo realizzabile) per 30 giorni.
2) Piano 90 giorni in 3 fasi (stabilizzare, riparare, costruire).
3) Che negoziare e con chi (debiti, servizi, reddito) + copioni brevi.
4) Elenco di controllo settimanale di monitoraggio.
5) Segni che posso tornare alla "modalità normale".`,
  thumbnail: ""
},

{
  id: "finpres-018",
  title: "Pianifica di tenere conto delle spese e risparmia le tasse (organizzazione documentale)",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Sistema per l'ordinazione di ricevute mensili, categorie e relazioni (senza specifica consulenza fiscale).",
  prompt: `Agisce come contabile organizzato. (Non dare consigli fiscali specifici, solo struttura e buona pratica.)

Ingressi:
- No. Se sono un dipendente / freelance / società.
- Tipi di spesa (attrezzatura, software, trasporto, ecc.).
- Strumenti attuali (niente / Excel / app).
- Frequenza di fatturazione / ricevute.

Genera:
1) Struttura della cartella e (digitale) nomenclatura per mese e tipo.
2) Categorie contabili comuni (elenco) per la registrazione delle spese.
3) routine settimanale (15 min) + routine mensile (60 min).
4) Modello di registrazione: data, fornitore, categoria, metodo, voucher, nota.
5) Controllo mensile di chiusura per essere pronto per un contabile / audit.`,
  thumbnail: ""
},

{
  id: "finpres-019",
  title: "Piano di bilancio per \"crescita dei redditi\" (Bonus: aumentare la strategia)",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Bilancio di Alinea con crescita: investimento, risparmio e controllo delle spese.",
  prompt: `Agisce come consulente finanziario per la crescita personale / business.

Ingressi:
- Entrata attuale.
- Capacità principale (vendita, freelancing, ecc.).
- Tempo disponibile a settimana.
- Costi fissi.
- Obiettivo di reddito in 90 giorni.

Genera:
1) "corrente" di bilancio vs "target budget" (che cambia).
2) percentuale raccomandata per gli investimenti in crescita (corsi, strumenti, annunci, ecc.).
3) Piano d'azione settimanale per aumentare il reddito (5 azioni).
4) Indicatori di ritorno (che misura) per decidere se ne vale la pena.
5) Regole per evitare che un aumento del reddito diventi un aumento delle spese.`,
  thumbnail: ""
},

{
  id: "finpres-020",
  title: "Diagnosi finanziaria Express (score) + piano di miglioramento",
  area: "Finanza e contabilità",
  category: "Bilancio e pianificazione",
  summary:
  "Valuta la tua salute finanziaria con un punteggio e un piano di 30 giorni.",
  prompt: `Agisce come consulente finanziario.

Ingressi:
- Reddito netto.
- Risparmio disponibile.
- Debiti e pagamenti.
- Costi essenziali.
- Obiettivi principali.
- Lo stress finanziario (1-10).

Genera:
1) punteggio di salute finanziaria (0-100) con 5 sub-score (risparmio, debito, liquidità, stabilità, abitudini).
2) diagnosi: 3 problemi di radice.
3) Piano di 30 giorni con compiti settimanali.
4) Regole semplici (max 7) per mantenere il progresso.
5) Rassegna mensile Checklist per non tornare indietro.`,
  thumbnail: ""
}];