// A - Last Two Digits
// https://atcoder.jp/contests/abc254/tasks/abc254_a
// 2022-10-26T14:04:11.794Z

export function main(input: string) {
  return input.slice(-2);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["254","54"],["101","01"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
