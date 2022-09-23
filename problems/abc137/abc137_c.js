// C - Green Bin
// https://atcoder.jp/contests/abc137/tasks/abc137_c
// 2022-09-23T11:03:41.722Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const words = input.split(/\s/).slice(1).map((w) => [...w].sort().join(""));

  const cnt = {};
  for (const word of words) {
    if (word in cnt) {
      cnt[word]++;
    } else {
      cnt[word] = 0;
    }
  }

  // ATCODER入門本P.179ではn - 1ってなってるけど・・・なぜ
  return Object.values(cnt).map((n) => n * (n + 1) / 2).reduce((a, b) => a + b);
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["3\nacornistnt\npeanutbomb\nconstraint", "1"],
    ["2\noneplustwo\nninemodsix", "0"],
    ["5\nabaaaaaaaa\noneplustwo\naaaaaaaaba\ntwoplusone\naaaabaaaaa", "4"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(main(input).toString()).toBe(output);
    });
  });
}
