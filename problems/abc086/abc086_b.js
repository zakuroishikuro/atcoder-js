// B - 1 21
// https://atcoder.jp/contests/abc086/tasks/abc086_b
// 2022-09-25T00:31:16.000Z

function main(input = "") {
  const [a, b] = input.split(/\s/);
  return Number.isInteger(Math.sqrt(a + b)) ? "Yes" : "No";
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["1 21", "Yes"],
    ["100 100", "No"],
    ["12 10", "No"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
