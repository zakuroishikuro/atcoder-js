// A - First Grid
// https://atcoder.jp/contests/abc229/tasks/abc229_a
// 2022-11-11T14:43:53.430Z

export function main(input: string): number | string {
  const [s1, s2] = input.split(/\n/).map((r) => r.split("").map((c) => c == "#"));

  return (!s1[0] && !s2[1]) || (!s1[1] && !s2[0]) ? "No" : "Yes";
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["##\n.#", "Yes"],
    [".#\n#.", "No"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
  });
}
