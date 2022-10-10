// B - 1 21
// https://atcoder.jp/contests/abc086/tasks/abc086_b
// 2022-10-10T12:47:42.690Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const n = +input.replace(/\D+/g, "");
  const m = Math.sqrt(n) | 0;
  return m * m == n ? "Yes" : "No";
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["1 21", "Yes"], ["100 100", "No"], ["12 10", "No"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
