const MENU = {
  LUNCH: [
    {
      name: "BBQ Pork Bowl",
      description:
        "BBQ pork, roasted carrots, wilted kale. Topped with avocado and hot sauce.",
    },
    {
      name: "Cauliflower Bowl",
      description:
        "Roasted curry cauliflower over sweet potato hummus. Topped with avocado.",
    },
    {
      name: "Kitchen Sink Taco",
      description:
        "Sauteed onion, pepper, black beans, squash, and kale enveloped in scrambled cage-free eggs. Topped with hot sauce or creamy avocado salsa.",
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
      description:
        "Cauliflower, bell pepper, potato, squash, and carrot in a housemade yellow coconut curry sauce. Served with naan.",
    },
    {
      name: "Stir Fry",
      description:
        "Ground beef, carrot, zuchinni, onion, and bell pepper stir fried in a brown sauce. Seved with rice.",
    },
    {
      name: "Chile Colorado",
      description:
        "Classic Chihuahuan dish made with pork smothered in a spicy red chile sauce. Served with refried beans and corn tortillas.",
    },
    {
      name: "Pork Schnitzel",
      description:
        "Double-battered pork cutlet served with cucumber salad and mashed potatoes.",
    },
  ],
  SIDES: [
    "Refried beans",
    "Rice",
    "Roasted veggies",
    "Tortilla chips and salsa",
    "Wilted kale",
  ],
  DESSERT: [
    "Choco flan",
    "Dark chocolate brownies",
    "Blackberry cobbler",
    "*Specialty* yogurt dessert",
  ],
  DRINKS: [
    "Jarritos",
    "Hibiscus orange Tea",
    "Iced peppermint Tea",
    "Aqua fresca (horchata or tamarind)",
  ],
};

export default function loadMenuPage() {
  const menuHeading = createMenuHeading();
  const lunchSection = createMenuSection("LUNCH", MENU.LUNCH);
  const entreesSection = createMenuSection("ENTREES", MENU.ENTREES);
  const sidesSection = createListSection("SIDES", MENU.SIDES);
  const dessertSection = createListSection("DESSERT", MENU.DESSERT);
  const drinksSection = createListSection("DRINKS", MENU.DRINKS);

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
  heading.textContent = "MENU";
  return heading;
}

function createMenuSection(sectionName, menuItems) {
  const menuSection = document.createElement("section");
  const sectionHeading = document.createElement("h2");

  menuSection.classList.add("menu-section");
  sectionHeading.classList.add("content__box");
  sectionHeading.classList.add("menu-section__heading");
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
  listSection.classList.add("menu-list");
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
