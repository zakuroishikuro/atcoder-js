// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  //const [[N, M], ...data] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return A;
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    /*examples*/
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
