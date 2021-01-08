import { additionResult, subtractionResult, multiplicationResult, divisionResult } from './utils.js';

const addInput1 = document.getElementById('addInput1');
const addInput2 = document.getElementById('addInput2');
const addResults = document.getElementById('addResults');

const subInput1 = document.getElementById('subInput1');
const subInput2 = document.getElementById('subInput2');
const subResults = document.getElementById('subResults');

const multInput1 = document.getElementById('multInput1');
const multInput2 = document.getElementById('multInput2');
const multResults = document.getElementById('multResults');

const diviInput1 = document.getElementById('diviInput1');
const diviInput2 = document.getElementById('diviInput2');
const diviResults = document.getElementById('diviResults');

const Input1 = document.getElementById('Input1');
const Input2 = document.getElementById('Input2');
const megaResults = document.getElementById('megaResults')

export function addClickHandler() {
    const addNumber1 = addInput1.valueAsNumber;
    const addNumber2 = addInput2.valueAsNumber;
    const sum = additionResult(addNumber1, addNumber2);

    addResults.textContent = sum;
}

export function subClickHandler() {
    const subNumber1 = subInput1.valueAsNumber;
    const subNumber2 = subInput2.valueAsNumber;
    const sum = subtractionResult(subNumber1, subNumber2);

    subResults.textContent = sum;
}

export function multiClickHandler() {
    const multiNumber1 = multInput1.valueAsNumber;
    const multiNumber2 = multInput2.valueAsNumber;
    const sum = multiplicationResult(multiNumber1, multiNumber2);

    multResults.textContent = sum;
}

export function divClickHandler() {
    const divNumber1 = diviInput1.valueAsNumber;
    const divNumber2 = diviInput2.valueAsNumber;
    const sum = divisionResult(divNumber1, divNumber2);

    diviResults.textContent = sum;
}

//Mega Calculator Dropdown

export function dropdownAddClickHandler() {
    const addNumber1 = Input1.valueAsNumber;
    const addNumber2 = Input2.valueAsNumber;
    const sum = additionResult(addNumber1, addNumber2);

    megaResults.textContent = sum;
}

export function dropdownSubClickHandler() {
    const subNumber1 = Input1.valueAsNumber;
    const subNumber2 = Input2.valueAsNumber;
    const sum = subtractionResult(subNumber1, subNumber2);

    megaResults.textContent = sum;
}

export function dropdownMultiClickHandler() {
    const multiNumber1 = Input1.valueAsNumber;
    const multiNumber2 = Input2.valueAsNumber;
    const sum = multiplicationResult(multiNumber1, multiNumber2);

    megaResults.textContent = sum;
}

export function dropdownDiviClickHandler() {
    const divNumber1 = Input1.valueAsNumber;
    const divNumber2 = Input2.valueAsNumber;
    const sum = divisionResult(divNumber1, divNumber2);

    megaResults.textContent = sum;
}