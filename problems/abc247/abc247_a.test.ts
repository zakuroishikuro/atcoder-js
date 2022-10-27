// A - Move Right
// https://atcoder.jp/contests/abc247/tasks/abc247_a
// 2022-10-27T13:26:58.084Z

export function main(input: string) {
  return `0${input}`.slice(0, 4);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1011", "0101"],
    ["0000", "0000"],
    ["1111", "0111"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
