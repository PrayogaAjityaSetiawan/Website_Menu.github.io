const btn = document.querySelector("button.mobile-button")
const menu = document.querySelector(".mobile-menu")


btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
});


// Typing Text
var typed = new Typed (".auto-text", {
    strings: ["Web Developer", "Student"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
})