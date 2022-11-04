// B - Takahashi's Secret
// https://atcoder.jp/contests/abc228/tasks/abc228_b
// 2022-11-02T13:35:04.518Z

export function main(input: string) {
  const [N, X, ...A] = input.split(/\s/).map(Number);

  const friends = new Set();
  const dfs = (pos: number) => {
    if (!friends.has(pos)) {
      friends.add(pos);
      dfs(A[pos - 1]);
    }
  };
  dfs(X);

  return friends.size;
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 2\n3 1 1 2", "3"],
    ["20 12\n7 11 10 1 7 20 14 2 17 3 2 5 19 20 8 14 18 2 10 10", "7"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
