// A56 - String Hash
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_bd
// 2022-11-01T11:02:38.509Z

export function main(input: string) {
  const rows = input.split(/\n/);
  const S = rows[1];
  const queries = rows.slice(2).map((r) => r.split(/\s/).map(Number));

  // JavaScriptの「==」は同じオブジェクトかを比較するためO(1)なのでハッシュにする必要なし
  return queries.map(([a, b, c, d]) => (S.slice(a - 1, b) == S.slice(c - 1, d) ? "Yes" : "No")).join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["7 3\nabcbabc\n1 3 5 7\n1 5 2 6\n1 2 6 7", "Yes\nNo\nNo"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
