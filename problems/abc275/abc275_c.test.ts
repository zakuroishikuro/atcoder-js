// C - Counting Squares
// https://atcoder.jp/contests/abc275/tasks/abc275_c
// 2022-10-29T12:05:54.858Z

// ちょっとむりあとで

export function main(input: string) {
  const vertise: number[][] = [];

  const field: boolean[][] = input.split(/\n/).map((row, i) => {
    return [...row].map((cell, j) => {
      if (cell == "#") {
        vertise.push([j, i]);
        return true;
      } else {
        return false;
      }
    });
  });

  console.log(field);

  let cnt = 0;
  vertise.forEach(([x1, y1], i) => {
    vertise.slice(i + 1).forEach(([x2, y2]) => {
      const xx = x2 - x1;
      const yy = y2 - 1;

      const x3 = x1 + xx;
      const y3 = y1 + yy;
      const x4 = x2 - xx;
      const y4 = y2 + yy;

      console.log([x1, y1], [x2, y2], [x3, y3], [x4, y4]);
      if ((field[y3] || [])[x3] && (field[y4] || [])[x4]) cnt++;
    });
  });

  return cnt;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.skip.each([
    ["##.......\n##.......\n.........\n.......#.\n.....#...\n........#\n......#..\n.........\n.........", "2"],
    [".#.......\n#.#......\n.#.......\n.........\n....#.#.#\n.........\n....#.#.#\n........#\n.........", "3"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
