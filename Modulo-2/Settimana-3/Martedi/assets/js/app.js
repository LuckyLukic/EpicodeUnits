const form = document.querySelector("form");
const nameInput = document.querySelector("input");
const btnSave = document.getElementById("save");
const btnRemove = document.getElementById("remove");
const ulDati = document.getElementById("savedValues");
const span = document.querySelector("span");
const newArray = [];

let contatore = Number(sessionStorage.getItem("count"));

btnSave.addEventListener("click", function (evt) {
  evt.preventDefault();
  newArray.push(nameInput.value);
  localStorage.setItem("name", JSON.stringify(newArray));
  ulDati.innerHTML = "";
  population();
  form.reset();
});

btnRemove.addEventListener("click", (evt) => {
  evt.preventDefault();
  newArray.pop();
  localStorage.setItem("name", JSON.stringify(newArray));
  ulDati.innerHTML = "";
  population();
});

const population = () => {
  for (let i of newArray) {
    ulDati.innerHTML += `<li><strong>NAME:</strong> ${i}</li>`;
  }
};

setInterval(() => {
  sessionStorage.setItem("count", contatore);
  span.innerHTML = `${Number(contatore)}`;
  contatore++;
  localStorage.setItem("countLocal", contatoreLocal);
}, 1000);

// window.onload(() => {
//   //   span.innerHTML = `${Number(contatore)}`;
//   contatore = Number(sessionStorage.getItem("count"));
// });
