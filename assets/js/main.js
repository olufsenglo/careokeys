// Header Nav Menu
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
})

// Header background change on scroll
function changeHeaderColor() {
    const header = document.getElementById("header")

    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);

// Remove menu on click, mobile view
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

