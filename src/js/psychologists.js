import Notiflix from "notiflix";
import { firebaseConfig, app, auth, db } from "./fireBase";
import { getDatabase, ref, set, push, get, child, query, orderByChild, orderByValue, } from 'firebase/database';
import { cardsMarkup, readMore } from "./cardsMarkup";

const select = document.querySelector(".doctors__select");
const itemPerPage = 3
let currentPage = 1

function loadMoreDoctors() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const doctorsOnPage = allDoctors.slice(0, endIndex); // Используйте ваш запрос к базе данных

    // Отобразите новых докторов на странице
    displayDoctors(doctorsOnPage);

    // Увеличьте текущую страницу для следующей загрузки
    currentPage++;
}


async function handleSelectChange() {
    const doctorsDiv = document.querySelector(".doctors__div")
    doctorsDiv.innerHTML = "";
    try {

        const alphabetDoctors = query(ref(db, 'doctors'));
        const snapshot = await get(alphabetDoctors);
        const doctorsObj = snapshot.val();
        const doctors = Object.values(doctorsObj)
        const selectedValue = select.value
        let sortedDoctors 
        
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
        cardsMarkup(sortedDoctors)
        readMore()
        
    } catch (error) {
        console.error('Error:', error.message);
    }

    }

    // Добавляем слушатель события 'change' для <select>
select.addEventListener('change', handleSelectChange);

    // Вызываем функцию обработки события при загрузке страницы
    handleSelectChange();