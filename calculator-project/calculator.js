
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

// Add numbers to display
let currentNumber = 0;
function addToDisplay() {
    if (this.textContent === '.' && display.textContent.includes('.')) {
        return; // Exit on second decimal
    }
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
    currentNumber = Number(display.textContent);
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


// Handle back button
function handleBack() {
    if (justCalculated) {
        return; // don't allow backspace after equal
    }
    display.textContent = display.textContent.slice(0, -1);
}

// Perform the calculation
function operate(a, b, operation) {
    switch(operation) {
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
        default:
            return b;
    }
    return Math.round(result * 1000000000000) / 1000000000000;
}

// Event listeners
numButtons.forEach(button => button.addEventListener('click', addToDisplay));
operatorButtons.forEach(button => button.addEventListener('click', handleOperator));
clearButton.addEventListener('click', clearDisplay);
equalButton.addEventListener('click', handleEquals);
backButton.addEventListener('click', handleBack);

document.addEventListener('keydown', function (e) {
    // Numbers 0-9
    if (e.key >= '0' && e.key <= '9') {
        const numberButton = Array.from(numButtons).find(btn => btn.textContent === e.key);
        if (numberButton) {
            numberButton.click();
        }
    }
    // Operators
    else if (e.key === '+') {
        document.getElementById('add').click();
    }
    else if (e.key === '-') {
        document.getElementById('subtract').click();
    }
    else if (e.key === '*') {
        document.getElementById('multiply').click();
    }
    else if (e.key === '/') {
        e.preventDefault(); // Prevent browser search
        document.getElementById('divide').click();
    }
    // Equals
    else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        equalButton.click();
    }
    // Clear
    else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        clearButton.click();
    }
    // Backspace
    else if (e.key === 'Backspace') {
        e.preventDefault();
        handleBack();
    }
    // Decimal point
    else if (e.key === '.') {
        const decimalButton = Array.from(numButtons).find(btn => btn.textContent === '.');
        if (decimalButton) {
            decimalButton.click();
        }
    }
});