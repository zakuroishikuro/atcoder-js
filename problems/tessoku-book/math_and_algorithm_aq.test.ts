// A29 - Power
// https://atcoder.jp/contests/tessoku-book/tasks/math_and_algorithm_aq
// 2022-10-08T07:22:27.871Z

const pow = (base, expo, mod) => {
  let p = base,
    ans = 1n;
  for (let i = 0n; i < 30; i++) {
    const wari = 2n ** i;
    if ((expo / wari) % 2n == 1n) {
      ans = (ans * p) % mod; // 「aの2^i乗」が掛けられるとき
    }
    p = (p * p) % mod;
  }
  return ans;
};

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(BigInt);

  // もちろんだめ
  // return (BigInt(A) ** BigInt(B)) % 1000000007n;

  // この方法でもBigIntにするしなきゃだめ
  return pow(A, B, 1000000007n).toString();
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5 23", "871631629"],
    ["97 998244353", "934801994"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
