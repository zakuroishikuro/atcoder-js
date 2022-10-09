// /*subject*/
// /*url*/
// /*timestamp*/

if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ＼( 'ω')／ウオオオオアアーーーッッ！！！
export function solve(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  //const [[_N, _K], ...data] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return N;
}

// ＼( 'ω')／テストッッ！！！
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    /*examples*/
  ])("example %#: %j -> %j", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
