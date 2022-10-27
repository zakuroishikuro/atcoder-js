// A - Lacked Number
// https://atcoder.jp/contests/abc248/tasks/abc248_a
// 2022-10-27T13:18:47.337Z

export function main(input: string) {
  return "0123456789".match(new RegExp(`[^${input}]`));
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["023456789", "1"],
    ["459230781", "6"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
