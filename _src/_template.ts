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
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  const seed = (s = 0xC0FFEE) => (h = 1000, l = 0) => (s ^= s << 13, s ^= s >> 17, s ^= s << 5, l + (Math.abs(s) % (h + 1 - l)));
  const randNums = (len = 10000, h?: number, l?: number, rand = seed()) => [...Array(len)].map(() => rand(h, l));

  test.each([
    /*examples*/
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
