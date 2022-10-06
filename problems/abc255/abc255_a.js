// A - You should output ARC, though this is ABC.
// https://atcoder.jp/contests/abc255/tasks/abc255_a
// 2022-10-06T13:02:47.569Z

function main(input = '') {
  const [[r, c], ...a] = parse(input);
  return a[r - 1][c - 1];
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

// prettier-ignore
Object.defineProperties(Object.prototype,{log:{get:require.main==module?function(){return this}:function(){console.log(this);return this}}});
if (process.env.NODE_ENV != 'test') console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ['1 2\n1 0\n0 1', '0'],
    ['2 2\n1 2\n3 4', '4'],
    ['2 1\n90 80\n70 60', '70']
  ];

  if (process.env.NEKO == 'cat') {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:`);
    console.log(`${input}\n----- output:\n${main(input)}\n-----\n`);
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
