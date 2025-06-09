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
        "Roasted curry cauliflower over sweet potato hummus, topped with avocado",
    },
    {
      name: "Kitchen Sink Taco",
      description:
        "Sauteed onion, pepper, black beans, squash, and kale enveloped in scrambled cage-free eggs, topped with hot sauce or creamy avocado salsa",
    },
    {
      name: "Green Machine Smoothie",
      description:
        "Spinach, avocado, celery, apple, peanut butter, protein powder",
    },
  ],
  ENTREES: [
    {
      name: "Veggie Curry",
      description: "",
    },
    {
      name: "Stir Fry",
      description: "",
    },
    {
      name: "Chile Colorado",
      description: "",
    },
    {
      name: "Schnitzel",
      description: "",
    },
  ],
  SIDES: [
    "Refried beans",
    "Rice",
    "Roasted veggies",
    "Tortilla chips and salsa",
    "Wilted kale",
  ],
  DESSERT: ["Choco flan", "Dark chocolate brownies", "Blackberry cobbler"],
  DRINKS: [
    "Jarritos",
    "Hibiscus orange Tea",
    "Iced peppermint Tea",
    "Aqua fresca (horchata or tamarind)",
  ],
};

export default function loadMenuPage() {
  const menuHeading = createMenuHeading();
  const lunchSection = createMenuSection("Lunch", MENU.LUNCH);
  const entreesSection = createMenuSection("Entrees", MENU.ENTREES);
  const sidesSection = createListSection("Sides", MENU.SIDES);
  const dessertSection = createListSection("Dessert", MENU.DESSERT);
  const drinksSection = createListSection("Drinks", MENU.DRINKS);

  const content = document.querySelector(".content");
  content.replaceChildren(
    menuHeading,
    lunchSection,
    entreesSection,
    sidesSection,
    dessertSection,
    drinksSection
  );
}

function createMenuHeading() {
  const heading = document.createElement("h1");
  heading.classList.add("content__box");
  heading.classList.add("content__box--heading");
  heading.textContent = "Menu";
  return heading;
}

function createMenuSection(sectionName, menuItems) {
  const menuSection = document.createElement("section");
  const sectionHeading = document.createElement("h2");

  menuSection.classList.add("menu-section");
  sectionHeading.classList.add("content__box");
  sectionHeading.textContent = sectionName;

  menuSection.appendChild(sectionHeading);
  for (const item of menuItems) {
    const itemBox = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDescription = document.createElement("p");

    itemBox.classList.add("content__box");
    itemName.textContent = item.name;
    itemDescription.classList.add("menu-item-description");
    itemDescription.textContent = item.description;

    itemBox.appendChild(itemName);
    itemBox.appendChild(itemDescription);
    menuSection.appendChild(itemBox);
  }

  return menuSection;
}

function createListSection(sectionName, menuItems) {
  const listSection = document.createElement("section");
  const listHeading = document.createElement("h2");
  const list = document.createElement("ul");

  listSection.classList.add("content__box");
  listHeading.textContent = sectionName;

  for (const item of menuItems) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  }

  listSection.appendChild(listHeading);
  listSection.appendChild(list);

  return listSection;
}
