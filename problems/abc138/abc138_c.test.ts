// C - Alchemist
// https://atcoder.jp/contests/abc138/tasks/abc138_c
// 2022-10-11T00:09:37.545Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [N, ...V] = input.split(/\s/).map(Number);
  V.sort((a,b)=> a - b);

  return V.reduce((a,b)=> (a + b) / 2);
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["2\n3 4","3.5"],["3\n500 300 200","375"],["5\n138 138 138 138 138","138"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
