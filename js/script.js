const modal = document.querySelector('.modal');
const headerBtn = document.querySelector('.header__btn');
const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.nav__menu');
const burgerSpan = document.querySelectorAll('.burger__span');
const navBtn = document.querySelector('.header__btn__nav');

function openModal() {
    modal.classList.add('modal__active');
}

function closeModal(event) {
    modal.classList.remove('modal__active');
}

function hangleClick(event) {
    if (event.target === event.currentTarget)
        closeModal(event);
}

function toggleBurger(event) {
    burgerMenu.classList.toggle('open');
}

burgerSpan.forEach((burger__span) => {
    burgerBtn.addEventListener('click', () => {
        burger__span.classList.toggle('open__span')
    });
})

navBtn.addEventListener ('click', openModal);

headerBtn.addEventListener('click', openModal);

modal.addEventListener ('click', hangleClick);

burgerBtn.addEventListener ('click', toggleBurger);
