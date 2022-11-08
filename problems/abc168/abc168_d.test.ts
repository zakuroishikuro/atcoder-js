// D - .. (Double Dots)
// https://atcoder.jp/contests/abc168/tasks/abc168_d
// 2022-11-08T10:16:28.134Z

// tag: 幅優先探索, bfs

import { Queue } from "tstl";

export function main(input: string): number | string {
  const [[N, M], ...edges] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph: number[][] = [...Array(N + 1)].map(() => []);
  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const result = Array(N + 1).fill(-1);
  const q = new Queue<number>();
  q.push(1);
  result[1] = 0;

  while (!q.empty()) {
    const pos = q.front();
    q.pop();
    graph["current"] = pos;
    for (const adj of graph[pos]) {
      graph["next"] = adj;
      if (result[adj] != -1) continue;
      result[adj] = pos;
      q.push(adj);
    }
  }

  const res = result.slice(2);
  const ans = res.includes(-1) ? "No" : "Yes";

  return `${ans}\n${res.join("\n")}`;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["4 4\n1 2\n2 3\n3 4\n4 2", "Yes\n1\n2\n2"],
    //["6 9\n3 4\n6 1\n2 4\n5 3\n4 6\n1 5\n6 2\n4 5\n5 6", "Yes\n6\n5\n5\n1\n1"],
  ].forEach(([input, expected], i) => {
    const actual = main(input).toString();
    if (actual != expected) console.error(`example ${i}: failed !\n`, actual);
  });
}
