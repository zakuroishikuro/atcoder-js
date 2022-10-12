// subject: A - Serval vs Monster
// url: https://atcoder.jp/contests/abc153/tasks/abc153_a
// timestamp: 2022-09-21T14:17:53.848Z

export function main(input: string) {
  const [H, A] = input.split(/\s/).map(Number);
  return Math.ceil(H / A);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10 4", "3"],
    ["1 10000", "1"],
    ["10000 1", "10000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
