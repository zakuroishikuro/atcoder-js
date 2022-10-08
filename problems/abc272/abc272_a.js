// A - Integer Sum
// https://atcoder.jp/contests/abc272/tasks/abc272_a
// 2022-10-08T12:00:24.674Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (process.env.NODE_ENV != 'test') console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

function solve(input = '') {
  const [_N, ...A] = input.split(/\s/).map(Number);
  return A.reduce((a,b)=>a + b);
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["3\n2 7 2","11"],["1\n3","3"]
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
