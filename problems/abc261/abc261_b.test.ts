// B - Tournament Result
// https://atcoder.jp/contests/abc261/tasks/abc261_b
// 2022-11-05T03:15:41.671Z

export function main(input: string): number | string {
  const parsed = input.split(/\s/).map((s) => (isNaN(+s) ? s : Number(s)));
  const [N, ...results] = parsed as [number, ...string[]];

  const dict = { D: "D", W: "L", L: "W" };
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      const a = results[i][j];
      const b = results[j][i];
      if (dict[a] != b) return "incorrect";
    }
  }
  return "correct";
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4\n-WWW\nL-DD\nLD-W\nLDW-", "incorrect"],
    ["2\n-D\nD-", "correct"],
  ])("example %#", (input, expected) => {
    expect(main(input)).toBe(expected);
  });
}
