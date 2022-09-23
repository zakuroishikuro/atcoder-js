// subject: A - Serval vs Monster
// url: https://atcoder.jp/contests/abc153/tasks/abc153_a
// timestamp: 2022-09-21T14:17:53.848Z
function main(input = "") {
  const [h, a] = input.split(/\s/).map(Number);
  return Math.ceil(h / a);
}

if (require.main === module) {
  const input = require("fs").readFileSync(0, "utf8").trim();
  console.log(main(input));
} else {
  [
    ["10 4", "3"],
    ["1 10000", "1"],
    ["10000 1", "10000"],
  ].forEach(([example, expected], i) => {
    test(`example ${i}`, () => {
      const actual = main(example).toString();
      expect(actual).toBe(expected);
    });
  });
}
