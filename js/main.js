'use strict';

const form = document.querySelector('.js__form');
const input = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const hint = document.querySelector('.js__hint');
const counter = document.querySelector('.js__counter');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);