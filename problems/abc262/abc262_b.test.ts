// B - Triangle (Easier)
// https://atcoder.jp/contests/abc262/tasks/abc262_b
// 2022-11-05T03:46:15.626Z

export function main(input: string): number | string {
  const [[N, M], ...rows] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph = [...Array(N + 1)].map(() => []);
  for (const [a, b] of rows) {
    graph[a].push(b);
    graph[b].push(a);
  }

  console.log(graph);

  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    console.log(`start: ${i}`);
    const visited = new Set();
    const dfs = (pos: number) => {
      console.log(pos, visited);
      visited.add(pos);
      console.log(`nexts: `, graph[pos])
      if (visited.size <= 3) {
        for (const next of graph[pos]) {
          console.log("  next: ", next);
          if (next > i && !visited.has(next)) dfs(next);
          else if (next == i && visited.size == 3) {
            console.log("gotcha!");
            cnt++;
          }
        }
      }
    };
    dfs(i);
    console.log(`done: ${i}`);
  }

  return cnt;
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.skip.each([
    //["5 6\n1 5\n4 5\n2 3\n1 4\n3 5\n2 5", "2"],
    //["3 1\n1 2", "0"],
    ["7 10\n1 7\n5 7\n2 5\n3 6\n4 7\n1 5\n2 4\n1 3\n1 6\n2 7", "4"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
