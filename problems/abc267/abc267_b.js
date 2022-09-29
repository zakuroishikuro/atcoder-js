// B - Split?
// https://atcoder.jp/contests/abc267/tasks/abc267_b
// 2022-09-29T14:50:09.071Z

const main = (s = "") => {
  return !+s[0] && [
      s[6],
      s[3],
      s[1] | s[7],
      s[0] | s[4],
      s[2] | s[8],
      s[5],
      s[9],
    ].join("").match(/10+1/)
    ? "Yes"
    : "No";
};

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
