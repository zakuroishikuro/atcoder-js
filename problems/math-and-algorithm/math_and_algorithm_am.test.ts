// 043 - Depth First Search
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_am
// 2022-11-02T22:19:15.474Z

function main(input: string) {
  const [[N, M], ...edges] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph = [...Array(N + 1)].map(() => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Uint8Array(N + 1);
  visited[0] = 1;

  const dfs = (pos: number) => {
    visited[pos] = 1;
    for (const adj of graph[pos]) {
      if (!visited[adj]) {
        dfs(adj);
      }
    }
  };
  dfs(1);

  return `The graph is ${visited.includes(0) ? "not " : ""}connected.`;
}

if (require.main == module) {
  if (!process.argv.includes("f")) {
    require("child_process").fork(__filename, ["f"], { execArgv: ["--stack-size=99900"] });
  } else {
    console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
  }
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 2\n1 3\n2 3", "The graph is connected."],
    //["6 6\n1 4\n2 3\n3 4\n5 6\n1 2\n2 4", "The graph is not connected."],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
