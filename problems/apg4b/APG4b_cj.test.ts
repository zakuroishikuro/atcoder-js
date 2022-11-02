// EX13 - 平均との差
// https://atcoder.jp/contests/apg4b/tasks/APG4b_cj
// 2022-11-01T14:43:00.222Z

export function main(input: string) {
  const nums = input.split(/\s/).map(Number).slice(1);
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = Math.floor(sum / nums.length);
  return nums.map((p) => Math.abs(mean - p)).join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["3\n2 1 4", "0\n1\n2"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
