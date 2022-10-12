// A - Placing Marbles
// https://atcoder.jp/contests/abc081/tasks/abc081_a
// 2022-09-22T13:35:30.969Z

export function main(input: string) {
  return [...input].reduce((a, b) => +a + +b, 0);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["101", "2"],
    ["000", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
