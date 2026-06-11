const { add, multiply } = require("../src/appOperation");

test("multiplication property to zero", () => {
  expect(multiply(5, 0)).toBe(0);
});

test("Sum of two numbers", () => {
  expect(add(2, 5)).toBe(7);
});
