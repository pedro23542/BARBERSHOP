  import Swiper from 'swiper';
  // core version + navigation, pagination modules:
  import SwiperCore, { Navigation, Pagination } from 'swiper/core';
  // configure Swiper to use modules
  SwiperCore.use([Navigation, Pagination]);


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

})