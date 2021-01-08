import { addClickHandler, subClickHandler, multiClickHandler, divClickHandler } from './handlers.js';

const addButton = document.getElementById('addButton');
const subButton = document.getElementById('subButton');
const multButton = document.getElementById('multButton');
const diviButton = document.getElementById('diviButton');

addButton.addEventListener('click', addClickHandler);

subButton.addEventListener('click', subClickHandler);

multButton.addEventListener('click', multiClickHandler);

diviButton.addEventListener('click', divClickHandler);

console.log('sweet birthday baby!');
