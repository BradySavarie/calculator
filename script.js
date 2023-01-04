// global variables //

const defaultValue = 0;
let currentValue = defaultValue;
let operand1 = defaultValue;
let operand2 = defaultValue;
let operator = defaultValue;

// DOM elements //

const display = document.getElementById('display');
const zeroBtn = document.getElementById('0');
const oneBtn = document.getElementById('1');
const twoBtn = document.getElementById('2');
const threeBtn = document.getElementById('3');
const fourBtn = document.getElementById('4');
const fiveBtn = document.getElementById('5');
const sixBtn = document.getElementById('6');
const sevenBtn = document.getElementById('7');
const eightBtn = document.getElementById('8');
const nineBtn = document.getElementById('9');
const addBtn = document.getElementById('addition');
const subtractBtn = document.getElementById('subtraction');
const multiplyBtn = document.getElementById('multiplication');
const divideBtn = document.getElementById('division');
const percentBtn = document.getElementById('percent');
const equalsBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');
const signBtn = document.getElementById('sign');
const allClearBtn = document.getElementById('allClear');
const clearEntryBtn = document.getElementById('clearEntry');
const controlsDiv = document.getElementsByClassName('controls');

// event listeners //

zeroBtn.addEventListener('click', () => {
    updateCurrentValue(0);
    displayValue(currentValue);
});
oneBtn.addEventListener('click', () => {
    updateCurrentValue(1);
    displayValue(currentValue);
});
twoBtn.addEventListener('click', () => {
    updateCurrentValue(2);
    displayValue(currentValue);
});
threeBtn.addEventListener('click', () => {
    updateCurrentValue(3);
    displayValue(currentValue);
});
fourBtn.addEventListener('click', () => {
    updateCurrentValue(4);
    displayValue(currentValue);
});
fiveBtn.addEventListener('click', () => {
    updateCurrentValue(5);
    displayValue(currentValue);
});
sixBtn.addEventListener('click', () => {
    updateCurrentValue(6);
    displayValue(currentValue);
});
sevenBtn.addEventListener('click', () => {
    updateCurrentValue(7);
    displayValue(currentValue);
});
eightBtn.addEventListener('click', () => {
    updateCurrentValue(8);
    displayValue(currentValue);
});
nineBtn.addEventListener('click', () => {
    updateCurrentValue(9);
    displayValue(currentValue);
});
decimalBtn.addEventListener('click', () => {
    updateCurrentValue('.');
    displayValue(currentValue);
});
signBtn.addEventListener('click', () => {
    invertSign(currentValue);
    displayValue(currentValue);
});

/*
addBtn.addEventListener('click', );
subtractBtn.addEventListener('click', );
multiplyBtn.addEventListener('click', );
divideBtn.addEventListener('click', );
*/

percentBtn.addEventListener('click', () => {
    toPercentage(currentValue);
    displayValue(currentValue);
});

/*
equalsBtn.addEventListener('click', );
allClearBtn.addEventListener('click', );
clearEntryBtn.addEventListener('click', );
*/

// functions //

function displayValue(value) {
    if (value.toString().length > 10) return;  
    display.textContent = `${value}`;
};

function updateCurrentValue(newValue) {
    if (currentValue === defaultValue) {
        return currentValue = newValue;
    };
    currentValue = +`${currentValue}${newValue}`;
};

function storeOperand1(value) {
    operand1 = value;
};

function storeOperand2(value) {
    operand2 = value;
};

function storeOperator(value) {
    operator = value;
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function toPercentage(a) {
    currentValue = +parseFloat((a / 100).toFixed(5));
};

function invertSign(a) {
    currentValue = a * -1;
};

function allClear() {

};

function clearEntry() {

};

// limit display width based on controls div
display.style.maxWidth = `${controlsDiv[0].clientWidth}px`;

// default loadup
window.onload = () => {
    displayValue(currentValue);
}
