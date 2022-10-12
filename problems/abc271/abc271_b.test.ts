// B - Maintain Multiple Sequences
// https://atcoder.jp/contests/abc271/tasks/abc271_b
// 2022-10-01T12:01:39.936Z

export function main(input: string) {
  const data = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const [_n, _q] = data.shift();
  const nums = data.slice(0, _n).map((r) => r.slice(1));
  const queries = data.slice(_n);

  const results = [];
  for (const [r, c] of queries) {
    results.push(nums[r - 1][c - 1]);
  }

  return results.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2 2\n3 1 4 7\n2 5 9\n1 3\n2 1", "7\n5"],
    ["3 4\n4 128 741 239 901\n2 1 1\n3 314 159 26535\n1 1\n2 2\n3 3\n1 4", "128\n1\n26535\n901"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
