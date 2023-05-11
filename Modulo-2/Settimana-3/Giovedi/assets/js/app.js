const urlDog = "https://api.pexels.com/v1/search?query=dog";
const urlCat = "https://api.pexels.com/v1/search?query=cat";
const riga = document.querySelector(".row-pictures");
const loadImageBtn = document.querySelector(".btn-primary");
const loadSecondaryBtn = document.querySelector(".btn-secondary");
const formBtn = document.querySelector(".form-btn");
const formSearch = document.querySelector(".form-control");
const form = document.querySelector("form");

async function caricamentoDog() {
  try {
    const response = await fetch(urlDog, {
      headers: {
        Authorization:
          "oXY0dsaCTRQYAPLQCt4caa2ePtwQGjEi1fMtFWWrUk5RCnidrFS3ySQT",
      },
    });

    const retriveJson = await response.json();
    console.log(retriveJson);

    sessionStorage.setItem("saveDog", JSON.stringify(retriveJson));
  } catch (error) {
    console.log(error.message);
  }
}

async function caricamentoCat() {
  try {
    const response = await fetch(urlCat, {
      headers: {
        Authorization:
          "oXY0dsaCTRQYAPLQCt4caa2ePtwQGjEi1fMtFWWrUk5RCnidrFS3ySQT",
      },
    });

    const retriveJson = await response.json();
    console.log(retriveJson);

    sessionStorage.setItem("saveCat", JSON.stringify(retriveJson));
  } catch (error) {
    console.log(error.message);
  }
}

async function caricamentoSearch() {
  searchValue = formSearch.value.toLowerCase();
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${searchValue}`,
      {
        headers: {
          Authorization:
            "oXY0dsaCTRQYAPLQCt4caa2ePtwQGjEi1fMtFWWrUk5RCnidrFS3ySQT",
        },
      }
    );

    const retriveJson = await response.json();
    console.log(retriveJson);

    sessionStorage.setItem(`save${searchValue}`, JSON.stringify(retriveJson));
  } catch (error) {
    console.log(error.message);
  }
}

loadImageBtn.addEventListener("click", (evt) => {
  evt.preventDefault;
  const parseDog = JSON.parse(sessionStorage.getItem("saveDog"));
  const photos = parseDog.photos;
  riga.innerHTML = "";
  for (let i of photos) {
    riga.innerHTML += `<div class="card-wrapper col-6 col-md-4 col-lg-3 mb-4"><div class="card h-100">
  <img src="${i.src.medium}" class="card-img-top" alt="immagine">
  <div class="card-body">
    <h5 class="card-title">${i.id}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button class="btn btn-primary btn-hide" onclick = "hide(event)" > HIDE</button>
  </div>
</div>
</div>`;
  }
});

loadSecondaryBtn.addEventListener("click", (evt) => {
  evt.preventDefault;
  const parseCat = JSON.parse(sessionStorage.getItem("saveCat"));
  const photos = parseCat.photos;
  riga.innerHTML = "";
  for (let i of photos) {
    riga.innerHTML += `<div class="card-wrapper col-6 col-md-4 col-lg-3 mb-4"><div class="card h-100">
    <img src="${i.src.medium}" class="card-img-top" alt="immagine">
    <div class="card-body">
      <h5 class="card-title">${i.id}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-primary btn-hide" onclick = "hide(event)" >HIDE </button>
    </div>
  </div>
  </div>`;
  }
});

formBtn.addEventListener("click", (evt) => {
  evt.preventDefault;
  caricamentoSearch();
  searchValue = formSearch.value.toLowerCase();

  const parseAnimal = JSON.parse(sessionStorage.getItem(`save${searchValue}`));
  const photos = parseAnimal.photos;
  riga.innerHTML = "";
  form.reset();
  for (let i of photos) {
    riga.innerHTML += `<div class="card-wrapper col-6 col-md-4 col-lg-3 mb-4"><div class="card h-100">
    <img src="${i.src.medium}" class="card-img-top" alt="immagine">
    <div class="card-body">
      <h5 class="card-title">${i.id}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button class="btn btn-primary btn-hide" onclick = "hide(event)" >HIDE </button>
    </div>
  </div>
  </div>`;
  }
});

const hide = (evt) => {
  evt.target.closest(".card-wrapper").remove();
};

window.onload = () => {
  caricamentoDog();
  caricamentoCat();
};
