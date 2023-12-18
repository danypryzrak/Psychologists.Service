let cardId = 0

export function cardsMarkup(doctors) {
    const doctorsDiv = document.querySelector(".doctors__div")
    const loadMoreBtnBox = document.querySelector(".btn__loadMore-box")
    
    for (const doctor of doctors) {
        cardId ++
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="doctor__card" id="card${cardId}">
                    <div class="doctor__avatar">
                        <img class="doctor__img" src="${doctor.avatar_url}" alt="doctror">
                    </div>
                    <div class="doctor__info">

                        <div class="doctor__1">
                            <div>
                                <p class="doctor__psych">Psychologist</p>
                                <h1 class="doctor__name">${doctor.name}</h1>
                            </div>
                            <div>
                                <div class="doctor__1-1">
                                    <svg class="doctor__star">
                                        <use href="./image/symbol-defs.svg#star"></use>
                                    </svg>
                                    <p class="doctor__rating">Rating: ${doctor.rating}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16"
                                        fill="none">
                                        <path d="M1 0V16" stroke="#191A15" stroke-opacity="0.2" />
                                    </svg>
                                    <p class="doctor__price">Price / hour: <span style="color: #38CD3E;">${doctor.price_per_hour}$</span></p>
                                    <svg class="doctor__heart">
                                        <use id="heart" href="./image/symbol-defs.svg#heart"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <ul class="doctor__characteristics">
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">Experience: </span>${doctor.experience}</p>
                            </li>
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">License: </span>${doctor.license}</p>
                            </li>
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">Specialization:</span>${doctor.specialization}</p>
                            </li>
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">Initial_consultation:</span>${doctor.initial_consultation}</p>
                            </li>
                        </ul>
                        <p class="doctor__discr">${doctor.about}</p>

                        <span class="doctor__more" data-target="card${cardId}">Read more</span>

                        <div class="doctor__reviews" style="display: none;">

                            <div class="doctor__review">
                                <div class="review__block">
                                    <div class="review__avatar">
                                        <h2 class="review__letter">${doctor.reviews[0].reviewer[0]}</h2>
                                    </div>
                                    <div>
                                        <p class="review__name">${doctor.reviews[0].reviewer}</p>

                                        <div class="review__rating">
                                            <svg class="doctor__star">
                                                <use href="./image/symbol-defs.svg#star"></use>
                                            </svg>
                                            <p>
                                            ${doctor.reviews[0].rating}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="review__text">${doctor.reviews[0].comment}</p>
                            </div>

                            <div class="doctor__review review2">
                                <div class="review__block">
                                    <div class="review__avatar">
                                        <h2 class="review__letter">${doctor.reviews[1].reviewer[0]}</h2>
                                    </div>
                                    <div>
                                        <p class="review__name">${doctor.reviews[1].reviewer}</p>

                                        <div class="review__rating">
                                            <svg class="doctor__star">
                                                <use href="./image/symbol-defs.svg#star"></use>
                                            </svg>
                                            <p>
                                            ${doctor.reviews[1].rating}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="review__text">${doctor.reviews[1].comment}</p>
                            </div>
                            <button class="btn--green btn__termin" type="button">Make an appointment</button>
                        </div>


                    </div>

                </div>
        `
        
        doctorsDiv.append(card)
    }
    
    loadMoreBtnBox.style.display = "flex"
}

export function cardsFavMarkup(doctors) {
    const doctorsDiv = document.querySelector(".doctors__div")
    const loadMoreBtnBox = document.querySelector(".btn__loadMore-box")
    
    for (const doctor of doctors) {
        cardId ++
        const card = document.createElement("div")
        card.innerHTML = `
        <div class="doctor__card" id="card${cardId}">
                    <div class="doctor__avatar">
                        <img class="doctor__img" src="${doctor.avatar_url}" alt="doctror">
                    </div>
                    <div class="doctor__info">

                        <div class="doctor__1">
                            <div>
                                <p class="doctor__psych">Psychologist</p>
                                <h1 class="doctor__name">${doctor.name}</h1>
                            </div>
                            <div>
                                <div class="doctor__1-1">
                                    <svg class="doctor__star">
                                        <use href="./image/symbol-defs.svg#star"></use>
                                    </svg>
                                    <p class="doctor__rating">Rating: ${doctor.rating}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="16" viewBox="0 0 2 16"
                                        fill="none">
                                        <path d="M1 0V16" stroke="#191A15" stroke-opacity="0.2" />
                                    </svg>
                                    <p class="doctor__price">Price / hour: <span style="color: #38CD3E;">${doctor.price_per_hour}$</span></p>
                                    <span class="doctor__close">&times;</span>
                                </div>
                            </div>
                        </div>

                        <ul class="doctor__characteristics">
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">Experience: </span>${doctor.experience}</p>
                            </li>
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">License: </span>${doctor.license}</p>
                            </li>
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">Specialization:</span>${doctor.specialization}</p>
                            </li>
                            <li>
                                <p class="doctor__characteristic"><span style="color: #8A8A89;">Initial_consultation:</span>${doctor.initial_consultation}</p>
                            </li>
                        </ul>
                        <p class="doctor__discr">${doctor.about}</p>

                        <span class="doctor__more" data-target="card${cardId}">Read more</span>

                        <div class="doctor__reviews" style="display: none;">

                            <div class="doctor__review">
                                <div class="review__block">
                                    <div class="review__avatar">
                                        <h2 class="review__letter">${doctor.reviews[0].reviewer[0]}</h2>
                                    </div>
                                    <div>
                                        <p class="review__name">${doctor.reviews[0].reviewer}</p>

                                        <div class="review__rating">
                                            <svg class="doctor__star">
                                                <use href="./image/symbol-defs.svg#star"></use>
                                            </svg>
                                            <p>
                                            ${doctor.reviews[0].rating}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="review__text">${doctor.reviews[0].comment}</p>
                            </div>

                            <div class="doctor__review review2">
                                <div class="review__block">
                                    <div class="review__avatar">
                                        <h2 class="review__letter">${doctor.reviews[1].reviewer[0]}</h2>
                                    </div>
                                    <div>
                                        <p class="review__name">${doctor.reviews[1].reviewer}</p>

                                        <div class="review__rating">
                                            <svg class="doctor__star">
                                                <use href="./image/symbol-defs.svg#star"></use>
                                            </svg>
                                            <p>
                                            ${doctor.reviews[1].rating}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="review__text">${doctor.reviews[1].comment}</p>
                            </div>
                            <button class="btn--green btn__termin" type="button">Make an appointment</button>
                        </div>


                    </div>

                </div>
        `
        
        doctorsDiv.append(card)
    }
    
    loadMoreBtnBox.style.display = "flex"
}


export function readMore() {
    const readMoreButtons = document.querySelectorAll('.doctor__more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', (ev) => {
    
    const targetCardId = button.getAttribute('data-target');

    const targetCard = document.getElementById(targetCardId);

    const hiddenContent = targetCard.querySelector('.doctor__reviews');

    hiddenContent.style.display = hiddenContent.style.display === 'none' ? 'flex' : 'none';
    });
});
}

export function makeTermin() {
    const doctorsCards = document.querySelectorAll('.doctor__card');

doctorsCards.forEach(card => {
    card.addEventListener('click', (ev) => {
        if (ev.target.nodeName !== "BUTTON") {
        return
        }
        
        const currentCard = ev.currentTarget
        const fotoSrc = currentCard.querySelector(".doctor__img").getAttribute("src")
        const name = currentCard.querySelector(".doctor__name").textContent
        const overlay = document.querySelector(".modal-termin");
        const doctorFoto = document.querySelector(".modal__foto")
        const doctorName = document.querySelector(".modal__name")

        doctorFoto.setAttribute("src", fotoSrc)
        doctorName.textContent = name
        
        
        overlay.style.display = "flex"

    });
});
}


    