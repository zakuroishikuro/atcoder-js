// A - Four Points
// https://atcoder.jp/contests/abc246/tasks/abc246_a
// 2022-10-18T13:06:27.748Z

const solve = (pts, col) => {
  const [a, b, c] = pts.map((r) => r[col]).sort((n, m) => n - m);
  return a != b ? a : c;
};

export function main(input: string) {
  const pts = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const x = solve(pts, 0);
  const y = solve(pts, 1);

  return `${x} ${y}`;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["-1 -1\n-1 2\n3 2", "3 -1"],
    ["-60 -40\n-60 -80\n-20 -80", "-20 -40"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
