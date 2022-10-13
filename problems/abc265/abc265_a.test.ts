// A - Apple
// https://atcoder.jp/contests/abc265/tasks/abc265_a
// 2022-10-13T15:08:36.297Z

export function main(input: string) {
  const [X, Y, N] = input.split(/\s/).map(Number);
  if (X * 3 <= Y) return N * X;
  return Math.floor(N / 3) * Y + (N % 3) * X;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10 25 10", "85"],
    ["10 40 10", "100"],
    ["100 100 2", "200"],
    ["100 100 100", "3400"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
