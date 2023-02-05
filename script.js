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


//service
const gardenBtn = document.getElementById('buttonGardens');
const lawnBtn = document.getElementById('buttonLawn');
const plantingBtn = document.getElementById('buttonPlanting');

const gardenCard = document.querySelectorAll('.garden_card');
const lawnCard = document.querySelectorAll('.lawn_card');
const plantingCard = document.querySelectorAll('.planting_card');


gardenBtn.addEventListener('click', function () {
    plantingCard.forEach(function (item) {
        item.classList.toggle('selected');
    });
    lawnCard.forEach(function (item) {
        item.classList.toggle('selected');
    });
});

plantingBtn.addEventListener('click', function () {
    gardenCard.forEach(function (item) {
        item.classList.toggle('selected');
    });
    lawnCard.forEach(function (item) {
        item.classList.toggle('selected');
    });

});

lawnBtn.addEventListener('click', function () {
    plantingCard.forEach(function (item) {
        item.classList.toggle('selected');
    });
    gardenCard.forEach(function (item) {
        item.classList.toggle('selected');
    });
});