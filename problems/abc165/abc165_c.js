// C - Many Requirements
// https://atcoder.jp/contests/abc165/tasks/abc165_c
// 2022-09-27T03:13:15.838Z

// 再帰は難しすぎる。rec関数は写経した。でもそれ以外は自分で書いた。あとで復習する。
function calc(vector, matrix) {
  let sum = 0;
  for (const [a, b, c, d] of matrix) {
    if (vector[b - 1] - vector[a - 1] == c) sum += d;
  }
  return sum;
}

function rec(A = [], n = 0, m = 0, matrix = []) {
  if (A.length == n) return calc(A, matrix);

  const prevLast = A.length == 0 ? 1 : A[A.length - 1];

  let max = 0;
  for (let add = prevLast; add <= m; add++) {
    A.push(add);
    max = Math.max(max, rec(A, n, m, matrix));
    A.pop();
  }

  return max;
}

function main(input = "") {
  const [[n, m, _q], ...data] = input.split(/\n/).map((row) => row.split(/\s/).map(Number));

  const A = [];
  return rec(A, n, m, data);
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  const examples = [
    ["3 4 3\n1 3 3 100\n1 2 2 10\n2 3 2 10", "110"],
    ["4 6 10\n2 4 1 86568\n1 4 0 90629\n2 3 0 90310\n3 4 1 29211\n3 4 3 78537\n3 4 2 8580\n1 2 1 96263\n1 4 2 2156\n1 2 0 94325\n1 4 3 94328", "357500"],
    ["10 10 1\n1 10 9 1", "1"],
  ];

  if (process.env.NEKO == "cat") {
    const idx = process.argv[2] || 1;
    const input = examples[idx - 1][0];
    console.log(`----- 🐈 example #${idx}:\n${input}\n----- output:\n${main(input)}\n-----\n`);
  } else {
    examples.forEach(([input, output], i) => {
      test(`example #${i + 1}`, () => {
        expect(`${main(input)}`).toBe(output);
      });
    });

    test("calc", () => {
      const actual = calc([1, 3, 4], [[1, 3, 3, 100], [1, 2, 2, 10], [2, 3, 2, 10]]);
      expect(actual).toBe(110);
    });
  }
}
