// subject: A - Product
// url: https://atcoder.jp/contests/abc086/tasks/abc086_a
// timestamp: 2022-09-21T14:09:52.248Z

export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return ["Even", "Odd"][(a * b) & 1];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 4", "Even"],
    ["1 21", "Odd"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
