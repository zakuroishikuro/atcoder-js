// B - 1%
// https://atcoder.jp/contests/abc165/tasks/abc165_b
// 2022-11-13T10:16:47.671Z

declare global {interface Object { log<T>(this: T, msg?): T }} // prettier-ignore

export function main(input: string): number | string {
  const X = +input;
  let value = 100n;
  let years = 0;
  while (value < X) {
    years++;
    value += value / 100n;
  }
  return years;
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
    ["103", "3"],
    ["1000000000000000000", "3760"],
    ["1333333333", "1706"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
