// A - Ferris Wheel
// https://atcoder.jp/contests/abc127/tasks/abc127_a
// 2022-10-10T13:31:30.923Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  if (A <= 5) return 0;
  if (A <= 12) return B >> 1;
  return B;
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["30 100","100"],["12 100","50"],["0 100","0"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
