// B - Inverse Prefix Sum
// https://atcoder.jp/contests/abc280/tasks/abc280_b
// 2022-12-03T12:01:45.257Z

export function main(input: string): number | string {
  const [N, ...S] = input.split(/\s/).map(Number);

  return S.map((n, i) => {
    const prev = i == 0 ? 0 : S[i - 1];
    return n - prev;
  }).join(" ");
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["3\n3 4 8", "3 1 4"],
    ["10\n314159265 358979323 846264338 -327950288 419716939 -937510582 97494459 230781640 628620899 -862803482", "314159265 44820058 487285015 -1174214626 747667227 -1357227521 1035005041 133287181 397839259 -1491424381"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
