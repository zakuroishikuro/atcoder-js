// A - Growth Record
// https://atcoder.jp/contests/abc259/tasks/abc259_a
// 2022-10-26T13:20:10.126Z

export function main(input: string) {
  const [N, M, X, T, D] = input.split(/\s/).map(Number);
  // N歳のときTcm
  // X歳からは変わってない
  // X歳まではDcmずつ伸びていた
  // M歳のときは？
  if (X <= M) return T; // X歳以上なら身長は変わってない

  // X歳未満なら初期値 + M年 * Dcm
  const initialValue = T - D * X;
  return initialValue + M * D;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["38 20 17 168 3","168"],["1 0 1 3 2","1"],["100 10 100 180 1","90"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
