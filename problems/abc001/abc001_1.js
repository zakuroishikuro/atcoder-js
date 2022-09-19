// subject: A - 積雪深差
// url: https://atcoder.jp/contests/abc001/tasks/abc001_1
// date: 2022-09-19T16:48:34.425Z
function main(input = '') {
  const [a, b, ...items] = input.split(/\s/).map(Number);
  return 'a';
}

if (require.main === module) {
  console.log(main(require('fs').readFileSync(0, 'utf8')));
} else {
  [
    
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input)).toBe(output);
    });
  });
}
