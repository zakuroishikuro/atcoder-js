// A - Intersection
// https://atcoder.jp/contests/abc261/tasks/abc261_a
// 2022-10-23T03:06:29.277Z

// memo: 区間の共通部分
// https://atcoder.jp/contests/abc261/editorial/4499

const { min, max } = Math;

export function main(input: string) {
  const [a_, _a, b_, _b] = input.split(/\s/).map(Number);

  return max(min(_b, _a) - max(a_, b_), 0);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["0 3 1 5", "2"],
    ["0 1 4 5", "0"],
    ["0 3 3 7", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
