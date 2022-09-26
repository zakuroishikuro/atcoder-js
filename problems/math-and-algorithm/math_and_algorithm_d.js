// 004 - Product of 3 Integers
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_d
// 2022-09-25T12:37:19.944Z

function main(input = "") {
  const [a, b, c] = input.split(/\s/);
  return a * b * c;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["2 8 8","128"],["7 7 25","1225"],["100 100 100","1000000"]
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
