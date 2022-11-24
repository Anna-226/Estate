import burger from './modules/burger';
import scrolling from './modules/scrolling';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   burger();
   scrolling();
   slider({
      sliderSelector: '.swiper',
      slideSelector: '.swiper-slide',
      wrapper: '.swiper-wrapper',
      slidesFieldSelector: '.testimonials__field',
      btnPrevSelector: '.swiper-button-prev',
      btnNextSelector: '.swiper-button-next',
   });
});