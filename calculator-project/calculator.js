
// Calculate Functions
const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
}
const multiply = function(a, b) {
    return a * b;
}
const divide = function(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

// Calculator state variables
let firstNumber = null;
let operator = null;
let waitingForSecondNumber = false;
let justCalculated = false;

// DOM elements
const display = document.getElementById('display');
const numButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operatorButton');
const clearButton = document.getElementById('clearButton');
const equalButton = document.getElementById('equalButton');

// Add number to display
function addToDisplay() {
    if (justCalculated) {
        display.textContent = this.textContent;
        justCalculated = false;
    } else if (waitingForSecondNumber) {
        display.textContent = this.textContent;
        waitingForSecondNumber = false;
    } else if (display.textContent === '0') {
        display.textContent = this.textContent;
    } else {
        display.textContent += this.textContent;
    }
}

// Handle operator button clicks
function handleOperator() {
    const currentDisplayValue = parseFloat(display.textContent);

    if (firstNumber === null) {
        firstNumber = currentDisplayValue;
    } else if (operator && !waitingForSecondNumber) {
        const result = operate(firstNumber, currentDisplayValue, operator);
        display.textContent = result;
        firstNumber = result;
    }

    const operatorMap = {
        '+': 'add',
        '-': 'subtract',
        '*': 'multiply',
        '/': 'divide'
    };
    operator = operatorMap[this.textContent];
    waitingForSecondNumber = true;
    justCalculated = false;
}

// Handle equals button
function handleEquals() {
    if (firstNumber !== null && operator && !waitingForSecondNumber) {
        const secondNumber = parseFloat(display.textContent);
        const result = operate(firstNumber, secondNumber, operator);
        display.textContent = result;
        firstNumber = null;
        operator = null;
        waitingForSecondNumber = false;
        justCalculated = true;
    }
}

// Clear calculator
function clearDisplay() {
    display.textContent = '0';
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
}


// Perform the calculation
function operate(a, b, operation) {
    switch(operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return b;
    }
}

// Event listeners
numButtons.forEach(button => button.addEventListener('click', addToDisplay));
operatorButtons.forEach(button => button.addEventListener('click', handleOperator));
clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', handleEquals);