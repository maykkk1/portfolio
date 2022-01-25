const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu)
function toggleMenu() {
    const nav = document.getElementById('nav-bar-mobile');
    btnMobile.classList.toggle('btn-active')
    nav.classList.toggle('active-nav')
}

let i = 0; 

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img")

const desc = document.getElementById("descricao")
const descItems = document.querySelectorAll("#descricao div")

btnNext = document.querySelector('#next-btn')
btnPrevious = document.querySelector('#previous-btn')
btnNext.addEventListener('click', next);
btnPrevious.addEventListener('click', previous)

function next() {
    i++
    if(i > img.length - 1) {
        i = 0;
    }
    imgs.style.transform = `translateX(${-i * 796.6}px)`;
    desc.style.transform = `translateX(${-i * 341.4}px)`;
}

function previous() {
    i--
    if(i < 0) {
        i = img.length - 1;
    }
    imgs.style.transform = `translateX(${-i * 796.6}px)`;
    desc.style.transform = `translateX(${-i * 341.4}px)`;
}


