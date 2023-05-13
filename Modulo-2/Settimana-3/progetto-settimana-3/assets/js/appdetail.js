const url = "https://striveschool-api.herokuapp.com/api/product/";
const urlId = new URLSearchParams(location.search).get("id");
const riga = document.querySelector(".product-row");



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
        riga.innerHTML = `<div class="card-container col-8 d-flex justify-content-center">
        <div class="card">
        <img src="${productDetail.imageUrl}" class="card-img-top w-100 object-fit-cover" alt="card-image ">
        <div class="card-body">
          <h5> NAME:${productDetail.name}</h5>
          <h5> PRICE: $ ${productDetail.price} </h5>
          <p >BRAND: ${productDetail.brand}</p>
          <p >DESCRIPTION:${productDetail.description}</p>
          <div class="cardButtons-container d-flex justify-content-between" >
          <a href="form.html?id=${productDetail._id} " class="btn btn-primary btn-modifica">MODIFICA</a>
          <a href="index.html" class="btn btn-primary btn-modifica">TORNA INDIETRO</a>
          </div>
        </div >
      </div >
      </div > `


    } catch (error) {
        console.error(error.message);
    }
}

window.onload = () => {
    retrieveSingleProduct()

}