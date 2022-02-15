const btnHamburguer = document.getElementById("btnHamburguer")


btnHamburguer.addEventListener('click', showMobileMenu);
let mobileMenuActive = false;
function showMobileMenu(){
    if(mobileMenuActive) {
        const mobileMenu = document.getElementById("nav-bar-mobile");
        mobileMenu.style.right = "-100%"
        mobileMenuActive = false;
    } else {
        const mobileMenu = document.getElementById("nav-bar-mobile");
        mobileMenu.style.right = "0"
        mobileMenuActive = true;
    }
}
