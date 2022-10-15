// A - A Recursive Function
// https://atcoder.jp/contests/abc273/tasks/abc273_a
// 2022-10-15T12:00:23.362Z

const f = (k) => (k == 0 ? 1 : k * f(k - 1));

export function main(input: string) {
  const N = +input;
  return f(N);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2", "2"],
    ["3", "6"],
    ["0", "1"],
    ["10", "3628800"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
