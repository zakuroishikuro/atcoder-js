// A - おいしいたこ焼きの作り方
// https://atcoder.jp/contests/abc005/tasks/abc005_1
// 2022-10-22T14:29:30.556Z

export function main(input: string) {
  const [x, y] = input.split(/\s/).map(Number);
  return Math.floor(y / x);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 8", "2"],
    ["4 7", "1"],
    ["4 3", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
