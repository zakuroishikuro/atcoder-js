// B - Chocolate
// https://atcoder.jp/contests/abc092/tasks/abc092_b
// 2022-10-12T13:19:17.786Z

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
if (require.main != module) {
  test.each([
    ["3\n7 1\n2\n5\n10", "8"], ["2\n8 20\n1\n10", "29"], ["5\n30 44\n26\n18\n81\n18\n6", "56"]
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
