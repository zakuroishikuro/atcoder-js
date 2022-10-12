// C - Replacing Integer
// https://atcoder.jp/contests/abc161/tasks/abc161_c
// 2022-10-10T11:24:12.549Z

export function main(input: string) {
  // 制約の最大値が10e18なのでNumberは使えない！
  // Math.log10(Number.MAX_SAFE_INTEGER) //=> 15.954...
  // 安心できるのは10e15まで！！
  const [N, K] = input.split(/\s/).map(BigInt);

  // BigIntはMath使えないので素朴に計算する
  const rem = N % K;
  const minus = K - rem;
  return rem < minus ? rem : minus;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["7 4", "1"],
    ["2 6", "2"],
    ["1000000000000000000 1", "0"],
    ["31943 41431", "9488"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
