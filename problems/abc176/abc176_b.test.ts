// B - Multiple of 9
// https://atcoder.jp/contests/abc176/tasks/abc176_b
// 2022-11-13T09:06:10.302Z

declare global {interface Object { log<T>(this: T): T }} // prettier-ignore

export function main(input: string): number | string {
  return [...input].reduce((ans, s) => ans + +s, 0) % 9 == 0 ? "Yes" : "No";
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
    ["123456789", "Yes"],
    ["0", "Yes"],
    ["31415926535897932384626433832795028841971693993751058209749445923078164062862089986280", "No"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
