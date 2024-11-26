import "./styles.css";

// const mainEl = document.getElementsByTagName("main")[0];
const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu");

// Main Element stuff
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.classList.add("flex-ctr");
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Top nav bar stuff
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Sub nav bar
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

function popola(event) {
  event.preventDefault();
  if (event.target.localName !== "a") return;
  console.log(event.target.text);
}

for (const [i, val] of menuLinks.entries()) {
  const linkEl = document.createElement("a");
  //Object href + href value
  linkEl.setAttribute("href", val.href);
  linkEl.textContent = val.text;
  linkEl.addEventListener("click", popola, false);
  //appendChild DOM
  topMenuEl.appendChild(linkEl);
  // topMenuEl.innerHTML += `<a href="${val.href}" onclick="popola">${val.text}</a>`;
}

// console.log(topMenuEl);
// console.log(`${i}: ${val.text}: ${val.href}`);
