// A - Adjacent Squares
// https://atcoder.jp/contests/abc250/tasks/abc250_a
// 2022-10-26T14:12:57.238Z

export function main(input: string) {
  const [H, W, R, C] = input.split(/\s/).map(Number);
  let ans = 4;

  if (H == 1) {
    ans -= 2;
  } else if (R == 1 || R == H) {
    ans--;
  }

  if (W == 1) {
    ans -= 2;
  } else if (C == 1 || C == W) {
    ans--;
  }

  return ans;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 4\n2 2", "4"],
    ["3 4\n1 3", "3"],
    ["3 4\n3 4", "2"],
    ["1 10\n1 5", "2"],
    ["8 1\n8 1", "1"],
    ["1 1\n1 1", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
