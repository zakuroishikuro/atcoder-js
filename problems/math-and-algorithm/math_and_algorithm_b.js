// 002 - Sum of 3 Integers
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_b
// 2022-09-25T11:49:17.697Z

function main(input = "") {
  const [a, b, c] = input.split(/\s/).map(Number);
  return a + b + c;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["10 20 50", "80"],
    ["1 1 1", "3"],
    ["100 100 100", "300"],
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
