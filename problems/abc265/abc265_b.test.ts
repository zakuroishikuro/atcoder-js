// B - Explore
// https://atcoder.jp/contests/abc265/tasks/abc265_b
// 2022-10-13T15:17:00.829Z

export function main(input: string) {
  const [[N, M, T], A, ...BONUS] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  for (const [i, heal] of BONUS) {
    A[i - 1] -= heal;
  }

  let hp = T;
  for (const damage of A) {
    hp -= damage;
    if (hp <= 0) return "No"
  }
  return "Yes";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 1 10\n5 7 5\n2 10", "Yes"],
    ["4 1 10\n10 7 5\n2 10", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
