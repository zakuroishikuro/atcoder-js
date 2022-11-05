// A - Rightmost
// https://atcoder.jp/contests/abc276/tasks/abc276_a
// 2022-11-05T12:00:13.244Z

export function main(input: string): number | string {
  const idx = input.lastIndexOf("a");
  return idx == -1 ? -1 : idx + 1;
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["abcdaxayz","7"],["bcbbbz","-1"],["aaaaa","5"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
