// subject: A01 - The First Problem
// url: https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_a
// date: 2022-09-19T16:51:45.723Z
function main(input = '') {
  const [a, b, ...items] = input.split(/\s/).map(Number);
  return 'a';
}

if (require.main === module) {
  console.log(main(require('fs').readFileSync(0, 'utf8')));
} else {
  [
    [
      "2",
      "4"
    ],
    [
      "8",
      "64"
    ],
    [
      "100",
      "10000"
    ]
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input)).toBe(output);
    });
  });
}
