const scrolling = () => {

   let links = document.querySelectorAll('[href^="#"]'),
       speed = 0.6;

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

   const  upBtn = document.querySelector('.pageup');
   window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 1650) {
         upBtn.style.display = 'block';
      } else {
         upBtn.style.display = 'none';
      }
   });
};

export default scrolling;