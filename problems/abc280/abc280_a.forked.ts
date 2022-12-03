// A - Pawn on a Grid
// https://atcoder.jp/contests/abc280/tasks/abc280_a
// 2022-12-03T12:00:08.720Z

export function main(input: string): number | string {
  return [...input].filter(c=>c === "#").length;
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["3 5\n#....\n.....\n.##..","3"],["1 10\n..........","0"],["6 5\n#.#.#\n....#\n..##.\n####.\n..#..\n#####","16"]
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
