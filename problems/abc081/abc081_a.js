// A - Placing Marbles
// https://atcoder.jp/contests/abc081/tasks/abc081_a
// 2022-09-22T13:35:30.969Z
function main(input = "") {
  return [...input].reduce((a, b) => +a + +b);
}

if (require.main === module) {
  const input = require("fs").readFileSync(0, "utf8").trim();
  console.log(main(input));
} else {
  [
    ["101", "2"],
    ["000", "0"],
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input).toString()).toBe(output);
    });
  });
}
