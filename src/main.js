const iconMenu = document.querySelector('.icon_menu');
const menu = document.querySelector('.header__menu')

function clickear(){
    menu.classList.toggle('show__menu')
}

iconMenu.addEventListener('click', clickear)

const menuList = document.querySelectorAll('.header__menu a')

for(i of menuList){
    i.addEventListener('click', clickear)
}

