// B - Prefix?
// https://atcoder.jp/contests/abc268/tasks/abc268_b
// 2022-09-23T07:49:28.330Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const [s,t] = input.split(/\s/);
  return t.startsWith(s) ? "Yes" : "No";
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    [
      "atco\natcoder",
      "Yes"
    ],
    [
      "code\natcoder",
      "No"
    ],
    [
      "abc\nabc",
      "Yes"
    ],
    [
      "aaaa\naa",
      "No"
    ]
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
