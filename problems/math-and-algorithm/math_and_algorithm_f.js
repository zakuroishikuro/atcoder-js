// 006 - Print 2N+3
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_f
// 2022-09-26T13:16:31.615Z

function main(input = "") {
  const [n] = input.split(/\s/).map(Number);
  return 2 * n + 3;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["100","203"],["27","57"]
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
