// B - Resale
// https://atcoder.jp/contests/abc125/tasks/abc125_b
// 2022-09-25T03:26:50.265Z

export function main(input: string) {
  const [[_n], values, costs] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return values
    .map((v, i) => v - costs[i])
    .filter((n) => n > 0)
    .reduce((a, b) => a + b, 0);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n10 2 5\n6 3 4", "5"],
    ["4\n13 21 6 19\n11 30 6 15", "6"],
    ["1\n1\n50", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
