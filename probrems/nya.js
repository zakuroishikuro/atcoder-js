function main(input = "") {
  const [a, b, c, d] = input.split(/\s/).map(Number);
  return `${(a + b) * (c - d)}\nTakahashi`;
}

if (require.main === module) {
  console.log(main(require("fs").readFileSync(0, "utf8")));
} else {
  [
    ["1 2 5 3", "6\nTakahashi"],
    ["10 -20 30 -40", "-700\nTakahashi"],
    ["100 100 100 -100", "40000\nTakahashi"],
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input)).toBe(output);
    });
  })
}