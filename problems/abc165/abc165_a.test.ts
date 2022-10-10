// A - We Love Golf
// https://atcoder.jp/contests/abc165/tasks/abc165_a
// 2022-10-10T13:52:08.029Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [K, A, B] = input.split(/\s/).map(Number);
  const min = Math.ceil(A / K);
  return min * K <= B ? "OK" : "NG";
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["7\n500 600", "OK"], ["4\n5 7", "NG"], ["1\n11 11", "OK"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
