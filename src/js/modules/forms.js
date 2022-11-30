import { postData } from "../services/requests";

const forms = () => {
   const form = document.querySelectorAll('form'),
         inputs = document.querySelectorAll('input');

   const message = {
      loading: 'Загрузка...',
      success: "Спасибо! С Вами свяжется специалист!",
      failure: "Что-то пошло не так...",
      //spinner: '../../img/spinner.gif',
      //ok: '../../img/ok.png',
      //fail: '../../img/fail.png', 
   };

   const clearInputs = () => {
      inputs.forEach(item => {
         item.value = '';
      });
   }; 
     
   form.forEach(item => {
      item.addEventListener('submit', (e) => {
         e.preventDefault();
         
         let statusMessage = document.createElement('div');
        // statusMessage.classList.add('status-loading');
         item.style.display = 'none';
         item.parentNode.appendChild(statusMessage);

         let statusImg = document.createElement('div');
         statusImg.classList.add('status-loading');
         statusMessage.appendChild(statusImg);

         let statusText = document.createElement('div');
         statusText.textContent = message.loading;
         statusMessage.appendChild(statusText);

         const formData =  new FormData(item);

         postData('../../server.php', formData)
            .then(res => {
               console.log(res);
               statusImg.classList.add('status-ok');
               statusText.textContent = message.success;
            })
            .catch(() => {
               statusImg.classList.add('status-fail');
               statusText.textContent = message.failure;
            })
            .finally(() => {
               clearInputs();
               setTimeout(() => {
                  statusMessage.remove();
                  item.style.display = 'flex';
               }, 5000);
            });
      });
   });
   
};

export default forms;