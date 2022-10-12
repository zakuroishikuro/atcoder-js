// B - Christmas Eve Eve
// https://atcoder.jp/contests/abc115/tasks/abc115_b
// 2022-09-25T08:43:03.515Z

export function main(input: string) {
  const prices = input.split(/\s/).map(Number).slice(1);

  const max = Math.max(...prices);
  const sum = prices.reduce((a, b) => a + b);
  return sum - max / 2;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n4980\n7980\n6980", "15950"],
    ["4\n4320\n4320\n4320\n4320", "15120"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
