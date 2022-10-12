// C - Alchemist
// https://atcoder.jp/contests/abc138/tasks/abc138_c
// 2022-10-11T00:09:37.545Z

export function main(input: string) {
  const [N, ...V] = input.split(/\s/).map(Number);
  V.sort((a, b) => a - b);

  return V.reduce((a, b) => (a + b) / 2);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2\n3 4", "3.5"],
    ["3\n500 300 200", "375"],
    ["5\n138 138 138 138 138", "138"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
