// A - QQ solver
// https://atcoder.jp/contests/abc232/tasks/abc232_a
// 2022-10-18T12:50:53.720Z

export function main(input: string) {
  const [A, B] = input.split(/x/).map(Number);
  return A * B;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3x7", "21"],
    ["9x9", "81"],
    ["1x1", "1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
