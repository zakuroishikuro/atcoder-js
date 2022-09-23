// A - Anyway Takahashi
// https://atcoder.jp/contests/abc269/tasks/abc269_a
// 2022-09-22T22:11:53.519Z
function main(input = "") {
  const [a, b, c, d] = input.split(/\s/).map(Number);
  return `${(+a + +b) * (c - d)}\nTakahashi`;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  [
    ["1 2 5 3", "6\nTakahashi"],
    ["10 -20 30 -40", "-700\nTakahashi"],
    ["100 100 100 -100", "40000\nTakahashi"],
  ].forEach(([input, output], i) => {
    test(`example ${i + 1}`, () => {
      expect(main(input).toString()).toBe(output);
    });
  });
}
