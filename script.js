// Element Selection
const showMenu = document.getElementById("show-menu");
const hideMenu = document.getElementById("hide-menu");
const menu = document.getElementById("header");

// Event Listeners
showMenu.addEventListener("click", () => {
  menu.style.display = "block";
});

hideMenu.addEventListener("click", () => {
  menu.style.display = "none";
});
