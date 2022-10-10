// B - Can you solve this?
// https://atcoder.jp/contests/abc121/tasks/abc121_b
// 2022-10-09T15:44:13.050Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const rows = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const [N, M, C] = rows[0];
  const B = rows[1];
  const A = rows.slice(2);

  let cnt = 0;
  for (const a of A) {
    const sum = a.reduce((sum, n, i) => sum + n * B[i], 0);
    if (sum + C > 0) cnt++;
  }

  return cnt;
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["2 3 -10\n1 2 3\n3 2 1\n1 2 2", "1"],
    ["5 2 -4\n-2 5\n100 41\n100 40\n-3 0\n-6 -2\n18 -13", "2"],
    ["3 3 0\n100 -100 0\n0 100 100\n100 100 100\n-100 100 100", "0"],
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
