'use strict';

const form = document.querySelector('.js__form');
const input = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const hint = document.querySelector('.js__hint');
const counter = document.querySelector('.js__counter');

window.addEventListener('load', (event) => {
    const randomNumber = getRandomNumber(100);
    console.log(randomNumber);
});

input.addEventListener('input', getNumber);
button.addEventListener('click', handleInput);

function getNumber() {
    console.log(parseInt(input.value));
    return parseInt(input.value);
}

function handleInput() {
    event.preventDefault();
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
