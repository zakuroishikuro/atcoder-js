// A05 - Three Cards
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_e
// 2022-10-02T01:24:25.643Z

function main(input = "") {
  const [n, K] = input.split(/\s/).map(Number);

  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const k = K - (i + j);
      if (0 < k && k <= n) cnt++;
    }
  }

  return cnt;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 6", "7"],
    ["3000 4000", "6498498"],
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
