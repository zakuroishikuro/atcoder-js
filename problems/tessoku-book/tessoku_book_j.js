// A10 - Resort Hotel
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_j
// 2022-10-02T14:45:29.861Z

function main(input = '') {
  const [[roomCount], rooms, [_days], ...forbid] = parse(input);

  const p = Array(roomCount).fill(0);
  const q = p.slice();
  for (let i = 0; i < roomCount; i++) {
    const j = roomCount - i - 1;
    p[i] = Math.max(rooms[i], p[i - 1] || 0);
    q[j] = Math.max(rooms[j], q[j + 1] || 0);
  }

  return forbid.map(([l, r]) => Math.max(p[l - 2], q[r])).join('\n');
}

const parse = (s = '', n = Number) => {
  const p = n ? (t) => t.split(/\s/).map(n) : (t) => t.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(p) : p(s);
};

// prettier-ignore
Object.defineProperties(Object.prototype,{log:{get:require.main==module?function(){return this}:function(){console.log(this);return this}}});
if (require.main == module) console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [['7\n1 2 5 5 2 3 1\n2\n3 5\n4 6', '3\n5']];

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
