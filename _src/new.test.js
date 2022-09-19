const { problemsUrl, fetch, fetchproblem, fetchproblemUrls, loadTemplate } = require('./new.js');

test('problemsUrl', () => {
  expect(problemsUrl('abc269')).toBe('https://atcoder.jp/contests/abc269/tasks');
  expect(problemsUrl('https://atcoder.jp/contests/abc269')).toBe('https://atcoder.jp/contests/abc269/tasks');
  expect(problemsUrl('https://atcoder.jp/contests/abc269/tasks')).toBe('https://atcoder.jp/contests/abc269/tasks');
  expect(problemsUrl('https://atcoder.jp/contests/abc269/tasks/abc269_a')).toBe('https://atcoder.jp/contests/abc269/tasks');
});

test.skip('fetch', async () => {
  const data = await fetch('https://www.yahoo.co.jp/');
  expect(data).toMatch(/yahoo/i);
});

test.skip('fetchproblem', async () => {
  const url = 'https://atcoder.jp/contests/abc269/tasks/abc269_a';
  const data = await fetchproblem(url);
  expect(data).toStrictEqual({
    url,
    id: 'abc269_a',
    contest: 'abc269',
    subject: 'A - Anyway Takahashi',
    examples: [
      ['1 2 5 3', '6\nTakahashi'],
      ['10 -20 30 -40', '-700\nTakahashi'],
      ['100 100 100 -100', '40000\nTakahashi'],
    ],
  });
});

test.skip('fetchproblemUrls', async () => {
  const url = 'https://atcoder.jp/contests/abc269/tasks';
  const data = await fetchproblemUrls(url);
  expect(data).toStrictEqual([
    'https://atcoder.jp/contests/abc269/tasks/abc269_a',
    'https://atcoder.jp/contests/abc269/tasks/abc269_b',
    'https://atcoder.jp/contests/abc269/tasks/abc269_c',
    'https://atcoder.jp/contests/abc269/tasks/abc269_d',
    'https://atcoder.jp/contests/abc269/tasks/abc269_e',
    'https://atcoder.jp/contests/abc269/tasks/abc269_f',
    'https://atcoder.jp/contests/abc269/tasks/abc269_g',
    'https://atcoder.jp/contests/abc269/tasks/abc269_h',
  ]);
});

const sampleTemplate = `
// subject: A - Anyway Takahashi
// url: https://atcoder.jp/contests/abc269/tasks/abc269_a
// date: 2022-09-19T15:55:51.452Z
function main(input = '') {
  const [a, b, ...items] = input.split(/\\s/).map(Number);
  return 'a';
}
    +
if (require.main === module) {
  console.log(main(require('fs').readFileSync(0, 'utf8')));
} else {
  [
    [
      "1 2 5 3",
      "6\\nTakahashi"
    ],
    [
      "10 -20 30 -40",
      "-700\\nTakahashi"
    ],
    [
      "100 100 100 -100",
      "40000\\nTakahashi"
    ]
  ].forEach(([input, output], i) => {
    test(\`example \${i}\`, () => {
      expect(main(input)).toBe(output);
    });
  });
}`.trim();

test.skip('loadTemplate', () => {
  expect(
    loadTemplate({
      url: 'https://atcoder.jp/contests/abc269/tasks/abc269_a',
      id: 'abc269_a',
      contest: 'abc269',
      subject: 'A - Anyway Takahashi',
      examples: [
        ['1 2 5 3', '6\nTakahashi'],
        ['10 -20 30 -40', '-700\nTakahashi'],
        ['100 100 100 -100', '40000\nTakahashi'],
      ],
    }),
  ).toBe(sampleTemplate);
});
