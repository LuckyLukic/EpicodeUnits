/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
document.getElementById('h1').innerHTML = "Esercizi Martedi settimana 2"
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
document.getElementById('esercizio1').innerHTML = "Esercizio 1"
document.getElementById('esercizio1-spiegazione').innerHTML = "I principali datatype in JS sono: \'strings\': testo, \' numbers\': numeri, \' Boolean\': true or false, \'Null\': assenza intenzionale di un valore e indica spesso un nostro errore, \'Undefined\': assenza casuale o non volontaria di un valore, \'BigInt\': valori numerici troppo grandi per essere espressi con numeri , \'Symbol\': Un simbolo rappresenta un valore unico e anonimo "


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

document.getElementById('esercizio2').innerHTML = "Esercizio 2"
const name = "Luca";

function variabileName () {
  return document.getElementById('esercizio2-spiegazione').innerHTML= name;
}
variabileName()


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
document.getElementById('esercizio3').innerHTML = "Esercizio 3"

function variabileTotal () {
let num1 = 12;
let num2 = 20;
let total = num1+num2;
return document.getElementById('esercizio3-spiegazione').innerHTML= total;
}
variabileTotal();

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
document.getElementById('esercizio4').innerHTML = "Esercizio 4"

var x = 12;
function variableX () {
return document.getElementById('esercizio4-spiegazione').innerHTML= x;
}
variableX();

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
 

document.getElementById('esercizio5').innerHTML = "Esercizio 5";
document.getElementById('esercizio5-spiegazione').innerHTML = "e' impossibile riassegnare un valore ad una costante. l'operazione viene impedita da Code e comparirebbe come errore in consolle bloccando di fatto lo script ";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

document.getElementById('esercizio6').innerHTML = "Esercizio 6";
var sottrazione = 4 - x;
function sottrazioneX () {
return document.getElementById('esercizio6-spiegazione').innerHTML= sottrazione;
}
sottrazioneX();
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
document.getElementById('esercizio7').innerHTML = "Esercizio 7";
var name1 = "john";
var name2 = "John";

function uguaglianza(name1, name2) {
 let prova = name1!==name2 ? name2.toLowerCase() : 'sono uguali';
  document.getElementById('esercizio7-spiegazione').innerHTML= prova;
}
uguaglianza (name1, name2);
/* SCRIVI QUI LA TUA RISPOSTA */
