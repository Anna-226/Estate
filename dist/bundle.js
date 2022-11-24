/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = () => {
   const burgerBtn = document.querySelector('.icon-menu'),
         header = document.querySelector('header');

   burgerBtn.addEventListener('click', () => {
      header.classList.toggle('menu-open');
   });
   document.addEventListener('click', (e) => {
     let target = e.target;
      if (target && target.classList.contains('header__menu')) {
         header.classList.remove('menu-open');
      }
   });
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         header.classList.remove('menu-open');
      }
   });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./js/modules/scrolling.js":
/*!*********************************!*\
  !*** ./js/modules/scrolling.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = () => {

   let links = document.querySelectorAll('[href^="#"]'),
       speed = 0.7;

   links.forEach(link => {
      link.addEventListener('click', function(event) {
         event.preventDefault();

         let widthTop = Math.round(document.documentElement.scrollTop || document.body.scrollTop),
             hash = this.hash,
             toBlock = document.querySelector(hash).getBoundingClientRect().top,
             start = null;

         requestAnimationFrame(step);
         function step(time) {
            if (start === null) {
               start = time;
            }

            let progress = time - start,
                r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

            document.documentElement.scrollTo(0, r);

            if (r != widthTop + toBlock) {
               requestAnimationFrame(step);
            } else {
               location.hash = hash;
            }
         }
      });
   });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({slideSelector, wrapper, btnPrevSelector, btnNextSelector}) {

   const slides = document.querySelectorAll(slideSelector),
         slidesWrapper = document.querySelector(wrapper),
         btnPrev = document.querySelector(btnPrevSelector),
         btnNext = document.querySelector(btnNextSelector);

   let offset = 0,
       gap = 20,
       slideWidth,
       wrapperWidth;
   
   function sliderInit() {
      slideWidth = window.getComputedStyle(slides[0]).width;
      wrapperWidth =(+parseFloat(slideWidth) + gap)*slides.length;
      slidesWrapper.style.width = wrapperWidth + 'px';
      slidesWrapper.style.display = 'flex';
      slidesWrapper.style.gap = gap +'px';
      slidesWrapper.style.transition = '0.5s all';
   }
   sliderInit();

   window.addEventListener('resize', () => {
      sliderInit();
   });

   function changeSlide(translation) {
      slidesWrapper.style.transform = `translateX(${translation}px)`;
   }
   
   btnNext.addEventListener('click', () => {
      if (offset <= -((+parseFloat(slideWidth)+gap) * (slides.length-1))) {
         offset = 0;
      }else{
         offset -= +parseFloat(slideWidth) + gap;
      }
      changeSlide(offset);
   });

   btnPrev.addEventListener('click', () => {
      if (offset >= 0) {
         offset = -((+parseFloat(slideWidth)+gap) * (slides.length-1));
      }else{
         offset += +parseFloat(slideWidth) + gap;
      }
      changeSlide(offset);
   });
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrolling */ "./js/modules/scrolling.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");





window.addEventListener('DOMContentLoaded', () => {
   'use strict';
   (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
   (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_1__["default"])();
   (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map