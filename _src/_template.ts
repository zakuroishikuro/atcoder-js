// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string): number | string {
  const [A, B] = input.split(/\s/).map(Number);
  return input;
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
} else {
  [
    /*examples*/
  ].forEach(([input, expected], i) => {
    const actual = main(input).toString();
    console.assert(actual == expected, { i, input, expected, actual });
  });
}
