// B - Maintain Multiple Sequences
// https://atcoder.jp/contests/abc271/tasks/abc271_b
// 2022-10-01T12:01:39.936Z

function main(input = "") {
  const data = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const [_n, _q] = data.shift();
  const nums = data.slice(0, _n).map(r=>r.slice(1));
  const queries = data.slice(_n);

  const results = [];
  for (const [r, c] of queries){
    results.push(nums[r - 1][c - 1]);
  }

  return results.join("\n");
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["2 2\n3 1 4 7\n2 5 9\n1 3\n2 1", "7\n5"],
    ["3 4\n4 128 741 239 901\n2 1 1\n3 314 159 26535\n1 1\n2 2\n3 3\n1 4", "128\n1\n26535\n901"],
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
