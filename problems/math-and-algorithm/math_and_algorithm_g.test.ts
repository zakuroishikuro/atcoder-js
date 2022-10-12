// 007 - Number of Multiples 1
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_g
// 2022-09-26T13:18:21.257Z

export function main(input: string) {
  const [n, x, y] = input.split(/\s/).map(Number);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += +!(i % x) | +!(i % y);
  }
  return cnt;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["15 3 5", "7"],
    ["1000000 11 13", "160839"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
