// A - Integer Sum
// https://atcoder.jp/contests/abc272/tasks/abc272_a
// 2022-10-08T12:00:24.674Z

export function main(input: string) {
  const [_N, ...A] = input.split(/\s/).map(Number);
  return A.reduce((a, b) => a + b);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n2 7 2", "11"],
    ["1\n3", "3"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
