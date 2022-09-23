// B - 高橋くんと文字列圧縮
// https://atcoder.jp/contests/abc019/tasks/abc019_2
// 2022-09-23T14:15:06.865Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  return input.replace(/(.)\1*/g, (m, a) => a + m.length);
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["aabbbaad", "a2b3a2d1"],
    ["aabbbbbbbbbbbbxyza", "a2b12x1y1z1a1"],
    ["edcba", "e1d1c1b1a1"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
