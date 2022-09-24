// A - Fairness
// https://atcoder.jp/contests/agc024/tasks/agc024_a
// 2022-09-24T11:35:35.301Z

/*
function main(input = "") {
  let [a, b, c, k] = input.split(/\s/).map(Number);

  for (let i = 0; i < k; i++) {
    [a, b, c] = [
      b + c,
      a + c,
      a + b,
    ];
  }

  const answer = a - b;
  return answer < 10 ** 18 ? answer : "Unfair"; //あふれるって
}
*/

// ATCODER入門 P.210参考
function main(input = "") {
  const [a, b, _, k] = input.split(/\s/);
  return BigInt(k) & 1n ? b - a : a - b;
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["1 2 3 1", "1"],
    ["2 3 2 0", "-1"],
    //["1000000000 1000000000 1000000000 1000000000000000000", "0"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
