import Notiflix from "notiflix";
import { db } from "./fireBase";
import { getDatabase, ref, set, push, get, child, query, orderByChild, orderByValue, } from 'firebase/database';
import { cardsMarkup, makeTermin, readMore } from "./cardsMarkup";
import { addToFavorite } from "./favorites";

let sortedDoctors

if (document.location.pathname === '/psychologists.html') {
    
    const select = document.querySelector(".doctors__select");
    const loadMoreBtn = document.querySelector(".btn__loadMore");

    const itemsPerPage = 3
    let currentPage = 1
    

    async function handleSelectChange() {
        const doctorsDiv = document.querySelector(".doctors__div")
        doctorsDiv.innerHTML = "";
        currentPage = 1
        try {

            const alphabetDoctors = query(ref(db, 'doctors'));
            const snapshot = await get(alphabetDoctors);
            const doctorsObj = snapshot.val();
            const doctors = Object.values(doctorsObj)
            const selectedValue = select.value
        
        
            switch (selectedValue) {
                case 'za':
                    sortedDoctors = doctors.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        return nameB.localeCompare(nameA);
                    });

                    break;
                case 'from expensive':
                    sortedDoctors = doctors.sort((a, b) => b.price_per_hour - a.price_per_hour);
                
                    break;
                case 'from cheap':
                    sortedDoctors = doctors.sort((a, b) => a.price_per_hour - b.price_per_hour);

                    break;

                default:
                    sortedDoctors = doctors.sort((a, b) => {
                        const nameA = a.name.toLowerCase();
                        const nameB = b.name.toLowerCase();
                        return nameA.localeCompare(nameB);
                    });

                    break;
            
            }

        
        } catch (error) {
            console.error('Error:', error.message);
        }
        loadMoreDoctors()
    }

    function loadMoreDoctors() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const doctorsOnPage = sortedDoctors.slice(startIndex, endIndex); // Используйте ваш запрос к базе данных

        // Отобразите новых докторов на странице
        cardsMarkup(doctorsOnPage);
        readMore()
        makeTermin()
        addToFavorite(sortedDoctors)

        // Увеличьте текущую страницу для следующей загрузки
        currentPage++;
    }

    select.addEventListener('change', handleSelectChange);
    
    loadMoreBtn.addEventListener("click", loadMoreDoctors)

    handleSelectChange();

}