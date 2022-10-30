// A - Exponential or Quadratic
// https://atcoder.jp/contests/abc238/tasks/abc238_a
// 2022-10-30T14:43:05.451Z

export function main(input: string) {
  const n = +input;
  if (n <= 4) return 2 ** n > n ** 2 ? "Yes" : "No";
  return "Yes";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5", "Yes"],
    ["2", "No"],
    ["623947744", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
