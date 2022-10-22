// B - Line Sensor
// https://atcoder.jp/contests/abc274/tasks/abc274_b
// 2022-10-22T12:03:06.327Z

export function main(input: string) {
  const C = input.split(/\n/).slice(1);

  const sum = Array(C[0].length).fill(0);
  for (const row of C) {
    let i = 0;
    for (const ch of row) {
      if (ch == "#") sum[i]++;
      i++;
    }
  }
  return sum.join(" ");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 4\n#..#\n.#.#\n.#.#", "1 2 0 3"],
    ["3 7\n.......\n.......\n.......", "0 0 0 0 0 0 0"],
    ["8 3\n.#.\n###\n.#.\n.#.\n.##\n..#\n##.\n.##", "2 7 4"],
    [
      "5 47\n.#..#..#####..#...#..#####..#...#...###...#####\n.#.#...#.......#.#...#......##..#..#...#..#....\n.##....#####....#....#####..#.#.#..#......#####\n.#.#...#........#....#......#..##..#...#..#....\n.#..#..#####....#....#####..#...#...###...#####",
      "0 5 1 2 2 0 0 5 3 3 3 3 0 0 1 1 3 1 1 0 0 5 3 3 3 3 0 0 5 1 1 1 5 0 0 3 2 2 2 2 0 0 5 3 3 3 3",
    ],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
