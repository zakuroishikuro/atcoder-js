// 006 - Print 2N+3
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_f
// 2022-09-26T13:16:31.615Z

export function main(input: string) {
  const [n] = input.split(/\s/).map(Number);
  return 2 * n + 3;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["100", "203"],
    ["27", "57"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
