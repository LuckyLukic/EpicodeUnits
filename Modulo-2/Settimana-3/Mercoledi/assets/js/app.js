const url = "https://striveschool-api.herokuapp.com/books";
const riga = document.querySelector(".riga");

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
        </div>
      </div>
      </div>`;
      }
    })
    .catch((reject) => console.log(reject));
};

function rimuovi(evt) {
  evt.target.closest(".cardContainer").remove();
}
