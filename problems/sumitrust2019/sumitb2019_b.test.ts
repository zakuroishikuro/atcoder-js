// B - Tax Rate
// https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_b
// 2022-10-09T15:30:54.699Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const N = +input;
  const before = Math.ceil(N / 1.08);
  const after = Math.floor(before * 1.08);
  return after == N ? before : ":(";
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["432", "400"],
    ["1079", ":("],
    ["1001", "927"],
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
