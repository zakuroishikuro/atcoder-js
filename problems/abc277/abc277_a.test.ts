// A - ^{-1}
// https://atcoder.jp/contests/abc277/tasks/abc277_a
// 2022-11-12T12:00:08.244Z

export function main(input: string): number | string {
  const [N, X, ...P] = input.split(/\s/).map(Number);

  return P.indexOf(X) + 1;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["4 3\n2 3 1 4", "2"],
    ["5 2\n3 5 1 4 2", "5"],
    ["6 6\n1 2 3 4 5 6", "6"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
    else console.log("success");
  });
}
