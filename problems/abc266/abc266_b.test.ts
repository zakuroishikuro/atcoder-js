// B - Modulo Number
// https://atcoder.jp/contests/abc266/tasks/abc266_b
// 2022-10-13T13:44:02.634Z

export function main(input: string) {
  const P = 998244353n;
  let n = BigInt(input) % 998244353n;
  return n >= 0 ? n : n + P;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    [`${998244354n % 998244353n}`, "1"],
    [`${9982443540n % 998244353n}`, "10"],
    [`${99824435400n % 998244353n}`, "100"],
    [`${998244354000n % 998244353n}`, "1000"],
    [`${9982443540000n % 998244353n}`, "10000"],

    [`${998244355n % 998244353n}`, "2"],
    [`${9982443541n % 998244353n}`, "11"],
    [`${99824435401n % 998244353n}`, "101"],
    [`${998244354001n % 998244353n}`, "1001"],
    [`${9982443540001n % 998244353n}`, "10001"],
  ])("think", (input, expected) => {
    expect(input).toBe(expected);
  });

  test.each([
    ["998244354", "1"],
    ["-9982443534", "998244349"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
