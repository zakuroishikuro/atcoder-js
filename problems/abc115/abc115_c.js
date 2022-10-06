// C - Christmas Eve
// https://atcoder.jp/contests/abc115/tasks/abc115_c
// 2022-09-25T08:50:22.120Z

const _vector = (s, fn = (v) => v) => s.split(/\s/).map(fn);
const _matrix = (s, fn) => s.split(/\n/).map((r) => _vector(r, fn));

function main(input = "") {
  const [n, k, ...data] = _vector(input, Number);
  data.sort((a, b) => b - a);

  let prev = 0;
  const sum = data.map((tree) => {
    const s = tree + prev;
    prev = tree;
    return s;
  });

  return sum;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["5 3\n10\n15\n11\n14\n12", "2"],
    ["5 3\n5\n7\n5\n7\n7", "0"],
  ];

  if (process.env.NEKO == "cat") {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    examples.forEach(([input, output], i) => {
      test.skip(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test("stub", () => {
      expect().toBe();
    });
  }
}
