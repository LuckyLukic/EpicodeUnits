"use strict";
// bottoni
const btnProfessionista = document.querySelector(".professionista");
const btnArtigiano = document.querySelector(".artigiano");
const btnCommerciante = document.querySelector(".commerciante");
const btnReset = document.querySelector(".reset");
// input
const redditoLordo = document.getElementById("redditoLordo");
const utileTasse = document.getElementById("utileTasse");
const tasseInps = document.getElementById("tasseInps");
const tasseIrpef = document.getElementById("tasseIrpef");
const redditoNetto = document.getElementById("redditoNetto");
class Redditometro {
    constructor(_redditoannuolordo, _codredd) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = 0.2623;
        this.tasseirpef = 0.15;
    }
    getUtileTasse() {
        let utileTasse = Number(((this.redditoannuolordo * this.codredd)).toFixed(2));
        return utileTasse;
    }
    getTasseInps() {
        let tasseInps = Number(((this.getUtileTasse() * this.tasseinps)).toFixed(2));
        return tasseInps;
    }
    getTasseIrpef() {
        let tasseIrpef = Number(((this.getUtileTasse() * this.tasseirpef)).toFixed(2));
        return tasseIrpef;
    }
    getRedditoAnnuoNetto() {
        let redditoNetto = Number((this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())).toFixed(2));
        return redditoNetto;
    }
}
class Artigiano extends Redditometro {
    constructor(_redditoannuolordo, _codredd = 0.67) {
        super(_redditoannuolordo, _codredd);
    }
}
class Commerciante extends Redditometro {
    constructor(_redditoannuolordo, _codredd = 0.40) {
        super(_redditoannuolordo, _codredd);
        this.codredd = 0.40;
    }
}
class Professionista extends Redditometro {
    constructor(_redditoannuolordo, _codredd = 0.78) {
        super(_redditoannuolordo, _codredd);
    }
}
btnProfessionista.addEventListener("click", (evt) => {
    evt.preventDefault();
    let reddito = parseInt(redditoLordo.value);
    if (reddito !== undefined) {
        let nuovoUtente = new Professionista(reddito);
        utileTasse.value = `${nuovoUtente.getUtileTasse()}`;
        tasseInps.value = `${nuovoUtente.getTasseInps()}`;
        tasseIrpef.value = `${nuovoUtente.getTasseIrpef()}`;
        redditoNetto.value = `${nuovoUtente.getRedditoAnnuoNetto()}`;
    }
});
btnArtigiano.addEventListener("click", (evt) => {
    evt.preventDefault();
    let reddito = parseInt(redditoLordo.value);
    if (reddito !== undefined) {
        let nuovoUtente = new Artigiano(reddito);
        utileTasse.value = `${nuovoUtente.getUtileTasse()}`;
        tasseInps.value = `${nuovoUtente.getTasseInps()}`;
        tasseIrpef.value = `${nuovoUtente.getTasseIrpef()}`;
        redditoNetto.value = `${nuovoUtente.getRedditoAnnuoNetto()}`;
    }
});
btnCommerciante.addEventListener("click", (evt) => {
    evt.preventDefault();
    let reddito = parseInt(redditoLordo.value);
    if (reddito !== undefined) {
        let nuovoUtente = new Commerciante(reddito);
        utileTasse.value = `${nuovoUtente.getUtileTasse()}`;
        tasseInps.value = `${nuovoUtente.getTasseInps()}`;
        tasseIrpef.value = `${nuovoUtente.getTasseIrpef()}`;
        redditoNetto.value = `${nuovoUtente.getRedditoAnnuoNetto()}`;
    }
});
const reset = () => {
    // let input = document.querySelectorAll("input");
    // input.forEach(element => element.innerHTML = "")
    redditoLordo.innerHTML = "";
    utileTasse.innerHTML = "";
    tasseInps.innerHTML = "";
    tasseIrpef.innerHTML = "";
    redditoNetto.innerHTML = "";
};
btnReset.addEventListener("click", (evt) => {
    evt.preventDefault();
    reset();
});
