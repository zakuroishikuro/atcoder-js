// B - たてなが
// https://atcoder.jp/contests/abc049/tasks/abc049_b
// 2022-09-30T13:07:42.937Z

function main(input = "") {
  const lines = input.split("\n").slice(1);
  return lines.flatMap(line=>[line, line]).join("\n");
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["2 2\n*.\n.*", "*.\n*.\n.*\n.*"],
    ["1 4\n***.", "***.\n***."],
    [
      "9 20\n.....***....***.....\n....*...*..*...*....\n...*.....**.....*...\n...*.....*......*...\n....*.....*....*....\n.....**..*...**.....\n.......*..*.*.......\n........**.*........\n.........**.........",
      ".....***....***.....\n.....***....***.....\n....*...*..*...*....\n....*...*..*...*....\n...*.....**.....*...\n...*.....**.....*...\n...*.....*......*...\n...*.....*......*...\n....*.....*....*....\n....*.....*....*....\n.....**..*...**.....\n.....**..*...**.....\n.......*..*.*.......\n.......*..*.*.......\n........**.*........\n........**.*........\n.........**.........\n.........**.........",
    ],
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
