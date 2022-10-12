// D - Flipping Signs
// https://atcoder.jp/contests/abc125/tasks/abc125_d
// 2022-09-25T04:20:13.443Z

export function main(input: string) {
  const [[_n], a] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  let sum = 0;
  let minusCount = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (const n of a) {
    const value = Math.abs(n);
    sum += value;
    minusCount += +(n < 0);
    min = Math.min(min, value);
  }
  if (minusCount % 2 == 1) sum -= min * 2;
  return sum;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n-10 5 -4", "19"],
    ["5\n10 -4 -8 -11 3", "30"],
    ["11\n-1000000000 1000000000 -1000000000 1000000000 -1000000000 0 1000000000 -1000000000 1000000000 -1000000000 1000000000", "10000000000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
