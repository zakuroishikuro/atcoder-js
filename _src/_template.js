// /*subject*/
// /*url*/
// /*timestamp*/

const { floor, ceil, abs, sign, sqrt, log, log2, log10 } = Math;
const _vector = (s, fn = (v) => v) => s.split(/\s/).map(fn);
const _matrix = (s, fn) => s.split(/\n/).map((r) => _vector(r, fn));

function main(input = "") {
  const [a, b, ...data] = _vector(input, Number);
  return a;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    /*examples*/
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
