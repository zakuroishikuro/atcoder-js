// B - Adjacency List
// https://atcoder.jp/contests/abc276/tasks/abc276_b
// 2022-11-05T12:01:43.650Z

export function main(input: string): number | string {
  const [[N, M], ...rows] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph = [...Array(N + 1)].map(() => []);
  for (const [a, b] of rows) {
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph
    .slice(1)
    .map((row) => `${row.length} ${row.sort((a, b) => a - b).join(" ")}`.trim())
    .join("\n");
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["6 6\n3 6\n1 3\n5 6\n2 5\n1 2\n1 6", "3 2 3 6\n2 1 5\n2 1 6\n0\n2 2 6\n3 1 3 5"],
    ["5 10\n1 2\n1 3\n1 4\n1 5\n2 3\n2 4\n2 5\n3 4\n3 5\n4 5", "4 2 3 4 5\n4 1 3 4 5\n4 1 2 4 5\n4 1 2 3 5\n4 1 2 3 4"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
