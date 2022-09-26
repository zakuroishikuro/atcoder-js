// 009 - Brute Force 2
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_i
// 2022-09-26T13:28:11.170Z

function main(input = "") {
  const [n, s, ...a] = input.split(/\s/).map(Number);
  for (let i = 0; i < 2 ** n; i++) {
    const bits = [...i.toString(2)];
    const sum = bits.reduce((sum, bit, i) => sum + bit * a[i], 0);
    if (sum == s) return "Yes";
  }
  return "No";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 11\n2 5 9", "Yes"],
    ["4 11\n3 1 4 5", "No"],
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
