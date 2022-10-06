// A06 - How Many Guests?
// https://atcoder.jp/contests/tessoku-book/tasks/math_and_algorithm_ai
// 2022-10-02T11:02:46.532Z

function main(input = '') {
  const [_, cnt, ...queries] = parse(input);

  let s = 0;
  const sum = [0, ...cnt].map((n) => (s += n));

  const ans = queries.map(([l, r]) => sum[r] - sum[l - 1]);
  return ans.join('\n');
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

if (require.main == module) {
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [['10 5\n8 6 9 1 2 1 10 100 1000 10000\n2 3\n1 4\n3 9\n6 8\n1 10', '15\n24\n1123\n111\n11137']];

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
