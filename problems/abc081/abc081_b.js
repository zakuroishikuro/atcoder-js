// B - Shift only
// https://atcoder.jp/contests/abc081/tasks/abc081_b
// 2022-09-22T15:08:54.949Z
function main(input = '') {
  return input
    .split(/\s/)
    .slice(1)
    .map(Number)
    .reduce((m, n) => {
      let i = 0;
      for (; n > 0 && ~n & 1; i++) n >>= 1;
      return Math.min(m, i);
    }, 2 ** 31);
}

if (process.env.NODE_ENV != 'test') {
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
} else {
  [
    ['3\n8 12 40', '2'],
    ['4\n5 6 8 10', '0'],
    ['6\n382253568 723152896 37802240 379425024 404894720 471526144', '8'],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}:\n-----\n${input}\n-----`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
