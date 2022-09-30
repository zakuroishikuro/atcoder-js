// C - Boxes and Candies
// https://atcoder.jp/contests/abc048/tasks/arc064_a
// 2022-09-30T14:20:25.540Z

function main(input = "") {
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

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 3\n2 2 2", "1"],
    ["6 1\n1 6 1 2 0 4", "11"],
    ["5 9\n3 1 4 1 5", "0"],
    ["2 0\n5 5", "10"],
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
