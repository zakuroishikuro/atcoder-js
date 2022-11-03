// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  //const [[_N, _K], ...data] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return A;
}

if (require.main == module) {
  if (!process.argv.includes("f")) {
    require("child_process").fork(__filename, ["f"], { execArgv: ["--stack-size=99900"] });
  } else {
    console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
  }
}

if (process.env.NODE_ENV == "test") {
  test.each([
    /*examples*/
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
