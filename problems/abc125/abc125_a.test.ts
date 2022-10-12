// A - Biscuit Generator
// https://atcoder.jp/contests/abc125/tasks/abc125_a
// 2022-09-25T03:21:01.124Z

export function main(input: string) {
  const [a, b, t] = input.split(/\s/).map(Number);
  return Math.floor((t + 0.5) / a) * b;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 5 7", "10"],
    ["3 2 9", "6"],
    ["20 20 19", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
