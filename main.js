let currentInput = '';
let display = document.getElementById('display');
let numberButtons = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operation');
let clearButton = document.querySelector('.clear');
let calculateButton = document.querySelector('.calculate');
let isDot = false;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        pressKey(button.value);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        pressKey(button.value);
    });
});

clearButton.addEventListener('click', clearDisplay);
calculateButton.addEventListener('click', calculateResult);

function pressKey(key) {
    if (key === '.' && !isDot) {
        isDot = true;
        return;
    }
    if (key === '.' && (currentInput === '')) {
        currentInput += '0';
    }
    currentInput += key;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = currentInput.replace(/%/g, '%').replace(/\^/g, '**');

        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        alert('Ошибка в выражении: ' + error);
        clearDisplay();
    }
}