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
   /* document.addEventListener("watcherCallback", function (e) {
      const entry = e.detail.entry;
      const targetElement = entry.target;
      console.log(targetElement);
      if (targetElement.dataset.watch === 'video') {
         if (entry.isIntersecting) {
            targetElement.querySelector('video').play();
         } else {
            targetElement.querySelector('video').pause();
         }
      }
   }); */
});