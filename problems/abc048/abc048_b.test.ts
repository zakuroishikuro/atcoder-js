// B - Between a and b ...
// https://atcoder.jp/contests/abc048/tasks/abc048_b
// 2022-09-30T13:52:04.552Z

export function main(input: string) {
  const [a, b, x] = input.split(/\s/).map(BigInt);
  const first = BigInt(a % x == 0n);
  const result = b / x - a / x + first;
  return result.toString();
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 8 2", "3"],
    ["0 5 1", "6"],
    ["9 9 2", "0"],
    ["1 1000000000000000000 3", "333333333333333333"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
