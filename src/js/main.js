// NAV
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__list-item-link');

let isScrollBlock = false;
let isNavActive = false;

const navDesktopBreakpoint = 1024;

const handleNav = () => {
    nav.classList.toggle('nav--active');
    hamburger.classList.toggle('is-active');
    if (window.innerWidth <= navDesktopBreakpoint) {
        toggleScroll();
    }

    isNavActive = !isNavActive;
}

const toggleScroll = () => {
    const body = document.querySelector('body');
    body.classList.toggle('block-scroll');
    isScrollBlock = !isScrollBlock;
}

hamburger.addEventListener('click', handleNav);




