// A02 - Linear Search
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_b
// 2022-10-01T09:25:49.172Z

export function main(input: string) {
  const [[_n, _x], nums] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return nums.includes(_x) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5 40\n10 20 30 40 50", "Yes"],
    ["6 28\n30 10 40 10 50 90", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
