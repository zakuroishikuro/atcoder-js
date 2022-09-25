// B - Christmas Eve Eve
// https://atcoder.jp/contests/abc115/tasks/abc115_b
// 2022-09-25T08:43:03.515Z

function main(input = "") {
  const prices = input.split(/\s/).map(Number).slice(1);

  const max = Math.max(...prices);
  const sum = prices.reduce((a, b) => a + b);
  return sum - max / 2;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3\n4980\n7980\n6980", "15950"],
    ["4\n4320\n4320\n4320\n4320", "15120"],
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
