const { add, multiply, substract, divide } = require("../src/appOperation");

test("multiplication property to zero", () => {
  expect(multiply(5, 0)).toBe(0);
});

test("Sum of two numbers", () => {
  expect(add(2, 5)).toBe(7);
});

test("Subtract of two numbers", () => {
  expect(substract(15, 5)).toBe(10);
});

test("Divide of two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});
