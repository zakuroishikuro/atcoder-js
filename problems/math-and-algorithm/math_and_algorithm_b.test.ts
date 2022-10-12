// 002 - Sum of 3 Integers
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_b
// 2022-09-25T11:49:17.697Z

export function main(input: string) {
  const [a, b, c] = input.split(/\s/).map(Number);
  return a + b + c;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10 20 50", "80"],
    ["1 1 1", "3"],
    ["100 100 100", "300"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
