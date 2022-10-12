// A05 - Three Cards
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_e
// 2022-10-02T01:24:25.643Z

export function main(input: string) {
  const [n, K] = input.split(/\s/).map(Number);

  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const k = K - (i + j);
      if (0 < k && k <= n) cnt++;
    }
  }

  return cnt;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 6", "7"],
    ["3000 4000", "6498498"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
