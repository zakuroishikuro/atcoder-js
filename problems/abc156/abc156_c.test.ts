// C - Rally
// https://atcoder.jp/contests/abc156/tasks/abc156_c
// 2022-10-09T13:53:25.712Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [_A, ...X] = input.split(/\s/).map(Number);

  let min = 100, max = 1;
  for (const x of X) {
    min = Math.min(min, x);
    max = Math.max(max, x);
  }

  // どうせTLE
  let minCalory = Number.POSITIVE_INFINITY;
  for (let p = min; p <= max; p++) {
    const c = X.map((x) => cal(x, p)).reduce((a, b) => a + b);
    minCalory = Math.min(minCalory, c);
  }

  return minCalory;
}

const cal = (x, p) => (x - p) * (x - p);

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["2\n1 4", "5"],
    ["7\n14 14 2 13 56 2 37", "2354"],
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
