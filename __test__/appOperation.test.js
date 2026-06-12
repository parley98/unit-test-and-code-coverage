const { add, multiply, substract } = require("../src/appOperation");

test("multiplication property to zero", () => {
  expect(multiply(5, 0)).toBe(0);
});

test("Sum of two numbers", () => {
  expect(add(2, 5)).toBe(7);
});

test("Subtract of two numbers", () => {
  expect(substract(15, 5)).toBe(10);
});
