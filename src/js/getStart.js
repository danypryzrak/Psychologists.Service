const startBtn = document.querySelector(".hero__btn")



if (document.location.pathname === '/index.html') {
    startBtn.addEventListener('click', (ev) => {
        window.location.href = './psychologists.html';
    })
}