// B - Nuts
// https://atcoder.jp/contests/abc204/tasks/abc204_b
// 2022-10-18T12:40:28.405Z

export function main(input: string) {
  const [N, ...A] = input.split(/\s/).map(Number);
  return A.reduce((sum, nut) => sum + Math.max(0, nut - 10), 0);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n6 17 28", "25"],
    ["4\n8 9 10 11", "1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
