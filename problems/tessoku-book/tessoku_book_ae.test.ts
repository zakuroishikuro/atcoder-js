// A31 - Divisors
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_ae
// 2022-10-08T10:28:25.533Z

export function main(input: string) {
  const [N] = input.split(/\s/).map(Number);
  return Math.floor(N / 3) + Math.floor(N / 5) - Math.floor(N / (3 * 5));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10", "5"],
    ["30", "14"],
    ["100000000000", "46666666667"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
