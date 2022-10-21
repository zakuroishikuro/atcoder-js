// C - Cheese
// https://atcoder.jp/contests/abc229/tasks/abc229_c
// 2022-10-21T13:32:08.831Z

export function main(input: string) {
  // ありえる最大値は「W * Ai」だから「3*10^8 * 10^9」で10^18
  // Numberで安心して扱えるのは10^15までなのでBigIntにする
  const [[N, W], ...CHEEZE] = input.split(/\n/).map((r) => r.split(/\s/).map(BigInt));

  // tastyな順
  CHEEZE.sort(([t1], [t2]) => Number(t2 - t1));

  // 貪欲
  let weight = W;
  let taste = 0n;
  for (const [t, w] of CHEEZE) {
    const g = weight < w ? weight : w;
    taste += g * t;
    weight -= g;
    if (weight <= 0) break;
  }

  return taste;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 5\n3 1\n4 2\n2 3", "15"],
    ["4 100\n6 2\n1 5\n3 9\n8 7", "100"],
    [
      "10 3141\n314944731 649\n140276783 228\n578012421 809\n878510647 519\n925326537 943\n337666726 611\n879137070 306\n87808915 39\n756059990 244\n228622672 291",
      "2357689932073",
    ],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
