// function to add numbers in the calculator, return "error" when string
const add = function (a, b) {
  return a + b;
};

// function to substract numbers in the calculator, return "error" when string
const substract = function (a, b) {
  return a - b;
};

// function to multiply, return error for string
const multiply = function (a, b) {
  return a * b;
};

// function to split, return error for string
const divide = function (a, b) {
  return a / b;
};
// operate function, applies the correct function
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "−":
      return substract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
