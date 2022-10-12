// B - Bishop
// https://atcoder.jp/contests/panasonic2020/tasks/panasonic2020_b
// 2022-10-09T16:00:22.880Z

export function main(input: string) {
  const [H, W] = input.split(/\s/).map(Number);
  if (H == 1 || W == 1) return 1;
  return Math.ceil((H * W) / 2);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 5", "10"],
    ["7 3", "11"],
    ["1000000000 1000000000", "500000000000000000"],

    ["1 1", "1"],
    ["1 2", "1"],
    ["1 3", "1"],

    ["2 2", "2"],
    ["3 3", "5"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
