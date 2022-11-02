// function to add numbers in the calculator, return "error" when string
const add = function (a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else {
    return a + b;
  }
};

// function to substract numbers in the calculator, return "error" when string
const substract = function (a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else {
    return a - b;
  }
};
