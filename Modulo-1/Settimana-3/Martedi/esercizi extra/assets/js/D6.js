/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1,l2) {
    let areaTotale = l1*l2;
    return areaTotale
}

 console.log(area(4,7))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum (num1, num2) {
    if (num1!==num2) {
        return num1+num2
    } else num1*num2
}

console.log(crazySum(4,8))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff (num1) {
    if (num1>19) {
        return Math.abs((num1-19)*3)
    } else return Math.abs(num1-19)
}
console.log(crazyDiff(3))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
    if ((n > 20 && n <= 100) || n === 400) {
        return true
    }
}

console.log(boundary(45))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify (stringa) {
    if (stringa!=="EPICODE") {
        return "EPICODE"+" "+ stringa
    } else return stringa
} 

console.log(epify("codeforlife"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7 (numPositivo) {
    return (numPositivo % 3 ===0 || numPositivo % 7===0) ? true : false;
}

console.log(check3and7(21))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString (stringa2) {
    return stringa2.split("").reverse().join("")
}

console.log(reverseString("ciccio"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(StringaMultipla) {
    let stringa = StringaMultipla.split(" ");
    let stringaModificata = "";
    for (let i = 0; i < stringa.length; i++) {
     stringaModificata += stringa[i][0].toUpperCase()+stringa[i].slice(1) + " ";
     
    }
    return stringaModificata
    
}
console.log(upperFirst("ciao bello come va"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString (stringa3) {
    return stringa3.slice(1,-1);
}
console.log(cutString("vatteneapesca"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function givemeRandom (numRandom) {
    let randomArray = [];
    let c = 0
    while (c < numRandom) {
    randomArray.push(Math.floor(Math.random() *11))
    c++
    }
    return randomArray
    }

console.log(givemeRandom(8))

/* SCRIVI QUI LA TUA RISPOSTA */
