// C - Next Prime
// https://atcoder.jp/contests/abc149/tasks/abc149_c
// 2022-10-11T12:48:50.584Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
import { lower_bound, Vector } from "tstl";

export function sieve(max) {
  const not = Array(max + 1), primes = []; // notを{}や[]にしても動作変わらないけどベンチしたらこれが一番早かった
  for (let i = 2; i <= max; i++) {
    if (not[i]) continue;
    primes.push(i);
    let j = i * i;
    while (j <= max) not[j] = true, j += i;
  }
  return primes;
}

export function solve(input: string) {
  const X = +input;
  const p = new Vector(sieve(10e5));
  return lower_bound(p.begin(), p.end(), X).value;
}

// deno-fmt-ignore
if (require.main == module) console.log(solve(require("fs").readFileSync(0, "utf8").trim()).toString());

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    ["20", "23"], ["2", "2"], ["99992", "100003"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
