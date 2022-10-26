// A - Six Characters
// https://atcoder.jp/contests/abc251/tasks/abc251_a
// 2022-10-26T14:11:56.284Z

export function main(input: string) {
  return input.repeat(9).slice(0, 6);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["abc", "abcabc"],
    ["zz", "zzzzzz"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
