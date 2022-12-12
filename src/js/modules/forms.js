import { postData } from "../services/requests";
import { openModal } from "./modal";

const forms = () => {
   const form = document.querySelectorAll('form'),
         inputs = document.querySelectorAll('input');

   const message = {
      loading: 'Loading...',
      success: "Thanks! A specialist will contact you!",
      failure: "Something went wrong...",
   };

   const clearInputs = () => {
      inputs.forEach(item => {
         item.value = '';
      });
   }; 
   
   function showThanksMessage(messageClass, messageText) {
      
   }
   form.forEach(item => {
      item.addEventListener('submit', (e) => {
         e.preventDefault();
         openModal();
         const popupContent = document.querySelector('.popup__content');
         popupContent.style.display = 'none';
         let statusMessage = document.createElement('div');
         statusMessage.classList.add('popup__content');
         popupContent.parentNode.appendChild(statusMessage);
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
               statusImg.classList.remove('status-loading');
               statusImg.classList.add('status-ok');
               statusText.textContent = message.success;
            })
            .catch(() => {
               statusImg.classList.remove('status-loading');
               statusImg.classList.add('status-fail');
               statusText.textContent = message.failure;
            })
            .finally(() => {
               clearInputs();
               setTimeout(() => {
                  statusMessage.remove();
                  popupContent.style.display = 'block';
                  document.querySelector('.popup').style.display = 'none';
                  document.body.style.overflow = 'auto';
                  document.body.style.marginRight = `0px`;
               }, 3000);
            });
      });
   });
   
};

export default forms;