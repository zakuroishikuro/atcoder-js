// B - Hammer
// https://atcoder.jp/contests/abc270/tasks/abc270_b
// 2022-09-24T12:10:19.290Z
const { abs, sign } = Math;

function main(input = "") {
  const [goal, wall, hammer] = input.split(/\s/).map(Number);

  // ゴールが壁と逆方向にあればOK
  if (sign(goal) != sign(wall)) return abs(goal);

  // ゴールが壁より近ければOK
  if (abs(goal) < abs(wall)) return abs(goal);

  // ハンマーが壁と逆方向にあればOK
  if (sign(hammer) != sign(wall)) return abs(goal) + abs(hammer) * 2;

  // ハンマーが壁より遠ければNG
  if (abs(hammer) > abs(wall)) return -1;

  // ハンマーが壁より近い
  return abs(goal);
}

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["10 -10 1", "10"],
    ["20 10 -10", "40"],
    ["100 1 1000", "-1"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
