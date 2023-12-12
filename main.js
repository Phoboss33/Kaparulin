let currentInput = '';
let display = document.getElementById('display');
let upperText = document.getElementById('upperText');

let numberButtons = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operation');
let clearButton = document.querySelector('.clear');
let sqrtButton = document.querySelector('.sqrt');
let calculateButton = document.querySelector('.calculate');
let stepenButton = document.querySelector('.stepen');
let isDot = false;

let firstNumber = 0;
let currentOperator;
let vtoroeNumber = 0;

let pressCount = 0;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        pressKey(button.value);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        pressOperator(button.value)
    });
});

clearButton.addEventListener('click', clearDisplay);
sqrtButton.addEventListener('click', sqrt);
stepenButton.addEventListener('click', stepen);
calculateButton.addEventListener('click', calculateResult);

function pressKey(key) {
    if (key === "." && display.value.includes(".")) {
        return;
    }
    if (display.value === "" && key === ".") {
        display.value += "0";
    }
    currentInput = key;
    display.value += currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = currentInput;
}

function pressOperator(key) {
    if (display.value != "") {
        pressCount++;
        currentOperator = key;
        upperText.textContent = firstNumber + currentOperator;
        if (pressCount % 2 == 0) {
            vtoroeNumber = display.value;
            pressCount = 0;
            display.value = eval(firstNumber + currentOperator + vtoroeNumber);
        }
        else {
            firstNumber = display.value;
            display.value = "";
            upperText.textContent = firstNumber + currentOperator;
        }
    }
    console.log(vtoroeNumber);
    console.log(pressCount);
}

function calculateResult() {
    upperText.textContent = ""
    vtoroeNumber = display.value;
    display.value = eval(firstNumber + currentOperator + vtoroeNumber);
    firstNumber = 0;
    vtoroeNumber = 0;
    currentOperator = "";
    pressCount = 0;
}

function clearDisplay() {
    upperText.textContent = ""
    display.value = "";
    firstNumber = 0;
    vtoroeNumber = 0;
    currentOperator = "";
    pressCount = 0;
}

function stepen() {
    display.value = Math.pow(display.value, 2)

}

function sqrt() {
    display.value = Math.sqrt(display.value)
}