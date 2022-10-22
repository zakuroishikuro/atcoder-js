// A - AtCoder社の給料
// https://atcoder.jp/contests/abc003/tasks/abc003_1
// 2022-10-22T14:11:15.369Z

export function main(input: string) {
  const N = +input;
  return 10000 + (10000 * N * (N - 1)) / 2 / N;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["6", "35000"],
    ["91", "460000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
