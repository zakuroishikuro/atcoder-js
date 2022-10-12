// B - 81
// https://atcoder.jp/contests/abc144/tasks/abc144_b
// 2022-09-23T05:38:35.157Z

export function main(input: string) {
  const n = +input;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i * j == n) return "Yes";
    }
  }
  return "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10", "Yes"],
    ["50", "No"],
    ["81", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
