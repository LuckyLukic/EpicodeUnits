
// COSTANTI BOTTONI
const btnCrea = document.querySelector(".crea") as HTMLButtonElement;
const btnMostra = document.querySelector(".mostra") as HTMLButtonElement;
const btnCerca = document.querySelector(".cerca") as HTMLButtonElement;
const btnInvio = document.querySelectorAll(".invioForm");
const btnReset = document.querySelectorAll(".resetForm");
const btnRitorna = document.querySelector(".ritorna") as HTMLButtonElement;

// COSTANTI SEZIONI/CONTENITORI
const sectionClienti = document.querySelector(".listaClienti") as HTMLElement | null;
const divUsersContainer = document.querySelector(".usersContainer") as HTMLElement | null;
const sectionForm = document.querySelector(".formSection") as HTMLElement | null;
const sectionRicerca = document.querySelector(".cercaId") as HTMLFormElement;
const divSelectedUser = document.querySelector(".selectedUser") as HTMLElement | null;
const buttonsForm = document.querySelector(".buttonsFormSingleUser") as HTMLElement | null;

// COSTANTE FORM
const formDati = document.querySelector(".singleForm") as HTMLFormElement;
const formRicerca = document.querySelector(".ricercaForm") as HTMLFormElement;

// ARRAY DI CONTROLLO DATABASE
let dataArray: {name:string, surname:string, age:number, address:string, email:string, id:number} [] = [];

// COSTANTE API E REGEX
const url = "https://647214cc6a9370d5a41b0246.mockapi.io/users/";
const regex:RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// INTERFACCIA DATI IMPRESCINDIBILI UTENTE
interface UtenteSingolo {
    name:string;
    surname:string;
    age:number;
}

// IMPLEMENTAZIONE INTERFACCIA SU CLASSE CON PROFILAZIONE EXTRA E METODI PER MODIFICARE I PARAMETRI
class NewUser implements UtenteSingolo{
     address:string;
     email:string
        constructor (public name:string, public surname:string, public age:number, _address:string, _email:string) {
            this.address=_address;
            this.email=_email;
        }

        // changeName(newName:string):void {
        //     this.name = newName
        // }

        // changeSurname(newSurname:string):void {
        //     this.surname = newSurname
        // }

        // changeAge(newAge:number):void {
        //     this.age = newAge
        // }

        // changeAddress(newAddress:string):void {
        //     this.name = newAddress
        // }
        
        // changeEmail(newEmail:string):void {
        //     this.email = newEmail
        // }

}
 

    //  BOTTONE INVIO FORM NUOVO UTENTE CON FUNZIONE ASINCRONA E SEMPLICE CONTROLLO DEL FORM: ASPETTA LA RISOLUZIONE DEL POST PER RIAVERE IL DATABASE AGGIORNATO 

     btnInvio[0].addEventListener("click", async ():Promise <any> => {
        // COSTANTI INPUT DEL FORM
        const inputNome = document.getElementById("name") as HTMLInputElement | null;
        const inputCognome = document.getElementById("surname") as HTMLInputElement | null;
        const inputEta = document.getElementById("age") as HTMLInputElement | null;
        const inputIndirizzo = document.getElementById("address") as HTMLInputElement | null;
        const inputEmail = document.getElementById("email") as HTMLInputElement | null;

        // CREAZIONE NUOVO UTENTE DALLA CLASSE
        const user = new NewUser (inputNome!.value, inputCognome!.value, +inputEta!.value, inputIndirizzo!.value, inputEmail!.value)

        // SEMPLICE CONTROLLO DEL FORM
        if (inputNome!.value !== "" && inputCognome!.value !== "" && inputEta!.value !== "" && inputIndirizzo!.value !== "" && inputEmail!.value !== "" && inputEmail!.value.match(regex) && +inputEta!.value != 0) {
        
          await postMethod(user);

        } else if(+inputEta!.value <= 0 || +inputEta!.value >= 100) {
            alert ("please your age must be between 1 and 99")
        } else if(!inputEmail!.value.match(regex)) {
            alert ("email format incorrect")
        } else { alert ("fields can't be empty")}
       
        btnRitorna.classList.add("noShow");
        landing()
     })

    // BOTTONE INVIO GET RICERCA UTENTE SINGOLO

     btnInvio[1].addEventListener("click", async ():Promise <any> => {
    
      const inputId = document.getElementById("ricercaID") as HTMLInputElement | null;
      
      try {
      if (inputId!.value === ""){
        alert ("please fill the field")
      } else {

        const myFetch = await fetch(url+inputId!.value)
       
        if (!myFetch.ok || !myFetch) {
          alert ("id non trovato")
          inputId!.value = "";
          throw new Error ("json non eseguito")
        } 

        const myJson = await myFetch.json()

        inputId!.value = "";
        buttonsForm?.classList.add("noShow")
        divSelectedUser?.classList.remove("noShow")
        divSelectedUser!.innerHTML = "";   
        divSelectedUser!.innerHTML = `<div class="singleUser">
        <div>
          <p><bold>NOME:</bold></p>
          <p>${myJson.name}</p>
        </div>
        <div>
          <p><bold>COGNOME:</bold></p>
          <p>${myJson.surname}</p>
        </div>
        <div>
          <p><bold>ETA':</bold></p>
          <p>${myJson.age}</p>
        </div>
        <div>
          <p><bold>ADDRESS:</bold></p>
          <p>${myJson.address}</p>
        </div>
        <div>
          <p><bold>EMAIL:</bold></p>
          <p>${myJson.email}</p>
        </div>
        <div>
          <p><bold>ID:</bold></p>
          <p>${myJson.id}</p>
        </div>
        <button type="button" class="clear" onclick="clearContent()">CLEAR</button>
      </div>`
      }
    }
          catch (error){
              console.error ("fetch non eseguita")
            }
   })

    
    //  BOTTONI RESET DEL FORM NUOVO USER E RICERCA

     btnReset[0].addEventListener("click", ():void => {
      formDati.reset()
     })

     btnReset[1].addEventListener("click", ():void => {
      formRicerca.reset()
     })

    
    //  BOTTONE RITORNA ALLA MAINPAGE

    btnRitorna.addEventListener("click", ():void => {
      sectionForm?.classList.add("noShow");
      btnRitorna?.classList.add("noShow");
     })


    //  BOTTONE PER FAR APPARIRE IL FORM DI CREAZIONE UTENTE

     btnCrea.addEventListener("click", ():void => {

        sectionClienti?.classList.add("noShow");
        sectionForm?.classList.remove("noShow");
        sectionRicerca.classList.add("noShow")
       
        if (dataArray.length !== 0) {
          btnRitorna.classList.add("noShow");
        } else {
          btnRitorna.classList.remove("noShow");
        }     
     })

    //  BOTTONE PER FAR APPARIRE A SCHERMO TUTTO IL DATABASE

     btnMostra.addEventListener("click", ():void => {

        sectionForm?.classList.add("noShow");
        sectionClienti?.classList.remove("noShow");
        sectionRicerca?.classList.add("noShow")
        divUsersContainer!.innerHTML = "";

        for (let i of dataArray) { 
            divUsersContainer!.innerHTML += `<div class="singleUser">
            <div>
              <p><bold>NOME:</bold></p>
              <p>${i.name}</p>
            </div>
            <div>
              <p><bold>COGNOME:</bold></p>
              <p>${i.surname}</p>
            </div>
            <div>
              <p><bold>ETA':</bold></p>
              <p>${i.age}</p>
            </div>
            <div>
              <p><bold>ADDRESS:</bold></p>
              <p>${i.address}</p>
            </div>
            <div>
              <p><bold>EMAIL:</bold></p>
              <p>${i.email}</p>
            </div>
            <div>
              <p><bold>ID:</bold></p>
              <p>${i.id}</p>
            </div>
            <button type="button" class="delete" onclick="deleteMethod(${i.id})">DELETE</button>
          </div>`
        }
     })

    //  BOTTONE CERCA

     btnCerca.addEventListener("click", ():void => {
      
      sectionClienti?.classList.add("noShow");
      sectionForm?.classList.add("noShow");
      sectionRicerca?.classList.remove("noShow")
     })

    //  BOTTONE CLEAR

     const clearContent = ():void => {
      divSelectedUser!.innerHTML = "";
      divSelectedUser?.classList.add("noShow")
      buttonsForm?.classList.remove("noShow")
     }

      // METODI

      // GET METHOD PER PRENDERE IL DATABASE

      const landing = async ():Promise <any> => {
        try{
            const myFetch = await fetch (url);

            if (!myFetch.ok) {
                throw new Error ("json non letto")
            }

            const myJson = await myFetch.json();
        //  CONTROLLO SE IL DATABASE E' VUOTO O MENO PER CONTROLLARE I BOTTONI DA FAR APPARIRE ED AGGIORNARE L'ARRAY DI CONTROLLO
            if (myJson.length === 0) {
                btnMostra.classList.add("noShow");
                btnCerca.classList.add("noShow");
                sectionClienti?.classList.add("noShow")
                // RISPECIFICO ARRAY VUOTO PER SVUOTARLO COMPLETAMENTE QUALORE ELIMINASSI ANCHE L'ULTIMO ELEMENTO DEL DATABASE
                dataArray = []
            } else {
                  btnMostra.classList.remove("noShow");
                  btnCerca.classList.remove("noShow")
                  dataArray = [];
                  myJson.forEach((ele:any) => {
                  dataArray.push(ele)
            });
            }

        } catch (error) {
            console.error ("fetch non andata a buon fine")
        }
     }

     // POST METHOD PER AGGIORNARE IL DATABASE

     const postMethod = async (utenza:unknown):Promise <any> => {
      try{
          const myFetch = await fetch (url, {
              method:"POST",
              body: JSON.stringify(utenza),
              headers: {
                  "Content-type": "application/json"
              }
          })

          if (!myFetch.ok) {
              throw new Error ("dati non salvati")
          } else {
            // AVVERTO CHE I DATI SONO STATI SALVATI CORRETTAMENTE, RESETTO IL FORM E TORNO ALLA "HOME"
          alert ("dati salvati correttamente")
          formDati.reset()
          sectionForm?.classList.add("noShow");
          }
      }   
      catch (error) {
          console.error ("fetch non andata a buon fine")
      }
   }

    //  DELETE METHOD: MI ACCERTO CHE IL DELETE SIA ANDATO A BUON FINE PER CONFERMARE LA MODIFICA, RICHIAMARE IL DATABASE AGGIORNATO E RIPOPOLARE LA PAGINA

     const deleteMethod = async(ids:number):Promise <any> => {
        try {
        const myFetch = await fetch (url+ids, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'},
        })
        if (!myFetch.ok) {
            throw new Error ("fetch non funzionante")
        } 
            await landing()

            alert("utente canellato")

            divUsersContainer!.innerHTML = "";

        for (let i of dataArray) { 
            divUsersContainer!.innerHTML += `<div class="singleUser">
            <div>
              <p><bold>NOME:</bold></p>
              <p>${i.name}</p>
            </div>
            <div>
              <p><bold>COGNOME:</bold></p>
              <p>${i.surname}</p>
            </div>
            <div>
              <p><bold>ETA':</bold></p>
              <p>${i.age}</p>
            </div>
            <div>
              <p><bold>ADDRESS:</bold></p>
              <p>${i.address}</p>
            </div>
            <div>
              <p><bold>EMAIL:</bold></p>
              <p>${i.email}</p>
            </div>
            <div>
              <p><bold>ID:</bold></p>
              <p>${i.id}</p>
            </div>
            <button type="button" class="delete" onclick="deleteMethod(${i.id})">DELETE</button>
          </div>`
     } 
    }
    catch(error) {
        console.error ("Fetch non andata a buon fine")
     }
    }

    // ONLOAD DATABASE

     window.onload = ():void => {
        landing();
     } 




