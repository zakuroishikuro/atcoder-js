// B - Bingo
// https://atcoder.jp/contests/abc157/tasks/abc157_b
// 2022-10-09T16:07:05.943Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const rows = input.split(/\n/);
  const A = rows.slice(0, 3).map((r) => r.split(/\s/).map(Number));
  const [N, ...B] = rows.slice(3).map(Number);

  const card = [];
  for (let i = 0; i < 3; i++) {
    card[i] = [];
    for (let j = 0; j < 3; j++) {
      card[i][j] = B.indexOf(A[i][j]) != -1;
    }
  }

  let r = 0, l = 0;
  for (let i = 0; i < 3; i++) {
    let v = 0, h = 0;
    for (let j = 0; j < 3; j++) {
      if (card[i][j]) v++; // ヨコ
      if (card[j][i]) h++; // タテ
    }
    if (card[i][i]) r++; //左上から右下
    if (card[i][3 - i]) l++; //右上から左下

    if (v == 3 || h == 3 || r == 3 || l == 3) return "Yes";
  }

  return "No";
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;

  test.each([
    ["84 97 66\n79 89 11\n61 59 7\n7\n89\n7\n87\n79\n24\n84\n30", "Yes"],
    ["41 7 46\n26 89 2\n78 92 8\n5\n6\n45\n16\n57\n17", "No"],
    ["60 88 34\n92 41 43\n65 73 48\n10\n60\n43\n88\n11\n48\n73\n65\n41\n92\n34", "Yes"],
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
