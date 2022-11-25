import burger from './modules/burger';
import scrolling from './modules/scrolling';
import slider from './modules/slider';
import modal from './modules/modal';
import accordeon from './modules/accordeon';


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
   modal();
   accordeon('.links-footer__title', '.links-footer__links');
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