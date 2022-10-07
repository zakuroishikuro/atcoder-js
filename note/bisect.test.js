const { search } = require("./bisect.js");

test('search', () => {
  expect(search(1, [1])).toEqual(0);
  expect(search(1, [1, 2])).toEqual(0);
  expect(search(1, [1, 2, 3])).toEqual(0);
  expect(search(1, [1, 2, 3, 4])).toEqual(0);
  expect(search(1, [1, 2, 3, 4, 5])).toEqual(0);
  expect(search(2, [1, 2, 3, 4, 5])).toEqual(1);
  expect(search(3, [1, 2, 3, 4, 5])).toEqual(2);
  expect(search(4, [1, 2, 3, 4, 5])).toEqual(3);
  expect(search(5, [1, 2, 3, 4, 5])).toEqual(4);

  expect(search(0, [1])).toEqual(-1);
  expect(search(0, [1, 2])).toEqual(-1);
  expect(search(0, [1, 2, 3])).toEqual(-1);
  expect(search(0, [1, 2, 3, 4])).toEqual(-1);
  expect(search(0, [1, 2, 3, 4, 5])).toEqual(-1);
});
