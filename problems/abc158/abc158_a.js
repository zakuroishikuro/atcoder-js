// A - Station and Bus
// https://atcoder.jp/contests/abc158/tasks/abc158_a
// 2022-10-02T06:32:39.963Z

function main(input = '') {
  return input.replace(/A/g).length % 3 ? 'Yes' : 'No';
}

if (process.env.NODE_ENV != 'test') {
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

if (process.env.NODE_ENV == 'test') {
  const examples = [
    ['ABA', 'Yes'],
    ['BBA', 'Yes'],
    ['BBB', 'No']
  ];

  if (process.env.NEKO == 'cat') {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test('stub', () => {
      expect().toBe();
    });
  }
}
