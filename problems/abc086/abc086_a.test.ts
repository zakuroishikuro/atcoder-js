// A - Product
// https://atcoder.jp/contests/abc086/tasks/abc086_a
// 2022-10-10T12:45:53.603Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return ["Even", "Odd"][(a * b) & 1];
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["3 4", "Even"], ["1 21", "Odd"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
