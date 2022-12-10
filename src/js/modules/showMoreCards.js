import { getResource } from "../services/requests";

const showMoreCards = (triggerSelector, wrapper) => {
   const btn = document.querySelector(triggerSelector);

	//подгрузка карточек из верстки
	btn.addEventListener('click', function() {
		document.querySelectorAll('.house-card_more').forEach(card=>{
			card.classList.remove('hidden');
		});
		btn.remove();
	});

   //подгрузка карточек из БД
   /* btn.addEventListener('click', function() {
      getResource('http://localhost:3000/cards') 
         .then(res => createCard(res))
         .catch(error => console.log(error));
   });

   function createCard(response) {
      response.forEach(({link, src, type, adress, beds, bathrooms, rooms}) => {
         let styleCard = document.createElement('a');
         styleCard.classList.add('house-card');
         styleCard.setAttribute('href', link);
         styleCard.innerHTML =  
                  `  <div class="house-card__photo">
								<img src="${src}" alt="house">
							</div>
							<div class="house-card__description">
								<div class="house-card__main-information">
									<div class="house-card__type">${type}</div>
									<div class="house-card__adress">${adress}</div>
								</div>
								<div class="house-card__parametres">
									<div class="parametres-item">
										<div class="parametres-item__icon">
											<img src="img/icons/Bed-Icon.svg" alt="bed-icon">
										</div>
										<div class="parametres-item__text">${beds}</div>
									</div>
									<div class="parametres-item">
										<div class="parametres-item__icon">
											<img src="img/icons/Bath-Icon.svg" alt="bed-icon">
										</div>
										<div class="parametres-item__text">${bathrooms}</div>
									</div>
									<div class="parametres-item">
										<div class="parametres-item__icon">
											<img src="img/icons/Door-Icon.svg" alt="bed-icon">
										</div>
										<div class="parametres-item__text">${rooms}</div>
									</div> 
								</div>
							</div>`;
         document.querySelector(wrapper).appendChild(styleCard);
      });
   } */
	
};

export default showMoreCards;