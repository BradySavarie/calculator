const defaultValue = 0;

let currentValue = defaultValue;
let operand1 = defaultValue;
let operand2 = defaultValue;
let operator = defaultValue;

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

function displayValue(value) {
    display.textContent = `${value}`;
}
displayValue(currentValue);

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

function percent(a) {
    return a / 100;
};

