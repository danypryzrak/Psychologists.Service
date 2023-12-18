import Notiflix from 'notiflix';
import axios from 'axios';
import { registerUser, loginUser } from './fireBase';

const logBtn = document.querySelector(".btn__login")
const regBtn = document.querySelector(".btn__reg")
const logModal = document.querySelector(".modal-log")
const regModal = document.querySelector(".modal-reg")
const terminModal = document.querySelector(".modal-termin")
const closeModalLog = document.querySelector(".close-log")
const closeModalReg = document.querySelector(".close-reg")
const closeModalTermin = document.querySelector(".close-termin")
const logForm = document.querySelector(".log-form")
const regForm = document.querySelector(".reg-form")
const terminForm = document.querySelector(".modal__form-termin")

if (document.location.pathname !== '/favorites.html') {

logBtn.addEventListener("click", () => {
    logModal.style.display = "flex"
})

regBtn.addEventListener("click", () => {
    regModal.style.display = "flex"
})

closeModalLog.addEventListener("click", () => {
    logModal.style.display = "none";
})

closeModalReg.addEventListener("click", () => {
    regModal.style.display = "none";
})

window.addEventListener('click', function(event) {
    if (event.target === logModal) {
        logModal.style.display = 'none';
    }
});

window.addEventListener('click', function(event) {
    if (event.target === regModal) {
        regModal.style.display = "none";
    }
});

logForm.addEventListener("submit", (ev) => {
    ev.preventDefault()
    const passwordInp = document.querySelector(".log-password")
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;

    if (!passwordPattern.test(passwordInp.value)) {
    Notiflix.Notify.warning('Password must contain at least 1 capital letter and number');
  } else {
        const email = ev.currentTarget.email.value
        const password = ev.currentTarget.password.value
        try {
            loginUser(email, password)
            logModal.style.display = "none";
            Notiflix.Notify.success('User logged in successfully:');
        } catch (error) {
            console.log(error)
            Notiflix.Notify.failure("Something was happened",error)
        }  
    }


    
    
})

regForm.addEventListener("submit", (ev) => {
    ev.preventDefault()
    console.log(ev.currentTarget)
    const passwordInp = document.querySelector(".reg-password")
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;

    if (!passwordPattern.test(passwordInp.value)) {
    Notiflix.Notify.warning('Password must contain at least 1 capital letter and number');
  } else {
        const name = ev.currentTarget.name.value
        const email = ev.currentTarget.email.value
        const password = ev.currentTarget.password.value
        try {
            registerUser(name, email, password)
            regModal.style.display = "none";
            Notiflix.Notify.success('Registration was succes')
            regForm.reset()
        } catch (error) {
            console.log(error)
            Notiflix.Notify.failure("Something was happened",error)
        }
    }


    
    
})

}

if (document.location.pathname !== '/index.html') {

    closeModalTermin.addEventListener("click", () => {
        terminModal.style.display = "none";
    })

    terminForm.addEventListener("submit", (ev) => {
        ev.preventDefault()
        terminModal.style.display = "none";
        Notiflix.Notify.success("Your psychologist will contact with you soon")
    })

    window.addEventListener('click', function (event) {
        if (event.target === terminModal) {
            terminModal.style.display = "none";
        }
    });

}