// 043 - Depth First Search
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_am
// 2022-11-02T22:19:15.474Z

function main(input: string) {
  const [[N, M], ...edges] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph = [...Array(M + 2)].map(() => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  const dfs = (pos: number) => {
    visited.add(pos);
    for (const next of graph[pos]) {
      if (!visited.has(next)) {
        dfs(next);
      }
    }
  };
  dfs(1);

  return `The graph is ${visited.size != N ? "not " : ""}connected.`;
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
