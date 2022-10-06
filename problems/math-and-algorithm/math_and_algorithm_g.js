// 007 - Number of Multiples 1
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_g
// 2022-09-26T13:18:21.257Z

function main(input = "") {
  const [n, x, y] = input.split(/\s/).map(Number);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += !(i % x) | !(i % y);
  }
  return cnt;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["15 3 5", "7"],
    ["1000000 11 13", "160839"],
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
