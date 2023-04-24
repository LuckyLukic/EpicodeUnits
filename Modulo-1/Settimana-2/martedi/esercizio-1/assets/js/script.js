/* compiti

1 leggere il campo nome e memorizzarlo
2 leggere il campo anno e memorizzarlo
3 con il wsvalore memorizzato dal campo anno, calcolare l'eta in base all'anno in corso
4 verificare la maggiore o minore eta'
5 scrivere nell html
6 cancellare il form

EVENTO SCATENANTE (eventhandler)
click sul button

variabili
globali btn (const), eta, stato */

const btn =  document.getElementById('verifica');
var eta;
var stato;

btn.addEventListener('click', function() {
    let nome = document.getElementById('nome');
    let anno = document.getElementById('anno');

    calcolaEta(anno.value);
    verifica();
    scrivi (nome.value);
    reset (nome, anno)

})

function calcolaEta (anno)  {
    eta = 2023 - anno;
}

function verifica (){
stato = (eta >= 18) ? 'maggiorenne' : 'minorenne' ;
}

function scrivi (nome) {
document.getElementById('mioNome').innerHTML = "ciao " + nome;
document.getElementById('miaVerifica').innerHTML = "hai " + eta + " anni, sei " + stato;

}

function reset () {
    nome.value = "";
    anno.value = "";
}
