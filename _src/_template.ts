// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string): number | string {
  const [A, B] = input.split(/\s/).map(Number);
  return input;
}

if (__filename.endsWith(".js")) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    /*examples*/
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    if (a != e) console.error(`failed !`, { i, input, e, a });
  });
}
