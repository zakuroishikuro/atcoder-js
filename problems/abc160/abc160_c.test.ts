// C - Traveling Salesman around Lake
// https://atcoder.jp/contests/abc160/tasks/abc160_c
// 2022-10-10T06:00:55.585Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [K, N, ...A] = input.split(/\s/).map(Number);

  let max = 0;
  for (let i = 1; i < N; i++) {
    const d = A[i] - A[i - 1];
    max = Math.max(max, d);
  }
  max = Math.max(max, A[0] + K - A[A.length - 1]);

  return K - max;
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["20 3\n5 10 15", "10"],
    ["20 3\n0 5 15", "10"],
    ["100 3\n0 1 2", "2"],
    ["100 3\n0 1 99", "2"],
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
