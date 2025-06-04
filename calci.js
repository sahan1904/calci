let display = document.getElementById('display');
let expressionDisplay = document.getElementById('expression-display');

let currentInput = '';
let operator = '';
let previousInput = '';
let expression = '';
// Configurable maximum number of characters
const maxCharacters = 10;

function updateDisplay() {
    expressionDisplay.innerText = expression;
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (currentInput.length >= maxCharacters) return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    expression += ` ${previousInput} ${operator}`;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    expression = '';
    updateDisplay();
}

function reciprocal() {
    if (parseFloat(currentInput) !== 0) {
        currentInput = (1 / parseFloat(currentInput)).toString();
    } else {
        currentInput = "Error";
    }
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '÷':
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }
    expression += ` ${current} =`;
    currentInput = result.toString().slice(0, maxCharacters);
    operator = '';
    previousInput = '';
    updateDisplay();
}

function calculateSquare() {
    if (currentInput === '') return;
    expression = `(${currentInput})² =`;
    currentInput = Math.pow(parseFloat(currentInput), 2).toString().slice(0, maxCharacters);
    updateDisplay();
}

function calculateCube() {
    if (currentInput === '') return;
    expression = `(${currentInput})³ =`;
    currentInput = Math.pow(parseFloat(currentInput), 3).toString().slice(0, maxCharacters);
    updateDisplay();
}

function calculateSquareRoot() {
    if (currentInput === '') return;
    expression = `√(${currentInput}) =`;
    currentInput = Math.sqrt(parseFloat(currentInput)).toString().slice(0, maxCharacters);
    updateDisplay();
}

function calculateCubeRoot() {
    if (currentInput === '') return;
    expression = `∛(${currentInput}) =`;
    currentInput = Math.cbrt(parseFloat(currentInput)).toString().slice(0, maxCharacters);
    updateDisplay();
}