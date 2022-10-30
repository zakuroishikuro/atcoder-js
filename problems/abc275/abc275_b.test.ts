// B - ABC-DEF
// https://atcoder.jp/contests/abc275/tasks/abc275_b
// 2022-10-29T12:02:08.533Z

export function main(input: string) {
  const MOD = 998244353n;
  const [A, B, C, D, E, F] = input.split(/\s/).map(BigInt);
  let x = A * B * C;
  let y = D * E * F;
  return (x - y) % MOD;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2 3 5 1 2 4", "22"],
    ["1 1 1000000000 0 0 0", "1755647"],
    ["1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
