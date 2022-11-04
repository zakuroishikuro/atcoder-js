// /*subject*/
// /*url*/
// /*timestamp*/

const parseVector = (s: string) => s.split(/\s/).map((s) => (isNaN(+s) ? s : Number(s)));
const parseMatrix = (s: string) => s.split(/\n/).map(parseVector);

export function main(input: string) {
  const [A, B] = parseVector(input) as number[];
  return A;
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()) + "");
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    /*examples*/
  ])("example %#", (input, expected) => {
    expect(main(input) + "").toBe(expected);
  });
}
