// A26 - Prime Check
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_z
// 2022-10-08T05:08:36.970Z

/* //TLE
function isPrime(n) {
  const len = Math.sqrt(n);
  for (let i = 2; i <= len; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
*/

// 偶数の判定はスキップしたら一応TLEじゃなくなったのでヨシ！
function isPrime(n) {
  if (n <= 2) return n == 2;
  if (!(n & 1)) return false;

  const len = Math.sqrt(n);
  for (let i = 3; i <= len; i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

export function main(input: string) {
  const [_Q, ...X] = input.split(/\s/).map(Number);
  return X.map(isPrime)
    .map((f) => (f ? "Yes" : "No"))
    .join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["4\n17\n31\n35\n49", "Yes\nYes\nNo\nNo"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });

  test("isPrime", () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(6)).toBe(false);
  });
}
