export default function loadPage() {
  const content = document.querySelector("#content");
  const heading = document.createElement("h1");
  const paragraph = document.createElement("p");
  heading.textContent = "Super Special Restaurant";
  paragraph.textContent =
    "This Super Special Restaurant is wonderful with amazing food.";
  content.appendChild(heading);
  content.appendChild(paragraph);
}
