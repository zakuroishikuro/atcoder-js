// B - One Clue
// https://atcoder.jp/contests/abc137/tasks/abc137_b
// 2022-10-10T13:22:57.195Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [K, X] = input.split(/\s/).map(Number);
  const first = X - K + 1;
  const size = K * 2 - 1;
  return [...Array(size)].map((_,i)=>first + i).join(" ");
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["3 7","5 6 7 8 9"],["4 0","-3 -2 -1 0 1 2 3"],["1 100","100"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
