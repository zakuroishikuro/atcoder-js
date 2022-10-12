// A - Anyway Takahashi
// https://atcoder.jp/contests/abc269/tasks/abc269_a
// 2022-09-23T08:05:03.317Z

export function main(input: string) {
  const [a, b, c, d] = input.split(/\s/).map(Number);
  return `${(a + b) * (c - d)}\nTakahashi`;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 2 5 3", "6\nTakahashi"],
    ["10 -20 30 -40", "-700\nTakahashi"],
    ["100 100 100 -100", "40000\nTakahashi"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
