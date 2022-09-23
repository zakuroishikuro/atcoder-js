// A - Curtain
// https://atcoder.jp/contests/abc143/tasks/abc143_a
// 2022-09-23T13:27:52.972Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const [a, b] = input.split(/\s/).map(Number);
  return Math.max(a - b * 2, 0);
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["12 4","4"],["20 15","0"],["20 30","0"]
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
