// A28 - Blackboard
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_ab
// 2022-10-08T06:26:41.691Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });

function main(input = '') {
  const [[_N], ...T] = input.split(/\n/).map(r => r.split(/\s/));
  T.forEach(r => r[1] = +r[1]);

  let n = 0;
  return T.map(([operator, operand]) => {
    switch (operator) {
      case "+": n += operand; break;
      case "-": n -= operand; break;
      case "*": n *= operand; break;
    }
    n += 10000;
    n %= 10000;
    return n;
  }).join("\n");
}

if (process.env.NODE_ENV != 'test') console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["4\n+ 57\n+ 43\n* 100\n- 1", "57\n100\n0\n9999"]
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
