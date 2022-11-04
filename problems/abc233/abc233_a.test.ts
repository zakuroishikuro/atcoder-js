// A - 10yen Stamp
// https://atcoder.jp/contests/abc233/tasks/abc233_a
// 2022-11-04T14:29:27.077Z

export function main(input: string) {
  const [X, Y] = input.split(/\s/).map(Number);
  return Math.max(Math.ceil((Y - X) / 10), 0);
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["80 94", "2"],
    ["1000 63", "0"],
    ["270 750", "48"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
