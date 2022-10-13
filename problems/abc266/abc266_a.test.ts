// A - Middle Letter
// https://atcoder.jp/contests/abc266/tasks/abc266_a
// 2022-10-13T13:42:34.502Z

export function main(input: string) {
  return input[input.length >> 1];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["atcoder","o"],["a","a"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
