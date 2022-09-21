// /*timestamp*/ /*url*/
function main(input = '') {
  const [a, b, c] = input.split(/\s/).map(Number);
  return a;
}

if (require.main === module) {
  const input = require('fs').readFileSync(0, 'utf8').trim();
  console.log(main(input));
} else {
  [
    /*examples*/
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input).toString()).toBe(output);
    });
  });
}
