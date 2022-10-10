// A - +-x
// https://atcoder.jp/contests/abc137/tasks/abc137_a
// 2022-10-10T13:22:01.904Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  return Math.max(A + B, A - B, A * B);
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["-13 3", "-10"], ["1 -33", "34"], ["13 3", "39"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
