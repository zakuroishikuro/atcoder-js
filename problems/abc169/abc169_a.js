// subject: A - Multiplication 1
// url: https://atcoder.jp/contests/abc169/tasks/abc169_a
// timestamp: 2022-09-21T14:00:46.567Z
function main(input = '') {
  const [a, b] = input.split(/\s/).map(Number);
  return a * b;
}

if (require.main === module) {
  const input = require('fs').readFileSync(0, 'utf8').trim();
  console.log(main(input));
} else {
  [
    ['2 5', '10'],
    ['100 100', '10000'],
  ].forEach(([example, expected], i) => {
    test(`example ${i}`, () => {
      const actual = main(example).toString();
      expect(actual).toBe(expected);
    });
  });
}
