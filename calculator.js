let firstNumber = null;
let secondNumber = null;
let currentOperation = null;

const add = function (a, b) {
  return a + b;
};

const substract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operation, a, b) {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) {
        return "E";
      }
      return divide(a, b);
  }
};

const displayDataById = function (id, data) {
  document.getElementById(id).value = data;
};

const digitPress = function (value) {
  if (currentOperation === "=") {
    firstNumber = null;
    secondNumber = null;
    currentOperation = null;
  }
  document.getElementById("userInput").value += value;
};

const operationPress = function (value) {
  if (currentOperation === null) {
    firstNumber = Number(document.getElementById("userInput").value);
  } else {
    secondNumber = Number(document.getElementById("userInput").value);
    let resultOfOperation;
    if (currentOperation === "=") {
      resultOfOperation = operate(value, firstNumber, secondNumber);
    } else {
      resultOfOperation = operate(currentOperation, firstNumber, secondNumber);
    }
    displayDataById("result", resultOfOperation);
    firstNumber = resultOfOperation;
  }
  currentOperation = value;
  displayDataById("currentOperation", currentOperation);
  displayDataById("userInput", "");
};

const clearScreen = function () {
  firstNumber = null;
  secondNumber = null;
  currentOperation = null;
  displayDataById("userInput", "");
  displayDataById("currentOperation", "");
  displayDataById("result", "");
};
