// A27 - Calculate GCD
// https://atcoder.jp/contests/tessoku-book/tasks/math_and_algorithm_o
// 2022-10-08T06:02:53.105Z

function gcd(a, b) {
  const fn = (n, m) => (n == 0 ? m : fn(m % n, n));
  return fn(Math.abs(a), Math.abs(b));
}

export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return gcd(a, b);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["33 88", "11"],
    ["123 777", "3"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
