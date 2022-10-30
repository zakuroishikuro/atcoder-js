// A - Find Takahashi
// https://atcoder.jp/contests/abc275/tasks/abc275_a
// 2022-10-29T12:00:11.758Z

export function main(input: string) {
  const bridges = input.split(/\s/).map(Number).slice(1);
  return bridges.indexOf(Math.max(...bridges)) + 1;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n50 80 70","2"],["1\n1000000000","1"],["10\n22 75 26 45 72 81 47 29 97 2","9"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
