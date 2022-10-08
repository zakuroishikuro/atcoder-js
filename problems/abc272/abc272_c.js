// C - Max Even
// https://atcoder.jp/contests/abc272/tasks/abc272_c
// 2022-10-08T12:16:06.314Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (process.env.NODE_ENV != 'test') console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

function solve(input = '') {
  const [_N, ...A] = input.split(/\s/).map(Number);
  A.sort((a, b) => a - b);

  const even = [], odd = [];
  A.forEach(n => (n & 1 ? odd : even).push(n));

  let e = 0, o = 0;
  if (even.length >= 2) e = even.slice(-2).reduce((a, b) => a + b);
  if (odd.length >= 2) o = odd.slice(-2).reduce((a, b) => a + b);

  if (e == 0 && o == 0) return -1;

  return Math.max(e, o);
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["3\n2 3 4", "6"], ["2\n1 0", "-1"]
  ];

  if (process.env.NEKO == 'cat') {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:`);
    console.log(`${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(solve(input).toString()).toBe(output);
      });
    });

    test('stub', () => {
      expect().toBe();
    });
  }
}
