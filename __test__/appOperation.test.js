const appOperation = require("../src/appOperation");

test("multiplication property to zero", () => {
  expect(appOperation(5, 0)).toBe(0);
});

test("multipication of two numbers", () => {
  expect(appOperation(2, 5)).toBe(10);
});
