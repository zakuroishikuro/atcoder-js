Object.assign(Object.prototype, {
  log<T>(this: T) {
    console.log(this.toString());
    return this;
  },
});

interface Object {
  log<T>(this: T): T;
}

const yea = "abc".log().slice(1).log();
console.log(yea);

const p = process;

console.log(process.execPath);
console.log(process.execArgv);
console.log(process.argv);
console.log(process.argv0);
console.log(process.arch);
