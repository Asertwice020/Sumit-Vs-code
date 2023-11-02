"use strict";
// DARK MODE
const sun = document.querySelector(".ri-sun-fill");
const moon = document.querySelector(".ri-moon-fill");
// TOGGLE MOON
function toggleDark() {
  if(sun.style.display = "block") {
    sun.style.display = "none"
    moon.style.display = 'block'
  }
}
// TOGGLE SUN
function toggleLight() {
  if(moon.style.display = "block") {
    moon.style.display = 'none'
    sun.style.display = "block"
  }
}

// INSTSGRAM STORY PROJECT
let stories_arr = [
  // 1
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
  //  2
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
  // 3
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
  // 4
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
  // 5
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
  // 6
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
  // 7
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
  // 8
  { dp: `Assets3/dp0.jpg`, story: `Assets3/instaStory.jpg` },
];
let clutter = "";
stories_arr.forEach(function (elem, idx) {
  clutter += `<div class="story"><img src="${elem.dp}" alt="" id = "${idx}"" ></div>`;
});
let storie_container = document.getElementById("container");
storie_container.innerHTML = clutter;

storie_container.addEventListener("click", function (dets) {
  let viewr = document.querySelector("#full-story-view");
  let timeoutID = null; // Variable to track the active timeout
  viewr.style.display = "initial";
  viewr.style.backgroundImage = `url(${stories_arr[dets.target.id].story})`;
   // Clear the previous timeout (if any)
   if (timeoutID !== null) {
    clearTimeout(timeoutID);
  }
  timeoutID = setTimeout(function () {
    viewr.style.display = "none";
    timeoutID = null; // Reset the timeoutID
  }, 5000);
});

// FLOWTING CRSR
var crsr1 = document.querySelector("#flowtingCursor");
window.addEventListener("mousemove", (dets) => {
  (crsr1.style.left = dets.x + "px"), (crsr1.style.top = dets.y + "px");
});


// CALCULATOR
function clickBtn() {
  transform = 'translateX (2px)'
}

// TIME CONTAINER
let timeContainer = document.getElementById("currentTime");
function displaytime(){
let time = new Date()
timeContainer.innerHTML = time;
}
setInterval( displaytime, 1000);