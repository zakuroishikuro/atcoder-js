// A - 484558
// https://atcoder.jp/contests/abc271/tasks/abc271_a
// 2022-10-01T12:00:31.101Z

function main(input = "") {
  return (+input).toString(16).slice(0,2).padStart(2, 0).toUpperCase();
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["99","63"],["12","0C"],["0","00"],["255","FF"]
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
