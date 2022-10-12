// A - Not Overflow
// https://atcoder.jp/contests/abc237/tasks/abc237_a
// 2022-10-05T15:27:08.167Z

export function main(input: string) {
  const n = +input;
  const max = 2 ** 31;
  return -max <= n && n < max ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10", "Yes"],
    ["-9876543210", "No"],
    ["483597848400000", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
