/// C - gacha
// https://atcoder.jp/contests/abc164/tasks/abc164_c
// 2022-09-23T12:30:49.001Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const prizes = input.split(/\s/).slice(1);
  return new Set(prizes).size;
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["3\napple\norange\napple", "2"],
    ["5\ngrape\ngrape\ngrape\ngrape\ngrape", "1"],
    ["4\naaaa\na\naaa\naa", "4"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
