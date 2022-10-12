// A - Infinite Coins
// https://atcoder.jp/contests/abc088/tasks/abc088_a
// 2022-09-28T14:15:56.925Z

export function main(input: string) {
  const [n, a] = input.split(/\s/).map(Number);
  return n % 500 <= a ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2018\n218", "Yes"],
    ["2763\n0", "No"],
    ["37\n514", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
