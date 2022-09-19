// subject: D - 感雨時刻の整理
// url: https://atcoder.jp/contests/abc001/tasks/abc001_4
// date: 2022-09-19T16:49:21.872Z
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
