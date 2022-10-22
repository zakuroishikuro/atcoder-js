// A - アルバム
// https://atcoder.jp/contests/abc008/tasks/abc008_1
// 2022-10-22T14:33:03.118Z

export function main(input: string) {
  const [S, T] = input.split(/\s/).map(Number);
  return T - S + 1;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 7", "4"],
    ["1 1", "1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
