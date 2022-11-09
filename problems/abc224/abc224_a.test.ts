// A - Tires
// https://atcoder.jp/contests/abc224/tasks/abc224_a
// 2022-11-09T14:53:37.208Z

export function main(input: string): number | string {
  return input.replace(/.*(?=er|ist$)/, "");
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["atcoder", "er"],
    ["tourist", "ist"],
    ["er", "er"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
  });
}
