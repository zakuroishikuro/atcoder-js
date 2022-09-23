// subject: A - We Love Golf
// url: https://atcoder.jp/contests/abc165/tasks/abc165_a
// timestamp: 2022-09-21T14:39:05.412Z
function main(input = "") {
  let [k, a, b] = input.split(/\s/).map(Number);
  for (; a <= b; a++) {
    if (a % k == 0) return "OK";
  }
  return "NG";
}

function main2(input = "") {
  let [k, a, b] = input.split(/\s/).map(Number);
  return ((b / k) | 0) - (((a - 1) / k) | 0) > 0 ? "OK" : "NG";
}

if (require.main === module) {
  const input = require("fs").readFileSync(0, "utf8").trim();
  console.log(main(input));
} else {
  [
    ["7\n500 600", "OK"],
    ["4\n5 7", "NG"],
    ["1\n11 11", "OK"],
  ].forEach(([input, output], i) => {
    test("examples", () => {
      expect(main(input).toString()).toBe(output);
      expect(main2(input).toString()).toBe(output);
    });
  });
}
