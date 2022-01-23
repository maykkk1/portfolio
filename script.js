const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu)

function toggleMenu() {
    const nav = document.getElementById('nav-bar-mobile');
    btnMobile.classList.toggle('btn-active')
    nav.classList.toggle('active-nav')
}