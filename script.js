// const water = document.querySelector('.water')

// water.addEventListener("load", function () {
//   let height = 40;
//   let interval

//   water.addEventListener("click", function () {
//     interval = setInterval(function () {
//       if (height <= 0) {
//         clearInterval(interval);
//         water.classList.add("empty"); // Add the 'empty' class to the water element

//         return;
//       }
//       height--;
//       water.style.height = height + "px";
//     }, 20);
//   });
//   water.addEventListener("mouseleave", function () {
//     clearInterval(interval);
//   });
// });


// const glass = document.querySelector(".cup");
// const water = document.querySelector(".water");
// const iceCube = document.querySelector(".ice-cube");
// let height = 400;
// let interval;

// glass.addEventListener("click", function () {
//     glass.classList.toggle("empty");
//     glass.classList.toggle("full");
//   clearInterval(interval);
//   height = 200;
//   water.style.height = height + "px";
//   interval = setInterval(function () {
//     if (height <= 0) {
//       clearInterval(interval);
//       return;
//     }
//     height--;
//     water.style.height = height + "px";
//     if (height <= 200) {
//       iceCube.style.transform =
//         "translate(50%, " + (height - 100) + "px) rotate(0deg)";
//     } else {
//       iceCube.style.transform = "translate(50%, -50%) rotate(45deg)";
//     }
//   }, 20);
// });

// const cup = document.querySelector(".cup");
// const water = document.querySelector(".water");
// const iceCube = document.querySelector(".icecube");
// const button = document.querySelector(".button");

// button.addEventListener("click", () => {
//   // Make the cup empty and move the ice cube and water down
//   cup.classList.add("empty");
//   iceCube.classList.add("move-down");
//   water.classList.add("move-down");

//   // After 2 seconds, make the cup full again and move the ice cube and water up
//   setTimeout(() => {
//     cup.classList.remove("empty");
//     iceCube.classList.remove("move-down");
//     water.classList.remove("move-down");
//   }, 2000);
// });

const icecube = document.querySelector(".icecube");
const water = document.querySelector(".water");
const btn = document.querySelector('.button')

btn.addEventListener("click", function () {
  icecube.style.transform = "translateY(220%) rotate(90deg) scale(1.2)";
  water.style.animation = "empty 3000ms ease-in-out";
  setTimeout(function () {
      icecube.style.transform = "translateY(-4%) rotate(45deg) scale(1.2)";
      water.style.transform = "translateY(-4%)";
    //   water.style.animation = "empty backward";
  }, 3000);
});
