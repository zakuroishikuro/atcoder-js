// A - Between Two Integers
// https://atcoder.jp/contests/abc061/tasks/abc061_a
// 2022-09-24T02:36:11.816Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

// deno-lint-ignore-file
function main(input = "") {
  const [a, b, c] = input.split(/\s/).map(Number);
  return a <= c && c <= b ? "Yes" : "No";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["1 3 2","Yes"],["6 5 4","No"],["2 2 2","Yes"]
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
