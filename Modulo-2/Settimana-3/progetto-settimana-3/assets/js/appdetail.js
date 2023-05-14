// DICHIARAZIONE VARIABILI

const url = "https://striveschool-api.herokuapp.com/api/product/";
const urlId = new URLSearchParams(location.search).get("id");
const riga = document.querySelector(".product-row");


// FUNZIONE ASINCRONA PER RICEVERE I DATI DEL SINGOLO PRODOTTO E CREARE LA CARD

async function retrieveSingleProduct() {

    try {
        const newRequest = await fetch(`${url}${urlId}`, {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDdjYjg4Zjc0MDAwMTQyODc0YTAiLCJpYXQiOjE2ODM4ODM5ODAsImV4cCI6MTY4NTA5MzU4MH0.Hfl_Ml-RXvIT3fAAOJjDLJBqjFZ_S5D3-bRyI9AYkuo",
            },
        });

        if (!newRequest.ok) {
            throw new Error("no product retrived from database");
        }

        const productDetail = await newRequest.json();

        riga.innerHTML = "";
        riga.innerHTML = `<div class=" row d-flex justify-content-center g-4 card-detail">

        <div class="card-container cardContainer-detail col-12 col-md-6 d-flex justify-content-center">
        <div class="card">
        <img src="${productDetail.imageUrl}" class="card-img-top w-100 object-fit-cover" alt="card-image ">
        <div class="card-body d-flex flex-column">
          <h5> NAME:${productDetail.name}</h5>
          <h5> PRICE: $ ${productDetail.price} </h5>
          <h5 >BRAND: ${productDetail.brand}</h5>
          <div class="cardButton-detail d-flex justify-content-end mt-auto" >
          <a href="index.html" class="btn btn-primary button-detail">TORNA INDIETRO</a>
          </div>
        </div >
      </div >

      </div> 
      <div class="product-detail col-12 col-md-6">
      <h3>DETTAGLI PRODOTTO</h3>
      <p>${productDetail.description}</p>
      </div>

      </div>`


    } catch (error) {
        console.error(error.message);
    }
}

// LANCIO LA FUNZIONE AL CARICAMENTO

window.onload = () => {
    retrieveSingleProduct()

}

/* <a href="form.html?id=${productDetail._id}$ " class="btn btn-primary btn-modifica">MODIFICA</a> */ 