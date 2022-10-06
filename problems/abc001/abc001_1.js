// A - 積雪深差
// https://atcoder.jp/contests/abc001/tasks/abc001_1
// 2022-09-28T14:02:53.981Z

function main(input = "") {
  const [h1, h2] = input.split(/\s/).map(Number);
  return h1 - h2;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["15\n10", "5"],
    ["0\n0", "0"],
    ["5\n20", "-15"],
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
