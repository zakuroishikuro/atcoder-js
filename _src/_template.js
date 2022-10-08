// /*subject*/
// /*url*/
// /*timestamp*/

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (process.env.NODE_ENV != 'test') console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

function solve(input = '') {
  const [N, K] = input.split(/\s/).map(Number);
  //const [[_N, _K], ...data] = input.split(/\n/).map(r => r.split(/\s/).map(Number));

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
