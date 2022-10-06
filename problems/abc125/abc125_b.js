// B - Resale
// https://atcoder.jp/contests/abc125/tasks/abc125_b
// 2022-09-25T03:26:50.265Z

function main(input = "") {
  const _vector = (s = "") => s.split(/\s/).map(Number);
  const _matrix = (s = "") => s.split(/\n/).map(_vector);

  const [[_n], values, costs] = _matrix(input);
  return values.map((v, i) => v - costs[i]).filter((n) => n > 0).reduce((a, b) => a + b, 0);
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3\n10 2 5\n6 3 4", "5"],
    ["4\n13 21 6 19\n11 30 6 15", "6"],
    ["1\n1\n50", "0"],
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
