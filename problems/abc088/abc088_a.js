// A - Infinite Coins
// https://atcoder.jp/contests/abc088/tasks/abc088_a
// 2022-09-28T14:15:56.925Z

function main(input = "") {
  const [n, a] = input.split(/\s/).map(Number);
  return n % 500 <= a ? "Yes" : "No";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["2018\n218", "Yes"],
    ["2763\n0", "No"],
    ["37\n514", "Yes"],
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
