// A - Double Helix
// https://atcoder.jp/contests/abc122/tasks/abc122_a
// 2022-09-24T04:21:27.816Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  return { A: "T", T: "A", C: "G", G: "C" }[input];
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["A", "T"],
    ["G", "C"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
