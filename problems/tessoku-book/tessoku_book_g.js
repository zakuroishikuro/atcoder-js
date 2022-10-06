// A07 - Event Attendance
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_g
// 2022-10-02T11:13:48.150Z

function main(input = '') {
  const [[d], [_n], ...rows] = parse(input);

  const sum = Array(d + 1).fill(0);

  rows.forEach(([l, r]) => {
    sum[l] += 1;
    sum[r + 1] -= 1;
  });

  let s = 0;
  const ans = sum.slice(1, d + 1).map((c) => (s += c));

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
  const examples = [['8\n5\n2 3\n3 6\n5 7\n3 7\n1 5', '1\n2\n4\n3\n4\n3\n2\n0']];

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
