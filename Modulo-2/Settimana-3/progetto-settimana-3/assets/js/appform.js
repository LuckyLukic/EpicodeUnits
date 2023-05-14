
// CREAZIONI VARIABILI

const createButton = document.querySelector(".create-button");
const updateButton = document.querySelector(".update-button");
const deleteButton = document.querySelector(".delete-button")
const resetButton = document.querySelector(".erase-button")
const yesDeleteModal = document.querySelector(".delete-modal");
const yesResetModal = document.querySelector(".reset-modal");
const form = document.querySelector(".product-form");
const url = "https://striveschool-api.herokuapp.com/api/product/";
const urlId = new URLSearchParams(location.search).get("id");

// TUTTE LE FUNZIONI ASINCRONE NON FUNZIONANO SE METTO LE VARIABILI ALL'ESTERNO

// FUNZIONE PER RICHIAMARE UN SINGOLO PRODOTTO 

async function retrieveSingleProduct() {
    let productName = document.querySelector(".product-name")
    let productDescription = document.querySelector(".product-description")
    let productBrand = document.querySelector(".product-brand")
    let productImage = document.querySelector(".product-image")
    let productPrice = document.querySelector(".product-price")

    try {
        const newRequest = await fetch(`${url}${urlId}`, {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDdjYjg4Zjc0MDAwMTQyODc0YTAiLCJpYXQiOjE2ODM4ODM5ODAsImV4cCI6MTY4NTA5MzU4MH0.Hfl_Ml-RXvIT3fAAOJjDLJBqjFZ_S5D3-bRyI9AYkuo",
            },
        });

        if (!newRequest.ok) {
            alert("fail to update database!")
            throw new Error("no product retrived from database");
        }

        const updateDatabase = await newRequest.json();

        productName.value = updateDatabase.name
        productDescription.value = updateDatabase.description
        productBrand.value = updateDatabase.brand
        productImage.value = updateDatabase.imageUrl
        productPrice.value = updateDatabase.price


    } catch (error) {
        console.error(error.message);
    }
}

// FUNZIONE PER CREARE UN NUOVO PRODOTTO 

async function newProduct() {
    const productName = document.querySelector(".product-name").value;
    const productDescription = document.querySelector(
        ".product-description"
    ).value;
    const productBrand = document.querySelector(".product-brand").value;
    const productImage = document.querySelector(".product-image").value;
    const productPrice = document.querySelector(".product-price").value;

    const productTemplate = {
        name: productName, //REQUIRED
        description: productDescription, //REQUIRED
        brand: productBrand, //REQUIRED
        imageUrl: productImage, //REQUIRED
        price: productPrice, //REQUIRED
    };

    try {
        const newItem = await fetch(url, {
            method: "POST",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDdjYjg4Zjc0MDAwMTQyODc0YTAiLCJpYXQiOjE2ODM4ODM5ODAsImV4cCI6MTY4NTA5MzU4MH0.Hfl_Ml-RXvIT3fAAOJjDLJBqjFZ_S5D3-bRyI9AYkuo",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productTemplate),
        });

        if (!newItem.ok) {
            alert("fail to update database!")
            throw new Error("no product sent into database");
        } else {

            alert("nuovo prodotto creato")
        }
    } catch (error) {
        console.error(error.message);
    }
}

// FUNZIONE PER AGGIORNAR IL SINGOLO PRODOTTO

async function updateProduct() {
    const productName = document.querySelector(".product-name").value;
    const productDescription = document.querySelector(
        ".product-description"
    ).value;
    const productBrand = document.querySelector(".product-brand").value;
    const productImage = document.querySelector(".product-image").value;
    const productPrice = document.querySelector(".product-price").value;


    const productTemplate = {
        name: productName, //REQUIRED
        description: productDescription, //REQUIRED
        brand: productBrand, //REQUIRED
        imageUrl: productImage, //REQUIRED
        price: productPrice, //REQUIRED
    };

    try {
        const updatedItem = await fetch(`${url}${urlId}`, {
            method: "PUT",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDdjYjg4Zjc0MDAwMTQyODc0YTAiLCJpYXQiOjE2ODM4ODM5ODAsImV4cCI6MTY4NTA5MzU4MH0.Hfl_Ml-RXvIT3fAAOJjDLJBqjFZ_S5D3-bRyI9AYkuo",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productTemplate),
        });

        if (!updatedItem.ok) {
            alert("error in updating, retry!")
            throw new Error("no product sent to database");

        } else {

            alert("prodotto aggiornato")
        }

    } catch (error) {
        console.error(error.message);
    }
}

// FUNZIONE PER CANCELLARE UN SINGOLO PRODOTTO

async function deleteProduct() {

    try {
        const updatedItem = await fetch(`${url}${urlId}`, {
            method: "DELETE",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDdjYjg4Zjc0MDAwMTQyODc0YTAiLCJpYXQiOjE2ODM4ODM5ODAsImV4cCI6MTY4NTA5MzU4MH0.Hfl_Ml-RXvIT3fAAOJjDLJBqjFZ_S5D3-bRyI9AYkuo",
            },
        });

        if (!updatedItem.ok) {
            alert("database error, product not deleted!")
            throw new Error("no product sent to database");
        }

        alert("prodotto cancellato")

    } catch (error) {
        console.error(error.message);
    }
}


// FUNZIONALITA' BOTTONI

createButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    newProduct();

})

updateButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateProduct();
})

resetButton.addEventListener("click", (evt) => {
    evt.preventDefault();
})

deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
})

// CONTROLLI PER I MODALS SUI TSTI DELETE ED ERASE

yesResetModal.addEventListener("click", (evt) => {
    evt.preventDefault
    form.reset();
})

yesDeleteModal.addEventListener("click", (evt) => {
    evt.preventDefault
    deleteProduct()
    form.reset();
})

// CONTROLLO SE URL CON ID O NO PER SELEZIONE BOTTONI DA FARE APPARIRE E RICHIAMO DATI SINGOLO PRODOTTO

window.onload = () => {
    if (urlId) {
        retrieveSingleProduct()
        createButton.style.display = "none"

    } else {
        updateButton.style.display = "none"
        deleteButton.style.display = "none"
    }
}
