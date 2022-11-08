// A - Water Pressure
// https://atcoder.jp/contests/abc231/tasks/abc231_a
// 2022-11-08T09:54:41.043Z

export function main(input: string): number | string {
  return +input / 100;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["1000", "10"],
    ["50", "0.5"],
    ["3141", "31.41"],
  ].forEach(([input, expected], i) => {
    const actual = main(input).toString();
    console.log({ i, input, actual, expected });
    console.assert(actual == expected);
  });
}
