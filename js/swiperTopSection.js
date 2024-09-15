var swiper = new Swiper(".topS-mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".topS-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".topS-swiper-button-next",
    prevEl: ".topS-swiper-button-prev",
  },
  speed: 900,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  autoplay: {
    delay: 5000,
  },

  mousewheel: {
    invert: true,
  },
});
