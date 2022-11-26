const accordeon = (triggerSelector, blockSelector) => {
   const titles = document.querySelectorAll(triggerSelector),
         blocks = document.querySelectorAll(blockSelector);
   titles.forEach((title, i) => {
      title.addEventListener('click', () => {
         if (window.innerWidth <= 479.98 ) {
            if (!title.classList.contains('active')) {
               showBlock(titles, i);
            } else {
               hideAll();
            }
         } else {
            //как автоматически перестроить обратно при ресайзе??
            blocks.forEach(block => {
               block.style.display = 'block';
            });
         }
      });
   });
   function showBlock(elems, n) {
      hideAll();
      blocks[n].style.display = 'block';
      blocks[n].previousElementSibling.classList.add('active');
   }
   function hideAll() {
      blocks.forEach(block => {
         block.style.display = 'none';
         block.previousElementSibling.classList.remove('active');
      });
   }
};
  
export default accordeon;
