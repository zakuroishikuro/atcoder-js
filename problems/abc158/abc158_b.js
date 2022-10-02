// B - Count Balls
// https://atcoder.jp/contests/abc158/tasks/abc158_b
// 2022-10-02T06:43:38.936Z

function main(input = '') {
  const [n, a, b] = parse(input);
  /*
  const ans = (a + b) * 1000;
  const x = Math.floor(ans / n) * a;
  const y = Math.max(a, ans % n)
  */
 //https://blog.hamayanhamayan.com/entry/2020/03/08/100424
  const len = a + b;
  const ans = (n / len) * a + Math.min(a, n % len);
  return Math.floor(ans);
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

if (process.env.NODE_ENV != 'test') {
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
} else {
  const examples = [
    ['8 3 4', '4'],
    ['8 0 4', '0'],
    ['6 2 4', '2']
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
