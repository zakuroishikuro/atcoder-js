// subject: A - Welcome to AtCoder
// url: https://atcoder.jp/contests/practice/tasks/practice_1
// date: 2022-09-20T15:11:34.952Z
function main(input = '') {
  const [a, b, ...items] = input.split(/\s/).map(Number);
  return 'a';
}

if (require.main === module) {
  console.log(main(require('fs').readFileSync(0, 'utf8')));
} else {
  [
    [
      "1\n2 3\ntest",
      "6 test"
    ],
    [
      "72\n128 256\nmyonmyon",
      "456 myonmyon"
    ]
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input)).toBe(output);
    });
  });
}
