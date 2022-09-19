// subject: B - Rectangle Detection
// url: https://atcoder.jp/contests/abc269/tasks/abc269_b
// date: 2022-09-19T16:26:29.307Z
function main(input = '') {
  const [a, b, ...items] = input.split(/\s/).map(Number);
  return 'a';
}

if (require.main === module) {
  console.log(main(require('fs').readFileSync(0, 'utf8')));
} else {
  [
    [
      "..........\n..........\n..........\n..........\n...######.\n...######.\n...######.\n...######.\n..........\n..........",
      "5 8\n4 9"
    ],
    [
      "..........\n..#.......\n..........\n..........\n..........\n..........\n..........\n..........\n..........\n..........",
      "2 2\n3 3"
    ],
    [
      "##########\n##########\n##########\n##########\n##########\n##########\n##########\n##########\n##########\n##########",
      "1 10\n1 10"
    ]
  ].forEach(([input, output], i) => {
    test(`example ${i}`, () => {
      expect(main(input)).toBe(output);
    });
  });
}
