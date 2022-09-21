// subject: /*subject*/
// url: /*url*/
// timestamp: /*timestamp*/
function main(input = '') {
  const [a, b] = input.split(/\s/);
  return a;
}

if (require.main === module) {
  const input = require('fs').readFileSync(0, 'utf8').trim();
  console.log(main(input));
} else {
  [
    /*examples*/
  ].forEach(([example, expected], i) => {
    test(`example ${i}`, () => {
      const actual = main(example).toString();
      expect(actual).toBe(expected);
    });
  });
}
