// B - Chocolate
// https://atcoder.jp/contests/abc092/tasks/abc092_b
// 2022-10-16T16:17:39.580Z

export function main(input: string) {
  const [N, D, X, ...A] = input.split(/\s/).map(Number);

  let choco = 0;
  for (let d = 0; d < D; d++) {
    for (const a of A) {
      if (d % a == 0) choco++;
    }
  }

  return choco + X;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n7 1\n2\n5\n10", "8"],
    ["2\n8 20\n1\n10", "29"],
    ["5\n30 44\n26\n18\n81\n18\n6", "56"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
