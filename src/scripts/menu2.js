const menuButton = document.querySelector("button");
const menuElement = document.querySelector(".menu");
const header = document.querySelector("header");
let isMenuOpen = false;

menuButton.addEventListener("click", showMenu);

function showMenu() {
  //Funktion til at åbne menu
  if (isMenuOpen) {
    // Hvis menuen er åben
    menuButton.textContent = "MENU";
    isMenuOpen = false;
    header.style.backgroundColor = "rgba(242, 229, 213, 0)";
  } else {
    menuButton.textContent = "LUK";
    isMenuOpen = true;
    header.style.backgroundColor = "rgba(242, 229, 213, 0.95)";
  }
  menuElement.classList.toggle("menu_active");
}
