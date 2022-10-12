// https://atcoder.jp/contests/abc162/tasks/abc162_b [2022-09-21T15:14:17.634Z]

// 等差数列の和
// https://www.kwansei.ac.jp/hs/z90010/sugakua/suuretu/tousasum/tousasum.htm

const sum = (last, diff = 1, first = diff) => {
  const terms = Math.floor(last / diff);
  return (2 * first + (terms - 1) * diff) * (terms / 2);
};

//const sumOfArithmeticProgressions = (first=1, terms, diff = 1) => (2 * first + (terms - 1) * diff) * (terms / 2);
//const sumOfArithmeticProgressions2 = (first=1, terms, last) => terms * (first + last) / 2;

export function main(input: string) {
  const n = +input;
  return sum(n) - sum(n, 3) - sum(n, 5) + sum(n, 15);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["15", "60"],
    ["1000000", "266666333332"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
