// elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// listeners
menuBtn.addEventListener('click', handleClick)
menu.addEventListener('click', handleClick)

// functions
function handleClick() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}