  // import Swiper from 'swiper';
  // // core version + navigation, pagination modules:
  // import SwiperCore, { Navigation, Pagination } from 'swiper/core';
  // // configure Swiper to use modules
  // SwiperCore.use([Navigation, Pagination]);

import Swiper from 'swiper/bundle';

const swiper = new Swiper('.reviews__slider.swiper-container', {

  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

});

const swiper2 = new Swiper('.info-block__slider.swiper-container', {

  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.info-block__btn-left',
    prevEl: '.info-block__btn-right',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
 },


});

//Product-view slider

const productPageSlider = new Swiper('.product-view__slider-item.swiper-container', {
  slidesPerView: 1,
 });

let sliderNavItems = document.querySelectorAll('.product-view__slider-small-img');
console.log(sliderNavItems);
sliderNavItems.forEach((item, index) => {

  item.setAttribute('data-index', index);

  item.addEventListener('click', (e) => {
    const index = e.currentTarget.dataset.index;
   console.log(index);
   productPageSlider.slideTo(index);
  });

});