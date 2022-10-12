// B - 高橋くんと文字列圧縮
// https://atcoder.jp/contests/abc019/tasks/abc019_2
// 2022-09-23T14:15:06.865Z

export function main(input: string) {
  return input.replace(/(.)\1*/g, (m, a) => a + m.length);
}

if (require.main == module)
  console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["aabbbaad", "a2b3a2d1"],
    ["aabbbbbbbbbbbbxyza", "a2b12x1y1z1a1"],
    ["edcba", "e1d1c1b1a1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}