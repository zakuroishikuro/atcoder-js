// /*subject*/
// /*url*/
// /*timestamp*/

function main(input = '') {
  const [a, b, c] = parse(input);
  return a;
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

// prettier-ignore
Object.defineProperties(Object.prototype,{
  log:{get:require.main==module?function(){return this}:function(){console.log(this);return this}}
});

if (require.main == module) {
  console.log(main(require('fs').readFileSync(0, 'utf8').trim()));
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == "test") {
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
