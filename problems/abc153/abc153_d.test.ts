// D - Caracal vs Monster
// https://atcoder.jp/contests/abc153/tasks/abc153_d
// 2022-10-10T13:05:29.675Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  let H = BigInt(input);

  let i = 0n, attack = 1n;
  while ((H >> i++) > 1) attack += 2n ** i;

  return attack;
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["2", "3"], ["4", "7"], ["1000000000000", "1099511627775"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
