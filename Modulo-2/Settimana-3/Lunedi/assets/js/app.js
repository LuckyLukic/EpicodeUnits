class User {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.location = location;
  }
  compare(person) {
    if (this.age > person.age) {
      console.log(`${this.name} is older than ${person.name}`);
    } else {
      console.log(`${person.name} is older than ${this.name}`);
    }
  }
}

const luca = new User("Luca", "Iannice", 42, "Bologna");
const manuel = new User("Manuel", "Centini", 32, "Ostia");
const luke = new User("Luca", "Quaglino", 30, "Milano");

luca.compare(manuel);
manuel.compare(luke);
luke.compare(luca);

class PetCard {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(owner) {
    if (this.ownername === owner.ownerName) {
      console.log(true);
    }
  }
}

class CardAnimale {
  constructor() {
    this.card = [];
  }
}

const formPet = document.getElementById("petName");
const formOwner = document.getElementById("ownerName");
const formSpecies = document.getElementById("species");
const formBreed = document.getElementById("breed");
const inputFields = document.querySelectorAll(".data input");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const newPet = new CardAnimale();

submit.addEventListener("click", (evt) => {
  evt.preventDefault();
  console.log(evt);

  const card = new PetCard(
    formPet.value,
    formOwner.value,
    formSpecies.value,
    formBreed.value
  );
  console.log(card);
  newPet.card.push(card);

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<div>
        <p> pet name = ${card.petName}</p>
        <p> owner name = ${card.ownerName}</p>
        <p> species = ${card.species}</p>
        <p> breed = ${card.breed}</p>
       </div>`;
  document.body.appendChild(newDiv);
  form.reset();
});
