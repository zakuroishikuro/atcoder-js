// /*subject*/
// /*url*/
// /*timestamp*/
function main(input = '') {
  const [a, b, c] = input.split(/\s/).map(Number);
  return a;
}

if (process.env.NODE_ENV != 'test') {
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
} else {
  [
    /*examples*/
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}