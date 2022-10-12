// A - You should output ARC, though this is ABC.
// https://atcoder.jp/contests/abc255/tasks/abc255_a
// 2022-10-06T13:02:47.569Z

export function main(input: string) {
  const [[r, c], ...a] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return a[r - 1][c - 1];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 2\n1 0\n0 1", "0"],
    ["2 2\n1 2\n3 4", "4"],
    ["2 1\n90 80\n70 60", "70"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
