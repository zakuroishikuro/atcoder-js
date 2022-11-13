// A - Buying Sweets
// https://atcoder.jp/contests/abc087/tasks/abc087_a
// 2022-11-13T08:44:49.963Z

interface Object { log<T>(this: T): T } // prettier-ignore

export function main(input: string): number | string {
  const [X, A, B] = input.split(/\s/).map(Number);
  return (X - A) % B;
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
    ["1234\n150\n100", "84"],
    ["1000\n108\n108", "28"],
    ["579\n123\n456", "0"],
    ["7477\n549\n593", "405"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
