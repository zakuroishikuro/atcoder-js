// B - Between a and b ...
// https://atcoder.jp/contests/abc048/tasks/abc048_b
// 2022-09-30T13:52:04.552Z

function main(input = "") {
  const [a, b, x] = input.split(/\s/).map(BigInt);
  const first = BigInt(a % x == 0n);
  const result = b / x - a / x + first;
  return result.toString();
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["4 8 2", "3"],
    ["0 5 1", "6"],
    ["9 9 2", "0"],
    ["1 1000000000000000000 3", "333333333333333333"],
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
