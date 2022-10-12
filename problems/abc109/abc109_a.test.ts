// A - ABC333
// https://atcoder.jp/contests/abc109/tasks/abc109_a
// 2022-09-25T02:39:28.802Z

export function main(input: string) {
  const [a, b] = input.split(/\s/).map(Number);
  return (a * b) & 1 ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 1", "Yes"],
    ["1 2", "No"],
    ["2 2", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
