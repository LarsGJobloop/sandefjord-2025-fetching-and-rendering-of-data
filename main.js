console.log("JavaScript loaded...");

// Finn list elemente via class="film-list"
let listElement = document.querySelector(".film-list");
if (listElement === null) {
  throw new Error("You did not include a element with class: film-list");
}

let url = "https://ghibliapi.vercel.app/films";
let response = await fetch(url);
let filmList = await response.json();

for (const film of filmList) {
  // Lage elementene
  let cardElement = document.createElement("li");
  let headingElement = document.createElement("h2");
  let descriptionElement = document.createElement("p");
  let imageElement = document.createElement("img");

  // Sett de sammen
  cardElement.append(headingElement);
  cardElement.append(descriptionElement);
  cardElement.append(imageElement);

  // Konfigurer elementene
  cardElement.className = "film-card";
  headingElement.textContent = film.title;
  descriptionElement.textContent = film.description;
  imageElement.src = film.image;

  // Legg til i dokumentet
  listElement.append(cardElement);
}
