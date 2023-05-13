//DICHIARAZIONE VARIABILI

const createButton = document.querySelector(".create-button");
const updateButton = document.querySelector(".update-button");
const form = document.querySelector(".product-form");
const productArray = [];
const riga = document.querySelector(".product-row");
const modificaButton = document.querySelector(".btn-modifica");

// FUNZIONE GET PER AVERE IL L'INTERO DATABASE

async function retrieveDatabase() {
    const url = "https://striveschool-api.herokuapp.com/api/product";

    try {
        const newRequest = await fetch(url, {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDdjYjg4Zjc0MDAwMTQyODc0YTAiLCJpYXQiOjE2ODM4ODM5ODAsImV4cCI6MTY4NTA5MzU4MH0.Hfl_Ml-RXvIT3fAAOJjDLJBqjFZ_S5D3-bRyI9AYkuo",
            },
        });

        if (!newRequest.ok) {
            throw new Error("no product retrived from database");
        }

        const updateDatabase = await newRequest.json();

        // POPOLO UN ARRAY PER UTILIZZARLO COME DATABASE INTERNO (AVREI POTUTO UTILIZZARE IL JSON DIRETTAMENTE E POPOLARE ALL'INTERNO DI QUESTA STESSA FUNZIONE)

        productArray.push(...updateDatabase);

    } catch (error) {
        console.log(error.message);
    }
}


// FUNZIONE PER GENERARE LE CARDS

const population = () => {
    riga.innerHTML = "";
    for (let i of productArray) {
        riga.innerHTML += `<div class="card-container col-6 col-md-4 col-lg-3">
        <div class="card h-100">
        <img src="${i.imageUrl}" class="card-img-top w-100 object-fit-cover" alt="card-image ">
        <div class="card-body">
          <h5> NAME:${i.name}</h5>
          <h5> PRICE: $ ${i.price} </h5>
          <p >BRAND: ${i.brand}</p>
          <p >DESCRIPTION:${i.description}</p>
          <div class="cardButtons-container d-flex justify-content-between" >
          <a href="form.html?id=${i._id} " class="btn btn-primary btn-modifica">MODIFICA</a>
          <a href="detail.html?id=${i._id} " class="btn btn-primary btn-modifica">DETAGLIO</a>
          </div>
        </div >
      </div >
      </div > `
    }
};

// FUNZIONE ASINCRONA, LA POPOLAZIONE AVVIENE SOLO DOPO AVER POPOLATO L'ARRAY

window.onload = async () => {
    await retrieveDatabase()
    population()

};


