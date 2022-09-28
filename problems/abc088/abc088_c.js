// C - Takahashi's Information
// https://atcoder.jp/contests/abc088/tasks/abc088_c
// 2022-09-28T14:18:01.915Z

// 無理や

function main(input = "") {
  const cells = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const rowBounds = cells.map((row) => {
    let min = 100, max = 0;
    row.forEach((n) => {
      min = Math.min(min, n);
      max = Math.max(max, n);
    });
    return [min, max];
  });
  const colBounds = [...Array(3)].map((_, i) => {
    let min = 100, max = 0;
    cells.forEach((row) => {
      min = Math.min(min, row[i]);
      max = Math.max(max, row[i]);
    });
    return [min, max];
  });

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const value = cells[i][j];
      const [rowMin, _rowMax] = rowBounds[i];
      const [colMin, _colMax] = colBounds[j];
      if (value > rowMin + colMin) return "No";
    }
  }
  return "Yes";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["1 0 1\n2 1 2\n1 0 1", "Yes"],
    ["2 2 2\n2 1 2\n2 2 2", "No"],
    ["0 8 8\n0 8 8\n0 8 8", "Yes"],
    ["1 8 6\n2 9 7\n0 7 7", "No"],
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
