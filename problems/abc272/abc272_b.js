// B - Everyone is Friends
// https://atcoder.jp/contests/abc272/tasks/abc272_b
// 2022-10-08T12:00:58.580Z

// prettier-ignore
Object.defineProperties(Object.prototype, { log: { get: require.main == module ? function () { return this } : function () { console.log(this); return this } } });
if (process.env.NODE_ENV != 'test') console.log(solve(require('fs').readFileSync(0, 'utf8').trim()).toString());

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
// 

function solve(input = '') {
  const [[_N, _K], ...data] = input.split(/\n/).map(r => r.split(/\s/).map(Number));

  const graph = [...Array(_N)].map(() => new Set());
  data.forEach(r => {
    const len = r.shift();
    for (let i = 0; i < len; i++) {
      const a = r[i];
      for (let j = i + 1; j < len; j++) {
        const b = r[j];
        graph[a - 1].add(b);
        graph[b - 1].add(a);
      }
    }
  })

  return graph.every(r=>r.size == _N - 1) ? "Yes" : "No";
}

//----------------//
//----- test -----//
//----------------//
if (process.env.NODE_ENV == 'test') {
  const examples = [
    ["3 3\n2 1 2\n2 2 3\n2 1 3", "Yes"], ["4 2\n3 1 2 4\n3 2 3 4", "No"]
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
