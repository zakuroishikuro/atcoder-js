// 005 - Modulo 100
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_e
// 2022-09-25T12:38:12.782Z

function main(input = "") {
  const [_n, ...data] = input.split(/\s/).map(Number);
  return data.reduce((a, b) => a + b) % 100;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3\n30 50 70", "50"],
    ["10\n1 2 3 4 5 6 7 8 9 10", "55"],
    ["5\n60 60 60 60 60", "0"],
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
