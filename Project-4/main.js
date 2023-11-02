"use strict";
// DARK MODE
let fire1 = 0;
let sun = document.querySelector(".ri-sun-fill");
let moon = document.querySelector(".ri-moon-fill");
// ON/OFF FUNCTIONALITY
sun.addEventListener("click", function () {
  // ON STATE
  if (fire1 == 0) {
    // elemets colors changes when dark mode is on

    document.querySelector("nav").style.borderBottom =
      "0.2rem solid whitesmoke";
    document.querySelector("nav").style.backgroundColor = "purple";
    document.querySelector("nav h1").style.webkitTextStroke =
      "0.15vw whitesmoke";
    // document.querySelector("[text-decoration ='none']").style.color = "whitesmoke";
    // document.querySelector("nav ul a::after").style.backgroundColor = "whitesmoke";
    document.querySelector("#Wrapper").style.backgroundColor =
      "background: linear-gradient(270deg, #610ea5, rgb(182, 139, 0), #aa0202f8, #448f03);";
    // document.querySelector("nav ul a").style.color = "whitesmoke"
    document.querySelector(".ri-moon-fill").style.color = "whitesmoke";
    // the dark mode toggle
    moon.style.display = "block";
    sun.style.display = "none";
    fire1 = 1;
  }
  moon.addEventListener("click", function () {
    // OFF STATE
    if (fire1 == 1) {
      // elemets colors changes when dark mode is off

      document.querySelector("nav").style.borderBottom = "0.2rem solid black";
      document.querySelector("nav").style.backgroundColor = "whitesmoke";
      document.querySelector("nav h1").style.webkitTextStroke = "0.15vw black";
      // document.querySelector("[text-decoration ='none']").style.color = "whitesmoke";
      // document.querySelector("nav ul a::after").style.backgroundColor = "whitesmoke";
      document.querySelector("#Wrapper").style.backgroundColor =
        "background: linear-gradient(270deg, #610ea5, rgb(182, 139, 0), #aa0202f8, #448f03);";
      // document.querySelector("nav ul a").style.color = "black"
      document.querySelector(".ri-moon-fill").style.color = "black";
      // the dark mode toggle
      moon.style.display = "none";
      sun.style.display = "block";
      fire1 = 0;
    }
  });
});

// ----------------auto sync gallery
// Wait for the DOM to be fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//   const gallery = document.getElementById("wrapImages");
//   const ImageBoxes = wrapImages.querySelectorAll(".ImageBox");

//   ImageBoxes.forEach((ImageBox) => {
//     const imgElement = ImageBox.querySelector("img");
//     imgElement.addEventListener("load", () => {
//       const aspectRatio = imgElement.width / imgElement.height;
//       const span = Math.ceil(aspectRatio);
//       ImageBox.style.gridColumn = `span ${span}`;
//     });
//   });
// });
