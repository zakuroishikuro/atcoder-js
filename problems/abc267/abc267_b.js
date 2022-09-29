// B - Split?
// https://atcoder.jp/contests/abc267/tasks/abc267_b
// 2022-09-29T14:50:09.071Z

function main(input = "") {
  const n = parseInt(input, 2);
  if (input[0] == "1") return "No";

  const cols = [
    
    0b0_000_001_000,
    0b0_001_000_000,
    0b0_100_000_100,
    0b1_000_100_000,
    0b0_010_000_010,
    0b0_000_010_000,
    0b0_000_000_001,
  ].map((col) => Math.sign(col & n));

  return cols.join("").match(/10+1/) ? "Yes" : "No";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["0101110101", "Yes"],
    ["0100101001", "Yes"],
    ["0000100110", "No"],
    ["1101110101", "No"],
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
