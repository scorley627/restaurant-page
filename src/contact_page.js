const CONTACT_INFO = [
  {
    name: "Aerie Boris",
    role: "Chef",
    phone: "123-555-0190",
    email: "aerieboris@totallyRealEmail.com",
  },
  {
    name: "Other Dude",
    role: "Manager",
    phone: "123-555-0067",
    email: "otherdude@totallyRealEmail.com",
  },
  {
    name: "Last Dude",
    role: "Waiter",
    phone: "123-555-0137",
    email: "lastdude@totallyRealEmail.com",
  },
];

export default function loadContactPage() {
  const contactHeading = createContactHeading();

  const content = document.querySelector(".content");
  content.replaceChildren(contactHeading);

  for (const contact of CONTACT_INFO) {
    const contactBox = createContactBox(contact);
    content.appendChild(contactBox);
  }
}

function createContactHeading() {
  const contactHeading = document.createElement("h1");
  contactHeading.classList.add("content__box");
  contactHeading.classList.add("content__box--heading");
  contactHeading.textContent = "Contact Us";
  return contactHeading;
}

function createContactBox(contact) {
  const contactBox = document.createElement("div");
  const contactName = document.createElement("h3");
  const contactInfo = document.createElement("ul");
  const contactRole = document.createElement("li");
  const contactPhone = document.createElement("li");
  const contactEmail = document.createElement("li");

  contactBox.classList.add("content__box");
  contactName.textContent = contact.name;
  contactRole.textContent = contact.role;
  contactPhone.textContent = contact.phone;
  contactEmail.textContent = contact.email;

  contactInfo.appendChild(contactRole);
  contactInfo.appendChild(contactPhone);
  contactInfo.appendChild(contactEmail);

  contactBox.appendChild(contactName);
  contactBox.appendChild(contactInfo);

  return contactBox;
}
