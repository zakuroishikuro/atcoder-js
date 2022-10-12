// B - Counting Roads
// https://atcoder.jp/contests/abc061/tasks/abc061_b
// 2022-09-24T02:39:13.370Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

// 「同じ 2 つの都市を結ぶ道路は、1 本とは限りません。」
// ↑これ読めてなくて勝手にsetでやって失敗した

export function main(input: string) {
  const rows = input.split(/\n/).map((row) => row.split(/\s/).map(Number));
  const [verticeSize] = rows.shift();

  const graph = [...Array(verticeSize)].map(() => 0);
  rows.forEach(([a, b]) => {
    graph[--a]++;
    graph[--b]++;
  });
  return graph.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 3\n1 2\n2 3\n1 4", "2\n2\n1\n1"],
    ["2 5\n1 2\n2 1\n1 2\n2 1\n1 2", "5\n5"],
    ["8 8\n1 2\n3 4\n1 5\n2 8\n3 7\n5 2\n4 1\n6 8", "3\n3\n2\n2\n2\n1\n1\n2"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
