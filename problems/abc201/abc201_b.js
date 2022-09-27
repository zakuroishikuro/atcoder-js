// B - Do you know the second highest mountain?
// https://atcoder.jp/contests/abc201/tasks/abc201_b
// 2022-09-27T13:03:12.658Z

function main(input = "") {
  const [[_n], ...mountains] = input.split(/\n/).map((s) => s.split(/\s/));
  mountains.sort((a, b) => b[1] - a[1]);
  return mountains[1][0];
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3\nEverest 8849\nK2 8611\nKangchenjunga 8586", "K2"],
    ["4\nKita 3193\nAino 3189\nFuji 3776\nOkuhotaka 3190", "Kita"],
    ["4\nQCFium 2846\nchokudai 2992\nkyoprofriends 2432\npenguinman 2390", "QCFium"],
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
