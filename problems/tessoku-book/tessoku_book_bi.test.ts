// A61 - Adjacent Vertices
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_bi
// 2022-11-02T14:17:03.390Z

export function main(input: string) {
  const [[N, M], ...edges] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  const vertices = [...Array(N)].map(() => []);

  for (const [a, b] of edges) {
    vertices[a - 1].push(b);
    vertices[b - 1].push(a);
  }

  return vertices.map((ad, i) => `${i + 1}: {${ad.join(", ")}}`).join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5 4\n1 2\n2 3\n3 4\n3 5", "1: {2}\n2: {1, 3}\n3: {2, 4, 5}\n4: {3}\n5: {3}"],
    ["15 30\n6 9\n9 10\n2 9\n9 12\n2 14\n1 4\n4 6\n1 3\n4 14\n1 6\n9 11\n2 6\n3 9\n5 9\n4 9\n11 15\n1 13\n4 13\n8 9\n9 13\n5 15\n3 5\n8 10\n2 4\n9 14\n1 9\n2 8\n6 13\n7 9\n9 15", "1: {3, 4, 6, 9, 13}\n2: {4, 6, 8, 9, 14}\n3: {1, 5, 9}\n4: {1, 2, 6, 9, 13, 14}\n5: {3, 9, 15}\n6: {1, 2, 4, 9, 13}\n7: {9}\n8: {2, 9, 10}\n9: {1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15}\n10: {8, 9}\n11: {9, 15}\n12: {9}\n13: {1, 4, 6, 9}\n14: {2, 4, 9}\n15: {5, 9, 11}"],
  ])("example %#", (input, expected) => {
    const normalizeLine = (line) => {
      const [n, data] = line.match(/(\d+): {([\s\d,]*)}/).slice(1);
      const nums = data
        .split(/[,\s]+/)
        .map(Number)
        .sort((a, b) => a - b);
      return `${n}: {${nums.join(", ")}}`;
    };
    const normalize = (data: string) => data.split(/\n/).map(normalizeLine).join("\n");

    expect(normalize(main(input).toString())).toBe(normalize(expected));
  });
}
