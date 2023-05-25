"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getsaldocapo() {
        let saldo = ((this.prezzoivainclusa * this.saldo) / 100);
        return saldo;
    }
    getacquistocapo() {
        let acquisto = (this.prezzoivainclusa - this.getsaldocapo());
        return acquisto;
    }
}
const newFetch = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const miaFetch = yield fetch("../starter/Abbigliamento.json");
        const mioJson = yield miaFetch.json();
        if (!miaFetch.ok) {
            throw new Error("json non disponibile");
        }
        for (let i of mioJson) {
            const capo = new Abbigliamento(i.id, i.codprod, i.collezione, i.capo, i.modello, i.quantita, i.colore, i.prezzoivaesclusa, i.prezzoivainclusa, i.disponibile, i.saldo);
            console.log(capo.getsaldocapo());
            console.log(capo.getacquistocapo());
        }
    }
    catch (error) {
        console.error("fetch non eseguita");
    }
});
newFetch();
