// A08 - Two Dimensional Sum
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_h
// 2022-10-02T11:49:23.579Z

export function main(input: string) {
  const data = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const [h, w] = data.shift();
  const matrix = data.slice(0, h);
  const queries = data.slice(h + 1);

  // 二次元の累積和を作成。0行目・0列目は全て0
  const sum = [...Array(h + 1)].map(() => Array(w + 1).fill(0));

  // まず行ごとに足す。0行目・0列目は避ける。
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      sum[i][j] = sum[i][j - 1] + matrix[i - 1][j - 1];
    }
  }

  // つぎに列ごとに足す
  for (let j = 1; j <= w; j++) {
    for (let i = 1; i <= h; i++) {
      sum[i][j] += sum[i - 1][j];
    }
  }

  const ans = queries.map(([a, b, c, d]) => {
    return sum[a - 1][b - 1] + sum[c][d] - sum[a - 1][d] - sum[c][b - 1];
  });
  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["5 5\n2 0 0 5 1\n1 0 3 0 0\n0 8 5 0 2\n4 1 0 0 6\n0 9 2 7 0\n2\n2 2 4 5\n1 1 5 5", "25\n56"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
