// /*subject*/
// /*url*/
// /*timestamp*/

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  //const [[_N, _K], ...data] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return A;
}

// deno-fmt-ignore
if (require.main == module) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    /*examples*/
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
