// A - Candy Distribution Again
// https://atcoder.jp/contests/agc027/tasks/agc027_a
// 2022-10-12T12:40:11.217Z

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
    ["3 70\n20 30 10","2"],["3 10\n20 30 10","1"],["4 1111\n1 10 100 1000","4"],["2 10\n20 20","0"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
