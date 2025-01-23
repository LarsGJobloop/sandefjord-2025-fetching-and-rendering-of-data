import { createCard } from "./createFilmCard.js";

console.log("JavaScript loaded...");

// Finn all elementene via trenger
let listElement = document.querySelector(".film-list");
if (listElement === null) {
  throw new Error("You did not include a element with class: film-list");
}

let url = "https://ghibliapi.vercel.app/films";
let response = await fetch(url);
let filmList = await response.json();

for (const film of filmList) {
  // Deleger laging av kort til funksjon
  let newCard = createCard(film);

  // Legg til i dokumentet
  listElement.append(newCard);
}
