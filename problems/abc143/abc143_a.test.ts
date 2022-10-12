// A - Curtain
// https://atcoder.jp/contests/abc143/tasks/abc143_a
// 2022-09-23T13:27:52.972Z

export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return Math.max(a - b * 2, 0);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["12 4", "4"],
    ["20 15", "0"],
    ["20 30", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
