import Swiper, { Pagination, Navigation } from 'swiper';

Swiper.use([Pagination, Navigation]);

function initImagesSlider() {
  const swiper = new Swiper('.images__slider', {
    slidesPerView: 3,
    spaceBetween: 85,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      // when window width is >= 320
      320: {
        slidesPerView: 2,
        spaceBetween: 45,
      },
      // when window width is >= 475
      475: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      // when window width is >= 768
      768: {
        slidesPerView: 3,
        spaceBetween: 85,
      },
    },
  });

  const slides = document.querySelectorAll('.images__item');

  slides.forEach((el) => {
    el.addEventListener('click', () => {
      if (swiper.clickedIndex === swiper.activeIndex) return;

      if (swiper.activeIndex < swiper.clickedIndex) {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }
    });
  });
}

initImagesSlider();
