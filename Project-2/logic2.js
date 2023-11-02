// ------🍔 MENU LOGIC
const header = document.querySelector('#header');
const menuBtn = document.querySelector('#menu-toggle-for-mobs');
const linkContainer = document.querySelector('#links-container');
// const bluryContainer = document.querySelector('#blury_container');
const menuBtnsArr = Array.from(linkContainer.children);

function menuIconChanger() {
    menuBtn.classList.add('fa-ellipsis-vertical');
    menuBtn.classList.remove('fa-xmark');
}

const MenuToggle = function() {
    menuBtn.addEventListener('click', () => {
        linkContainer.classList.toggle('apear');
        if (menuBtn.classList.contains('fa-ellipsis-vertical')) {
            menuBtn.classList.remove('fa-ellipsis-vertical');
            menuBtn.classList.add('fa-xmark');
        } else {
            menuIconChanger();
        }
    });
// WHEN I AM CLICKING ON THE DARK THEME TOGGLE SO IT ALSO DIS-APPEAR.
    document.body.addEventListener('click', (e) => {
        if (!linkContainer.contains(e.target) && e.target !== menuBtn) {
            linkContainer.classList.remove('apear');
            menuIconChanger();
        }
    });

    menuBtnsArr.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if(e.target === link) {
                linkContainer.classList.remove('apear');
                menuIconChanger();
            }
        })
    })
}
MenuToggle();


// HIDE AND SHOW THE HEADER BASED ON THE SCROLL
let lastScrollTop = 0;
window.addEventListener('scroll', (e) => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop && window.scrollY > 70) {
        header.style.top = -24;
    }
    else {
        header.style.top = 0;
    }
    lastScrollTop = scrollTop;
})