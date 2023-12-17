export function isLogedIn() {
    const favorites = document.querySelector(".nav__favorites")
    const headerBtns = document.querySelector(".header__buttons")
    const userDiv = document.querySelector(".user__div")
    const userName = document.querySelector(".user__name")
    

    if (localStorage.getItem("userData") !== null) {
        const name = JSON.parse(localStorage.getItem("userData")).username
        console.log(name)
        favorites.style.display = "block"
        headerBtns.style.display = "none"
        userName.textContent = name
        userDiv.style.display = "flex"

    }
}