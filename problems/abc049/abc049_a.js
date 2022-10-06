// A - 居合を終え、青い絵を覆う
// https://atcoder.jp/contests/abc049/tasks/abc049_a
// 2022-09-30T13:06:08.384Z

function main(input = "") {
  return "aiueo".includes(input) ? "vowel" : "consonant";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["a", "vowel"],
    ["z", "consonant"],
    ["s", "consonant"],
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
