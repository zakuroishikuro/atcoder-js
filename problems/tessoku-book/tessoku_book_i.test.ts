// A09 - Winter in ALGO Kingdom
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_i
// 2022-10-02T14:16:31.312Z

export function main(input: string) {
  const [[h, w, _n], ...rows] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  // 上下左右に1ずつ余裕を持っておく
  const sum = [...Array(h + 2)].map(() => Array(w + 2).fill(0));

  // 累積和の差分を計算
  rows.forEach(([a, b, c, d]) => {
    sum[a][b] += 1;
    sum[c + 1][d + 1] += 1;
    sum[a][d + 1] -= 1;
    sum[c + 1][b] -= 1;
  });

  // 累積和
  // まず行ごとに足す。0行目・0列目は避ける。
  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      sum[i][j] += sum[i][j - 1];
    }
  }

  // つぎに列ごとに足す。0行目・0列目は避ける。
  for (let j = 1; j <= w; j++) {
    for (let i = 1; i <= h; i++) {
      sum[i][j] += sum[i - 1][j];
    }
  }

  // 余裕を持っておいた上下左右を1つずつ削除
  return sum
    .slice(1, -1)
    .map((r) => r.slice(1, -1).join(" "))
    .join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["5 5 2\n1 1 3 3\n2 2 4 4", "1 1 1 0 0\n1 2 2 1 0\n1 2 2 1 0\n0 1 1 1 0\n0 0 0 0 0"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
