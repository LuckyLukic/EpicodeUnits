const url = "https://striveschool-api.herokuapp.com/books";
const riga = document.querySelector(".riga");
const rigaCarrello = document.querySelector(".list-row");
const listaArr = [];
const carrelloArr = [];

window.onload = () => {
  fetch(url)
    .then((resolve) => resolve.json())
    .then((ciclo) => {
      for (let i of ciclo) {
        riga.innerHTML += `<div class="cardContainer col-6 col-md-4 col-lg-3 mb-4 ">
        <div class="card h-100">
        <img src="${i.img}" class="card-img-top object-fit-contain" alt="book-picture">
        <div class="card-body">
          <h5 class="card-title">${i.title}</h5>
          <p class="card-text">${i.price}</p>
          <button href="#" class="btn btn-primary scarta" onclick = "rimuovi(event)" >Scarta</button>
          <button href="#" class="btn btn-secondary aggiungi" onclick = "add(event)" >Scarta</button>
        </div>
      </div>
      </div>`;
        listaArr.push(i);
      }
    })
    .then(() => {
      localStorage.setItem("carrello", JSON.stringify(listaArr));
    })
    .catch((reject) => console.log(reject));
};

// class Libro {
//   constructor(image, title, price) {
//     this.img = image;
//     this.title = title;
//     this.price = price;
//   }
// }

function rimuovi(evt) {
  evt.target.closest(".cardContainer").remove();
}

function add(evt) {
  let cardImage = evt.target.closest(".card").querySelector("img").src;
  console.log(cardImage);
  let cardTitle = evt.target
    .closest(".card")
    .querySelector(".card-title").innerHTML;
  let cardPrice = evt.target
    .closest(".card")
    .querySelector(".card-text").innerHTML;
  rigaCarrello.innerHTML = "";

  rigaCarrello.innerHTML;
}
