// A - 流行
// https://atcoder.jp/contests/abc004/tasks/abc004_1
// 2022-10-22T14:10:22.644Z

export function main(input: string) {
  return 2 * +input;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1000","2000"],["1000000","2000000"],["0","0"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
