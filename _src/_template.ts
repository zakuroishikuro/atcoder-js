// /*subject*/
// /*url*/
// /*timestamp*/
const LOCAL = !__filename.includes("imojudge");
Object.assign(Object.prototype,{log<T>(this:T,msg="log"){if(LOCAL)console.log(`[${msg}] ${this}`);return this}}) // prettier-ignore
interface Object{log<T>(this:T):T} // prettier-ignore

function main(input: string): number | string {
  const [A, B] = input.split(/\s/).map(Number);
  return input;
}

if (!LOCAL) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (LOCAL) {
  [
    /*examples*/
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    console.log(`example #${i}: `, a === e ? "success !" : "failed !");
    if (a !== e) console.log(a);
  });
}
