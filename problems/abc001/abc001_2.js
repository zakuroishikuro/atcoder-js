// B - 視程の通報
// https://atcoder.jp/contests/abc001/tasks/abc001_2
// 2022-09-28T14:07:51.982Z

function main(input = "") {
  const m = +input;
  if (m < 100) return "00";
  if (m <= 5_000) return `${m / 100}`.padStart(2, 0);
  if (m <= 30_000) return `${m / 1000 + 50}`;
  if (m <= 70_000) return `${(m / 1000 - 30) / 5 + 80}`;
  return 89;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["15000", "65"],
    ["75000", "89"],
    ["200", "02"],
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
