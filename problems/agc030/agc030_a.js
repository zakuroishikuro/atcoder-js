// A - Poisonous Cookies
// https://atcoder.jp/contests/agc030/tasks/agc030_a
// 2022-09-25T05:30:06.394Z

function main(input = "") {
  const [[a, b, c]] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return a + b + 1 >= c ? b + c : a + b * 2 + 1;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 1 4", "5"],
    ["5 2 9", "10"],
    ["8 8 1", "9"],
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
