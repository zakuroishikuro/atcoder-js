// A32 - Game 1
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_af
// 2022-10-08T11:03:22.739Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (process.env.NODE_ENV != 'test') console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

function solve(input = '') {
  const [N, A, B] = input.split(/\s/).map(Number);

  const rem = N % (A + B);

  return rem <= A ? "Second" : "First";
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["8 2 3", "First"], ["6 2 3", "Second"]
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
