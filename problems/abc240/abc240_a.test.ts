// A - Edge Checker
// https://atcoder.jp/contests/abc240/tasks/abc240_a
// 2022-10-28T14:42:58.294Z

export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return (Math.abs(a - b) - 1) % 8 ? "No" : "Yes";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 5", "Yes"],
    ["3 5", "No"],
    ["1 10", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
