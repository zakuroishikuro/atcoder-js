const { cumsum, cumprod, cummax, cummin} = require("./cum.js")

test("cumsum", () => {
  expect(cumsum([])).toEqual([]);
  expect(cumsum([1])).toEqual([1]);
  expect(cumsum([1, 2, 3])).toEqual([1, 3, 6]);
  expect(cumsum([4, 5, 6])).toEqual([4, 9, 15]);
  expect(cumsum([0, 0, 0])).toEqual([0, 0, 0]);
})

test("cumprod", () => {
  expect(cumprod([])).toEqual([]);
  expect(cumprod([1])).toEqual([1]);
  expect(cumprod([1, 2, 3])).toEqual([1, 2, 6]);
  expect(cumprod([4, 5, 6])).toEqual([4, 20, 120]);
  expect(cumprod([0, 0, 0])).toEqual([0, 0, 0]);
})

test("cummax", () => {
  expect(cummax([])).toEqual([]);
  expect(cummax([1])).toEqual([1]);
  expect(cummax([1, 2, 3])).toEqual([1, 2, 3]);
  expect(cummax([4, 5, 6])).toEqual([4, 5, 6]);
  expect(cummax([1, 10, 0])).toEqual([1, 10, 10]);
})

test("cummin", () => {
  expect(cummin([])).toEqual([]);
  expect(cummin([1])).toEqual([1]);
  expect(cummin([1, 2, 3])).toEqual([1, 1, 1]);
  expect(cummin([4, 5, 6])).toEqual([4, 4, 4]);
  expect(cummin([1, 10, 0])).toEqual([1, 1, 0]);
})