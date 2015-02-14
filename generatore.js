// Creo un array per ogni elemento della frase

var soggetto = ["Un mio amico ","Una mia amica ", "Il mio fruttivendolo ", "La mia vicina di casa ", "La mia donna delle pulizie ", "Il mio collega " ];
var verbo = ["dice ", "afferma ", "sostiene ", "giura ", "crede ", "ritiene "];
var condizione = [ "se mangia carne di maiale ", "quando beve acqua del rubinetto ", "se non si lava i denti con l'aranciata ", "se usa la farina doppio zero per cucinare ", "quando usa posate di plastica "];
var effetto = ["di notte non dorme.", "suo figlio diventa autistico.", "diecimila cellule del cervello muoiono.", "di sicuro avr&agrave; il cancro.", "suo figlio diventa sterile.", "la vista si deteriora.","la sciatica &egrave; garantita.","la pelle si secca.","vengono i calcoli alla cistifellea.","non potr&agrave; avere figli.","avr&agrave; un figlio down.","le orecchie si tappano subito."];

// estraggo un valore casuale da ciascun array
// il codice l'ho preso qui: http://javascriptkit.com/script/script2/motivatequotes.shtml
var s=Math.floor(Math.random()*(soggetto.length));
var v=Math.floor(Math.random()*(verbo.length));
var c=Math.floor(Math.random()*(condizione.length));
var e=Math.floor(Math.random()*(effetto.length));

// costruisco la frase e la stampo a schermo
document.write(soggetto[s] + verbo[v] + "che " + condizione[c] + "poi " + effetto[e]);