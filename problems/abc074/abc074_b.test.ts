// B - Collecting Balls (Easy Version)
// https://atcoder.jp/contests/abc074/tasks/abc074_b
// 2022-10-10T05:34:11.968Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [N, K, ...X] = input.split(/\s/).map(Number);

  return X.reduce((sum,x)=>{
    const dist = Math.min(x, K - x) * 2;
    return sum += dist;
  }, 0);
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;

  test.each([
    ["1\n10\n2", "4"], ["2\n9\n3 6", "12"], ["5\n20\n11 12 9 17 12", "74"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
