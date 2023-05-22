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

const bottone = document.querySelector("button") as HTMLButtonElement;
const player1 = document.getElementById("pl1") as HTMLInputElement;
const player2  = document.getElementById("pl2") as HTMLInputElement;
const dado = document.getElementById("dado") as HTMLInputElement;
const result = document.querySelector(".risultato") as HTMLParagraphElement


const random = ():number => {
    return Math.floor(Math.random()*100+1);
}


const game2 = ():void => {

let pl1:number = random();
let pl2:number= random(); 
let dice:number = random();
    
     dado.value = `${dice}`
     player1.value = `${pl1}`
     player2.value = `${pl2}`

    console.log(dado)

    if(pl1 && pl2 !== dice) {
        if (Math.abs(dice-pl1) > Math.abs(dice-pl2)) {
            result.innerText = " giocatore 2 vince"
            
        }else {result.innerText = " giocatore 1 vince"}
    } else {result.innerText = " parita' rigioca!"}
}

bottone.addEventListener("click", (evt):void => {
    evt.preventDefault()
    game2();
    dado.innerHTML ="";
    player1.innerHTML = ""
    player2.innerHTML = ""
})