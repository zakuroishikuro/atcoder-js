// B - Power Socket
// https://atcoder.jp/contests/abc139/tasks/abc139_b
// 2022-10-09T12:26:48.967Z

if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ＼( 'ω')／ウオオオオアアーーーッッ！！！
export function solve(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  return Math.ceil((B - 1) / (A - 1));
}

// ＼( 'ω')／テストッッ！！！
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["4 10", "3"],
    ["8 9", "2"],
    ["8 8", "1"],

    ["3 1", "0"] // もともと1つあるから1個口以上にしたいなら0
  ])("example %#: %j -> %j", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
