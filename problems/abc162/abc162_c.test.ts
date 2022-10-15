// C - Sum of gcd of Tuples (Easy)
// https://atcoder.jp/contests/abc162/tasks/abc162_c
// 2022-10-14T15:15:03.426Z

const gcd = (n, m) => (n == 0 ? m : gcd(m % n, n));

export function main(input: string) {
  const K = +input;
  
  for (let a = 1; a <= K; a++) {
    for (let b = 1; b <= K; a++) {
      for (let a = 1; a <= K; a++) {}
    }
  }
  return A;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2", "9"],
    ["200", "10813692"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
