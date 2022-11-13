// C - Swappable
// https://atcoder.jp/contests/abc206/tasks/abc206_c
// 2022-10-24T10:50:55.680Z

// AtCoder 最速で緑になる 基礎・典型50問詳細解説
// 17 連想配列

export function main(input: string) {
  const [N, ...A] = input.split(/\s/).map(Number);

  const dict: { [k: string]: number } = {};
  A.forEach((n, i) => {
    if (n in dict) {
      dict[n]++;
    } else {
      dict[n] = 1;
    }
  });

  let ans = Math.floor((N * (N - 1)) / 2);
  for (const cnt of Object.values(dict)) {
    ans -= Math.floor((cnt * (cnt - 1)) / 2);
  }

  return ans;
}

// === ここから読む必要なし ===
const DEBUG = process.env.NODE_ENV === "test";
Object.assign(Object.prototype,{log<T>(this:T,msg="log"){if(DEBUG)console.log(`[${msg}] ${this}`);return this}}) // prettier-ignore
if (!DEBUG) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (DEBUG) {
  [
    ["3\n1 7 1", "2"],
    ["10\n1 10 100 1000 10000 100000 1000000 10000000 100000000 1000000000", "45"],
    ["20\n7 8 1 1 4 9 9 6 8 2 4 1 1 9 5 5 5 3 6 4", "173"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
