// C - Distinct or Not
// https://atcoder.jp/contests/abc154/tasks/abc154_c
// 2022-09-23T12:35:03.440Z

export function main(input: string) {
  const nums = input.split(/\s/).map(Number).slice(1);
  return nums.length == new Set(nums).size ? "YES" : "NO";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5\n2 6 1 4 5", "YES"],
    ["6\n4 1 3 1 6 2", "NO"],
    ["2\n10000000 10000000", "NO"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
