function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  const intNum1 = parseInt(num1, 10);
  const intNum2 = parseInt(num2, 10);
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function print(str) {
  return "Hello world";
}

module.exports = { multiply, add, substract, divide, print };
