// A27 - Calculate GCD
// https://atcoder.jp/contests/tessoku-book/tasks/math_and_algorithm_o
// 2022-10-08T06:02:53.105Z

function gcd(a, b) {
  const fn = (n, m) => n == 0 ? m : fn(m % n, n);
  return fn(Math.abs(a), Math.abs(b));
}

function main(input = '') {
  const [a, b] = input.split(/\s/).map(Number);
  return gcd(a, b);
}

if (process.env.NODE_ENV != 'test') console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["33 88", "11"], ["123 777", "3"]
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
