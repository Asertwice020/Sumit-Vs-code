5 projects of this website with the help of DOM.

1. add friend feature with same button
2. insta like btn
3. custom cursor
4. multiple image hovering animation
5. insta story feature

but first, i try my self few projects
1. bulb on/off project -done.
2. theme color changing button

adhar card, pan card, inter-marksheet, photo, bank-proof

problem 1: jab bhi me #2=>freind-unfriend project me images, freind button ye sare tags js se catch karne ki try kar raha hu, tab only first wala hi catch ho raha hai.         date:28/9/23


display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;

filter: drop-shadow


----------------------------------------------------------------
#insta_like_btn_scroller_on_page3 {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}
.insta_like_btn_img {
    height: 80vh;
    width: calc(auto + 1rem);
    background-color: whitesmoke;
    box-shadow: .4rem .6rem 2rem rgb(231, 219, 219);
    border: .1rem solid white;
    position: relative;
    border-radius: 1.5vw;
    /* overflow: hidden; */
    /* padding: .2vw; */
    /* border-radius : 1rem; */
}

.insta_like_btn_img img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* border-radius: calc(1rem - .2vw); */
}

#INSTA_LIKE_BUTTON {
    position: relative;
    border-radius: 2vw;
    background-color: #ffffff4a;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* overflow: hidden; */
}



----------------------------------------------------


#INSTA_LIKE_BUTTON {
    position: relative;
    border-radius: 2vw;
    background-color: #ffffff4a;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
}

#insta_like_btn_scroller_on_page3 {
    align-content: center;
  display: inline-block;
  white-space: nowrap;
  /* animation: scroll 20s linear infinite; */
  /* border: 2px solid transparent; */
  /* border-image: linear-gradient(45deg, #00c3ff, #ff0099); */
  /* border-image-slice: 1; */
}

img {
    height: 80%;
    width: 45%;
    object-fit: cover;
  /* max-width: 150px;  */
  /* max-height: 250px;  */
  margin-right: 10px; 
  /* box-shadow: 0 0 10px rgba(0, 195, 255, 0.8);  */
}
/* 
@keyframes scroll {
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(calc(-100% - 10px)); 
  }
} */
  

--------------------------------------------------------------
#INSTA_LIKE_BUTTON {
    position: relative;
    border-radius: 2vw;
    background-color: #ffffff4a;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    white-space: nowrap;
}



#INSTA_LIKE_BUTTON {
    width: 100%; /* Adjust the width as needed */
    overflow-x: scroll; /* Enable horizontal scrolling */
    white-space: nowrap; /* Prevent images from wrapping to the next line */
  }
  
  #insta_like_btn_scroller_on_page3 {
    display: inline-block; /* Ensure images are displayed horizontally */
  }
  
  .insta_like_btn_img {
    display: inline-block;
    margin: 5px; /* Adjust the margin as needed for spacing between images */
    border: 2px solid transparent; /* Add a transparent border */
    border-radius: 10px; /* Add border radius for rounded corners */
    padding: 5px; /* Add padding for spacing within the border */
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.5); /* Add a blue glowing shadow */
  }
  
  .insta_like_btn_img img {
    max-height: 150px; /* Set a maximum height for the images */
    max-width: 100%; /* Ensure images maintain their aspect ratio */
    display: block; /* Remove extra spacing below images */
  }








  ALL THE JS CODE-----------------------------------ALL THE JS CODE--------------------------ALL THE JS CODE-------------------------
  // #BULB_ON_OFF_PROJECT
let fire = 0;
let main = document.querySelector("#BULB_ON_OFF_PROJECT");
let bulb_clr = document.querySelector(".bulb");
let on_off_btn = document.querySelector(".btn");
// ON/OFF FUNCTIONALITY
on_off_btn.addEventListener("click", function(){
    // ON STATE
    if (fire == 0) {
        main.style.backgroundColor = "#000";
        bulb_clr.style.backgroundColor = "yellow";
        bulb_clr.style.border = ".2rem solid white"
        on_off_btn.innerHTML = "off";
        fire = 1;
    }
    // OFF STATE
    else {
        main.style.backgroundImage = `none`
        main.style.backgroundColor = "rgba(255, 255, 255, 0.292)";
        on_off_btn.innerHTML = "&nbsp;on&nbsp;"
        bulb_clr.style.border = ".2rem solid black"
        bulb_clr.style.backgroundColor = "white";
        fire = 0;
    }
})
// FRIEND-UNFRIEND CARD PROJECT
// SEND BUTTON EVENT
let send = document.querySelector(".chat i")
sended = 0;
send.addEventListener("click", function(){
    send.style.color = "red";
    setTimeout(function(){
        send.style.color = "black";
    },1000);
})

// INSTA LIKE BUTTON PROJECT



________________________---------------------------------------------------------------------
    // elemets colors changes when dark mode is on
    // document.querySelector("nav").style.borderBottom =
    //   "0.2rem solid whitesmoke";
    // document.querySelector("nav").style.backgroundColor = "black";
    // document.querySelector("nav h1").style.webkitTextStroke =
    //   "0.15vw whitesmoke";
    // document.querySelector("[text-decoration ='none']").style.color =
    //   "whitesmoke";
    // document.querySelector("nav ul a::after").style.backgroundColor =
    //   "whitesmoke";
    // document.querySelector("nav ul i").style.color = "whitesmoke";
    // document.querySelector("#wrapper").style.backgroundColor =
    //   "background: linear-gradient(270deg, #610ea5, rgb(182, 139, 0), #aa0202f8, #448f03);";
    // the dark mode toggle



    -----------------------------------------------------------------------==================
    const sun = document.querySelector(".ri-sun-fill");
const moon = document.querySelector(".ri-moon-fill");
// DARK MODE
let fire1 = 0;
// ON STATE
sun.addEventListener("click", () => {
  if (fire1 == 0) {
    moon.style.display = "block";
    sun.style.display = "none";
    fire1 = 1;
    
function toggleTheme() {
  const root = document.documentElement;
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
}
  }
  // OFF STATE
  moon.addEventListener("click", function () {
    if (fire1 == 1) {
      moon.style.display = "none";
      sun.style.display = "block";
      fire1 = 0;
    }
  });
});