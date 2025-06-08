const RESTAURANT_NAME = "Eyes of the Heart Eatery";
const RESTAURANT_DESCRIPTION =
  "This Super Special Restaurant is wonderful with amazing food.";

export default function loadPage() {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  const paragraph = document.createElement("p");
  heading.textContent = RESTAURANT_NAME;
  paragraph.textContent = RESTAURANT_DESCRIPTION;
  heading.classList.add("restaurant-name");
  paragraph.classList.add("restaurant-description");
  content.appendChild(heading);
  content.appendChild(paragraph);
}
