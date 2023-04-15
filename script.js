

const icecube = document.querySelector(".icecube");
const water = document.querySelector(".water");
const btn = document.querySelector('.button')

btn.addEventListener("click", function () {
  icecube.style.transform = "translateY(220%) rotate(90deg) scale(1.2)";
  water.style.animation = "empty 3000ms ease-in-out";
  setTimeout(function () {
      icecube.style.transform = "translateY(-4%) rotate(45deg) scale(1.2)";
      water.style.transform = "translateY(-4%)";
  }, 3000);
});
