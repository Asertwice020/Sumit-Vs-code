// for the navbar animation
gsap.to ("nav", {
    backgroundColor: "#000",
    duration: 0.8,
    // delay: 1,
    padding: "1.7rem 8rem",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top - 10%",
        end: "(top - 10%) + 1%",
        scrub: 1
    }
})

// for the cursor animation, a circle type object stick with your cursor
var crsr = document.querySelector("#cursor");
window.addEventListener("mousemove", function(details){
    crsr.style.left = details.x - 4 +"px",
    crsr.style.top = details.y - 4 +"px"
})

// for the big blury cursor sphere, which is also stick with the point of crsr.
var blur = document.querySelector("#blur");
window.addEventListener("mousemove", function(details){
    blur.style.left = details.x - 124 + "px",
    blur.style.top = details.y - 124 + "px"
})


// for the clr changing animation of page2 while the body scrolling down
gsap.to("#main",{
    backgroundColor: "000",
    scrollTrigger: {
        trigger: "#main",
        scroller : "body",
        // markers: true,
    }
})