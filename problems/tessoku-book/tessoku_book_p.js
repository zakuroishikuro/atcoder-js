// A16 - Dungeon 1（※初版第 1 刷の B22 も同じ問題です）
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_p
// 2022-10-08T03:58:12.481Z

function main(input = '') {
  const [[N], A, B] = parse(input);

  const dp = new Uint32Array(N);
  dp[0] = 0;
  dp[1] = A[0];

  for (let i = 2; i < N; i++) {
    const a = dp[i - 1] + A[i - 1];
    const b = dp[i - 2] + B[i - 2];
    dp[i] = Math.min(a, b);
  }

  return dp[N - 1];
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (process.env.NODE_ENV != 'test') console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["5\n2 4 1 3\n5 3 7", "8"], ["10\n1 19 75 37 17 16 33 18 22\n41 28 89 74 98 43 42 31", "157"]
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
