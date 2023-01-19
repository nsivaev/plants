const menuBtn = document.getElementById('menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click', handleClick)
menu.addEventListener('click', function(){
    menu.classList.toggle('active');
})

function handleClick() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}