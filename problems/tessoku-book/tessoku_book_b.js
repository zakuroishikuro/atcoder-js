// A02 - Linear Search
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_b
// 2022-10-01T09:25:49.172Z

function main(input = "") {
  const [[_n, _x], nums] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return nums.includes(_x) ? "Yes" : "No";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["5 40\n10 20 30 40 50", "Yes"],
    ["6 28\n30 10 40 10 50 90", "No"],
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
