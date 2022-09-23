// A - Five Integers
// https://atcoder.jp/contests/abc268/tasks/abc268_a
// 2022-09-23T07:47:54.182Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  return new Set(input.split(/\s/)).size;
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    [
      "31 9 24 31 24",
      "3"
    ],
    [
      "0 0 0 0 0",
      "1"
    ]
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
