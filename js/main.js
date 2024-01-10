'use strict';

//QUERY SELECTORS
const textInput = document.querySelector('.js__input');
const gameButton = document.querySelector('.js__button');
const hintContent = document.querySelector('.js__hint');
const counterValue = document.querySelector('.js__counter');
const resetButton = document.querySelector('.js__reset__button');

//GLOBAL VARIABLES
let userNumber = 0;
let attempts = 0;
let randomNumber = 0;

//EVENT LISTENERS
window.addEventListener('load', (event) => {
    randomNumber = getRandomNumber(100);
    console.log(randomNumber);
});

textInput.addEventListener('input', getNumber);

gameButton.addEventListener('click', handleInput);

resetButton.addEventListener('click', resetGame);

//FUNCTIONS

function resetGame() {
    event.preventDefault();
    randomNumber = getRandomNumber(100);
    attempts = 0;
    fillInnerHtml(hintContent, 'Escribe el número y dale a Prueba.');
    fillInnerHtml(counterValue, `Número de intentos: ${attempts}`);
    textInput.value = '';
    gameButton.classList.remove('hidden');
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function getNumber() {
    userNumber = parseInt(textInput.value);
}

function handleInput() {
    event.preventDefault();

    evaluateNumber(userNumber);

    countAttempts();
}

function evaluateNumber(userNumber) {
    if (isNaN(userNumber)) {
        fillInnerHtml(hintContent, 'Introduce un valor numérico entre 1 y 100.');
    } else if (userNumber < 1 || userNumber > 100) {
        fillInnerHtml(hintContent, 'El número debe estar entre 1 y 100.');
    } else if (userNumber < randomNumber) {
        fillInnerHtml(hintContent, 'Demasiado bajo.');
    } else if (userNumber > randomNumber) {
        fillInnerHtml(hintContent, 'Demasiado alto.');
    } else if (userNumber === randomNumber) {
        fillInnerHtml(hintContent, 'Has ganado, campeona!!!');
    }
}

function countAttempts() {
    attempts++;
    fillInnerHtml(counterValue, `Número de intentos: ${attempts}`);

    if (attempts >= 10) {
        fillInnerHtml(hintContent, 'Demasiados intentos, game over!');
        gameButton.classList.add('hidden');
    }
}

function fillInnerHtml(element, content) {
    element.innerHTML = content;
}