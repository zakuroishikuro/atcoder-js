// C - GeT AC
// https://atcoder.jp/contests/abc122/tasks/abc122_c
// 2022-09-24T06:35:19.945Z
// ATCODER入門 P.202

export function main(input: string) {
  const rows = input.split(/\n/).slice(1);
  const s = rows.shift().trim();
  const queries = rows.map((s) => s.trim().split(/\s/).map(Number));

  // 累積和
  const cs = Array(s.length + 1).fill(0);
  for (let i = 1; i < s.length; i++) {
    const n = cs[i] + (s.slice(i - 1, i + 1) == "AC");
    cs[i + 1] = n;
  }

  const output = queries.map(([left, right]) => {
    return cs[right] - cs[left];
  });
  return output.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["8 3\nACACTACG\n3 7\n2 3\n1 8", "2\n0\n3"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
