// A - ∴ (Therefore)
// https://atcoder.jp/contests/abc168/tasks/abc168_a
// 2022-11-08T09:59:40.353Z

export function main(input: string): number | string {
  const n = +input.slice(-1)[0];
  if (n == 3) return "bon";
  if ([0, 1, 6, 8].includes(n)) return "pon";
  return "hon";
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["16", "pon"],
    ["2", "hon"],
    ["183", "bon"],
  ].forEach(([input, expected], i) => {
    const actual = main(input).toString();
    console.log({ i, input, expected, actual });
    console.assert(actual == expected, { i, input, expected, actual });
  });
}
