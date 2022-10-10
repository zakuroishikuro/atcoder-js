// A - Serval vs Monster
// https://atcoder.jp/contests/abc153/tasks/abc153_a
// 2022-10-10T12:58:04.457Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [H, A] = input.split(/\s/).map(Number);
  return Math.ceil(H / A);
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["10 4","3"],["1 10000","1"],["10000 1","10000"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
