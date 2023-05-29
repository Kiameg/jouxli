const miniPhotos = document.querySelectorAll(".mini-photo")
const bigPhoto = document.querySelector(".img_big")

miniPhotos.forEach(el => el.addEventListener("click", function(){
    miniPhotos.forEach(el => el.classList.add("fade"))
    this.classList.remove("fade")
    bigPhoto.src = this.src
}));