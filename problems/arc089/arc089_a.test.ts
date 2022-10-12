// C - Traveling
// https://atcoder.jp/contests/abc086/tasks/arc089_a
// 2022-09-25T00:40:48.124Z

const { abs } = Math;

function solve(data) {
  let prevTime = 0;
  let prevX = 0;
  let prevY = 0;
  for (const [t, x, y] of data) {
    const offsetTime = t - prevTime;
    const offsetX = abs(x - prevX);
    const offsetY = abs(y - prevY);

    const shortest = offsetX + offsetY;

    // 間に合わない
    if (offsetTime < shortest) return false;

    // 同じ偶数回・奇数回に訪れることができない (パリティ)
    if (offsetTime % 2 != shortest % 2) return false;

    [prevTime, prevX, prevY] = [t, x, y];
  }
  return true;
}

export function main(input: string) {
  const data = input
    .split(/\n/)
    .map((row) => row.split(/\s/).map(Number))
    .slice(1);
  return solve(data) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2\n3 1 2\n6 1 1", "Yes"],
    ["1\n2 100 100", "No"],
    ["2\n5 1 1\n100 1 1", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
