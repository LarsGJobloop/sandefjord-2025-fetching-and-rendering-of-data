let filmCardTemplate = document.querySelector("#film-card-template");
if (filmCardTemplate === null) {
  throw new Error("You did not include a element with id: film-card-template");
}

export function createCard(film) {
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

  return cardElement;
}
