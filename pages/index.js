// init Swiper:
var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 24,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
