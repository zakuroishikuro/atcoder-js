// 003 - Sum of N Integers
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_c
// 2022-09-25T12:35:54.670Z

export function main(input: string) {
  return input
    .split(/\s/)
    .slice(1)
    .map(Number)
    .reduce((a, b) => a + b);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5\n3 1 4 1 5", "14"],
    ["3\n10 20 50", "80"],
    ["10\n1 2 3 4 5 6 7 8 9 10", "55"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
