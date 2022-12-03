// D - Factorial and Multiple
// https://atcoder.jp/contests/abc280/tasks/abc280_d
// 2022-12-03T12:16:32.275Z


export function isPrime(n: number) {
  if (n <= 1 || !Number.isInteger(n)) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

export function main(input: string): number | string {
  const K = +input;
  if (isPrime(K)) {
    return K;
  } else {
    let i = 1;
    let value = 1;
    while (value % K != 0) {
      value *= ++i;
    }
    return i;
  }
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["30", "5"],
    ["123456789011", "123456789011"],
    ["280", "7"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
