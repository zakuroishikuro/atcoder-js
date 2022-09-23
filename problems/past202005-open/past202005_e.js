// E - スプリンクラー
// https://atcoder.jp/contests/past202005-open/tasks/past202005_e
// 2022-09-23T14:29:39.403Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const rows = input.split(/\n/).map((row) => row.split(/\s/).map(Number));
  const [n] = rows.shift();

  const con = rows.slice(0, n - 1);
  const colors = rows[n - 1];
  const queries = rows.slice(n);

  for (const query of queries) {
    const [q, x, y] = query
    const 
    if (q == 1) {
      colors[x - 1]
    } else {

    }
  }

  return JSON.stringify({ con, colors, queries }, null, 2);
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["3 2 3\n1 2\n2 3\n5 10 15\n1 2\n2 1 20\n1 1", "10\n10\n20"],
    [
      "30 10 20\n11 13\n30 14\n6 4\n7 23\n30 8\n17 4\n6 23\n24 18\n26 25\n9 3\n18 4 36 46 28 16 34 19 37 23 25 7 24 16 17 41 24 38 6 29 10 33 38 25 47 8 13 8 42 40\n2 1 9\n1 8\n1 9\n2 20 24\n2 26 18\n1 20\n1 26\n2 24 31\n1 4\n2 21 27\n1 25\n1 29\n2 10 14\n2 2 19\n2 15 36\n2 28 6\n2 13 5\n1 12\n1 11\n2 14 43",
      "18\n19\n37\n29\n8\n24\n18\n25\n46\n10\n18\n42\n23\n4\n17\n8\n24\n7\n25\n16",
    ],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
