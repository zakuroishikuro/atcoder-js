// B - AcCepted
// https://atcoder.jp/contests/abc104/tasks/abc104_b
// 2022-09-23T03:49:20.043Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  return /^A[a-z]+C[a-z]+$/.test(input) ? "AC" : "WA";
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    [
      "AtCoder",
      "AC",
    ],
    [
      "ACoder",
      "WA",
    ],
    [
      "AcycliC",
      "WA",
    ],
    [
      "AtCoCo",
      "WA",
    ],
    [
      "Atcoder",
      "WA",
    ],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
