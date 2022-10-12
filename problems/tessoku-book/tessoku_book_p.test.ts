// A16 - Dungeon 1（※初版第 1 刷の B22 も同じ問題です）
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_p
// 2022-10-08T03:58:12.481Z

export function main(input: string) {
  const [[N], A, B] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const dp = new Uint32Array(N);
  dp[0] = 0;
  dp[1] = A[0];

  for (let i = 2; i < N; i++) {
    const a = dp[i - 1] + A[i - 1];
    const b = dp[i - 2] + B[i - 2];
    dp[i] = Math.min(a, b);
  }

  return dp[N - 1];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5\n2 4 1 3\n5 3 7", "8"],
    ["10\n1 19 75 37 17 16 33 18 22\n41 28 89 74 98 43 42 31", "157"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
