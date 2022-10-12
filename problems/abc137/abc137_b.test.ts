// B - One Clue
// https://atcoder.jp/contests/abc137/tasks/abc137_b
// 2022-10-01T01:01:05.942Z

export function main(input: string) {
  const [K, X] = input.split(/\s/).map(Number);
  const first = X - K + 1;
  const size = K * 2 - 1;
  return [...Array(size)].map((_, i) => first + i).join(" ");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 7", "5 6 7 8 9"],
    ["4 0", "-3 -2 -1 0 1 2 3"],
    ["1 100", "100"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
