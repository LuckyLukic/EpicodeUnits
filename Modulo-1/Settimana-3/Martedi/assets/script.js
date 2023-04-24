var btnVerifica = document.getElementById('verifica');
var btnReset = document.getElementById('reset');
var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
var valore1;
var valore2;
var messaggio = docuemnt/getElementById('risultato');
var estratto
// DOM TRAVERSING
window.addEventListener('load', function() {
    btnReset.setAttribute('disabled', 'true');
    btnReset.style.backgroundColor = 'red';
    btnReset.style.color = 'white';
})