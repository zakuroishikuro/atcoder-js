// C - Step
// https://atcoder.jp/contests/abc176/tasks/abc176_c
// 2022-11-13T09:09:08.636Z

//declare global {interface Object { log<T>(this: T, msg?): T }} // prettier-ignore

export function main(input: string): number | string {
  const [N, ...A] = input.split(/\s/).map(Number);
  let max = 0;
  return A.reduce((sum, n) => {
    max = Math.max(max, n);
    return sum + max - n;
  }, 0);
}

// === ここから読む必要なし ===
const DEBUG = process.env.NODE_ENV === "test";
//Object.assign(Object.prototype,{log<T>(this:T,msg="log"){if(DEBUG)console.log(`[${msg}] ${this}`);return this}}) // prettier-ignore
if (!DEBUG) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (DEBUG) {
  [
    ["5\n2 1 5 4 3", "4"],
    ["5\n3 3 3 3 3", "0"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
