// C - Fennec vs Monster
// https://atcoder.jp/contests/abc153/tasks/abc153_c
// 2022-10-10T13:01:08.546Z

export function main(input: string) {
  const [N, K, ...H] = input.split(/\s/).map(Number);
  H.sort((a, b) => b - a); //降順

  return H.slice(K).reduce((a, b) => a + b, 0);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 1\n4 1 5", "5"],
    ["8 9\n7 9 3 2 3 8 4 6", "0"],
    ["3 0\n1000000000 1000000000 1000000000", "3000000000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
