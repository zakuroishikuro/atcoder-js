// A11 - Binary Search 1
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_k
// 2022-10-04T11:51:35.091Z

// にぶたん
const find = (value, values) => {
  let first = 0;
  let last = values.length - 1;
  while (first <= last) {
    const size = last - first + 1;
    const middle = first + ((size - (size & 1)) >> 1);
    if (values[middle] == value) return middle;
    if (values[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return -1;
};

function main(input = '') {
  const [_n, x, ...nums] = parse(input);
  nums.sort((a, b) => a - b);

  return find(x, nums) + 1;
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

// prettier-ignore
Object.defineProperties(Object.prototype,{log:{get:require.main==module?function(){return this}:function(){console.log(this);return this}}});
if (require.main == module) console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ['15 47\n11 13 17 19 23 29 31 37 41 43 47 53 59 61 67', '11']
    //['10 80\n10 20 30 40 50 60 70 80 90 100', '8']
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
