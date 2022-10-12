// A - Between Two Integers
// https://atcoder.jp/contests/abc061/tasks/abc061_a
// 2022-09-24T02:36:11.816Z

export function main(input: string) {
  const [a, b, c] = input.split(/\s/).map(Number);
  return a <= c && c <= b ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 3 2", "Yes"],
    ["6 5 4", "No"],
    ["2 2 2", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
