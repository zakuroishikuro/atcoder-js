// 008 - Brute Force 1
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_h
// 2022-09-26T13:24:07.095Z

function main(input = "") {
  const [n, s] = input.split(/\s/).map(Number);
  let cnt = 0;
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= n; j++){
      if (i + j <= s) cnt++;
    }
  }
  return cnt;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 4","6"],["869 120","7140"]
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
