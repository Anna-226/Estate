import burger from './modules/burger';
import scrolling from './modules/scrolling';
import slider from './modules/slider';


window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   burger();
   scrolling();
   slider({
      slideSelector: '.testimonials__slide',
      wrapper: '.testimonials__wrapper',
      btnPrevSelector: '.testimonials__button_prev',
      btnNextSelector: '.testimonials__button_next',
   });
});