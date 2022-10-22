// A - 植木算
// https://atcoder.jp/contests/abc007/tasks/abc007_1
// 2022-10-22T14:31:15.944Z

export function main(input: string) {
  return +input - 1;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4", "3"],
    ["100", "99"],
    ["1", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
