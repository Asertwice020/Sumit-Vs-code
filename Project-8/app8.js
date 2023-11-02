// FLOWTING CRSR
var crsr1 = document.querySelector("#flowtingCursor");
window.addEventListener("mousemove", (dets) => {
  (crsr1.style.left = dets.x + "px"),
  (crsr1.style.top = dets.y + "px");
});

const images = document.querySelectorAll("#back> img");
const back = document.querySelector("#back");
const img1 = document.querySelector("#back> img:nth-child(1)");
const img2 = document.querySelector("#back> img:nth-child(2)");
const img3 = document.querySelector("#back> img:nth-child(3)");
const img4 = document.querySelector("#back> img:nth-child(4)");
const img5 = document.querySelector("#back> img:nth-child(5)");

back.addEventListener('mousemove', () => {
    back.style.transform = `scale(1.04)`;
})
back.addEventListener('mouseleave', () => {
    back.style.transform = `scale(1)`;
})

// back.addEventListener('click', function zIndexChanger(img) {
    // let arr = [img5, img4, img3, img2, img1]
    // img.style.display = `none`
// })

// zIndexChanger(img5);
// zIndexChanger(img4);
// zIndexChanger(img3);
// zIndexChanger(img2);
// zIndexChanger(img1);
// arr.forEach(function() {

// })
// 1
// function imgClick1() {
//     img5.style.display = `none`
// }
// // 2
// function imgClick2() {
//     img4.style.display = `none`
// }
// // 3
// function imgClick3() {
//     img3.style.display = `none`
// }
// // 4
// function imgClick4() {
//     img2.style.display = `none`
// }
// // 5
// function imgClick5() {
//     img1.style.display = `none`
// }