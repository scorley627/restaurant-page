const MENU = {
  LUNCH: [
    {
      name: "BBQ Pork Bowl",
      description:
        "BBQ pork, roasted carrots, wilted kale, topped with avocado and hot sauce",
    },
    {
      name: "Cauliflower Bowl",
      description:
        "roasted curry cauliflower over sweet potato hummus, topped with avocado",
    },
    {
      name: "Kitchen Sink Taco",
      description:
        "sauteed onion, pepper, black beans, squash, and kale enveloped in scrambled cage-free eggs, topped with hot sauce or creamy avocado salsa",
    },
    {
      name: "Green Machine Smoothie",
      description:
        "spinach, avocado, celery, apple, peanut butter, protein powder",
    },
  ],
  SIDES: [
    "refried beans",
    "rice",
    "roasted veggies",
    "tortilla chips and salsa",
    "wilted kale",
  ],
};

export default function loadMenuPage() {
  const menuHeading = createMenuHeading();
  const lunchSection = createLunchSection();
  const sidesSection = createSidesSection();

  const content = document.querySelector(".content");
  content.replaceChildren(menuHeading, lunchSection, sidesSection);
}

function createMenuHeading() {
  const heading = document.createElement("h1");
  heading.classList.add("content__box");
  heading.classList.add("content__box--heading");
  heading.textContent = "Menu";
  return heading;
}

function createLunchSection() {
  const lunchSection = document.createElement("section");
  const lunchHeading = document.createElement("h2");

  lunchSection.classList.add("menu-section");
  lunchHeading.classList.add("content__box");
  lunchHeading.textContent = "Lunch";

  lunchSection.appendChild(lunchHeading);
  for (const item of MENU.LUNCH) {
    const itemBox = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDescription = document.createElement("p");

    itemBox.classList.add("content__box");
    itemName.textContent = item.name;
    itemDescription.classList.add("menu-item-description");
    itemDescription.textContent = item.description;

    itemBox.appendChild(itemName);
    itemBox.appendChild(itemDescription);
    lunchSection.appendChild(itemBox);
  }

  return lunchSection;
}

function createSidesSection() {
  const sidesSection = document.createElement("section");
  const sidesHeading = document.createElement("h2");
  const sidesList = document.createElement("ul");

  sidesSection.classList.add("content__box");
  sidesHeading.textContent = "Sides";

  for (const side of MENU.SIDES) {
    const sideItem = document.createElement("li");
    sideItem.textContent = side;
    sidesList.appendChild(sideItem);
  }

  sidesSection.appendChild(sidesHeading);
  sidesSection.appendChild(sidesList);

  return sidesSection;
}
