// B - Tax Rate
// https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_b
// 2022-10-09T15:30:54.699Z

export function main(input: string) {
  const N = +input;
  const before = Math.ceil(N / 1.08);
  const after = Math.floor(before * 1.08);
  return after == N ? before : ":(";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["432", "400"],
    ["1079", ":("],
    ["1001", "927"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
