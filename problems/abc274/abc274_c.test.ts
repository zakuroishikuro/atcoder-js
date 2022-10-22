// C - Ameba
// https://atcoder.jp/contests/abc274/tasks/abc274_c
// 2022-10-22T12:11:35.007Z

// https://atcoder.jp/contests/abc274/editorial/5019
export function main(input: string) {
  const A = input.split(/\s/).map(Number).slice(1);

  const ans = Array(2 * A.length + 1).fill(0);
  A.forEach((a, i) => {
    ans[2 * i + 1] = ans[a - 1] + 1;
    ans[2 * i + 2] = ans[a - 1] + 1;
  });

  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2\n1 2", "0\n1\n1\n2\n2"],
    ["4\n1 3 5 2", "0\n1\n1\n2\n2\n3\n3\n2\n2"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
