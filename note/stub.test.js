const {posCalc} = require("./stub.js");

test("posCalc", () => {
  var $ = posCalc(2);
  var matrix = [0, 1, 2, 3];
  expect(matrix[$(0, 0)]).toBe(0);
  expect(matrix[$(1, 0)]).toBe(1);
  expect(matrix[$(0, 1)]).toBe(2);
  expect(matrix[$(1, 1)]).toBe(3);

  var $ = posCalc(3);
  var matrix = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  expect(matrix[$(0, 0)]).toBe(0);
  expect(matrix[$(1, 0)]).toBe(1);
  expect(matrix[$(2, 0)]).toBe(2);
  expect(matrix[$(0, 1)]).toBe(3);
  expect(matrix[$(1, 1)]).toBe(4);
  expect(matrix[$(2, 1)]).toBe(5);
  expect(matrix[$(0, 2)]).toBe(6);
  expect(matrix[$(1, 2)]).toBe(7);
  expect(matrix[$(2, 2)]).toBe(8);

  // 範囲外
  expect(matrix[$(0, 3)]).toBe(undefined);
  expect(matrix[$(3, 9)]).toBe(undefined);
  expect(matrix[$(-1, 0)]).toBe(undefined);
  expect(matrix[$(0, -1)]).toBe(undefined);
});