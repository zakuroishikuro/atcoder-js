// B - Minesweeper
// https://atcoder.jp/contests/abc075/tasks/abc075_b
// 2022-09-23T04:33:39.251Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

// なんとなくカウンタ1次元のままやろうとして無駄に複雑になった

const posCalc = (w) => (x, y) => x < 0 || y < 0 || x >= w ? -1 : x + y * w;

const main = (input = "") => {
  let [height, width, ...field] = input.split(/\s/);
  height = +height;
  width = +width;
  field = field.map((r) => r.split(""));

  const $ = posCalc(width);
  const cnt = new Uint32Array(width * height);

  // ボムがあるときだけカウンタ計算したほうが効率いいはず
  // だけどそういう最適化は競プロにはあんま関係ないらしい
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (field[y][x] == "#") {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const _x = x + i;
            const _y = y + j;
            const idx = $(_x, _y);
            if (cnt[idx] !== undefined) {
              cnt[idx]++;
            }
          }
        }
      }
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (field[y][x] != "#") {
        field[y][x] = cnt[$(x, y)];
      }
    }
  }

  return field.map((r) => r.join("")).join("\n");
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });
  test("posCalc", () => {
    var $ = posCalc(2);
    var matrix = [0, 1, 2, 3];
    expect(matrix[$(0, 0)]).toBe(0);
    expect(matrix[$(1, 0)]).toBe(1);
    expect(matrix[$(0, 1)]).toBe(2);
    expect(matrix[$(1, 1)]).toBe(3);

    var $ = posCalc(3);
    var matrix = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    expect(matrix[$(0, 0)]).toBe(0);
    expect(matrix[$(1, 0)]).toBe(1);
    expect(matrix[$(2, 0)]).toBe(2);
    expect(matrix[$(0, 1)]).toBe(3);
    expect(matrix[$(1, 1)]).toBe(4);
    expect(matrix[$(2, 1)]).toBe(5);
    expect(matrix[$(0, 2)]).toBe(6);
    expect(matrix[$(1, 2)]).toBe(7);
    expect(matrix[$(2, 2)]).toBe(8);

    // 範囲外
    expect(matrix[$(0, 3)]).toBe(undefined);
    expect(matrix[$(3, 9)]).toBe(undefined);
    expect(matrix[$(-1, 0)]).toBe(undefined);
    expect(matrix[$(0, -1)]).toBe(undefined);
  });

  [
    [
      "3 5\n.....\n.#.#.\n.....",
      "11211\n1#2#1\n11211",
    ],
    [
      "3 5\n#####\n#####\n#####",
      "#####\n#####\n#####",
    ],
    [
      "6 6\n#####.\n#.#.##\n####.#\n.#..#.\n#.##..\n#.#...",
      "#####3\n#8#7##\n####5#\n4#65#2\n#5##21\n#4#310",
    ],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      const actual = main(input);
      expect(actual).toBe(output);
    });
  });
}
