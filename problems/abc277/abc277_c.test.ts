// C - Ladder Takahashi
// https://atcoder.jp/contests/abc277/tasks/abc277_c
// 2022-11-12T12:05:07.419Z

import { Queue } from "tstl";

export function main(input: string): number | string {
  const [[N], ...rows] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const INF = 10 ** 9;

  const graph = {};
  for (const [a, b] of rows) {
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  const q = new Queue<number>();
  q.push(1);

  const visited = new Set();
  visited.add(1);

  let max = 1;
  while (!q.empty()) {
    const pos = q.front();
    graph["current"] = pos;
    q.pop();

    if (!graph[pos]) break;
    for (const adj of graph[pos]) {
      graph["next"] = adj;
      if (visited.has(adj)) continue;
      visited.add(adj);
      q.push(adj);
      max = Math.max(max, adj);
    }
  }

  return max;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["4\n1 4\n4 3\n4 10\n8 3", "10"],
    ["6\n1 3\n1 5\n1 12\n3 5\n3 12\n5 12", "12"],
    ["3\n500000000 600000000\n600000000 700000000\n700000000 800000000", "1"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
    else console.log("suc")
  });
}
