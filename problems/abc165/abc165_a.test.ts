// subject: A - We Love Golf
// url: https://atcoder.jp/contests/abc165/tasks/abc165_a
// timestamp: 2022-09-21T14:39:05.412Z

export function main(input: string) {
  const [K, A, B] = input.split(/\s/).map(Number);
  const min = Math.ceil(A / K);
  return min * K <= B ? "OK" : "NG";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["7\n500 600", "OK"],
    ["4\n5 7", "NG"],
    ["1\n11 11", "OK"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
