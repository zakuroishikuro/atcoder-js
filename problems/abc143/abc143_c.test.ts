// C - Slimes
// https://atcoder.jp/contests/abc143/tasks/abc143_c
// 2022-09-23T13:48:44.600Z

export function main(input: string) {
  const slimes = input.split(/\s/)[1];
  return slimes.replace(/(.)\1+/g, "$1").length;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10\naabbbbaaca", "5"],
    ["5\naaaaa", "1"],
    ["20\nxxzaffeeeeddfkkkkllq", "10"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
