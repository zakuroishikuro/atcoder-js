// B - 1 21
// https://atcoder.jp/contests/abc086/tasks/abc086_b
// 2022-09-25T00:31:16.000Z

export function _main(input: string) {
  const [a, b] = input.split(/\s/);
  return Number.isInteger(Math.sqrt(+(a + b))) ? "Yes" : "No";
}

export function main(input: string) {
  const n = +input.replace(/\D+/g, "");
  const m = Math.sqrt(n) | 0;
  return m * m == n ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 21", "Yes"],
    ["100 100", "No"],
    ["12 10", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
