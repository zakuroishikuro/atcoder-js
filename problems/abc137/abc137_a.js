// subject: A - +-x
// url: https://atcoder.jp/contests/abc137/tasks/abc137_a
// timestamp: 2022-09-21T14:23:02.001Z
function main(input = '') {
  const [a, b] = input.split(/\s/).map(Number);
  return Math.max(a + b, a - b, a * b);
}

if (require.main === module) {
  const input = require('fs').readFileSync(0, 'utf8').trim();
  console.log(main(input));
} else {
  [
    ['-13 3', '-10'],
    ['1 -33', '34'],
    ['13 3', '39'],
  ].forEach(([example, expected], i) => {
    test(`example ${i}`, () => {
      const actual = main(example).toString();
      expect(actual).toBe(expected);
    });
  });
}
