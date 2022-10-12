// C - Boxes and Candies
// https://atcoder.jp/contests/abc048/tasks/arc064_a
// 2022-09-30T14:20:25.540Z

// 貪欲

export function main(input: string) {
  const [[_N, x], boxes] = input.split("\n").map((r) => r.split(/\s/).map(Number));

  let eatedCount = 0;
  for (let i = 0; i < boxes.length; i++) {
    const a = boxes[i - 1] || 0;
    const b = boxes[i];

    if (a + b > x) {
      eatedCount += a + b - x;
      boxes[i] = x - a;
    }
  }

  return eatedCount;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 3\n2 2 2", "1"],
    ["6 1\n1 6 1 2 0 4", "11"],
    ["5 9\n3 1 4 1 5", "0"],
    ["2 0\n5 5", "10"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
