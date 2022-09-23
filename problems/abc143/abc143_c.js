// C - Slimes
// https://atcoder.jp/contests/abc143/tasks/abc143_c
// 2022-09-23T13:48:44.600Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const slimes = input.split(/\s/)[1];
  return slimes.replace(/(.)\1+/g, "$1").length;
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["10\naabbbbaaca", "5"],
    ["5\naaaaa", "1"],
    ["20\nxxzaffeeeeddfkkkkllq", "10"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
