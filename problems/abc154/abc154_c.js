// C - Distinct or Not
// https://atcoder.jp/contests/abc154/tasks/abc154_c
// 2022-09-23T12:35:03.440Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const nums = input.split(/\s/).map(Number).slice(1);
  return nums.length == new Set(nums).size ? "YES" : "NO";
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["5\n2 6 1 4 5","YES"],["6\n4 1 3 1 6 2","NO"],["2\n10000000 10000000","NO"]
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
