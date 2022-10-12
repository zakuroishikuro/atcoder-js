// A - Poisonous Cookies
// https://atcoder.jp/contests/agc030/tasks/agc030_a
// 2022-09-25T05:30:06.394Z

export function main(input: string) {
  const [[a, b, c]] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return a + b + 1 >= c ? b + c : a + b * 2 + 1;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 1 4", "5"],
    ["5 2 9", "10"],
    ["8 8 1", "9"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
