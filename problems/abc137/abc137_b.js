// B - One Clue
// https://atcoder.jp/contests/abc137/tasks/abc137_b
// 2022-10-01T01:01:05.942Z

function main(input = "") {
  const [k, x] = input.split(/\s/).map(Number);
  return [...Array(k * 2 - 1)].map((_, i)=>x - k + i + 1).join(" ");
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 7", "5 6 7 8 9"],
    ["4 0", "-3 -2 -1 0 1 2 3"],
    ["1 100", "100"],
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
