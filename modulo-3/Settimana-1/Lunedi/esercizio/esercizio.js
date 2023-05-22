// const random = ():number => {
//     return Math.floor(Math.random()*100+1);
// }
// console.log(random())
// enum Labels {pl1 = random(), pl2 = random(), dice = random()} 
// const game = ():void => {
//     Labels.dice
//     Labels.pl1
//     Labels.pl2
//     console.log(Labels.dice, Labels.pl1, Labels.pl2)
//     if(Labels.pl1 && Labels.pl2 !== Labels.dice) {
//         if (Math.abs(Labels.dice-Labels.pl1) > Math.abs(Labels.dice-Labels.pl2)) {
//             console.log("giocatore 2 vince")
//         }else {console.log("giocatore 1 vince")}
//     } else {console.log("parita', rigioca!")}
// }
// game()
var bottone = document.querySelector("button");
var player1 = document.getElementById("pl1");
var player2 = document.getElementById("pl2");
var dado = document.getElementById("dado");
var result = document.querySelector(".risultato");
var random = function () {
    return Math.floor(Math.random() * 100 + 1);
};
var game2 = function () {
    var pl1 = random();
    var pl2 = random();
    var dice = random();
    dado.value = "".concat(dice);
    player1.value = "".concat(pl1);
    player2.value = "".concat(pl2);
    console.log(dado);
    if (pl1 && pl2 !== dice) {
        if (Math.abs(dice - pl1) > Math.abs(dice - pl2)) {
            result.innerText = " giocatore 2 vince";
        }
        else {
            result.innerText = " giocatore 1 vince";
        }
    }
    else {
        result.innerText = " parita' rigioca!";
    }
};
bottone.addEventListener("click", function (evt) {
    evt.preventDefault();
    game2();
    dado.innerHTML = "";
    player1.innerHTML = "";
    player2.innerHTML = "";
});
