const RESTAURANT_NAME = "Eyes of the Heart Eatery";
const RESTAURANT_DESCRIPTION =
  "This Super Special Restaurant is wonderful with amazing food.";
const RESTAURANT_HOURS = [
  "Sunday: 8am - 8pm",
  "Monday: 8am - 6pm",
  "Tuesday: 8am - 6pm",
  "Wednesday: 8am - 6pm",
  "Thursday: 8am - 6pm",
  "Friday: 8am - 10pm",
  "Saturday: 8am - 10pm",
];
const RESTAURANT_ADDRESS = "123 12th Street, Mountainville, CO 12345";

export default function loadHomePage() {
  const restaurantHeading = createRestaurantHeading();
  const restaurantDescription = createRestaurantDescription();
  const restaurantHours = createRestaurantHours();
  const restaurantAddress = createRestaurantAddress();

  const content = document.querySelector("#content");
  content.appendChild(restaurantHeading);
  content.appendChild(restaurantDescription);
  content.appendChild(restaurantHours);
  content.appendChild(restaurantAddress);
}

function createRestaurantHeading() {
  const heading = document.createElement("h1");
  heading.classList.add("restaurant-heading");
  heading.textContent = RESTAURANT_NAME;
  return heading;
}

function createRestaurantDescription() {
  const description = document.createElement("p");
  description.classList.add("restaurant-description");
  description.textContent = RESTAURANT_DESCRIPTION;
  return description;
}

function createRestaurantHours() {
  const hoursSection = document.createElement("section");
  const hoursHeading = document.createElement("h2");
  const hoursList = document.createElement("ul");

  for (const hours of RESTAURANT_HOURS) {
    const hoursItem = document.createElement("li");
    hoursItem.textContent = hours;
    hoursList.appendChild(hoursItem);
  }

  hoursSection.classList.add("hours-section");
  hoursHeading.textContent = "Hours";
  hoursList.classList.add("hours-list");

  hoursSection.appendChild(hoursHeading);
  hoursSection.appendChild(hoursList);

  return hoursSection;
}

function createRestaurantAddress() {
  const addressSection = document.createElement("section");
  const addressHeading = document.createElement("h2");
  const address = document.createElement("p");

  addressSection.classList.add("address-section");
  addressHeading.textContent = "Address";
  address.classList.add("address");
  address.textContent = RESTAURANT_ADDRESS;

  addressSection.appendChild(addressHeading);
  addressSection.appendChild(address);

  return addressSection;
}
