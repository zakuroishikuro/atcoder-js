// A - 世界のFizzBuzz
// https://atcoder.jp/contests/abc006/tasks/abc006_1
// 2022-10-22T14:30:37.493Z

export function main(input: string) {
  const N = +input;
  return N % 3 ? "NO" : "YES";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2", "NO"],
    ["9", "YES"],
    ["3", "YES"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
