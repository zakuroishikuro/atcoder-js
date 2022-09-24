// 001 - Print 5+N
// https://atcoder.jp/contests/math-and-algorithm/tasks/math_and_algorithm_a
// 2022-09-24T09:31:54.782Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

function main(input = "") {
  return 5 + +input;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["2", "7"],
    ["4", "9"],
    ["8", "13"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
