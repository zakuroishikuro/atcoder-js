// B - ATCoder
// https://atcoder.jp/contests/abc122/tasks/abc122_b
// 2022-09-24T04:24:22.588Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  return Math.max(...(input.match(/[ACGT]+/g) || [""]).map((s) => s.length));
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["ATCODER", "3"],
    ["HATAGAYA", "5"],
    ["SHINJUKU", "0"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
