// D - Line++
// https://atcoder.jp/contests/abc160/tasks/abc160_d
// 2022-11-08T15:05:12.200Z

export function main(input: string): number | string {
  const [N, X, Y] = input.split(/\s/).map(Number);

  const graph = [...Array(N + 1)].map(() => []);
  for (let i = 2; i < graph.length; i++) {
    graph[i].push(i - 1);
    graph[i - 1].push(i);
  }
  graph[X].push(Y);
  graph[Y].push(X);



  return input;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["5 2 4", "5\n4\n1\n0"],
    ["3 1 3", "3\n0"],
    ["7 3 7", "7\n8\n4\n2\n0\n0"],
    ["10 4 8", "10\n12\n10\n8\n4\n1\n0\n0\n0"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
  });
}
