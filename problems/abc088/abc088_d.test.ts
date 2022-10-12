// D - Grid Repainting
// https://atcoder.jp/contests/abc088/tasks/abc088_d
// 2022-09-28T15:44:42.349Z

export function main(input: string) {
  const rows = input.split(/\n/);
  const [_H, _W] = rows.shift().split(/\s/).map(Number);
  const field = rows;

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const dist = field.map(() => Array(_W).fill(-1));
  dist[0][0] = 0;
  const queue = [[0, 0]];
  while (queue.length > 0) {
    const [_y, _x] = queue.shift();
    const d = dist[_y][_x] + 1;
    for (const [v, h] of directions) {
      const [y, x] = [_y + v, _x + h];
      if (x < 0 || y < 0) continue; //範囲外
      if (x >= _W || y >= _H) continue; //範囲外
      if (field[y][x] == "#") continue; //ブロック
      if (dist[y][x] != -1) continue; //探索済み
      dist[y][x] = d;
      queue.push([y, x]);
    }
  }

  const shortest = dist[_H - 1][_W - 1];
  if (shortest == -1) return -1;

  let blocked = 0; // https://twitter.com/RubyLrving/status/1575489275340017664 //ほんと助かりました感謝
  if (input.match(/#/g) != null) blocked = input.match(/#/g).length;

  return _H * _W - shortest - blocked - 1;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["2 2\n..\n..", "1"],
    ["3 3\n..#\n#..\n...", "2"],
    [`50 50\n${(".".repeat(50) + "\n").repeat(50).trim()}`, "2401"],
    //[`50 50\n${([...Array(50)].map(() => [...Array(50)].map(() => Math.random() < 0.8 ? "." : "#").join("") + "\n"))}`],
    [
      "10 37\n.....................................\n...#...####...####..###...###...###..\n..#.#..#...#.##....#...#.#...#.#...#.\n..#.#..#...#.#.....#...#.#...#.#...#.\n.#...#.#..##.#.....#...#.#.###.#.###.\n.#####.####..#.....#...#..##....##...\n.#...#.#...#.#.....#...#.#...#.#...#.\n.#...#.#...#.##....#...#.#...#.#...#.\n.#...#.####...####..###...###...###..\n.....................................",
      "209",
    ],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
