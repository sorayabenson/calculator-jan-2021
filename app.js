import { addClickHandler, subClickHandler, multiClickHandler, divClickHandler, dropdownAddClickHandler, dropdownSubClickHandler, dropdownMultiClickHandler, dropdownDiviClickHandler } from './handlers.js';

const addButton = document.getElementById('addButton');
const subButton = document.getElementById('subButton');
const multButton = document.getElementById('multButton');
const diviButton = document.getElementById('diviButton');
const dropdownAdditionButton = document.getElementById('dropdownAddition');
const dropdownSubtractionButton = document.getElementById('dropdownSubtraction');
const dropdownMultiplicationButton = document.getElementById('dropdownMultiplication');
const dropdownDivisionButton = document.getElementById('dropdownDivision');

addButton.addEventListener('click', addClickHandler);

subButton.addEventListener('click', subClickHandler);

multButton.addEventListener('click', multiClickHandler);

diviButton.addEventListener('click', divClickHandler);

//Mega Calculator Dropdown

dropdownAdditionButton.addEventListener('click', dropdownAddClickHandler);

dropdownSubtractionButton.addEventListener('click', dropdownSubClickHandler);

dropdownMultiplicationButton.addEventListener('click', dropdownMultiClickHandler);

dropdownDivisionButton.addEventListener('click', dropdownDiviClickHandler);

console.log('sweet birthday baby!');
