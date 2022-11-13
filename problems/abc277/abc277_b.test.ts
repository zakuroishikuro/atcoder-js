// B - Playing Cards Validation
// https://atcoder.jp/contests/abc277/tasks/abc277_b
// 2022-11-12T12:01:55.879Z

export function main(input: string): number | string {
  const [A, ...S] = input.split(/\s/);
  return new Set(S).size == S.length && S.every((s) => s.match(/[HDCS][A2-9TJQK]/)) ? "Yes" : "No";
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["4\nH3\nDA\nD3\nSK", "Yes"],
    ["5\nH3\nDA\nCK\nH3\nS7", "No"],
    ["4\n3H\nAD\n3D\nKS", "No"],
    ["5\n00\nAA\nXX\nYY\nZZ", "No"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
    else console.log("suc");
  });
}
