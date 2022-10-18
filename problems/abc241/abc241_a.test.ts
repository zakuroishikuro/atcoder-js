// A - Digit Machine
// https://atcoder.jp/contests/abc241/tasks/abc241_a
// 2022-10-18T12:54:59.998Z

export function main(input: string) {
  const A = input.split(/\s/).map(Number);
  return A[A[A[0]]];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["9 0 1 2 3 4 5 6 7 8", "7"],
    ["4 8 8 8 0 8 8 8 8 8", "4"],
    ["0 0 0 0 0 0 0 0 0 0", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
