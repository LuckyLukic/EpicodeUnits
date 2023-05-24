"use strict";
class Ccorrente {
    constructor(_ammount, _saldo) {
        this.balanceInit = _ammount;
        this.saldoAttuale = _saldo;
    }
}
class Figlio extends Ccorrente {
    constructor(_ammount, _saldo) {
        super(_ammount, _saldo);
    }
    oneDeposit(cifra) {
        let saldo = this.saldoAttuale + cifra;
        this.saldoAttuale = saldo;
        return `sono stati depositati ${cifra}$ ed il saldo attuale e' di ${saldo}$`;
    }
    oneWithDraw(qty) {
        let saldo = this.saldoAttuale - qty;
        this.saldoAttuale = saldo;
        return `sono stati prelevati ${qty}$ ed il saldo attuale e' di ${saldo}$`;
    }
    twoDeposit(cifra) {
        let saldo = this.saldoAttuale + cifra;
        this.saldoAttuale = saldo;
        return `sono stati depositati ${cifra}$ ed il saldo attuale e' di ${saldo}$`;
    }
    twoWithDraw(qty) {
        let saldo = this.saldoAttuale - qty;
        this.saldoAttuale = saldo;
        return `sono stati prelevati ${qty}$ ed il saldo attuale e' di ${saldo}$`;
    }
}
class Madre extends Figlio {
    constructor(_ammount, _saldo, _interest) {
        super(_ammount, _saldo);
        this.addInterest = _interest;
    }
    // oneDeposit(cifra:number):string {
    //     let saldo = this.saldoAttuale + cifra
    //     this.saldoAttuale = saldo
    //     return `sono stati depositati ${cifra}$ ed il saldo attuale e' di ${saldo}$`
    // }
    // oneWithDraw(qty:number):string {
    //     let saldo = this.saldoAttuale - qty;
    //     this.saldoAttuale = saldo
    //     return `sono stati prelevati ${qty}$ ed il saldo attuale e' di ${saldo}$`
    // }
    // twoDeposit(cifra:number):string {
    //     let saldo = this.saldoAttuale + cifra
    //     this.saldoAttuale = saldo
    //     return `sono stati depositati ${cifra}$ ed il saldo attuale e' di ${saldo}$`
    // }
    // twoWithDraw(qty:number):string {
    //     let saldo = this.saldoAttuale - qty;
    //     this.saldoAttuale = saldo
    //     return `sono stati prelevati ${qty}$ ed il saldo attuale e' di ${saldo}$`
    // }
    interest() {
        let totalInterest = ((this.addInterest / 100) * this.saldoAttuale);
        let saldo = this.saldoAttuale - totalInterest;
        this.saldoAttuale = saldo;
        return `Gli interessi sono di ${totalInterest}$ ed il saldo attuale e' di ${saldo}$`;
    }
}
const primoFiglio = new Figlio(0, 0);
console.log(primoFiglio.oneDeposit(1000));
console.log(primoFiglio.oneWithDraw(400));
console.log(primoFiglio.oneDeposit(800));
console.log(primoFiglio.oneDeposit(500));
console.log("*********MADRE**********");
const madre = new Madre(0, 0, 10);
console.log(madre.oneDeposit(1000));
console.log(madre.oneWithDraw(400));
console.log(madre.oneDeposit(800));
console.log(madre.oneDeposit(500));
console.log(madre.interest());
