// A - 1-2-4 Test
// https://atcoder.jp/contests/abc270/tasks/abc270_a
// 2022-09-24T12:00:20.122Z

export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return a | b;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["1 2", "3"],
    ["5 3", "7"],
    ["0 0", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
