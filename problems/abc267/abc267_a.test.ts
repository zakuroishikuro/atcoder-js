// A - Saturday
// https://atcoder.jp/contests/abc267/tasks/abc267_a
// 2022-09-29T14:35:23.112Z

export function main(input: string) {
  return 5 - "ouehr".indexOf(input[1]);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["Wednesday", "3"],
    ["Monday", "5"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
