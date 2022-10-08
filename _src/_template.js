// /*subject*/
// /*url*/
// /*timestamp*/

// prettier-ignore
if (process.env.NODE_ENV != 'test') console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
const _vector = (s, f = v => v) => s.split(/\s/).map(f); //一次元配列
const _matrix = (s, f = v => v) => s.split(/\s/).map(r => _vector(r, f)); //二次元配列

//　　　∧＿∧
//　　　(　･ω･)＝つ≡つ
//　　　(っ　≡つ＝つ
//　　　./　　　) ﾊﾞﾊﾞﾊﾞﾊﾞ
//　　　( /￣∪

function solve(input = '') {
  const [A, B, ...data] = _vector(input, Number);
  //const [[_A, _B], ...data] = _matrix(input, Number); 

  return A;
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    /*examples*/
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
