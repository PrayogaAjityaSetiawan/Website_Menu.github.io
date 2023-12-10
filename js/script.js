const btn = document.querySelector("button.mobile-button")
const menu = document.querySelector(".mobile-menu")


btn.addEventListener('click', () => {
    menu.classList.toggle("hidden");
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 5000,
    },
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },

  });