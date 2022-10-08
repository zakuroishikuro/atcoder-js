// A26 - Prime Check
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_z
// 2022-10-08T05:08:36.970Z

/* //TLE
function isPrime(n) {
  const len = Math.sqrt(n);
  for (let i = 2; i <= len; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
*/

// 偶数の判定はスキップしたら一応TLEじゃなくなったのでヨシ！
function isPrime(n) {
  if (n <= 2) return n == 2;
  if (!(n & 1)) return false;

  const len = Math.sqrt(n);
  for (let i = 3; i <= len; i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}

function main(input = '') {
  const [_Q, ...X] = parse(input);
  return X.map(isPrime).map(f => f ? "Yes" : "No").join("\n");
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
    ["4\n17\n31\n35\n49", "Yes\nYes\nNo\nNo"]
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

    test('isPrime', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(2)).toBe(true);
      expect(isPrime(3)).toBe(true);
      expect(isPrime(4)).toBe(false);
      expect(isPrime(5)).toBe(true);
      expect(isPrime(6)).toBe(false);
    });
  }
}
