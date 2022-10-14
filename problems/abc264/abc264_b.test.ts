// B - Nice Grid
// https://atcoder.jp/contests/abc264/tasks/abc264_b
// 2022-10-14T12:07:09.345Z

export function main(input: string) {
  const [R, C] = input.split(/\s/).map(Number);
  return Math.max(Math.abs(R - 7), Math.abs(C - 7)) % 2 ? "white" : "black";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 5", "black"],
    ["4 5", "white"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
