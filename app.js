const addInput1 = document.getElementById('addInput1');
const addInput2 = document.getElementById('addInput2');
const addButton = document.getElementById('addButton');
const addResults = document.getElementById('addResults');

const subInput1 = document.getElementById('subInput1');
const subInput2 = document.getElementById('subInput2');
const subButton = document.getElementById('subButton');
const subResults = document.getElementById('subResults');

const multInput1 = document.getElementById('multInput1');
const multInput2 = document.getElementById('multInput2');
const multButton = document.getElementById('multButton');
const multResults = document.getElementById('multResults');

const diviInput1 = document.getElementById('diviInput1');
const diviInput2 = document.getElementById('diviInput2');
const diviButton = document.getElementById('diviButton');
const diviResults = document.getElementById('diviResults');

addButton.addEventListener('click', () => {
    const result = addInput1.valueAsNumber + addInput2.valueAsNumber;

    addResults.textContent = result;

})

subButton.addEventListener('click', () => {
    const result = subInput1.valueAsNumber - subInput2.valueAsNumber;

    subResults.textContent = result;

})

multButton.addEventListener('click', () => {
    const result = multInput1.valueAsNumber * multInput2.valueAsNumber;

    multResults.textContent = result;

})

diviButton.addEventListener('click', () => {
    const result = diviInput1.valueAsNumber / diviInput2.valueAsNumber;

    diviResults.textContent = result;

})

console.log('sweet birthday baby!');
