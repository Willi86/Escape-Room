const closeIcon = document.createElement("img");
const navMobile = document.querySelector("nav");
const navMenuStyling = document.querySelectorAll(".nav-menu-background");

document.querySelector(".s-menu-icon").addEventListener("click", (ev) => {
  navMobile.classList.add("nav-menu-mobile");
  navMenuStyling[0].classList.add("background-opacity");
  navMenuStyling[1].classList.add("background-opacity");

  navMobile.appendChild(closeIcon);
  closeIcon.classList.add("close-icon");
  closeIcon.src = "img/close-icon.png";
});

closeIcon.addEventListener("click", (ev) => {
  navMobile.classList.remove("nav-menu-mobile");
  navMenuStyling[0].classList.remove("background-opacity");
  navMenuStyling[1].classList.remove("background-opacity");
});
