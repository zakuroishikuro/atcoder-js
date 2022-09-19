// /*title*/
// /*url*/
// /*datetime*/
function main(input = '') {
  const [a, b, ...items] = input.split(/\s/).map(Number);
  return 'a';
}

if (require.main === module) {
  console.log(main(require('fs').readFileSync(0, 'utf8')));
} else {
  [
    /*examples*/
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input)).toBe(output);
    });
  });
}
