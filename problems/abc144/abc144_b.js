// B - 81
// https://atcoder.jp/contests/abc144/tasks/abc144_b
// 2022-09-23T05:38:35.157Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const n = +input;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      if (i * j == n) return "Yes";
    }
  }
  return "No";
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    [
      "10",
      "Yes",
    ],
    [
      "50",
      "No",
    ],
    [
      "81",
      "Yes",
    ],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
