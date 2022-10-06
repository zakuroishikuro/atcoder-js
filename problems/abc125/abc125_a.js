// A - Biscuit Generator
// https://atcoder.jp/contests/abc125/tasks/abc125_a
// 2022-09-25T03:21:01.124Z

function main(input = "") {
  const [a, b, t] = input.split(/\s/).map(Number);
  return Math.floor((t + 0.5) / a) * b;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 5 7", "10"],
    ["3 2 9", "6"],
    ["20 20 19", "0"],
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
