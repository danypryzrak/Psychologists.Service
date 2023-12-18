import {
  getDatabase,
  ref,
  get,
  update,
  remove
} from 'firebase/database';
import { cardsFavMarkup, cardsMarkup, makeTermin, readMore } from './cardsMarkup';

export async function addToFavorite(sortedDoctors) {
  const doctorsCards = document.querySelectorAll('.doctor__card');

  doctorsCards.forEach(card => {
    card.addEventListener('click', async (ev) => {
        const heart = card.querySelector('#heart');
        const heartStyle = card.querySelector(".doctor__heart")
      if (ev.target !== heart) {
        return;
      }
      console.log("pop");

      const db = getDatabase();
      const userData = JSON.parse(localStorage.getItem("userData"));
      const userId = userData.uid;
      const userFavoritesRef = ref(db, 'users/' + userId + '/favoriteDoctors');

      const currentCard = ev.currentTarget;
      const name = currentCard.querySelector(".doctor__name").textContent;
      const needfullDoctor = sortedDoctors.find(doctor => doctor.name === name);

      const userFavoritesSnapshot = await get(userFavoritesRef);
      let userFavorites = userFavoritesSnapshot.val() || {};

      // Создайте уникальный идентификатор для врача (например, его doctorId).
      const doctorId = name;

      // Добавьте информацию о враче в избранных врачей пользователя.
      userFavorites[doctorId] = needfullDoctor;

      // Обновите узел "favoriteDoctors" пользователя в базе данных,
      // сохраняя существующие записи и добавляя новые.
        update(userFavoritesRef, userFavorites);
        heartStyle.style.fill = '#ff0000'
    });
  });
}

export async function removeFromFavorite() {
  const doctorsCards = document.querySelectorAll('.doctor__card');

  doctorsCards.forEach(card => {
    card.addEventListener('click', async (ev) => {
      const close = card.querySelector('.doctor__close');
    
      if (ev.target !== close) {
        return;
      }

      const db = getDatabase();
      const userData = JSON.parse(localStorage.getItem("userData"));
      const userId = userData.uid;
      

      const currentCard = ev.currentTarget;
      const name = currentCard.querySelector(".doctor__name").textContent;
      
      const doctorRef = ref(db, 'users/' + userId + '/favoriteDoctors/' + name);
        
      

      

      
       
          remove(doctorRef);

        card.style.display = "none"
      
    });
  });
}


if (document.location.pathname === "/favorites.html") {

    const select = document.querySelector(".doctors__select");
const loadMoreBtn = document.querySelector(".btn__loadMore");

const itemsPerPage = 3
let currentPage = 1
let favoriteDoctors

 async function loadFavorites() {

    const doctorsDiv = document.querySelector(".doctors__div")
        doctorsDiv.innerHTML = "";
    currentPage = 1
    
    try {
        const db = getDatabase();
        const userData = JSON.parse(localStorage.getItem("userData"));
        const userId = userData.uid;
        const doctorsRef = ref(db, 'users/' + userId + '/favoriteDoctors');
        const snapshot = await get(doctorsRef);
        const doctorsObj = snapshot.val();
        const doctors = Object.values(doctorsObj)
        const selectedValue = select.value
        
        
            switch (selectedValue) {
                case 'za':
                    favoriteDoctors = doctors.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        return nameB.localeCompare(nameA);
                    });

                    break;
                case 'from expensive':
                    favoriteDoctors = doctors.sort((a, b) => b.price_per_hour - a.price_per_hour);
                
                    break;
                case 'from cheap':
                    favoriteDoctors = doctors.sort((a, b) => a.price_per_hour - b.price_per_hour);

                    break;

                default:
                    favoriteDoctors = doctors.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        return nameA.localeCompare(nameB);
                    });

                    break;
            
            }

        
        } catch (error) {
            console.error('Error:', error.message);
    }
    loadMoreFavDoctors()
}

function loadMoreFavDoctors() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const doctorsOnPage = favoriteDoctors.slice(startIndex, endIndex); // Используйте ваш запрос к базе данных

        // Отобразите новых докторов на странице
        cardsFavMarkup(doctorsOnPage);
        readMore()
        makeTermin()
        removeFromFavorite()
        const heartStyle = document.querySelectorAll(".doctor__heart")
    

        // Увеличьте текущую страницу для следующей загрузки
        currentPage++;
}
    
select.addEventListener('change', loadFavorites);
    
loadMoreBtn.addEventListener("click", loadMoreFavDoctors)

loadFavorites()
}

