// A - \"atcoder\".substr()
// https://atcoder.jp/contests/abc264/tasks/abc264_a
// 2022-10-14T12:06:21.804Z

export function main(input: string) {
  const [L, R] = input.split(/\s/).map(Number);
  return "atcoder".slice(L - 1, R);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 6","code"],["4 4","o"],["1 7","atcoder"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
