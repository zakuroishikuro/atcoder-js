// B - Ancestor
// https://atcoder.jp/contests/abc263/tasks/abc263_b
// 2022-11-05T03:36:41.288Z

export function main(input: string): number | string {
  const [N, ...P] = input.split(/\s/).map(Number);

  let cnt = 0;
  const dfs = (p: number) => {
    if (p == 1) return;
    cnt++;
    const anc = P[p - 2];
    dfs(anc);
  };
  dfs(N);

  return cnt;
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n1 2", "2"],
    ["10\n1 2 3 4 5 6 7 8 9", "9"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
