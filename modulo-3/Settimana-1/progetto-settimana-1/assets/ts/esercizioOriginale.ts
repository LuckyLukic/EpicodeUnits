interface Mobile {
    credito: number;
    numeroChiamate: number;

    ricarica(n:number):void;
    chiamata(n:number):void;
    numero404(n:number):number;
    getNumeroChiamate(n:number):number;
    azzeraChiamate(n:number):void;
}

class Utente implements Mobile {
    
    constructor (public credito:number, public numeroChiamate:number) {

    }

    ricarica(n:number):void {
        this.credito += n
        console.log(`la ricarica e' di ${n} Euro ed il credito totale e' di ${this.credito}`)
    }

    chiamata(n:number):void {
        let minuti = Math.floor(n / 60);
        let secondi = n % 60;
        let costoChiamata = Number((minuti * 0.20).toFixed(2));
        this.credito -= costoChiamata;
        
        console.log(`la chiamata e' durata ${minuti}:${secondi} minuti ed il cost chiamata e' di ${costoChiamata} Euro`);
    }

    numero404(numero:number):number {
        return  numero;
    }

    getNumeroChiamate(numero:number):number {
        return numero;
    }

    azzeraChiamate(number:number):void {
        this.numeroChiamate = number;
        console.log(`il contatore delle chiamate è stato settato a ${this.numeroChiamate}`);
    }
}

console.log("******UTENTE1*******")

const utente1 = new Utente (35, 7);
utente1.ricarica(50);
utente1.chiamata(280);
console.log(utente1.numero404(utente1.credito));
console.log(utente1.getNumeroChiamate(utente1.numeroChiamate));
utente1.azzeraChiamate(0);

console.log("******UTENTE2*******")

const utente2 = new Utente (20,23);
utente2.ricarica(70);
utente2.chiamata(426);
console.log(utente2.numero404(utente2.credito));
console.log(utente2.getNumeroChiamate(utente2.numeroChiamate));
utente2.azzeraChiamate(0);

console.log("******UTENTE3*******")

const utente3 = new Utente (100, 19);
utente3.ricarica(25);
utente3.chiamata(579);
console.log(utente3.numero404(utente3.credito));
console.log(utente3.getNumeroChiamate(utente3.numeroChiamate));
utente3.azzeraChiamate(0);

