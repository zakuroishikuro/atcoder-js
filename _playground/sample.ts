const DEBUG = process.env.NODE_ENV === "test";
Object.assign(Object.prototype,{log<T>(this:T,msg="log"){if(DEBUG)console.log(`[${msg}] ${this}`);return this}}) // prettier-ignore
declare global { interface Object{log<T>(this:T):T} } // prettier-ignore

export function main() {
  "abcd".log().slice(1).log().slice(1).log();
}

main();
