// A - AtCoder *** Contest
// https://atcoder.jp/contests/abc048/tasks/abc048_a
// 2022-09-30T13:46:29.674Z

function main(input = "") {
  return input.replace(/(?:(\w)\S*\s*)/g, "$1");
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["AtCoder Beginner Contest", "ABC"],
    ["AtCoder Snuke Contest", "ASC"],
    ["AtCoder X Contest", "AXC"],
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
