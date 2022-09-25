// /*subject*/
// /*url*/
// /*timestamp*/
[Object, Number, Math].forEach((o) => Reflect.ownKeys(o).forEach((n) => globalThis[n] = o[n]));
const _vector = (s = "") => s.split(/\s/).map(Number);
const _matrix = (s = "") => s.split(/\n/).map(_vector);

function main(input = "") {
  const [a, b, c] = _vector(input);
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
