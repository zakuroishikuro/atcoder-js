// 004 - Product of 3 Integers
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_d
// 2022-09-25T12:37:19.944Z

export function main(input: string) {
  const [a, b, c] = input.split(/\s/).map(Number);
  return a * b * c;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2 8 8", "128"],
    ["7 7 25", "1225"],
    ["100 100 100", "1000000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
