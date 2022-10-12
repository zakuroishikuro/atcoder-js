// A07 - Event Attendance
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_g
// 2022-10-02T11:13:48.150Z

export function main(input: string) {
  const [[d], [_n], ...rows] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const sum = Array(d + 1).fill(0);

  rows.forEach(([l, r]) => {
    sum[l] += 1;
    sum[r + 1] -= 1;
  });

  let s = 0;
  const ans = sum.slice(1, d + 1).map((c) => (s += c));

  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["8\n5\n2 3\n3 6\n5 7\n3 7\n1 5", "1\n2\n4\n3\n4\n3\n2\n0"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
