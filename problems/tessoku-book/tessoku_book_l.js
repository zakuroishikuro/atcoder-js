// A12 - Printer
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_l
// 2022-10-04T12:25:08.372Z

const calcItems = (n, itemsPerSec) => {
  if (n < 0) return 0;
  const items = itemsPerSec.map((p) => n / p);
  return items.reduce((a, b) => a + b, 0n);
};

const middle = (size) => size >> 1n;

function main(input = '') {
  const [_n, k, ...nums] = parse(input, BigInt);

  let first = 0n;
  let last = BigInt(Number.MAX_SAFE_INTEGER); // ここ無駄にデカくしなければ別にBigIntにする必要なかったけどまぁいいや

  while (first < last) {
    const size = last - first;
    const mid = first + middle(size);
    const items = calcItems(mid, nums);

    if (items < k) {
      first = mid + 1n;
    } else {
      last = mid;
    }
  }

  return Number(first);
}

function parse(s = '', f = Number) {
  const m = f ? (s) => s.split(/\s/).map(f) : (s) => s.split(/\s/);
  return /\n.+\n/s.test(s) ? s.split(/\n/).map(m) : m(s);
}

// prettier-ignore
Object.defineProperties(Object.prototype,{log:{get:require.main==module?function(){return this}:function(){console.log(this);return this}}});
if (process.env.NODE_ENV != 'test') console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [['4 10\n1 2 3 4', '6']];

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

    /*
    test('calcItems', () => {
      expect(calcItems(0, [1])).toBe(0);
      expect(calcItems(1, [1])).toBe(1);
      expect(calcItems(2, [1])).toBe(2);
      expect(calcItems(3, [1])).toBe(3);
      expect(calcItems(4, [1])).toBe(4);
      expect(calcItems(1, [1, 1])).toBe(2);
      expect(calcItems(1, [1, 1, 1])).toBe(3);
      expect(calcItems(1, [1, 1, 1, 1])).toBe(4);

      const f = Math.floor;
      expect(calcItems(5, [1, 2, 3, 4])).toBe(f(5 / 1) + f(5 / 2) + f(5 / 3) + f(5 / 4));
    });
    test('middle', () => {
      expect(middle(0)).toBe(0);
      expect(middle(1)).toBe(0);
      expect(middle(2)).toBe(1);
      expect(middle(3)).toBe(1);
      expect(middle(4)).toBe(2);
      expect(middle(5)).toBe(2);
      expect(middle(6)).toBe(3);
    });
    */
  }
}
