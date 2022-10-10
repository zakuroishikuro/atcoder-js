// B - Break Number
// https://atcoder.jp/contests/abc068/tasks/abc068_b
// 2022-10-10T05:51:19.217Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  return 1 << Math.floor(Math.log2(+input));
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  
  test.each([
    ["7","4"],["32","32"],["1","1"],["100","64"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
