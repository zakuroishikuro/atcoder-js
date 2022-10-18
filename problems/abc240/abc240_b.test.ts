// B - Count Distinct Integers
// https://atcoder.jp/contests/abc240/tasks/abc240_b
// 2022-10-18T12:57:25.851Z

export function main(input: string) {
  return new Set(input.split(/\s/).slice(1)).size;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["6\n1 4 1 2 2 1", "3"],
    ["1\n1", "1"],
    ["11\n3 1 4 1 5 9 2 6 5 3 5", "7"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
