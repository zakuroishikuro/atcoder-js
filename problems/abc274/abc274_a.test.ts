// A - Batting Average
// https://atcoder.jp/contests/abc274/tasks/abc274_a
// 2022-10-22T12:00:23.929Z

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  return (B / A).toFixed(3);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["7 4", "0.571"],
    ["7 3", "0.429"],
    ["2 1", "0.500"],
    ["10 10", "1.000"],
    ["1 0", "0.000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
