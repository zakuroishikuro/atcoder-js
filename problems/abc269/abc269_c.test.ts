// C - Submask
// https://atcoder.jp/contests/abc269/tasks/abc269_c
// 2022-10-14T12:56:26.017Z

export function main(input: string) {
  let N = BigInt(input);
  const bits = [];
  while (N > 0) {
    const minBit = N & -N; //いちばん右端で立ってるビットを取得
    bits.push(minBit);
    N ^= minBit;
  }

  // ビット全探索
  const nums: bigint[] = [];
  const len = 2 ** bits.length;
  for (let i = 0n; i < len; i++) {
    const n = bits.reduce((a, b, j) => {
      const bitFlag = (i >> BigInt(j)) & 1n;
      return a + b * bitFlag;
    }, 0n);
    nums.push(n);
  }
  return nums.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["11", "0\n1\n2\n3\n8\n9\n10\n11"],
    //["0", "0"],
    //["576461302059761664", "0\n524288\n549755813888\n549756338176\n576460752303423488\n576460752303947776\n576461302059237376\n576461302059761664"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
