// A - Rock-paper-scissors
// https://atcoder.jp/contests/abc204/tasks/abc204_a
// 2022-11-07T15:58:01.406Z

export function main(input: string): number | string {
  const [x, y] = input.split(/\s/).map(Number);
  if (x == y) return x;
  const s = new Set([0, 1, 2]);
  s.delete(x);
  s.delete(y);
  return s.values().next().value;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["0 1", "2"],
    ["0 0", "0"],
  ].forEach(([input, expected], example) => {
    const actual = main(input).toString();
    console.log({ example, input, expected, actual });
    console.assert(actual == expected);
  });
}
