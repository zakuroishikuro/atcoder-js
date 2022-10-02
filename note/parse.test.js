const parse = (s = "", f = Number) => {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.*\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
};

test("parse", () => {
  expect(parse("1")).toEqual([1]);
  expect(parse("1 2 3")).toEqual([1, 2, 3]);
  expect(parse("1 2 3\n4 5 6")).toEqual([1, 2, 3, 4, 5, 6]);
  expect(parse("1 2 3\n4 5 6\n7 8 9")).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});
