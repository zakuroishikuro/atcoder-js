// 001 - Print 5+N
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_a
// 2022-09-24T09:31:54.782Z

export function main(input: string) {
  return 5 + +input;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2", "7"],
    ["4", "9"],
    ["8", "13"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
