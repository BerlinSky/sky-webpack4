import { runCalculator } from "./hof";

test("adding with the mini calculator", () => {
  const add = (a, b) => { return a + b }

  const addFn = runCalculator(add)

  expect(addFn(3, 6)).toBe(9)
  expect(addFn(4, 6)).toBe(10)
  expect(addFn(5, 6)).toBe(11)
});

