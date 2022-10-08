// /*subject*/
// /*url*/
// /*timestamp*/

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
const _vector = (s, f = v => v) => s.split(/\s/).map(f); //一次元配列
const _matrix = (s, f = v => v) => s.split(/\s/).map(r => _vector(r, f)); //二次元配列

function main(input = '') {
  const [A, B, ...data] = _vector(input, Number);
  //const [[_A, _B], ...data] = _matrix(input, Number); 

  return A;
}

// prettier-ignore
if (process.env.NODE_ENV != 'test')
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

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
        expect(`${main(input)}`).toBe(output);
      });
    });

    test('stub', () => {
      expect().toBe();
    });
  }
}
