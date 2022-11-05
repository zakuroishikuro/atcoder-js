// /*subject*/
// /*url*/
// /*timestamp*/

const toNum = Number; // 制約 <= 10e15 ? Number : BigInt
type num = ReturnType<typeof toNum>;
const parseVector = (s: string) => s.split(/\s/).map((s: string) => (isNaN(+s) ? s : toNum(s)));
const parseMatrix = (s: string) => s.split(/\s/).map(parseVector);

export function main(input: string) {
  const [A, B] = parseVector(input) as num[];
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
