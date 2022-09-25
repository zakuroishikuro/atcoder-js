// C - Traveling
// https://atcoder.jp/contests/abc086/tasks/arc089_a
// 2022-09-25T00:40:48.124Z

const { abs } = Math;

function solve(data) {
  let prevTime = 0, prevX = 0, prevY = 0;
  for (const [t, x, y] of data) {
    const offsetTime = t - prevTime;
    const offsetX = abs(x - prevX);
    const offsetY = abs(y - prevY);

    const shortest = offsetX + offsetY;

    // 間に合わない
    if (offsetTime < shortest) return false;

    // 同じ偶数回・奇数回に訪れることができない (パリティ)
    if ((offsetTime % 2) != (shortest % 2)) return false;

    [prevTime, prevX, prevY] = [t, x, y];
  }
  return true;
}

function main(input) {
  const data = input.split(/\n/).map((row) => row.split(/\s/).map(Number)).slice(1);
  return solve(data) ? "Yes" : "No";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["2\n3 1 2\n6 1 1", "Yes"],
    ["1\n2 100 100", "No"],
    ["2\n5 1 1\n100 1 1", "No"],
  ];

  if (process.env.NEKO == "cat") {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test("stub", () => {
      expect().toBe();
    });
  }
}
