// B - Qualification simulator
// https://atcoder.jp/contests/code-festival-2016-qualb/tasks/codefestival_2016_qualB_b
// 2022-10-09T14:47:32.158Z

//
// ＼( 'ω')／ウオオオオアアーーーッッ！！！
//
export function solve(input: string) {
  const data = input.split(/\s/);
  const S = data.pop();
  const [N, A, B] = data.map(Number);

  let cnt = 0;
  let cntF = 0;
  const res = [...S].map((s, i) => {
    let flag = false;
    if (s == "a") {
      flag = cnt < A + B;
    } else if (s == "b") {
      flag = cnt < A + B && cntF < B;
      cntF += Number(flag);
    }
    cnt += Number(flag);
    return flag ? "Yes" : "No";
  });

  return res.join("\n");
}

// deno-fmt-ignore
if (!process.env.VITEST) console.log(solve(require("fs").readFileSync(0, "utf8").trim().toString()));

// ------------------------
// ＼( 'ω')／テストッッ！！！
// ------------------------
if (process.env.VITEST) {
  const { test, expect } = import.meta.vitest;
  test.each([
    //["10 2 3\nabccabaabb", "Yes\nYes\nNo\nNo\nYes\nYes\nYes\nNo\nNo\nNo"],
    ["12 5 2\ncabbabaacaba", "No\nYes\nYes\nYes\nYes\nNo\nYes\nYes\nNo\nYes\nNo\nNo"],
    //["5 2 2\nccccc", "No\nNo\nNo\nNo\nNo"],
  ])("example %#:\n---input---\n%s\n-----------", (input, expected) => {
    expect(solve(input).toString()).toBe(expected);
  });
}
