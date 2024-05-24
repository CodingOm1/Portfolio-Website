let menu = document.querySelector(".hamburger");
let linkBox = document.querySelector(".navbar ul");

menu.addEventListener("click", () => {
  linkBox.classList.toggle("show");
});

