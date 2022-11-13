// A - RGB Cards
// https://atcoder.jp/contests/abc064/tasks/abc064_a
// 2022-11-13T08:47:00.750Z

declare global {interface Object { log<T>(this: T): T }} // prettier-ignore

export function main(input: string): number | string {
  return +input.replace(/\D/g, "") % 4 == 0 ? "YES" : "NO";
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
    ["4 3 2", "YES"],
    ["2 3 4", "NO"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
