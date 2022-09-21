// subject: A - Product
// url: https://atcoder.jp/contests/abc086/tasks/abc086_a
// timestamp: 2022-09-21T14:09:52.248Z
function main(input = '') {
  const [a, b] = input.split(/\s/).map(Number);
  return ['Even', 'Odd'][(a * b) & 1];
}

if (require.main === module) {
  const input = require('fs').readFileSync(0, 'utf8').trim();
  console.log(main(input));
} else {
  [
    ['3 4', 'Even'],
    ['1 21', 'Odd'],
  ].forEach(([example, expected], i) => {
    test(`example ${i}`, () => {
      const actual = main(example).toString();
      expect(actual).toBe(expected);
    });
  });
}
