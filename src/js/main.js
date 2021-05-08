  // import Swiper from 'swiper';
  // // core version + navigation, pagination modules:
  // import SwiperCore, { Navigation, Pagination } from 'swiper/core';
  // // configure Swiper to use modules
  // SwiperCore.use([Navigation, Pagination]);

import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container', {

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

const swiper2 = new Swiper('.swiper-container', {

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