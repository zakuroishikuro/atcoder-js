// 009 - Brute Force 2
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_i
// 2022-09-26T13:28:11.170Z

export function main(input: string) {
  const [n, s, ...a] = input.split(/\s/).map(Number);
  for (let i = 0; i < 2 ** n; i++) {
    const bits = [...i.toString(2)];
    const sum = bits.reduce((sum, bit, i) => sum + +bit * a[i], 0);
    if (sum == s) return "Yes";
  }
  return "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 11\n2 5 9", "Yes"],
    ["4 11\n3 1 4 5", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
