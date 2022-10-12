// subject: A - +-x
// url: https://atcoder.jp/contests/abc137/tasks/abc137_a
// timestamp: 2022-09-21T14:23:02.001Z

export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return Math.max(a + b, a - b, a * b);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["-13 3", "-10"],
    ["1 -33", "34"],
    ["13 3", "39"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
