// B - Collatz Problem
// https://atcoder.jp/contests/abc116/tasks/abc116_b
// 2022-10-11T11:09:01.775Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
const sim = (n, bucket = {}, i = 0) => {
  if (n in bucket) return i + 1;
  bucket[n] = true;
  n = (n & 1) ? 3 * n + 1 : n / 2;
  return sim(n, bucket, i + 1);
}

export function solve(input: string) {
  const s = +input;
  return sim(s);
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["8", "5"], ["7", "18"], ["54", "114"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
