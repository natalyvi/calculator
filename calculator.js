const add = function (a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return "ERROR";
  } else {
    return a + b;
  }
};

console.log(add(10, -5));
