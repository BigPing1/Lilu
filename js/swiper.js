var swiper = new Swiper(".mySwiper", {
  speed: 900,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  autoplay: {
    delay: 5000,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  // mousewheel: {
  //   invert: true,
  // },
});
