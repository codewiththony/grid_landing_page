const button = document.querySelector(".header-btn");
const menu = document.querySelector(".menu");
const icon = button.querySelector("img");
button.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("open");

    
    button.setAttribute("aria-expanded", isOpen);
    button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    icon.src = isOpen ? "./icon-close.svg" : "./icon-menu.svg";
})