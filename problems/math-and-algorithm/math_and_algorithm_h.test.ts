// 008 - Brute Force 1
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_h
// 2022-09-26T13:24:07.095Z

export function main(input: string) {
  const [n, s] = input.split(/\s/).map(Number);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i + j <= s) cnt++;
    }
  }
  return cnt;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 4", "6"],
    ["869 120", "7140"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
