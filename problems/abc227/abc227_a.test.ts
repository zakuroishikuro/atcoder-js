// A - Last Card
// https://atcoder.jp/contests/abc227/tasks/abc227_a
// 2022-11-13T05:50:59.403Z

export function main(input: string): number | string {
  const [N, K, A] = input.split(/\s/).map(Number);
  return ((K + A - 2) % N) + 1;
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
    ["3 3 2", "1"],
    ["1 100 1", "1"],
    ["3 14 2", "3"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
