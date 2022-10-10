// B - Common Raccoon vs Monster
// https://atcoder.jp/contests/abc153/tasks/abc153_b
// 2022-10-10T12:58:53.551Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [H, N, ...A] = input.split(/\s/).map(Number);
  return H <= A.reduce((a, b) => a + b, 0) ? "Yes" : "No";
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["10 3\n4 5 6", "Yes"], ["20 3\n4 5 6", "No"], ["210 5\n31 41 59 26 53", "Yes"], ["211 5\n31 41 59 26 53", "No"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
