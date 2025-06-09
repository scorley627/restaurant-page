import "./style.css";
import loadHomePage from "./home_page.js";
import loadMenuPage from "./menu_page.js";
import loadContactPage from "./contact_page.js";

// const homeButton = document.querySelector(".home-button");
// let currentButton = homeButton;
// currentButton.disabled = true;
// loadHomePage();

const menuButton = document.querySelector(".menu-button");
let currentButton = menuButton;
currentButton.disabled = true;
loadMenuPage();

const headerNav = document.querySelector(".header__nav");
headerNav.addEventListener("click", function (event) {
  if (event.target.className.includes("header__button")) {
    currentButton.disabled = false;
    currentButton = event.target;
    currentButton.disabled = true;

    if (currentButton.className.includes("home-button")) {
      loadHomePage();
    } else if (currentButton.className.includes("menu-button")) {
      loadMenuPage();
    } else if (currentButton.className.includes("contact-button")) {
      loadContactPage();
    }
  }
});
