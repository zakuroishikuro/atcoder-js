// A06 - How Many Guests?
// https://atcoder.jp/contests/tessoku-book/tasks/math_and_algorithm_ai
// 2022-10-02T11:02:46.532Z

export function main(input: string) {
  const [_, cnt, ...queries] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  let s = 0;
  const sum = [0, ...cnt].map((n) => (s += n));

  const ans = queries.map(([l, r]) => sum[r] - sum[l - 1]);
  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["10 5\n8 6 9 1 2 1 10 100 1000 10000\n2 3\n1 4\n3 9\n6 8\n1 10", "15\n24\n1123\n111\n11137"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
