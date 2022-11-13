// A - Apple Pie
// https://atcoder.jp/contests/abc128/tasks/abc128_a
// 2022-11-13T08:51:08.855Z

declare global {interface Object { log<T>(this: T): T }} // prettier-ignore

export function main(input: string): number | string {
  const [A, P] = input.split(/\s/).map(Number);
  return (A * 3 + P) >> 1;
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
    ["1 3", "3"],
    ["0 1", "0"],
    ["32 21", "58"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
