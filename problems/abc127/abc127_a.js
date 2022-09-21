// subject: A - Ferris Wheel
// url: https://atcoder.jp/contests/abc127/tasks/abc127_a
// timestamp: 2022-09-21T14:23:41.977Z
function main(input = '') {
  let [age, cost] = input.split(/\s/).map(Number);
  if (age <= 5) cost = 0;
  if (age <= 12) cost /= 2;
  return cost;
}

if (require.main === module) {
  const input = require('fs').readFileSync(0, 'utf8').trim();
  console.log(main(input));
} else {
  [
    ['30 100', '100'],
    ['12 100', '50'],
    ['0 100', '0'],
  ].forEach(([example, expected], i) => {
    test(`example ${i}`, () => {
      const actual = main(example).toString();
      expect(actual).toBe(expected);
    });
  });
}
