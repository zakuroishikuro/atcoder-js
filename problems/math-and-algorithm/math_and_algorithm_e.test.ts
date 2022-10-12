// 005 - Modulo 100
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_e
// 2022-09-25T12:38:12.782Z

export function main(input: string) {
  const [_n, ...data] = input.split(/\s/).map(Number);
  return data.reduce((a, b) => a + b) % 100;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n30 50 70", "50"],
    ["10\n1 2 3 4 5 6 7 8 9 10", "55"],
    ["5\n60 60 60 60 60", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
