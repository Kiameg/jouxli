const menuButton = document.querySelector("button");
const menuElement = document.querySelector(".menu");
const header = document.querySelector("header");
const logoLight = document.querySelector(".logo");
const logoDark = document.querySelector(".logo--hide");
const instaIcon = document.querySelector(".instagram_icon");
const faceIcon = document.querySelector(".facebook_icon");
const instaDark = document.querySelector(".instagram_icon--hide");
const faceDark = document.querySelector(".facebook_icon--hide");
const pElements = document.querySelectorAll(".footer1 p");
let isMenuOpen = false;

menuButton.addEventListener("click", showMenu);

function showMenu() {
  //Funktion til at åbne menu
  if (isMenuOpen) {
    // Hvis menuen er åben
    menuButton.textContent = "MENU";
    isMenuOpen = false;
    header.style.backgroundColor = "rgba(242, 229, 213, 0)";
    menuButton.style.color = "#f2e5d5";
    logoLight.style.display = "block";
    logoDark.style.display = "none";
    pElements.forEach((p) => {
      p.style.color = "#f2e5d5";
    });
    instaDark.style.display = "none";
    instaIcon.style.display = "block";
    faceDark.style.display = "none";
    faceIcon.style.display = "block";
  } else {
    menuButton.textContent = "LUK";
    isMenuOpen = true;
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    menuButton.style.color = "#3F352C";
    pElements.forEach((p) => {
      p.style.color = "#3F352C";
    });
    instaDark.style.display = "block";
    instaIcon.style.display = "none";
    faceDark.style.display = "block";
    faceIcon.style.display = "none";
    header.style.backgroundColor = "rgba(242, 229, 213, 0.75)";
  }
  menuElement.classList.toggle("menu_active");
}
