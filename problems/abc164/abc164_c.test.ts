/// C - gacha
// https://atcoder.jp/contests/abc164/tasks/abc164_c
// 2022-09-23T12:30:49.001Z

export function main(input: string) {
  const prizes = input.split(/\s/).slice(1);
  return new Set(prizes).size;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\napple\norange\napple", "2"],
    ["5\ngrape\ngrape\ngrape\ngrape\ngrape", "1"],
    ["4\naaaa\na\naaa\naa", "4"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
