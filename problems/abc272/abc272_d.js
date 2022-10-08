// D - Root M Leaper
// https://atcoder.jp/contests/abc272/tasks/abc272_d
// 2022-10-08T12:25:56.828Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (process.env.NODE_ENV != 'test') console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

function calcDist(x1, y1, x2, y2) {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}

function solve(input = '') {
  const [N, M] = input.split(/\s/).map(Number);
  const D = Math.sqrt(M);

  

  const field = [...Array(N)].map(() => Array(N).fill(-1));
  field[0][0] = 0;

  const queue = [[0, 0]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const level = field[x][y];

    for (let x2 = 1; x2 < D; x2++) {
      const y2 = Math.sin()
    }

    for (let v = -DC; v <= DC; v++) {
      for (let h = -DC; h < DC; h++) {
        const len = Math.abs(v) + Math.abs(h);
        if ((len < DC - 1) || (len > DC)) continue;

        const x2 = x - h;
        const y2 = y - v;
        if (x2 < 0 || y2 < 0) continue;
        if (x2 >= N || y2 >= N) continue;
        if (field[x2][y2] != -1) continue;

        const d = calcDist(x, y, x2, y2);
        if (d == D) {
          queue.push([x2, y2]);
          field[x2][y2] = level + 1;
        }
      }
    }
  }

  return field.map(r => r.join(" ")).join("\n");
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["3 1", "0 1 2\n1 2 3\n2 3 4"],
    ["10 5", "0 3 2 3 2 3 4 5 4 5\n3 4 1 2 3 4 3 4 5 6\n2 1 4 3 2 3 4 5 4 5\n3 2 3 2 3 4 3 4 5 6\n2 3 2 3 4 3 4 5 4 5\n3 4 3 4 3 4 5 4 5 6\n4 3 4 3 4 5 4 5 6 5\n5 4 5 4 5 4 5 6 5 6\n4 5 4 5 4 5 6 5 6 7\n5 6 5 6 5 6 5 6 7 6"]
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

    test('calcDist', () => {
      expect(calcDist(1, 1, 2, 3)).toBe(Math.sqrt(5));
    });
  }
}
