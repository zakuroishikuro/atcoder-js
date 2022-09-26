// 003 - Sum of N Integers
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_c
// 2022-09-25T12:35:54.670Z

function main(input = "") {
  return input.split(/\s/).slice(1).map(Number).reduce((a,b)=>a + b);
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["5\n3 1 4 1 5","14"],["3\n10 20 50","80"],["10\n1 2 3 4 5 6 7 8 9 10","55"]
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
