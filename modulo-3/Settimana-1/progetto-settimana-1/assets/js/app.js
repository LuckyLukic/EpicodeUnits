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
// COSTANTI BOTTONI
const btnCrea = document.querySelector(".crea");
const btnMostra = document.querySelector(".mostra");
const btnCerca = document.querySelector(".cerca");
const btnInvio = document.querySelectorAll(".invioForm");
const btnReset = document.querySelectorAll(".resetForm");
const btnRitorna = document.querySelector(".ritorna");
// COSTANTI SEZIONI/CONTENITORI
const sectionClienti = document.querySelector(".listaClienti");
const divUsersContainer = document.querySelector(".usersContainer");
const sectionForm = document.querySelector(".formSection");
const sectionRicerca = document.querySelector(".cercaId");
const divSelectedUser = document.querySelector(".selectedUser");
const buttonsForm = document.querySelector(".buttonsFormSingleUser");
// COSTANTE FORM
const formDati = document.querySelector(".singleForm");
const formRicerca = document.querySelector(".ricercaForm");
// ARRAY DI CONTROLLO DATABASE
let dataArray = [];
// COSTANTE API E REGEX
const url = "https://647214cc6a9370d5a41b0246.mockapi.io/users/";
const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// IMPLEMENTAZIONE INTERFACCIA SU CLASSE CON PROFILAZIONE EXTRA E METODI PER MODIFICARE I PARAMETRI
class NewUser {
    constructor(name, surname, age, _address, _email) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.address = _address;
        this.email = _email;
    }
    changeName(newName) {
        this.name = newName;
    }
    changeSurname(newSurname) {
        this.surname = newSurname;
    }
    changeAge(newAge) {
        this.age = newAge;
    }
    changeAddress(newAddress) {
        this.name = newAddress;
    }
    changeEmail(newEmail) {
        this.email = newEmail;
    }
}
//  BOTTONE INVIO FORM NUOVO UTENTE CON FUNZIONE ASINCRONA E SEMPLICE CONTROLLO DEL FORM: ASPETTA LA RISOLUZIONE DEL POST PER RIAVERE IL DATABASE AGGIORNATO 
btnInvio[0].addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    // COSTANTI INPUT DEL FORM
    const inputNome = document.getElementById("name");
    const inputCognome = document.getElementById("surname");
    const inputEta = document.getElementById("age");
    const inputIndirizzo = document.getElementById("address");
    const inputEmail = document.getElementById("email");
    // CREAZIONE NUOVO UTENTE DALLA CLASSE
    const user = new NewUser(inputNome.value, inputCognome.value, +inputEta.value, inputIndirizzo.value, inputEmail.value);
    // SEMPLICE CONTROLLO DEL FORM
    if (inputNome.value !== "" && inputCognome.value !== "" && inputEta.value !== "" && inputIndirizzo.value !== "" && inputEmail.value !== "" && inputEmail.value.match(regex) && +inputEta.value != 0) {
        yield postMethod(user);
    }
    else if (+inputEta.value === 0 || +inputEta.value > 100) {
        alert("please your age must be between 1 and 99");
    }
    else if (!inputEmail.value.match(regex)) {
        alert("email format incorrect");
    }
    else {
        alert("fields can't be empty");
    }
    btnRitorna.classList.add("noShow");
    landing();
}));
// BOTTONE INVIO GET RICERCA UTENTE SINGOLO
btnInvio[1].addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const inputId = document.getElementById("ricercaID");
    try {
        if (inputId.value === "") {
            alert("please fill the field");
        }
        else {
            const myFetch = yield fetch(url + inputId.value);
            if (!myFetch.ok || !myFetch) {
                alert("id non trovato");
                inputId.value = "";
                throw new Error("json non eseguito");
            }
            const myJson = yield myFetch.json();
            inputId.value = "";
            buttonsForm === null || buttonsForm === void 0 ? void 0 : buttonsForm.classList.add("noShow");
            divSelectedUser === null || divSelectedUser === void 0 ? void 0 : divSelectedUser.classList.remove("noShow");
            divSelectedUser.innerHTML = "";
            divSelectedUser.innerHTML = `<div class="singleUser">
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
      </div>`;
        }
    }
    catch (error) {
        console.error("fetch non eseguita");
    }
}));
//  BOTTONI RESET DEL FORM NUOVO USER E RICERCA
btnReset[0].addEventListener("click", () => {
    formDati.reset();
});
btnReset[1].addEventListener("click", () => {
    formRicerca.reset();
});
//  BOTTONE RITORNA ALLA MAINPAGE
btnRitorna.addEventListener("click", () => {
    sectionForm === null || sectionForm === void 0 ? void 0 : sectionForm.classList.add("noShow");
    btnRitorna.classList.add("noShow");
});
//  BOTTONE PER FAR APPARIRE IL FORM DI CREAZIONE UTENTE
btnCrea.addEventListener("click", () => {
    sectionClienti === null || sectionClienti === void 0 ? void 0 : sectionClienti.classList.add("noShow");
    sectionForm === null || sectionForm === void 0 ? void 0 : sectionForm.classList.remove("noShow");
    sectionRicerca.classList.add("noShow");
    if (dataArray.length !== 0) {
        btnRitorna.classList.add("noShow");
    }
    else {
        btnRitorna.classList.remove("noShow");
    }
});
//  BOTTONE PER FAR APPARIRE A SCHERMO TUTTO IL DATABASE
btnMostra.addEventListener("click", () => {
    sectionForm === null || sectionForm === void 0 ? void 0 : sectionForm.classList.add("noShow");
    sectionClienti === null || sectionClienti === void 0 ? void 0 : sectionClienti.classList.remove("noShow");
    sectionRicerca === null || sectionRicerca === void 0 ? void 0 : sectionRicerca.classList.add("noShow");
    divUsersContainer.innerHTML = "";
    for (let i of dataArray) {
        divUsersContainer.innerHTML += `<div class="singleUser">
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
          </div>`;
    }
});
//  BOTTONE CERCA
btnCerca.addEventListener("click", () => {
    sectionClienti === null || sectionClienti === void 0 ? void 0 : sectionClienti.classList.add("noShow");
    sectionForm === null || sectionForm === void 0 ? void 0 : sectionForm.classList.add("noShow");
    sectionRicerca === null || sectionRicerca === void 0 ? void 0 : sectionRicerca.classList.remove("noShow");
});
//  BOTTONE CLEAR
const clearContent = () => {
    divSelectedUser.innerHTML = "";
    divSelectedUser === null || divSelectedUser === void 0 ? void 0 : divSelectedUser.classList.add("noShow");
    buttonsForm === null || buttonsForm === void 0 ? void 0 : buttonsForm.classList.remove("noShow");
};
// METODI
// GET METHOD PER PRENDERE IL DATABASE
const landing = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myFetch = yield fetch(url);
        if (!myFetch.ok) {
            throw new Error("json non letto");
        }
        const myJson = yield myFetch.json();
        //  CONTROLLO SE IL DATABASE E' VUOTO O MENO PER CONTROLLARE I BOTTONI DA FAR APPARIRE ED AGGIORNARE L'ARRAY DI CONTROLLO
        if (myJson.length === 0) {
            btnMostra.classList.add("noShow");
            btnCerca.classList.add("noShow");
            sectionClienti === null || sectionClienti === void 0 ? void 0 : sectionClienti.classList.add("noShow");
            // RISPECIFICO ARRAY VUOTO PER SVUOTARLO COMPLETAMENTE QUALORE ELIMIASSI ANCHE L'ULTIMO ELEMENTO DEL DATABASE
            dataArray = [];
        }
        else {
            btnMostra.classList.remove("noShow");
            btnCerca.classList.remove("noShow");
            dataArray = [];
            myJson.forEach((ele) => {
                dataArray.push(ele);
            });
        }
    }
    catch (error) {
        console.error("fetch non andata a buon fine");
    }
});
// POST METHOD PER AGGIORNARE IL DATABASE
const postMethod = (utenza) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myFetch = yield fetch(url, {
            method: "POST",
            body: JSON.stringify(utenza),
            headers: {
                "Content-type": "application/json"
            }
        });
        if (!myFetch.ok) {
            throw new Error("dati non salvati");
        }
        else {
            // AVVERTO CHE I DATI SONO STATI SALVATI CORRETTAMENTE, RESETTO IL FORM E TORNO ALLA "HOME"
            alert("dati salvati correttamente");
            formDati.reset();
            sectionForm === null || sectionForm === void 0 ? void 0 : sectionForm.classList.add("noShow");
        }
    }
    catch (error) {
        console.error("fetch non andata a buon fine");
    }
});
//  DELETE METHOD: MI ACCERTO CHE IL DELETE SIA ANDATO A BUON FINE PER CONFERMARE LA MODIFICA, RICHIAMARE IL DATABASE AGGIORNATO E RIPOPOLARE LA PAGINA
const deleteMethod = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myFetch = yield fetch(url + ids, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        });
        if (!myFetch.ok) {
            throw new Error("fetch non funzionante");
        }
        yield landing();
        alert("utente canellato");
        divUsersContainer.innerHTML = "";
        for (let i of dataArray) {
            divUsersContainer.innerHTML += `<div class="singleUser">
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
          </div>`;
        }
    }
    catch (error) {
        console.error("Fetch non andata a buon fine");
    }
});
// ONLOAD DATABASE
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    landing();
});
