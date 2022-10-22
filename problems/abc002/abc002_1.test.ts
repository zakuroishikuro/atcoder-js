// A - 正直者
// https://atcoder.jp/contests/abc002/tasks/abc002_1
// 2022-10-22T14:17:22.193Z

export function main(input: string) {
  const [X, Y] = input.split(/\s/).map(Number);

  return Math.max(X, Y);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10 11", "11"],
    ["100000000 10000000", "100000000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
