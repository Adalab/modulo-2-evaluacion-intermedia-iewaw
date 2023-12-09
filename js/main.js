'use strict';

//QUERY SELECTORS
const input = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const hint = document.querySelector('.js__hint');
const counter = document.querySelector('.js__counter');

//GLOBAL VARIABLES
let userNumber = 0;
let attempts = 0;
let randomNumber = 0;

//EVENT LISTENERS
window.addEventListener('load', (event) => {
    randomNumber = getRandomNumber(100);
    console.log(randomNumber);
});

input.addEventListener('input', getNumber);

button.addEventListener('click', handleInput);

//FUNCTIONS
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function getNumber() {
    userNumber = parseInt(input.value);
}

function handleInput() {
    event.preventDefault();
    attempts++;

    counter.innerHTML = 'Número de intentos: ' + attempts;

    if (userNumber < 1 || userNumber > 100) {
        hint.innerHTML = 'El número debe estar entre 1 y 100.';
    } else if (userNumber < randomNumber) {
        hint.innerHTML = 'Demasiado bajo.';
    } else if (userNumber > randomNumber) {
        hint.innerHTML = 'Demasiado alto.'
    } else if (userNumber === randomNumber) {
        hint.innerHTML = 'Has ganado, campeona!!!'
    }
}
