// B - Bishop
// https://atcoder.jp/contests/panasonic2020/tasks/panasonic2020_b
// 2022-10-09T16:00:22.880Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [H, W] = input.split(/\s/).map(Number);
  if (H == 1 || W == 1) return 1;
  return Math.ceil(H * W / 2);
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["4 5", "10"],
    ["7 3", "11"],
    ["1000000000 1000000000", "500000000000000000"],

    ["1 1", "1"],
    ["1 2", "1"],
    ["1 3", "1"],

    ["2 2", "2"],
    ["3 3", "5"],
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
