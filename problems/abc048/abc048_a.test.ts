// A - AtCoder *** Contest
// https://atcoder.jp/contests/abc048/tasks/abc048_a
// 2022-09-30T13:46:29.674Z

export function main(input: string) {
  return input.replace(/(?:(\w)\S*\s*)/g, "$1");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["AtCoder Beginner Contest", "ABC"],
    ["AtCoder Snuke Contest", "ASC"],
    ["AtCoder X Contest", "AXC"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
