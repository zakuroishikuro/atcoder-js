// D - Takahashi's Solitaire
// https://atcoder.jp/contests/abc277/tasks/abc277_d
// 2022-11-12T12:41:56.021Z

export function main(input: string): number | string {
  const [N, M, ...A] = input.split(/\s/).map(Number);

  const totalScore = A.reduce((a, b) => a + b, 0);
  const dict: { [k: string]: number } = {};
  for (const a of A) {
    dict[a] = (dict[a] || 0) + a;
  }

  const scores = Object.keys(dict).map((key) => {
    let x = Number(key);
    let score = 0;
    const visited = new Set<number>();
    while (true) {
      if (visited.has(x)) break;
      visited.add(x);

      const value = dict[x];
      if (dict[x] == undefined) break;
      score += value;
      x = (x + 1) % M;
    }
    return totalScore - score;
  });

  return scores.reduce((s, a) => Math.min(s, a), Number.MAX_SAFE_INTEGER);
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    ["9 7\n3 0 2 5 5 3 0 6 3", "11"],
    ["1 10\n4", "0"],
    ["20 20\n18 16 15 9 8 8 17 1 3 17 11 9 12 11 7 3 2 14 3 12", "99"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
    else console.log("suc");
  });
}
