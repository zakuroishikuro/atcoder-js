// A10 - Resort Hotel
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_j
// 2022-10-02T14:45:29.861Z

export function main(input: string) {
  const [[roomCount], rooms, [_days], ...forbid] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const p = Array(roomCount).fill(0);
  const q = p.slice();
  for (let i = 0; i < roomCount; i++) {
    const j = roomCount - i - 1;
    p[i] = Math.max(rooms[i], p[i - 1] || 0);
    q[j] = Math.max(rooms[j], q[j + 1] || 0);
  }

  return forbid.map(([l, r]) => Math.max(p[l - 2], q[r])).join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["7\n1 2 5 5 2 3 1\n2\n3 5\n4 6", "3\n5"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
