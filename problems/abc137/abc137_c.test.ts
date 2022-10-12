// C - Green Bin
// https://atcoder.jp/contests/abc137/tasks/abc137_c
// 2022-09-23T11:03:41.722Z

export function main(input: string) {
  const words = input
    .split(/\s/)
    .slice(1)
    .map((w) => [...w].sort().join(""));

  const cnt: { [k: string]: number } = {};
  for (const word of words) {
    if (word in cnt) {
      cnt[word]++;
    } else {
      cnt[word] = 0;
    }
  }

  // ATCODER入門本P.179ではn - 1ってなってるけど・・・なぜ
  return Object.values(cnt)
    .map((n) => (n * (n + 1)) / 2)
    .reduce((a, b) => a + b);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\nacornistnt\npeanutbomb\nconstraint", "1"],
    ["2\noneplustwo\nninemodsix", "0"],
    ["5\nabaaaaaaaa\noneplustwo\naaaaaaaaba\ntwoplusone\naaaabaaaaa", "4"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
