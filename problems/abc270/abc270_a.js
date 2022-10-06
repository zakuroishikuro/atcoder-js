// A - 1-2-4 Test
// https://atcoder.jp/contests/abc270/tasks/abc270_a
// 2022-09-24T12:00:20.122Z

function main(input = "") {
  const [a, b] = input.split(/\s/).map(Number);
  return a | b;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["1 2","3"],["5 3","7"],["0 0","0"]
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
