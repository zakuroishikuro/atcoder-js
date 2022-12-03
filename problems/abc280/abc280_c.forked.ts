// C - Extra Charactor
// https://atcoder.jp/contests/abc280/tasks/abc280_c
// 2022-12-03T12:09:44.405Z

export function main(input: string): number | string {
  const [S, T] = input.split(/\s/);
 
  let idx = 0;
  [...T].some((c,i)=>{
    idx = i;
    return S[i] !== c;
  });
 
  return idx + 1;
}
 
if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["atcoder\natcorder", "5"],
    ["million\nmilllion", "5"],
    ["vvwvw\nvvvwvw", "3"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
