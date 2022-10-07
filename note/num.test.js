const { sum, prod, max, min, mean } = require("./num.js")

test("sum", () => {
  expect(sum([])).toEqual(0);
  expect(sum([1])).toEqual(1);
  expect(sum([2, 1])).toEqual(3);
  expect(sum([3, 2, 1])).toEqual(6);
  expect(sum([-1, -2, -3])).toEqual(-6);
})

test("prod", () => {
  expect(prod([])).toEqual(1);
  expect(prod([1])).toEqual(1);
  expect(prod([2, 1])).toEqual(2);
  expect(prod([3, 2, 1])).toEqual(6);
  expect(prod([-1, -2, -3])).toEqual(-6);
})


test("max", () => {
  expect(max([])).toEqual(0);
  expect(max([1])).toEqual(1);
  expect(max([2, 1])).toEqual(2);
  expect(max([3, 2, 1])).toEqual(3);
  expect(max([-1, -2, -3])).toEqual(-1);
})

test("min", () => {
  expect(min([])).toEqual(0);
  expect(min([1])).toEqual(1);
  expect(min([2, 1])).toEqual(1);
  expect(min([3, 2, 1])).toEqual(1);
  expect(min([-1, -2, -3])).toEqual(-3);
})

test("mean", () => {
  expect(mean([1])).toEqual(1);
  expect(mean([1, 2])).toEqual(1.5);
})