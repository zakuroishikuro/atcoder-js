// D - Caracal vs Monster
// https://atcoder.jp/contests/abc153/tasks/abc153_d
// 2022-10-10T13:05:29.675Z

export function main(input: string) {
  let H = BigInt(input);

  let i = 0n,
    attack = 1n;
  while (H >> i++ > 1) attack += 2n ** i;

  return attack;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2", "3"],
    ["4", "7"],
    ["1000000000000", "1099511627775"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
