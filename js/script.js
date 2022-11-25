import burger from './modules/burger';
import scrolling from './modules/scrolling';
import slider from './modules/slider';
import modal from './modules/modal';
import accordeon from './modules/accordeon';
import mask from './modules/mask';
import forms from './modules/forms';


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
   mask('.form__input_phone');
   forms();
});