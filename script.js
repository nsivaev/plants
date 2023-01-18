let menuBtn = document.getElementById('#menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', handleClick)
menu.addEventListener('click', function(){
    menu.classList.toggle('active');
})

function handleClick() {
    console.log('123')
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}