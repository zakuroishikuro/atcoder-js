// A - ASCII code
// https://atcoder.jp/contests/abc252/tasks/abc252_a
// 2022-10-22T03:40:48.085Z

export function main(input: string) {
  return String.fromCodePoint(+input);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["97", "a"],
    ["122", "z"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
