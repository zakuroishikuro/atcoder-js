// A15 - Compression
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_o
// 2022-10-07T14:42:32.292Z

// 二分探索
function search(target, list = []) {
  let first = 0;
  let last = list.length - 1;
  while (first <= last) {
    const middle = first + Math.floor((last - first) / 2);
    if (list[middle] == target) return middle;
    if (list[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}

function main(input = "") {
  const [_n, ...a] = input.split(/\s/).map(Number);
  const b = [...new Set(a)].sort((a, b) => a - b); // Array#sortは関数渡さないと辞書順になるの忘れてた
  return a.map((n) => search(n, b) + 1).join(" ");
}

if (process.env.NODE_ENV != 'test') console.log(main(require('fs').readFileSync(0, 'utf8').trim()));

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["5\n46 80 11 77 46", "2 4 1 3 2"]
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
