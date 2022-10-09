// /*subject*/
// /*url*/
// /*timestamp*/

// prettier-ignore
Object.defineProperties(Object.prototype, { _: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (!process.env.VITEST) console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

function solve(input: string) {
  const [N, K] = input.split(/\s+/).map(Number);
  //const [[_N, _K], ...data] = input.split(/\n/).map(r => r.split(/\s+/).map(Number);

  return N;
}

//----------------//
//----- test -----//
//----------------//
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  [
    /*examples*/
  ].forEach(([input, output], i) => {
    it(`examples #${i}`, () => expect(solve(input).toString()).toBe(output));
  })
}