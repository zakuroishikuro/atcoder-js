// A - Duplex Printing
// https://atcoder.jp/contests/abc157/tasks/abc157_a
// 2022-11-13T08:56:16.310Z

declare global {interface Object { log<T>(this: T): T }} // prettier-ignore

export function main(input: string): number | string {
  const N = +input;
  return Math.ceil(N / 2);
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
    ["5", "3"],
    ["2", "1"],
    ["100", "50"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
