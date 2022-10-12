// C - Max Even
// https://atcoder.jp/contests/abc272/tasks/abc272_c
// 2022-10-08T12:16:06.314Z

export function main(input: string) {
  const [_N, ...A] = input.split(/\s/).map(Number);
  A.sort((a, b) => a - b);

  const even = [],
    odd = [];
  A.forEach((n) => (n & 1 ? odd : even).push(n));

  let e = 0,
    o = 0;
  if (even.length >= 2) e = even.slice(-2).reduce((a, b) => a + b);
  if (odd.length >= 2) o = odd.slice(-2).reduce((a, b) => a + b);

  if (e == 0 && o == 0) return -1;

  return Math.max(e, o);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n2 3 4", "6"],
    ["2\n1 0", "-1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
