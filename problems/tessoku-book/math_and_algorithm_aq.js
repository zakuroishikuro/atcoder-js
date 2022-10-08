// A29 - Power
// https://atcoder.jp/contests/tessoku-book/tasks/math_and_algorithm_aq
// 2022-10-08T07:22:27.871Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
const _vector = (s, f = v => v) => s.split(/\s/).map(f); //一次元配列
const _matrix = (s, f = v => v) => s.split(/\s/).map(r => _vector(r, f)); //二次元配列

// --------------------
// ----- ここから -----
// --------------------

const pow = (base, expo, mod) => {
  let p = base, ans = 1n;
  for (let i = 0n; i < 30; i++) {
    const wari = 2n ** i;
    if ((expo / wari) % 2n == 1n) {
      ans = (ans * p) % mod; // 「aの2^i乗」が掛けられるとき
    }
    p = (p * p) % mod;
  }
  return ans;
}

function main(input = '') {
  const [A, B] = _vector(input, BigInt);

  // もちろんだめ
  // return (BigInt(A) ** BigInt(B)) % 1000000007n;

  // この方法でもBigIntにするしなきゃだめ
  return pow(A, B, 1000000007n).toString();
}

// --------------------
// ----- ここまで -----
// --------------------

// prettier-ignore
if (process.env.NODE_ENV != 'test')
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["5 23", "871631629"], ["97 998244353", "934801994"]
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
