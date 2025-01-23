console.log("JavaScript loaded...");

// Finn all elementene via trenger
let listElement = document.querySelector(".film-list");
if (listElement === null) {
  throw new Error("You did not include a element with class: film-list");
}
let filmCardTemplate = document.querySelector("#film-card-template");
if (filmCardTemplate === null) {
  throw new Error("You did not include a element with id: film-card-template");
}

let url = "https://ghibliapi.vercel.app/films";
let response = await fetch(url);
let filmList = await response.json();

for (const film of filmList) {
  // Lage en kopi av template element
  let cardElement = filmCardTemplate.content.cloneNode(true);

  // Finne en referanse til elementene vi interessert i
  let headingElement = cardElement.querySelector("h2");
  let descriptionElement = cardElement.querySelector("p");
  let imageElement = cardElement.querySelector("img");

  // Konfigurer elementene
  headingElement.textContent = film.title;
  descriptionElement.textContent = film.description;
  imageElement.src = film.image;

  // Legg til i dokumentet
  listElement.append(cardElement);
}
