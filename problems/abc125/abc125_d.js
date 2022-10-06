// D - Flipping Signs
// https://atcoder.jp/contests/abc125/tasks/abc125_d
// 2022-09-25T04:20:13.443Z

function main(input = "") {
  const [[_n], a] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  let sum = 0, minusCount = 0, min = Number.MAX_SAFE_INTEGER;
  for (const n of a) {
    const value = Math.abs(n);
    sum += value;
    minusCount += n < 0;
    min = Math.min(min, value);
  }
  if (minusCount % 2 == 1) sum -= min * 2;
  return sum;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3\n-10 5 -4", "19"],
    ["5\n10 -4 -8 -11 3", "30"],
    ["11\n-1000000000 1000000000 -1000000000 1000000000 -1000000000 0 1000000000 -1000000000 1000000000 -1000000000 1000000000", "10000000000"],
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
