// A - AtCoder Quiz 2
// https://atcoder.jp/contests/abc219/tasks/abc219_a
// 2022-10-18T12:30:08.115Z

export function main(input: string) {
  const X = +input;
  const n = [40, 70, 90].find((n) => X < n);
  return n == undefined ? "expert" : n - X;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["56", "14"],
    ["32", "8"],
    ["0", "40"],
    ["100", "expert"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
