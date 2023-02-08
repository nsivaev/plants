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

//contacts

const dropDownBtn = document.querySelector('.main-dropdown__button');
const dropDownList = document.querySelector('.main-dropdown__list');
const dropDownListItems = dropDownList.querySelectorAll('.main-dropdown__list-item');
const dropDownInput = document.querySelector('.main-dropdown__input-hidden');
const dropDownBlockCity = document.querySelector('.main-contacts__block-city');


dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('main-dropdown__list--visible');
    this.classList.add('main-dropdown__button--active');
    dropDownBlockCity.classList.add('main-contacts__block-city--active');
})

dropDownListItems.forEach(function(listItem) {
    listItem.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.main-dropdown__button__text').innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        const dropDownInputValue = dropDownInput.value;
        dropDownList.classList.remove('main-dropdown__list--visible');

        const dropDownCityActive = document.getElementById(dropDownInputValue);
        const dropDownCityNone = document.querySelectorAll('.block-city__body');

        dropDownCityNone.forEach((item) =>
            item.classList.remove('block-city__body--active')
        )

        dropDownCityActive.classList.add('block-city__body--active');

    })

})

document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('main-dropdown__button--active');
        dropDownBlockCity.classList.remove('main-contacts__block-city--active');
        dropDownList.classList.remove('main-dropdown__list--visible');
    }
})