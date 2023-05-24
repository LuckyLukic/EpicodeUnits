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
        return `e' stato depositato ${cifra} ed il saldo attuale e' di ${saldo}$`;
    }
    oneWithDraw(qty) {
        let saldo = this.saldoAttuale - qty;
        this.saldoAttuale = saldo;
        return `E' stato prelevato ${qty} ed il saldo attuale e' di ${saldo}$`;
    }
    twoDeposit(cifra) {
        let saldo = this.saldoAttuale + cifra;
        this.saldoAttuale = saldo;
        return `e' stato depositato ${cifra} ed il saldo attuale e' di ${saldo}$`;
    }
    twoWithDraw(qty) {
        let saldo = this.saldoAttuale - qty;
        this.saldoAttuale = saldo;
        return `E' stato prelevato ${qty} ed il saldo attuale e' di ${saldo}$`;
    }
}
const primoFiglio = new Figlio(0, 0);
console.log(primoFiglio.oneDeposit(1000));
console.log(primoFiglio.oneWithDraw(400));
console.log(primoFiglio.oneDeposit(800));
console.log(primoFiglio.oneDeposit(500));
