// B - Longest Segment
// https://atcoder.jp/contests/abc234/tasks/abc234_b
// 2022-10-18T13:23:06.014Z

export function main(input: string) {
  const pts = input
    .split(/\n/)
    .slice(1)
    .map((r) => r.split(/\s/).map(Number));

  let max = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i];
    for (let j = i + 1; j < pts.length; j++) {
      const [x2, y2] = pts[j];
      const w = x1 - x2;
      const h = y1 - y2;
      const len = Math.sqrt(w * w + h * h);
      max = Math.max(max, len);
    }
  }

  return max;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n0 0\n0 1\n1 1", "1.4142135624"],
    ["5\n315 271\n-2 -621\n-205 -511\n-952 482\n165 463", "1455.7159750446"],
  ])("example %#", (input, expected) => {
    expect(main(input)).toBeCloseTo(Number(expected));
  });
}
