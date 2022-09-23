// B - Coins
// https://atcoder.jp/contests/abc087/tasks/abc087_b
// 2022-09-23T04:10:48.506Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const [c500, c100, c50, target] = input.split(/\s/).map(Number);

  let cnt = 0;
  for (let i = 0; i <= c500; i++) {
    for (let j = 0; j <= c100; j++) {
      for (let k = 0; k <= c50; k++) {
        if (500 * i + 100 * j + k * 50 == target) {
          cnt++;
        }
      }
    }
  }

  return cnt;
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    [
      "2\n2\n2\n100",
      "2",
    ],
    [
      "5\n1\n0\n150",
      "0",
    ],
    [
      "30\n40\n50\n6000",
      "213",
    ],
  ].slice(0, 2).forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(main(input).toString()).toBe(output);
    });
  });
}
