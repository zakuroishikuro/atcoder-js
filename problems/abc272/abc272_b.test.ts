// B - Everyone is Friends
// https://atcoder.jp/contests/abc272/tasks/abc272_b
// 2022-10-08T12:00:58.580Z

export function main(input: string) {
  const [[_N, _K], ...data] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const graph = [...Array(_N)].map(() => new Set());
  data.forEach((r) => {
    const len = r.shift();
    for (let i = 0; i < len; i++) {
      const a = r[i];
      for (let j = i + 1; j < len; j++) {
        const b = r[j];
        graph[a - 1].add(b);
        graph[b - 1].add(a);
      }
    }
  });

  return graph.every((r) => r.size == _N - 1) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 3\n2 1 2\n2 2 3\n2 1 3", "Yes"],
    ["4 2\n3 1 2 4\n3 2 3 4", "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
