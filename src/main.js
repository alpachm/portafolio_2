const iconMenu = document.querySelector('.icon_menu');
const menu = document.querySelector('.header__menu')

iconMenu.addEventListener('click', function(){
    menu.classList.toggle('show__menu')
})

console.log(iconMenu);