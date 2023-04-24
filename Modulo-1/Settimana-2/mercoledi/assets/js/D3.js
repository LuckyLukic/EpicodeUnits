/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function compare () {
  let a = 3;
  let b = 4;
  if (a > b) {
    console.log(a)
  } else if {
    console.log(b)
} else console.log(" i numeri sono uguale");
}

compare();

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function notEqual() {
  let a = 4;
  let b = 7;
  let c = 9;
  if (a || b || c !== 5) {
    console.log("not equal");
  }
}
notEqual();

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function divisibile5(numero) {
  
  if(numero % 5 === 0) {
    console.log("divisibile per 5");
  } else console.log("non divisibile per 5")
} 
divisibile5(13);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// */

 function crossCheck (val1, val2) {
  
   if (((val1 || val2) !== 8) || ((val1 + val2) !== 8) || ((val1+ val2) || (val2 - val1) !== 8)) {
console.log(true)
   }

  }

  crossCheck(5,16)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart;
const shipment = 10;
function checkout (spesa) {
  totalShoppingCart = spesa;
  if (totalShoppingCart > 50) {
    console.log (totalShoppingCart);
  } else console.log(totalShoppingCart + shipment);
}
checkout(30)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function checkout2 (spesa) {
  totalShoppingCart = (spesa*0.8);
  if (totalShoppingCart > 50) {
    console.log (totalShoppingCart);
  } else console.log(totalShoppingCart + shipment);
}
checkout2(60)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const a = 6;
const b = 12;
const c = 3;



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function verifica (x){
  console.log(typeof(x))
} 
verifica(7);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function pariDispari (num) {
  if (num % 2 === 0) { 
    console.log ("numero pari")
  } else console.log("numero dispari");
}
pariDispari(17)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
  if (val < 5) {
      console.log("Meno di 10");
    } else if (val < 10) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city="Toronto"
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me.skills)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var prova = []
prova.splice(0,10,1,2,3,4,5,6,7,8,9,10);
console.log(prova);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
prova.splice(9,1,100);
console.log(prova);

/* SCRIVI QUI LA TUA RISPOSTA */
