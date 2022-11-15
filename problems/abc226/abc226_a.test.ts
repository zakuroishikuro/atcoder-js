// A - Round decimals
// https://atcoder.jp/contests/abc226/tasks/abc226_a
// 2022-11-15T14:51:54.401Z

declare global {interface Object { log<T>(this: T, msg?): T }} // prettier-ignore

export function main(input: string): number | string {
  return Math.round(+input);
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
    ["3.456","3"],["99.500","100"],["0.000","0"]
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
