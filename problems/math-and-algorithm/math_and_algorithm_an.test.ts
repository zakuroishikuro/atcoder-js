// 044 - Shortest Path 1
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_an
// 2022-11-03T11:55:19.118Z

// メモ: Array#shiftじゃTLEなる
import { Queue } from "tstl";

export function main(input: string) {
  const [[N, M], ...edges] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph = [...Array(N + 1)].map(() => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const q = new Queue<number>();
  q.push(1);
  const dist = new Int32Array(N + 1).fill(-1);
  dist[1] = 0;
  while (!q.empty()) {
    const pos = q.front();
    q.pop();
    for (const adj of graph[pos]) {
      if (dist[adj] == -1) {
        dist[adj] = dist[pos] + 1;
        q.push(adj);
      }
    }
  }

  return dist.slice(1).join("\n");
}

if (require.main == module) {
  if (process.argv.includes("f")) {
    require("child_process").fork(__filename, ["f"], { execArgv: ["--stack-size=99900"] });
  } else {
    console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
  }
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 2\n1 3\n2 3", "0\n2\n1"],
    //["6 6\n1 4\n2 3\n3 4\n5 6\n1 2\n2 4", "0\n1\n2\n1\n-1\n-1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
