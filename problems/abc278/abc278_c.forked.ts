// C - FF
// https://atcoder.jp/contests/abc278/tasks/abc278_c
// 2022-11-19T12:22:28.387Z

export function main(input: string): number | string {
  const [[N, Q], ...queries] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph: { [key: string]: { [key: string]: boolean } } = {};

  const result = [];
  const op = { follow: 1, remove: 2, check: 3 };
  for (const [q, a, b] of queries) {
    if (graph[a] == undefined) graph[a] = {};
    if (graph[b] == undefined) graph[b] = {};
    switch (q) {
      case op.follow:
        graph[a][b] = true;
        break;
      case op.remove:
        graph[a][b] = false;
        break;
      case op.check:
        result.push(graph[a][b] && graph[b][a] ? "Yes" : "No");
        break;
    }
  }

  return result.join("\n");
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["3 9\n1 1 2\n3 1 2\n1 2 1\n3 1 2\n1 2 3\n1 3 2\n3 1 3\n2 1 2\n3 1 2", "No\nYes\nNo\nNo"],
    ["2 8\n1 1 2\n1 2 1\n3 1 2\n1 1 2\n1 1 2\n1 1 2\n2 1 2\n3 1 2", "Yes\nNo"],
    ["10 30\n3 1 6\n3 5 4\n1 6 1\n3 1 7\n3 8 4\n1 1 6\n2 4 3\n1 6 5\n1 5 6\n1 1 8\n1 8 1\n2 3 10\n1 7 6\n3 5 6\n1 6 7\n3 6 7\n1 9 5\n3 8 6\n3 3 8\n2 6 9\n1 7 1\n3 10 8\n2 9 2\n1 10 9\n2 6 10\n2 6 8\n3 1 6\n3 1 8\n2 8 5\n1 9 10", "No\nNo\nNo\nNo\nYes\nYes\nNo\nNo\nNo\nYes\nYes"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
