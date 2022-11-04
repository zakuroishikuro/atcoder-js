// A64 - Shortest Path 2
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_bl
// 2022-11-03T13:09:29.192Z

import { Queue } from "tstl";

export function main(input: string) {
  const [[N, M], ...edges] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  type Vetrex = { pos: number; wait: number };
  const graph: Vetrex[][] = [...Array(N + 1)].map(() => []);
  for (const [a, b, wait] of edges) {
    graph[a].push({ pos: b, wait });
    graph[b].push({ pos: a, wait });
  }

  const q = new Queue<number>();
  q.push(1);

  const INF = 2 ** 31 - 1;
  const cur = new Int32Array(N + 1).fill(INF);
  cur[1] = 0;

  while (!q.empty()) {
    const pos = q.front();
    q.pop();
    for (const vertex of graph[pos]) {
      const next = cur[pos] + vertex.wait;
      if (next < cur[vertex.pos]) {
        cur[vertex.pos] = next;
        q.push(vertex.pos);
      }
    }
  }

  return cur
    .slice(1)
    .map((c) => (c == INF ? -1 : c))
    .join("\n");
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
    ["6 7\n1 2 15\n1 4 20\n2 3 65\n2 5 4\n3 6 50\n4 5 30\n5 6 8", "0\n15\n77\n20\n19\n27"],
    ["15 30\n10 11 23\n11 13 24\n5 8 22\n10 15 18\n12 14 15\n2 10 11\n4 7 15\n5 7 15\n7 9 8\n8 12 1\n5 14 1\n10 14 17\n10 12 11\n8 10 6\n7 14 28\n6 9 1\n1 10 19\n4 5 4\n9 10 21\n7 10 21\n4 10 29\n5 10 8\n4 14 8\n11 12 24\n10 13 13\n3 10 1\n5 12 24\n2 15 23\n6 10 18\n6 15 25", "0\n30\n20\n31\n27\n37\n40\n25\n38\n19\n42\n26\n32\n28\n37"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
