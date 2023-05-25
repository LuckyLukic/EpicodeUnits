
class Abbigliamento {

    
 
    constructor (protected id:number, protected codprod:number, protected collezione:string, protected capo:string, protected modello:number, protected quantita:number, protected colore:string, protected prezzoivaesclusa:number, protected prezzoivainclusa:number, protected disponibile:string, protected saldo:number) {

    }

    getsaldocapo():number {
        let saldo:number = ((this.prezzoivainclusa*this.saldo)/100)
    return saldo
    }

    getacquistocapo():number {
        let acquisto:number = (this.prezzoivainclusa - this.getsaldocapo())
        return acquisto
    }
    }

const newFetch = async () => {
    try{
        const miaFetch = await fetch("../starter/Abbigliamento.json")
        
        const mioJson = await miaFetch.json();
        
        if (!miaFetch.ok) {
            throw new Error ("json non disponibile")
        }

        for (let i of mioJson) {
            const capo = new Abbigliamento (i.id, i.codprod, i.collezione, i.capo, i.modello, i.quantita,i.colore, i.prezzoivaesclusa, i.prezzoivainclusa, i.disponibile, i.saldo )
            console.log(capo.getsaldocapo())
            console.log(capo.getacquistocapo())
        }
    }
    catch (error) {
        console.error ("fetch non eseguita")
    }
}

newFetch()

