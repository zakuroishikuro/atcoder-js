// A - On and Off
// https://atcoder.jp/contests/abc228/tasks/abc228_a
// 2022-11-13T05:00:49.311Z

export function main(input: string): number | string {
  const [S, T, X] = input.split(/\s/).map(Number);
  if (S <= T) {
    return S <= X && X <= T ? "Yes" : "No";
  } else {
    return S <= X || X < T ? "Yes" : "No";
  }
}

// === ここから読む必要なし ===
const DEBUG = process.env.NODE_ENV === "test";
Object.assign(Object.prototype,{log<T>(this:T,msg="log"){if(DEBUG)console.log(`[${msg}] ${this}`);return this}}) // prettier-ignore
declare global { interface Object{log<T>(this:T):T} } // prettier-ignore
if (!DEBUG) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (DEBUG) {
  [
    ["7 20 12", "Yes"],
    ["20 7 12", "No"],
    ["23 0 23", "Yes"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.log("  ", a);
  });
}
