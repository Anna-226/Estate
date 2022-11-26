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


export default slider;