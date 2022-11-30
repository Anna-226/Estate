const burger = () => {
   const burgerBtn = document.querySelector('.icon-menu'),
         header = document.querySelector('header');

   burgerBtn.addEventListener('click', () => {
      header.classList.toggle('menu-open');
   });
   document.addEventListener('click', (e) => {
     let target = e.target;
      if (target && target.classList.contains('header__menu') || target && target.classList.contains('menu__link')) {
         header.classList.remove('menu-open');
      }
   });
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         header.classList.remove('menu-open');
      }
   });
};

export default burger;