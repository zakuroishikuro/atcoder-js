// subject: A02 - Linear Search
// url: https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_b
// date: 2022-09-19T16:51:50.327Z
function main(input = '') {
  const [a, b, ...items] = input.split(/\s/).map(Number);
  return 'a';
}

if (require.main === module) {
  console.log(main(require('fs').readFileSync(0, 'utf8')));
} else {
  [
    [
      "5 40\n10 20 30 40 50",
      "Yes"
    ],
    [
      "6 28\n30 10 40 10 50 90",
      "No"
    ]
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input)).toBe(output);
    });
  });
}
