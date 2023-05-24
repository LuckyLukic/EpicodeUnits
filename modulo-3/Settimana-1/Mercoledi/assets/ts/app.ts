// bottoni
const btnProfessionista = document.querySelector(".professionista") as HTMLButtonElement;
const btnArtigiano = document.querySelector(".artigiano") as HTMLButtonElement;
const btnCommerciante = document.querySelector(".commerciante") as HTMLButtonElement;
const btnReset = document.querySelector(".reset") as HTMLButtonElement;
// input
const redditoLordo = document.getElementById("redditoLordo") as HTMLInputElement | null;
const utileTasse = document.getElementById("utileTasse") as HTMLInputElement | null;
const tasseInps = document.getElementById("tasseInps") as HTMLInputElement | null;
const tasseIrpef = document.getElementById("tasseIrpef") as HTMLInputElement | null;
const redditoNetto = document.getElementById("redditoNetto") as HTMLInputElement | null;

class Redditometro {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
    constructor (_redditoannuolordo:number, _codredd:number) {
        this.codredd = _codredd
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = 0.2623;
        this.tasseirpef = 0.15 ;
    }

    getUtileTasse():number {
        let utileTasse = Number(((this.redditoannuolordo * this.codredd)).toFixed(2));
        return utileTasse;
    }

    getTasseInps():number {
        let tasseInps = Number(((this.getUtileTasse() * this.tasseinps)).toFixed(2));
        return tasseInps;
    }

    getTasseIrpef():number {
        let tasseIrpef = Number(((this.getUtileTasse() * this.tasseirpef)).toFixed(2));
        return tasseIrpef;
    }

    getRedditoAnnuoNetto():number {
        let redditoNetto = Number((this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())).toFixed(2));
        return redditoNetto
    }
}

class Artigiano extends Redditometro {
    constructor (_redditoannuolordo:number, _codredd:number = 0.67) {
    super (_redditoannuolordo, _codredd);
    }
}

class Commerciante extends Redditometro {
    constructor (_redditoannuolordo:number, _codredd:number = 0.40) {
    super (_redditoannuolordo, _codredd)
    this.codredd = 0.40;
    }
}

class Professionista extends Redditometro {
    constructor (_redditoannuolordo:number, _codredd:number = 0.78) {
    super (_redditoannuolordo, _codredd)
    }
}

btnProfessionista.addEventListener("click", (evt):void => {
    evt.preventDefault();
    let reddito =  parseInt(redditoLordo!.value);
    if (reddito !== undefined) {
    let nuovoUtente = new Professionista (reddito);
    utileTasse!.value = `${nuovoUtente.getUtileTasse()}`;
    tasseInps!.value = `${nuovoUtente.getTasseInps()}`
    tasseIrpef!.value = `${nuovoUtente.getTasseIrpef()}`;
    redditoNetto!.value = `${nuovoUtente.getRedditoAnnuoNetto()}`
    }
});

btnArtigiano.addEventListener("click", (evt):void => {
    evt.preventDefault();
    let reddito =  parseInt(redditoLordo!.value);
    if ( reddito !== undefined) {
    let nuovoUtente = new Artigiano (reddito);
    utileTasse!.value = `${nuovoUtente.getUtileTasse()}`;
    tasseInps!.value = `${nuovoUtente.getTasseInps()}`
    tasseIrpef!.value = `${nuovoUtente.getTasseIrpef()}`;
    redditoNetto!.value = `${nuovoUtente.getRedditoAnnuoNetto()}`
    }
});

btnCommerciante.addEventListener("click", (evt):void => {
    evt.preventDefault();
    let reddito =  parseInt(redditoLordo!.value);
    if ( reddito !== undefined) {
    let nuovoUtente = new Commerciante (reddito);
    utileTasse!.value = `${nuovoUtente.getUtileTasse()}`;
    tasseInps!.value = `${nuovoUtente.getTasseInps()}`
    tasseIrpef!.value = `${nuovoUtente.getTasseIrpef()}`;
    redditoNetto!.value = `${nuovoUtente.getRedditoAnnuoNetto()}`
    }
});

const reset = ():void =>{
    // let input = document.querySelectorAll("input");
    // input.forEach(element => element.innerHTML = "")
    redditoLordo!.innerHTML = "";
    utileTasse!.innerHTML = "";
    tasseInps!.innerHTML = "";
    tasseIrpef!.innerHTML = "";
    redditoNetto!.innerHTML = "";
} 

btnReset.addEventListener("click", (evt):void => {
    evt.preventDefault();
    reset();
})




