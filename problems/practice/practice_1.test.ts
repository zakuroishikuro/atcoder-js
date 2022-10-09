// A - Welcome to AtCoder
// https://atcoder.jp/contests/practice/tasks/practice_1
// 2022-10-09T05:58:24.160Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (!process.env.VITEST) console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

// A - Welcome to AtCoderF
function solve(input = "") {
  const [a, b, c, s] = input.split(/\s+/);
  return `${+a + +b + +c} ${s}`;
}

//----------------//
//----- test -----//
//----------------//
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;

  [
    ["1\n2 3\ntest", "6 test"], ["72\n128 256\nmyonmyon", "456 myonmyon"]
  ].forEach(([input, output], i) => {
    it(`examples #${i}`, () => expect(solve(input).toString()).toBe(output));
  })
}