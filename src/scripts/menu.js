const menuButton = document.querySelector("button");
const menuElement = document.querySelector(".menu");
const header = document.querySelector("header");
let isMenuOpen = false;

menuButton.addEventListener("click", showMenu);

function showMenu() {
  if (isMenuOpen) {
    menuButton.textContent = "MENU";
    isMenuOpen = false;
  } else {
    menuButton.textContent = "LUK";
    isMenuOpen = true;
  }
  menuElement.classList.toggle("menu_active");
}
