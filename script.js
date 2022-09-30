const hamburger = document.querySelector("svg");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
  links.style.transform = "translateX(0%)";
});
